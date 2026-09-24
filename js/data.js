/* بيانات العقارات والمشاريع — seed data + localStorage persistence
   لاحقاً عند ربط الموقع بسيرفر حقيقي، استبدل هذا الملف بطلبات API */

/* ========== المفاتيح ========== */
const STORAGE_KEY = 'raheeb_properties';
const PROJECTS_KEY = 'raheeb_projects';

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

/* ========== العقارات الأولية (Seed) ========== */
const SEED_PROPERTIES = [
  {
    id: 'p1', type: 'floor', city: 'الرياض', cityEn: 'Riyadh',
    titleAr: 'رحيب ١-٢', titleEn: 'Raheeb 1-2',
    price: 0, area: 0, bedrooms: null, tag: '', tagEn: '',
    stage: 'sale',
    descAr: 'مشروع رحيب ١-٢ — ١٢ دور في حي الملك عبدالله، مرحلة البيع.',
    descEn: 'Raheeb 1-2 project — 12 floors in King Abdullah district, for sale.'
  },
  {
    id: 'p2', type: 'floor', city: 'الرياض', cityEn: 'Riyadh',
    titleAr: 'رحيب ٣', titleEn: 'Raheeb 3',
    price: 0, area: 0, bedrooms: null, tag: '', tagEn: '',
    stage: 'finishing',
    descAr: 'مشروع رحيب ٣ — ٩ أدوار في حي الملك فهد، مرحلة التشطيب.',
    descEn: 'Raheeb 3 project — 9 floors in King Fahd district, finishing stage.'
  },
  {
    id: 'p3', type: 'floor', city: 'الرياض', cityEn: 'Riyadh',
    titleAr: 'رحيب ٤', titleEn: 'Raheeb 4',
    price: 0, area: 0, bedrooms: null, tag: '', tagEn: '',
    stage: 'finishing',
    descAr: 'مشروع رحيب ٤ — ٦ أدوار في حي النرجس، مرحلة التشطيب.',
    descEn: 'Raheeb 4 project — 6 floors in Al Narjis district, finishing stage.'
  },
  {
    id: 'p4', type: 'villa', city: 'الرياض', cityEn: 'Riyadh',
    titleAr: 'رحيب ٥', titleEn: 'Raheeb 5',
    price: 0, area: 0, bedrooms: null, tag: 'دوبلكس', tagEn: 'Duplex',
    stage: 'structure',
    descAr: 'مشروع رحيب ٥ — ٢ دوبلكس في حي الملك سلمان، مرحلة العظم.',
    descEn: 'Raheeb 5 project — 2 duplexes in King Salman district, structure stage.'
  }
];

/* ========== المشاريع ========== */
const SEED_PROJECTS = [
  { id: 'pr1', nameAr: 'رحيب ١-٢', nameEn: 'Raheeb 1-2', type: 'floor', floors: 12,
    locationAr: 'حي الملك عبدالله', locationEn: 'King Abdullah District',
    stage: 'sale',      descAr: 'مشروع ١٢ دور',  descEn: '12-floor project' },
  { id: 'pr2', nameAr: 'رحيب ٣',   nameEn: 'Raheeb 3',   type: 'floor', floors: 9,
    locationAr: 'حي الملك فهد',   locationEn: 'King Fahd District',
    stage: 'finishing', descAr: 'مشروع ٩ أدوار', descEn: '9-floor project' },
  { id: 'pr3', nameAr: 'رحيب ٤',   nameEn: 'Raheeb 4',   type: 'floor', floors: 6,
    locationAr: 'حي النرجس',      locationEn: 'Al Narjis District',
    stage: 'finishing', descAr: 'مشروع ٦ أدوار', descEn: '6-floor project' },
  { id: 'pr4', nameAr: 'رحيب ٥',   nameEn: 'Raheeb 5',   type: 'villa', floors: 2,
    locationAr: 'حي الملك سلمان', locationEn: 'King Salman District',
    stage: 'structure', descAr: '٢ دوبلكس',      descEn: '2 duplexes' }
];

/* ========== دوال العقارات ========== */
function getProperties(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw){
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_PROPERTIES));
      return SEED_PROPERTIES.slice();
    }
    return JSON.parse(raw);
  }catch(e){
    return SEED_PROPERTIES.slice();
  }
}

function saveProperties(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function addProperty(prop){
  const list = getProperties();
  prop.id = 'p' + Date.now();
  list.unshift(prop);
  saveProperties(list);
  return prop;
}

function deleteProperty(id){
  const list = getProperties().filter(p => p.id !== id);
  saveProperties(list);
}

function getPropertyById(id){
  return getProperties().find(p => p.id === id);
}

function resetToSeed(){
  saveProperties(SEED_PROPERTIES);
}

/* ========== دوال المشاريع ========== */
function getProjects(){
  try{
    const raw = localStorage.getItem(PROJECTS_KEY);
    if(!raw){
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(SEED_PROJECTS));
      return SEED_PROJECTS.slice();
    }
    return JSON.parse(raw);
  }catch(e){
    return SEED_PROJECTS.slice();
  }
}

function saveProjects(list){
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(list));
}

function addProject(project){
  const list = getProjects();
  project.id = 'pr' + Date.now();
  list.unshift(project);
  saveProjects(list);
  return project;
}

function deleteProject(id){
  const list = getProjects().filter(p => p.id !== id);
  saveProjects(list);
}

function resetProjectsToSeed(){
  saveProjects(SEED_PROJECTS);
}

/* ========== دوال مساعدة ========== */
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
