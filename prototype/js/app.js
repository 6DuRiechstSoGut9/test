/* ============================================================
   КотоБлог — оболочка прототипа.
   Переключение экранов, галерея, сценарий, ползунки бюджета.
   Игровой логики нет: состояние нигде не сохраняется.
   ============================================================ */
(function () {
  'use strict';

  const byId = (id) => document.getElementById(id);
  const S = {};
  SCREENS.forEach((s, i) => { s.n = i + 1; S[s.id] = s; });

  let current = 'home';
  let view = 'device';

  /* ---------------- левая колонка ---------------- */
  function renderRail() {
    const groups = [];
    SCREENS.forEach((s) => {
      let g = groups.find((x) => x.name === s.group);
      if (!g) groups.push((g = { name: s.group, items: [] }));
      g.items.push(s);
    });
    byId('rail').innerHTML = groups.map((g) => `
      <div class="rail-group">
        <h4>${g.name}</h4>
        ${g.items.map((s) => `
          <button class="rail-item ${s.id === current ? 'is-on' : ''}" data-open="${s.id}">
            <span class="rail-num">${s.n}</span>${s.title}
          </button>`).join('')}
      </div>`).join('');
  }

  /* ---------------- правая колонка ---------------- */
  function renderNotes() {
    const s = S[current];
    byId('notes').innerHTML = `
      <div class="note-kicker">${s.kicker} · ${s.group}</div>
      <h2>${s.title}</h2>
      <p class="note-lead">${s.lead}</p>
      <div class="note-block">
        <h5>Решения в интерфейсе</h5>
        <ul class="note-list">${s.ui.map((u) => `<li>${u}</li>`).join('')}</ul>
      </div>
      <div class="note-block note-learn">
        <h5>Чему учит экран</h5>
        <p>${s.learn}</p>
      </div>
      <div class="note-block">
        <h5>Пометки</h5>
        <div class="chips">${s.chips.map((c) => `<span class="chip">${c}</span>`).join('')}</div>
      </div>`;
  }

  /* ---------------- телефон ---------------- */
  function renderPhone() {
    const host = byId('phoneScreen');
    const s = S[current];
    host.innerHTML = `<div class="s ${s.rootClass || ''}">${s.html}</div>`;
    wire(host);
  }

  /* ---------------- галерея ---------------- */
  function renderGallery() {
    byId('gallery').innerHTML = SCREENS.map((s) => `
      <div class="g-card" data-open="${s.id}" role="button" tabindex="0">
        <div class="g-frame"><div class="g-scaler"><div class="s ${s.rootClass || ''}">${s.html}</div></div></div>
        <div class="g-cap"><b>${s.n}. ${s.title}</b><span>${s.group}</span></div>
      </div>`).join('');
    scaleGallery();
  }

  function scaleGallery() {
    document.querySelectorAll('.g-frame').forEach((f) => {
      const sc = f.clientWidth / 844;
      const inner = f.querySelector('.g-scaler');
      if (inner) inner.style.transform = 'scale(' + sc + ')';
    });
  }

  /* Альбомный корпус шире окна на многих экранах — ужимаем его целиком.
     Ширина устройства 866 + две кнопки-стрелки с отступами = 986. */
  const DEV_W = 986, DEV_H = 412;
  function scaleDevice() {
    const host = byId('view-device');
    const wrap = document.querySelector('.device-wrap');
    if (!host || !wrap) return;
    const avail = host.clientWidth || host.parentElement.clientWidth;
    const sc = Math.min(1, Math.max(0.3, (avail - 8) / DEV_W));
    wrap.style.transform = 'scale(' + sc + ')';
    host.style.height = Math.round(DEV_H * sc) + 'px';
  }

  /* ---------------- сценарий ---------------- */
  function renderFlow() {
    byId('flow').innerHTML = `
      <div class="flow-lead">
        <h2>Главный путь за одну сессию</h2>
        <p>Ребёнок не может получить деньги и сразу пойти тратить: между доходом и магазином всегда стоит экран распределения.
           Это единственное жёсткое ограничение игры — всё остальное он решает сам, включая право ошибиться.</p>
      </div>
      ${FLOW.map((f, i) => `
        <button class="flow-step" data-open="${f[0]}">
          <span class="flow-n">${i + 1}</span>
          <span>
            <h3>${f[1]}</h3>
            <p>${f[2]}</p>
            <span class="go">Экран «${S[f[0]].title}» ›</span>
          </span>
        </button>`).join('')}`;
  }

  /* ============================================================
     Интерактив внутри экрана (только визуальная обратная связь)
     ============================================================ */
  function wire(root) {
    root.querySelectorAll('[data-go]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        if (el.hasAttribute('disabled')) return;
        open(el.dataset.go);
      });
    });

    root.querySelectorAll('[data-tab]').forEach((el) => {
      el.addEventListener('click', () => {
        el.parentElement.querySelectorAll('.tab').forEach((t) => t.classList.remove('is-on'));
        el.classList.add('is-on');
      });
    });

    root.querySelectorAll('[data-toggle]').forEach((el) => {
      el.addEventListener('click', () => el.classList.toggle('on'));
    });

    /* выдвижное меню */
    const screen = root.querySelector('.s');
    root.querySelectorAll('[data-menu]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!screen) return;
        screen.classList.toggle('menu-open', el.dataset.menu === 'open');
      });
    });

    root.querySelectorAll('.act, .vid, .item .buy').forEach((el) => {
      el.addEventListener('click', () => {
        el.animate(
          [{ transform: 'scale(1)' }, { transform: 'scale(.94)' }, { transform: 'scale(1)' }],
          { duration: 180, easing: 'ease-out' }
        );
      });
    });

    wireBudget(root);
  }

  /* --- связанные ползунки бюджета --- */
  const TOTAL = 252;
  const MIN_NEED = 120;

  function wireBudget(root) {
    const sliders = Array.prototype.slice.call(root.querySelectorAll('[data-jar]'));
    if (!sliders.length) return;

    const v = { need: 120, save: 80, want: 52 };
    const keys = ['need', 'save', 'want'];

    function paint() {
      // проценты считаем так, чтобы в сумме всегда выходило ровно 100
      const pc = {
        need: Math.round((v.need / TOTAL) * 100),
        save: Math.round((v.save / TOTAL) * 100)
      };
      pc.want = 100 - pc.need - pc.save;

      keys.forEach((k) => {
        const sl = root.querySelector('[data-jar="' + k + '"]');
        if (sl) {
          if (+sl.value !== v[k]) sl.value = v[k];
          sl.style.setProperty('--fill', Math.round((v[k] / TOTAL) * 100) + '%');
        }
        const amt = root.querySelector('[data-amt="' + k + '"]');
        const pct = root.querySelector('[data-pct="' + k + '"]');
        const bar = root.querySelector('[data-bar="' + k + '"]');
        if (amt) amt.textContent = v[k];
        if (pct) pct.textContent = pc[k] + '%';
        if (bar) bar.style.width = pc[k] + '%';
      });

      const short = v.need < MIN_NEED;
      const note = root.querySelector('[data-note="need"]');
      if (note) {
        note.className = short ? 'jar-note warn' : 'jar-note';
        note.innerHTML = short
          ? ic('alert', 'xs') + ' не хватает ' + (MIN_NEED - v.need) + ' на счета'
          : ic('check', 'xs') + ' минимум ' + MIN_NEED + ' закрыт';
      }

      const btn = root.querySelector('[data-confirm]');
      if (btn) {
        btn.toggleAttribute('disabled', short);
        btn.textContent = short
          ? 'Не хватает ' + (MIN_NEED - v.need) + ' на обязательное'
          : 'Разложить по кошелькам';
      }

      const left = root.querySelector('[data-left]');
      if (left) left.textContent = TOTAL - (v.need + v.save + v.want);
    }

    sliders.forEach((sl) => {
      sl.addEventListener('input', () => {
        const key = sl.dataset.jar;
        const val = Math.min(TOTAL, Math.max(0, +sl.value));
        const others = keys.filter((k) => k !== key);
        const rest = TOTAL - val;
        const sum = v[others[0]] + v[others[1]];

        if (sum <= 0) {
          v[others[0]] = Math.round(rest / 2);
          v[others[1]] = rest - v[others[0]];
        } else {
          v[others[0]] = Math.round((rest * v[others[0]]) / sum);
          v[others[1]] = rest - v[others[0]];
        }
        v[key] = val;
        paint();
      });
    });

    paint();
  }

  /* ============================================================
     Навигация оболочки
     ============================================================ */
  function open(id) {
    if (!S[id]) return;
    current = id;
    if (view !== 'device') setView('device');
    renderPhone();
    renderRail();
    renderNotes();
    history.replaceState(null, '', '#' + id);
  }

  function setView(v) {
    view = v;
    document.querySelectorAll('.seg-btn').forEach((b) => b.classList.toggle('is-on', b.dataset.view === v));
    document.querySelectorAll('.view').forEach((el) => el.classList.remove('is-on'));
    byId('view-' + v).classList.add('is-on');
    if (v === 'gallery') scaleGallery();
    if (v === 'device') scaleDevice();
  }

  function step(delta) {
    const i = SCREENS.findIndex((s) => s.id === current);
    open(SCREENS[(i + delta + SCREENS.length) % SCREENS.length].id);
  }

  /* ---------------- события ---------------- */
  document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-open]');
    if (openBtn) { open(openBtn.dataset.open); return; }
    const seg = e.target.closest('.seg-btn');
    if (seg) setView(seg.dataset.view);
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input')) return;
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  byId('prevScreen').addEventListener('click', () => step(-1));
  byId('nextScreen').addEventListener('click', () => step(1));
  window.addEventListener('resize', () => { scaleGallery(); scaleDevice(); });

  /* ---------------- старт ---------------- */
  const fromHash = location.hash.replace('#', '');
  if (S[fromHash]) current = fromHash;

  renderRail();
  renderNotes();
  renderPhone();
  renderGallery();
  renderFlow();
  setView('device');
})();
