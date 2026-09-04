import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import assert from "node:assert/strict";

export function validateAugust(html, target) {
  const data = JSON.parse(readFileSync(join(dirname(target), "data.json"), "utf8"));
  const must = s => assert.ok(html.includes(s), "Missing: "+s);
  for (const s of ['<html lang="ar" dir="rtl">','font-family: "Thmanyah Serif Text"','text-wrap:balance','font-synthesis:none','كلمات مفتاحية بحثية','Ahrefs أولا','12 أغسطس','15 أغسطس','لم تصل الموافقة','5 سبتمبر 2026']) must(s);
  for (const s of ['استعلامات','الموضع','dir="ltr"','direction: ltr','/Users/','wp-admin','مصادر ومنهجية','كل المحتوى المنجز خلال','116 منتجا','71 سجل','تراجع 4.9','إضافة مخصصة للعروض','8 عروض منشورة']) assert.ok(!html.includes(s),"Forbidden: "+s);
  const sections=[...html.matchAll(/<section id="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(sections,["summary","technical-readings","search-performance","keywords","content-work","extra-work","summary-close"]);
  for (const lang of ["ar","en"]) assert.equal((html.match(new RegExp('data-scope="main" data-language="'+lang+'"',"g"))||[]).length,4);
  const content=html.split('<div data-report-block="content">')[1].split('<!-- content-report-block:end -->')[0];
  assert.ok(content.includes("<h3>المحتوى الأساسي</h3>")&&content.includes("<h3>المحتوى الإضافي</h3>"));
  assert.equal([...content.matchAll(/data-scope="additional" data-pieces="(\d+)"/g)].reduce((n,m)=>n+Number(m[1]),0),26);
  const summary=html.split('<section id="summary">')[1].split("</section>")[0];
  const cards=[...summary.matchAll(/<article[\s\S]*?<\/article>/g)].map(m=>m[0]);
  assert.equal(cards.length,6);
  const labels=["نقرات Google","مرات الظهور","كلمات ضمن أول 3","كلمات مفتاحية بحثية مرصودة","قطع محتوى أساسية","صفحات محتوى إضافية"];
  const vals=["2,550","203,341","1,741","5,313","8","26"];
  cards.forEach((card,i)=>{assert.ok(card.includes(labels[i]));assert.ok(card.includes('<bdi dir="rtl">'+vals[i]+'</bdi>'));});
  assert.ok(!summary.includes("Ahrefs"));
  assert.ok(cards[2].includes("Google Search Console")&&cards[3].includes("Google Search Console"));
  assert.equal(data.coverage.august.total,5313);
  assert.equal(data.coverage.august.top3,1741);
  assert.equal(data.coverage.august.top4to10,2105);
  const positions=html.split('<div data-report-block="positions">')[1].split('<!-- positions:end -->')[0];
  for(const word of ["النقرات","الظهور","CTR","حجم البحث"])assert.ok(!positions.includes(word),"Position contamination: "+word);
  const top=positions.indexOf('data-keyword-subsection="top-movers"');
  const pri=positions.indexOf('data-keyword-subsection="priority"');
  const rel=positions.indexOf('data-keyword-subsection="related"');
  assert.ok(top<pri&&pri<rel);
  const rows=[...positions.matchAll(/<tr ([^>]+)>([\s\S]*?)<\/tr>/g)];
  const seen=new Set();
  let movers=0;
  for(const [,attrs,row] of rows){
    const key=attrs.match(/data-(?:keyword|priority-keyword|related-keyword)="([^"]+)"/)?.[1];
    assert.ok(key&&!seen.has(key),"Duplicate/missing keyword: "+key);seen.add(key);
    const record=data.ranks.find(r=>r.keyword===key)||data.fallback.find(r=>r.keyword===key);
    assert.ok(record,"Unsupported keyword: "+key);
    const p=record.position??null,b=record.position_prev??null;
    const values=[...row.matchAll(/<bdi class="rtl-number" dir="rtl">([^<]+)<\/bdi>/g)].map(m=>m[1]);
    assert.deepEqual(values,[b==null?"—":String(b),p==null?"—":String(p)],"Wrong positions: "+key);
    const state=p!=null&&b!=null?(p<b?"positive":p>b?"negative":"neutral"):p!=null?"positive":b!=null?"negative":"neutral";
    assert.ok(row.includes('data-movement="'+state+'"'),"Wrong movement: "+key);
    assert.ok(row.includes('keyword-'+({positive:"up",negative:"down",neutral:"flat"}[state])));
    assert.ok(row.includes(data.ranks.some(r=>r.keyword===key)?"<strong>Ahrefs</strong>":"<strong>Google Search Console</strong>"));
    if(attrs.includes('data-top-mover="true"')){movers++;assert.ok(p!=null&&b!=null&&p<b);}
  }
  assert.equal(movers,22);
  for(const k of ["غلايات مركزية","غلاية مركزية","غلاية تسخين مركزي","central water heating","radiator","central poilar"])assert.ok(seen.has(k),"Missing priority: "+k);
  const figures=[...html.matchAll(/<figure class="report-shot[\s\S]*?<\/figure>/g)];
  assert.equal(figures.length,4);
  for(const [fig] of figures)assert.ok((fig.match(/class="figure-comment">([^<]+)/)?.[1].length||0)>35);
  for(const [,asset] of html.matchAll(/(?:src|url\()="?([^") ]+\.(?:png|woff2))/g)) assert.ok(existsSync(join(dirname(target),asset)),"Missing asset: "+asset);
  for(const weight of ["Regular","Bold","Black"])assert.deepEqual(readFileSync(join(dirname(target),"assets/thmanyahseriftext-"+weight+".woff2")),readFileSync(join(dirname(target),"../july-report/assets/thmanyahseriftext-"+weight+".woff2")));
  const merchant=html.split('<section id="extra-work"')[1].split("</section>")[0];
  for(const s of ["104","6 قيد المراجعة","110","61","49","186 ظهورا ونقرة واحدة","40 قائمة","5 سبتمبر"])assert.ok(merchant.includes(s));
  assert.equal(data.merchant.approved,data.merchant.arabic+data.merchant.english);
  console.log("PASS "+target+"\nAugust dates, sources, 22 movers, priority coverage, RTL, fonts, 8 main / 26 additional pages, screenshots and Merchant snapshot verified.");
}

