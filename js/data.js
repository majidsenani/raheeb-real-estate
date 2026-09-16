/* بيانات العقارات — seed data + localStorage persistence
   لاحقاً عند ربط الموقع بسيرفر حقيقي، استبدل هذا الملف بطلبات API */

const STORAGE_KEY = 'raheeb_properties';

const SEED_PROPERTIES = [
  {
    id: 'p1', type: 'villa', city: 'الرياض', cityEn: 'Riyadh',
    titleAr: 'فيلا النخيل الفاخرة', titleEn: 'Al Nakheel Luxury Villa',
    price: 3200000, area: 620, bedrooms: 6, tag: 'مميز', tagEn: 'Featured',
    descAr: 'فيلا حديثة بتصميم عصري في حي راقٍ، تتضمن مسبحاً خاصاً وحديقة واسعة وموقفين مغطيين، قريبة من الخدمات الرئيسية.',
    descEn: 'A modern villa in a prestigious district with a private pool, spacious garden, and two covered parking spots, close to key services.'
  },
  {
    id: 'p2', type: 'apartment', city: 'جدة', cityEn: 'Jeddah',
    titleAr: 'شقة كورنيش جدة', titleEn: 'Jeddah Corniche Apartment',
    price: 980000, area: 210, bedrooms: 3, tag: 'إطلالة بحرية', tagEn: 'Sea View',
    descAr: 'شقة بإطلالة مباشرة على البحر، تشطيب فاخر، ضمن مجمع سكني يضم نادياً صحياً وأمناً على مدار الساعة.',
    descEn: 'Apartment with a direct sea view, premium finishing, within a residential complex offering a health club and 24-hour security.'
  },
  {
    id: 'p3', type: 'land', city: 'الدمام', cityEn: 'Dammam',
    titleAr: 'أرض تجارية على شارع رئيسي', titleEn: 'Commercial Land on Main Street',
    price: 1450000, area: 900, bedrooms: null, tag: 'استثماري', tagEn: 'Investment',
    descAr: 'أرض تجارية بموقع استراتيجي على شارع تجاري رئيسي، مناسبة لإنشاء معارض أو مركز تجاري، صك إلكتروني موثق.',
    descEn: 'Strategically located commercial land on a main commercial street, suitable for showrooms or a retail center, with a verified digital deed.'
  },
  {
    id: 'p4', type: 'villa', city: 'الخبر', cityEn: 'Al Khobar',
    titleAr: 'فيلا دوبلكس بحديقة', titleEn: 'Duplex Villa with Garden',
    price: 2100000, area: 410, bedrooms: 5, tag: '', tagEn: '',
    descAr: 'فيلا دوبلكس بتصميم عائلي مريح، خمس غرف نوم، حديقة خلفية، وقريبة من المدارس والأسواق.',
    descEn: 'A comfortable family duplex villa with five bedrooms, a back garden, close to schools and markets.'
  },
  {
    id: 'p5', type: 'apartment', city: 'الرياض', cityEn: 'Riyadh',
    titleAr: 'شقة عصرية في حي النرجس', titleEn: 'Modern Apartment in Al Narjis',
    price: 620000, area: 165, bedrooms: 2, tag: 'جديد', tagEn: 'New',
    descAr: 'شقة بتصميم عصري وتشطيب سوبر لوكس، ضمن بناية حديثة مزودة بمصعد وموقف خاص.',
    descEn: 'A modern apartment with super-lux finishing, in a new building equipped with an elevator and private parking.'
  },
  {
    id: 'p6', type: 'land', city: 'مكة المكرمة', cityEn: 'Makkah',
    titleAr: 'أرض سكنية مخططة', titleEn: 'Planned Residential Land',
    price: 890000, area: 500, bedrooms: null, tag: '', tagEn: '',
    descAr: 'أرض سكنية ضمن مخطط معتمد، مطلة على شارع 15م، مناسبة لبناء سكن خاص أو استثمار.',
    descEn: 'Residential land within an approved plan, facing a 15m street, suitable for private construction or investment.'
  }
];

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

/* إعدادات الموقع العامة (الأرقام، نص "من نحن"، معلومات التواصل) */
const SETTINGS_KEY = 'raheeb_settings';

const DEFAULT_SETTINGS = {
  years: 15, cities: 8, listings: 120,
  aboutTitleAr: 'رحيب المنازل للخدمات العقارية',
  aboutTitleEn: 'Raheeb Al-Manazil Real Estate Services',
  aboutP1Ar: 'نعمل منذ سنوات في تسويق العقارات وربط الملاك بالباحثين عن منزل أو فرصة استثمارية، بأسلوب واضح وموثوق.',
  aboutP1En: 'For years we have connected owners with people looking for a home or investment opportunity, with a clear and reliable approach.',
  aboutP2Ar: 'فريقنا يتابع كل عقار من الإدراج حتى إتمام الصفقة، مع حرص دائم على دقة المعلومة وسهولة التواصل.',
  aboutP2En: 'Our team follows each listing from posting through closing, with constant attention to accuracy and easy communication.',
  email: 'info@raheeb-almanazil.example',
  phone: '+966 5X XXX XXXX'
};

function getSettings(){
  try{
    const raw = localStorage.getItem(SETTINGS_KEY);
    if(!raw){
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
      return { ...DEFAULT_SETTINGS };
    }
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  }catch(e){
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings){
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
