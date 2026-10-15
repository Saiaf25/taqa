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
  period: { from: "2026-09-01", to: "2026-10-14", reportThrough: "2026-10-15", comparedFrom: "2026-07-19", comparedTo: "2026-08-31", days: 44, prepared: "2026-10-15" },
  site: {
    current: { clicks: 4085, impressions: 308401, ctr: 1.3246, position: 6.8884 },
    previous: { clicks: 3731, impressions: 295424, ctr: 1.2629, position: 7.4577 },
  },
  coverage: {
    current: { total: 7249, top3: 2176, top4to10: 3355, top11plus: 1718 },
    previous: { total: 6785, top3: 2322, top4to10: 2776, top11plus: 1687 },
  },
  newPages: [
    { title: "أفضل 10 سخانات غاز في مصر", type: "مقال", date: "21 سبتمبر", clicks: 427, impressions: 18274, position: 5.4, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    { title: "أفضل 8 سخانات كهرباء في مصر", type: "مقال", date: "29 سبتمبر", clicks: 144, impressions: 11094, position: 5.9, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    { title: "حاسبة استهلاك الكهرباء", type: "حاسبة", date: "18 سبتمبر", clicks: 24, impressions: 1217, position: 6.1, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%A7%D8%B3%D8%AA%D9%87%D9%84%D8%A7%D9%83-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1/" },
    { title: "حاسبة حجم سخان المياه", type: "حاسبة", date: "18 سبتمبر", clicks: 10, impressions: 569, position: 6.7, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%AD%D8%AC%D9%85-%D8%B3%D8%AE%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
    { title: "حاسبة قدرة مضخة المياه", type: "حاسبة", date: "18 سبتمبر", clicks: 8, impressions: 652, position: 6.4, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%85%D8%B6%D8%AE%D8%A9-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
    { title: "حاسبة الحمل الحراري", type: "حاسبة", date: "18 سبتمبر", clicks: 0, impressions: 33, position: 11.0, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%82%D8%AF%D8%B1%D8%A9-%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9/" },
  ],
  devices: [
    { device: "الهاتف", previousClicks: 2984, currentClicks: 3374, previousImpressions: 233939, currentImpressions: 259982, previousPosition: 6.2, currentPosition: 6.3 },
    { device: "الكمبيوتر", previousClicks: 696, currentClicks: 662, previousImpressions: 59083, currentImpressions: 46083, previousPosition: 12.6, currentPosition: 10.3 },
    { device: "الجهاز اللوحي", previousClicks: 51, currentClicks: 49, previousImpressions: 2402, currentImpressions: 2336, previousPosition: 5.7, currentPosition: 6.0 },
  ],
  ahrefs: {
    date: "2026-10-09", compared: "2026-08-28",
    gains: [
      { keyword: "underfloor heating", from: 23, to: 1, page: "Underfloor Heating Guide", url: "https://taqamisr.com/underfloor-heating-egypt-guide/" },
      { keyword: "underfloor heating system", from: 22, to: 1, page: "Underfloor Heating Guide", url: "https://taqamisr.com/underfloor-heating-egypt-guide/" },
      { keyword: "gas fireplace", from: 20, to: 1, page: "Gas Fireplaces", url: "https://taqamisr.com/product-category/fireplaces/gas/" },
      { keyword: "water pump egypt", from: 19, to: 7, page: "Water Pumps", url: "https://taqamisr.com/product-category/water-pumps/" },
      { keyword: "سخان غاز 6 لتر بدون مدخنة", from: 15, to: 3, page: "سخان أريستون غاز 6 لتر", url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D9%85%D9%8A%D8%A7%D9%87-%D8%A3%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9-%D8%B3%D8%B9%D8%A9-6-%D9%84%D8%AA%D8%B1-%D9%8A%D8%B9/" },
      { keyword: "سخان غاز بدون مدخنة", from: 18, to: 6, page: "سخان أريستون غاز 6 لتر", url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D9%85%D9%8A%D8%A7%D9%87-%D8%A3%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9-%D8%B3%D8%B9%D8%A9-6-%D9%84%D8%AA%D8%B1-%D9%8A%D8%B9/" },
      { keyword: "طلمبات رفع مياه الصرف الصحي", from: 18, to: 6, page: "مضخة صرف سولوليفت CWC-3", url: "https://taqamisr.com/ar/product/%D9%85%D8%B6%D8%AE%D8%A9-%D8%B5%D8%B1%D9%81-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87-%D8%B3%D9%88%D9%84%D9%88%D9%84%D9%8A%D9%81%D8%AA2-cwc-3-%D9%85%D9%88%D8%AA%D9%88%D8%B1-%D8%A8%D9%85%D9%81%D8%B1%D9%85/" },
      { keyword: "جراندفوس مصر", from: 11, to: 1, page: "Grundfos", url: "https://taqamisr.com/brand/grundfos/" },
      { keyword: "grundfos egypt", from: 8, to: 1, page: "جراندفوس", url: "https://taqamisr.com/ar/brand/%D8%AC%D8%B1%D8%A7%D9%86%D8%AF%D9%81%D9%88%D8%B3/" },
      { keyword: "سخان غاز اريستون ايطالي 10 لتر", from: 5, to: 1, page: "سخان أريستون غاز 10 لتر", url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D9%85%D9%8A%D8%A7%D9%87-%D8%A3%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9-%D8%B3%D8%B9%D8%A9-10-%D9%84%D8%AA%D8%B1-%D9%8A/" },
      { keyword: "سخان اتلانتك كهرباء", from: 28, to: 25, page: "سخان أتلانتيك 150 لتر", url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D8%A7%D8%AA%D9%84%D8%A7%D9%86%D8%AA%D9%8A%D9%83-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A6%D9%8A-150-%D9%84%D8%AA%D8%B1/" },
      { keyword: "pool heater", from: 3, to: 1, page: "Swimming Pool Heating", url: "https://taqamisr.com/swimming-pool-heating/" },
      { keyword: "تدفئه مركزيه", from: 4, to: 2, page: "التدفئة المركزية", url: "https://taqamisr.com/ar/%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A%D8%A9/" },
      { keyword: "دفاية مركزية", from: 3, to: 1, page: "فوائد وعيوب التدفئة المركزية", url: "https://taqamisr.com/ar/%D9%81%D9%88%D8%A7%D8%A6%D8%AF-%D9%88%D8%B9%D9%8A%D9%88%D8%A8-%D8%A7%D9%84%D8%AA%D8%AF%D9%81%D8%A6%D8%A9-%D8%A7%D9%84%D9%85%D8%B1%D9%83%D8%B2%D9%8A%D8%A9/" },
    ],
  },
  priority: [
    { keyword: "غلايات مركزية", page: "التسخين المركزي للمياه", source: "Ahrefs", from: 2, to: 1 },
    { keyword: "تدفئة مركزية", page: "التدفئة المركزية", source: "Google Search Console", from: 5.0, to: 3.7 },
    { keyword: "central heating", page: "Central Space Heating", source: "Google Search Console", from: 10.8, to: 7.2 },
    { keyword: "غلاية تسخين مركزي", page: "التسخين المركزي للمياه", source: "Google Search Console", from: 2.0, to: 2.1 },
    { keyword: "radiators central heating", page: "Central Space Heating", source: "Google Search Console", from: 11.4, to: 11.4 },
    { keyword: "underfloor heating", page: "Underfloor Heating", source: "Google Search Console", from: 8.8, to: 7.5 },
    { keyword: "مضخات المياه", page: "فئة مضخات المياه", source: "Google Search Console", from: 17.0, to: 9.8 },
    { keyword: "غلاية مركزية", page: "التسخين المركزي للمياه", source: "Google Search Console", from: 2.8, to: 2.9 },
    { keyword: "central water heating", page: "Central Water Heating", source: "Google Search Console", from: 23.4, to: 22.3 },
    { keyword: "water pump", page: "Water Pumps", source: "Google Search Console", from: 8.3, to: 10.8 },
    { keyword: "booster pump", page: "Booster Pumps", source: "Google Search Console", from: 5.4, to: 7.1 },
    { keyword: "radiator", page: "Electric Towel Radiators", source: "Google Search Console", from: 7.0, to: 7.0 },
  ],
  pageGains: [
    { page: "أفضل 10 سخانات غاز في مصر", currentClicks: 427, previousClicks: 0, currentImpressions: 18274, previousImpressions: 0, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    { page: "أفضل 8 سخانات كهرباء في مصر", currentClicks: 144, previousClicks: 0, currentImpressions: 11094, previousImpressions: 0, url: "https://taqamisr.com/ar/%D8%A3%D9%81%D8%B6%D9%84-%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%8A-%D9%85%D8%B5%D8%B1/" },
    { page: "فئة دفايات الغاز", currentClicks: 80, previousClicks: 14, currentImpressions: 1896, previousImpressions: 1050, url: "https://taqamisr.com/ar/product-category/%D8%AF%D9%81%D8%A7%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D9%87%D8%A8/%D8%AF%D9%81%D8%A7%D9%8A%D8%A7%D8%AA-%D8%BA%D8%A7%D8%B2/" },
    { page: "سخان غاز أم كهرباء", currentClicks: 61, previousClicks: 11, currentImpressions: 6736, previousImpressions: 1032, url: "https://taqamisr.com/ar/%D8%B3%D8%AE%D8%A7%D9%86-%D8%BA%D8%A7%D8%B2-%D8%A3%D9%85-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1/" },
    { page: "سخان كهرباء فوري أم تخزين", currentClicks: 47, previousClicks: 2, currentImpressions: 10320, previousImpressions: 228, url: "https://taqamisr.com/ar/%D8%B3%D8%AE%D8%A7%D9%86-%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1-%D9%81%D9%88%D8%B1%D9%8A-%D8%A3%D9%88-%D8%AA%D8%AE%D8%B2%D9%8A%D9%86%D8%9F/" },
    { page: "سخان أريستون غاز 10 لتر", currentClicks: 66, previousClicks: 23, currentImpressions: 4927, previousImpressions: 2841, url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D9%85%D9%8A%D8%A7%D9%87-%D8%A3%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9-%D8%B3%D8%B9%D8%A9-10-%D9%84%D8%AA%D8%B1-%D9%8A/" },
    { page: "فئة دفايات اللهب الكهربائية", currentClicks: 73, previousClicks: 46, currentImpressions: 2484, previousImpressions: 2243, url: "https://taqamisr.com/ar/product-category/%D8%AF%D9%81%D8%A7%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D9%87%D8%A8/electric-ar/" },
    { page: "سخان أريستون غاز 6 لتر", currentClicks: 40, previousClicks: 14, currentImpressions: 2239, previousImpressions: 1722, url: "https://taqamisr.com/ar/product/%D8%B3%D8%AE%D8%A7%D9%86-%D9%85%D9%8A%D8%A7%D9%87-%D8%A3%D8%B1%D9%8A%D8%B3%D8%AA%D9%88%D9%86-%D8%A7%D9%84%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A9-%D8%B3%D8%B9%D8%A9-6-%D9%84%D8%AA%D8%B1-%D9%8A%D8%B9/" },
    { page: "حاسبة استهلاك الكهرباء", currentClicks: 24, previousClicks: 0, currentImpressions: 1217, previousImpressions: 0, url: "https://taqamisr.com/ar/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D8%A7%D8%B3%D8%AA%D9%87%D9%84%D8%A7%D9%83-%D8%A7%D9%84%D9%83%D9%87%D8%B1%D8%A8%D8%A7%D8%A1/" },
    { page: "فئة مضخات المياه", currentClicks: 67, previousClicks: 43, currentImpressions: 5760, previousImpressions: 5835, url: "https://taqamisr.com/ar/product-category/%D9%85%D8%B6%D8%AE%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D9%8A%D8%A7%D9%87/" },
  ],
  work: {
    calculators: { posts: 4, plugin: 1, template: 1, schemaApps: 4, inboundLinks: 8, featuredImages: 4 },
    categories: { localizedDescriptions: 24, newDescriptions: 13, rewrittenDescriptions: 11, metadataPages: 32, contextualLinks: 156, generatedImages: 12 },
    catalog: { updatedRecords: 30, aristonPriceRecords: 18, shopMetadataPages: 2, canonicalConsolidations: 2 },
    articles: { posts: 2, productsCompared: 18 },
  },
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
    { value: 18, label: "سجل سعر أريستون", note: "فحص وتحديث موثق" },
    { value: 156, label: "رابطا سياقيا", note: "داخل أوصاف الفئات الجديدة والمحدثة" },
    { value: 12, label: "صورة فئات", note: "صور جديدة بلا نصوص وبنسخ ويب" },
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

const keywordRows = (rows, attr) => rows.map(k => { const state = movement(k.from, k.to); return `<tr ${attr}="${k.keyword}"><td data-label="الكلمة المفتاحية البحثية"><strong>${k.keyword}</strong></td><td data-label="الصفحة">${k.url ? `<a href="${k.url}" target="_blank" rel="noopener">${k.page}</a>` : k.page}</td><td data-label="المصدر"><strong>${k.source ?? "Ahrefs"}</strong></td><td data-label="الفترة السابقة">${num(k.from)}</td><td data-label="الفترة الحالية">${num(k.to)}</td><td data-label="النتيجة"><span class="result ${state}" data-movement="${state === "up" || state === "new" ? "positive" : state === "down" ? "negative" : "neutral"}">${movementText(k.from, k.to)}</span></td></tr>`; }).join("");
const deviceRows = data.devices.map(d => `<tr><td data-label="الجهاز"><strong>${d.device}</strong></td><td data-label="نقرات الفترة السابقة">${num(d.previousClicks)}</td><td data-label="نقرات الفترة الحالية">${num(d.currentClicks)}</td><td data-label="ظهور الفترة السابقة">${num(d.previousImpressions)}</td><td data-label="ظهور الفترة الحالية">${num(d.currentImpressions)}</td><td data-label="الترتيب السابق">${num(d.previousPosition)}</td><td data-label="الترتيب الحالي">${num(d.currentPosition)}</td></tr>`).join("");
const mainRows = data.content.main.map(c => `<tr data-scope="main" data-language="ar" data-content-type="${c.type}"><td data-label="النوع">${c.type}</td><td data-label="المحتوى"><a href="${c.url}" target="_blank" rel="noopener"><strong>${c.title}</strong></a></td><td data-label="اللغة">${c.language}</td><td data-label="تاريخ النشر">${c.date}</td><td data-label="الحالة"><span class="status">منشور</span></td></tr>`).join("");
const additionalCards = data.content.additional.map(c => `<article class="work-card extra" data-scope="additional"><h3>${c.title}</h3><p>${c.detail}</p></article>`).join("");
const storeCards = data.store.map(c => `<article class="card metric green"><span class="value">${num(c.value)}</span><span class="label">${c.label}</span><span class="note">${c.note}</span></article>`).join("");
const newClicks = data.newPages.reduce((n, p) => n + p.clicks, 0);
const newImpressions = data.newPages.reduce((n, p) => n + p.impressions, 0);
const articlePages = data.newPages.slice(0, 2);
const articleClicks = articlePages.reduce((n, p) => n + p.clicks, 0);
const articleImpressions = articlePages.reduce((n, p) => n + p.impressions, 0);
const calculatorRows = data.newPages.filter(p => p.type === "حاسبة").map(p => `<tr><td data-label="الحاسبة"><a href="${p.url}" target="_blank" rel="noopener"><strong>${p.title}</strong></a></td><td data-label="النقرات">${num(p.clicks)}</td><td data-label="مرات الظهور">${num(p.impressions)}</td><td data-label="متوسط الترتيب في جوجل">${num(p.position)}</td></tr>`).join("");
const pageGainRows = data.pageGains.map(p => `<tr><td data-label="الصفحة"><a href="${p.url}" target="_blank" rel="noopener"><strong>${p.page}</strong></a></td><td data-label="نقرات الفترة السابقة">${num(p.previousClicks)}</td><td data-label="نقرات الفترة الحالية">${num(p.currentClicks)}</td><td data-label="الفرق"><span class="result up" data-movement="positive">+${fmt(p.currentClicks-p.previousClicks)}</span></td><td data-label="ظهور الفترة الحالية">${num(p.currentImpressions)}</td></tr>`).join("");
const pct = (current, previous) => ((current - previous) / previous) * 100;

const reportBody = `<main class="page">
<header class="cover"><div class="eyebrow">التقرير الأخير قبل تعليق العمل</div><h1>تقرير أداء SEO من 1 سبتمبر إلى 14 أكتوبر 2026</h1><p class="cover-copy">أداء 44 يوما مقارنة بالفترة السابقة المساوية، مع توثيق أعمال المحتوى والأدوات وصفحات الفئات والمتجر.</p><div class="cover-meta"><span class="pill">الموقع: taqamisr.com</span><span class="pill">الفترة الحالية: 1 سبتمبر–14 أكتوبر 2026</span><span class="pill">الفترة السابقة: 19 يوليو–31 أغسطس 2026</span><span class="pill">حالة التعاون حتى: 15 أكتوبر 2026</span><span class="pill">تاريخ الإعداد: 15 أكتوبر 2026</span></div></header>
<nav class="report-nav" aria-label="أقسام التقرير"><a href="#summary">ملخص التقرير</a><a href="#technical-readings">الصفحات الجديدة</a><a href="#search-performance">أداء البحث</a><a href="#keywords">الكلمات والصفحات</a><a href="#content-work">العمل المنجز</a><a href="#extra-work">الفئات والمتجر</a><a href="#summary-close">حالة العمل</a></nav>
<div class="content">
<section id="summary"><span class="section-label normal">الملخص التنفيذي</span><div class="section-head"><div><div class="section-kicker">44 يوما مقابل 44 يوما</div><h2>ارتفعت النقرات 9.5% ومرات الظهور 4.4% خلال فترة العمل.</h2></div></div><p class="lead">سجل الموقع 4,085 نقرة و308,401 مرة ظهور من 1 سبتمبر إلى 14 أكتوبر، مقابل 3,731 نقرة و295,424 مرة ظهور خلال 19 يوليو–31 أغسطس. شمل التنفيذ مقالات وحاسبات وبنية تقنية وأوصاف فئات وبيانات بحث وتحديثات للمتجر.</p>
<div class="grid grid-6" style="margin-top:22px">
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات الفترة الحالية</span><span class="value">${num(data.site.current.clicks)}</span><span class="note positive">زيادة ${fmt(pct(data.site.current.clicks,data.site.previous.clicks))}%</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">مرات الظهور</span><span class="value">${num(data.site.current.impressions)}</span><span class="note positive">زيادة ${fmt(pct(data.site.current.impressions,data.site.previous.impressions))}%</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">معدل النقر</span><span class="value">${num(data.site.current.ctr)}%</span><span class="note positive">مقابل ${fmt(data.site.previous.ctr)}%</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">متوسط الترتيب في جوجل</span><span class="value">${num(data.site.current.position)}</span><span class="note positive">تحسن من ${fmt(data.site.previous.position)}</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">كلمات مفتاحية بحثية مرصودة</span><span class="value">${num(data.coverage.current.total)}</span><span class="note positive">زيادة ${fmt(data.coverage.current.total-data.coverage.previous.total)}</span></article>
<article class="card metric green" data-summary-metric dir="rtl"><span class="label">نقرات الصفحات الست الجديدة</span><span class="value">${num(newClicks)}</span><span class="note positive">مقالان و4 حاسبات</span></article>
</div><div class="commercial-notice" data-commercial-status><h3>حالة التعاون والسداد</h3><ul><li><strong>سبتمبر 2026 هو آخر شهر عمل قبل تعليق الخدمة.</strong></li><li>تم إرسال فاتورة سبتمبر 2026.</li><li>سنوقف العمل بعد هذا التقرير، ولن نستأنفه إلا بعد اعتماد طاقة مصر الدفع المسبق.</li><li>التأخر الحالي في سداد المستحقات غير مقبول لاستمرار الخدمة.</li></ul></div></section>

<section id="technical-readings"><span class="section-label normal">نتائج الصفحات الجديدة</span><div class="section-head"><div><div class="section-kicker">مقالات وأدوات نشرت خلال الفترة</div><h2>الصفحات الست الجديدة حققت ${fmt(newClicks)} نقرة و${fmt(newImpressions)} مرة ظهور.</h2></div></div>
<div class="growth-centerpiece" data-article-centerpiece><span class="section-kicker">أفضل سخانات الغاز والكهرباء في مصر</span><span class="big">${num(articleClicks)}</span><h3>نقرة للمقالين منذ النشر</h3><p>حقق المقالان ${fmt(articleImpressions)} مرة ظهور، ووصل متوسط ترتيبهما إلى ${fmt(articlePages[0].position)} و${fmt(articlePages[1].position)} في Google حتى 14 أكتوبر.</p><div class="article-pair"><article class="article-card" data-primary-article><h3><a href="${articlePages[0].url}" target="_blank" rel="noopener">${articlePages[0].title}</a></h3><p>النتائج من 21 سبتمبر إلى 14 أكتوبر.</p><div class="article-meta"><span><strong>${num(articlePages[0].clicks)}</strong>نقرة</span><span><strong>${num(articlePages[0].impressions)}</strong>ظهور</span><span><strong>${num(articlePages[0].position)}</strong>الترتيب</span></div></article><article class="article-card" data-primary-article><h3><a href="${articlePages[1].url}" target="_blank" rel="noopener">${articlePages[1].title}</a></h3><p>النتائج من 29 سبتمبر إلى 14 أكتوبر.</p><div class="article-meta"><span><strong>${num(articlePages[1].clicks)}</strong>نقرة</span><span><strong>${num(articlePages[1].impressions)}</strong>ظهور</span><span><strong>${num(articlePages[1].position)}</strong>الترتيب</span></div></article></div></div>
<h3 style="margin-top:24px">أداء الحاسبات الأربع</h3><div class="table-wrap"><table class="responsive"><thead><tr><th>الحاسبة</th><th>النقرات</th><th>مرات الظهور</th><th>متوسط الترتيب في جوجل</th></tr></thead><tbody>${calculatorRows}</tbody></table></div>
<div class="compare-card" style="margin-top:22px"><h3>دليل السخان الكهربائي الفوري أو التخزين يوسع حضوره</h3><p class="lead">انتقل من نقرتين و228 مرة ظهور في الفترة السابقة إلى 47 نقرة و10,320 مرة ظهور في الفترة الحالية، وتحسن متوسط ترتيبه من 8.7 إلى 7.8.</p><div class="bars"><div class="bar-row"><strong>مرات الظهور</strong><div class="bar-track"><div class="bar-fill green" style="width:100%"></div></div><span>${num(10320)}</span></div><div class="bar-row"><strong>النقرات</strong><div class="bar-track"><div class="bar-fill green" style="width:50%"></div></div><span>${num(47)}</span></div></div></div>
<h3 style="margin-top:28px">توزيع الكلمات المفتاحية البحثية</h3><div class="grid grid-4"><article class="card metric green"><span class="value">${num(data.coverage.current.total)}</span><span class="label">كلمات مفتاحية بحثية مرصودة</span><span class="note positive">زيادة ${fmt(data.coverage.current.total-data.coverage.previous.total)}</span></article><article class="card metric orange"><span class="value">${num(data.coverage.current.top3)}</span><span class="label">ضمن أول 3</span><span class="note negative">انخفاض ${fmt(data.coverage.previous.top3-data.coverage.current.top3)}</span></article><article class="card metric green"><span class="value">${num(data.coverage.current.top4to10)}</span><span class="label">في المراكز 4–10</span><span class="note positive">زيادة ${fmt(data.coverage.current.top4to10-data.coverage.previous.top4to10)}</span></article><article class="card metric"><span class="value">${num(data.coverage.current.top11plus)}</span><span class="label">بعد المركز 10</span><span class="note neutral">زيادة ${fmt(data.coverage.current.top11plus-data.coverage.previous.top11plus)}</span></article></div><p class="data-note">اتسعت تغطية البحث بمقدار 464 كلمة. تراجعت شريحة الثلاثة الأولى، بينما زادت شريحة المراكز 4–10 بمقدار 579 كلمة، وهي أكبر مساحة قابلة للتحسين في الفترة التالية.</p></section>

<section id="search-performance"><span class="section-label normal">أداء البحث في Google</span><div class="section-head"><div><div class="section-kicker">1 سبتمبر–14 أكتوبر مقابل 19 يوليو–31 أغسطس</div><h2>ارتفعت النقرات والظهور وتحسن متوسط الترتيب خلال فترتين متساويتين.</h2></div></div><div class="grid grid-4"><article class="card metric green"><span class="value">${num(data.site.current.clicks)}</span><span class="label">نقرات الفترة الحالية</span><span class="note positive">مقابل ${fmt(data.site.previous.clicks)}، زيادة ${fmt(pct(data.site.current.clicks,data.site.previous.clicks))}%</span></article><article class="card metric green"><span class="value">${num(data.site.current.impressions)}</span><span class="label">مرات الظهور</span><span class="note positive">مقابل ${fmt(data.site.previous.impressions)}، زيادة ${fmt(pct(data.site.current.impressions,data.site.previous.impressions))}%</span></article><article class="card metric green"><span class="value">${num(data.site.current.ctr)}%</span><span class="label">معدل النقر</span><span class="note positive">مقابل ${fmt(data.site.previous.ctr)}%</span></article><article class="card metric green"><span class="value">${num(data.site.current.position)}</span><span class="label">متوسط الترتيب في جوجل</span><span class="note positive">تحسن من ${fmt(data.site.previous.position)}</span></article></div>
<h3 style="margin-top:26px">الأداء حسب الجهاز</h3><div class="table-wrap"><table class="responsive"><thead><tr><th>الجهاز</th><th>نقرات الفترة السابقة</th><th>نقرات الفترة الحالية</th><th>ظهور الفترة السابقة</th><th>ظهور الفترة الحالية</th><th>الترتيب السابق</th><th>الترتيب الحالي</th></tr></thead><tbody>${deviceRows}</tbody></table></div><p class="data-note">قاد الهاتف النمو بإضافة 390 نقرة و26,043 مرة ظهور. تحسن ترتيب الكمبيوتر من 12.6 إلى 10.3، بينما انخفض حجمه مقارنة بالفترة السابقة.</p><h3 style="margin-top:28px">أكبر صفحات النمو في النقرات</h3><div class="table-wrap"><table class="responsive"><thead><tr><th>الصفحة</th><th>نقرات الفترة السابقة</th><th>نقرات الفترة الحالية</th><th>الفرق</th><th>ظهور الفترة الحالية</th></tr></thead><tbody>${pageGainRows}</tbody></table></div></section>

<section id="keywords"><span class="section-label normal">الكلمات والصفحات</span><div class="section-head"><div><div class="section-kicker">Ahrefs أولا للترتيب، وGoogle Search Console للبدائل الموثقة</div><h2>مكاسب واسعة في التدفئة والمضخات والسخانات وصفحات الفئات.</h2></div></div><div data-report-block="positions"><div data-keyword-subsection="top-movers"><h3>أبرز الكلمات المفتاحية البحثية المتحسنة</h3><p class="lead">يقارن Ahrefs رصد 9 أكتوبر برصد 28 أغسطس على الكمبيوتر في مصر، وهما أقرب رصدين متاحين إلى نهايتي الفترتين.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>الكلمة المفتاحية البحثية</th><th>الصفحة</th><th>المصدر</th><th>28 أغسطس</th><th>9 أكتوبر</th><th>النتيجة</th></tr></thead><tbody>${keywordRows(data.ahrefs.gains, "data-keyword")}</tbody></table></div></div>
<div data-keyword-subsection="priority" style="margin-top:28px"><h3>متابعة الكلمات ذات الأولوية</h3><p class="lead">تعتمد بدائل Ahrefs على متوسط الترتيب في Google Search Console للفترتين المتساويتين.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>الكلمة المفتاحية البحثية</th><th>الصفحة</th><th>المصدر</th><th>19 يوليو–31 أغسطس</th><th>1 سبتمبر–14 أكتوبر</th><th>النتيجة</th></tr></thead><tbody>${keywordRows(data.priority, "data-priority-keyword")}</tbody></table></div></div></div></section>

<section id="content-work"><span class="section-label normal">العمل المنجز</span><div class="section-head"><div><div class="section-kicker">محتوى وأدوات وصفحات تجارية</div><h2>شمل التنفيذ 6 صفحات جديدة و24 وصف فئة محليا.</h2></div></div><div data-report-block="content"><div class="work-card primary" data-content-scope="main"><h3>المحتوى الأساسي</h3><p class="lead">نشرنا دليلين للشراء وأربع حاسبات للاستخدام المباشر. غطت الأدلة 18 منتجا، وخدمت الحاسبات الكهرباء والسخانات والمضخات والتدفئة.</p><div class="table-wrap"><table class="responsive"><thead><tr><th>النوع</th><th>المحتوى</th><th>اللغة</th><th>تاريخ النشر</th><th>الحالة</th></tr></thead><tbody>${mainRows}</tbody></table></div></div><div class="content-subsection" data-content-scope="additional" style="margin-top:20px"><h3>المحتوى الإضافي</h3><div class="work-map single">${additionalCards}</div></div></div><!-- content-report-block:end --></section>

<section id="extra-work" class="section-divider"><span class="section-label extra">تنفيذ تقني وتشغيلي واسع</span><div class="section-head"><div><div class="section-kicker">البنية والفئات والمتجر</div><h2>شمل العمل منصة حاسبات كاملة وتحسين الفئات وتحديث الكتالوج.</h2></div></div><div class="grid grid-3"><article class="work-card primary"><h3>منصة الحاسبات</h3><p>نظام موحد للحاسبات، وقالب عرض مستقل، وبيانات منظمة لأربع أدوات، وقياس لإتمام الاستخدام، و8 روابط داخلية، و4 صور مميزة متوافقة.</p></article><article class="work-card primary"><h3>صفحات الفئات</h3><p>24 وصفا محليا، منها 13 وصفا جديدا و11 إعادة كتابة، مع 156 رابطا سياقيا و12 صورة جديدة. اكتملت بيانات البحث لجميع 32 صفحة فئة.</p></article><article class="work-card primary"><h3>الكتالوج والمتجر</h3><p>30 سجل متجر محدثا، و18 سجل سعر لأريستون تمت مراجعته، وتحديث صفحتي المتجر، وتوحيد رابطَي All Products مع المتجر.</p></article></div><div class="grid grid-4" style="margin-top:18px">${storeCards}</div><p class="data-note">تغطي صفحات الفئات الآن المنتجات بوصف أوضح وروابط إلى المنتجات والأدلة المناسبة، وتمنع الروابط الأساسية تداخل صفحات All Products مع المتجر.</p></section>

<section id="summary-close"><div class="highlight" data-final-status><h2>تعليق العمل وشروط الاستئناف</h2><p class="lead">هذا هو التقرير الأخير قبل تعليق العمل مع طاقة مصر.</p><ul class="compact-list"><li><strong>تم إرسال فاتورة سبتمبر 2026.</strong></li><li>التأخر الحالي في سداد المستحقات غير مقبول لاستمرار الخدمة.</li><li>سنوقف أعمال تحسين محركات البحث والمحتوى والمتجر بعد هذا التقرير.</li><li>سنستأنف العمل بعد اعتماد طاقة مصر الدفع المسبق وسداد المستحقات القائمة.</li></ul></div></section>
<footer class="footer"><p><strong>بيانات التقرير:</strong> تقارن مؤشرات Google Search Console فترة 1 سبتمبر–14 أكتوبر 2026 بفترة 19 يوليو–31 أغسطس 2026، بواقع 44 يوما لكل فترة. يقارن قسم Ahrefs أقرب رصدين متاحين في 9 أكتوبر و28 أغسطس. يغطي سجل العمل وحالة التعاون حتى 15 أكتوبر 2026.</p></footer>
</div></main>`;
const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23005993'/%3E%3Cpath d='M14 34h36M32 14v36' stroke='%23e07826' stroke-width='7' stroke-linecap='round'/%3E%3C/svg%3E"><title>تقرير أداء SEO من 1 سبتمبر إلى 14 أكتوبر 2026 | طاقة مصر</title><style>${baseCss}${extraCss}</style></head><body data-report-period="2026-09" data-report-through="2026-10-15">${reportBody}</body></html>`;
writeFileSync(join(here, "data.json"), `${JSON.stringify(data, null, 2)}\n`);
writeFileSync(join(here, "index.html"), html);
console.log(`Built ${join(here, "index.html")}`);
