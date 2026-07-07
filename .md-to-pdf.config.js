module.exports = {
  launch_options: { args: ['--no-sandbox'] },
  pdf_options: {
    format: 'A4',
    margin: { top: '20mm', right: '18mm', bottom: '20mm', left: '18mm' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#888;">Delivery Health 360 — Solution Design</div>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#888;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
  },
  stylesheet_encoding: 'utf-8',
  css: `
    body { font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; font-size: 11pt; line-height: 1.55; color: #1f2937; }
    h1 { color: #0f4c81; font-size: 22pt; border-bottom: 2px solid #0f4c81; padding-bottom: 4px; margin-top: 28px; page-break-before: auto; }
    h2 { color: #0f4c81; font-size: 16pt; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin-top: 24px; }
    h3 { color: #1e3a5f; font-size: 13pt; margin-top: 18px; }
    h4 { color: #1e3a5f; font-size: 11.5pt; margin-top: 14px; }
    a { color: #1d4ed8; text-decoration: none; }
    code { font-family: 'Consolas', 'Courier New', monospace; background: #f1f5f9; padding: 1px 4px; border-radius: 3px; font-size: 9.5pt; color: #0f172a; }
    pre { background: #0f172a; color: #e2e8f0; padding: 12px 14px; border-radius: 6px; overflow-x: auto; font-size: 9pt; line-height: 1.4; page-break-inside: avoid; }
    pre code { background: transparent; color: inherit; padding: 0; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; font-size: 10pt; page-break-inside: avoid; }
    th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: left; vertical-align: top; }
    th { background: #e0e7ef; color: #0f172a; font-weight: 600; }
    tr:nth-child(even) td { background: #f8fafc; }
    blockquote { border-left: 4px solid #0f4c81; margin: 10px 0; padding: 6px 12px; background: #f1f5f9; color: #334155; }
    hr { border: 0; border-top: 1px solid #cbd5e1; margin: 20px 0; }
    ul, ol { margin: 6px 0 10px 22px; }
    li { margin: 2px 0; }
    img { max-width: 100%; }
    .mermaid-diagram { text-align: center; margin: 14px 0; page-break-inside: avoid; }
    .mermaid-diagram img { max-width: 100%; height: auto; border: 1px solid #e2e8f0; border-radius: 6px; padding: 8px; background: #ffffff; }
    .page-break { page-break-after: always; }
  `
};
