/* منطق الواجهة المشترك */

/* ---------- أيقونات SVG ---------- */
const ICONS = {
  villa: `<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10 78 V40 L50 12 L90 40 V78 Z"/><path d="M38 78 V52 H62 V78"/><path d="M22 78 V50 H32 V78"/><path d="M68 78 V50 H78 V78"/><path d="M50 12 V2"/></svg>`,
  apartment: `<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="22" y="6" width="56" height="72"/><line x1="22" y1="24" x2="78" y2="24"/><line x1="22" y1="42" x2="78" y2="42"/><line x1="22" y1="60" x2="78" y2="60"/><line x1="40" y1="6" x2="40" y2="78"/><line x1="60" y1="6" x2="60" y2="78"/></svg>`,
  floor: `<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="26" y="6" width="48" height="72"/><line x1="26" y1="24" x2="74" y2="24"/><line x1="26" y1="42" x2="74" y2="42"/><line x1="26" y1="60" x2="74" y2="60"/><rect x="34" y="12" width="6" height="6"/><rect x="60" y="12" width="6" height="6"/><rect x="34" y="30" width="6" height="6"/><rect x="60" y="30" width="6" height="6"/><rect x="34" y="48" width="6" height="6"/><rect x="60" y="48" width="6" height="6"/><rect x="44" y="66" width="12" height="12"/></svg>`,
  arch: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 92 V50 C20 26 34 10 50 10 C66 10 80 26 80 50 V92"/></svg>`
};

function iconFor(type){ return ICONS[type] || ICONS.villa; }

function formatPrice(n, lang){
  const num = Number(n).toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-US');
  return lang === 'ar' ? `${num} ريال` : `SAR ${num}`;
}

/* ---------- بناء الهيدر والقائمة الجانبية تلقائياً ---------- */
function buildHeader(){
  const host = document.getElementById('siteHeader');
  if(!host) return;

  host.innerHTML = `
  <header class="site">
    <nav class="nav">

      <button class="nav-toggle" id="navToggle" aria-label="فتح القائمة">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      <a class="brand" href="index.html">
        <img src="logo.png" alt="رحيب المنازل للتطوير العقاري" class="brand-logo">
        <span class="name">رحيب المنازل<small data-i18n="brand.tagline">للتطوير العقاري</small></span>
      </a>

      <div class="nav-links-desktop">
        <a href="index.html" data-i18n="nav.home">الرئيسية</a>
        <a href="index.html#projects" data-i18n="nav.projects">مشاريعنا</a>
        <a href="index.html#about" data-i18n="nav.about">من نحن</a>
        <a href="contact.html" data-i18n="nav.contact">تواصل معنا</a>
      </div>

      <div class="nav-right-desktop">
        <a href="tel:+966920031118" class="nav-phone" dir="ltr">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>+966 9200 31118</span>
        </a>
        <button class="lang-btn" id="langBtn" data-i18n="lang.switch">EN</button>
        <a href="admin.html" class="btn-login" data-i18n="header.login">تسجيل الدخول</a>
      </div>

    </nav>
  </header>

  <div class="drawer-overlay" id="drawerOverlay"></div>

  <aside class="drawer" id="drawer" aria-hidden="true">
    <button class="drawer-close" id="drawerClose" aria-label="إغلاق القائمة">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="6" y1="6" x2="18" y2="18"/>
        <line x1="18" y1="6" x2="6" y2="18"/>
      </svg>
    </button>

    <div class="drawer-brand">
      <img src="logo.png" alt="رحيب المنازل" class="drawer-logo">
      <div class="drawer-brand-text">
        <strong>رحيب المنازل</strong>
        <small>للتطوير العقاري</small>
      </div>
    </div>

    <nav class="drawer-nav">
      <a href="index.html" data-i18n="nav.home">الرئيسية</a>
      <a href="index.html#projects" class="has-children">
        <span data-i18n="nav.projects">مشاريعنا</span>
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </a>
      <a href="index.html#about" data-i18n="nav.about">من نحن</a>
      <a href="#" data-i18n="nav.media">المركز الإعلامي</a>
      <a href="#" data-i18n="nav.interest">سجل اهتمامك</a>
      <a href="#" data-i18n="nav.faq">الأسئلة الشائعة</a>
    </nav>

    <a href="admin.html" class="drawer-login">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
        <polyline points="10 17 15 12 10 7"/>
        <line x1="15" y1="12" x2="3" y2="12"/>
      </svg>
      <span data-i18n="drawer.login">تسجيل الدخول</span>
    </a>

    <div class="drawer-social">
      <a href="#" aria-label="Twitter" class="social-btn twitter">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a href="#" aria-label="Instagram" class="social-btn instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
    </div>
  </aside>
  `;
}

/* ---------- تشغيل القائمة الجانبية ---------- */
function initNav(){
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if(!toggle || !drawer || !overlay) return;

  function openDrawer(){
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer(){
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
  }

  toggle.addEventListener('click', openDrawer);
  if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && drawer.classList.contains('open')){
      closeDrawer();
    }
  });

  drawer.querySelectorAll('.drawer-nav a:not(.has-children), .drawer-login').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(closeDrawer, 150);
    });
  });

  const path = location.pathname.split('/').pop() || 'index.html';
  drawer.querySelectorAll('.drawer-nav a').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
}

/* ---------- بطاقة عقار ---------- */
function cardHTML(p, lang){
  const title = lang === 'ar' ? p.titleAr : p.titleEn;
  const city = lang === 'ar' ? p.city : p.cityEn;
  const tag = lang === 'ar' ? p.tag : p.tagEn;
  return `
  <article class="card">
    <div class="card-media">
      ${tag ? `<span class="card-tag">${tag}</span>` : ''}
      ${iconFor(p.type)}
    </div>
    <div class="card-body">
      <h3>${title}</h3>
      <div class="card-loc">${city}</div>
      <div class="card-meta">
        <span>${p.area} ${t('card.area')}</span>
        ${p.bedrooms ? `<span>${p.bedrooms} ${t('card.bedrooms')}</span>` : ''}
      </div>
      <div class="card-price">${formatPrice(p.price, lang)}</div>
      <a class="card-link" href="property.html?id=${p.id}">${t('card.details')}</a>
    </div>
  </article>`;
}

/* ---------- بطاقة مشروع ---------- */
function projectCardHTML(pr, lang){
  const name = lang === 'ar' ? pr.nameAr : pr.nameEn;
  const loc = lang === 'ar' ? pr.locationAr : pr.locationEn;
  const stage = getStageLabel(pr.stage, lang);
  return `
  <article class="card project-card">
    <div class="card-media">
      <span class="card-tag">${stage}</span>
      ${iconFor(pr.type)}
    </div>
    <div class="card-body">
      <h3>${name}</h3>
      <div class="card-loc">${loc}</div>
      <div class="card-meta">
        <span>${pr.floors} ${t('projects.floors')}</span>
      </div>
    </div>
  </article>`;
}

/* ---------- الصفحة الرئيسية: عقارات مميزة ---------- */
function renderFeatured(){
  const el = document.getElementById('featuredGrid');
  if(!el) return;
  const lang = getLang();
  const list = getProperties().slice(0, 3);
  el.innerHTML = list.map(p => cardHTML(p, lang)).join('');
}

/* ---------- الصفحة الرئيسية: المشاريع ---------- */
function renderProjects(){
  const el = document.getElementById('projectsGrid');
  if(!el) return;
  const lang = getLang();
  const list = getProjects();
  el.innerHTML = list.map(pr => projectCardHTML(pr, lang)).join('');
}

/* ---------- صفحة العقارات: فلاتر ---------- */
function renderPropertiesPage(){
  const grid = document.getElementById('propsGrid');
  if(!grid) return;

  const typeSel = document.getElementById('fType');
  const citySel = document.getElementById('fCity');
  const searchInput = document.getElementById('fSearch');
  const applyBtn = document.getElementById('fApply');
  const emptyState = document.getElementById('emptyState');

  function populateCities(){
    const lang = getLang();
    const cities = [...new Set(getProperties().map(p => lang === 'ar' ? p.city : p.cityEn))];
    citySel.innerHTML = `<option value="">${t('filter.all')}</option>` +
      cities.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  function draw(){
    const lang = getLang();
    let list = getProperties();
    const type = typeSel.value;
    const city = citySel.value;
    const q = (searchInput.value || '').trim();
    if(type) list = list.filter(p => p.type === type);
    if(city) list = list.filter(p => (lang === 'ar' ? p.city : p.cityEn) === city);
    if(q) list = list.filter(p => (p.titleAr + p.titleEn).toLowerCase().includes(q.toLowerCase()));

    if(list.length === 0){
      grid.innerHTML = '';
      emptyState.classList.remove('hide');
    } else {
      emptyState.classList.add('hide');
      grid.innerHTML = list.map(p => cardHTML(p, lang)).join('');
    }
  }

  populateCities();
  draw();
  applyBtn.addEventListener('click', draw);
  searchInput.addEventListener('keydown', e => { if(e.key === 'Enter') draw(); });
  document.addEventListener('langchange', () => { populateCities(); draw(); });
}

/* ---------- تفاصيل عقار ---------- */
function renderPropertyDetail(){
  const root = document.getElementById('detailRoot');
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = getPropertyById(id);

  if(!p){
    root.innerHTML = `<div class="empty-state"><h3>${t('empty.title')}</h3></div>`;
    return;
  }

  function draw(){
    const lang = getLang();
    const title = lang === 'ar' ? p.titleAr : p.titleEn;
    const desc = lang === 'ar' ? p.descAr : p.descEn;
    const city = lang === 'ar' ? p.city : p.cityEn;
    root.innerHTML = `
      <a class="card-link" href="properties.html" style="margin-bottom:20px;">${t('detail.back')}</a>
      <div class="detail-grid mt-lg">
        <div>
          <div class="detail-media">${iconFor(p.type)}</div>
          <div class="detail-facts">
            <div class="fact"><b>${p.area}</b><span>${t('detail.facts.area')} (${t('detail.sqm')})</span></div>
            <div class="fact"><b>${p.bedrooms || '—'}</b><span>${t('detail.facts.beds')}</span></div>
            <div class="fact"><b>${city}</b><span>${t('detail.facts.city')}</span></div>
          </div>
          <h1>${title}</h1>
          <p>${desc}</p>
        </div>
        <aside class="side-card">
          <div class="price">${formatPrice(p.price, lang)}</div>
          <a class="btn" href="contact.html" style="width:100%; text-align:center; display:block;">${t('detail.request')}</a>
        </aside>
      </div>`;
  }
  draw();
  document.addEventListener('langchange', draw);
}

/* ---------- نموذج التواصل ---------- */
function initContactForm(){
  const form = document.getElementById('contactForm');
  if(!form) return;
  const note = document.getElementById('contactSent');
  form.addEventListener('submit', e => {
    e.preventDefault();
    note.textContent = t('contact.sent');
    note.classList.remove('hide');
    form.reset();
  });
}

/* ---------- لوحة التحكم ---------- */
const ADMIN_PASSWORD = 'raheeb2026';

function initAdmin(){
  const gate = document.getElementById('adminGate');
  const panel = document.getElementById('adminPanel');
  if(!gate || !panel) return;

  const passInput = document.getElementById('adminPass');
  const enterBtn = document.getElementById('adminEnter');
  const wrongMsg = document.getElementById('adminWrong');
  const logoutBtn = document.getElementById('adminLogout');
  const form = document.getElementById('adminForm');
  const listEl = document.getElementById('adminList');
  const resetBtn = document.getElementById('adminReset');
  const addedMsg = document.getElementById('adminAdded');

  const projForm = document.getElementById('adminProjectForm');
  const projListEl = document.getElementById('adminProjectList');
  const projAddedMsg = document.getElementById('adminProjectAdded');
  const projResetBtn = document.getElementById('adminProjectsReset');

  function showPanel(){
    gate.classList.add('hide');
    panel.classList.remove('hide');
    renderList();
    renderProjectList();
  }

  if(sessionStorage.getItem('raheeb_admin_ok') === '1') showPanel();

  enterBtn.addEventListener('click', () => {
    if(passInput.value === ADMIN_PASSWORD){
      sessionStorage.setItem('raheeb_admin_ok', '1');
      showPanel();
    } else {
      wrongMsg.classList.remove('hide');
    }
  });

  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('raheeb_admin_ok');
    panel.classList.add('hide');
    gate.classList.remove('hide');
  });

  function renderList(){
    const lang = getLang();
    const list = getProperties();
    listEl.innerHTML = list.map(p => `
      <div class="admin-row">
        <div class="info">
          <b>${lang === 'ar' ? p.titleAr : p.titleEn}</b>
          <span>${getTypeLabel(p.type, lang)} · ${lang === 'ar' ? p.city : p.cityEn} · ${formatPrice(p.price, lang)}</span>
        </div>
        <div class="actions">
          <button class="danger" data-id="${p.id}">${t('admin.delete')}</button>
        </div>
      </div>`).join('');
    listEl.querySelectorAll('button.danger').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteProperty(btn.getAttribute('data-id'));
        renderList();
      });
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    addProperty({
      type: fd.get('type'),
      city: fd.get('city'), cityEn: fd.get('cityEn'),
      titleAr: fd.get('titleAr'), titleEn: fd.get('titleEn'),
      price: Number(fd.get('price')), area: Number(fd.get('area')),
      bedrooms: fd.get('bedrooms') ? Number(fd.get('bedrooms')) : null,
      stage: fd.get('stage') || '',
      descAr: fd.get('descAr'), descEn: fd.get('descEn'),
      tag: fd.get('tag') || '', tagEn: fd.get('tagEn') || ''
    });
    form.reset();
    addedMsg.classList.remove('hide');
    renderList();
    setTimeout(() => addedMsg.classList.add('hide'), 3000);
  });

  resetBtn.addEventListener('click', () => {
    resetToSeed();
    renderList();
  });

  function renderProjectList(){
    if(!projListEl) return;
    const lang = getLang();
    const list = getProjects();
    projListEl.innerHTML = list.map(pr => `
      <div class="admin-row">
        <div class="info">
          <b>${lang === 'ar' ? pr.nameAr : pr.nameEn}</b>
          <span>${lang === 'ar' ? pr.locationAr : pr.locationEn} · ${pr.floors} ${t('projects.floors')} · ${getStageLabel(pr.stage, lang)}</span>
        </div>
        <div class="actions">
          <button class="danger" data-id="${pr.id}">${t('admin.delete')}</button>
        </div>
      </div>`).join('');
    projListEl.querySelectorAll('button.danger').forEach(btn => {
      btn.addEventListener('click', () => {
        deleteProject(btn.getAttribute('data-id'));
        renderProjectList();
      });
    });
  }

  if(projForm){
    projForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(projForm);
      addProject({
        nameAr: fd.get('nameAr'), nameEn: fd.get('nameEn'),
        type: fd.get('type'),
        floors: Number(fd.get('floors')),
        locationAr: fd.get('locationAr'), locationEn: fd.get('locationEn'),
        stage: fd.get('stage'),
        descAr: fd.get('descAr') || '', descEn: fd.get('descEn') || ''
      });
      projForm.reset();
      if(projAddedMsg){
        projAddedMsg.classList.remove('hide');
        setTimeout(() => projAddedMsg.classList.add('hide'), 3000);
      }
      renderProjectList();
    });
  }

  if(projResetBtn){
    projResetBtn.addEventListener('click', () => {
      resetProjectsToSeed();
      renderProjectList();
    });
  }

  document.addEventListener('langchange', () => {
    if(!panel.classList.contains('hide')){ renderList(); renderProjectList(); }
  });
}

/* ---------- التشغيل عند تحميل الصفحة ---------- */
document.addEventListener('DOMContentLoaded', () => {
  buildHeader();   // ← يبني الهيدر والقائمة الجانبية
  initNav();
  renderFeatured();
  renderProjects();
  renderPropertiesPage();
  renderPropertyDetail();
  initContactForm();
  initAdmin();
});
document.addEventListener('langchange', () => {
  renderFeatured();
  renderProjects();
});
