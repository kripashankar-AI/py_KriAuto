#!/usr/bin/env node
/**
 * Extract ```mermaid fenced blocks from a markdown file, render each with
 * @mermaid-js/mermaid-cli (mmdc), and emit a new markdown file where the
 * fenced blocks are replaced with <img> tags pointing to the generated SVGs.
 */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const [, , inputArg, outputArg, imgDirArg] = process.argv;
if (!inputArg || !outputArg) {
  console.error('Usage: node render-mermaid.js <input.md> <output.md> [imgDir]');
  process.exit(1);
}

const inputPath = path.resolve(inputArg);
const outputPath = path.resolve(outputArg);
const imgDir = path.resolve(imgDirArg || path.join(path.dirname(outputPath), 'diagrams'));
fs.mkdirSync(imgDir, { recursive: true });

const md = fs.readFileSync(inputPath, 'utf8');

const puppeteerConfigPath = path.join(os.tmpdir(), `mmdc-pptr-${process.pid}.json`);
fs.writeFileSync(puppeteerConfigPath, JSON.stringify({ args: ['--no-sandbox'] }));

const mermaidConfigPath = path.join(os.tmpdir(), `mmdc-cfg-${process.pid}.json`);
fs.writeFileSync(
  mermaidConfigPath,
  JSON.stringify({
    theme: 'default',
    themeVariables: {
      fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif',
      primaryColor: '#e0e7ef',
      primaryTextColor: '#0f172a',
      primaryBorderColor: '#0f4c81',
      lineColor: '#334155',
      fontSize: '14px',
    },
    flowchart: { htmlLabels: true, curve: 'basis' },
  })
);

const fenceRe = /```mermaid\r?\n([\s\S]*?)```/g;
let idx = 0;
const rendered = md.replace(fenceRe, (_match, code) => {
  idx += 1;
  const base = `diagram-${String(idx).padStart(2, '0')}`;
  const mmdPath = path.join(imgDir, `${base}.mmd`);
  const svgPath = path.join(imgDir, `${base}.svg`);
  fs.writeFileSync(mmdPath, code);

  console.log(`Rendering diagram ${idx} -> ${path.relative(process.cwd(), svgPath)}`);
  try {
    execFileSync(
      process.platform === 'win32' ? 'npx.cmd' : 'npx',
      [
        '--yes',
        '@mermaid-js/mermaid-cli',
        '-i', mmdPath,
        '-o', svgPath,
        '-p', puppeteerConfigPath,
        '-c', mermaidConfigPath,
        '-b', 'white',
      ],
      { stdio: 'inherit', shell: process.platform === 'win32' }
    );
  } catch (err) {
    console.error(`Failed to render diagram ${idx}:`, err.message);
    throw err;
  }

  const rel = path.relative(path.dirname(outputPath), svgPath).replace(/\\/g, '/');
  return `<div class="mermaid-diagram"><img src="${rel}" alt="Diagram ${idx}" /></div>`;
});

fs.writeFileSync(outputPath, rendered);
console.log(`\nWrote ${outputPath} with ${idx} rendered diagram(s).`);
