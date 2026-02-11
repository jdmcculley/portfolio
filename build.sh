#!/bin/bash
# ═══════════════════════════════════════════════════
# JD McCulley Portfolio — Design System Build
# ═══════════════════════════════════════════════════
# Edit css/design-system.css, then run this script to
# propagate changes to all portfolio HTML files.
#
# Usage:  ./build.sh
# ═══════════════════════════════════════════════════

DIR="$(cd "$(dirname "$0")" && pwd)"
CSS_FILE="$DIR/css/design-system.css"

if [ ! -f "$CSS_FILE" ]; then
  echo "Error: design-system.css not found in $DIR"
  exit 1
fi

CSS_CONTENT=$(cat "$CSS_FILE")

HTML_FILES=(
  "index.html"
  "case-study-cashback.html"
  "case-study-wallet.html"
  "ai-design-trends.html"
  "design-system-preview.html"
)

for f in "${HTML_FILES[@]}"; do
  FILE="$DIR/$f"
  if [ ! -f "$FILE" ]; then
    echo "⚠  $f not found, skipping"
    continue
  fi

  python3 -c "
import re, sys

with open('$FILE', 'r') as fh:
    content = fh.read()

css = open('$CSS_FILE', 'r').read()

new_block = '''<style id=\"design-system\">
/* ═══ AUTO-INJECTED FROM design-system.css ═══
   Edit design-system.css, then run build.sh to
   propagate changes to all portfolio pages.
   ═══════════════════════════════════════════ */
''' + css + '''
</style>'''

# Replace existing inline design-system block
pattern = r'<style id=\"design-system\">.*?</style>'
if re.search(pattern, content, re.DOTALL):
    content = re.sub(pattern, new_block, content, flags=re.DOTALL)
    with open('$FILE', 'w') as fh:
        fh.write(content)
    print(f'✓  $f updated')
else:
    print(f'⚠  $f — no design-system block found')
"
done

echo ""
echo "Done. All pages synced with design-system.css."
