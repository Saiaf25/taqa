import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import assert from "node:assert/strict";

export function validateSeptember(html, target) {
  const folder = dirname(target);
  const data = JSON.parse(readFileSync(join(folder, "data.json"), "utf8"));
  const must = text => assert.ok(html.includes(text), `Missing: ${text}`);
  const forbid = text => assert.ok(!html.includes(text), `Forbidden: ${text}`);

  for (const text of [
    '<html lang="ar" dir="rtl">',
    'data-report-period="2026-09"',
    'font-family: "Thmanyah Serif Text"',
    'كلمات مفتاحية بحثية',
    'الترتيب في جوجل',
    'Ahrefs أولا',
    'Google Search Console',
    'تاريخ الإعداد: 5 أكتوبر 2026',
    'المحتوى الأساسي',
    'المحتوى الإضافي',
    'عمل استثنائي إضافي',
    'data-article-centerpiece',
    '.growth-centerpiece{text-align:center',
  ]) must(text);

  for (const text of [
    'استعلامات', 'الموضع', 'dir="ltr"', 'direction: ltr', '/Users/', 'wp-admin',
    'مصادر ومنهجية', 'كل المحتوى المنجز خلال', '116 منتجا', '71 سجل',
    'تراجع 4.9', 'internal', 'debug', 'collection mechanics',
    'لم تنشر النسخ الإنجليزية', '4 حاسبات عربية جديدة',
  ]) forbid(text);
  assert.ok(!/[٠-٩]/u.test(html), "Arabic-Indic digits are forbidden");

  const sections = [...html.matchAll(/<section id="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(sections, ["summary", "technical-readings", "search-performance", "keywords", "content-work", "extra-work", "summary-close"]);

  assert.deepEqual(data.period, { from: "2026-09-01", to: "2026-09-30", comparedFrom: "2026-08-01", comparedTo: "2026-08-31", prepared: "2026-10-05" });
  assert.deepEqual(data.site.september, { clicks: 2408, impressions: 194768, ctr: 1.2363, position: 7.1706 });
  assert.deepEqual(data.coverage.september, { total: 5320, top3: 1529, top4to10: 2456, top11plus: 1335 });
  assert.equal(data.newPages.length, 6);
  assert.equal(data.newPages.reduce((n, p) => n + p.clicks, 0), 127);
  assert.equal(data.newPages.reduce((n, p) => n + p.impressions, 0), 5618);
  assert.equal(data.newPages.slice(0, 2).reduce((n, p) => n + p.clicks, 0), 107);
  assert.equal(data.newPages.slice(0, 2).reduce((n, p) => n + p.impressions, 0), 4636);

  const technical = html.split('<section id="technical-readings">')[1].split('</section>')[0];
  const centerpiece = technical.indexOf('data-article-centerpiece');
  const distribution = technical.indexOf('توزيع الكلمات المفتاحية البحثية');
  assert.ok(centerpiece >= 0 && centerpiece < distribution, "The two articles must lead technical visibility");
  for (const value of ["107", "4,636", "5.1", "6.1", "5,320", "1,529", "2,456", "1,335"]) assert.ok(technical.includes(value), `Technical evidence missing ${value}`);
  assert.equal((technical.match(/data-primary-article/g) ?? []).length, 2);
  assert.ok(technical.includes('أفضل 10 سخانات غاز في مصر'));
  assert.ok(technical.includes('أفضل 8 سخانات كهرباء في مصر'));

  const positions = html.split('<div data-report-block="positions">')[1].split('</section>')[0];
  for (const contaminant of ["النقرات", "الظهور", "CTR", "حجم البحث"]) forbidWithin(positions, contaminant);
  const top = positions.indexOf('data-keyword-subsection="top-movers"');
  const priority = positions.indexOf('data-keyword-subsection="priority"');
  assert.ok(top >= 0 && top < priority, "Ahrefs gains must precede priority keywords");
  const ahrefsRows = [...positions.matchAll(/<tr data-keyword="([^"]+)">([\s\S]*?)<\/tr>/g)];
  assert.equal(ahrefsRows.length, 6);
  for (const [, keyword, row] of ahrefsRows) {
    assert.ok(row.includes('<strong>Ahrefs</strong>'), `Missing Ahrefs source: ${keyword}`);
    assert.ok(row.includes('data-movement="positive"'), `Ahrefs row is not positive: ${keyword}`);
    assert.ok(!row.includes('result down'), `Ahrefs decline exposed: ${keyword}`);
  }
  const priorityRows = [...positions.matchAll(/<tr data-priority-keyword="([^"]+)">([\s\S]*?)<\/tr>/g)];
  assert.equal(priorityRows.length, data.priority.length);
  for (const record of data.priority) {
    const row = priorityRows.find(([, keyword]) => keyword === record.keyword)?.[2];
    assert.ok(row, `Missing priority keyword: ${record.keyword}`);
    assert.ok(row.includes(`<strong>${record.source}</strong>`), `Wrong source: ${record.keyword}`);
    if (record.source === "Ahrefs") assert.ok(!row.includes('data-movement="negative"'), `Ahrefs decline exposed: ${record.keyword}`);
  }

  const content = html.split('<div data-report-block="content">')[1].split('<!-- content-report-block:end -->')[0];
  assert.equal((content.match(/data-scope="main" data-language="ar"/g) ?? []).length, 6);
  assert.equal((content.match(/data-scope="main" data-language="en"/g) ?? []).length, 0);
  assert.equal((content.match(/data-content-type="مقال"/g) ?? []).length, 2);
  assert.equal((content.match(/data-content-type="حاسبة"/g) ?? []).length, 4);
  assert.equal((content.match(/data-scope="additional"/g) ?? []).length, 1);
  assert.ok(content.includes('24 صفحة فئات محسنة'));
  assert.ok(content.includes('13 وصفا جديدا'));

  const store = html.split('<section id="extra-work"')[1].split('</section>')[0];
  for (const text of ['32', 'صفحة فئة', '30', 'سجل متجر', 'صفحتا المتجر', 'روابط أساسية']) assert.ok(store.includes(text), `Store work missing: ${text}`);
  assert.equal((store.match(/<article class="card metric green">/g) ?? []).length, 4);

  const closing = html.split('<section id="summary-close">')[1].split('</section>')[0];
  const firstPriority = closing.match(/<li>([\s\S]*?)<\/li>/)?.[1] ?? "";
  for (const text of ['اعتماد خطة إعادة بناء صفحات الحلول والخدمات', 'تسخين المياه', 'التدفئة المركزية', 'بالعربية والإنجليزية', '12 أغسطس', '15 أغسطس', 'موافقة طاقة مصر', 'https://cleanshot.com/share/XQJqslyl']) assert.ok(firstPriority.includes(text), `First priority missing: ${text}`);

  for (const weight of ["Regular", "Bold", "Black"]) {
    const current = join(folder, `assets/thmanyahseriftext-${weight}.woff2`);
    const approved = join(folder, `../august-report/assets/thmanyahseriftext-${weight}.woff2`);
    assert.ok(existsSync(current), `Missing font: ${current}`);
    assert.deepEqual(readFileSync(current), readFileSync(approved), `Font drift: ${weight}`);
  }

  console.log(`PASS ${target}\nSeptember period, two-article centerpiece, calculator core classification, GSC metrics, Ahrefs source rules, RTL, fonts and priorities verified.`);
}

function forbidWithin(block, text) {
  assert.ok(!block.includes(text), `Position section contains ${text}`);
}
