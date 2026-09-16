/* ============================================================
   КотоБлог — экраны прототипа. Альбомная ориентация 844×390.
   Минималистичная подача: иконочный набор вместо эмодзи,
   выдвижное меню, цвет только на трёх кошельках.
   ============================================================ */

/* иконка из спрайта */
const ic = (n, cls) => `<svg class="i${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

/* ---------- Персонаж: кот-блогер Мурчик ---------- */
function cat(opts) {
  opts = opts || {};
  const anim = opts.still ? '' : 'breathe';
  const wag = opts.still ? '' : 'tail-wag';
  const blink = opts.still ? '' : 'blink';
  return `
<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
  <g class="${anim}">
    <g class="${wag}">
      <path d="M170 196 C214 196 224 152 200 128 C188 116 168 122 171 138 C174 151 192 150 192 163 C192 180 178 186 166 186 Z" fill="#E28F3E"/>
    </g>
    <ellipse cx="120" cy="184" rx="56" ry="44" fill="#F0A054"/>
    <ellipse cx="120" cy="194" rx="34" ry="30" fill="#FFEAD2"/>
    <ellipse cx="92" cy="216" rx="18" ry="11" fill="#FFEAD2"/>
    <ellipse cx="148" cy="216" rx="18" ry="11" fill="#FFEAD2"/>
    <path d="M66 78 L63 28 L106 56 Z" fill="#F0A054"/>
    <path d="M77 71 L76 44 L97 60 Z" fill="#FFB6BC"/>
    <path d="M174 78 L177 28 L134 56 Z" fill="#F0A054"/>
    <path d="M163 71 L164 44 L143 60 Z" fill="#FFB6BC"/>
    <ellipse cx="120" cy="106" rx="60" ry="52" fill="#F0A054"/>
    <g stroke="#DD8A32" stroke-width="6" stroke-linecap="round">
      <path d="M104 62 L99 76"/><path d="M120 58 L120 74"/><path d="M136 62 L141 76"/>
    </g>
    <ellipse cx="120" cy="128" rx="35" ry="24" fill="#FFF5E8"/>
    <g class="${blink}">
      <ellipse cx="98" cy="102" rx="12.5" ry="14.5" fill="#33261B"/>
      <ellipse cx="142" cy="102" rx="12.5" ry="14.5" fill="#33261B"/>
      <circle cx="102" cy="96" r="4.4" fill="#fff"/>
      <circle cx="146" cy="96" r="4.4" fill="#fff"/>
    </g>
    <ellipse cx="78" cy="122" rx="10" ry="6.5" fill="#FF9AAB" opacity=".45"/>
    <ellipse cx="162" cy="122" rx="10" ry="6.5" fill="#FF9AAB" opacity=".45"/>
    <path d="M113 120 h14 a3 3 0 0 1 2.4 4.8 l-7 8 a3 3 0 0 1 -4.8 0 l-7 -8 a3 3 0 0 1 2.4 -4.8 Z" fill="#FF8DA0"/>
    <path d="M120 133 q0 8 -9 8 M120 133 q0 8 9 8" stroke="#33261B" stroke-width="3.2" fill="none" stroke-linecap="round"/>
    <g stroke="#8A5320" stroke-width="2.8" stroke-linecap="round" opacity=".8">
      <path d="M86 124 L54 115"/><path d="M86 133 L54 137"/>
      <path d="M154 124 L186 115"/><path d="M154 133 L186 137"/>
    </g>
    <path d="M52 106 Q120 16 188 106" stroke="#6C5CE7" stroke-width="9" fill="none" stroke-linecap="round"/>
    <rect x="38" y="94" width="27" height="41" rx="13.5" fill="#5B4BD6"/>
    <rect x="175" y="94" width="27" height="41" rx="13.5" fill="#5B4BD6"/>
  </g>
</svg>`;
}

/* ---------- Наставник: сова Копилка ---------- */
function owl() {
  return `
<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="20" cy="22" rx="13" ry="14" fill="#8B7BEF"/>
  <path d="M7.5 13.5 8 5.5 15 10.5Z" fill="#8B7BEF"/>
  <path d="M32.5 13.5 32 5.5 25 10.5Z" fill="#8B7BEF"/>
  <ellipse cx="20" cy="26" rx="8.5" ry="9" fill="#EFECFF"/>
  <circle cx="14.5" cy="18" r="6" fill="#fff"/>
  <circle cx="25.5" cy="18" r="6" fill="#fff"/>
  <circle cx="14.5" cy="18.5" r="2.8" fill="#33261B"/>
  <circle cx="25.5" cy="18.5" r="2.8" fill="#33261B"/>
  <path d="M20 21.5 17.5 25h5Z" fill="#E8912A"/>
  <path d="M15 35.5h3M22 35.5h3" stroke="#E8912A" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;
}

/* ---------- Комната на весь экран: фон сцены, а не карточка ---------- */
const roomScene = () => `
<svg class="room-bg" viewBox="0 0 844 390" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
  <rect width="844" height="390" fill="#F3ECE2"/>
  <rect y="264" width="844" height="126" fill="#E7DAC7"/>
  <rect y="259" width="844" height="6" fill="#D7C6AE"/>

  <!-- окно -->
  <rect x="96" y="44" width="148" height="130" rx="13" fill="#fff"/>
  <rect x="104" y="52" width="132" height="114" rx="7" fill="#DBEAF7"/>
  <circle cx="137" cy="86" r="17" fill="#F8F0DA"/>
  <ellipse cx="200" cy="130" rx="29" ry="12" fill="#fff" opacity=".85"/>
  <ellipse cx="176" cy="123" rx="19" ry="9" fill="#fff" opacity=".85"/>
  <rect x="168" y="52" width="4" height="114" fill="#fff"/>
  <rect x="104" y="107" width="132" height="4" fill="#fff"/>

  <!-- кольцевой свет -->
  <rect x="497" y="206" width="7" height="84" rx="3.5" fill="#C9BEB0"/>
  <path d="M486 292h29" stroke="#C9BEB0" stroke-width="7" stroke-linecap="round"/>
  <circle cx="500" cy="180" r="31" fill="none" stroke="#F9F2E1" stroke-width="12"/>
  <circle cx="500" cy="180" r="31" fill="none" stroke="#EBDCB2" stroke-width="2"/>

  <!-- растение на полу -->
  <g transform="translate(76,198)">
    <ellipse cx="22" cy="26" rx="9" ry="24" fill="#8ACBB0"/>
    <ellipse cx="10" cy="34" rx="9" ry="20" fill="#7FC0A3" transform="rotate(-24 10 34)"/>
    <ellipse cx="34" cy="32" rx="9" ry="21" fill="#6BB393" transform="rotate(20 34 32)"/>
    <path d="M6 52h32l-4 40H10Z" fill="#D89B72"/>
  </g>

  <!-- ковёр -->
  <ellipse cx="352" cy="330" rx="206" ry="46" fill="#E5E0F6"/>
  <ellipse cx="352" cy="330" rx="158" ry="34" fill="#EFEBFA"/>
</svg>`;

/* ============================================================
   Помощники разметки
   ============================================================ */
const status = () => `
<div class="s-status">
  <span>9:41</span>
  <span class="sig">
    <i style="width:3px;height:5px"></i><i style="width:3px;height:8px"></i><i style="width:3px;height:11px"></i>
    <span class="bat"></span>
  </span>
</div>`;

const NAV = [
  ['home', 'home', 'Дом'], ['studio', 'video', 'Блог'], ['shop', 'bag', 'Магазин'],
  ['budget', 'wallet', 'Бюджет'], ['school', 'cap', 'Учёба']
];

/* свёрнутая рейка + выдвижное меню */
const rail = (active) => `
<div class="s-rail">
  <button class="rail-burger" data-menu="open" aria-label="Меню">${ic('menu')}</button>
  ${NAV.map(([id, icon, label]) =>
    `<button class="rail-i ${id === active ? 'is-on' : ''}" data-go="${id}" aria-label="${label}">${ic(icon)}</button>`
  ).join('')}
  <span class="rail-sp"></span>
  <button class="rail-i" data-go="awards" aria-label="Достижения">${ic('trophy')}</button>
  <button class="rail-i" data-go="parent" aria-label="Родителям">${ic('user')}</button>
</div>`;

const menuPanel = (active) => {
  const item = (id, icon, label, extra, dot) => `
    <button class="menu-i ${id === active ? 'is-on' : ''}" data-go="${id}">
      ${dot ? `<span class="dot" style="background:var(--${dot})"></span>` : ic(icon)}
      <b>${label}</b>${extra ? `<em>${extra}</em>` : ''}
    </button>`;
  return `
<div class="menu-scrim" data-menu="close"></div>
<aside class="menu">
  <div class="menu-head">
    <div class="menu-ava">${cat({ still: 1 })}</div>
    <div class="menu-who"><b>Мурчик</b><span>Аня · уровень 4</span></div>
    <button class="menu-x" data-menu="close" aria-label="Закрыть">${ic('close', 'sm')}</button>
  </div>
  <div class="menu-coins"><span>${ic('coin', 'sm')} Всего монет</span><b>640</b></div>
  <nav class="menu-nav">
    <div class="menu-col">
      <span class="menu-label">Игра</span>
      ${item('home', 'home', 'Дом питомца')}
      ${item('studio', 'video', 'Студия блога')}
      <span class="menu-label">Деньги</span>
      ${item('bills', null, 'Нужное', '310', 'need')}
      ${item('piggy', null, 'Копилка', '245', 'save')}
      ${item('shop', null, 'Хотелки', '85', 'want')}
      ${item('budget', 'wallet', 'Распределение')}
    </div>
    <div class="menu-col">
      <span class="menu-label">Обучение</span>
      ${item('school', 'cap', 'Школа денег')}
      ${item('awards', 'trophy', 'Достижения')}
      ${item('report', 'chart', 'Отчёт недели')}
      <span class="menu-label">Ещё</span>
      ${item('parent', 'settings', 'Настройки')}
      ${item('parent', 'user', 'Родителям')}
    </div>
  </nav>
</aside>`;
};

const coins = (n) => `<div class="coin-pill">${ic('coin', 'sm')}${n}</div>`;

const topBack = (title, sub, to, extra) => `
<div class="s-top">
  <button class="h-back" data-go="${to || 'home'}">${ic('chev-left', 'sm')}</button>
  <div class="h-title"><b>${title}</b><span>${sub}</span></div>
  ${extra || ''}
  ${coins(640)}
</div>`;

const walletChips = (n, s, w) => `
<div class="wallets">
  <button class="wallet need" data-go="bills">${ic('receipt', 'sm')}<span class="w-t"><u>Нужное</u><b>${n}</b></span></button>
  <button class="wallet save" data-go="piggy">${ic('piggy', 'sm')}<span class="w-t"><u>Копилка</u><b>${s}</b></span></button>
  <button class="wallet want" data-go="shop">${ic('sparkle', 'sm')}<span class="w-t"><u>Хотелки</u><b>${w}</b></span></button>
</div>`;

const homeBar = () => '<span class="s-home-bar"></span>';

/* ---------- Дом питомца: комната во весь экран, интерфейс поверх ----------
   Используется дважды — сам экран и экран с открытым меню.               */
const homeHtml = () => `
<div class="scene-bg">${roomScene()}</div>
<div class="scene-cat">${cat()}</div>
${status()}
<div class="s-stage">
  ${rail('home')}
  <div class="hud">
    <div class="hud-top">
      <div class="who">
        <b>Мурчик</b>
        <div class="lvl"><div class="lvl-bar"><i style="width:62%"></i></div><span>ур. 4</span></div>
      </div>
      ${walletChips(310, 245, 85)}
      ${coins(640)}
    </div>

    <div class="hud-badge glass">${ic('flame', 'xs')} 7 дней подряд</div>

    <div class="hud-side">
      <div class="hud-stats glass">
        <div class="stat">${ic('bowl', 'sm')}<span class="meta"><u>Сытость<em>58%</em></u><span class="bar"><i class="mid" style="width:58%"></i></span></span></div>
        <div class="stat">${ic('drop', 'sm')}<span class="meta"><u>Чистота<em>24%</em></u><span class="bar"><i class="low" style="width:24%"></i></span></span></div>
        <div class="stat">${ic('smile', 'sm')}<span class="meta"><u>Настроение<em>82%</em></u><span class="bar"><i class="ok" style="width:82%"></i></span></span></div>
        <div class="stat">${ic('bolt', 'sm')}<span class="meta"><u>Энергия<em>71%</em></u><span class="bar"><i class="ok" style="width:71%"></i></span></span></div>
      </div>

      <div class="acts">
        <button class="act glass">${ic('bowl')}<b>Еда</b><span class="price">20</span></button>
        <button class="act glass urgent">${ic('drop')}<b>Душ</b><span class="price">15</span></button>
        <button class="act glass">${ic('toy')}<b>Игра</b><span class="price">даром</span></button>
        <button class="act glass">${ic('moon')}<b>Сон</b><span class="price">даром</span></button>
      </div>

      <button class="btn cta" data-go="studio">${ic('video', 'sm')} Снять новое видео</button>
    </div>
  </div>
  ${menuPanel('home')}
</div>
${homeBar()}`;

/* ============================================================
   ЭКРАНЫ
   ============================================================ */
const SCREENS = [

/* 1 ─────────────────────────────────────────────── СТАРТ */
{
  id: 'start', group: 'Вход', title: 'Старт',
  kicker: 'Экран 1', lead: 'Первое касание. Ничего лишнего: герой, одна кнопка и выбор профиля картинкой — без пароля и без помощи взрослого.',
  ui: ['Кот занимает половину экрана и несёт всю эмоцию', 'Единственная акцентная кнопка на экране', 'Вход «Родителям» намеренно тише — это не детский путь'],
  learn: 'Тут ещё ничему не учим — задача экрана удержать внимание за три секунды.',
  chips: ['Без текстового ввода', 'Один акцент', 'Тап-зоны ≥ 44 px'],
  html: `
${status()}
<div class="s-stage">
  <div class="start">
    <div class="start-cat">${cat()}</div>
    <div class="start-copy">
      <div class="kicker">Игра про карманные деньги</div>
      <h1>КотоБлог</h1>
      <p class="sub">Мурчик ведёт блог и зарабатывает.<br>А ты решаешь, на что потратить.</p>
      <button class="btn" data-go="home">Играть ${ic('arrow-right', 'sm')}</button>
      <div class="profiles">
        <button class="prof is-on"><span class="pic">${ic('user')}</span><b>Аня</b></button>
        <button class="prof"><span class="pic">${ic('user')}</span><b>Тимур</b></button>
        <button class="prof"><span class="pic">${ic('plus')}</span><b>Новый</b></button>
      </div>
      <button class="btn ghost sm start-parent" data-go="parent">${ic('settings', 'sm')} Родителям</button>
    </div>
  </div>
</div>
${homeBar()}`
},

/* 2 ─────────────────────────────────────────────── ДОМ */
{
  id: 'home', group: 'Игра', title: 'Дом питомца',
  kicker: 'Экран 2', lead: 'Главный экран — это сама комната во весь экран, а не карточка с питомцем. Интерфейс лежит поверх сцены на матовом стекле и своего фона не имеет.',
  ui: ['Комната занимает весь кадр: у питомца нет отдельного «окна»', 'HUD собран в правую колонку и по краям — центр сцены свободен', 'Панели из матового стекла: комната просматривается насквозь', 'Рейка без подложки — иконки просто лежат на сцене'],
  learn: 'Деньги разделены на три части ещё до траты. Цвет закрепляется: синий — обязательное, зелёный — сбережения, розовый — желания.',
  chips: ['Сцена во весь экран', 'Матовое стекло вместо панелей', 'Цвет = смысл'],
  html: homeHtml()
},

/* 3 ─────────────────────────────────────────────── МЕНЮ */
{
  id: 'menu', group: 'Игра', title: 'Меню', rootClass: 'menu-open',
  kicker: 'Экран 3', lead: 'Свёрнутая рейка держит пять основных разделов, а по кнопке-бургеру выезжает полное меню с подписями и остатками по кошелькам.',
  ui: ['Рейка в 66 px без подложки — активный раздел залит акцентом', 'В меню разделы сгруппированы: Игра · Деньги · Обучение · Ещё', 'У денежных пунктов вместо иконки — цветная точка кошелька и остаток', 'Меню выезжает поверх сцены, фон затемняется, закрыть можно тапом мимо'],
  learn: 'Меню само по себе учит структуре: ребёнок видит, что деньги — это три отдельных места, а не один общий счёт.',
  chips: ['Попробуйте бургер в рейке', 'Группировка по смыслу', 'Остатки прямо в меню'],
  html: homeHtml()
},

/* 4 ─────────────────────────────────────────── СТУДИЯ */
{
  id: 'studio', group: 'Игра', title: 'Студия блога',
  kicker: 'Экран 4', lead: 'Слева — что снимаем, справа — чем снимаем. Связь между оборудованием и доходом видна без перехода на другой экран.',
  ui: ['Стоимость в ресурсах — иконками, а не текстовой кашей', 'Доход указан до съёмки: решение принимается осознанно', 'Выбранный формат отмечен заливкой, а не тенью', 'Заблокированный формат подсказывает нужную покупку'],
  learn: 'Доход не случаен: он зависит от состояния кота и от того, что раньше купили для блога. Это и есть инвестиция.',
  chips: ['Доход ≠ случайность', 'Причина → следствие', 'Мотивация копить'],
  html: `
${status()}
<div class="s-stage">
  ${rail('studio')}
  <div class="s-main">
    ${topBack('Студия', 'Выбери, что снимаем сегодня', 'home')}
    <div class="s-body">
      <div class="cols c-3-2">
        <div class="stack tight">
          <button class="vid is-on" data-go="result">
            <span class="pic">${ic('toy')}</span>
            <span class="meta"><b>Обзор игрушек</b><span>Любимый формат подписчиков</span>
              <span class="costs"><em>${ic('bolt', 'xs')} 30</em><em>${ic('smile', 'xs')} 10</em><em>${ic('clock', 'xs')} 2 мин</em></span>
            </span>
            <span class="pay"><b>250</b><span>монет</span></span>
          </button>
          <button class="vid" data-go="result">
            <span class="pic">${ic('bowl')}</span>
            <span class="meta"><b>Готовим вкусняшку</b><span>Нужен корм на кухне</span>
              <span class="costs"><em>${ic('bolt', 'xs')} 20</em><em>${ic('bowl', 'xs')} 15</em><em>${ic('clock', 'xs')} 1 мин</em></span>
            </span>
            <span class="pay"><b>160</b><span>монет</span></span>
          </button>
          <button class="vid" data-go="result">
            <span class="pic">${ic('sound')}</span>
            <span class="meta"><b>Танцевальный челлендж</b><span>Нужно хорошее настроение</span>
              <span class="costs"><em>${ic('bolt', 'xs')} 35</em><em>${ic('smile', 'xs')} 20</em><em>${ic('clock', 'xs')} 3 мин</em></span>
            </span>
            <span class="pay"><b>310</b><span>монет</span></span>
          </button>
          <div class="vid locked">
            <span class="pic">${ic('monitor')}</span>
            <span class="meta"><b>Стрим про игры</b><span>Откроется с камерой 4K</span>
              <span class="costs"><em>${ic('bolt', 'xs')} 50</em><em>${ic('clock', 'xs')} 6 мин</em></span>
            </span>
            <span class="pay"><b>700</b><span>монет</span></span>
          </div>
        </div>

        <div class="stack tight">
          <div class="mentor">
            <span class="face">${owl()}</span>
            <p>Мурчик бодрый — успеете снять <b>длинное видео</b>. Но после него коту нужен отдых.</p>
          </div>
          <div class="card">
            <div class="card-h">${ic('chart', 'sm')}<b>Оборудование</b><em>+40% к доходу</em></div>
            <div class="row plain">${ic('lamp', 'sm')}<span class="meta"><b>Кольцевая лампа</b></span><span class="val" style="color:var(--save)">+15%</span></div>
            <div class="row plain">${ic('mic', 'sm')}<span class="meta"><b>Микрофон</b></span><span class="val" style="color:var(--save)">+25%</span></div>
            <div class="row plain" style="opacity:.5">${ic('camera', 'sm')}<span class="meta"><b>Камера 4K</b><span>не куплена</span></span>${ic('lock', 'sm')}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('studio')}
</div>
${homeBar()}`
},

/* 5 ─────────────────────────────────────── РЕЗУЛЬТАТ */
{
  id: 'result', group: 'Игра', title: 'Итог съёмки',
  kicker: 'Экран 5', lead: 'Момент награды. Слева — крупная цифра, справа — честная арифметика: доход разложен на базу и бонусы от покупок.',
  ui: ['Рейка и меню убраны: уйти можно только к распределению дохода', 'Разбор дохода строкой за строкой, включая минус за грязного кота', 'Один акцентный блок, остальное — белое на бумаге'],
  learn: 'Купленная неделю назад лампа продолжает приносить деньги. Так объясняется отложенная выгода.',
  chips: ['Разбор дохода', 'Отложенная выгода', 'Нельзя пропустить бюджет'],
  html: `
${status()}
<div class="s-stage">
  <div class="s-main wide">
    <div class="s-body fit">
      <div class="cols c-2-3">
        <div class="result-hero">
          <div class="cat">${cat()}</div>
          <u>Видео вышло</u>
          <b>+252</b>
          <span>монеты за «Обзор игрушек»</span>
        </div>
        <div class="stack tight">
          <div class="kpis">
            <div class="kpi">${ic('eye', 'sm')}<b>12.4k</b><span>просмотров</span></div>
            <div class="kpi">${ic('heart', 'sm')}<b>980</b><span>лайков</span></div>
            <div class="kpi">${ic('users', 'sm')}<b>+64</b><span>подписчика</span></div>
          </div>
          <div class="card">
            <div class="card-h">${ic('pie', 'sm')}<b>Из чего сложился доход</b></div>
            <div class="calc">
              <div class="calc-row"><span>${ic('eye', 'xs')} База за просмотры</span><b>180</b></div>
              <div class="calc-row"><span>${ic('lamp', 'xs')} Кольцевая лампа</span><b class="plus">+27</b></div>
              <div class="calc-row"><span>${ic('mic', 'xs')} Микрофон</span><b class="plus">+45</b></div>
              <div class="calc-row"><span>${ic('smile', 'xs')} Кот в хорошем настроении</span><b class="plus">+10</b></div>
              <div class="calc-row"><span>${ic('drop', 'xs')} Кот грязный — зрители заметили</span><b class="minus">−10</b></div>
              <div class="calc-row total"><span>Итого</span><b>252</b></div>
            </div>
          </div>
          <button class="btn" data-go="budget">Разложить по кошелькам ${ic('arrow-right', 'sm')}</button>
        </div>
      </div>
    </div>
  </div>
</div>
${homeBar()}`
},

/* 6 ────────────────────────────────── БЮДЖЕТ (ЯДРО) */
{
  id: 'budget', group: 'Деньги', title: 'Распределение дохода',
  kicker: 'Экран 6 · ключевой', lead: 'Сердце игры. Три кошелька стоят рядом как три банки на полке — пропорция читается мгновенно, а ползунки связаны между собой.',
  ui: ['Сумма и полоса пропорций — в одной строке над кошельками', 'Заливка ползунка повторяет цвет своего кошелька', 'У «Нужного» есть минимум: подпись меняется на предупреждение', 'Кнопка блокируется и называет точную нехватку'],
  learn: 'Главный навык: сначала обязательные расходы, потом сбережения, и только в конце — желания. Ограничение не запрещает ошибиться, но делает последствие видимым.',
  chips: ['Попробуйте подвигать ползунки', 'Правило 50/30/20 по-детски', 'Ошибка допустима и объяснима'],
  html: `
${status()}
<div class="s-stage">
  <div class="s-main wide">
    <div class="s-top">
      <button class="h-back" data-go="result">${ic('chev-left', 'sm')}</button>
      <div class="h-title"><b>Твой доход</b><span>Разложи 252 монеты по трём кошелькам</span></div>
      <div class="income-strip">
        <span class="amt"><u>Пришло</u><b>252</b></span>
        <span class="bars">
          <span class="split">
            <i class="need" data-bar="need" style="width:48%"></i>
            <i class="save" data-bar="save" style="width:32%"></i>
            <i class="want" data-bar="want" style="width:20%"></i>
          </span>
          <span class="split-legend">
            <span><i style="background:var(--need)"></i>Нужное</span>
            <span><i style="background:var(--save)"></i>Копилка</span>
            <span><i style="background:var(--want)"></i>Хотелки</span>
          </span>
        </span>
        <span class="left">Осталось<b data-left>0</b></span>
      </div>
    </div>

    <div class="s-body fit">
      <div class="cols c-3">
        <div class="jar need">
          <div class="jar-h">
            <span class="ic">${ic('receipt', 'sm')}</span>
            <span class="meta"><b>Нужное</b><span>Еда, наполнитель, интернет</span></span>
          </div>
          <div class="jar-amt"><b data-amt="need">120</b><span data-pct="need">48%</span></div>
          <input type="range" class="slider" data-jar="need" min="0" max="252" value="120">
          <div class="jar-note" data-note="need">${ic('check', 'xs')} минимум 120 закрыт</div>
        </div>

        <div class="jar save">
          <div class="jar-h">
            <span class="ic">${ic('piggy', 'sm')}</span>
            <span class="meta"><b>Копилка</b><span>Цель: камера 4K</span></span>
          </div>
          <div class="jar-amt"><b data-amt="save">80</b><span data-pct="save">32%</span></div>
          <input type="range" class="slider" data-jar="save" min="0" max="252" value="80">
          <div class="jar-note">${ic('target', 'xs')} до цели осталось 380</div>
        </div>

        <div class="jar want">
          <div class="jar-h">
            <span class="ic">${ic('sparkle', 'sm')}</span>
            <span class="meta"><b>Хотелки</b><span>Игрушки, наряды, декор</span></span>
          </div>
          <div class="jar-amt"><b data-amt="want">52</b><span data-pct="want">20%</span></div>
          <input type="range" class="slider" data-jar="want" min="0" max="252" value="52">
          <div class="jar-note">${ic('crown', 'xs')} корона стоит 120</div>
        </div>
      </div>

      <div class="cols c-3-2 foot-row">
        <div class="mentor">
          <span class="face">${owl()}</span>
          <p>Сначала отложи на <b>обязательное</b> — на этой неделе коту нужно 120 монет на еду и интернет. Иначе блог остановится.</p>
        </div>
        <button class="btn green" data-go="piggy" data-confirm>Разложить по кошелькам</button>
      </div>
    </div>
  </div>
</div>
${homeBar()}`
},

/* 7 ───────────────────────────────── КОПИЛКА И ЦЕЛЬ */
{
  id: 'piggy', group: 'Деньги', title: 'Копилка и цель',
  kicker: 'Экран 7', lead: 'Сбережения бессмысленны без цели. Слева — куда копим, справа — за сколько дней и что уже получилось раньше.',
  ui: ['Кольцо прогресса вместо процента текстом', 'Два прогноза рядом: сравнение темпов «по 80» и «по 120»', 'История закрытых целей как доказательство «у меня получалось»', 'Снять деньги можно, но рядом честное предупреждение'],
  learn: 'Накопление = цель + регулярность + время. Прогноз «ещё 6 дней» делает ожидание осязаемым.',
  chips: ['Цель вместо абстракции', 'Прогноз срока', 'История успехов'],
  html: `
${status()}
<div class="s-stage">
  ${rail('budget')}
  <div class="s-main">
    ${topBack('Копилка', 'Коплю на камеру 4K', 'home')}
    <div class="s-body">
      <div class="cols c-2-3">
        <div class="goal">
          <div class="ring">
            <svg viewBox="0 0 150 150">
              <circle cx="75" cy="75" r="64" fill="none" stroke="#E9E5DE" stroke-width="12"/>
              <circle cx="75" cy="75" r="64" fill="none" stroke="#0FB47F" stroke-width="12"
                      stroke-linecap="round" stroke-dasharray="273 130"/>
            </svg>
            <div class="mid"><b>68%</b><u>820 из 1200</u></div>
          </div>
          <h3>${ic('camera', 'sm')} Камера 4K</h3>
          <p>Откроет формат «Стрим про игры» — до 700 монет за видео</p>
        </div>

        <div class="stack tight">
          <div class="cols c-1-1">
            <div class="forecast">${ic('calendar', 'sm')}<p>По <b>80 монет</b> с видео — цель закроется <b>через 6 дней</b>.</p></div>
            <div class="forecast">${ic('bolt', 'sm')}<p>По <b>120</b> — управишься за <b>4 дня</b>, но хотелок будет меньше.</p></div>
          </div>

          <div class="sec-title"><b>Уже накопил раньше</b><span>2 цели</span></div>
          <div class="row done">${ic('mic', 'sm')}<span class="meta"><b>Микрофон</b><span>Накопил за 9 дней · +25% к доходу</span></span>${ic('check', 'sm ok')}</div>
          <div class="row done">${ic('lamp', 'sm')}<span class="meta"><b>Кольцевая лампа</b><span>Накопил за 5 дней · +15% к доходу</span></span>${ic('check', 'sm ok')}</div>
          <div class="row">${ic('home', 'sm')}<span class="meta"><b>Домик-студия</b><span>2 400 монет · следующая цель</span></span>${ic('lock', 'sm')}</div>

          <div class="cols c-3-2 foot-row">
            <p class="fine">Если возьмёшь 200 монет из копилки, цель отодвинется на 3 дня</p>
            <button class="btn ghost sm">Взять из копилки</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('piggy')}
</div>
${homeBar()}`
},

/* 8 ──────────────────────────────────────── МАГАЗИН */
{
  id: 'shop', group: 'Деньги', title: 'Магазин',
  kicker: 'Экран 8', lead: 'Витрина разделена на три вкладки по кошелькам. Купить «хотелку» деньгами из «нужного» нельзя — это и есть урок.',
  ui: ['Вкладки в шапке, у активной — точка цвета своего кошелька', 'Четыре товара в ряд: цены удобно сравнивать', 'Прибавка к доходу — спокойная зелёная метка, а не кричащий бейдж', 'Недоступный товар не прячется: показывает, сколько не хватает'],
  learn: 'Разница между «нужно» и «хочется» перестаёт быть словами: это два разных кошелька с разными остатками.',
  chips: ['Нужное / Для блога / Хотелки', 'Видимый дефицит', 'Вложение vs трата'],
  html: `
${status()}
<div class="s-stage">
  ${rail('shop')}
  <div class="s-main">
    ${topBack('Магазин', 'Кошелёк «Копилка»: 245 монет', 'home', `
      <div class="tabs">
        <button class="tab need" data-tab="shop"><span class="dot"></span>Нужное</button>
        <button class="tab save is-on" data-tab="shop"><span class="dot"></span>Для блога</button>
        <button class="tab want" data-tab="shop"><span class="dot"></span>Хотелки</button>
      </div>`)}
    <div class="s-body">
      <div class="mentor">
        <span class="face">${owl()}</span>
        <p>Вещи для блога — это <b>вложение</b>: они дороже, но потом каждое видео приносит больше.</p>
      </div>
      <div class="shop">
        <div class="item save">
          <span class="boost">+25%</span>
          <span class="pic">${ic('camera', 'lg')}</span>
          <b>Камера 4K</b><span class="sub">Открывает стримы</span>
          <span class="buy off">Не хватает 380</span>
        </div>
        <div class="item save">
          <span class="boost">+12%</span>
          <span class="pic">${ic('tripod', 'lg')}</span>
          <b>Штатив</b><span class="sub">Ровная картинка</span>
          <span class="buy">${ic('coin', 'xs')} 340</span>
        </div>
        <div class="item save">
          <span class="boost">+8%</span>
          <span class="pic">${ic('palette', 'lg')}</span>
          <b>Фон для съёмки</b><span class="sub">Яркая стена</span>
          <span class="buy">${ic('coin', 'xs')} 180</span>
        </div>
        <div class="item save">
          <span class="boost">+30%</span>
          <span class="pic">${ic('monitor', 'lg')}</span>
          <b>Монтажный стол</b><span class="sub">Быстрее ролики</span>
          <span class="buy off">Не хватает 1 130</span>
        </div>
        <div class="item save">
          <span class="owned">Есть</span>
          <span class="pic">${ic('mic', 'lg')}</span>
          <b>Микрофон</b><span class="sub">Чистый звук</span>
          <span class="buy off">Куплено</span>
        </div>
        <div class="item save">
          <span class="owned">Есть</span>
          <span class="pic">${ic('lamp', 'lg')}</span>
          <b>Кольцевая лампа</b><span class="sub">Свет для съёмки</span>
          <span class="buy off">Куплено</span>
        </div>
        <div class="item want">
          <span class="pic">${ic('toy', 'lg')}</span>
          <b>Клубок-мячик</b><span class="sub">+15 к настроению</span>
          <span class="buy">${ic('coin', 'xs')} 40</span>
        </div>
        <div class="item want">
          <span class="pic">${ic('crown', 'lg')}</span>
          <b>Корона</b><span class="sub">Наряд для видео</span>
          <span class="buy off">Не хватает 35</span>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('shop')}
</div>
${homeBar()}`
},

/* 9 ──────────────────────────────── ОБЯЗАТЕЛЬНЫЕ СЧЕТА */
{
  id: 'bills', group: 'Деньги', title: 'Обязательные счета',
  kicker: 'Экран 9', lead: 'Обязательства со сроками. Слева — сколько откладывать каждую неделю, справа — что и когда нужно закрыть.',
  ui: ['Сумма недели вынесена влево как постоянный ориентир', 'Просрочка — единственная красная строка на экране', 'Оплаченное теряет фон и уходит в серый', 'Автоплатёж отдельной понятной настройкой'],
  learn: 'Регулярные платежи повторяются каждую неделю. Их можно предсказать заранее — значит, можно спланировать.',
  chips: ['Сроки и просрочка', 'Предсказуемость расходов', 'Планирование недели'],
  html: `
${status()}
<div class="s-stage">
  ${rail('budget')}
  <div class="s-main">
    ${topBack('Обязательное', 'Кошелёк «Нужное»: 310 монет', 'home')}
    <div class="s-body fit">
      <div class="cols c-2-3">
        <div class="stack tight">
          <div class="card tint">
            <div class="card-h">${ic('receipt', 'sm')}<b>К оплате на неделе</b></div>
            <div class="big-sum">205</div>
            <p class="fine">Это повторяется каждую неделю. Откладывай столько — и блог не остановится.</p>
          </div>
          <div class="card">
            <div class="toggle-row">
              ${ic('refresh', 'sm')}
              <span class="meta"><b>Платить автоматически</b><span>Спишется из «Нужного» в срок</span></span>
              <button class="toggle on" data-toggle></button>
            </div>
          </div>
          <button class="btn">Оплатить всё · 205</button>
        </div>

        <div class="stack tight scrolly">
          <div class="sec-title"><b>Нужно оплатить</b><span>3 счёта</span></div>
          <div class="row alert">${ic('globe', 'sm')}<span class="meta"><b>Интернет для блога</b><span class="red">Просрочен на 1 день</span></span><span class="val">80</span></div>
          <div class="row">${ic('bowl', 'sm')}<span class="meta"><b>Корм на неделю</b><span>Оплатить до пятницы</span></span><span class="val">75</span></div>
          <div class="row">${ic('box', 'sm')}<span class="meta"><b>Наполнитель</b><span>Оплатить до воскресенья</span></span><span class="val">50</span></div>
          <div class="sec-title"><b>Уже оплачено</b><span>2 счёта</span></div>
          <div class="row done">${ic('drop', 'sm')}<span class="meta"><b>Вода и свет в домике</b><span>Оплачено во вторник</span></span><span class="val muted">40</span></div>
          <div class="row done">${ic('health', 'sm')}<span class="meta"><b>Витамины</b><span>Оплачено в понедельник</span></span><span class="val muted">30</span></div>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('bills')}
</div>
${homeBar()}`
},

/* 10 ────────────────────────────────── ОТЧЁТ НЕДЕЛИ */
{
  id: 'report', group: 'Обучение', title: 'Отчёт за неделю',
  kicker: 'Экран 10', lead: 'Обратная связь без нотаций. Три колонки: вывод, доходы-расходы и фактическое распределение — всё сравнивается одним взглядом.',
  ui: ['Вывод и оба графика рядом, без прокрутки', 'Расход приглушён прозрачностью — доход важнее', 'Факт и рекомендуемое 50/30/20 в одном блоке', 'Звёзды вместо оценки и ровно один совет'],
  learn: 'Ребёнок видит своё поведение со стороны в цифрах: сколько заработал, сколько отложил, где сорвался на хотелки.',
  chips: ['Рефлексия', 'Факт vs рекомендация', 'Один совет, не список'],
  html: `
${status()}
<div class="s-stage">
  ${rail('school')}
  <div class="s-main">
    ${topBack('Итоги недели', '9–15 марта · неделя 6', 'home')}
    <div class="s-body fit">
      <div class="cols c-4-3-3">
        <div class="stack tight">
          <div class="verdict">
            <div class="stars">${ic('star', 'sm')}${ic('star', 'sm')}${ic('star', 'sm')}${ic('star', 'sm')}${ic('star', 'sm off')}</div>
            <b>Отличная неделя</b>
            <p>Ты отложил 31% дохода — больше, чем на прошлой неделе. Совет: в четверг ты потратил на хотелки 180 монет и не хватило на корм.</p>
          </div>
          <div class="kpis">
            <div class="kpi">${ic('video', 'sm')}<b>7</b><span>видео</span></div>
            <div class="kpi">${ic('piggy', 'sm')}<b>+510</b><span>в копилку</span></div>
            <div class="kpi">${ic('flame', 'sm')}<b>7</b><span>дней</span></div>
          </div>
          <button class="btn ghost sm" data-go="parent">Показать родителям</button>
        </div>

        <div class="card">
          <div class="card-h">${ic('chart', 'sm')}<b>Доход и расход</b></div>
          <div class="chart">
            <div class="col"><span class="pair"><i class="inc" style="height:42%"></i><i class="exp" style="height:30%"></i></span><u>Пн</u></div>
            <div class="col"><span class="pair"><i class="inc" style="height:55%"></i><i class="exp" style="height:38%"></i></span><u>Вт</u></div>
            <div class="col"><span class="pair"><i class="inc" style="height:30%"></i><i class="exp" style="height:52%"></i></span><u>Ср</u></div>
            <div class="col"><span class="pair"><i class="inc" style="height:68%"></i><i class="exp" style="height:88%"></i></span><u>Чт</u></div>
            <div class="col"><span class="pair"><i class="inc" style="height:80%"></i><i class="exp" style="height:46%"></i></span><u>Пт</u></div>
            <div class="col"><span class="pair"><i class="inc" style="height:95%"></i><i class="exp" style="height:60%"></i></span><u>Сб</u></div>
            <div class="col"><span class="pair"><i class="inc" style="height:72%"></i><i class="exp" style="height:34%"></i></span><u>Вс</u></div>
          </div>
          <div class="legend">
            <span><i style="background:var(--save)"></i>Заработал 1 640</span>
            <span><i style="background:var(--want);opacity:.55"></i>Потратил 1 130</span>
          </div>
        </div>

        <div class="card">
          <div class="card-h">${ic('pie', 'sm')}<b>Куда ушли деньги</b></div>
          <div class="donut-wrap">
            <svg class="donut" viewBox="0 0 42 42">
              <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#F3F0EA" stroke-width="6"/>
              <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#3B82F6" stroke-width="6" stroke-dasharray="45 55" stroke-dashoffset="0"/>
              <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#0FB47F" stroke-width="6" stroke-dasharray="30 70" stroke-dashoffset="-46"/>
              <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#F2506B" stroke-width="6" stroke-dasharray="22 78" stroke-dashoffset="-77"/>
            </svg>
            <div class="donut-keys">
              <div class="donut-key"><i style="background:var(--need)"></i><u>Нужное</u><b>46%</b></div>
              <div class="donut-key"><i style="background:var(--save)"></i><u>Копилка</u><b>31%</b></div>
              <div class="donut-key"><i style="background:var(--want)"></i><u>Хотелки</u><b>23%</b></div>
              <div class="donut-key advice"><u>Мы советуем</u><b>50 / 30 / 20</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('report')}
</div>
${homeBar()}`
},

/* 11 ────────────────────────────────── ШКОЛА ДЕНЕГ */
{
  id: 'school', group: 'Обучение', title: 'Школа денег',
  kicker: 'Экран 11', lead: 'Теория короткими уроками. Слева — что сделать сегодня, справа — дорожка уроков, которая открывается по мере игры.',
  ui: ['Задания дня и уроки видны одновременно — одно ведёт к другому', 'Текущий урок выделен заливкой, пройденные — галочкой', 'Урок — две минуты, не лекция', 'Награда за урок в монетах, а не в абстрактных очках'],
  learn: 'Понятия вводятся после опыта: сначала ребёнок распределил деньги, потом узнал, что это называется бюджетом.',
  chips: ['Теория после практики', 'Микроуроки по 2 минуты', 'Задания = привычка'],
  html: `
${status()}
<div class="s-stage">
  ${rail('school')}
  <div class="s-main">
    ${topBack('Школа денег', 'Пройдено 4 из 12 уроков', 'home')}
    <div class="s-body fit">
      <div class="cols c-2-3">
        <div class="stack tight">
          <div class="mentor tall">
            <span class="face">${owl()}</span>
            <p><b>Сова Копилка.</b> Твой урок на сегодня — «Зачем откладывать?». Две минуты, и получишь 50 монет.</p>
          </div>
          <div class="sec-title"><b>Задания на сегодня</b><span>2 из 3</span></div>
          <div class="row done">${ic('video', 'sm')}<span class="meta"><b>Снять одно видео</b><span>Награда: 20 монет</span></span>${ic('check', 'sm ok')}</div>
          <div class="row done">${ic('piggy', 'sm')}<span class="meta"><b>Отложить 50 монет</b><span>Награда: 30 монет</span></span>${ic('check', 'sm ok')}</div>
          <div class="row">${ic('receipt', 'sm')}<span class="meta"><b>Закрыть счета вовремя</b><span>Награда: 40 монет</span></span>${ic('arrow-right', 'sm')}</div>
        </div>

        <div class="stack tight scrolly">
          <div class="sec-title"><b>Уроки</b><span>12 всего</span></div>
          <div class="lesson done"><span class="num">${ic('check', 'xs')}</span><span class="meta"><b>Откуда берутся деньги</b><span>Пройден · 2 мин</span></span>${ic('chev-right', 'sm')}</div>
          <div class="lesson done"><span class="num">${ic('check', 'xs')}</span><span class="meta"><b>Нужное и желаемое</b><span>Пройден · 2 мин</span></span>${ic('chev-right', 'sm')}</div>
          <div class="lesson done"><span class="num">${ic('check', 'xs')}</span><span class="meta"><b>Что такое цена</b><span>Пройден · 3 мин</span></span>${ic('chev-right', 'sm')}</div>
          <div class="lesson done"><span class="num">${ic('check', 'xs')}</span><span class="meta"><b>Три кошелька</b><span>Пройден · 2 мин</span></span>${ic('chev-right', 'sm')}</div>
          <div class="lesson now"><span class="num">5</span><span class="meta"><b>Зачем откладывать?</b><span>Сейчас · 2 мин · ${ic('coin', 'xs')} +50</span></span>${ic('chev-right', 'sm')}</div>
          <div class="lesson locked"><span class="num">6</span><span class="meta"><b>Что такое скидка</b><span>${ic('lock', 'xs')} после урока 5</span></span>${ic('chev-right', 'sm')}</div>
          <div class="lesson locked"><span class="num">7</span><span class="meta"><b>Почему вещи дорожают</b><span>${ic('lock', 'xs')} на 8 уровне</span></span>${ic('chev-right', 'sm')}</div>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('school')}
</div>
${homeBar()}`
},

/* 12 ──────────────────────────────────── ДОСТИЖЕНИЯ */
{
  id: 'awards', group: 'Обучение', title: 'Достижения',
  kicker: 'Экран 12', lead: 'Награды за финансовое поведение, а не за время в игре. Слева — серия дней, справа — коллекция в четыре столбца.',
  ui: ['Серия дней отдельным блоком: привычка важнее разового успеха', 'Полученные и закрытые награды в одной сетке', 'Закрытая награда объясняет условие и показывает прогресс'],
  learn: 'Закрепляем правильное поведение: «отложил 10 раз подряд» ценится выше, чем «потратил много».',
  chips: ['Награда за поведение', 'Видимые цели', 'Привычка > разовый успех'],
  html: `
${status()}
<div class="s-stage">
  ${rail('school')}
  <div class="s-main">
    ${topBack('Достижения', 'Получено 7 из 24', 'home')}
    <div class="s-body fit">
      <div class="cols c-2-3">
        <div class="stack tight">
          <div class="streak">
            <span class="flame">${ic('flame', 'xl')}</span>
            <b>7 дней подряд</b>
            <span>Ещё 3 дня — и получишь «Железную привычку»</span>
            <div class="bar"><i style="width:70%"></i></div>
          </div>
          <div class="row">${ic('shield', 'sm')}<span class="meta"><b>Железная привычка</b><span>Откладывай 10 дней подряд</span></span><span class="val muted">7/10</span></div>
          <div class="row">${ic('target', 'sm')}<span class="meta"><b>Идеальный бюджет</b><span>Уложись в 50/30/20 пять недель</span></span><span class="val muted">1/5</span></div>
        </div>

        <div class="stack tight scrolly">
          <div class="sec-title"><b>Получено</b><span>7</span></div>
          <div class="badges">
            <div class="badge"><span class="ic">${ic('piggy', 'sm')}</span><b>Первая копилка</b></div>
            <div class="badge"><span class="ic">${ic('video', 'sm')}</span><b>10 видео</b></div>
            <div class="badge"><span class="ic">${ic('receipt', 'sm')}</span><b>Всё вовремя</b></div>
            <div class="badge"><span class="ic">${ic('lamp', 'sm')}</span><b>Первое вложение</b></div>
          </div>
          <div class="sec-title"><b>Ещё не открыто</b><span>17</span></div>
          <div class="badges">
            <div class="badge off"><span class="ic">${ic('shield', 'sm')}</span><b>Железная привычка</b></div>
            <div class="badge off"><span class="ic">${ic('gem', 'sm')}</span><b>Копил 30 дней</b></div>
            <div class="badge off"><span class="ic">${ic('trophy', 'sm')}</span><b>100k подписчиков</b></div>
            <div class="badge off"><span class="ic">${ic('target', 'sm')}</span><b>Идеальный бюджет</b></div>
            <div class="badge off"><span class="ic">${ic('camera', 'sm')}</span><b>Камера 4K</b></div>
            <div class="badge off"><span class="ic">${ic('cap', 'sm')}</span><b>Все 12 уроков</b></div>
            <div class="badge off"><span class="ic">${ic('chart', 'sm')}</span><b>5 000 монет</b></div>
            <div class="badge off"><span class="ic">${ic('star', 'sm')}</span><b>Топ недели</b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ${menuPanel('awards')}
</div>
${homeBar()}`
},

/* 13 ───────────────────────────────────── РОДИТЕЛЯМ */
{
  id: 'parent', group: 'Взрослым', title: 'Кабинет родителя',
  kicker: 'Экран 13', lead: 'Раздел для взрослого: не игра, а сводка. Другой визуальный язык — тёмная карточка, плотнее, без игровых акцентов.',
  ui: ['Рейка и меню убраны: это не часть детского приложения', 'Привычка накопления за 6 недель одним графиком', 'Готовые темы для разговора с ребёнком', 'Связь с реальными карманными деньгами и лимит времени'],
  learn: 'Перенос в реальную жизнь: игра даёт родителю повод и язык для разговора о настоящих карманных деньгах.',
  chips: ['Другой визуальный язык', 'Связь с реальными деньгами', 'Лимиты и отчёты'],
  html: `
${status()}
<div class="s-stage">
  <div class="s-main wide">
    ${topBack('Родителям', 'Профиль: Аня, 9 лет', 'start')}
    <div class="s-body fit">
      <div class="cols c-1-1">
        <div class="stack tight">
          <div class="p-hero">
            <u>Привычка накопления</u>
            <b>31% дохода</b>
            <div class="mini">
              <div><em>6</em><span>недель в игре</span></div>
              <div><em>+9%</em><span>к 1-й неделе</span></div>
              <div><em>4/5</em><span>целей закрыто</span></div>
            </div>
          </div>
          <div class="card">
            <div class="card-h">${ic('chart', 'sm')}<b>Доля сбережений по неделям</b></div>
            <div class="chart low">
              <div class="col"><span class="pair"><i class="inc" style="height:22%"></i></span><u>1</u></div>
              <div class="col"><span class="pair"><i class="inc" style="height:30%"></i></span><u>2</u></div>
              <div class="col"><span class="pair"><i class="inc" style="height:26%"></i></span><u>3</u></div>
              <div class="col"><span class="pair"><i class="inc" style="height:48%"></i></span><u>4</u></div>
              <div class="col"><span class="pair"><i class="inc" style="height:54%"></i></span><u>5</u></div>
              <div class="col"><span class="pair"><i class="inc" style="height:62%"></i></span><u>6</u></div>
            </div>
            <p class="fine center">Аня стабильно откладывает с 4-й недели. Хороший момент завести настоящую копилку.</p>
          </div>
        </div>

        <div class="stack tight scrolly">
          <div class="sec-title"><b>Что обсудить с ребёнком</b><span></span></div>
          <div class="row">${ic('chat', 'sm')}<span class="meta"><b>«На что копит Мурчик?»</b><span>Аня копит на камеру 6 дней подряд</span></span>${ic('chev-right', 'sm')}</div>
          <div class="row">${ic('chat', 'sm')}<span class="meta"><b>«Почему в четверг не хватило?»</b><span>Потратила на хотелки 180 из 200</span></span>${ic('chev-right', 'sm')}</div>

          <div class="sec-title"><b>Настройки</b><span></span></div>
          <div class="card">
            <div class="toggle-row">
              ${ic('link', 'sm')}
              <span class="meta"><b>Связать с реальными деньгами</b><span>1000 игровых монет = 100 ₽ карманных</span></span>
              <button class="toggle on" data-toggle></button>
            </div>
            <div class="toggle-row">
              ${ic('clock', 'sm')}
              <span class="meta"><b>Лимит времени</b><span>30 минут в день</span></span>
              <button class="toggle on" data-toggle></button>
            </div>
            <div class="toggle-row">
              ${ic('bell', 'sm')}
              <span class="meta"><b>Отчёт на почту</b><span>Каждое воскресенье</span></span>
              <button class="toggle" data-toggle></button>
            </div>
          </div>
          <button class="btn ghost sm" data-go="home">Вернуться в игру</button>
        </div>
      </div>
    </div>
  </div>
</div>
${homeBar()}`
}

];

/* Сценарий главного пути */
const FLOW = [
  ['start', 'Ребёнок заходит', 'Выбирает свой аватар — без пароля и без помощи взрослого.'],
  ['home', 'Видит кота и три кошелька', 'Комната слева, уход справа. Шкала чистоты просела — кнопка «Искупать» подсвечена.'],
  ['menu', 'Открывает меню', 'Разделы сгруппированы, у денежных пунктов — цветная точка и остаток кошелька.'],
  ['studio', 'Идёт снимать видео', 'Выбирает формат. Рядом панель оборудования: видно, за что доплачивают.'],
  ['result', 'Получает доход с разбором', 'Не просто «+252», а откуда: база, лампа, микрофон, бонус за настроение, минус за грязного кота.'],
  ['budget', 'Обязан распределить деньги', 'Ключевой момент. Три кошелька бок о бок, ползунки связаны, пропорция видна сразу.'],
  ['bills', 'Платит по счетам', 'Узнаёт, что у расходов есть сроки, и они повторяются каждую неделю.'],
  ['piggy', 'Проверяет копилку', 'Видит: до камеры 6 дней. Появляется причина отложить больше в следующий раз.'],
  ['shop', 'Заходит в магазин', 'Вся витрина в четыре столбца. На корону не хватает 35 монет — и это нормально.'],
  ['report', 'В воскресенье — итоги', 'Вывод, график по дням и кольцо 46/31/23 против 50/30/20 — одним взглядом.'],
  ['parent', 'Родитель смотрит сводку', 'Видит рост доли сбережений и получает две готовые темы для разговора.']
];
