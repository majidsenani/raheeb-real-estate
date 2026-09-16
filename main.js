/* منطق الواجهة المشترك */

/* ---------- أيقونات SVG بخط ذهبي بسيط (بدل صور فوتوغرافية) ---------- */
const ICONS = {
  villa: `<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M10 78 V40 L50 12 L90 40 V78 Z"/><path d="M38 78 V52 H62 V78"/><path d="M22 78 V50 H32 V78"/><path d="M68 78 V50 H78 V78"/><path d="M50 12 V2"/></svg>`,
  apartment: `<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="22" y="6" width="56" height="72"/><line x1="22" y1="24" x2="78" y2="24"/><line x1="22" y1="42" x2="78" y2="42"/><line x1="22" y1="60" x2="78" y2="60"/><line x1="40" y1="6" x2="40" y2="78"/><line x1="60" y1="6" x2="60" y2="78"/></svg>`,
  land: `<svg viewBox="0 0 100 80" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 66 L30 30 L46 50 L62 20 L94 66 Z"/><line x1="6" y1="66" x2="94" y2="66"/></svg>`,
  arch: `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 92 V50 C20 26 34 10 50 10 C66 10 80 26 80 50 V92"/></svg>`
};

function iconFor(type){ return ICONS[type] || ICONS.villa; }

function formatPrice(n, lang){
  const num = Number(n).toLocaleString(lang === 'ar' ? 'ar-SA' : 'en-US');
  return lang === 'ar' ? `${num} ريال` : `SAR ${num}`;
}

/* ---------- تطبيق إعدادات الموقع (الأرقام، من نحن، التواصل) ---------- */
function applySiteSettings(lang){
  const s = getSettings();

  const statListings = document.getElementById('statListings');
  const statCities = document.getElementById('statCities');
  const statYears = document.getElementById('statYears');
  if(statListings) statListings.textContent = lang === 'ar' ? `+${s.listings}` : `${s.listings}+`;
  if(statCities) statCities.textContent = lang === 'ar' ? `+${s.cities}` : `${s.cities}+`;
  if(statYears) statYears.textContent = String(s.years);

  const aboutTitle = document.getElementById('aboutTitle');
  const aboutP1 = document.getElementById('aboutP1');
  const aboutP2 = document.getElementById('aboutP2');
  if(aboutTitle) aboutTitle.textContent = lang === 'ar' ? s.aboutTitleAr : s.aboutTitleEn;
  if(aboutP1) aboutP1.textContent = lang === 'ar' ? s.aboutP1Ar : s.aboutP1En;
  if(aboutP2) aboutP2.textContent = lang === 'ar' ? s.aboutP2Ar : s.aboutP2En;

  document.querySelectorAll('.js-email').forEach(el => { el.textContent = s.email; });
  document.querySelectorAll('.js-phone').forEach(el => { el.textContent = s.phone; });
}

/* ---------- الشريط العلوي ---------- */
function initNav(){
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if(toggle && links){
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
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
      ${p.image ? `<img src="${p.image}" alt="${title}" loading="lazy">` : iconFor(p.type)}
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

/* ---------- الصفحة الرئيسية: عرض عقارات مميزة ---------- */
function renderFeatured(){
  const el = document.getElementById('featuredGrid');
  if(!el) return;
  const lang = getLang();
  const list = getProperties().slice(0, 3);
  el.innerHTML = list.map(p => cardHTML(p, lang)).join('');
}

/* ---------- صفحة كل العقارات: فلاتر ---------- */
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

/* ---------- صفحة تفاصيل عقار ---------- */
function renderPropertyDetail(){
  const root = document.getElementById('detailRoot');
  if(!root) return;
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const p = getPropertyById(id);
  const lang = getLang();

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
          <div class="detail-media">${p.image ? `<img src="${p.image}" alt="${title}">` : iconFor(p.type)}</div>
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

/* ---------- نموذج التواصل (عرض تجريبي بدون خادم) ---------- */
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
const ADMIN_PASSWORD = 'raheeb2026'; // ⚠️ عرض تجريبي فقط — غيّرها لاحقاً وانقل التحقق لخادم حقيقي

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

  function showPanel(){
    gate.classList.add('hide');
    panel.classList.remove('hide');
    renderList();
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
          <span>${lang === 'ar' ? p.city : p.cityEn} · ${formatPrice(p.price, lang)}</span>
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

  /* رفع صورة العقار: نضغطها عبر canvas ونخزنها Base64 داخل localStorage */
  const imageInput = document.getElementById('propImageInput');
  const imagePreview = document.getElementById('propImagePreview');
  let pendingImage = null;

  function compressImage(file, maxWidth, quality){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const scale = Math.min(1, maxWidth / img.width);
          const canvas = document.createElement('canvas');
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  }

  if(imageInput){
    imageInput.addEventListener('change', async () => {
      const file = imageInput.files[0];
      if(!file) return;
      try{
        pendingImage = await compressImage(file, 800, 0.72);
        imagePreview.src = pendingImage;
        imagePreview.classList.remove('hide');
      }catch(e){ pendingImage = null; }
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
      bedrooms: fd.get('type') === 'land' ? null : Number(fd.get('bedrooms') || 0),
      descAr: fd.get('descAr'), descEn: fd.get('descEn'),
      tag: fd.get('tag') || '', tagEn: fd.get('tagEn') || '',
      image: pendingImage || null
    });
    form.reset();
    pendingImage = null;
    imagePreview.classList.add('hide');
    imagePreview.src = '';
    addedMsg.classList.remove('hide');
    renderList();
    setTimeout(() => addedMsg.classList.add('hide'), 3000);
  });

  resetBtn.addEventListener('click', () => {
    resetToSeed();
    renderList();
  });

  document.addEventListener('langchange', () => { if(!panel.classList.contains('hide')) renderList(); });

  /* نموذج إعدادات الموقع */
  const settingsForm = document.getElementById('settingsForm');
  if(settingsForm){
    function fillSettingsForm(){
      const s = getSettings();
      Object.keys(s).forEach(key => {
        const input = settingsForm.elements[key];
        if(input) input.value = s[key];
      });
    }
    fillSettingsForm();
    enterBtn.addEventListener('click', fillSettingsForm);

    settingsForm.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(settingsForm);
      const s = {
        years: Number(fd.get('years')), cities: Number(fd.get('cities')), listings: Number(fd.get('listings')),
        email: fd.get('email'), phone: fd.get('phone'),
        aboutTitleAr: fd.get('aboutTitleAr'), aboutTitleEn: fd.get('aboutTitleEn'),
        aboutP1Ar: fd.get('aboutP1Ar'), aboutP1En: fd.get('aboutP1En'),
        aboutP2Ar: fd.get('aboutP2Ar'), aboutP2En: fd.get('aboutP2En')
      };
      saveSettings(s);
      applySiteSettings(getLang());
      const savedMsg = document.getElementById('settingsSaved');
      savedMsg.classList.remove('hide');
      setTimeout(() => savedMsg.classList.add('hide'), 3000);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderFeatured();
  renderPropertiesPage();
  renderPropertyDetail();
  initContactForm();
  initAdmin();
});
document.addEventListener('langchange', () => {
  renderFeatured();
});
