with open('star_paths.txt') as f:
    text = f.read()

star = text.split('STAR:\n')[1].split('\n\nOUTLINE:')[0].strip()
outline = text.split('OUTLINE:\n')[1].strip()

html = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Star Preview</title>
</head>
<body style="background:#f4f4f4; display:flex; justify-content:center; align-items:center; min-height:100vh; margin:0; padding:50px;">
  <div style="position:relative; width:950px; height:420px; background:#477A58; border-radius:24px; overflow:visible;">
    <div style="padding: 50px; color:white; font-family:sans-serif; max-width:450px;">
      <div style="width:34px; height:3px; background:white; margin-bottom:28px;"></div>
      <h2 style="font-size:46px; font-weight:700; line-height:1; margin:0 0 20px 0; letter-spacing:-0.03em;">TRADE SHOWS /<br/>BRAND ACTIVATION</h2>
      <p style="font-size:18px; opacity:0.9; margin:0 0 35px 0;">We create the experiences that make brands matter.</p>
      <div style="display:inline-flex; align-items:center; gap:12px; background:white; color:#111; padding:10px 22px; border-radius:999px; font-size:15px; font-weight:600;">Learn More &rarr;</div>
    </div>
    <svg viewBox="0 0 640 640" style="position:absolute; right:-55px; top:-50px; width:580px; height:580px; overflow:visible; pointer-events:none;">
      <defs>
        <clipPath id="starClip">
          <path d="{star}" />
        </clipPath>
      </defs>
      <!-- Outer Outline -->
      <path d="{outline}" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.6" />
      <!-- Star Clipped Image -->
      <image href="src/assets/trade-show-activation.jpg" x="120" y="70" width="500" height="500" preserveAspectRatio="xMidYMid slice" clip-path="url(#starClip)" />
    </svg>
  </div>
</body>
</html>
"""
with open('test_star.html', 'w', encoding='utf-8') as f:
    f.write(html)
print('test_star.html generated successfully!')
