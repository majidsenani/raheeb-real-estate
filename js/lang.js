/* تبديل اللغة — Language toggle (Arabic default / English) */

const DICT = {
  ar: {
    'nav.home': 'الرئيسية', 'nav.properties': 'العقارات', 'nav.about': 'من نحن',
    'nav.contact': 'تواصل معنا', 'nav.admin': 'لوحة التحكم', 'lang.switch': 'English',
    'brand.tagline': 'للتطوير العقاري',

    'hero.eyebrow': 'رحيب المنازل',
    'hero.title': 'حيث يبدأ بيتك القادم',
    'hero.lead': 'نساعدك على إيجاد الفيلا أو الشقة أو الأدوار التي تناسب حياتك، عبر مجموعة مختارة من العقارات في أرقى الأحياء والمدن.',
    'hero.cta1': 'تصفح العقارات', 'hero.cta2': 'تواصل معنا',
    'hero.stat1n': '+120', 'hero.stat1l': 'عقار مُدرج',
    'hero.stat2n': '+8', 'hero.stat2l': 'مدن مغطاة',
    'hero.stat3n': '15', 'hero.stat3l': 'سنة خبرة',

    'cats.kicker': 'التصنيفات', 'cats.title': 'ابحث حسب نوع العقار',
    'cats.lead': 'ثلاث فئات رئيسية تغطي معظم احتياجات عملائنا.',
    'cat.villa': 'فلل', 'cat.villa.d': 'فلل عائلية ودوبلكسات في أحياء راقية',
    'cat.apartment': 'شقق', 'cat.apartment.d': 'شقق سكنية بمساحات وتشطيبات متنوعة',
    'cat.floor': 'أدوار', 'cat.floor.d': 'عمارات سكنية بأدوار متعددة في مواقع مميزة',

    'projects.kicker': 'مشاريعنا', 'projects.title': 'مشاريعنا العقارية',
    'projects.lead': 'مشاريعنا الحالية في مختلف مراحل التطوير.',
    'projects.floors': 'دور',
    'projects.location': 'الموقع',

    'featured.kicker': 'عقارات مختارة', 'featured.title': 'أحدث الإدراجات',
    'featured.lead': 'نماذج من العقارات المتوفرة حالياً ضمن قائمتنا.',
    'featured.viewall': 'عرض جميع العقارات',

    'about.kicker': 'من نحن', 'about.title': 'رحيب المنازل للتطوير العقاري',
    'about.p1': 'نعمل منذ سنوات في تسويق العقارات وربط الملاك بالباحثين عن منزل أو فرصة استثمارية، بأسلوب واضح وموثوق.',
    'about.p2': 'فريقنا يتابع كل عقار من الإدراج حتى إتمام الصفقة، مع حرص دائم على دقة المعلومة وسهولة التواصل.',

    'contact.kicker': 'تواصل معنا', 'contact.title': 'أرسل لنا استفسارك',
    'contact.lead': 'سنرد عليك خلال يوم عمل واحد.',
    'contact.name': 'الاسم الكامل', 'contact.phone': 'رقم الجوال', 'contact.email': 'البريد الإلكتروني',
    'contact.msg': 'رسالتك', 'contact.send': 'إرسال الطلب',
    'contact.info.title': 'معلومات التواصل',
    'contact.sent': 'تم استلام رسالتك، سنتواصل معك قريباً.',

    'props.title': 'كل العقارات', 'props.lead': 'استخدم الفلاتر لتضييق نتائج البحث.',
    'filter.type': 'النوع', 'filter.all': 'الكل',
    'filter.villa': 'فيلا', 'filter.apartment': 'شقة', 'filter.floor': 'أدوار',
    'filter.city': 'المدينة', 'filter.search': 'ابحث بالاسم...', 'filter.apply': 'تطبيق الفلتر',
    'card.bedrooms': 'غرف', 'card.area': 'م²', 'card.details': 'التفاصيل ←',
    'empty.title': 'لا توجد عقارات مطابقة', 'empty.lead': 'جرّب تعديل الفلاتر أو أعد تعيينها.',

    'detail.facts.area': 'المساحة', 'detail.facts.beds': 'الغرف', 'detail.facts.city': 'المدينة',
    'detail.back': '→ عودة لكل العقارات', 'detail.request': 'اطلب معاينة',
    'detail.sqm': 'م²',

    'admin.gate.title': 'دخول لوحة التحكم', 'admin.gate.lead': 'هذه لوحة أولية لإدارة الإدراجات محلياً في متصفحك.',
    'admin.gate.pass': 'كلمة المرور', 'admin.gate.enter': 'دخول',
    'admin.gate.wrong': 'كلمة المرور غير صحيحة',
    'admin.note': 'ملاحظة: هذه اللوحة تخزن البيانات في متصفحك فقط (localStorage) وهي مناسبة للتجربة على GitHub Pages. لإدارة حقيقية متعددة المستخدمين، تحتاج لاحقاً ربط الموقع بخادم/قاعدة بيانات — راجع ملف README.',
    'admin.title': 'إضافة عقار جديد', 'admin.list.title': 'العقارات الحالية',
    'admin.f.titleAr': 'العنوان (عربي)', 'admin.f.titleEn': 'العنوان (إنجليزي)',
    'admin.f.type': 'النوع', 'admin.f.city': 'المدينة (عربي)', 'admin.f.cityEn': 'المدينة (إنجليزي)',
    'admin.f.price': 'السعر (ريال)', 'admin.f.area': 'المساحة (م²)', 'admin.f.beds': 'عدد الغرف',
    'admin.f.stage': 'المرحلة',
    'admin.f.descAr': 'الوصف (عربي)', 'admin.f.descEn': 'الوصف (إنجليزي)',
    'admin.f.tag': 'وسم مميز (اختياري، عربي)', 'admin.f.tagEn': 'وسم مميز (اختياري، إنجليزي)',
    'admin.save': 'حفظ العقار', 'admin.reset': 'إعادة تعيين البيانات الافتراضية',
    'admin.delete': 'حذف', 'admin.logout': 'خروج',
    'admin.added': 'تمت إضافة العقار بنجاح.',

    // المشاريع
    'admin.project.title': 'إضافة مشروع جديد',
    'admin.project.list.title': 'المشاريع الحالية',
    'admin.project.f.nameAr': 'اسم المشروع (عربي)',
    'admin.project.f.nameEn': 'اسم المشروع (إنجليزي)',
    'admin.project.f.type': 'النوع',
    'admin.project.f.floors': 'عدد الأدوار',
    'admin.project.f.locationAr': 'الموقع (عربي)',
    'admin.project.f.locationEn': 'الموقع (إنجليزي)',
    'admin.project.f.stage': 'المرحلة',
    'admin.project.f.descAr': 'وصف مختصر (عربي)',
    'admin.project.f.descEn': 'وصف مختصر (إنجليزي)',
    'admin.project.save': 'حفظ المشروع',
    'admin.project.reset': 'إعادة تعيين المشاريع الافتراضية',
    'admin.project.added': 'تمت إضافة المشروع بنجاح.',

    'footer.about': 'شركة رحيب المنازل للتطوير العقاري — عقارات مختارة في أرقى المدن.',
    'footer.links': 'روابط', 'footer.contact': 'تواصل',
    'footer.rights': 'جميع الحقوق محفوظة'
  },
  en: {
    'nav.home': 'Home', 'nav.properties': 'Properties', 'nav.about': 'About',
    'nav.contact': 'Contact', 'nav.admin': 'Admin', 'lang.switch': 'العربية',
    'brand.tagline': 'Real Estate Development',

    'hero.eyebrow': 'Raheeb Al-Manazil',
    'hero.title': 'Where your next home begins',
    'hero.lead': 'We help you find the villa, apartment, or floor that fits your life, from a curated selection across the finest neighborhoods and cities.',
    'hero.cta1': 'Browse properties', 'hero.cta2': 'Contact us',
    'hero.stat1n': '120+', 'hero.stat1l': 'Listings',
    'hero.stat2n': '8+', 'hero.stat2l': 'Cities covered',
    'hero.stat3n': '15', 'hero.stat3l': 'Years of experience',

    'cats.kicker': 'Categories', 'cats.title': 'Search by property type',
    'cats.lead': 'Three core categories covering most of our clients\u2019 needs.',
    'cat.villa': 'Villas', 'cat.villa.d': 'Family villas and duplexes in prestigious areas',
    'cat.apartment': 'Apartments', 'cat.apartment.d': 'Residential apartments of varied sizes and finishing',
    'cat.floor': 'Floors', 'cat.floor.d': 'Residential buildings with multiple floors in prime locations',

    'projects.kicker': 'Our projects', 'projects.title': 'Our real estate projects',
    'projects.lead': 'Our current projects across various development stages.',
    'projects.floors': 'floors',
    'projects.location': 'Location',

    'featured.kicker': 'Featured', 'featured.title': 'Latest listings',
    'featured.lead': 'Examples of properties currently available on our list.',
    'featured.viewall': 'View all properties',

    'about.kicker': 'About us', 'about.title': 'Raheeb Al-Manazil Real Estate Development',
    'about.p1': 'For years we have connected owners with people looking for a home or investment opportunity, with a clear and reliable approach.',
    'about.p2': 'Our team follows each listing from posting through closing, with constant attention to accuracy and easy communication.',

    'contact.kicker': 'Contact', 'contact.title': 'Send us your inquiry',
    'contact.lead': 'We will reply within one business day.',
    'contact.name': 'Full name', 'contact.phone': 'Phone number', 'contact.email': 'Email',
    'contact.msg': 'Your message', 'contact.send': 'Send request',
    'contact.info.title': 'Contact information',
    'contact.sent': 'Your message has been received, we will be in touch soon.',

    'props.title': 'All properties', 'props.lead': 'Use the filters to narrow your search.',
    'filter.type': 'Type', 'filter.all': 'All',
    'filter.villa': 'Villa', 'filter.apartment': 'Apartment', 'filter.floor': 'Floors',
    'filter.city': 'City', 'filter.search': 'Search by name...', 'filter.apply': 'Apply filters',
    'card.bedrooms': 'beds', 'card.area': 'sqm', 'card.details': 'Details →',
    'empty.title': 'No matching properties', 'empty.lead': 'Try adjusting or resetting the filters.',

    'detail.facts.area': 'Area', 'detail.facts.beds': 'Bedrooms', 'detail.facts.city': 'City',
    'detail.back': '← Back to all properties', 'detail.request': 'Request a viewing',
    'detail.sqm': 'sqm',

    'admin.gate.title': 'Admin sign-in', 'admin.gate.lead': 'An early panel for managing listings locally in your browser.',
    'admin.gate.pass': 'Password', 'admin.gate.enter': 'Enter',
    'admin.gate.wrong': 'Incorrect password',
    'admin.note': 'Note: this panel stores data only in your browser (localStorage), which fits a GitHub Pages prototype. For real multi-user management you will later need to connect the site to a server/database — see the README.',
    'admin.title': 'Add a new property', 'admin.list.title': 'Current properties',
    'admin.f.titleAr': 'Title (Arabic)', 'admin.f.titleEn': 'Title (English)',
    'admin.f.type': 'Type', 'admin.f.city': 'City (Arabic)', 'admin.f.cityEn': 'City (English)',
    'admin.f.price': 'Price (SAR)', 'admin.f.area': 'Area (sqm)', 'admin.f.beds': 'Bedrooms',
    'admin.f.stage': 'Stage',
    'admin.f.descAr': 'Description (Arabic)', 'admin.f.descEn': 'Description (English)',
    'admin.f.tag': 'Highlight tag (optional, Arabic)', 'admin.f.tagEn': 'Highlight tag (optional, English)',
    'admin.save': 'Save property', 'admin.reset': 'Reset to default data',
    'admin.delete': 'Delete', 'admin.logout': 'Log out',
    'admin.added': 'Property added successfully.',

    'admin.project.title': 'Add a new project',
    'admin.project.list.title': 'Current projects',
    'admin.project.f.nameAr': 'Project name (Arabic)',
    'admin.project.f.nameEn': 'Project name (English)',
    'admin.project.f.type': 'Type',
    'admin.project.f.floors': 'Number of floors',
    'admin.project.f.locationAr': 'Location (Arabic)',
    'admin.project.f.locationEn': 'Location (English)',
    'admin.project.f.stage': 'Stage',
    'admin.project.f.descAr': 'Short description (Arabic)',
    'admin.project.f.descEn': 'Short description (English)',
    'admin.project.save': 'Save project',
    'admin.project.reset': 'Reset default projects',
    'admin.project.added': 'Project added successfully.',

    'footer.about': 'Raheeb Al-Manazil Real Estate Development — curated properties across the finest cities.',
    'footer.links': 'Links', 'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved'
  }
};

function getLang(){ return localStorage.getItem('raheeb_lang') || 'ar'; }

function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(DICT[lang][key] !== undefined) el.textContent = DICT[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if(DICT[lang][key] !== undefined) el.setAttribute('placeholder', DICT[lang][key]);
  });
  localStorage.setItem('raheeb_lang', lang);
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function t(key){
  const lang = getLang();
  return (DICT[lang] && DICT[lang][key]) || key;
}

function switchLangWithFade(lang){
  document.body.classList.add('lang-fade');
  setTimeout(() => {
    applyLang(lang);
    document.body.classList.remove('lang-fade');
  }, 160);
}

function initLangToggle(){
  applyLang(getLang());
  const btn = document.getElementById('langBtn');
  if(btn){
    btn.addEventListener('click', () => {
      switchLangWithFade(getLang() === 'ar' ? 'en' : 'ar');
    });
  }
}

document.addEventListener('DOMContentLoaded', initLangToggle);
