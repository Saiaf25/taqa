import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const target = resolve(process.argv[2] ?? "");
if (!process.argv[2]) throw new Error("Usage: node reports/validate-report.mjs <report.html>");
const html = readFileSync(target, "utf8");
const failures = [];

const requireText = (text) => {
  if (!html.includes(text)) failures.push(`Missing required text: ${text}`);
};
const forbidText = (text) => {
  if (html.includes(text)) failures.push(`Forbidden client-facing text: ${text}`);
};

requireText('<html lang="ar" dir="rtl">');
requireText('font-family: "Thmanyah Serif Text"');
requireText('thmanyahseriftext-Regular.woff2');
requireText('thmanyahseriftext-Bold.woff2');
requireText('thmanyahseriftext-Black.woff2');
requireText('--type-display:clamp(2.75rem, 6vw, 4.5rem)');
requireText('text-wrap:balance');
requireText('max-width:68ch');
requireText('font-synthesis:none');
requireText("كلمات مفتاحية بحثية");
requireText("الترتيب في جوجل");
requireText("Ahrefs أولا");
requireText("Google Search Console");
requireText("عمل استثنائي إضافي");
requireText("دليل تركيب السخان المركزي");
requireText("دليل صيانة السخان المركزي");
requireText("تاريخ الإعداد: 1 أغسطس 2026");
requireText("2,626");
requireText("202,620");
requireText("5,461");
requireText("7.21");
requireText("المحتوى الأساسي");
requireText("المحتوى الإضافي");
requireText("المحتوى الأساسي والإضافي خلال يوليو.");
requireText("ارتفع إجمالي الكلمات المرصودة من 4,712 في يونيو إلى 5,461 في يوليو.");
requireText("وزادت الكلمات في المراكز 1–3 من 1,496 إلى 1,815، وفي المراكز 4–10 من 1,711 إلى 2,098.");
requireText("اتجاه النقرات ومرات الظهور");
requireText("وسجل يوليو 196,497 ظهورا و2,573 نقرة.");
requireText("إضافة مخصصة للعروض");
requireText("لعرض الخصومات أعلى صفحات الفئات");
requireText("عروض منشورة");
requireText("على صفحات المنتجات والفئات");
requireText("أبرز 20 كلمة مفتاحية بحثية تحسنا");
requireText("تعرض القائمة أكبر التحركات الصاعدة في Ahrefs بين 30 يونيو و31 يوليو.");
requireText('.bar-value, .rtl-number { direction:rtl');
requireText("CleanShot%202026-08-01%20at%2015.09.28%402x.png");
requireText("CleanShot%202026-08-01%20at%2015.07.17%402x.png");
requireText("CleanShot%202026-08-01%20at%2015.06.48%402x.png");
requireText("CleanShot%202026-08-01%20at%2015.08.29%402x.png");

for (const text of ["استعلامات", "الموضع", "حدود القراءة", "مصادر ومنهجية", "تأخر المعالجة", "SEOstack", "Italtherm City Class FR System", "Italtherm Time Power", "2,625", "202,465", "نقرات البحث: يونيو مقابل يوليو", "نقرات يوليو حسب الجهاز", "اتسعت قاعدة الكلمات المرصودة", "اتجاه أداء الكلمات المفتاحية البحثية", "كل المحتوى المنجز خلال يوليو في قسم واحد.", "تراجع 4.9 مركز", "ltr-number", 'dir="ltr"', "direction: ltr;"]) forbidText(text);

const sectionOrder = ["summary", "technical-readings", "search-performance", "keywords", "content-work", "extra-work", "summary-close"];
let cursor = -1;
for (const id of sectionOrder) {
  const next = html.indexOf(`<section id="${id}"`);
  if (next < 0) failures.push(`Missing section: ${id}`);
  else if (next <= cursor) failures.push(`Section out of order: ${id}`);
  cursor = next;
}

const mainArabic = (html.match(/data-scope="main" data-language="ar"/gu) ?? []).length;
const mainEnglish = (html.match(/data-scope="main" data-language="en"/gu) ?? []).length;
if (mainArabic !== 4) failures.push(`Expected 4 main Arabic pieces, found ${mainArabic}`);
if (mainEnglish !== 4) failures.push(`Expected 4 main English pieces, found ${mainEnglish}`);

for (const title of ["دليل تركيب السخان المركزي", "دليل صيانة السخان المركزي"]) {
  const mainTitleRows = [...html.matchAll(new RegExp(`<tr data-scope="main" data-language="(?:ar|en)"><td[^>]*><strong>${title}<\\/strong>`, "gu"))].length;
  if (mainTitleRows !== 2) failures.push(`Expected Arabic and English main rows for ${title}, found ${mainTitleRows}`);
}
const additionalInitiatives = (html.match(/data-scope="additional"/gu) ?? []).length;
if (additionalInitiatives !== 4) failures.push(`Expected 4 additional bilingual initiatives, found ${additionalInitiatives}`);

if (html.includes('<section id="normal-work"')) failures.push("The empty monthly-work divider must not interrupt the report outline");

const figures = [...html.matchAll(/<figure class="report-shot[^"]*">[\s\S]*?<figcaption>[\s\S]*?<strong class="figure-title">([^<]+)<\/strong>[\s\S]*?<span class="figure-comment">([^<]+)<\/span>[\s\S]*?<\/figcaption>[\s\S]*?<\/figure>/gu)];
if (figures.length !== 4) failures.push(`Expected one interpretation under each of 4 screenshots, found ${figures.length}`);
for (const [, title, comment] of figures) {
  if (comment.trim().length < 35) failures.push(`Screenshot interpretation is too short: ${title}`);
  if (comment.trim() === title.trim()) failures.push(`Screenshot interpretation repeats its title: ${title}`);
}

const technicalBlock = html.match(/<section id="technical-readings">([\s\S]*?)<\/section>/u)?.[1] ?? "";
if (!technicalBlock) failures.push("Missing technical readings block");
for (const repeatedLabel of ["كلمات مفتاحية بحثية مرصودة", "ضمن أول 3"]) {
  if (technicalBlock.includes(`<span class="label">${repeatedLabel}</span>`)) failures.push(`Technical section repeats an executive KPI: ${repeatedLabel}`);
}

const searchBlock = html.match(/<section id="search-performance">([\s\S]*?)<\/section>/u)?.[1] ?? "";
for (const repeatedLabel of ["نقرات يوليو", "ظهور يوليو"]) {
  if (searchBlock.includes(`<span class="label">${repeatedLabel}</span>`)) failures.push(`Search section repeats an executive KPI: ${repeatedLabel}`);
}
for (const value of ["2,626", "202,620"]) {
  const visibleCount = (html.match(new RegExp(`>${value.replace(",", ",")}<`, "gu")) ?? []).length;
  if (visibleCount !== 1) failures.push(`Expected ${value} to appear once as visible report text, found ${visibleCount}`);
}

const contentBlock = html.match(/<div data-report-block="content">([\s\S]*?)<\/div><!-- content-report-block:end -->/u)?.[1] ?? "";
if (!contentBlock) failures.push("Missing unified content report block");
for (const heading of ["المحتوى الأساسي", "المحتوى الإضافي"]) {
  if (!contentBlock.includes(`<h3>${heading}</h3>`)) failures.push(`Missing content subheading inside unified block: ${heading}`);
}
const additionalInsideContent = (contentBlock.match(/data-scope="additional"/gu) ?? []).length;
if (additionalInsideContent !== 4) failures.push(`Expected all 4 additional initiatives inside content block, found ${additionalInsideContent}`);
const extraWorkBlock = html.match(/<section id="extra-work"[\s\S]*?<\/section>/u)?.[0] ?? "";
if (extraWorkBlock.includes('data-scope="additional"')) failures.push("Additional content must not be repeated in the store-work section");
if (!/<span class="value rtl-number" dir="rtl">1<\/span>[\s\S]*?<span class="label">إضافة مخصصة للعروض<\/span>/u.test(extraWorkBlock)) failures.push("Missing the custom offer plugin from additional store work");
if (!/<span class="value rtl-number" dir="rtl">8<\/span>[\s\S]*?<span class="label">عروض منشورة<\/span>/u.test(extraWorkBlock)) failures.push("Expected 8 published offer placements in additional store work");
for (const removedMetric of ["منتجا تمت مراجعته", "سجل توفر", "مراجعة المتجر"]) {
  if (extraWorkBlock.includes(removedMetric)) failures.push(`Irrelevant store metric must remain removed: ${removedMetric}`);
}
const extraWorkCards = (extraWorkBlock.match(/<div class="card metric /gu) ?? []).length;
if (extraWorkCards !== 3) failures.push(`Expected 3 meaningful additional-store cards, found ${extraWorkCards}`);

const summaryCards = [...html.matchAll(/<article class="summary-metric [^"]*" data-summary-metric dir="rtl">([\s\S]*?)<\/article>/gu)];
if (summaryCards.length !== 6) failures.push(`Expected 6 executive summary metric cards, found ${summaryCards.length}`);
for (const [, card] of summaryCards) {
  if (!/<strong class="metric-value"><bdi dir="rtl">[^<]+<\/bdi><\/strong>/u.test(card)) failures.push("Executive metric is missing isolated RTL numeric markup");
}
const summaryBlock = html.match(/<section id="summary">([\s\S]*?)<\/section>/u)?.[1] ?? "";
if (!/<span class="metric-label">كلمات مفتاحية بحثية مرصودة<\/span>[\s\S]*?<bdi dir="rtl">5,461<\/bdi>[\s\S]*?<span class="metric-note neutral">Google Search Console<\/span>/u.test(summaryBlock)) {
  failures.push("Executive search-coverage KPI must be 5,461 and sourced from Google Search Console");
}
if (summaryBlock.includes("كلمات عضوية") || /<bdi dir="rtl">117<\/bdi>[\s\S]*?Ahrefs/u.test(summaryBlock)) {
  failures.push("Ahrefs organic-keyword estimates must not be used as executive search coverage");
}

const positionBlock = html.match(/<div data-report-block="positions">([\s\S]*?)<h3 style="margin-top:24px;">الصفحات الأعلى/u)?.[1] ?? "";
if (!positionBlock) failures.push("Missing isolated position block");
for (const text of ["النقرات", "الظهور", "CTR", "حجم البحث"]) {
  if (positionBlock.includes(text)) failures.push(`Position block must not contain: ${text}`);
}
const topMoverStart = positionBlock.indexOf('<div data-keyword-subsection="top-movers">');
const priorityStart = positionBlock.indexOf('<div data-keyword-subsection="priority">');
const relatedStart = positionBlock.indexOf('<div data-keyword-subsection="related">');
if (topMoverStart < 0 || priorityStart < 0 || relatedStart < 0) failures.push("Missing one or more keyword subsections");
else if (!(topMoverStart < priorityStart && priorityStart < relatedStart)) failures.push("Top movers must be the first subsection, followed by priority and related keywords");

const topMoverBlock = topMoverStart >= 0 && priorityStart > topMoverStart
  ? positionBlock.slice(topMoverStart, priorityStart)
  : "";
const topMoverRows = [...topMoverBlock.matchAll(/<tr data-top-mover="true" data-keyword="([^"]+)">/gu)];
if (topMoverRows.length < 20) failures.push(`Expected at least 20 verified Ahrefs top movers, found ${topMoverRows.length}`);
const topMoverAhrefsSources = (topMoverBlock.match(/<td data-label="المصدر"><strong>Ahrefs<\/strong><\/td>/gu) ?? []).length;
if (topMoverAhrefsSources !== topMoverRows.length) failures.push("Every top mover must identify Ahrefs as its source");
const topMoverPositiveResults = (topMoverBlock.match(/<span class="keyword-result keyword-up" data-movement="positive">تحسن [^<]+<\/span>/gu) ?? []).length;
if (topMoverPositiveResults !== topMoverRows.length) failures.push("Every top mover must show a consistent green positive result");

const topMoverKeywords = new Set(topMoverRows.map((match) => match[1]));
const laterKeywords = [
  ...positionBlock.matchAll(/data-priority-keyword="([^"]+)"/gu),
  ...positionBlock.matchAll(/data-related-keyword="([^"]+)"/gu),
].map((match) => match[1]);
for (const keyword of laterKeywords) {
  if (topMoverKeywords.has(keyword)) failures.push(`Top mover is duplicated in a later keyword subsection: ${keyword}`);
}
if (!/<strong>Central water heating<\/strong>[\s\S]*?<strong>Google Search Console<\/strong>[\s\S]*?<span class="keyword-result keyword-flat" data-movement="neutral">غير متتبعة في Ahrefs<\/span>/u.test(positionBlock)) {
  failures.push("Central water heating must use a neutral Ahrefs-absence result with Google Search Console as the fallback source");
}

const movementStyles = {
  positive: "keyword-up",
  negative: "keyword-down",
  neutral: "keyword-flat",
};
const positionResults = [...positionBlock.matchAll(/<td data-label="النتيجة"><span class="keyword-result (keyword-(?:up|down|flat))" data-movement="(positive|negative|neutral)">([^<]+)<\/span><\/td>/gu)];
if (!positionResults.length) failures.push("Position results are missing semantic movement styles");
for (const [, className, state, label] of positionResults) {
  if (className !== movementStyles[state]) failures.push(`Inconsistent movement style for ${label}: ${className}`);
  if (/(?:تحسن|دخول جديد|ظهور جديد)/u.test(label) && state !== "positive") failures.push(`Positive result is not green: ${label}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`PASS ${target}`);
console.log("Meaningful section outline, non-duplicated KPIs, screenshot interpretations, RTL metrics, ranking source wording, and content accounting verified.");
