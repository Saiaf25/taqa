from pathlib import Path
import re

path = Path('email-signature/index.html')
text = path.read_text(encoding='utf-8')

base = 'https://saiaf25.github.io/taqa/email-signature/assets'

mobile_row = '''              <tr>
                <td style="width:54px;padding:0 7px 8px 0;vertical-align:middle;white-space:nowrap;">
                  <a id="outWhatsAppLink" href="https://wa.me/201012345678" target="_blank" title="WhatsApp" style="display:inline-block;margin:0 5px 0 0;text-decoration:none;border:0;vertical-align:middle;"><img src="%s/whatsapp.png" width="20" height="20" alt="WhatsApp" style="display:block;width:20px;height:20px;border:0;outline:none;"></a>
                  <a id="outMobileIconLink" href="tel:+201012345678" title="Mobile" style="display:inline-block;text-decoration:none;border:0;vertical-align:middle;"><img src="%s/mobile.png" width="20" height="20" alt="Mobile" style="display:block;width:20px;height:20px;border:0;outline:none;"></a>
                </td>
                <td style="padding:0 0 8px 0;vertical-align:middle;">
                  <a id="outMobileLink" href="tel:+201012345678" style="color:#003ca6;text-decoration:none;"><span id="outMobile">(+20) 10 1234 5678</span></a>
                </td>
              </tr>''' % (base, base)

text, count = re.subn(
    r'''              <tr>\n                <td style="width:22px;padding:0 5px 8px 0;vertical-align:top;color:#20a464;font-size:16px;">●</td>\n                <td style="padding:0 0 8px 0;vertical-align:top;">\n                  <a id="outMobileLink" href="tel:\+201012345678" style="color:#003ca6;text-decoration:none;"><span id="outMobile">\(\+20\) 10 1234 5678</span></a>\n                </td>\n              </tr>''',
    mobile_row,
    text,
    count=1,
)
if count != 1:
    raise SystemExit('Could not replace personal mobile row')

text, count = re.subn(
    r'''              <tr>\n                <td colspan="2" style="padding:0;">Phone: <a href="tel:\+20222614715" style="color:#003ca6;text-decoration:none;">\(\+20\) 2 2261 4715</a></td>\n              </tr>\n''',
    '',
    text,
    count=1,
)
if count != 1:
    raise SystemExit('Could not remove 4715 phone row')

social_row = '''              <tr>
                <td colspan="2" style="padding:0 0 7px 0;white-space:nowrap;">
                  <a href="https://facebook.com/taqamisr" target="_blank" title="Facebook" style="display:inline-block;margin:0 7px 0 0;text-decoration:none;border:0;"><img src="%s/facebook.png" width="22" height="22" alt="Facebook" style="display:block;width:22px;height:22px;border:0;outline:none;"></a>
                  <a href="https://instagram.com/taqamisr" target="_blank" title="Instagram" style="display:inline-block;margin:0 7px 0 0;text-decoration:none;border:0;"><img src="%s/instagram.png" width="22" height="22" alt="Instagram" style="display:block;width:22px;height:22px;border:0;outline:none;"></a>
                  <a href="https://www.youtube.com/taqamisr" target="_blank" title="YouTube" style="display:inline-block;margin:0 7px 0 0;text-decoration:none;border:0;"><img src="%s/youtube.png" width="22" height="22" alt="YouTube" style="display:block;width:22px;height:22px;border:0;outline:none;"></a>
                  <a href="https://www.linkedin.com/company/taqamisr" target="_blank" title="LinkedIn" style="display:inline-block;text-decoration:none;border:0;"><img src="%s/linkedin.png" width="22" height="22" alt="LinkedIn" style="display:block;width:22px;height:22px;border:0;outline:none;"></a>
                </td>
              </tr>''' % (base, base, base, base)

text, count = re.subn(
    r'''              <tr>\n                <td colspan="2" style="padding:0 0 5px 0;white-space:nowrap;">\n                  <a href="https://facebook\.com/taqamisr"[^>]*>Facebook</a>\n                  <a href="https://instagram\.com/taqamisr"[^>]*>Instagram</a>\n                  <a href="https://www\.youtube\.com/taqamisr"[^>]*>YouTube</a>\n                  <a href="https://www\.linkedin\.com/company/taqamisr"[^>]*>LinkedIn</a>\n                </td>\n              </tr>''',
    social_row,
    text,
    count=1,
)
if count != 1:
    raise SystemExit('Could not replace social links row')

old_js = """        document.getElementById('outMobile').textContent = mobile;\n        document.getElementById('outMobileLink').href = `tel:${phoneDigits}`;\n        document.getElementById('outEmail').textContent = email;"""
new_js = """        document.getElementById('outMobile').textContent = mobile;\n        document.getElementById('outMobileLink').href = `tel:${phoneDigits}`;\n        document.getElementById('outMobileIconLink').href = `tel:${phoneDigits}`;\n        document.getElementById('outWhatsAppLink').href = `https://wa.me/${phoneDigits.replace(/^\\+/, '')}`;\n        document.getElementById('outEmail').textContent = email;"""
if old_js not in text:
    raise SystemExit('Could not update dynamic contact links')
text = text.replace(old_js, new_js, 1)

path.write_text(text, encoding='utf-8')

# Remove temporary patch machinery after the change is applied.
Path('.github/workflows/patch-email-signature.yml').unlink(missing_ok=True)
Path('.github/patch_email_signature.py').unlink(missing_ok=True)
