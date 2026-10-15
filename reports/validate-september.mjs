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
    'data-report-through="2026-10-15"',
    'font-family: "Thmanyah Serif Text"',
    'كلمات مفتاحية بحثية',
    'الترتيب في جوجل',
    'Ahrefs أولا',
    'Google Search Console',
    'تاريخ الإعداد: 15 أكتوبر 2026',
    'المحتوى الأساسي',
    'المحتوى الإضافي',
    'تنفيذ تقني وتشغيلي واسع',
    'data-article-centerpiece',
    'data-commercial-status',
    'data-final-status',
    '.growth-centerpiece{text-align:center',
    'تم إرسال فاتورة سبتمبر 2026',
    'الدفع المسبق',
    'التأخر الحالي في سداد المستحقات غير مقبول',
    'سنوقف العمل بعد هذا التقرير',
  ]) must(text);

  for (const text of [
    'استعلامات', 'الموضع', 'dir="ltr"', 'direction: ltr', '/Users/', 'wp-admin',
    'مصادر ومنهجية', 'كل المحتوى المنجز خلال', '116 منتجا', '71 سجل',
    'تراجع 4.9', 'internal', 'debug', 'collection mechanics',
    'لم تنشر النسخ الإنجليزية', '4 حاسبات عربية جديدة', 'أولويات المرحلة التالية',
    'data-october-extension', 'امتداد الأداء', '1–30 سبتمبر مقابل', 'نقرات سبتمبر', 'ظهور سبتمبر',
  ]) forbid(text);
  assert.ok(!/[٠-٩]/u.test(html), "Arabic-Indic digits are forbidden");

  const sections = [...html.matchAll(/<section id="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(sections, ["summary", "technical-readings", "search-performance", "keywords", "content-work", "extra-work", "summary-close"]);

  assert.deepEqual(data.period, { from: "2026-09-01", to: "2026-10-14", reportThrough: "2026-10-15", comparedFrom: "2026-07-19", comparedTo: "2026-08-31", days: 44, prepared: "2026-10-15" });
  assert.deepEqual(data.site.current, { clicks: 4085, impressions: 308401, ctr: 1.3246, position: 6.8884 });
  assert.deepEqual(data.site.previous, { clicks: 3731, impressions: 295424, ctr: 1.2629, position: 7.4577 });
  assert.deepEqual(data.coverage.current, { total: 7249, top3: 2176, top4to10: 3355, top11plus: 1718 });
  assert.deepEqual(data.coverage.previous, { total: 6785, top3: 2322, top4to10: 2776, top11plus: 1687 });
  assert.equal(data.newPages.length, 6);
  assert.equal(data.newPages.reduce((n, p) => n + p.clicks, 0), 613);
  assert.equal(data.newPages.reduce((n, p) => n + p.impressions, 0), 31839);
  assert.equal(data.newPages.filter(p => p.type === "مقال").reduce((n, p) => n + p.clicks, 0), 571);
  assert.equal(data.newPages.filter(p => p.type === "مقال").reduce((n, p) => n + p.impressions, 0), 29368);
  assert.equal(data.newPages.filter(p => p.type === "حاسبة").reduce((n, p) => n + p.clicks, 0), 42);
  assert.equal(data.newPages.filter(p => p.type === "حاسبة").reduce((n, p) => n + p.impressions, 0), 2471);

  const technical = html.split('<section id="technical-readings">')[1].split('</section>')[0];
  const centerpiece = technical.indexOf('data-article-centerpiece');
  const distribution = technical.indexOf('توزيع الكلمات المفتاحية البحثية');
  assert.ok(centerpiece >= 0 && centerpiece < distribution, "The two articles must lead technical visibility");
  for (const value of ["613", "31,839", "571", "29,368", "5.4", "5.9", "7,249", "2,176", "3,355", "1,718"]) assert.ok(technical.includes(value), `Technical evidence missing ${value}`);
  assert.equal((technical.match(/data-primary-article/g) ?? []).length, 2);
  assert.equal((technical.match(/data-label="الحاسبة"/g) ?? []).length, 4);
  assert.ok(technical.includes('أفضل 10 سخانات غاز في مصر'));
  assert.ok(technical.includes('أفضل 8 سخانات كهرباء في مصر'));

  const positions = html.split('<div data-report-block="positions">')[1].split('</section>')[0];
  for (const contaminant of ["النقرات", "الظهور", "CTR", "حجم البحث"]) forbidWithin(positions, contaminant);
  const top = positions.indexOf('data-keyword-subsection="top-movers"');
  const priority = positions.indexOf('data-keyword-subsection="priority"');
  assert.ok(top >= 0 && top < priority, "Ahrefs gains must precede priority keywords");
  const ahrefsRows = [...positions.matchAll(/<tr data-keyword="([^"]+)">([\s\S]*?)<\/tr>/g)];
  assert.equal(ahrefsRows.length, 14);
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
  for (const text of ['منصة الحاسبات', '24 وصفا محليا', '156 رابطا سياقيا', '12 صورة جديدة', '32', 'صفحة فئة', '30', 'سجل متجر', '18', 'سجل سعر أريستون', 'صفحتا المتجر', 'روابط أساسية']) assert.ok(store.includes(text), `Store work missing: ${text}`);
  assert.equal((store.match(/<article class="card metric green">/g) ?? []).length, 7);

  const closing = html.split('<section id="summary-close">')[1].split('</section>')[0];
  for (const text of ['هذا هو التقرير الأخير قبل تعليق العمل', 'تم إرسال فاتورة سبتمبر 2026', 'التأخر الحالي في سداد المستحقات غير مقبول', 'سنوقف أعمال تحسين محركات البحث والمحتوى والمتجر', 'الدفع المسبق', 'سداد المستحقات القائمة']) assert.ok(closing.includes(text), `Final status missing: ${text}`);

  for (const weight of ["Regular", "Bold", "Black"]) {
    const current = join(folder, `assets/thmanyahseriftext-${weight}.woff2`);
    const approved = join(folder, `../august-report/assets/thmanyahseriftext-${weight}.woff2`);
    assert.ok(existsSync(current), `Missing font: ${current}`);
    assert.deepEqual(readFileSync(current), readFileSync(approved), `Font drift: ${weight}`);
  }

  const search = html.split('<section id="search-performance">')[1].split('</section>')[0];
  for (const value of ['4,085', '3,731', '308,401', '295,424', '1.32', '1.26', '6.89', '7.46']) assert.ok(search.includes(value), `Equal-period search comparison missing: ${value}`);
  assert.ok(search.includes('1 سبتمبر–14 أكتوبر مقابل 19 يوليو–31 أغسطس'));
  assert.equal((search.match(/data-label="الجهاز"/g) ?? []).length, 3);
  assert.equal((search.match(/data-label="الفرق"/g) ?? []).length, 10);

  console.log(`PASS ${target}\nFull 44-day period and equal 44-day baseline; complete work inventory, page and keyword evidence, payment suspension notice, September invoice status, RTL and fonts verified.`);
}

function forbidWithin(block, text) {
  assert.ok(!block.includes(text), `Position section contains ${text}`);
}
