/* ENKO website model · vanilla JS, no libraries */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const D = window.ENKO || {};
  const TOTAL = D.ROSTER_TOTAL || 170;
  const SP = new URLSearchParams(location.search);
  const FORCE_GRID = SP.get('hero') === 'grid';
  if (SP.get('shot')) { document.documentElement.setAttribute('data-shot', '1'); const y = parseInt(SP.get('y') || '0', 10); if (y) document.body.style.marginTop = (-y) + 'px'; }

  /* ---------- language ---------- */
  let lang = pickLang();
  function pickLang() {
    const u = new URLSearchParams(location.search).get('lang');
    if (u === 'uk' || u === 'en') return u;
    try { const s = localStorage.getItem('enko-lang'); if (s === 'uk' || s === 'en') return s; } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('uk') === 0 ? 'uk' : 'en';
  }
  const T = (k) => (D.I18N[lang] && D.I18N[lang][k] != null) ? D.I18N[lang][k] : (D.I18N.en[k] != null ? D.I18N.en[k] : k);
  const L = (o) => (o == null) ? '' : (typeof o === 'string' ? o : (o[lang] != null ? o[lang] : o.en));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function translate() {
    document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
    $$('[data-i18n]').forEach((el) => { el.textContent = T(el.getAttribute('data-i18n')); });
    $$('[data-lang-only]').forEach((el) => { el.hidden = el.getAttribute('data-lang-only') !== lang; });
    $$('[data-set-lang]').forEach((b) => b.classList.toggle('on', b.getAttribute('data-set-lang') === lang));
    $$('.ctrl[data-deck]').forEach((b) => b.setAttribute('aria-label', T(b.getAttribute('data-deck') === '-1' ? 'deck.prev' : 'deck.next')));
    renderAll();
    $$('.pop').forEach(splitPop);
    $$('.pop').forEach((el) => { if (isInView(el)) el.classList.add('in'); });
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem('enko-lang', l); } catch (e) {}
    const url = new URL(location.href); url.searchParams.set('lang', l); history.replaceState(null, '', url);
    translate();
  }
  $$('[data-set-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.getAttribute('data-set-lang'))));

  /* ---------- word pop ---------- */
  function splitPop(el) {
    const text = el.textContent.trim();
    if (el.getAttribute('data-split') === text) return;
    const words = text.split(/\s+/);
    el.innerHTML = words.map((w, i) => '<span class="w" style="--i:' + i + '">' + esc(w) + '</span>').join(' ');
    el.setAttribute('data-split', text);
  }
  function isInView(el) { const r = el.getBoundingClientRect(); return r.top < innerHeight && r.bottom > 0; }

  /* ---------- placeholders ---------- */
  function phColor(i) { const h = 215 + (i * 7) % 40, l = 12 + (i * 13) % 16; return 'hsl(' + h + ' 14% ' + l + '%)'; }
  function artistAt(i) {
    const a = D.ARTISTS[i];
    if (a) return { name: a.name, img: a.img, real: true };
    return { name: T('artists.ph') + ' ' + String(i + 1).padStart(3, '0'), img: '', real: false };
  }

  /* ---------- renders ---------- */
  function renderPartners() {
    const ul = $('#partners'); if (!ul) return;
    ul.innerHTML = D.PARTNERS.map((p) => '<li>' + (p.img ? '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy">' : '<a class="txt" href="' + p.url + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>') + '<small>' + esc(L(p.role)) + '</small></li>').join('');
  }
  function renderRoster() {
    const ul = $('#roster'); if (!ul) return;
    ul.innerHTML = D.ARTISTS.map((a) => '<li><img src="' + a.img + '" alt="' + esc(a.name) + '" loading="lazy" width="480" height="600"><b>' + esc(a.name) + '</b><small>' + esc(L(a.role)) + (L(a.note) ? ' · ' + esc(L(a.note)) : '') + '</small></li>').join('');
    const g = $('#rosterMosaic'); if (!g) return;
    let h = '';
    for (let i = 0; i < TOTAL; i++) {
      const a = artistAt(i);
      h += '<div class="mt" tabindex="0" data-name="' + esc(a.name) + '" style="' + (a.real ? 'background-image:url(' + a.img + ')' : 'background-color:' + phColor(i)) + '"></div>';
    }
    g.innerHTML = h;
  }
  function renderTeam() {
    const ul = $('#team'); if (!ul) return;
    ul.innerHTML = D.TEAM.map((m) => '<li><div><b>' + esc(m.name) + '</b><small>' + esc(L(m.role)) + '</small></div><p>' + esc(L(m.weight)) + '</p></li>').join('');
  }
  const ICONS = {
    trophy: '<svg viewBox="0 0 24 24"><path d="M7 3h10v6a5 5 0 0 1-10 0V3z"/><path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3M9 21h6M12 14v7"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
    academy: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    equal: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 10h8M8 14h8"/></svg>',
    apple: '<svg viewBox="0 0 24 24"><path d="M12 3v11"/><circle cx="12" cy="17" r="4"/><path d="M12 3c3 0 4 2 4 2"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 19h16M6 15l4-5 3 3 5-7"/></svg>',
    cover: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="1.5"/><circle cx="12" cy="12" r="4"/></svg>'
  };
  function renderAwards() {
    const ul = $('#awards');
    if (ul) ul.innerHTML = D.AWARDS.map((a) => '<li>' + ICONS[a.icon] + '<span class="yr">' + esc(a.year) + '</span><div><b>' + esc(L(a.title)) + '</b><small>' + esc(L(a.who)) + '</small></div></li>').join('');
    const rail = $('#rail');
    if (rail) rail.innerHTML = D.AWARDS.map((a, i) => '<div class="rail-item"><button type="button" class="rail-btn" style="--d:' + (i * 0.6) + 's" aria-label="' + esc(L(a.title)) + '">' + ICONS[a.icon] + '</button><div class="rail-card" role="tooltip"><span class="yr">' + esc(a.year) + '</span><b>' + esc(L(a.title)) + '</b><small>' + esc(L(a.who)) + '</small></div></div>').join('') + '<span class="rail-lbl">' + esc(T('awards.label')) + '</span>';
  }
  function renderNews() {
    const ul = $('#news'); if (!ul) return;
    ul.innerHTML = D.NEWS.map((n) => '<li><a href="' + n.url + '" target="_blank" rel="noopener"><span class="src">' + esc(n.source) + '<small>' + esc(n.date) + '</small></span><span class="ttl">' + esc(L(n.title)) + '</span><span class="read">' + esc(T('news.read')) + ' ↗</span></a></li>').join('');
  }
  function renderStudios() {
    const ul = $('#studios'); if (!ul) return;
    ul.innerHTML = D.STUDIOS.map((s) => '<li><b>' + esc(L(s.name)) + '</b><span>' + esc(L(s.type)) + '</span><span class="st' + (/development|розроб/i.test(L(s.status)) ? ' dev' : '') + '">' + esc(L(s.status)) + '</span></li>').join('');
  }
  function renderCovers() {
    const g = $('#covers'); if (!g) return;
    let h = '';
    for (let i = 0; i < 48; i++) {
      const real = D.COVERS[i];
      const badge = i % 3 === 1 ? 'gold' : 'platinum';
      h += '<div class="cv ' + badge + '" tabindex="0" data-badge="' + esc(T('badge.' + badge)) + '" style="' + (real ? 'background-image:url(' + real + ')' : 'background-color:' + phColor(i + 40)) + '"></div>';
    }
    g.innerHTML = h;
  }
  function renderCases() {
    const deck = $('#deck'); if (!deck) return;
    deck.innerHTML = D.CASES.map((c) => '<article class="case"><div class="pic' + (c.img ? '' : ' grad') + '"' + (c.img ? ' style="background-image:url(' + c.img + ')"' : '') + '><b>' + esc(c.name) + '</b></div><div class="body"><span class="tag">' + esc(L(c.tag)) + '</span><h4>' + esc(L(c.headline)) + '</h4><div class="stats">' + c.stats.map((s) => '<div><b>' + esc(s.n) + '</b><small>' + esc(L(s.l)) + '</small></div>').join('') + '</div><p>' + esc(L(c.text)) + '</p>' + (c.tbc ? '<span class="tbc">' + esc(L(c.tbc)) + '</span>' : '') + '</div></article>').join('');
    updateDeckCount();
  }
  function renderCaps() {
    const ul = $('#caps'); if (!ul) return;
    ul.innerHTML = T('caps').split('|').map((c) => '<li>' + esc(c) + '</li>').join('');
  }
  function renderBusiness() {
    const o = $('#opps'); if (o) o.innerHTML = D.OPPORTUNITIES.map((x) => '<div><h3>' + esc(L(x.title)) + '</h3><p>' + esc(L(x.text)) + '</p></div>').join('');
    const f = $('#formats'); if (f) f.innerHTML = D.FORMATS.map((x) => '<div><h4>' + esc(x.title) + '</h4><p>' + esc(L(x.text)) + '</p></div>').join('');
    const q = $('#quotes'); if (q) q.innerHTML = D.TESTIMONIALS.map((x) => '<blockquote class="quote"><p>' + esc(L(x.quote)) + '</p><small>' + esc(x.who) + '</small></blockquote>').join('');
  }
  function renderContact() {
    const ul = $('#depts'); if (ul) ul.innerHTML = D.DEPTS.map((d) => '<li><div><b>' + esc(L(d.title)) + '</b><small>' + esc(L(d.desc)) + '</small></div><a href="mailto:' + d.email + '">' + esc(d.email) + '</a></li>').join('');
    const sel = $('#fDept');
    if (sel) { const v = sel.value; sel.innerHTML = D.DEPTS.map((d) => '<option value="' + d.id + '">' + esc(L(d.title)) + '</option>').join(''); if (v) sel.value = v; }
    const faq = $('#faq'); if (faq) faq.innerHTML = (D.FAQ[lang] || D.FAQ.en).map((f) => '<details><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>').join('');
    const ig = $('#igGrid'); if (ig && !ig.children.length) { let h = ''; for (let i = 0; i < 6; i++) { const c = D.COVERS[i]; h += '<div style="' + (c ? 'background-image:url(' + c + ')' : 'background-color:' + phColor(i) + '') + '"></div>'; } ig.innerHTML = h; }
  }
  function renderAll() { renderPartners(); renderRoster(); renderTeam(); renderAwards(); renderNews(); renderStudios(); renderCovers(); renderCases(); renderCaps(); renderBusiness(); renderContact(); }

  /* ---------- hero mosaic: logo made of faces -> grid ---------- */
  function heroMosaic() {
    const box = $('#heroMosaic'); if (!box) return;
    const track = box.closest('.hero-track'), stage = box.closest('.hero-stage');
    const tiles = [];
    for (let i = 0; i < TOTAL; i++) {
      const a = artistAt(i), t = document.createElement('div');
      t.className = 'tile' + (a.real ? '' : ' ph');
      if (a.real) t.style.backgroundImage = 'url(' + a.img + ')'; else t.style.backgroundColor = phColor(i);
      box.appendChild(t); tiles.push(t);
    }
    // mask sampling of the logo
    const cv = document.createElement('canvas'); cv.width = 1160; cv.height = 238;
    const ctx = cv.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fill(new Path2D(D.LOGO_PATH), 'evenodd');
    const img = ctx.getImageData(0, 0, 1160, 238).data;
    const hit = (x, y) => { x = Math.max(0, Math.min(1159, Math.round(x))); y = Math.max(0, Math.min(237, Math.round(y))); return img[(y * 1160 + x) * 4 + 3] > 0; };
    let L1 = [], L2 = [], tL = 8, tG = 8, lastP = -1, raf = 0;
    function measure() {
      const W = box.clientWidth, H = box.clientHeight; if (!W || !H) return;
      let best = null;
      for (let cols = 22; cols <= 96; cols += 2) {
        const rows = Math.max(6, Math.round(cols * 238 / 1160)), cells = [];
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
          const cx = (c + .5) * 1160 / cols, cy = (r + .5) * 238 / rows; let ok = false;
          for (let dy = -6; dy <= 6 && !ok; dy += 6) for (let dx = -6; dx <= 6; dx += 6) if (hit(cx + dx, cy + dy)) { ok = true; break; }
          if (ok) cells.push([c, r]);
        }
        if (cells.length >= TOTAL) { best = { cols, rows, cells }; break; }
        best = { cols, rows, cells };
      }
      const step = best.cells.length / TOTAL, chosen = [];
      for (let i = 0; i < TOTAL; i++) chosen.push(best.cells[Math.min(best.cells.length - 1, Math.floor(i * step))]);
      // logo state: fit width, cap height
      tL = Math.min(W / best.cols, (H * 0.9) / best.rows);
      const lw = best.cols * tL, lh = best.rows * tL, lx = (W - lw) / 2, ly = (H - lh) / 2;
      L1 = new Array(TOTAL);
      for (let i = 0; i < TOTAL; i++) { const c = chosen[(i * 67) % TOTAL]; L1[i] = [lx + c[0] * tL, ly + c[1] * tL]; }
      // grid state
      const gcols = W / H > 1.6 ? 34 : 17, grows = Math.ceil(TOTAL / gcols);
      tG = Math.min(W / gcols, H / grows) * 0.985;
      const gw = gcols * tG, gh = grows * tG, gx = (W - gw) / 2, gy = (H - gh) / 2;
      L2 = new Array(TOTAL);
      for (let i = 0; i < TOTAL; i++) L2[i] = [gx + (i % gcols) * tG, gy + Math.floor(i / gcols) * tG];
      tiles.forEach((t) => { t.style.width = t.style.height = tL + 'px'; });
      lastP = -1; apply();
    }
    function progress() {
      const top = track.getBoundingClientRect().top + scrollY, span = track.offsetHeight - stage.offsetHeight;
      if (span < 40) return 0; /* hero is not pinned: keep the logo state */
      const p = (scrollY - top) / span; return Math.max(0, Math.min(1, p));
    }
    function ease(p) { return p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
    function apply() {
      raf = 0;
      const p = (RM || FORCE_GRID) ? 1 : ease(progress());
      if (p === lastP) return; lastP = p;
      const s = 1 + (tG / tL - 1) * p;
      for (let i = 0; i < TOTAL; i++) {
        const a = L1[i], b = L2[i];
        tiles[i].style.transform = 'translate(' + (a[0] + (b[0] - a[0]) * p).toFixed(1) + 'px,' + (a[1] + (b[1] - a[1]) * p).toFixed(1) + 'px) scale(' + s.toFixed(3) + ')';
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', () => { measure(); });
    measure();
    setTimeout(measure, 300);
  }

  /* ---------- counters ---------- */
  function countUp(el) {
    const raw = el.getAttribute('data-count'), m = raw.match(/^([\d.]+)(.*)$/);
    if (!m || RM) { el.textContent = raw; return; }
    const target = parseFloat(m[1]), suffix = m[2], dec = (m[1].split('.')[1] || '').length, t0 = performance.now(), dur = 1300;
    (function f(now) {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec) + suffix;
      if (p < 1) requestAnimationFrame(f); else el.textContent = raw;
    })(t0);
  }

  /* ---------- observers ---------- */
  function observers() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        if (el.classList.contains('pop')) el.classList.add('in');
        if (el.classList.contains('count')) countUp(el);
        if (el.classList.contains('marker')) el.classList.add('draw');
        io.unobserve(el);
      });
    }, { threshold: 0.2 });
    $$('.pop, .count, .marker').forEach((el) => io.observe(el));
    // scroll-spy + theme
    const secs = $$('.sec');
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const id = en.target.id;
        $$('[data-go]').forEach((a) => a.classList.toggle('on', a.getAttribute('data-go') === id && a.closest('.nav, .nav-m') != null));
        document.documentElement.setAttribute('data-theme', en.target.getAttribute('data-theme') || 'dark');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    secs.forEach((s) => spy.observe(s));
  }

  /* ---------- pixel wipe navigation ---------- */
  function nav() {
    const wipe = $('.wipe');
    if (wipe) for (let i = 0; i < 24; i++) { const s = document.createElement('span'); s.style.transitionDelay = (0.04 + Math.random() * 0.16).toFixed(2) + 's'; wipe.appendChild(s); }
    let busy = false;
    function goTo(id, dept) {
      const el = document.getElementById(id); if (!el) return;
      if (dept) { const sel = $('#fDept'); if (sel) sel.value = dept; }
      if (RM || !wipe || busy) { el.scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); return; }
      busy = true; wipe.classList.add('on');
      setTimeout(() => { el.scrollIntoView({ behavior: 'auto' }); wipe.classList.add('out'); }, 360);
      setTimeout(() => { wipe.classList.remove('on', 'out'); busy = false; }, 900);
      history.replaceState(null, '', '#' + id);
    }
    $$('[data-go]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); goTo(a.getAttribute('data-go'), a.getAttribute('data-dept')); }));
  }

  /* ---------- cases deck ---------- */
  function updateDeckCount() {
    const deck = $('#deck'), c = $('#deckCount'); if (!deck || !c || !deck.children.length) return;
    const w = deck.children[0].getBoundingClientRect().width + 16;
    const i = Math.min(deck.children.length, Math.round(deck.scrollLeft / w) + 1);
    c.textContent = i + ' / ' + deck.children.length;
  }
  function deck() {
    const d = $('#deck'); if (!d) return;
    $$('.ctrl[data-deck]').forEach((b) => b.addEventListener('click', () => {
      const w = d.children[0].getBoundingClientRect().width + 16;
      d.scrollBy({ left: w * parseInt(b.getAttribute('data-deck'), 10), behavior: RM ? 'auto' : 'smooth' });
    }));
    d.addEventListener('scroll', updateDeckCount, { passive: true });
  }

  /* ---------- clocks ---------- */
  function clocks() {
    const k = $('#clockKyiv'), w = $('#clockWarsaw'); if (!k || !w) return;
    const fmt = (tz) => { try { return new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit' }).format(new Date()); } catch (e) { return '--:--'; } };
    const tick = () => { k.textContent = fmt('Europe/Kyiv') === '--:--' ? fmt('Europe/Kiev') : fmt('Europe/Kyiv'); w.textContent = fmt('Europe/Warsaw'); };
    tick(); setInterval(tick, 30000);
  }

  /* ---------- form: mailto routing ---------- */
  function form() {
    const f = $('#form'); if (!f) return;
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const dept = D.DEPTS.find((d) => d.id === $('#fDept').value) || D.DEPTS[0];
      const name = $('#fName').value.trim(), email = $('#fEmail').value.trim(), subj = $('#fSubject').value.trim(), msg = $('#fMessage').value.trim();
      if (!name || !email || !subj || !msg) { f.reportValidity(); return; }
      const body = msg + '\n\n' + name + ' · ' + email;
      location.href = 'mailto:' + dept.email + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- boot ---------- */
  translate();
  heroMosaic();
  observers();
  nav();
  deck();
  clocks();
  form();
  if (location.hash) { const el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(() => el.scrollIntoView({ behavior: 'auto' }), 50); }
})();
