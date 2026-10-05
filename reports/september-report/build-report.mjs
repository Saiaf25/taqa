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
  period: { from: "2026-09-01", to: "2026-09-30", comparedFrom: "2026-08-01", comparedTo: "2026-08-31", prepared: "2026-10-05" },
  site: {
    september: { clicks: 2408, impressions: 194768, ctr: 1.2363, position: 7.1706 },
    august: { clicks: 2550, impressions: 203341, ctr: 1.2541, position: 7.5162 },
  },
  coverage: {
    september: { total: 5320, top3: 1529, top4to10: 2456, top11plus: 1335 },
    august: { total: 5313, top3: 1741, top4to10: 2223, top11plus: 1349 },
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
      { title: "أفضل 10 سخانات غاز في مصر", language: "العربية", date: "21 سبتمبر", url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
      { title: "أفضل 8 سخانات كهرباء في مصر", language: "العربية", date: "29 سبتمبر", url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    ],
    additional: [
      { title: "4 حاسبات عربية جديدة", detail: "الكهرباء، حجم سخان المياه، قدرة مضخة المياه، والحمل الحراري" },
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
.result{display:inline-flex;padding:4px 9px;border-radius:999px;font-weight:900;font-size:13px}.result.up,.result.new{color:var(--green);background:var(--green-bg)}.result.down{color:#a43d36;background:#fff0ef}.result.flat{color:var(--muted);background:var(--soft)}
.positive{color:var(--green)!important}.negative{color:#a43d36!important}.rtl-number{direction:rtl;unicode-bidi:isolate}.priority-list li{margin-bottom:18px}.priority-list strong{color:var(--taqa-blue-dark)}
@media(max-width:1000px){.grid-6{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:640px){.grid-6{grid-template-columns:1fr}.growth-pair{grid-template-columns:1fr}.growth-centerpiece{padding:24px 16px}.table-wrap{border:0;background:transparent;overflow:visible}table.responsive{min-width:0}table.responsive thead{display:none}table.responsive,table.responsive tbody,table.responsive tr,table.responsive td{display:block;width:100%}table.responsive tr{margin-bottom:14px;border:1px solid var(--line);border-radius:8px;background:#fff;overflow:hidden}table.responsive td{display:grid;grid-template-columns:minmax(110px,42%) 1fr;gap:12px;border-bottom:1px solid var(--line);padding:12px 14px}table.responsive td:before{content:attr(data-label);color:var(--muted);font-weight:700}table.responsive td:last-child{border-bottom:0}}
`;

const newPageRows = data.newPages.map(p => `<tr><td data-label="الصفحة"><a href="${p.url}" target="_blank" rel="noopener"><strong>${p.title}</strong></a></td><td data-label="تاريخ النشر">${p.date}</td><td data-label="النقرات">${num(p.clicks)}</td><td data-label="مرات الظهور">${num(p.impressions)}</td><td data-label="متوسط الترتيب في جوجل">${num(p.position)}</td></tr>`).join("");
const keywordRows = (rows, attr) => rows.map(k => { const state = movement(k.from, k.to); return `<tr ${attr}="${k.keyword}"><td data-label="الكلمة المفتاحية البحثية"><strong>${k.keyword}</strong></td><td data-label="الصفحة">${k.url ? `<a href="${k.url}" target="_blank" rel="noopener">${k.page}</a>` : k.page}</td><td data-label="المصدر"><strong>${k.source ?? "Ahrefs"}</strong></td><td data-label="أغسطس">${num(k.from)}</td><td data-label="سبتمبر">${num(k.to)}</td><td data-label="النتيجة"><span class="result ${state}" data-movement="${state === "up" || state === "new" ? "positive" : state === "down" ? "negative" : "neutral"}">${movementText(k.from, k.to)}</span></td></tr>`; }).join("");
const deviceRows = data.devices.map(d => `<tr><td data-label="الجهاز"><strong>${d.device}</strong></td><td data-label="نقرات أغسطس">${num(d.augClicks)}</td><td data-label="نقرات سبتمبر">${num(d.sepClicks)}</td><td data-label="ظهور أغسطس">${num(d.augImpressions)}</td><td data-label="ظهور سبتمبر">${num(d.sepImpressions)}</td><td data-label="الترتيب في سبتمبر">${num(d.sepPosition)}</td></tr>`).join("");
const mainRows = data.content.main.map(c => `<tr data-scope="main" data-language="ar"><td data-label="المحتوى"><a href="${c.url}" target="_blank" rel="noopener"><strong>${c.title}</strong></a></td><td data-label="اللغة">${c.language}</td><td data-label="تاريخ النشر">${c.date}</td><td data-label="الحالة"><span class="status">منشور</span></td></tr>`).join("");
const additionalCards = data.content.additional.map(c => `<article class="work-card extra" data-scope="additional"><h3>${c.title}</h3><p>${c.detail}</p></article>`).join("");
const storeCards = data.store.map(c => `<article class="card metric green"><span class="value">${num(c.value)}</span><span class="label">${c.label}</span><span class="note">${c.note}</span></article>`).join("");
const newClicks = data.newPages.reduce((n, p) => n + p.clicks, 0);
const newImpressions = data.newPages.reduce((n, p) => n + p.impressions, 0);

const reportBody = `<main class="page">
<header class="cover"><div class="eyebrow">تقرير شهري</div><h1>تقرير أداء SEO سبتمبر 2026</h1><p class="cover-copy">الصفحات الجديدة تحقق أسرع نمو في الظهور والنقرات، مع تراجع محدود في إجمالي أداء الموقع.</p><div class="cover-meta"><span class="pill">الموقع: taqamisr.com</span><span class="pill">الفترة: 1–30 سبتمبر 2026</span><span class="pill">تاريخ الإعداد: 5 أكتوبر 2026</span></div></header>
<nav class="report-nav" aria-label="أقسام التقرير"><a href="#summary">ملخص سبتمبر</a><a href="#technical-readings">نمو الصفحات</a><a href="#search-performance">أداء البحث</a><a href="#keywords">الكلمات والصفحات</a><a href="#content-work">المحتوى</a><a href="#extra-work">أعمال المتجر</a><a href="#summary-close">الأولويات التالية</a></nav>
<div class="content">
<section id="summary"><span class="section-label normal">الملخص التنفيذي</span><div class="section-head"><div><div class="section-kicker">أهم نتيجة في سبتمبر</div><h2>المحتوى الجديد بدأ يستحوذ على مساحة بحثية ملحوظة.</h2></div></div><p class="lead">نشرنا 6 صفحات عربية جديدة خلال النصف الثاني من الشهر. جمعت هذه الصفحات ${fmt(newClicks)} نقرة و${fmt(newImpressions)} مرة ظهور قبل نهاية سبتمبر. كما تضاعف وصول دليل السخان الكهربائي المنشور في أواخر أغسطس.</p>
<div class="grid grid-6" style="margin-top:22px">
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات الصفحات الجديدة</span><span class="value">${num(newClicks)}</span><span class="note positive">5.3% من نقرات سبتمبر</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">ظهور الصفحات الجديدة</span><span class="value">${num(newImpressions)}</span><span class="note positive">خلال فترات نشر قصيرة</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات دليل سخانات الغاز</span><span class="value">${num(100)}</span><span class="note positive">خلال 10 أيام</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات دليل السخان الكهربائي</span><span class="value">${num(29)}</span><span class="note positive">مقابل 2 في أغسطس</span></article>
<article class="card metric orange" data-summary-metric dir="rtl"><span class="label">إجمالي نقرات Google</span><span class="value">${num(2408)}</span><span class="note negative">انخفاض 5.6%</span></article>
<article class="card metric orange" data-summary-metric dir="rtl"><span class="label">إجمالي مرات الظهور</span><span class="value">${num(194768)}</span><span class="note negative">انخفاض 4.2%</span></article>
</div></section>

<section id="technical-readings"><span class="section-label normal">قراءات الأداء الفني</span><div class="section-head"><div><div class="section-kicker">نمو الصفحات الجديدة</div><h2>الصفحات الجديدة أصبحت محرك النمو الأوضح.</h2></div></div>
<div class="growth-centerpiece" data-growth-centerpiece><span class="section-kicker">6 صفحات نشرت بين 18 و29 سبتمبر</span><span class="big">${num(newClicks)}</span><h3>نقرة من Google قبل نهاية الشهر</h3><p>سجل دليل سخانات الغاز وحده 100 نقرة، وبدأت الحاسبات الأربع الظهور على كلمات بحثية مرتبطة بالكهرباء والسخانات والمضخات.</p><div class="growth-pair"><div><strong>${num(newImpressions)}</strong><span>مرة ظهور</span></div><div><strong>${num(5.3)}%</strong><span>من نقرات الموقع</span></div></div></div>
<div class="table-wrap"><table class="responsive"><thead><tr><th>الصفحة الجديدة</th><th>تاريخ النشر</th><th>النقرات</th><th>مرات الظهور</th><th>متوسط الترتيب في جوجل</th></tr></thead><tbody>${newPageRows}</tbody></table></div>
<div class="compare-card" style="margin-top:22px"><h3>دليل السخان الكهربائي يتحول إلى صفحة بحث رئيسية</h3><p class="lead">الصفحة المنشورة في 26 أغسطس انتقلت من 228 مرة ظهور ونقرتين إلى 6,629 مرة ظهور و29 نقرة في سبتمبر، وتحسن متوسط ترتيبها من 8.7 إلى 8.2.</p><div class="bars"><div class="bar-row"><strong>مرات الظهور</strong><div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div><span>${num(6629)}</span></div><div class="bar-row"><strong>النقرات</strong><div class="bar-track"><div class="bar-fill green" style="width:44%"></div></div><span>${num(29)}</span></div></div></div>
<h3 style="margin-top:28px">توزيع الكلمات المفتاحية البحثية</h3><div class="grid grid-4"><article class="card metric"><span class="value">${num(5320)}</span><span class="label">كلمات مفتاحية بحثية مرصودة</span><span class="note positive">7 كلمات أكثر من أغسطس</span></article><article class="card metric orange"><span class="value">${num(1529)}</span><span class="label">ضمن أول 3</span><span class="note negative">212 كلمة أقل</span></article><article class="card metric green"><span class="value">${num(2456)}</span><span class="label">في المراكز 4–10</span><span class="note positive">233 كلمة أكثر</span></article><article class="card metric"><span class="value">${num(1335)}</span><span class="label">بعد المركز 10</span><span class="note positive">14 كلمة أقل</span></article></div><p class="data-note">استقر إجمالي التغطية البحثية، وانتقل جزء من الكلمات من الثلاثة الأولى إلى المراكز 4–10. تحتاج هذه الشريحة إلى تحسين الصفحات والروابط الداخلية حسب كل موضوع.</p></section>

<section id="search-performance"><span class="section-label normal">أداء البحث في Google</span><div class="section-head"><div><div class="section-kicker">1–30 سبتمبر مقابل 1–31 أغسطس</div><h2>نمت الصفحات الجديدة داخل شهر تراجع فيه الإجمالي بنسبة محدودة.</h2></div></div><div class="grid grid-4"><article class="card metric orange"><span class="value">${num(2408)}</span><span class="label">نقرات سبتمبر</span><span class="note">2,550 في أغسطس</span></article><article class="card metric orange"><span class="value">${num(194768)}</span><span class="label">مرات الظهور</span><span class="note">203,341 في أغسطس</span></article><article class="card metric"><span class="value">${num(1.24)}%</span><span class="label">معدل النقر</span><span class="note">1.25% في أغسطس</span></article><article class="card metric green"><span class="value">${num(7.2)}</span><span class="label">متوسط الترتيب في جوجل</span><span class="note positive">تحسن من 7.5</span></article></div>
<h3 style="margin-top:26px">الأداء حسب الجهاز</h3><div class="table-wrap"><table class="responsive"><thead><tr><th>الجهاز</th><th>نقرات أغسطس</th><th>نقرات سبتمبر</th><th>ظهور أغسطس</th><th>ظهور سبتمبر</th><th>الترتيب في سبتمبر</th></tr></thead><tbody>${deviceRows}</tbody></table></div><p class="data-note">حافظ الهاتف على حجم ظهور قريب من أغسطس، بينما جاء معظم التراجع من الكمبيوتر. تحسن متوسط ترتيب الكمبيوتر من 12.9 إلى 10.7 رغم انخفاض الحجم.</p></section>

<section id="keywords"><span class="section-label normal">الكلمات والصفحات</span><div class="section-head"><div><div class="section-kicker">Ahrefs أولا للترتيب، وGoogle Search Console للبدائل الموثقة</div><h2>مكاسب في التدفئة المركزية والسخانات، مع كلمات تحتاج إلى استعادة الترتيب.</h2></div></div><div data-report-block="positions"><div data-keyword-subsection="top-movers"><h3>أبرز الكلمات المفتاحية البحثية المتحسنة</h3><p class="lead">يقارن Ahrefs آخر رصد متاح في 25 سبتمبر برصد 28 أغسطس على الكمبيوتر في مصر.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>الكلمة المفتاحية البحثية</th><th>الصفحة</th><th>المصدر</th><th>أغسطس</th><th>سبتمبر</th><th>النتيجة</th></tr></thead><tbody>${keywordRows(data.ahrefs.gains, "data-keyword")}</tbody></table></div></div>
<div data-keyword-subsection="priority" style="margin-top:28px"><h3>متابعة الكلمات ذات الأولوية</h3><p class="lead">تظهر كلمات تسخين المياه والتدفئة والمضخات بمصدر واحد ومقارنة كاملة للشهرين.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>الكلمة المفتاحية البحثية</th><th>الصفحة</th><th>المصدر</th><th>أغسطس</th><th>سبتمبر</th><th>النتيجة</th></tr></thead><tbody>${keywordRows(data.priority, "data-priority-keyword")}</tbody></table></div></div></div></section>

<section id="content-work"><span class="section-label normal">المحتوى المنشور</span><div class="section-head"><div><div class="section-kicker">محتوى يخدم الاختيار والمقارنة</div><h2>أدلة شراء جديدة، وحاسبات تجيب عن أسئلة العميل قبل الشراء.</h2></div></div><div data-report-block="content"><div class="work-card primary" data-content-scope="main"><h3>المحتوى الأساسي</h3><p class="lead">نشرنا دليلين عربيين لمقارنة سخانات الغاز والكهرباء المنشورة في المتجر، وربطناهما بصفحات المنتجات والفئات.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>المحتوى</th><th>اللغة</th><th>تاريخ النشر</th><th>الحالة</th></tr></thead><tbody>${mainRows}</tbody></table></div><p class="data-note">نشرنا النسختين العربيتين في سبتمبر. لم تنشر النسخ الإنجليزية خلال الشهر.</p></div><div class="content-subsection" data-content-scope="additional" style="margin-top:20px"><h3>المحتوى الإضافي</h3><div class="work-map">${additionalCards}</div><p class="data-note">الحاسبات الأربع منشورة بالعربية. لم تنشر نسخها الإنجليزية خلال سبتمبر.</p></div></div><!-- content-report-block:end --></section>

<section id="extra-work" class="section-divider"><span class="section-label extra">عمل استثنائي إضافي</span><div class="section-head"><div><div class="section-kicker">تطوير المتجر وجودة صفحات الفئات</div><h2>اكتملت بيانات البحث لجميع الفئات، وتحدثت بيانات المتجر.</h2></div></div><div class="grid grid-4">${storeCards}</div><p class="data-note">تغطي صفحات الفئات الآن المنتجات بوصف أوضح وروابط إلى المنتجات والأدلة المناسبة، وتمنع الروابط الأساسية تداخل صفحات All Products مع المتجر.</p></section>

<section id="summary-close"><div class="highlight"><h2>أولويات المرحلة التالية</h2><ol class="priority-list"><li><strong>اعتماد خطة إعادة بناء صفحات الحلول والخدمات:</strong> نبدأ بصفحات تسخين المياه والتدفئة المركزية، ثم نستكمل كل حل وخدمة بالعربية والإنجليزية. أرسلنا تصور صفحة التسخين المركزي للمياه في 12 أغسطس وتابعنا في 15 أغسطس. يحتاج التنفيذ إلى موافقة طاقة مصر على التصور الأول ومسار إعادة البناء. <a href="https://cleanshot.com/share/XQJqslyl" target="_blank" rel="noopener">مراجعة التصور</a>.</li><li><strong>توسيع نمو الصفحات الجديدة:</strong> نضيف روابط من الفئات والمنتجات ذات الصلة، ونحسن عناوين النتائج للصفحات التي حققت ظهورا مرتفعا ونسبة نقر منخفضة.</li><li><strong>استكمال التغطية الإنجليزية:</strong> ننشر النسخ الإنجليزية من دليلي السخانات، ثم نحدد أولوية ترجمة الحاسبات وفق فرص البحث.</li><li><strong>استعادة كلمات المضخات والتسخين:</strong> نراجع صفحات water pump وbooster pump وcentral water heating، ونربطها بالفئات والمنتجات الصحيحة.</li></ol></div></section>
<footer class="footer"><p><strong>بيانات التقرير:</strong> Google Search Console للفترة من 1 إلى 30 سبتمبر مقابل 1 إلى 31 أغسطس، وAhrefs Rank Tracker لآخر رصد متاح في 25 سبتمبر مقابل 28 أغسطس، وسجلات النشر الموثقة في الموقع.</p></footer>
</div></main>`;
const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>تقرير أداء SEO سبتمبر 2026 | طاقة مصر</title><style>${baseCss}${extraCss}</style></head><body data-report-period="2026-09">${reportBody}</body></html>`;
writeFileSync(join(here, "data.json"), `${JSON.stringify(data, null, 2)}\n`);
writeFileSync(join(here, "index.html"), html);
console.log(`Built ${join(here, "index.html")}`);
