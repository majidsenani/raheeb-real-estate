/* منطق الواجهة المشترك — Supabase version */

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

/* ---------- بناء الهيدر ---------- */
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
        <img src="logo.png" alt="رحيب المنازل" class="brand-logo">
        <span class="name">رحيب المنازل<small data-i18n="brand.tagline">للتطوير العقاري</small></span>
      </a>
      <div class="nav-links-desktop">
        <a href="index.html" data-i18n="nav.home">الرئيسية</a>
        <a href="index.html#projects" data-i18n="nav.projects">مشاريعنا</a>
        <a href="index.html#about" data-i18n="nav.about">من نحن</a>
        <a href="contact.html" data-i18n="nav.contact">تواصل معنا</a>
      </div>
      <div class="nav-right-desktop">
        <a href="tel:0552144999" class="nav-phone" dir="ltr">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>0552144999</span>
        </a>
        <button class="lang-btn" id="langBtn" data-i18n="lang.switch">EN</button>
        <a href="admin.html" class="btn-login" data-i18n="header.login">تسجيل الدخول</a>
      </div>
    </nav>
  </header>

  <div class="drawer-overlay" id="drawerOverlay"></div>
  <aside class="drawer" id="drawer" aria-hidden="true">
    <button class="drawer-close" id="drawerClose" aria-label="إغلاق">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
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
      <span class="social-username">Raheebhomes</span>
      <div class="social-icons">
        <a href="https://x.com/Raheebhomes" target="_blank" rel="noopener" aria-label="X" class="social-btn twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://instagram.com/Raheebhomes" target="_blank" rel="noopener" aria-label="Instagram" class="social-btn instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://www.tiktok.com/@raheebhomes" target="_blank" rel="noopener" aria-label="TikTok" class="social-btn tiktok">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.68a8.16 8.16 0 0 0 4.77 1.52v-3.45a4.85 4.85 0 0 1-1.84-.06z"/></svg>
        </a>
      </div>
    </div>
  </aside>
  `;
}

function initNav(){
  const toggle = document.getElementById('navToggle');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  if(!toggle || !drawer || !overlay) return;

  function openDrawer(){
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('drawer-open');
  }
  function closeDrawer(){
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('drawer-open');
  }

  toggle.addEventListener('click', openDrawer);
  if(closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
  drawer.querySelectorAll('.drawer-nav a:not(.has-children), .drawer-login').forEach(link => {
    link.addEventListener('click', () => setTimeout(closeDrawer, 150));
  });
}

/* ---------- بطاقة مشروع ---------- */
function projectCardHTML(pr, lang){
  const name = lang === 'ar' ? pr.nameAr : pr.nameEn;
  const loc = lang === 'ar' ? pr.locationAr : pr.locationEn;
  const stage = getStageLabel(pr.stage, lang);

  const coverImg = pr.cover
    ? `<img src="${pr.cover}" alt="${name}" class="card-cover">`
    : iconFor(pr.type);

  const priceLine = pr.price > 0
    ? `<div class="card-price">${formatPrice(pr.price, lang)}</div>` : '';
  const areaLine = pr.area > 0
    ? `<span>${pr.area} ${t('card.area')}</span>` : '';

  const viewsHTML = `<div class="card-views">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
    <span>${pr.views || 0}</span>
  </div>`;

  return `
  <article class="card project-card">
    <a href="project.html?id=${pr.id}" class="card-cover-link">
      <div class="card-media">
        <span class="card-tag">${stage}</span>
        ${coverImg}
      </div>
    </a>
    <div class="card-body">
      <h3><a href="project.html?id=${pr.id}">${name}</a></h3>
      <div class="card-loc">${loc}</div>
      <div class="card-meta">
        <span>${pr.floors} ${t('projects.floors')}</span>
        ${areaLine}
        ${viewsHTML}
      </div>
      ${priceLine}
      <a class="card-link" href="project.html?id=${pr.id}">${t('card.details')}</a>
    </div>
  </article>`;
}

/* ---------- عرض المشاريع ---------- */
async function renderProjects(){
  const el = document.getElementById('projectsGrid');
  if(!el) return;
  const lang = getLang();
  const list = await getProjects();
  el.innerHTML = list.map(pr => projectCardHTML(pr, lang)).join('');
}

/* ---------- تفاصيل مشروع ---------- */
async function renderProjectDetail(){
  const root = document.getElementById('projectDetailRoot');
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  if(id){
    const cookieKey = `viewed_pr_${id}`;
    const alreadyViewed = document.cookie.split('; ').some(c => c.startsWith(cookieKey + '='));
    if(!alreadyViewed){
      await incrementProjectViews(id);
      const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `${cookieKey}=1; expires=${expires}; path=/`;
    }
  }

  const pr = await getProjectById(id);

  if(!pr){
    root.innerHTML = `<div class="empty-state"><h3>${t('empty.title')}</h3></div>`;
    return;
  }

  function draw(){
    const lang = getLang();
    const name = lang === 'ar' ? pr.nameAr : pr.nameEn;
    const loc = lang === 'ar' ? pr.locationAr : pr.locationEn;
    const desc = lang === 'ar' ? pr.descAr : pr.descEn;
    const stage = getStageLabel(pr.stage, lang);

    const allImages = [];
    if(pr.cover) allImages.push(pr.cover);
    if(pr.images && pr.images.length) allImages.push(...pr.images);

    const galleryHTML = allImages.length
      ? `<div class="project-gallery">${allImages.map(img => `<img src="${img}" alt="${name}" loading="lazy">`).join('')}</div>`
      : `<div class="detail-media">${iconFor(pr.type)}</div>`;

    const priceHTML = pr.price > 0 ? `<div class="project-price">${formatPrice(pr.price, lang)}</div>` : '';
    const areaHTML = pr.area > 0 ? `<div class="fact"><b>${pr.area}</b><span>${t('projects.area')} (${t('detail.sqm')})</span></div>` : '';
    const viewsHTML = `<div class="fact"><b>${pr.views || 0}</b><span>${t('projects.views')}</span></div>`;

    root.innerHTML = `
      <a class="card-link" href="index.html#projects" style="margin-bottom:20px;">${t('projects.back')}</a>
      <div class="project-detail-head mt-lg">
        <h1>${name}</h1>
        <span class="project-stage">${stage}</span>
      </div>
      <div class="detail-facts" style="grid-template-columns:repeat(auto-fit,minmax(140px,1fr));">
        <div class="fact"><b>${loc}</b><span>${t('projects.location')}</span></div>
        <div class="fact"><b>${pr.floors}</b><span>${t('projects.floors')}</span></div>
        ${areaHTML}
        ${viewsHTML}
      </div>
      ${galleryHTML}
      ${priceHTML}
      ${desc ? `<p class="project-desc">${desc}</p>` : ''}
      <div style="margin-top:30px;">
        <a class="btn" href="contact.html">${t('detail.request')}</a>
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

async function initAdmin(){
  const gate = document.getElementById('adminGate');
  const panel = document.getElementById('adminPanel');
  if(!gate || !panel) return;

  const passInput = document.getElementById('adminPass');
  const enterBtn = document.getElementById('adminEnter');
  const wrongMsg = document.getElementById('adminWrong');
  const logoutBtn = document.getElementById('adminLogout');

  const projForm = document.getElementById('adminProjectForm');
  const projListEl = document.getElementById('adminProjectList');
  const projAddedMsg = document.getElementById('adminProjectAdded');

  const heroForm = document.getElementById('heroForm');
  const heroListEl = document.getElementById('heroList');
  const heroAddedMsg = document.getElementById('heroAdded');

  async function showPanel(){
    gate.classList.add('hide');
    panel.classList.remove('hide');
    await renderProjectList();
    await renderHeroList();
  }

  if(sessionStorage.getItem('raheeb_admin_ok') === '1') await showPanel();

  enterBtn.addEventListener('click', async () => {
    if(passInput.value === ADMIN_PASSWORD){
      sessionStorage.setItem('raheeb_admin_ok', '1');
      await showPanel();
    } else {
      wrongMsg.classList.remove('hide');
    }
  });

  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('raheeb_admin_ok');
    panel.classList.add('hide');
    gate.classList.remove('hide');
  });

  async function renderProjectList(){
    if(!projListEl) return;
    const lang = getLang();
    const list = await getProjects();
    projListEl.innerHTML = list.map(pr => `
      <div class="admin-row">
        <div class="info">
          <b>${lang === 'ar' ? pr.nameAr : pr.nameEn}</b>
          <span>${lang === 'ar' ? pr.locationAr : pr.locationEn} · ${pr.floors} ${t('projects.floors')} · ${getStageLabel(pr.stage, lang)} · ${pr.views || 0} ${t('projects.views')}</span>
        </div>
        <div class="actions">
          <button class="edit" data-id="${pr.id}">${t('admin.edit')}</button>
          <button class="danger" data-id="${pr.id}">${t('admin.delete')}</button>
        </div>
      </div>`).join('');

    projListEl.querySelectorAll('button.danger').forEach(btn => {
      btn.addEventListener('click', async () => {
        if(!confirm(t('admin.confirmDelete'))) return;
        try{
          await deleteProject(btn.getAttribute('data-id'));
          await renderProjectList();
        }catch(e){ alert('فشل الحذف: ' + e.message); }
      });
    });

    projListEl.querySelectorAll('button.edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const pr = list.find(p => String(p.id) === String(id));
        if(pr) openEditModal(pr);
      });
    });
  }

  async function renderHeroList(){
    if(!heroListEl) return;
    const list = await getHeroImages();
    if(!list.length){
      heroListEl.innerHTML = `<div class="empty-state"><p>${t('admin.hero.empty')}</p></div>`;
      return;
    }
    heroListEl.innerHTML = `<div class="hero-images-grid">
      ${list.map(img => `
        <div class="hero-image-item">
          <img src="${img.url}" alt="Hero image">
          <button class="hero-delete" data-id="${img.id}" aria-label="حذف">✕</button>
        </div>
      `).join('')}
    </div>`;

    heroListEl.querySelectorAll('.hero-delete').forEach(btn => {
      btn.addEventListener('click', async () => {
        if(!confirm(t('admin.hero.confirmDelete'))) return;
        try{
          await deleteHeroImage(btn.getAttribute('data-id'));
          await renderHeroList();
        }catch(e){ alert('فشل الحذف: ' + e.message); }
      });
    });
  }

  if(heroForm){
    heroForm.addEventListener('submit', async e => {
      e.preventDefault();
      const input = document.getElementById('heroFilesInput');
      const files = input.files;

      if(!files || !files.length){
        alert('اختر صور أولاً');
        return;
      }

      const btn = heroForm.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'جاري الرفع...';

      try{
        for(const file of files){
          const url = await sbUpload(file);
          await addHeroImage(url);
        }
        heroForm.reset();
        document.getElementById('heroPreview').innerHTML = '';
        if(heroAddedMsg){
          heroAddedMsg.classList.remove('hide');
          setTimeout(() => heroAddedMsg.classList.add('hide'), 3000);
        }
        await renderHeroList();
      }catch(err){
        alert('فشل الرفع: ' + err.message);
      }finally{
        btn.disabled = false;
        btn.textContent = origText;
      }
    });
  }

  function openEditModal(pr){
    const existing = document.getElementById('editModal');
    if(existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'editModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-box">
        <button class="modal-close" id="modalClose">✕</button>
        <h2>${t('admin.editTitle')}</h2>
        <form id="editForm" class="form-grid">
          <div class="field">
            <label>${t('admin.project.f.nameAr')}</label>
            <input type="text" name="nameAr" value="${pr.nameAr || ''}" required>
          </div>
          <div class="field">
            <label>${t('admin.project.f.nameEn')}</label>
            <input type="text" name="nameEn" value="${pr.nameEn || ''}" required>
          </div>
          <div class="field">
            <label>${t('admin.project.f.type')}</label>
            <select name="type" required>
              <option value="villa" ${pr.type === 'villa' ? 'selected' : ''}>فيلا</option>
              <option value="apartment" ${pr.type === 'apartment' ? 'selected' : ''}>شقة</option>
              <option value="floor" ${pr.type === 'floor' ? 'selected' : ''}>أدوار</option>
            </select>
          </div>
          <div class="field">
            <label>${t('admin.project.f.floors')}</label>
            <input type="number" name="floors" value="${pr.floors || 1}" min="1" required>
          </div>
          <div class="field">
            <label>${t('admin.project.f.locationAr')}</label>
            <input type="text" name="locationAr" value="${pr.locationAr || ''}" required>
          </div>
          <div class="field">
            <label>${t('admin.project.f.locationEn')}</label>
            <input type="text" name="locationEn" value="${pr.locationEn || ''}" required>
          </div>
          <div class="field">
            <label>${t('admin.project.f.stage')}</label>
            <select name="stage" required>
              <option value="sale" ${pr.stage === 'sale' ? 'selected' : ''}>مرحلة البيع</option>
              <option value="finishing" ${pr.stage === 'finishing' ? 'selected' : ''}>مرحلة التشطيب</option>
              <option value="structure" ${pr.stage === 'structure' ? 'selected' : ''}>مرحلة العظم</option>
            </select>
          </div>
          <div class="field">
            <label>${t('admin.project.f.price')}</label>
            <input type="number" name="price" value="${pr.price || 0}" min="0">
          </div>
          <div class="field">
            <label>${t('admin.project.f.area')}</label>
            <input type="number" name="area" value="${pr.area || 0}" min="0">
          </div>
          <div class="field"></div>
          <div class="field full">
            <label>${t('admin.project.f.descAr')}</label>
            <textarea name="descAr">${pr.descAr || ''}</textarea>
          </div>
          <div class="field full">
            <label>${t('admin.project.f.descEn')}</label>
            <textarea name="descEn">${pr.descEn || ''}</textarea>
          </div>
          <div class="field full" style="display:flex; gap:10px;">
            <button type="submit" class="btn">${t('admin.saveChanges')}</button>
            <button type="button" class="btn ghost" id="modalCancel">${t('admin.cancel')}</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(modal);

    const close = () => modal.remove();
    document.getElementById('modalClose').addEventListener('click', close);
    document.getElementById('modalCancel').addEventListener('click', close);
    modal.addEventListener('click', (e) => { if(e.target === modal) close(); });

    document.getElementById('editForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      try{
        await updateProject(pr.id, {
          nameAr: fd.get('nameAr'), nameEn: fd.get('nameEn'),
          type: fd.get('type'),
          floors: Number(fd.get('floors')),
          locationAr: fd.get('locationAr'), locationEn: fd.get('locationEn'),
          stage: fd.get('stage'),
          price: Number(fd.get('price')) || 0,
          area: Number(fd.get('area')) || 0,
          descAr: fd.get('descAr') || '', descEn: fd.get('descEn') || ''
        });
        close();
        await renderProjectList();
        alert(t('admin.savedSuccess'));
      }catch(err){
        alert('فشل التعديل: ' + err.message);
      }
    });
  }

  if(projForm){
    projForm.addEventListener('submit', async e => {
      e.preventDefault();
      const fd = new FormData(projForm);

      const coverFile = fd.get('coverFile');
      const galleryFiles = fd.getAll('galleryFiles');

      const btn = projForm.querySelector('button[type="submit"]');
      const origText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'جاري الرفع...';

      try{
        let coverUrl = '';
        let imagesArr = [];

        if(coverFile && coverFile.size > 0){
          coverUrl = await sbUpload(coverFile);
        }

        if(galleryFiles && galleryFiles.length > 0){
          for(const file of galleryFiles){
            if(file.size > 0){
              const url = await sbUpload(file);
              imagesArr.push(url);
            }
          }
        }

        await addProject({
          nameAr: fd.get('nameAr'), nameEn: fd.get('nameEn'),
          type: fd.get('type'),
          floors: Number(fd.get('floors')),
          locationAr: fd.get('locationAr'), locationEn: fd.get('locationEn'),
          stage: fd.get('stage'),
          price: Number(fd.get('price')) || 0,
          area: Number(fd.get('area')) || 0,
          cover: coverUrl,
          images: imagesArr,
          descAr: fd.get('descAr') || '', descEn: fd.get('descEn') || ''
        });

        projForm.reset();
        document.getElementById('coverPreview').innerHTML = '';
        document.getElementById('galleryPreview').innerHTML = '';
        if(projAddedMsg){
          projAddedMsg.classList.remove('hide');
          setTimeout(() => projAddedMsg.classList.add('hide'), 3000);
        }
        await renderProjectList();
      }catch(err){
        alert('فشل الإضافة: ' + err.message);
      }finally{
        btn.disabled = false;
        btn.textContent = origText;
      }
    });
  }

  document.addEventListener('langchange', async () => {
    if(!panel.classList.contains('hide')){
      await renderProjectList();
      await renderHeroList();
    }
  });
}

/* ---------- التشغيل ---------- */
document.addEventListener('DOMContentLoaded', async () => {
  buildHeader();
  applyLang(getLang());
  initLangToggle();
  initNav();
  await renderProjects();
  await renderProjectDetail();
  initContactForm();
  await initAdmin();
});

document.addEventListener('langchange', async () => {
  await renderProjects();
});
