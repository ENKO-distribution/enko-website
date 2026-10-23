#!/bin/sh
# Prerender: renders src/index.html with the real JS (prerender mode) into a static index.html,
# so crawlers and AI search read every section without JavaScript. Run before each push.
set -e
cd "$(dirname "$0")"
PORT=8790
cp src/index.html _prerender.html
python3 -m http.server $PORT --bind 127.0.0.1 --directory . >/dev/null 2>&1 &
PID=$!
sleep 1
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --virtual-time-budget=8000 --dump-dom "http://127.0.0.1:$PORT/_prerender.html?prerender=1&lang=en" > _dump.html 2>/dev/null
kill $PID 2>/dev/null; wait $PID 2>/dev/null || true
rm -f _prerender.html
python3 build_post.py _dump.html index.html
rm -f _dump.html
echo "built index.html ($(wc -c < index.html) bytes)"
