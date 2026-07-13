# Solution 01 UI Prototype

## Delivery Health 360 Command Center

**Solution:** V1 - Command Center + Playbooks  
**Purpose:** UI prototype for answering three questions fast:
1. Are our teams healthy?
2. Are our releases on track?
3. What should we do next?

---

## 1. Prototype Goal

This prototype is designed for a delivery intelligence platform that consolidates signals from JIRA, ADO, Git, CI/CD, testing tools, and communication channels into one role-aware workspace.

The UI is optimized for:
- executive visibility
- delivery risk detection
- role-specific action recommendations
- explainable health scores
- quick drill-down from portfolio to sprint and release

---

## 2. Figma File Structure

```text
Delivery Health 360
├── 00 - Cover
├── 01 - Design System
├── 02 - Executive Workspace
├── 03 - Delivery Manager Workspace
├── 04 - Scrum Master / Team Workspace
├── 05 - Engineer Workspace
├── 06 - Drill-downs (Sprint, Release, Project)
├── 07 - Action Playbook Modal
└── 08 - Prototype Flows
```

---

## 3. Visual Direction

### Theme
A dark, data-dense control-center interface with strong health semantics.

### Color Tokens

| Token | Hex | Use |
|---|---|---|
| `bg/base` | `#0B1220` | App background |
| `bg/surface` | `#141C2E` | Primary cards |
| `bg/surface-2` | `#1C2540` | Elevated cards |
| `text/primary` | `#E6EDF7` | Headings |
| `text/secondary` | `#9AA6BF` | Labels and helper text |
| `brand/primary` | `#4F7CFF` | Actions and links |
| `health/green` | `#22C55E` | Healthy state |
| `health/amber` | `#F59E0B` | Watch state |
| `health/red` | `#EF4444` | At-risk state |
| `accent/ai` | `#8B5CF6` | AI insights and summaries |
|

### Typography
- H1: 32/40
- H2: 24/32
- H3: 18/24
- Body: 14/20
- Caption: 12/16
- Mono values: JetBrains Mono 13/20

### Grid
- Desktop frame: 1440 x 900
- 12-column grid
- 24 px gutter
- 32 px outer margin
- 8 pt spacing scale

---

## 4. Core Components

1. `TopNav`
Purpose: global search, persona switcher, notifications, profile.

2. `SideNav`
Purpose: route to Portfolio, Engagements, Projects, Sprints, Releases, Actions, Settings.

3. `HealthScoreRing`
Purpose: show 0-100 health with semantic color.

4. `MetricCard`
Purpose: show KPI, delta, and sparkline.

5. `RiskChip`
Purpose: tag risks as Low, Medium, High.

6. `TrendSparkline`
Purpose: visualize 14-day movement in a compact card.

7. `HeatmapCell`
Purpose: show account or team health by dimension.

8. `ActionCard`
Purpose: connect insight to recommended action.

9. `PersonaBadge`
Purpose: indicate current role context.

10. `AISummaryPanel`
Purpose: surface grounded AI narrative and recommended next step.

---

## 5. Primary Screens

## Screen A - Executive Portfolio

**User:** BU Lead / Executive Leadership  
**Goal:** understand portfolio health in under 30 seconds.

### Layout
- top navigation with Ask Anything search
- left side navigation
- top KPI row with 4 summary cards
- account heatmap for portfolio scan
- AI briefing panel
- top predicted risks panel

### Key Widgets
- Portfolio Health Score
- At-Risk Engagement Count
- On-Time Delivery %
- Open Escalations
- Account heatmap by Sprint / Release / Project / Engineering
- AI summary panel with top 3 intervention recommendations

### Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ [Logo] Delivery Health 360   [Ask anything]    Alerts  User │
├──────┬───────────────────────────────────────────────────────┤
│ Nav  │ Portfolio Health - Q3 2026                           │
│      │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐         │
│      │ │   82   │ │   7    │ │  94%   │ │  12    │         │
│      │ │Health  │ │At-Risk │ │On-Time │ │Escalns │         │
│      │ └────────┘ └────────┘ └────────┘ └────────┘         │
│      │                                                     │
│      │ ┌─ Account Heatmap ───────┐ ┌─ AI Briefing ───────┐ │
│      │ │ Acme      G G A G       │ │ 3 accounts need     │ │
│      │ │ Globex    A R A G       │ │ attention now       │ │
│      │ │ Initech   G G G G       │ │ - Globex slip risk  │ │
│      │ │ Umbrella  R A R A       │ │ - Umbrella burnout  │ │
│      │ └─────────────────────────┘ └──────────────────────┘ │
│      │                                                     │
│      │ ┌─ Top Predicted Risks ───────────────────────────┐ │
│      │ │ Globex Release 4.2 - 78% slip risk [Playbook]  │ │
│      │ │ Umbrella Team A - Burnout signal [Playbook]    │ │
│      │ └─────────────────────────────────────────────────┘ │
└──────┴───────────────────────────────────────────────────────┘
```

---

## Screen B - Delivery Manager Project View

**User:** Delivery Manager  
**Goal:** monitor one project deeply and act on current risks.

### Layout
- project header with client and owner info
- three health rings: Sprint, Release, Project
- KPI row for commitment reliability, velocity trend, defect leakage, spillover
- sprint burnup chart
- blocker and risk feed
- release timeline with predicted slip overlay
- team capacity heat strip
- right rail for AI recommendations

### Key Actions
- apply a playbook
- snooze a recommendation
- dismiss with reason
- drill into blockers
- review release forecast confidence

---

## Screen C - Team Health Workspace

**User:** Scrum Master / Team Lead  
**Goal:** understand whether the team is healthy across flow, quality, and wellbeing.

### Layout
- large Team Health Score ring
- three sub-score cards:
  - Flow
  - Quality
  - Wellbeing
- team trend strip for cycle time, WIP age, PR queue, after-hours work
- per-engineer strip showing load, queue count, and flags

### Guardrail
No ranking table. Only supportive outlier flags.

---

## Screen D - Release Readiness View

**User:** Delivery Manager / PM / Executive  
**Goal:** answer whether the release is on track.

### Layout
- Release Readiness Index ring
- burnup chart with forecast cone
- DORA metrics panel
- blocker list with age and owner
- committed date vs predicted date with confidence

### Key Signals
- blocker age
- defect density trend
- test coverage
- deploy frequency
- change failure rate
- MTTR

---

## Screen E - Action Playbook Modal

**User:** Any operating persona  
**Goal:** convert insight into action in one step.

### Modal Contents
- title with issue summary
- evidence bullets with mini trend visuals
- ranked recommended actions
- explicit buttons:
  - Apply Selected
  - Snooze
  - Dismiss with reason

### Example
- Descope 2 lowest-priority stories
- Reassign PR reviews
- Escalate dependency to Team B

---

## Screen F - Ask Anything Overlay

**User:** All personas  
**Goal:** query the platform in natural language.

### Interaction
User enters a prompt such as:

> Show me all accounts where defect leakage rose 2 sprints in a row.

### Response Pattern
- filtered heatmap
- short narrative answer
- shareable deep link
- supporting evidence cards

---

## 6. Prototype Flows

### Flow 1 - Executive to Project Drilldown
1. Open Executive Portfolio.
2. Click a red or amber heatmap cell.
3. View account drilldown.
4. Open project workspace.
5. Inspect risks and forecast.

### Flow 2 - Risk to Action
1. Click a risk chip.
2. Open Action Playbook modal.
3. Select recommendation.
4. Click Apply Selected.
5. Show success toast: `Action logged`.

### Flow 3 - Persona Switch
1. Open persona switcher.
2. Swap from Executive to Delivery Manager.
3. Reconfigure widgets and navigation based on role.

### Flow 4 - Ask Anything
1. Press Cmd+K.
2. Enter natural-language question.
3. Show answer card and filtered view.

### Flow 5 - Team Health Expansion
1. Click Team Health ring.
2. Expand Flow, Quality, Wellbeing breakdown.
3. Inspect outlier drivers.

---

## 7. Sample Content for Frames

```text
Portfolio Health: 82  ▲ +3 vs last week
At-Risk Engagements: 7  ▼ -2
On-Time Delivery: 94%  ▲ +5
Open Escalations: 12  ▼ -4

Accounts:
Acme Corp    | Sprint 88 | Release 91 | Project 76 | Eng 84
Globex Inc.  | Sprint 71 | Release 54 | Project 68 | Eng 80
Initech Ltd. | Sprint 90 | Release 88 | Project 92 | Eng 87
Umbrella Co. | Sprint 52 | Release 66 | Project 48 | Eng 61

Team Phoenix Health Sub-scores:
Flow 78 · Quality 84 · Wellbeing 62

Release 4.2 (Globex):
Committed: Aug 14 · Predicted: Aug 22 · Confidence: 68%
Open blockers: 5 · Test coverage: 71% · Change failure: 14%
```

---

## 8. Persona to Widget Mapping

| Widget | Exec | CP | EM | DM | PM | SM | Eng | QE | BA | PMO |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Portfolio heatmap | ● | ● | ○ |  |  |  |  |  |  | ● |
| Account scorecard | ○ | ● | ● | ○ |  |  |  |  |  |  |
| Project health rings |  | ○ | ● | ● | ● | ○ |  |  |  |  |
| Sprint burnup |  |  | ○ | ● | ● | ● | ● | ● | ○ |  |
| Release readiness | ○ | ○ | ● | ● | ● | ○ | ● | ● |  |  |
| Team flow board |  |  |  | ○ | ○ | ● | ● | ● | ● |  |
| Personal PR queue |  |  |  |  |  | ○ | ● | ● |  |  |
| Test health |  |  |  | ○ | ○ | ○ | ○ | ● |  |  |
| Capacity / bench | ○ |  | ● | ● | ● | ○ |  |  |  | ● |
| Action playbook feed | ○ | ○ | ● | ● | ● | ● | ● | ● | ○ | ○ |

---

## 9. Prototype Notes

- Keep all scorecards explainable with visible formulas and drivers.
- Use semantic color consistently: green, amber, red.
- Preserve dense information without visual clutter by grouping related cards.
- Every risk should connect to at least one recommended action.
- AI content should be clearly labeled and grounded in delivery signals.
- Default desktop-first layout should degrade cleanly to tablet review mode.

---

## 10. Recommended Deliverable Output

If building this in Figma, prepare these frames first:
1. Executive Portfolio
2. Delivery Manager Project View
3. Team Health Workspace
4. Release Readiness View
5. Action Playbook Modal
6. Ask Anything Overlay
7. Design System Library
8. Prototype Interaction Flow Map
