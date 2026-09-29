/* تبديل اللغة — Language toggle (Arabic default / English) */

const DICT = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.projects': 'مشاريعنا',
    'nav.about': 'من نحن',
    'nav.interest': 'سجل اهتمامك',
    'nav.contact': 'تواصل معنا',
    'nav.admin': 'لوحة التحكم',
    'lang.switch': 'EN',
    'brand.tagline': 'للتطوير العقاري',
    'header.login': 'تسجيل الدخول',
    'drawer.login': 'تسجيل الدخول',

    'hero.eyebrow': 'رحيب المنازل',
    'hero.title': 'حيث رحابة السكن',
    'hero.lead': 'نساعدك على إيجاد الفيلا أو الشقة أو الأدوار التي تناسب حياتك، عبر مجموعة مختارة من العقارات في أرقى الأحياء والمدن.',
    'hero.cta1': 'تصفح المشاريع', 'hero.cta2': 'تواصل معنا',
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
    'projects.area': 'المساحة',
    'projects.views': 'مشاهدة',
    'projects.back': '← عودة للمشاريع',

    'about.kicker': 'من نحن', 'about.title': 'رحيب المنازل للتطوير العقاري',
    'about.p1': 'نعمل منذ سنوات في تسويق العقارات وربط الملاك بالباحثين عن منزل أو فرصة استثمارية، بأسلوب واضح وموثوق.',
    'about.p2': 'فريقنا يتابع كل عقار من الإدراج حتى إتمام الصفقة، مع حرص دائم على دقة المعلومة وسهولة التواصل.',

    'contact.kicker': 'تواصل معنا', 'contact.title': 'أرسل لنا استفسارك',
    'contact.lead': 'سنرد عليك خلال يوم عمل واحد.',
    'contact.name': 'الاسم الكامل', 'contact.phone': 'رقم الجوال', 'contact.email': 'البريد الإلكتروني',
    'contact.msg': 'رسالتك', 'contact.send': 'إرسال الطلب',
    'contact.info.title': 'معلومات التواصل',
    'contact.sent': 'تم استلام رسالتك، سنتواصل معك قريباً.',

    'props.kicker': 'المشاريع', 'props.title': 'كل المشاريع', 'props.lead': 'تصفح المشاريع حسب النوع.',
    'card.bedrooms': 'غرف', 'card.area': 'م²', 'card.details': 'التفاصيل ←',
    'empty.title': 'لا توجد نتائج', 'empty.lead': 'جرّب تعديل الفلتر.',

    'detail.facts.area': 'المساحة', 'detail.facts.beds': 'الغرف', 'detail.facts.city': 'المدينة',
    'detail.back': '→ عودة لكل العقارات', 'detail.request': 'اطلب معاينة',
    'detail.sqm': 'م²',

    'admin.gate.title': 'دخول لوحة التحكم', 'admin.gate.lead': 'هذه اللوحة تخزن البيانات في Supabase — تظهر لكل الزوار.',
    'admin.gate.pass': 'كلمة المرور', 'admin.gate.enter': 'دخول',
    'admin.gate.wrong': 'كلمة المرور غير صحيحة',

    'admin.title': 'إضافة مشروع جديد', 'admin.list.title': 'المشاريع الحالية',

    'admin.hero.title': 'صور الخلفية (Hero)',
    'admin.hero.note': 'هذي الصور تتبدّل تلقائياً في أعلى الصفحة الرئيسية.',
    'admin.hero.upload': 'اختر صورة (أو عدة صور)',
    'admin.hero.save': 'رفع الصور',
    'admin.hero.added': 'تم رفع الصور بنجاح.',
    'admin.hero.list.title': 'الصور الحالية',
    'admin.hero.empty': 'لا توجد صور حالياً',
    'admin.hero.confirmDelete': 'حذف هذه الصورة؟',

    'admin.project.title': 'إضافة مشروع جديد',
    'admin.project.list.title': 'المشاريع الحالية',
    'admin.project.f.nameAr': 'اسم المشروع (عربي)',
    'admin.project.f.nameEn': 'اسم المشروع (إنجليزي)',
    'admin.project.f.type': 'النوع',
    'admin.project.f.floors': 'عدد الأدوار',
    'admin.project.f.locationAr': 'الموقع (عربي)',
    'admin.project.f.locationEn': 'الموقع (إنجليزي)',
    'admin.project.f.stage': 'المرحلة',
    'admin.project.f.price': 'السعر (ريال)',
    'admin.project.f.area': 'المساحة (م²)',
    'admin.project.f.cover': 'صورة الغلاف (من جهازك)',
    'admin.project.f.images': 'باقي الصور (يمكن اختيار عدة صور)',
    'admin.project.f.descAr': 'وصف مختصر (عربي)',
    'admin.project.f.descEn': 'وصف مختصر (إنجليزي)',
    'admin.project.save': 'حفظ المشروع',
    'admin.project.added': 'تمت إضافة المشروع بنجاح.',

    'admin.edit': 'تعديل',
    'admin.editTitle': 'تعديل المشروع',
    'admin.saveChanges': 'حفظ التعديلات',
    'admin.cancel': 'إلغاء',
    'admin.confirmDelete': 'هل تريد حذف هذا المشروع؟',
    'admin.savedSuccess': 'تم الحفظ بنجاح',
    'admin.delete': 'حذف',
    'admin.logout': 'خروج',

    'footer.about': 'شركة رحيب المنازل للتطوير العقاري — عقارات مختارة في أرقى المدن.',
    'footer.links': 'روابط', 'footer.contact': 'تواصل',
    'footer.follow': 'تابعنا',
    'footer.rights': 'جميع الحقوق محفوظة'
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Our Projects',
    'nav.about': 'About',
    'nav.interest': 'Register Interest',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    'lang.switch': 'العربية',
    'brand.tagline': 'Real Estate Development',
    'header.login': 'Sign In',
    'drawer.login': 'Sign In',

    'hero.eyebrow': 'Raheeb Al-Manazil',
    'hero.title': 'Where the spaciousness of living is',
    'hero.lead': 'We help you find the villa, apartment, or floor that fits your life, from a curated selection across the finest neighborhoods and cities.',
    'hero.cta1': 'Browse Projects', 'hero.cta2': 'Contact us',
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
    'projects.area': 'Area',
    'projects.views': 'views',
    'projects.back': '← Back to projects',

    'about.kicker': 'About us', 'about.title': 'Raheeb Al-Manazil Real Estate Development',
    'about.p1': 'For years we have connected owners with people looking for a home or investment opportunity, with a clear and reliable approach.',
    'about.p2': 'Our team follows each listing from posting through closing, with constant attention to accuracy and easy communication.',

    'contact.kicker': 'Contact', 'contact.title': 'Send us your inquiry',
    'contact.lead': 'We will reply within one business day.',
    'contact.name': 'Full name', 'contact.phone': 'Phone number', 'contact.email': 'Email',
    'contact.msg': 'Your message', 'contact.send': 'Send request',
    'contact.info.title': 'Contact information',
    'contact.sent': 'Your message has been received, we will be in touch soon.',

    'props.kicker': 'Projects', 'props.title': 'All Projects', 'props.lead': 'Browse projects by type.',
    'card.bedrooms': 'beds', 'card.area': 'sqm', 'card.details': 'Details →',
    'empty.title': 'No results', 'empty.lead': 'Try adjusting the filter.',

    'detail.facts.area': 'Area', 'detail.facts.beds': 'Bedrooms', 'detail.facts.city': 'City',
    'detail.back': '← Back to all properties', 'detail.request': 'Request a viewing',
    'detail.sqm': 'sqm',

    'admin.gate.title': 'Admin sign-in', 'admin.gate.lead': 'Data is stored in Supabase — visible to all visitors.',
    'admin.gate.pass': 'Password', 'admin.gate.enter': 'Enter',
    'admin.gate.wrong': 'Incorrect password',

    'admin.title': 'Add a new project', 'admin.list.title': 'Current projects',

    'admin.hero.title': 'Hero Images',
    'admin.hero.note': 'These images rotate automatically at the top of the homepage.',
    'admin.hero.upload': 'Select image(s)',
    'admin.hero.save': 'Upload',
    'admin.hero.added': 'Images uploaded successfully.',
    'admin.hero.list.title': 'Current Images',
    'admin.hero.empty': 'No images yet',
    'admin.hero.confirmDelete': 'Delete this image?',

    'admin.project.title': 'Add a new project',
    'admin.project.list.title': 'Current projects',
    'admin.project.f.nameAr': 'Project name (Arabic)',
    'admin.project.f.nameEn': 'Project name (English)',
    'admin.project.f.type': 'Type',
    'admin.project.f.floors': 'Number of floors',
    'admin.project.f.locationAr': 'Location (Arabic)',
    'admin.project.f.locationEn': 'Location (English)',
    'admin.project.f.stage': 'Stage',
    'admin.project.f.price': 'Price (SAR)',
    'admin.project.f.area': 'Area (sqm)',
    'admin.project.f.cover': 'Cover image (from your device)',
    'admin.project.f.images': 'Other images (multiple selection allowed)',
    'admin.project.f.descAr': 'Short description (Arabic)',
    'admin.project.f.descEn': 'Short description (English)',
    'admin.project.save': 'Save project',
    'admin.project.added': 'Project added successfully.',

    'admin.edit': 'Edit',
    'admin.editTitle': 'Edit Project',
    'admin.saveChanges': 'Save Changes',
    'admin.cancel': 'Cancel',
    'admin.confirmDelete': 'Delete this project?',
    'admin.savedSuccess': 'Saved successfully',
    'admin.delete': 'Delete',
    'admin.logout': 'Log out',

    'footer.about': 'Raheeb Al-Manazil Real Estate Development — curated properties across the finest cities.',
    'footer.links': 'Links', 'footer.contact': 'Contact',
    'footer.follow': 'Follow us',
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
