# CV Decisions

Verdicts and basis labels are defined in `decisions_rules.md`.
Content quality rules (specificity, attribution, provenance) live in
`quality_criteria.md` and apply on top of everything here.

## Format and parsing

| Recommendation | Verdict | Basis |
|---|---|---|
| Single column, real text, standard section headings, contact details in the body | Do | [mechanic] parsing tests; zero cost |
| Two-column or visually "designed" CV template | Don't | [study] independent 2026 parsing test: the only layout with a critical failure (reading-order scramble on Workday) |
| Text inside images, icons, charts, skill bars | Don't | [mechanic] invisible to parsers |
| Consistent MM/YYYY date format | Do | [mechanic] strict parsers; zero cost |
| Text-based PDF as the default export; DOCX kept ready for pipelines that ask | Do | [mechanic] both parse; zero cost |
| Two pages for 14+ years of experience, page 1 self-sufficient | Do, flag once | [vendor] the only pro-two-page study is a résumé vendor (2018); no evidence two pages hurt at senior level |
| Portfolio URL as plain text near the top | Do | [inference] recruiter first pass is short; zero cost |
| No photo, no date of birth | Do | UK convention; bias mechanics; zero cost |
| British English, with the ATS spelling exception | Do | see `quality_criteria.md` |

## Content

| Recommendation | Verdict | Basis |
|---|---|---|
| Outcome or impact in every claim bullet, quantified where possible | Do | [reported] convergent HM accounts; [mechanic] criteria-based AI review cites specific evidence |
| Summary under 60 words, specific to this designer | Do | see `quality_criteria.md` |
| Mirror the JD's core skills, tools and domain terms in body text | Do | [mechanic] retrieval, not scoring — see `market_context.md` |
| Chasing a keyword-match percentage | Don't | [mechanic] no such scoring exists — see `market_context.md` |
| Full CV rewrite for each application | Ask first | [none] cost is high; light targeted tailoring covers the retrieval mechanism |
| Reference vocabulary when a JD is vague | Do | see the findability list in `market_context.md` |

## Application forms and cover letters

| Recommendation | Verdict | Basis |
|---|---|---|
| Read knockout questions before investing in an application; answer them accurately | Do | [mechanic] the main true auto-reject |
| Short tailored cover letter when a field exists and the role is a priority | Do, flag once | [study] field experiment shows a modest callback lift; many managers skip them; cost is low |
| Generic or AI-templated cover letter | Don't | [study] tailoring signal collapsed as AI adoption spread (2025); sameness risk — see `market_context.md` |