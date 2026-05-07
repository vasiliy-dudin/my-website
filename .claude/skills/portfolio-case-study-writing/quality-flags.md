# Quality Flags: Anti-Patterns and Word Quality

Load this file when auditing a draft for quality issues, checking for AI-generated text patterns, or reviewing word choice.

---

## Anti-patterns to correct

| Pattern | Example | Fix |
|---|---|---|
| Nominalisation | "the conducting of an analysis" | "I analysed" |
| Passive voice hiding authorship | "the design was developed" | "I designed" / "we designed" |
| Filler constructions | "within the scope of this project", "based on the above" | Delete |
| Clichés replacing content | "user-centric approach", "data-driven design" | Follow immediately with a concrete example, or rewrite |
| Activity without outcome | "Led usability testing sessions" | "Led 12 usability sessions (RITE method) — findings eliminated a critical navigation dead-end in the share flow" |
| Team output claimed as personal | "Led the redesign of…" (one of five designers) | State specific contribution: "Owned the information architecture for…" |
| Vague quantity | "several iterations", "a number of participants" | "3 iterations", "12 participants" |

---

## Patterns that signal AI-generated text

These patterns make writing sound assembled rather than authored. Identify and remove them before delivering a final draft. When the draft is complete, apply the `humanizer` skill to catch anything remaining.

- **Em dash overuse:** in most cases, use a comma, period, or parenthesis instead.
- **Significance inflation:** "pivotal moment", "testament to", "marks a shift" — if it is not literally pivotal, do not call it that.
- **Copula avoidance:** "serves as", "stands as", "functions as" → use "is" or "are".
- **Forced rule of three:** "clear, concise, and actionable" — if two elements make the point, stop at two.
- **Filler transitions:** "Additionally,", "Furthermore,", "It is worth noting that" — cut or rephrase.
- **Announcing instead of doing:** "Let's explore...", "Here's what you need to know" — just write the content.
- **Generic conclusions:** "the future looks bright", "exciting times ahead" — end on a specific observation or fact.
- **Consecutive bullets with the same opening word or structure.**
- **Bolding phrases inside body text without reason.**

---

## Word quality: when to flag and when to keep

The test is not whether a word appears on a list — it's whether the word is doing real work in that sentence, or just filling space.

**The rule:** If removing the word loses meaning → keep it. If removing it changes nothing → cut it or replace with something specific.

### Always flag — these carry no information in any context

`passionate` `results-driven` `visionary` `thought leader` `synergy` `rockstar` `ninja` `guru` `self-starter`

These describe personality traits, not work. They belong in no portfolio.

### Flag when used as a substitute for content — keep when accurate and specific

| Word | Flag when | Keep when |
|---|---|---|
| `data-driven` | No supporting data nearby — flag it, ask the designer whether to keep, cut, or add context | Supporting data is present nearby: "tracked via Mixpanel — a 34% drop in completion rate at step 3 led us to…" |
| `dynamic` | Describing a team or environment generically: "a dynamic team" | Describing something that literally changes: "dynamic content that adapts to user role" |
| `innovative` | Self-applied without evidence: "innovative solution" | Rare. Almost always replaceable with a specific description of what made it novel. |
| `strong` | Vague modifier: "strong communication skills" | Describing measurable quality or result: "strong signal in usability testing — 11 of 12 participants completed the task" |
| `impactful` | No metric or outcome follows | Redundant anyway if the outcome is stated — cut regardless |
| `seamless` | Describing the designed experience: "seamless onboarding" | Avoid entirely. Describe the actual user behaviour instead. |
| `holistic` | Describing your approach: "holistic design process" | Almost always replaceable with what you actually did across the system. |
| `user-centric` | Used as a standalone claim: "user-centric design" | If immediately followed by specific evidence of user involvement — though even then, the evidence alone is stronger |
| `leveraged` | Instead of a plain verb: "leveraged Figma to…" | Never — "used", "built in", "designed with" is always cleaner |
| `spearheaded` | When a simpler verb fits: "I spearheaded the redesign" | Never — "I led", "I initiated", "I proposed" is cleaner and more credible |
| `transformative` | Self-applied to your own work | Never — if the work changed something, state what changed |
| `proactive` | Describing your own behaviour generically | Rarely needed. Describe the action itself: "proposed a new information architecture before it was scoped" |
| `detail-oriented` | As a standalone personality claim | Never — if precision mattered, show it in the work description |
