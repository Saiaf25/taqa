# Taqa Misr monthly report contract

This file is the canonical contract for every monthly Taqa Misr SEO report.

## Presentation

- Reuse the approved June report visual system: Taqa colors, Thmanyah Serif Text, Arabic RTL layout, navigation, responsive tables, and print rules.
- Preserve the three approved Thmanyah Serif Text `.woff2` files. Use a restrained semantic type scale: black weight for display headings and key values, bold for subheadings and interface labels, and regular weight for body/supporting copy.
- Balance short headings, keep body text at a 16px floor with unitless 1.5–1.6 line-height, and cap explanatory copy around 60–75 characters per line.
- Numeric values inside Arabic report text, cards, and tables must use RTL direction and align with the Arabic reading edge. Preserve Western digit order with bidi isolation, but never force these values into `dir="ltr"` containers.
- Use direct client-facing Arabic. Do not publish internal reasoning, collection mechanics, caveats, source reconciliation, platform operations, or implementation notes.
- Give every screenshot one concise interpretation directly beneath it. The interpretation must add a decision or implication, not repeat the title or visible numbers.
- State each metric or conclusion once in the client-facing narrative. Do not repeat executive KPIs in later metric cards, and do not recreate a chart when the same comparison is already shown in a supplied screenshot.
- Use `كلمات مفتاحية بحثية`, never `استعلامات`.
- Use `الترتيب في جوجل`, never `الموضع`.

## Data ownership

- Total search-query or keyword coverage and every positional bucket in that distribution must come from the same Google Search Console-derived query-distribution dataset and its reviewed dashboard screenshot, never from Ahrefs. In July 2026 this is 5,461 total, 1,815 in positions 1–3, and 2,098 in positions 4–10.
- Never present the Ahrefs organic-keyword estimate (`117`) or its top-three estimate (`50`) as the site's total search-query coverage or any bucket within that coverage in this or any future Taqa Misr report. Use Ahrefs for individual keyword rankings, ranking movement, and link metrics, not for these distribution KPIs.
- Google rankings and ranking movement come from Ahrefs first.
- When Ahrefs has no position for an exact keyword, use Google Search Console as the fallback and identify the source in that row.
- If an exact priority keyword is not tracked in Ahrefs, label that limitation neutrally in the result rather than presenting the Google Search Console average-position change as an Ahrefs ranking result.
- When neither source has a ranking, display `—`.
- Position tables contain only the keyword, related page, source, compared positions, and movement. Do not include clicks, impressions, CTR, or search volume in a position table.
- Apply the same movement colors in every position table: green for an improved or newly appearing ranking, warning color for a declined or lost ranking, and neutral color for unchanged or unavailable data.
- Google Search Console may still be used for clicks, impressions, CTR, pages, and devices in their own performance sections.
- Priority keywords supplied by the client remain in a dedicated subsection immediately after the verified top movers and before broader related examples.
- Within the July keyword area, show at least 20 verified improving keywords from Ahrefs Rank Tracker first, ordered by positions gained between 30 June and 31 July. Do not repeat a top-mover keyword in the later priority or related subsections.

## Content accounting

- The monthly main scope is counted as 4 Arabic pieces plus 4 English pieces: 8 main pieces in total.
- Every remaining content or product page is listed separately as additional work.
- Never collapse the main scope into four bilingual initiatives in the client report.
- Do not credit a page again in a later monthly report after it has already been counted in an earlier report.
- For July 2026, the two central-water-heater articles and their English translations are main content; Italtherm products already credited previously must not appear.
- Present main and additional content inside one content section under two adjacent subheadings: `المحتوى الأساسي` and `المحتوى الإضافي`. Keep store operations in the later exceptional-work section.
- The July 2026 reporting window is 1–31 July, with the corrected report prepared on 1 August 2026.
- July additional store work includes one custom offer-and-discount plugin and eight published offer placements across product and category pages.
- Do not show the 116-product review metric or the 71 Planika availability records in the July client report; they are not meaningful client-facing highlights. Keep the shipping update, custom offer tool, and eight published offers.

## Section order

1. Executive summary
2. Technical search visibility
3. Google Search performance
4. Priority and related keywords with their pages
5. Main and additional content under one section
6. Additional store or temporary work
7. Next focus

## Publishing

- Push completed Taqa Misr reports directly to `main`; do not stop at a feature branch or pull-request link.
- Wait for the GitHub Pages workflow triggered by the `main` push and require a successful deployment.
- Verify and return the exact live report URL, not the repository tree, branch URL, or reports root.

The validator must pass before the report is presented as complete.
