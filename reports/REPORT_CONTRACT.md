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
- Correction of 5 September 2026: when an individual keyword declines in Ahrefs, do not publish the Ahrefs decline. Recheck that exact keyword in Google Search Console for both complete comparison periods and use the GSC comparison, clearly labeled, regardless of its direction. If comparable GSC data is unavailable, omit the keyword. Never mix an Ahrefs baseline with a GSC current value, infer a positive result, or change overall traffic/coverage/link metrics under this keyword-only rule.
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

## Next-focus priorities

- Make the closing priorities specific to the account strategy; do not use generic instructions such as converting visibility into clicks or moving all positions 4–10 into the top three.
- Lead with the water-heating and central-heating keyword clusters in Arabic and English, distinguishing terms close to the top three from terms that need ranking recovery.
- Make completion of the remaining Arabic and English product descriptions a standing priority, starting with products related to water heating and central heating.
- Connect informational guides, category pages, and product pages through relevant internal links so research journeys lead clearly to suitable products.

## Publishing

- Push completed Taqa Misr reports directly to `main`; do not stop at a feature branch or pull-request link.
- Wait for the GitHub Pages workflow triggered by the `main` push and require a successful deployment.
- Verify and return the exact live report URL, not the repository tree, branch URL, or reports root.

The validator must pass before the report is presented as complete.

## August 2026 locked evidence and adaptations

- Preserve July's seven-section flow and font assets. Report period: 1–31 August versus 1–31 July; prepared 5 September 2026.
- Use refreshed, same-period GSC comparisons: August 2,550 clicks / 203,341 impressions; July 2,703 / 209,456. Do not alter the archived July report to reconcile later data refreshes.
- The supplied September 5 distribution screenshot is the source for August coverage: 5,313 total, 1,741 top three, 2,105 positions 4–10; its July baseline is 5,694 / 1,909 / 2,174. Exclude its partial September bar from the monthly comparison.
- Last-28/30-day screenshots and undated country screenshots must not become calendar-August KPIs. Verify exact dates through live GSC.
- August Ahrefs Rank Tracker: Egypt / desktop, last available crawl August 28 compared with July 31. Keep 22 verified upward movers first, followed by the exact client-priority list and related terms requiring attention. Use GSC monthly averages for exact phrases absent in Ahrefs and for keywords declining in Ahrefs, following the correction above; zero-impression missing positions are unavailable, never rank zero. GSC averages aggregated from rounded daily positions must be labeled approximate.
- August core content: four product-description pairs (Atlantic Combi O'Pro 100, Nardi instant electric 7/8 kW, Electron gas 10 L, Nardi gas 16 L), counted as 4 Arabic + 4 English pieces. Additional: three published bilingual article pairs and 20 refreshed brand pages, counted as 26 localized pages. Verify publication status and current permalinks; stale draft records are not final-state evidence.
- Merchant Center account 5505125981: distinguish the August 28 recovery record (104 approved, 6 pending) from the September 5 status (110 approved, no rejected/limited/pending; 61 Arabic + 49 English listings). Listings are not unique product models. August product traffic: 186 impressions / 1 click. Never label the overview's combined store-and-product traffic as product-listing clicks or claim sales uplift from approval alone.
- Lead with verified wins, report material declines proportionately, and do not infer their cause. Record the outstanding client approval requested August 12 and followed up August 15 as blocking execution of the landing-page improvement, not as a proven cause of lost traffic.
- Validation command remains `node reports/validate-report.mjs reports/august-report/index.html`; it dispatches to the August assertions without weakening July's archived checks.
