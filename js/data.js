/* بيانات العقارات والمشاريع — Supabase version */

/* ========== الأنواع ========== */
const TYPES = [
  { value: 'apartment', ar: 'شقق',   en: 'Apartments' },
  { value: 'villa',     ar: 'فلل',   en: 'Villas' },
  { value: 'floor',     ar: 'أدوار', en: 'Floors' }
];

/* ========== المراحل ========== */
const STAGES = [
  { value: 'sale',      ar: 'مرحلة البيع',    en: 'For Sale' },
  { value: 'finishing', ar: 'مرحلة التشطيب',  en: 'Finishing' },
  { value: 'structure', ar: 'مرحلة العظم',    en: 'Structure' }
];

/* ========== كاش داخلي (لتقليل الطلبات) ========== */
let _propertiesCache = null;
let _projectsCache = null;

/* =========================================================
   دوال العقارات
   ========================================================= */

async function getProperties(){
  if(_propertiesCache) return _propertiesCache;
  try{
    const data = await sbSelect('properties');
    // حوّل أسماء الأعمدة من snake_case إلى camelCase
    _propertiesCache = data.map(p => ({
      id: p.id,
      type: p.type,
      city: p.city, cityEn: p.city_en,
      titleAr: p.title_ar, titleEn: p.title_en,
      price: p.price, area: p.area,
      bedrooms: p.bedrooms,
      tag: p.tag, tagEn: p.tag_en,
      stage: p.stage,
      descAr: p.desc_ar, descEn: p.desc_en
    }));
    return _propertiesCache;
  }catch(e){
    console.error('getProperties:', e);
    return [];
  }
}

async function addProperty(prop){
  try{
    const row = {
      title_ar: prop.titleAr, title_en: prop.titleEn,
      city: prop.city, city_en: prop.cityEn,
      price: prop.price || 0, area: prop.area || 0,
      bedrooms: prop.bedrooms || null,
      type: prop.type,
      stage: prop.stage || '',
      tag: prop.tag || '', tag_en: prop.tagEn || '',
      desc_ar: prop.descAr || '', desc_en: prop.descEn || ''
    };
    const result = await sbInsert('properties', row);
    _propertiesCache = null; // امسح الكاش
    return result;
  }catch(e){
    console.error('addProperty:', e);
    throw e;
  }
}

async function deleteProperty(id){
  try{
    await sbDelete('properties', id);
    _propertiesCache = null;
  }catch(e){
    console.error('deleteProperty:', e);
    throw e;
  }
}

async function getPropertyById(id){
  const list = await getProperties();
  return list.find(p => String(p.id) === String(id));
}

/* =========================================================
   دوال المشاريع
   ========================================================= */

async function getProjects(){
  if(_projectsCache) return _projectsCache;
  try{
    const data = await sbSelect('projects');
    _projectsCache = data.map(p => ({
      id: p.id,
      nameAr: p.name_ar, nameEn: p.name_en,
      type: p.type, floors: p.floors,
      locationAr: p.location_ar, locationEn: p.location_en,
      stage: p.stage,
      price: p.price || 0, area: p.area || 0,
      cover: p.cover || '',
      images: p.images ? p.images.split('\n').filter(s => s.trim()) : [],
      descAr: p.desc_ar, descEn: p.desc_en
    }));
    return _projectsCache;
  }catch(e){
    console.error('getProjects:', e);
    return [];
  }
}

async function addProject(project){
  try{
    const row = {
      name_ar: project.nameAr, name_en: project.nameEn,
      type: project.type,
      floors: project.floors,
      location_ar: project.locationAr, location_en: project.locationEn,
      stage: project.stage,
      price: project.price || 0,
      area: project.area || 0,
      cover: project.cover || '',
      images: Array.isArray(project.images) ? project.images.join('\n') : (project.images || ''),
      desc_ar: project.descAr || '', desc_en: project.descEn || ''
    };
    const result = await sbInsert('projects', row);
    _projectsCache = null;
    return result;
  }catch(e){
    console.error('addProject:', e);
    throw e;
  }
}

async function deleteProject(id){
  try{
    await sbDelete('projects', id);
    _projectsCache = null;
  }catch(e){
    console.error('deleteProject:', e);
    throw e;
  }
}

async function getProjectById(id){
  const list = await getProjects();
  return list.find(p => String(p.id) === String(id));
}

/* =========================================================
   دوال مساعدة
   ========================================================= */

function getTypeLabel(type, lang){
  const t = TYPES.find(x => x.value === type);
  if(!t) return type;
  return lang === 'en' ? t.en : t.ar;
}

function getStageLabel(stage, lang){
  const s = STAGES.find(x => x.value === stage);
  if(!s) return stage;
  return lang === 'en' ? s.en : s.ar;
}

/* =========================================================
   إعادة تعيين الكاش يدوياً
   ========================================================= */
function clearCache(){
  _propertiesCache = null;
  _projectsCache = null;
}
