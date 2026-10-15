import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const assets = join(here, "assets");
mkdirSync(assets, { recursive: true });
for (const weight of ["Regular", "Bold", "Black"]) {
  copyFileSync(join(here, "../august-report/assets", `thmanyahseriftext-${weight}.woff2`), join(assets, `thmanyahseriftext-${weight}.woff2`));
}

const data = {
  period: { from: "2026-09-01", to: "2026-10-15", metricsTo: "2026-10-14", septemberTo: "2026-09-30", comparedFrom: "2026-08-01", comparedTo: "2026-08-31", prepared: "2026-10-15" },
  site: {
    september: { clicks: 2408, impressions: 194768, ctr: 1.2363, position: 7.1706 },
    august: { clicks: 2550, impressions: 203341, ctr: 1.2541, position: 7.5162 },
  },
  coverage: {
    september: { total: 5320, top3: 1529, top4to10: 2456, top11plus: 1335 },
    august: { total: 5313, top3: 1741, top4to10: 2223, top11plus: 1349 },
  },
  extension: {
    october: { from: "2026-10-01", to: "2026-10-14", clicks: 1677, impressions: 113633, ctr: 1.4758, position: 6.4047, queryCoverage: { total: 4124, top3: 1145, top4to10: 2070, top11plus: 909 } },
    articles: [
      { title: "أفضل 10 سخانات غاز في مصر", date: "21 سبتمبر–14 أكتوبر", clicks: 427, impressions: 18274, position: 5.4, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
      { title: "أفضل 8 سخانات كهرباء في مصر", date: "29 سبتمبر–14 أكتوبر", clicks: 144, impressions: 11094, position: 5.9, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    ],
    devices: [
      { device: "الهاتف", clicks: 1411, impressions: 98398, position: 6.0 },
      { device: "الكمبيوتر", clicks: 253, impressions: 14331, position: 9.2 },
      { device: "الجهاز اللوحي", clicks: 13, impressions: 904, position: 6.1 },
    ],
  },
  newPages: [
    { title: "أفضل 10 سخانات غاز في مصر", date: "21 سبتمبر", clicks: 100, impressions: 4090, position: 5.1, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    { title: "أفضل 8 سخانات كهرباء في مصر", date: "29 سبتمبر", clicks: 7, impressions: 546, position: 6.1, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    { title: "حاسبة استهلاك الكهرباء", date: "18 سبتمبر", clicks: 10, impressions: 435, position: 6.1, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%A7%D8%B3%D8%AA%D9%87%D9%84%D8%A7%D9%83-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1/" },
    { title: "حاسبة حجم سخان المياه", date: "18 سبتمبر", clicks: 4, impressions: 231, position: 6.8, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%AD%D8%AC%D9%85-%D8%B3%D8%AE%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
    { title: "حاسبة قدرة مضخة المياه", date: "18 سبتمبر", clicks: 6, impressions: 302, position: 6.4, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%85%D8%B6%D8%AE%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
    { title: "حاسبة الحمل الحراري", date: "18 سبتمبر", clicks: 0, impressions: 14, position: 4.0, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%82%D8%AF%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9/" },
  ],
  devices: [
    { device: "الهاتف", augClicks: 2021, sepClicks: 1963, augImpressions: 161263, sepImpressions: 161584, sepPosition: 6.5 },
    { device: "الكمبيوتر", augClicks: 497, sepClicks: 409, augImpressions: 40464, sepImpressions: 31752, sepPosition: 10.7 },
    { device: "الجهاز اللوحي", augClicks: 32, sepClicks: 36, augImpressions: 1614, sepImpressions: 1432, sepPosition: 6.0 },
  ],
  ahrefs: {
    date: "2026-09-25", compared: "2026-08-28",
    gains: [
      { keyword: "سخان غاز اريستون ايطالي 10 لتر", from: 5, to: 1, page: "سخان أريستون غاز 10 لتر", url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D9%85%D9%8A%D8%A7%D9%87-%D8%A3%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9-%D8%B3%D8%B9%D8%A9-10-%D9%84%D8%AA%D8%B1-%D9%8A/" },
      { keyword: "تدفئه مركزيه", from: 4, to: 2, page: "التدفئة المركزية", url: "https://taqamisr.com/ar/%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A%D8%A9/" },
      { keyword: "التدفئة المركزية", from: 2, to: 1, page: "التدفئة المركزية", url: "https://taqamisr.com/ar/%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A%D8%A9/" },
      { keyword: "غلايات مركزية", from: 2, to: 1, page: "التسخين المركزي للمياه", url: "https://taqamisr.com/ar/%D8%AA%D8%B3%D8%AE%D9%8A%D9%86-%D9%85%D8%B1%D9%83%D8%B2%D9%8A-%D9%84%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
      { keyword: "nardi egypt", from: null, to: 2, page: "Nardi", url: "https://taqamisr.com/brand/nardi/" },
      { keyword: "momenta", from: null, to: 1, page: "Momenta", url: "https://taqamisr.com/brand/momenta/" },
    ],
  },
  priority: [
    { keyword: "غلايات مركزية", page: "التسخين المركزي للمياه", source: "Ahrefs", from: 2, to: 1 },
    { keyword: "تدفئة مركزية", page: "التدفئة المركزية", source: "Google Search Console", from: 4.7, to: 3.9 },
    { keyword: "central heating", page: "Central Space Heating", source: "Google Search Console", from: 10.4, to: 9.5 },
    { keyword: "غلاية تسخين مركزي", page: "التسخين المركزي للمياه", source: "Google Search Console", from: 2.0, to: 1.9 },
    { keyword: "radiators central heating", page: "Central Space Heating", source: "Google Search Console", from: 13.4, to: 11.9 },
    { keyword: "underfloor heating", page: "Underfloor Heating", source: "Google Search Console", from: 9.3, to: 9.0 },
    { keyword: "مضخات المياه", page: "فئة مضخات المياه", source: "Google Search Console", from: 20.5, to: 10.3 },
    { keyword: "غلاية مركزية", page: "التسخين المركزي للمياه", source: "Google Search Console", from: 2.6, to: 3.1 },
    { keyword: "central water heating", page: "Central Water Heating", source: "Google Search Console", from: 23.6, to: 28.6 },
    { keyword: "water pump", page: "Water Pumps", source: "Google Search Console", from: 10.3, to: 11.8 },
    { keyword: "booster pump", page: "Booster Pumps", source: "Google Search Console", from: 6.0, to: 7.5 },
    { keyword: "radiator", page: "Electric Towel Radiators", source: "Google Search Console", from: null, to: null },
  ],
  content: {
    main: [
      { type: "مقال", title: "أفضل 10 سخانات غاز في مصر", language: "العربية", date: "21 سبتمبر", url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
      { type: "مقال", title: "أفضل 8 سخانات كهرباء في مصر", language: "العربية", date: "29 سبتمبر", url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
      { type: "حاسبة", title: "حساب استهلاك الكهرباء", language: "العربية", date: "18 سبتمبر", url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%A7%D8%B3%D8%AA%D9%87%D9%84%D8%A7%D9%83-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1/" },
      { type: "حاسبة", title: "حجم السخان المناسب", language: "العربية", date: "18 سبتمبر", url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%AD%D8%AC%D9%85-%D8%B3%D8%AE%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
      { type: "حاسبة", title: "كيفية حساب قدرة موتور المياه", language: "العربية", date: "18 سبتمبر", url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%85%D8%B6%D8%AE%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
      { type: "حاسبة", title: "حساب الحمل الحراري", language: "العربية", date: "18 سبتمبر", url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%82%D8%AF%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9/" },
    ],
    additional: [
      { title: "24 صفحة فئات محسنة", detail: "13 وصفا جديدا وتحديث 11 وصفا قائما بالعربية والإنجليزية" },
    ],
  },
  store: [
    { value: 32, label: "صفحة فئة", note: "عناوين SEO وأوصاف بحث مكتملة" },
    { value: 30, label: "سجل متجر", note: "تحديثات موثقة للسعر والتوفر والتسليم" },
    { value: 2, label: "صفحتا المتجر", note: "بيانات بحث جديدة بالعربية والإنجليزية" },
    { value: 2, label: "روابط أساسية", note: "توحيد All Products مع صفحتي المتجر" },
  ],
};

const fmt = value => new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
const num = value => `<bdi class="rtl-number" dir="rtl">${value == null ? "—" : fmt(value)}</bdi>`;
const movement = (from, to) => from == null && to != null ? "new" : from == null || to == null ? "flat" : to < from ? "up" : to > from ? "down" : "flat";
const movementText = (from, to) => {
  const state = movement(from, to);
  if (state === "new") return "ظهور جديد";
  if (state === "up") return `تحسن في الترتيب: ${fmt(from)} ← ${fmt(to)}`;
  if (state === "down") return `تراجع في الترتيب: ${fmt(from)} ← ${fmt(to)}`;
  return from == null ? "لا توجد بيانات" : "دون تغيير";
};

const augustHtml = readFileSync(join(here, "../august-report/index.html"), "utf8");
const baseCss = augustHtml.match(/<style>([\s\S]*?)<\/style>/u)?.[1] ?? "";

const extraCss = `
.grid-6{grid-template-columns:repeat(3,minmax(0,1fr))}
.growth-centerpiece{text-align:center;padding:32px;margin:20px 0 22px;border:1px solid #bdd6e5;border-radius:8px;background:linear-gradient(145deg,#f5fbff,#fff)}
.growth-centerpiece .big{display:block;color:var(--taqa-blue);font-size:clamp(54px,10vw,92px);font-weight:900;line-height:.9;margin:12px 0}.growth-centerpiece p{max-width:62ch;margin:0 auto;color:var(--muted);font-size:18px}
.growth-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;max-width:700px;margin:22px auto 0}.growth-pair div{padding:16px;border:1px solid var(--line);border-radius:8px;background:#fff}.growth-pair strong{display:block;color:var(--green);font-size:30px}
.article-pair{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:24px}.article-card{padding:22px;border:1px solid var(--line);border-top:5px solid var(--green);border-radius:8px;background:#fff;text-align:right}.article-card h3{margin-bottom:8px}.article-card .article-meta{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:16px}.article-card .article-meta span{padding:10px;border:1px solid var(--line);border-radius:8px;color:var(--muted)}.article-card .article-meta strong{display:block;color:var(--green);font-size:25px}
.work-map.single{grid-template-columns:1fr}
.commercial-notice{margin-top:22px;padding:24px;border:1px solid #e7a86f;border-right:6px solid var(--taqa-orange);border-radius:8px;background:#fff8f1}.commercial-notice h3{color:#8a3f00}.commercial-notice ul{margin:0;padding-right:20px}.commercial-notice li{margin-bottom:8px}.commercial-notice strong{color:#8a3f00}
.result{display:inline-flex;padding:4px 9px;border-radius:999px;font-weight:900;font-size:13px}.result.up,.result.new{color:var(--green);background:var(--green-bg)}.result.down{color:#a43d36;background:#fff0ef}.result.flat{color:var(--muted);background:var(--soft)}
.positive{color:var(--green)!important}.negative{color:#a43d36!important}.rtl-number{direction:rtl;unicode-bidi:isolate}.priority-list li{margin-bottom:18px}.priority-list strong{color:var(--taqa-blue-dark)}
@media(max-width:1000px){.grid-6{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.grid-6,.article-pair{grid-template-columns:1fr}.article-card .article-meta{grid-template-columns:1fr}.growth-pair{grid-template-columns:1fr}.growth-centerpiece{padding:24px 16px}.table-wrap{border:0;background:transparent;overflow:visible}table.responsive{min-width:0}table.responsive thead{display:none}table.responsive,table.responsive tbody,table.responsive tr,table.responsive td{display:block;width:100%}table.responsive tr{margin-bottom:14px;border:1px solid var(--line);border-radius:8px;background:#fff;overflow:hidden}table.responsive td{display:grid;grid-template-columns:minmax(110px,42%) 1fr;gap:12px;border-bottom:1px solid var(--line);padding:12px 14px}table.responsive td:before{content:attr(data-label);color:var(--muted);font-weight:700}table.responsive td:last-child{border-bottom:0}}
`;

const keywordRows = (rows, attr) => rows.map(k => { const state = movement(k.from, k.to); return `<tr ${attr}="${k.keyword}"><td data-label="الكلمة المفتاحية البحثية"><strong>${k.keyword}</strong></td><td data-label="الصفحة">${k.url ? `<a href="${k.url}" target="_blank" rel="noopener">${k.page}</a>` : k.page}</td><td data-label="المصدر"><strong>${k.source ?? "Ahrefs"}</strong></td><td data-label="أغسطس">${num(k.from)}</td><td data-label="سبتمبر">${num(k.to)}</td><td data-label="النتيجة"><span class="result ${state}" data-movement="${state === "up" || state === "new" ? "positive" : state === "down" ? "negative" : "neutral"}">${movementText(k.from, k.to)}</span></td></tr>`; }).join("");
const deviceRows = data.devices.map(d => `<tr><td data-label="الجهاز"><strong>${d.device}</strong></td><td data-label="نقرات أغسطس">${num(d.augClicks)}</td><td data-label="نقرات سبتمبر">${num(d.sepClicks)}</td><td data-label="ظهور أغسطس">${num(d.augImpressions)}</td><td data-label="ظهور سبتمبر">${num(d.sepImpressions)}</td><td data-label="الترتيب في سبتمبر">${num(d.sepPosition)}</td></tr>`).join("");
const mainRows = data.content.main.map(c => `<tr data-scope="main" data-language="ar" data-content-type="${c.type}"><td data-label="النوع">${c.type}</td><td data-label="المحتوى"><a href="${c.url}" target="_blank" rel="noopener"><strong>${c.title}</strong></a></td><td data-label="اللغة">${c.language}</td><td data-label="تاريخ النشر">${c.date}</td><td data-label="الحالة"><span class="status">منشور</span></td></tr>`).join("");
const additionalCards = data.content.additional.map(c => `<article class="work-card extra" data-scope="additional"><h3>${c.title}</h3><p>${c.detail}</p></article>`).join("");
const storeCards = data.store.map(c => `<article class="card metric green"><span class="value">${num(c.value)}</span><span class="label">${c.label}</span><span class="note">${c.note}</span></article>`).join("");
const newClicks = data.newPages.reduce((n, p) => n + p.clicks, 0);
const newImpressions = data.newPages.reduce((n, p) => n + p.impressions, 0);
const articlePages = data.extension.articles;
const articleClicks = articlePages.reduce((n, p) => n + p.clicks, 0);
const articleImpressions = articlePages.reduce((n, p) => n + p.impressions, 0);
const octoberDeviceRows = data.extension.devices.map(d => `<tr><td data-label="الجهاز"><strong>${d.device}</strong></td><td data-label="النقرات">${num(d.clicks)}</td><td data-label="مرات الظهور">${num(d.impressions)}</td><td data-label="متوسط الترتيب في جوجل">${num(d.position)}</td></tr>`).join("");

const reportBody = `<main class="page">
<header class="cover"><div class="eyebrow">التقرير الأخير قبل تعليق العمل</div><h1>تقرير أداء SEO سبتمبر وحتى 15 أكتوبر 2026</h1><p class="cover-copy">مقالا السخانات حافظا على الصفحة الأولى وواصلا جذب النقرات، ويغطي التقرير النتائج وحالة التعاون حتى 15 أكتوبر.</p><div class="cover-meta"><span class="pill">الموقع: taqamisr.com</span><span class="pill">الفترة: 1 سبتمبر–15 أكتوبر 2026</span><span class="pill">بيانات Google حتى: 14 أكتوبر 2026</span><span class="pill">تاريخ الإعداد: 15 أكتوبر 2026</span></div></header>
<nav class="report-nav" aria-label="أقسام التقرير"><a href="#summary">ملخص التقرير</a><a href="#technical-readings">نمو المقالات</a><a href="#search-performance">أداء البحث</a><a href="#keywords">الكلمات والصفحات</a><a href="#content-work">المحتوى</a><a href="#extra-work">أعمال المتجر</a><a href="#summary-close">حالة العمل</a></nav>
<div class="content">
<section id="summary"><span class="section-label normal">الملخص التنفيذي</span><div class="section-head"><div><div class="section-kicker">النتائج حتى 15 أكتوبر</div><h2>مقالا السخانات حافظا على الصفحة الأولى ووصلا إلى ${fmt(articleClicks)} نقرة.</h2></div></div><p class="lead">منذ نشرهما، سجل المقالان ${fmt(articleClicks)} نقرة و${fmt(articleImpressions)} مرة ظهور حتى 14 أكتوبر، بمتوسط ترتيب 5.4 و5.9 في Google. ويعرض التقرير حالة العمل والسداد حتى 15 أكتوبر.</p>
<div class="grid grid-6" style="margin-top:22px">
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات المقالين</span><span class="value">${num(articleClicks)}</span><span class="note positive">حتى 14 أكتوبر</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">ظهور المقالين</span><span class="value">${num(articleImpressions)}</span><span class="note positive">منذ تاريخ النشر</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">ترتيب مقال سخانات الغاز</span><span class="value">${num(articlePages[0].position)}</span><span class="note positive">متوسط الترتيب في Google</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">ترتيب مقال سخانات الكهرباء</span><span class="value">${num(articlePages[1].position)}</span><span class="note positive">متوسط الترتيب في Google</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات 1–14 أكتوبر</span><span class="value">${num(data.extension.october.clicks)}</span><span class="note positive">معدل نقر 1.48%</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">ظهور 1–14 أكتوبر</span><span class="value">${num(data.extension.october.impressions)}</span><span class="note positive">متوسط ترتيب 6.4</span></article>
</div><div class="commercial-notice" data-commercial-status><h3>حالة التعاون والسداد</h3><ul><li><strong>سبتمبر 2026 هو آخر شهر عمل قبل تعليق الخدمة.</strong></li><li>تم إرسال فاتورة سبتمبر 2026.</li><li>سنوقف العمل بعد هذا التقرير، ولن نستأنفه إلا بعد اعتماد طاقة مصر الدفع المسبق.</li><li>التأخر الحالي في سداد المستحقات غير مقبول لاستمرار الخدمة.</li></ul></div></section>

<section id="technical-readings"><span class="section-label normal">قراءات الأداء الفني</span><div class="section-head"><div><div class="section-kicker">مقالا سبتمبر حتى 14 أكتوبر</div><h2>مقالا السخانات حافظا على الصفحة الأولى ووسعا حصتهما من الزيارات.</h2></div></div>
<div class="growth-centerpiece" data-article-centerpiece><span class="section-kicker">أفضل سخانات الغاز والكهرباء في مصر</span><span class="big">${num(articleClicks)}</span><h3>نقرة للمقالين منذ النشر</h3><p>حقق المقالان ${fmt(articleImpressions)} مرة ظهور، ووصل متوسط ترتيبهما إلى ${fmt(articlePages[0].position)} و${fmt(articlePages[1].position)} في Google حتى 14 أكتوبر.</p><div class="article-pair"><article class="article-card" data-primary-article><h3><a href="${articlePages[0].url}" target="_blank" rel="noopener">${articlePages[0].title}</a></h3><p>النتائج من 21 سبتمبر إلى 14 أكتوبر.</p><div class="article-meta"><span><strong>${num(articlePages[0].clicks)}</strong>نقرة</span><span><strong>${num(articlePages[0].impressions)}</strong>ظهور</span><span><strong>${num(articlePages[0].position)}</strong>الترتيب</span></div></article><article class="article-card" data-primary-article><h3><a href="${articlePages[1].url}" target="_blank" rel="noopener">${articlePages[1].title}</a></h3><p>النتائج من 29 سبتمبر إلى 14 أكتوبر.</p><div class="article-meta"><span><strong>${num(articlePages[1].clicks)}</strong>نقرة</span><span><strong>${num(articlePages[1].impressions)}</strong>ظهور</span><span><strong>${num(articlePages[1].position)}</strong>الترتيب</span></div></article></div></div>
<div class="compare-card" style="margin-top:22px"><h3>دليل السخان الكهربائي يتحول إلى صفحة بحث رئيسية</h3><p class="lead">الصفحة المنشورة في 26 أغسطس انتقلت من 228 مرة ظهور ونقرتين إلى 6,629 مرة ظهور و29 نقرة في سبتمبر، وتحسن متوسط ترتيبها من 8.7 إلى 8.2.</p><div class="bars"><div class="bar-row"><strong>مرات الظهور</strong><div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div><span>${num(6629)}</span></div><div class="bar-row"><strong>النقرات</strong><div class="bar-track"><div class="bar-fill green" style="width:44%"></div></div><span>${num(29)}</span></div></div></div>
<h3 style="margin-top:28px">توزيع الكلمات المفتاحية البحثية</h3><div class="grid grid-4"><article class="card metric"><span class="value">${num(5320)}</span><span class="label">كلمات مفتاحية بحثية مرصودة</span><span class="note positive">7 كلمات أكثر من أغسطس</span></article><article class="card metric orange"><span class="value">${num(1529)}</span><span class="label">ضمن أول 3</span><span class="note negative">212 كلمة أقل</span></article><article class="card metric green"><span class="value">${num(2456)}</span><span class="label">في المراكز 4–10</span><span class="note positive">233 كلمة أكثر</span></article><article class="card metric"><span class="value">${num(1335)}</span><span class="label">بعد المركز 10</span><span class="note positive">14 كلمة أقل</span></article></div><p class="data-note">استقر إجمالي التغطية البحثية، وانتقل جزء من الكلمات من الثلاثة الأولى إلى المراكز 4–10. تحتاج هذه الشريحة إلى تحسين الصفحات والروابط الداخلية حسب كل موضوع.</p></section>

<section id="search-performance"><span class="section-label normal">أداء البحث في Google</span><div class="section-head"><div><div class="section-kicker">1–30 سبتمبر مقابل 1–31 أغسطس</div><h2>نما المقالان داخل شهر تراجع فيه الإجمالي بنسبة محدودة.</h2></div></div><div class="grid grid-4"><article class="card metric orange"><span class="value">${num(2408)}</span><span class="label">نقرات سبتمبر</span><span class="note">2,550 في أغسطس</span></article><article class="card metric orange"><span class="value">${num(194768)}</span><span class="label">مرات الظهور</span><span class="note">203,341 في أغسطس</span></article><article class="card metric"><span class="value">${num(1.24)}%</span><span class="label">معدل النقر</span><span class="note">1.25% في أغسطس</span></article><article class="card metric green"><span class="value">${num(7.2)}</span><span class="label">متوسط الترتيب في جوجل</span><span class="note positive">تحسن من 7.5</span></article></div>
<h3 style="margin-top:26px">الأداء حسب الجهاز</h3><div class="table-wrap"><table class="responsive"><thead><tr><th>الجهاز</th><th>نقرات أغسطس</th><th>نقرات سبتمبر</th><th>ظهور أغسطس</th><th>ظهور سبتمبر</th><th>الترتيب في سبتمبر</th></tr></thead><tbody>${deviceRows}</tbody></table></div><p class="data-note">حافظ الهاتف على حجم ظهور قريب من أغسطس، بينما جاء معظم التراجع من الكمبيوتر. تحسن متوسط ترتيب الكمبيوتر من 12.9 إلى 10.7 رغم انخفاض الحجم.</p><div data-october-extension style="margin-top:30px"><h3>امتداد الأداء: 1–14 أكتوبر</h3><div class="grid grid-4"><article class="card metric green"><span class="value">${num(data.extension.october.clicks)}</span><span class="label">نقرات Google</span><span class="note positive">خلال 14 يوما</span></article><article class="card metric green"><span class="value">${num(data.extension.october.impressions)}</span><span class="label">مرات الظهور</span><span class="note positive">حتى 14 أكتوبر</span></article><article class="card metric green"><span class="value">${num(data.extension.october.ctr)}%</span><span class="label">معدل النقر</span><span class="note positive">أعلى من معدل سبتمبر</span></article><article class="card metric green"><span class="value">${num(data.extension.october.position)}</span><span class="label">متوسط الترتيب في جوجل</span><span class="note positive">ضمن الصفحة الأولى</span></article></div><h3 style="margin-top:24px">الأداء حسب الجهاز في أكتوبر</h3><div class="table-wrap"><table class="responsive"><thead><tr><th>الجهاز</th><th>النقرات</th><th>مرات الظهور</th><th>متوسط الترتيب في جوجل</th></tr></thead><tbody>${octoberDeviceRows}</tbody></table></div><p class="data-note">حقق المقالان 464 نقرة خلال 1–14 أكتوبر، بما يعادل 27.7% من نقرات الموقع في هذه الفترة. بيانات 15 أكتوبر ما زالت جزئية، لذلك تعتمد مؤشرات البحث هنا على آخر يوم مكتمل وهو 14 أكتوبر.</p></div></section>

<section id="keywords"><span class="section-label normal">الكلمات والصفحات</span><div class="section-head"><div><div class="section-kicker">Ahrefs أولا للترتيب، وGoogle Search Console للبدائل الموثقة</div><h2>مكاسب في التدفئة المركزية والسخانات، مع كلمات تحتاج إلى استعادة الترتيب.</h2></div></div><div data-report-block="positions"><div data-keyword-subsection="top-movers"><h3>أبرز الكلمات المفتاحية البحثية المتحسنة</h3><p class="lead">يقارن Ahrefs آخر رصد متاح في 25 سبتمبر برصد 28 أغسطس على الكمبيوتر في مصر.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>الكلمة المفتاحية البحثية</th><th>الصفحة</th><th>المصدر</th><th>أغسطس</th><th>سبتمبر</th><th>النتيجة</th></tr></thead><tbody>${keywordRows(data.ahrefs.gains, "data-keyword")}</tbody></table></div></div>
<div data-keyword-subsection="priority" style="margin-top:28px"><h3>متابعة الكلمات ذات الأولوية</h3><p class="lead">تظهر كلمات تسخين المياه والتدفئة والمضخات بمصدر واحد ومقارنة كاملة للشهرين.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>الكلمة المفتاحية البحثية</th><th>الصفحة</th><th>المصدر</th><th>أغسطس</th><th>سبتمبر</th><th>النتيجة</th></tr></thead><tbody>${keywordRows(data.priority, "data-priority-keyword")}</tbody></table></div></div></div></section>

<section id="content-work"><span class="section-label normal">المحتوى المنشور</span><div class="section-head"><div><div class="section-kicker">محتوى يخدم الاختيار والحساب</div><h2>مقالان للحسم قبل الشراء، وأربع حاسبات للاستخدام المباشر.</h2></div></div><div data-report-block="content"><div class="work-card primary" data-content-scope="main"><h3>المحتوى الأساسي</h3><p class="lead">يشمل المحتوى الأساسي في سبتمبر المقالين اللذين يتصدران نمو الشهر، والحاسبات الأربع التي تخدم قرارات الكهرباء والسخانات والمضخات والتدفئة.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>النوع</th><th>المحتوى</th><th>اللغة</th><th>تاريخ النشر</th><th>الحالة</th></tr></thead><tbody>${mainRows}</tbody></table></div></div><div class="content-subsection" data-content-scope="additional" style="margin-top:20px"><h3>المحتوى الإضافي</h3><div class="work-map single">${additionalCards}</div></div></div><!-- content-report-block:end --></section>

<section id="extra-work" class="section-divider"><span class="section-label extra">عمل استثنائي إضافي</span><div class="section-head"><div><div class="section-kicker">تطوير المتجر وجودة صفحات الفئات</div><h2>اكتملت بيانات البحث لجميع الفئات، وتحدثت بيانات المتجر.</h2></div></div><div class="grid grid-4">${storeCards}</div><p class="data-note">تغطي صفحات الفئات الآن المنتجات بوصف أوضح وروابط إلى المنتجات والأدلة المناسبة، وتمنع الروابط الأساسية تداخل صفحات All Products مع المتجر.</p></section>

<section id="summary-close"><div class="highlight" data-final-status><h2>تعليق العمل وشروط الاستئناف</h2><p class="lead">هذا هو التقرير الأخير قبل تعليق العمل مع طاقة مصر.</p><ul class="compact-list"><li><strong>تم إرسال فاتورة سبتمبر 2026.</strong></li><li>التأخر الحالي في سداد المستحقات غير مقبول لاستمرار الخدمة.</li><li>سنوقف أعمال تحسين محركات البحث والمحتوى والمتجر بعد هذا التقرير.</li><li>سنستأنف العمل بعد اعتماد طاقة مصر الدفع المسبق وسداد المستحقات القائمة.</li></ul></div></section>
<footer class="footer"><p><strong>بيانات التقرير:</strong> يغطي التقرير العمل والحالة حتى 15 أكتوبر 2026. تعتمد مؤشرات Google Search Console الممتدة على البيانات المكتملة حتى 14 أكتوبر، وتحتفظ مقارنة سبتمبر بالفترة الكاملة من 1 إلى 30 سبتمبر مقابل 1 إلى 31 أغسطس. يعتمد قسم الترتيب على Ahrefs Rank Tracker وسجلات النشر الموثقة في الموقع.</p></footer>
</div></main>`;
const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23005993'/%3E%3Cpath d='M14 34h36M32 14v36' stroke='%23e07826' stroke-width='7' stroke-linecap='round'/%3E%3C/svg%3E"><title>تقرير أداء SEO سبتمبر وحتى 15 أكتوبر 2026 | طاقة مصر</title><style>${baseCss}${extraCss}</style></head><body data-report-period="2026-09" data-report-through="2026-10-15">${reportBody}</body></html>`;
writeFileSync(join(here, "data.json"), `${JSON.stringify(data, null, 2)}\n`);
writeFileSync(join(here, "index.html"), html);
console.log(`Built ${join(here, "index.html")}`);
