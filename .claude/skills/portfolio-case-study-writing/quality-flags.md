# Quality Flags: Word Tiers

Load this file when auditing word choice or before delivering a final
draft. Anti-patterns and AI-text patterns live in
`rules/writing_guidelines.md` — this file covers only word quality.
This is the single source of truth for word tiers in this repository.

The test is not whether a word appears on a list — it is whether the
word does real work in the sentence. If removing it loses meaning →
keep. If removing it changes nothing → cut or replace with something
specific.

**Process rule: never silently delete a word from the designer's
draft.** Show the sentence, the word, why it weakens the claim, and a
rewritten version. The replacement must be evidence, not a synonym —
swapping "spearheaded" for "drove" fixes nothing.

## Tier 1 — never write, flag on sight in drafts

Empty self-description with no legitimate use in portfolio text:

passionate, results-driven, spearheaded, visionary, self-starter,
hardworking, strong communicator, team player, detail-oriented,
thought leader, synergy, rockstar, ninja, guru, go-getter, at the
intersection of, wear many hats, hit the ground running, obsessed
with, game-changer, best-in-class, world-class

## Tier 2 — flag with reason and replacement; the designer decides

| Word | Flag when | Keep when |
|---|---|---|
| `data-driven` | No supporting data nearby — flag and ask whether to keep, cut, or add context | Data is present: "tracked via Mixpanel — a 34% drop at step 3 led us to…" |
| `dynamic` | Generic praise: "a dynamic team" | Technical meaning: "dynamic content that adapts to user role" |
| `innovative` | Self-applied: "innovative solution" | Almost never — describe what was novel instead |
| `strong` | Vague modifier: "strong communication skills" | Measurable: "strong signal — 11 of 12 participants completed the task" |
| `impactful` | Always — cut; if the outcome is stated, the word is redundant | ("impact" as a noun is fine and needed) |
| `seamless`, `intuitive`, `delightful` | Claims about your own work with no evidence | Only directly followed by a test result, metric, or quote — and even then the evidence alone is stronger |
| `holistic` | Describing your approach | Replace with what you actually did across the system |
| `user-centric` | Standalone self-description | "User-centred design" as an established term is fine |
| `leveraged` | Instead of a plain verb | In portfolio prose a plain verb always exists: "used", "built in", "designed with" |
| `transformative` | Self-applied to your own work | State what changed instead |
| `proactive` | Generic self-description | Describe the action: "proposed a new IA before it was scoped" |
| `empower`, `unlock`, `elevate` | Marketing register for your own work | Rarely — name the concrete capability users gained |
| `craft` | As identity ("my craft") | As a verb for specific handwork, sparingly |