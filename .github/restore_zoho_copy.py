from pathlib import Path
import base64

root = Path('email-signature')
path = root / 'index.html'
html = path.read_text(encoding='utf-8')

assets = [
    'taqa-logo-20260812-2021.png',
    'facebook.png',
    'instagram.png',
    'youtube.png',
    'linkedin.png',
    'whatsapp.png',
    'phone.png',
]

for filename in assets:
    data = (root / 'assets' / filename).read_bytes()
    uri = 'data:image/png;base64,' + base64.b64encode(data).decode('ascii')
    hosted = f'https://saiaf25.github.io/taqa/email-signature/assets/{filename}'
    if hosted not in html:
        raise SystemExit(f'Expected hosted asset URL not found: {hosted}')
    html = html.replace(hosted, uri)

start = html.index('      async function copySignature() {')
end = html.index('      Object.values(fields).forEach', start)
original_copy = '''      async function copySignature() {
        updatePreview();
        const signature = document.getElementById('signature');
        const range = document.createRange();
        range.selectNodeContents(signature);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        let copied = false;
        try {
          copied = document.execCommand('copy');
        } catch (_) {
          copied = false;
        }
        selection.removeAllRanges();

        if (copied) {
          result.textContent = 'تم نسخ التوقيع. افتح Zoho والصقه داخل مربع التوقيع.';
          result.className = 'copy-result ok';
        } else {
          result.textContent = 'لم يسمح المتصفح بالنسخ التلقائي. حدّد التوقيع داخل المعاينة ثم اضغط ⌘C أو Ctrl+C.';
          result.className = 'copy-result error';
        }
      }

'''
html = html[:start] + original_copy + html[end:]

if 'navigator.clipboard' in html or 'ClipboardItem' in html:
    raise SystemExit('Modern clipboard code still present')

signature_start = html.index('<div id="signature"')
signature_end = html.index('</div>', signature_start)
sig = html[signature_start:signature_end]
if 'https://saiaf25.github.io/taqa/email-signature/assets/' in sig:
    raise SystemExit('Hosted signature image remains')

if html.count('data:image/png;base64,') < 7:
    raise SystemExit('Not all signature images were embedded')

path.write_text(html, encoding='utf-8')
print('Zoho-safe restore complete: embedded images + original copy method.')
