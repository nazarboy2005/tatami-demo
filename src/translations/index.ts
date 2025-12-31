import { Language } from "@/contexts/LanguageContext";

type TranslationDictionary = {
  [key: string]: {
    [lang in Language]: string;
  };
};

// Main translations dictionary
export const translations: TranslationDictionary = {
  // General
  site_name: {
    en: "Tatami",
    ar: "تاتامي",
  },

  // Navigation
  nav_home: {
    en: "Home",
    ar: "الرئيسية",
  },
  nav_about: {
    en: "About",
    ar: "عن تاتامي",
  },
  solutions: {
    en: "Solutions",
    ar: "الحلول",
  },
  forTenants: {
    en: "For Tenants",
    ar: "للمستأجرين",
  },
  forLandlords: {
    en: "For Landlords",
    ar: "للمالكين",
  },
  features: {
    en: "Features",
    ar: "المميزات",
  },
  insights: {
    en: "Insights",
    ar: "رؤى",
  },
  contact: {
    en: "Contact",
    ar: "اتصل بنا",
  },
  joinWaitlist: {
    en: "Join Waitlist",
    ar: "الانضمام لقائمة الانتظار",
  },
  nav_login: {
    en: "Login",
    ar: "تسجيل الدخول",
  },
  nav_signup: {
    en: "Sign Up",
    ar: "إنشاء حساب",
  },

  // Benefits Component
  benefits_heading: {
    en: "Convenience and security all in one platform",
    ar: "الراحة والأمان في منصة واحدة",
  },
  benefit_convenient_title: {
    en: "Convenient",
    ar: "مريح",
  },
  benefit_convenient_desc: {
    en: "Simplify your rent payments with Tatami. Enjoy the convenience of managing your rent payments with ease, save time and eliminate stress.",
    ar: "بسط مدفوعات الإيجار الخاصة بك مع تاتامي. استمتع براحة إدارة مدفوعات الإيجار بسهولة، ووفر الوقت وتخلص من التوتر.",
  },
  benefit_secure_title: {
    en: "Secure",
    ar: "آمن",
  },
  benefit_secure_desc: {
    en: "Enjoy peace of mind with our secure payment options, including standing orders, pre-authorised direct debits and seamless withdrawals.",
    ar: "استمتع براحة البال مع خيارات الدفع الآمنة لدينا، بما في ذلك الطلبات الدائمة، والخصم المباشر المعتمد مسبقًا والسحب السلس.",
  },

  // Features Component
  features_heading: {
    en: "The new way to pay and collect rent is here",
    ar: "الطريقة الجديدة لدفع وتحصيل الإيجار موجودة هنا",
  },
  feature_digital_payment: {
    en: "Digital Payment Platform",
    ar: "منصة الدفع الرقمي",
  },
  feature_direct_debits: {
    en: "Pre-authorized Direct Debits",
    ar: "الخصم المباشر المعتمد مسبقًا",
  },
  feature_rewards: {
    en: "Rewards Program",
    ar: "برنامج المكافآت",
  },
  feature_credit_reporting: {
    en: "Credit Reporting",
    ar: "تقارير الائتمان",
  },

  // How It Works Component
  how_it_works_heading: {
    en: "Using Tatami is Easy",
    ar: "استخدام تاتامي سهل",
  },
  user_type_tenant: {
    en: "Tenant",
    ar: "المستأجر",
  },
  user_type_landlord: {
    en: "Landlord",
    ar: "المالك",
  },
  tenant_step1_title: {
    en: "Sign up",
    ar: "التسجيل",
  },
  tenant_step1_desc: {
    en: "Create your account. This step will help us tailor your experience to your needs.",
    ar: "قم بإنشاء حسابك. ستساعدنا هذه الخطوة على تخصيص تجربتك وفقاً لاحتياجاتك.",
  },
  tenant_step2_title: {
    en: "Set up payment method",
    ar: "إعداد طريقة الدفع",
  },
  tenant_step2_desc: {
    en: "Choose your preferred payment method and link your bank account or credit card.",
    ar: "اختر طريقة الدفع المفضلة لديك وربط حسابك المصرفي أو بطاقة الائتمان.",
  },
  tenant_step3_title: {
    en: "Pay rent",
    ar: "دفع الإيجار",
  },
  tenant_step3_desc: {
    en: "Tenants can easily pay rent through the platform.",
    ar: "يمكن للمستأجرين دفع الإيجار بسهولة من خلال المنصة.",
  },
  landlord_step1_title: {
    en: "Sign up",
    ar: "التسجيل",
  },
  landlord_step1_desc: {
    en: "Create your account to customize your experience according to your needs.",
    ar: "قم بإنشاء حسابك لتخصيص تجربتك وفقاً لاحتياجاتك.",
  },
  landlord_step2_title: {
    en: "Payment Set Up",
    ar: "إعداد الدفع",
  },
  landlord_step2_desc: {
    en: "Select your preferred payment method and link your bank account.",
    ar: "حدد طريقة الدفع المفضلة لديك وربط حسابك المصرفي.",
  },
  landlord_step3_title: {
    en: "Collect Rent",
    ar: "تحصيل الإيجار",
  },
  landlord_step3_desc: {
    en: "Receive rent, track and manage incoming payments.",
    ar: "استلام الإيجار وتتبع وإدارة المدفوعات الواردة.",
  },

  // Problem Statement
  problem_statement_title: {
    en: "Paying Rent in Qatar is Costly & Outdated",
    ar: "دفع الإيجار في قطر مكلف وقديم",
  },
  problem_statement_subtitle: {
    en: "Qatar's $5.4B rental market is offline and fragmented due to friction and inefficiencies",
    ar: "سوق الإيجار في قطر البالغ 5.4 مليار دولار غير متصل ومجزأ بسبب الاحتكاك وعدم الكفاءة",
  },
  tenant_pains_title: {
    en: "Tenant Pains",
    ar: "مشاكل المستأجر",
  },
  tenant_pain_1: {
    en: "Forced to sign 13+ cheques a year.",
    ar: "مضطر للتوقيع على أكثر من 13 شيكًا سنويًا.",
  },
  tenant_pain_2: {
    en: "Bounced checks = legal & credit risk.",
    ar: "الشيكات المرتجعة = مخاطر قانونية وائتمانية.",
  },
  tenant_pain_3: {
    en: "Rent is #1 biggest expense yet no rewards are earned from this.",
    ar: "الإيجار هو أكبر نفقة رقم 1 ومع ذلك لا يتم كسب أي مكافآت من هذا.",
  },
  landlord_pains_title: {
    en: "Landlord Pains",
    ar: "مشاكل المالك",
  },
  rent_cheques_percentage: {
    en: "> 90%",
    ar: "> ٩٠٪",
  },
  rent_cheques_description: {
    en: "Of rent is still paid through cheques",
    ar: "من الإيجار لا يزال يدفع من خلال الشيكات",
  },
  landlord_pain_1: {
    en: "No digital tracking, no transparency.",
    ar: "لا يوجد تتبع رقمي، لا شفافية.",
  },
  landlord_pain_2: {
    en: "Limited data-driven insights due to manual processes.",
    ar: "رؤى محدودة قائمة على البيانات بسبب العمليات اليدوية.",
  },

  // CTA Section
  cta_heading: {
    en: "Ready for the future of rent payments?",
    ar: "هل أنت مستعد لمستقبل مدفوعات الإيجار؟",
  },
  cta_subheading: {
    en: "Join the growing number of tenants and landlords in Qatar who are making the switch to digital rent payments.",
    ar: "انضم إلى العدد المتزايد من المستأجرين والملاك في قطر الذين يتحولون إلى مدفوعات الإيجار الرقمية.",
  },
  i_am_a: {
    en: "I am a:",
    ar: "أنا:",
  },
  tenant: {
    en: "Tenant",
    ar: "مستأجر",
  },
  landlord: {
    en: "Landlord",
    ar: "مالك",
  },
  email_placeholder: {
    en: "Enter your email address",
    ar: "أدخل عنوان بريدك الإلكتروني",
  },
  join_waitlist_button: {
    en: "Join Waitlist",
    ar: "الانضمام لقائمة الانتظار",
  },
  thank_you: {
    en: "Thank You!",
    ar: "شكراً لك!",
  },
  waitlist_confirmation: {
    en: "You've been added to our waitlist. We'll contact you as soon as we launch.",
    ar: "تمت إضافتك إلى قائمة الانتظار الخاصة بنا. سنتصل بك بمجرد الإطلاق.",
  },
  secure_transactions: {
    en: "Secure Transactions",
    ar: "معاملات آمنة",
  },
  earn_rewards: {
    en: "Earn Rewards",
    ar: "اكسب المكافآت",
  },
  payment_reminders: {
    en: "Payment Reminders",
    ar: "تذكيرات الدفع",
  },

  // Hero Section
  hero_title: {
    en: "A Better Way to Pay Rent",
    ar: "طريقة أفضل لدفع الإيجار",
  },
  hero_subtitle: {
    en: "Simplify your rental payments and build credit at the same time",
    ar: "تبسيط مدفوعات الإيجار وبناء الائتمان في نفس الوقت",
  },
  get_started: {
    en: "Get Started",
    ar: "ابدأ الآن",
  },
  learn_more: {
    en: "Learn More",
    ar: "اعرف المزيد",
  },

  // Benefits
  benefit_easy_title: {
    en: "Easy Payments",
    ar: "مدفوعات سهلة",
  },
  benefit_easy_desc: {
    en: "Pay rent online through multiple payment methods",
    ar: "ادفع الإيجار عبر الإنترنت من خلال طرق دفع متعددة",
  },
  benefit_autopay_title: {
    en: "AutoPay",
    ar: "الدفع التلقائي",
  },
  benefit_autopay_desc: {
    en: "Set it and forget it with automatic payments",
    ar: "ضبط المدفوعات التلقائية ونسيان القلق",
  },
  benefit_credit_title: {
    en: "Build Credit",
    ar: "بناء الائتمان",
  },
  benefit_credit_desc: {
    en: "Improve your credit score with on-time rent payments",
    ar: "تحسين درجة الائتمان الخاصة بك مع مدفوعات الإيجار في الوقت المحدد",
  },
  benefit_records_title: {
    en: "Payment Records",
    ar: "سجلات الدفع",
  },
  benefit_records_desc: {
    en: "Keep track of all your payment history in one place",
    ar: "تتبع جميع سجلات الدفع الخاصة بك في مكان واحد",
  },

  // Features
  features_title: {
    en: "Features that make renting easier",
    ar: "ميزات تجعل الاستئجار أسهل",
  },
  feature_split_title: {
    en: "Split Rent",
    ar: "تقسيم الإيجار",
  },
  feature_split_desc: {
    en: "Easily split rent with roommates",
    ar: "تقسيم الإيجار بسهولة مع الزملاء في السكن",
  },
  feature_schedule_title: {
    en: "Scheduled Payments",
    ar: "المدفوعات المجدولة",
  },
  feature_schedule_desc: {
    en: "Set up payments in advance",
    ar: "إعداد المدفوعات مسبقًا",
  },
  feature_reminder_title: {
    en: "Reminders",
    ar: "التذكيرات",
  },
  feature_reminder_desc: {
    en: "Never miss a payment with timely reminders",
    ar: "لا تفوت أي دفعة مع التذكيرات في الوقت المناسب",
  },
  feature_report_title: {
    en: "Credit Reporting",
    ar: "تقارير الائتمان",
  },
  feature_report_desc: {
    en: "Boost your credit score with on-time payments",
    ar: "تعزيز درجة الائتمان الخاصة بك مع المدفوعات في الوقت المحدد",
  },

  // Qatar & Regional Specific
  qatar_compliant: {
    en: "Compliant with Qatar Financial Centre Regulatory Authority",
    ar: "متوافق مع هيئة تنظيم مركز قطر للمال",
  },
  local_banking: {
    en: "Partnered with leading Qatar banks",
    ar: "شراكة مع البنوك القطرية الرائدة",
  },
  islamic_finance: {
    en: "Islamic finance options available",
    ar: "خيارات التمويل الإسلامي متاحة",
  },
  gcc_secure_transactions: {
    en: "GCC compliant secure transactions",
    ar: "معاملات آمنة متوافقة مع معايير دول مجلس التعاون الخليجي",
  },

  // Call to action
  cta_title: {
    en: "Ready to simplify your rent payments?",
    ar: "هل أنت مستعد لتبسيط مدفوعات الإيجار الخاصة بك؟",
  },
  cta_button: {
    en: "Sign Up Now",
    ar: "سجل الآن",
  },

  // Footer
  footer_rights: {
    en: "All rights reserved",
    ar: "جميع الحقوق محفوظة",
  },
  footer_terms: {
    en: "Terms & Conditions",
    ar: "الشروط والأحكام",
  },
  footer_privacy: {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية",
  },
  footer_contact: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },

  // Language Switch
  switchLanguage: {
    en: "Switch to Arabic",
    ar: "Switch to English",
  },
  toggle_language: {
    en: "Toggle language",
    ar: "تبديل اللغة",
  },
  current_language: {
    en: "English",
    ar: "العربية",
  },
  switch_to: {
    en: "العربية",
    ar: "English",
  },

  // Islamic Calendar
  upcomingIslamicHolidays: {
    en: "Upcoming Islamic Holidays",
    ar: "المناسبات الإسلامية القادمة",
  },
  importance_high: {
    en: "Major Holiday",
    ar: "عطلة رئيسية",
  },
  importance_medium: {
    en: "Important",
    ar: "هامة",
  },
  importance_low: {
    en: "Observance",
    ar: "ملاحظة",
  },

  // Trust Badges Translations
  trustBadges_title: {
    en: "Trust Badges",
    ar: "شارات الثقة",
  },
  partners_title: {
    en: "Our Banking Partners",
    ar: "شركاؤنا المصرفيون",
  },

  // Contact Page Translations
  contactUs: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  getInTouch: {
    en: "Get in touch with our team",
    ar: "تواصل مع فريقنا",
  },
  firstName: {
    en: "First Name",
    ar: "الاسم الأول",
  },
  lastName: {
    en: "Last Name",
    ar: "اسم العائلة",
  },
  emailAddress: {
    en: "Email Address",
    ar: "البريد الإلكتروني",
  },
  phoneNumber: {
    en: "Phone Number",
    ar: "رقم الهاتف",
  },
  message: {
    en: "Message",
    ar: "الرسالة",
  },
  sendMessage: {
    en: "Send Message",
    ar: "إرسال الرسالة",
  },

  // Waitlist Page Translations
  joinWaitlistTitle: {
    en: "Join the Tatami Waitlist",
    ar: "انضم إلى قائمة انتظار تاتامي",
  },
  joinWaitlistSubtitle: {
    en: "Be among the first to experience the future of rent payments",
    ar: "كن من أوائل من يختبرون مستقبل مدفوعات الإيجار",
  },
  getEarlyAccess: {
    en: "Get Early Access",
    ar: "احصل على وصول مبكر",
  },
  iAmA: {
    en: "I am a:",
    ar: "أنا:",
  },
  propertyManager: {
    en: "Property Manager",
    ar: "مدير عقارات",
  },
  propertyManagerDesc: {
    en: "I manage properties and collect rent",
    ar: "أدير العقارات وأحصل الإيجار",
  },
  waitlist_tenant: {
    en: "Tenant",
    ar: "مستأجر",
  },
  tenantDesc: {
    en: "I rent and pay rent to my landlord",
    ar: "أستأجر وأدفع الإيجار لمالك العقار",
  },
  company: {
    en: "Company/Organization (Optional)",
    ar: "الشركة/المنظمة (اختياري)",
  },
  companyPlaceholder: {
    en: "Enter your company or organization",
    ar: "أدخل اسم شركتك أو منظمتك",
  },
  unitsManaged: {
    en: "Number of Units Managed",
    ar: "عدد الوحدات المُدارة",
  },
  selectOption: {
    en: "Select an option",
    ar: "اختر خيارًا",
  },
  units1to10: {
    en: "1-10 units",
    ar: "1-10 وحدات",
  },
  units11to50: {
    en: "11-50 units",
    ar: "11-50 وحدة",
  },
  units51to100: {
    en: "51-100 units",
    ar: "51-100 وحدة",
  },
  units101to500: {
    en: "101-500 units",
    ar: "101-500 وحدة",
  },
  units500plus: {
    en: "500+ units",
    ar: "+500 وحدة",
  },
  hearAbout: {
    en: "How did you hear about Tatami?",
    ar: "كيف سمعت عن تاتامي؟",
  },
  searchEngine: {
    en: "Search Engine",
    ar: "محرك البحث",
  },
  socialMedia: {
    en: "Social Media",
    ar: "وسائل التواصل الاجتماعي",
  },
  friendColleague: {
    en: "Friend or Colleague",
    ar: "صديق أو زميل",
  },
  blogArticle: {
    en: "Blog or Article",
    ar: "مدونة أو مقالة",
  },
  eventConference: {
    en: "Event or Conference",
    ar: "حدث أو مؤتمر",
  },
  other: {
    en: "Other",
    ar: "أخرى",
  },
  additionalComments: {
    en: "Additional Comments (Optional)",
    ar: "تعليقات إضافية (اختياري)",
  },
  agreeTerms: {
    en: "I agree to the",
    ar: "أوافق على",
  },
  termsOfService: {
    en: "Terms of Service",
    ar: "شروط الخدمة",
  },
  and: {
    en: "and",
    ar: "و",
  },
  privacyPolicy: {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية",
  },
  joinWaitlistBtn: {
    en: "Join the Waitlist",
    ar: "انضم إلى قائمة الانتظار",
  },
  firstNamePlaceholder: {
    en: "Enter your first name",
    ar: "أدخل اسمك الأول",
  },
  lastNamePlaceholder: {
    en: "Enter your last name",
    ar: "أدخل اسم عائلتك",
  },
  emailPlaceholder: {
    en: "Enter your email address",
    ar: "أدخل عنوان بريدك الإلكتروني",
  },
  earlyAccessBenefits: {
    en: "Benefits of Early Access",
    ar: "مزايا الوصول المبكر",
  },

  // Form submission states and messages
  submitting: {
    en: "Submitting...",
    ar: "جاري الإرسال...",
  },
  pleaseEnterAllRequiredFields: {
    en: "Please enter all required fields",
    ar: "يرجى إدخال جميع الحقول المطلوبة",
  },
  pleaseAcceptTerms: {
    en: "Please accept our terms and conditions",
    ar: "يرجى قبول الشروط والأحكام",
  },
  joinAnotherPerson: {
    en: "Join Another Person",
    ar: "تسجيل شخص آخر",
  },

  exclusiveFeatures: {
    en: "Exclusive Features",
    ar: "ميزات حصرية",
  },
  exclusiveFeaturesDesc: {
    en: "Get access to exclusive features and tools that will only be available to our early adopters.",
    ar: "احصل على ميزات وأدوات حصرية ستكون متاحة فقط للمستخدمين الأوائل.",
  },
  specialPricing: {
    en: "Special Pricing",
    ar: "أسعار خاصة",
  },
  specialPricingDesc: {
    en: "Enjoy special introductory pricing and plans that will be available only to waitlist members.",
    ar: "استمتع بأسعار وخطط تعريفية خاصة ستكون متاحة فقط لأعضاء قائمة الانتظار.",
  },

  // FAQ Section
  faqTitle: {
    en: "Frequently Asked Questions",
    ar: "الأسئلة الشائعة",
  },
  faq1Question: {
    en: "When will Tatami be available?",
    ar: "متى ستكون تاتامي متاحة؟",
  },
  faq1Answer: {
    en: "We're currently in the final stages of development and plan to launch in the next few months. Waitlist members will be the first to know and get access.",
    ar: "نحن حاليًا في المراحل النهائية من التطوير ونخطط للإطلاق في الأشهر القليلة القادمة. سيكون أعضاء قائمة الانتظار أول من يعرف ويحصل على الوصول.",
  },
  faq2Question: {
    en: "How will I know when I get access?",
    ar: "كيف سأعرف عندما أحصل على إمكانية الوصول؟",
  },
  faq2Answer: {
    en: "You'll receive an email invitation with instructions on how to set up your account and start using Tatami.",
    ar: "ستتلقى دعوة عبر البريد الإلكتروني مع تعليمات حول كيفية إعداد حسابك وبدء استخدام تاتامي.",
  },
  faq3Question: {
    en: "Is there a fee to join the waitlist?",
    ar: "هل هناك رسوم للانضمام إلى قائمة الانتظار؟",
  },
  faq3Answer: {
    en: "No, joining the waitlist is completely free. You'll only be charged once you decide to subscribe to our service after your trial period.",
    ar: "لا، الانضمام إلى قائمة الانتظار مجاني تمامًا. سيتم محاسبتك فقط عندما تقرر الاشتراك في خدمتنا بعد فترة التجربة الخاصة بك.",
  },
  faq4Question: {
    en: "Will my information be shared with third parties?",
    ar: "هل ستتم مشاركة معلوماتي مع أطراف ثالثة؟",
  },
  faq4Answer: {
    en: "No, we respect your privacy. Your information will only be used to communicate with you about Tatami and will not be shared with any third parties.",
    ar: "لا، نحن نحترم خصوصيتك. سيتم استخدام معلوماتك فقط للتواصل معك بشأن تاتامي ولن تتم مشاركتها مع أي أطراف ثالثة.",
  },

  // Privacy Page Translations
  privacy_statement: {
    en: "Privacy Statement",
    ar: "بيان الخصوصية",
  },
  privacy_title: {
    en: "Tatami Privacy Statement",
    ar: "بيان الخصوصية لتاتامي",
  },
  privacy_subtitle: {
    en: "Learn how Tatami protects personal information across our digital rent payment ecosystem.",
    ar: "تعرّف على كيفية حماية تاتامي للبيانات الشخصية ضمن منظومة الدفع الرقمي للإيجار.",
  },
  privacy_version: {
    en: "Version: December 17, 2025",
    ar: "الإصدار: 17 ديسمبر 2025",
  },
  effective_date: {
    en: "Effective Date",
    ar: "تاريخ السريان",
  },
  effective_date_desc: {
    en: "Version: December 17, 2025 — this statement supersedes all prior Tatami privacy notices.",
    ar: "الإصدار: 17 ديسمبر  2025 — تلغي هذه النسخة جميع إصدارات سياسة الخصوصية السابقة من تاتامي.",
  },
  who_we_are: {
    en: "Who We Are",
    ar: "من نحن",
  },
  who_we_are_desc: {
    en: "Tatami Technologies W.L.L. acts as the data controller for tatami.qa and related experiences, except where we host Client Data on behalf of property owners.",
    ar: "تعمل شركة تاتامي تكنولوجيز ذ.م.م. بصفتها المتحكم بالبيانات الخاصة بالموقع tatami.qa والتجارب المرتبطة به، باستثناء الحالات التي نستضيف فيها بيانات العملاء نيابةً عن ملاك العقارات.",
  },
  where_applies: {
    en: "Where It Applies",
    ar: "نطاق التطبيق",
  },
  where_applies_desc: {
    en: "Covers tatami.qa, waitlist forms, customer support interactions, beta previews, surveys, marketing communications, and Tatami-hosted events.",
    ar: "يشمل tatami.qa ونماذج قائمة الانتظار والتواصل مع خدمة العملاء ومعاينات النسخ التجريبية والاستبيانات والاتصالات التسويقية والفعاليات التي تنظمها تاتامي.",
  },
  privacy_intro_1: {
    en: 'Tatami Technologies W.L.L. ("Tatami", "we", "us", "our") delivers digital rent payment and property management experiences for tenants, landlords, and property managers across Qatar and the wider GCC.',
    ar: "تقدم شركة تاتامي تكنولوجيز ذ.م.م. («تاتامي»، «نحن») تجارب رقمية لسداد الإيجار وإدارة العقارات للمستأجرين والملاك ومديري الأملاك في قطر ودول مجلس التعاون الخليجي.",
  },
  privacy_intro_2: {
    en: "This Privacy Statement (Version: December 17, 2025) explains how we collect, use, disclose, and safeguard personal information when you interact with tatami.qa, our mobile and web previews, customer success channels, or attend Tatami-hosted engagements.",
    ar: "يوضح بيان الخصوصية هذا (الإصدار: 17 ديسمبر 2025) كيفية جمعنا واستخدامنا والإفصاح عن المعلومات الشخصية وحمايتها عند تفاعلك مع tatami.qa أو معايناتنا على الويب أو الهاتف المحمول أو قنوات نجاح العملاء أو عند حضورك فعاليات تاتامي.",
  },
  privacy_intro_3: {
    en: "We designed this notice to align with the Qatar Personal Data Privacy Protection Law (Law No. 13 of 2016), the EU General Data Protection Regulation (GDPR), the UK GDPR, the California Consumer Privacy Rights Act (CCPA/CPRA), Canada's PIPEDA, and comparable global privacy frameworks.",
    ar: "صيغ هذا البيان بما يتوافق مع قانون حماية البيانات الشخصية في دولة قطر (القانون رقم 13 لعام 2016)، واللائحة العامة لحماية البيانات (GDPR)، واللائحة البريطانية، وقانون خصوصية المستهلك في كاليفورنيا (CCPA/CPRA)، وقانون حماية المعلومات الشخصية والمستندات الإلكترونية في كندا (PIPEDA)، وغيرها من الأطر العالمية المقارنة.",
  },
  client_data_notice: {
    en: 'Important: this Privacy Statement does not cover information that property owners or managers store inside Tatami on their own behalf ("Client Data"). When Tatami hosts Client Data we act solely as a data processor and the property owner or manager remains the data controller. Please contact your property manager directly to exercise privacy rights relating to Client Data.',
    ar: "مهم: لا يشمل بيان الخصوصية هذا المعلومات التي يخزنها ملاك العقارات أو مديروها داخل تاتامي لحسابهم الخاص («بيانات العملاء»). عندما تستضيف تاتامي بيانات العملاء فإننا نعمل فقط كمُعالج بيانات ويبقى مالك العقار أو مديره هو المتحكم بالبيانات. يُرجى التواصل مباشرةً مع مدير العقار الخاص بك لممارسة حقوق الخصوصية المتعلقة ببيانات العملاء.",
  },
  privacy_rights_title: {
    en: "Your Privacy Choices & Rights",
    ar: "اختياراتك وحقوقك في الخصوصية",
  },
  important_notes: {
    en: "Important Notes",
    ar: "ملاحظات مهمة",
  },
  privacy_contact_primary: {
    en: "Tatami Data Protection Office (Primary)",
    ar: "مكتب حماية البيانات في تاتامي (رئيسي)",
  },
  privacy_contact_emea: {
    en: "EEA & United Kingdom Enquiries",
    ar: "استفسارات المنطقة الاقتصادية الأوروبية والمملكة المتحدة",
  },
  privacy_contact_americas: {
    en: "North America & International Support",
    ar: "دعم أمريكا الشمالية والمناطق الدولية",
  },
  privacy_contact_company: {
    en: "Tatami Technologies W.L.L.",
    ar: "شركة تاتامي تكنولوجيز ذ.م.م.",
  },
  privacy_contact_address_line1: {
    en: "5th Floor, Palm Tower B, West Bay",
    ar: "الطابق الخامس، برج بالم B، منطقة الخليج الغربي",
  },
  privacy_contact_address_line2: {
    en: "Doha, State of Qatar",
    ar: "الدوحة، دولة قطر",
  },
  privacy_contact_email: {
    en: "Email: privacy@tatamihq.com",
    ar: "البريد الإلكتروني: privacy@tatamihq.com",
  },
  privacy_contact_phone: {
    en: "Phone: +974 4400 1200 (Sunday–Thursday, 9:00–17:00 AST)",
    ar: "الهاتف: ‎+974 4400 1200‎ (من الأحد إلى الخميس، 9:00–17:00 بتوقيت الدوحة)",
  },
  privacy_contact_emea_correspondent: {
    en: "Tatami Privacy Correspondent – EMEA",
    ar: "مراسل الخصوصية في تاتامي – أوروبا والشرق الأوسط وأفريقيا",
  },
  privacy_contact_emea_address1: {
    en: "Vesta Building, Herikerbergweg 195",
    ar: "مبنى فيستا، هيريكيربيرغ فيغ 195",
  },
  privacy_contact_emea_address2: {
    en: "1101 CN Amsterdam, Netherlands",
    ar: "1101 سي إن أمستردام، هولندا",
  },
  privacy_contact_emea_email: {
    en: "Email: euprivacy@tatamihq.com",
    ar: "البريد الإلكتروني: euprivacy@tatamihq.com",
  },
  privacy_contact_americas_correspondent: {
    en: "Tatami Privacy Correspondent – Americas",
    ar: "مراسل الخصوصية في تاتامي – الأمريكتان",
  },
  privacy_contact_americas_email: {
    en: "Email: privacy-americas@tatamihq.com",
    ar: "البريد الإلكتروني: privacy-americas@tatamihq.com",
  },
  privacy_contact_americas_phone: {
    en: "Toll-free: +1 (888) 555-7826",
    ar: "الرقم المجاني: ‎+1 (888) 555-7826‎",
  },

  // Privacy Content Sections
  privacy_section_1_heading: {
    en: "1. Scope and Audience",
    ar: "1. نطاق البيان والجمهور المستهدف",
  },
  privacy_section_1_para: {
    en: "This Privacy Statement applies when you engage with Tatami in your professional or personal capacity in connection with our products, marketing, or support services.",
    ar: "ينطبق بيان الخصوصية هذا عندما تتفاعل مع تاتامي بشخصك أو بصفتك المهنية فيما يتعلق بمنتجاتنا أو حملاتنا التسويقية أو خدمات الدعم التي نقدمها.",
  },
  privacy_section_1_bullet_1: {
    en: "Visit or use tatami.qa, waitlist.tatamihq.com, or other Tatami-controlled websites and subdomains.",
    ar: "زيارة أو استخدام موقع tatami.qa أو waitlist.tatamihq.com أو أي نطاق فرعي تديره تاتامي.",
  },
  privacy_section_1_bullet_2: {
    en: "Access Tatami mobile or web previews, pilot programmes, or beta environments we share with you.",
    ar: "الوصول إلى معاينات تاتامي على الويب أو الهاتف المحمول أو برامجنا التجريبية أو بيئات الاختبار التي نشاركها معك.",
  },
  privacy_section_1_bullet_3: {
    en: "Register for webinars, workshops, events, or thought-leadership sessions hosted or sponsored by Tatami.",
    ar: "التسجيل في الندوات عبر الإنترنت أو ورش العمل أو الفعاليات أو جلسات تبادل المعرفة التي تنظمها أو ترعاها تاتامي.",
  },
  privacy_section_1_bullet_4: {
    en: "Communicate with our customer experience, success, or sales teams by email, chat, phone, or social channels.",
    ar: "التواصل مع فرق نجاح العملاء أو خدمة العملاء أو المبيعات لدينا عبر البريد الإلكتروني أو المحادثة أو الهاتف أو القنوات الاجتماعية.",
  },
  privacy_section_1_bullet_5: {
    en: "Receive marketing communications, complete surveys, or download resources provided by Tatami.",
    ar: "تلقي الرسائل التسويقية أو إكمال الاستبيانات أو تنزيل الموارد المقدمة من تاتامي.",
  },

  privacy_section_2_heading: {
    en: "2. Definitions You'll See",
    ar: "2. مصطلحات أساسية",
  },
  privacy_section_2_para_1: {
    en: '"Personal information" refers to any data that identifies or reasonably relates to an identifiable person. Some regulations also refer to "personal data" or "personally identifiable information (PII)" — we treat these definitions consistently throughout this notice.',
    ar: "تشير «المعلومات الشخصية» إلى أي بيانات تحدد هوية شخص بعينه أو ترتبط به بشكل معقول. وتشمل بعض التشريعات مصطلحات مثل «البيانات الشخصية» أو «معلومات التعريف الشخصية»، ونحن نتعامل مع هذه المصطلحات بالمعنى نفسه في هذا البيان.",
  },
  privacy_section_2_para_2: {
    en: '"Client Data" is information that landlords, property managers, or enterprise partners upload to Tatami solutions. Tatami processes Client Data only according to written instructions received from the relevant controller.',
    ar: "«بيانات العملاء» هي المعلومات التي يرفعها الملاك أو مديرو العقارات أو الشركاء المؤسسيون إلى حلول تاتامي. ولا نعالج بيانات العملاء إلا وفق التعليمات المكتوبة الواردة من المتحكم المعني.",
  },
  privacy_section_2_para_3: {
    en: '"Services" means Tatami\'s digital rent payment platform, property management tools, related APIs, beta releases, events, and support offerings.',
    ar: "«الخدمات» تعني منصة تاتامي للدفع الرقمي للإيجار، وأدوات إدارة العقارات، وواجهات البرمجة، والإصدارات التجريبية، والفعاليات، وخدمات الدعم المرتبطة بها.",
  },

  privacy_section_3_heading: {
    en: "3. Personal Information We Collect",
    ar: "3. المعلومات الشخصية التي نجمعها",
  },
  privacy_section_3_para: {
    en: "The categories of personal information we process will depend on how you interact with Tatami. We aim to collect only what we need for clearly defined purposes.",
    ar: "تختلف فئات البيانات التي نعالجها بحسب كيفية تفاعلك مع تاتامي. ونلتزم بجمع أقل قدر ممكن من البيانات اللازمة للأغراض المحددة بوضوح.",
  },
  privacy_section_3_bullet_1: {
    en: "Information you provide directly: contact details, professional role, company name, preferred language, waitlist and support form submissions, account credentials, event registrations, survey responses, and communication preferences.",
    ar: "المعلومات التي تقدمها بشكل مباشر: بيانات الاتصال، الدور المهني، اسم الشركة، اللغة المفضلة، نماذج الانضمام إلى قائمة الانتظار والدعم، بيانات تسجيل الدخول، تسجيلات الفعاليات، الردود على الاستبيانات، وتفضيلات التواصل.",
  },
  privacy_section_3_bullet_2: {
    en: "Information collected automatically: device identifiers, IP address, browser type, operating system, time zone, referring URLs, interaction logs, cookie identifiers, feature usage data, and approximate location derived from IP address.",
    ar: "المعلومات التي تُجمع تلقائيًا: معرّفات الأجهزة، عنوان بروتوكول الإنترنت، نوع المتصفح، نظام التشغيل، المنطقة الزمنية، الروابط المرجعية، سجلات التفاعل، معرّفات ملفات تعريف الارتباط، بيانات استخدام المزايا، والموقع التقريبي المستمد من عنوان بروتوكول الإنترنت.",
  },
  privacy_section_3_bullet_3: {
    en: "Information from partners and public sources: lead enrichment data, social media handles, publicly available corporate records, or feedback shared by property partners, only where permitted by applicable law.",
    ar: "المعلومات الواردة من الشركاء والمصادر العامة: بيانات الإثراء، حسابات التواصل الاجتماعي، السجلات المؤسسية المتاحة للعامة، أو الملاحظات التي يشاركها شركاؤنا في القطاع العقاري، وذلك حيثما يسمح القانون.",
  },
  privacy_section_3_bullet_4: {
    en: "Sensitive data: we do not intentionally collect government ID numbers, payment card data, or health information via the public website. If we must process sensitive data (for example, to verify identity for regulated finance services), we will request it transparently and secure it with enhanced controls.",
    ar: "البيانات الحساسة: لا نجمع عمدًا أرقام الهوية الحكومية أو بيانات البطاقات المصرفية أو المعلومات الصحية عبر الموقع العام. وإذا دعت الحاجة لمعالجة بيانات حساسة (على سبيل المثال للتحقق من الهوية في الخدمات المالية المنظمة) فسنطلبها بصورة شفافة ونحميها بضوابط إضافية.",
  },

  privacy_section_4_heading: {
    en: "4. How We Use Personal Information",
    ar: "4. كيفية استخدامنا للمعلومات الشخصية",
  },
  privacy_section_4_para: {
    en: "Tatami processes personal information to deliver trustworthy services, comply with regulations, and communicate responsibly with our communities.",
    ar: "نعالج المعلومات الشخصية لنقدم خدمات موثوقة، ونفي بالمتطلبات التنظيمية، ونتواصل بمسؤولية مع مجتمعنا.",
  },
  privacy_section_4_bullet_1: {
    en: "Provide, personalise, and maintain Tatami's waitlist, onboarding, pilot, and support experiences.",
    ar: "تقديم تجارب الانضمام إلى قائمة الانتظار، والإعداد، والبرامج التجريبية، والدعم في تاتامي وتخصيصها وصيانتها.",
  },
  privacy_section_4_bullet_2: {
    en: "Respond to enquiries, fulfil resource requests, and deliver transactional service messages.",
    ar: "الرد على الاستفسارات، وتلبية طلبات الموارد، وإرسال الرسائل الخدمية الضرورية.",
  },
  privacy_section_4_bullet_3: {
    en: "Improve user journeys by performing analytics, quality assurance, research, and product development.",
    ar: "تحسين رحلات المستخدم من خلال التحليلات وضمان الجودة والبحث وتطوير المنتجات.",
  },
  privacy_section_4_bullet_4: {
    en: "Protect Tatami, our users, and property partners against fraud, abuse, security threats, or unlawful activity.",
    ar: "حماية تاتامي ومستخدمينا وشركائنا من الاحتيال أو إساءة الاستخدام أو التهديدات الأمنية أو الأنشطة غير المشروعة.",
  },
  privacy_section_4_bullet_5: {
    en: "Deliver marketing communications consistent with your preferences and applicable consent requirements.",
    ar: "تقديم الاتصالات التسويقية بما يتوافق مع تفضيلاتك والمتطلبات القانونية المتعلقة بالموافقة.",
  },
  privacy_section_4_bullet_6: {
    en: "Meet audit, regulatory, tax, and financial reporting obligations in the jurisdictions where we operate.",
    ar: "الوفاء بالتزامات التدقيق والامتثال والضرائب والتقارير المالية في المناطق التي نعمل فيها.",
  },

  // Privacy Rights
  privacy_rights_heading_1: {
    en: "Your Core Privacy Rights",
    ar: "حقوقك الأساسية في الخصوصية",
  },
  privacy_rights_para_1: {
    en: "Regardless of where you reside, you may request that Tatami:",
    ar: "بغض النظر عن مكان إقامتك، يمكنك طلب ما يلي من تاتامي:",
  },
  privacy_rights_bullet_1: {
    en: "Provide information about how we process your personal information.",
    ar: "تزويدك بمعلومات حول كيفية معالجتنا لبياناتك الشخصية.",
  },
  privacy_rights_bullet_2: {
    en: "Give you access to, or a copy of, the personal information we hold about you.",
    ar: "الحصول على نسخة من البيانات الشخصية التي نحتفظ بها عنك أو الاطلاع عليها.",
  },
  privacy_rights_bullet_3: {
    en: "Correct or update inaccurate or incomplete personal information.",
    ar: "تصحيح أو تحديث المعلومات الشخصية غير الدقيقة أو غير المكتملة.",
  },
  privacy_rights_bullet_4: {
    en: "Delete personal information, subject to legitimate retention requirements.",
    ar: "حذف البيانات الشخصية مع مراعاة متطلبات الاحتفاظ المشروعة.",
  },
  privacy_rights_bullet_5: {
    en: "Restrict or object to certain processing activities.",
    ar: "تقييد أو الاعتراض على بعض أنشطة المعالجة.",
  },
  privacy_rights_bullet_6: {
    en: "Withdraw consent where processing relies on your prior consent.",
    ar: "سحب الموافقة عندما تستند المعالجة إلى موافقتك المسبقة.",
  },

  privacy_rights_heading_2: {
    en: "Qatar & GCC Considerations",
    ar: "دولة قطر ودول مجلس التعاون",
  },
  privacy_rights_para_2: {
    en: "Tatami adheres to Qatar's Personal Data Privacy Protection Law and applicable regulations across the GCC. You may submit privacy requests via the contact methods below. We respond within thirty (30) calendar days unless law permits an extension.",
    ar: "تلتزم تاتامي بقانون حماية البيانات الشخصية في دولة قطر واللوائح المعمول بها في دول مجلس التعاون الخليجي. يمكنك إرسال طلبات الخصوصية عبر وسائل الاتصال الموضحة أدناه، وسنرد خلال ثلاثين (30) يومًا ما لم يسمح القانون بتمديد المدة.",
  },

  privacy_disclaimer_1: {
    en: "Official translations for Arabic, Chinese, Czech, Danish, Dutch, French, French Canadian, German, Italian, Japanese, Polish, Portuguese, Portuguese (Brazil), Romanian, Spanish, Spanish (Mexico), Turkish, and Catalan (Spain) are in progress. Until published, the English version governs.",
    ar: "تجري حالياً مراجعة الترجمات الرسمية للغات الأخرى، وحتى نشرها تبقى النسخة الإنجليزية المرجع الرسمي.",
  },
  privacy_disclaimer_2: {
    en: "If you contact us about a request concerning Client Data controlled by a property owner or manager, we will forward your request to the appropriate controller and support them in responding.",
    ar: "إذا تواصلت معنا بخصوص طلب يتعلق ببيانات عملاء يتحكم بها مالك عقار أو مديره، فسنقوم بتحويل طلبك إلى المتحكم المناسب ونسانده في الرد.",
  },

  contact_us_heading: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },

  // Terms of Service Page Translations
  terms_statement: {
    en: "Terms of Service",
    ar: "شروط الخدمة",
  },
  terms_title: {
    en: "Tatami Terms of Service",
    ar: "شروط خدمة تاتامي",
  },
  terms_subtitle: {
    en: "Please read these terms carefully before using Tatami's digital rent payment platform.",
    ar: "يرجى قراءة هذه الشروط بعناية قبل استخدام منصة تاتامي للدفع الرقمي للإيجار.",
  },
  terms_version: {
    en: "Version: December 17, 2025",
    ar: "الإصدار: 17 ديسمبر 2025",
  },
  terms_effective_date: {
    en: "Effective Date",
    ar: "تاريخ السريان",
  },
  terms_effective_date_desc: {
    en: "These terms are effective as of December 17, 2025 and supersede all prior agreements.",
    ar: "تسري هذه الشروط اعتبارًا من 17 ديسمبر 2025 وتلغي جميع الاتفاقيات السابقة.",
  },
  terms_acceptance: {
    en: "Acceptance of Terms",
    ar: "قبول الشروط",
  },
  terms_acceptance_desc: {
    en: "By accessing or using Tatami, you agree to be bound by these Terms of Service.",
    ar: "باستخدامك لتاتامي، فإنك توافق على الالتزام بشروط الخدمة هذه.",
  },
  terms_jurisdiction: {
    en: "Jurisdiction",
    ar: "الاختصاص القضائي",
  },
  terms_jurisdiction_desc: {
    en: "These terms are governed by the laws of the State of Qatar.",
    ar: "تخضع هذه الشروط لقوانين دولة قطر.",
  },

  terms_intro_1: {
    en: 'These Terms of Service ("Terms") constitute a legally binding agreement between you and Tatami Technologies W.L.L. ("Tatami", "we", "us", "our") governing your access to and use of our digital rent payment platform, mobile applications, and related services.',
    ar: "تشكل شروط الخدمة هذه («الشروط») اتفاقية ملزمة قانونًا بينك وبين شركة تاتامي تكنولوجيز ذ.م.م. («تاتامي»، «نحن») تحكم وصولك واستخدامك لمنصة الدفع الرقمي للإيجار والتطبيقات المحمولة والخدمات ذات الصلة.",
  },
  terms_intro_2: {
    en: "By creating an account, accessing our platform, or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Statement, and all applicable laws and regulations.",
    ar: "من خلال إنشاء حساب أو الوصول إلى منصتنا أو استخدام أي من خدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط وبيان الخصوصية الخاص بنا وجميع القوانين واللوائح المعمول بها.",
  },
  terms_intro_3: {
    en: "If you do not agree to these Terms, you must not access or use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.",
    ar: "إذا كنت لا توافق على هذه الشروط، فيجب عليك عدم الوصول إلى خدماتنا أو استخدامها. نحتفظ بالحق في تعديل هذه الشروط في أي وقت، واستمرارك في استخدام خدماتنا يشكل قبولًا لأي تغييرات.",
  },

  terms_section_1_heading: {
    en: "1. Definitions",
    ar: "1. التعريفات",
  },
  terms_section_1_para: {
    en: "For the purposes of these Terms, the following definitions apply:",
    ar: "لأغراض هذه الشروط، تنطبق التعريفات التالية:",
  },
  terms_section_1_bullet_1: {
    en: '"Platform" means the Tatami website (tatami.qa), mobile applications, and all related digital services.',
    ar: "«المنصة» تعني موقع تاتامي الإلكتروني (tatami.qa) والتطبيقات المحمولة وجميع الخدمات الرقمية ذات الصلة.",
  },
  terms_section_1_bullet_2: {
    en: '"User" means any tenant, landlord, property manager, or other individual or entity using our services.',
    ar: "«المستخدم» يعني أي مستأجر أو مالك أو مدير عقارات أو أي فرد أو كيان آخر يستخدم خدماتنا.",
  },
  terms_section_1_bullet_3: {
    en: '"Services" means all features, functionalities, and offerings provided through the Platform.',
    ar: "«الخدمات» تعني جميع المزايا والوظائف والعروض المقدمة من خلال المنصة.",
  },
  terms_section_1_bullet_4: {
    en: '"Account" means your registered user profile on the Platform.',
    ar: "«الحساب» يعني ملف تعريف المستخدم المسجل الخاص بك على المنصة.",
  },

  terms_section_2_heading: {
    en: "2. Eligibility and Account Registration",
    ar: "2. الأهلية وتسجيل الحساب",
  },
  terms_section_2_para_1: {
    en: "To use our services, you must be at least 18 years old and have the legal capacity to enter into binding contracts under the laws of Qatar.",
    ar: "لاستخدام خدماتنا، يجب أن يكون عمرك 18 عامًا على الأقل وأن تكون لديك الأهلية القانونية لإبرام عقود ملزمة بموجب قوانين قطر.",
  },
  terms_section_2_para_2: {
    en: "When creating an account, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
    ar: "عند إنشاء حساب، يجب عليك تقديم معلومات دقيقة وكاملة وحديثة. أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك.",
  },
  terms_section_2_para_3: {
    en: "You agree to notify us immediately of any unauthorized use of your account or any other breach of security. Tatami will not be liable for any loss or damage arising from your failure to comply with this security obligation.",
    ar: "توافق على إخطارنا فورًا بأي استخدام غير مصرح به لحسابك أو أي خرق آخر للأمان. لن تكون تاتامي مسؤولة عن أي خسارة أو ضرر ناتج عن عدم التزامك بهذا الالتزام الأمني.",
  },

  terms_section_3_heading: {
    en: "3. Services Description",
    ar: "3. وصف الخدمات",
  },
  terms_section_3_para: {
    en: "Tatami provides a digital platform that facilitates rent payments and property management. Our services include:",
    ar: "توفر تاتامي منصة رقمية تسهل دفع الإيجار وإدارة العقارات. تشمل خدماتنا:",
  },
  terms_section_3_bullet_1: {
    en: "Digital rent payment processing through various payment methods including credit cards, debit cards, and bank transfers.",
    ar: "معالجة الدفع الرقمي للإيجار من خلال طرق دفع متنوعة بما في ذلك بطاقات الائتمان والخصم والتحويلات المصرفية.",
  },
  terms_section_3_bullet_2: {
    en: "Automated payment scheduling and recurring payment setup.",
    ar: "جدولة الدفع التلقائي وإعداد المدفوعات المتكررة.",
  },
  terms_section_3_bullet_3: {
    en: "Payment tracking, reporting, and receipt generation.",
    ar: "تتبع المدفوعات وإعداد التقارير وإنشاء الإيصالات.",
  },
  terms_section_3_bullet_4: {
    en: "Rewards program for eligible transactions.",
    ar: "برنامج المكافآت للمعاملات المؤهلة.",
  },
  terms_section_3_bullet_5: {
    en: "Property management tools for landlords and property managers.",
    ar: "أدوات إدارة العقارات للملاك ومديري العقارات.",
  },

  terms_section_4_heading: {
    en: "4. Payment Terms",
    ar: "4. شروط الدفع",
  },
  terms_section_4_para_1: {
    en: "All payments processed through the Platform are subject to our payment processing fees, which will be clearly disclosed before you complete any transaction.",
    ar: "جميع المدفوعات المعالجة من خلال المنصة تخضع لرسوم معالجة الدفع الخاصة بنا، والتي سيتم الإفصاح عنها بوضوح قبل إتمام أي معاملة.",
  },
  terms_section_4_para_2: {
    en: "You authorize Tatami to charge your selected payment method for all fees and amounts due. You are responsible for ensuring sufficient funds are available for scheduled payments.",
    ar: "أنت تفوض تاتامي بتحصيل الرسوم والمبالغ المستحقة من طريقة الدفع المحددة. أنت مسؤول عن التأكد من توفر أموال كافية للمدفوعات المجدولة.",
  },
  terms_section_4_para_3: {
    en: "Failed payments may result in late fees, service interruption, or account suspension. Tatami is not responsible for any consequences arising from failed payments due to insufficient funds or invalid payment methods.",
    ar: "قد تؤدي المدفوعات الفاشلة إلى رسوم تأخير أو انقطاع الخدمة أو تعليق الحساب. تاتامي ليست مسؤولة عن أي عواقب ناتجة عن فشل المدفوعات بسبب عدم كفاية الأموال أو طرق الدفع غير الصالحة.",
  },

  terms_section_5_heading: {
    en: "5. User Responsibilities",
    ar: "5. مسؤوليات المستخدم",
  },
  terms_section_5_para: {
    en: "As a user of the Platform, you agree to:",
    ar: "كمستخدم للمنصة، فإنك توافق على:",
  },
  terms_section_5_bullet_1: {
    en: "Provide accurate and truthful information at all times.",
    ar: "تقديم معلومات دقيقة وصادقة في جميع الأوقات.",
  },
  terms_section_5_bullet_2: {
    en: "Comply with all applicable laws and regulations in Qatar and your jurisdiction.",
    ar: "الامتثال لجميع القوانين واللوائح المعمول بها في قطر وفي منطقتك.",
  },
  terms_section_5_bullet_3: {
    en: "Not use the Platform for any illegal, fraudulent, or unauthorized purposes.",
    ar: "عدم استخدام المنصة لأي أغراض غير قانونية أو احتيالية أو غير مصرح بها.",
  },
  terms_section_5_bullet_4: {
    en: "Not attempt to gain unauthorized access to any part of the Platform or other users' accounts.",
    ar: "عدم محاولة الوصول غير المصرح به إلى أي جزء من المنصة أو حسابات مستخدمين آخرين.",
  },
  terms_section_5_bullet_5: {
    en: "Not interfere with or disrupt the Platform's operation or servers.",
    ar: "عدم التدخل في تشغيل المنصة أو الخوادم أو تعطيلها.",
  },

  terms_section_6_heading: {
    en: "6. Intellectual Property",
    ar: "6. الملكية الفكرية",
  },
  terms_section_6_para_1: {
    en: "All content, features, and functionality of the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of Tatami or its licensors.",
    ar: "جميع المحتوى والميزات والوظائف الخاصة بالمنصة، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والأيقونات والصور ومقاطع الصوت والتنزيلات الرقمية وتجميعات البيانات والبرامج، هي ملكية حصرية لتاتامي أو مرخصيها.",
  },
  terms_section_6_para_2: {
    en: "You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for its intended purposes. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our express written permission.",
    ar: "يتم منحك ترخيصًا محدودًا وغير حصري وغير قابل للتحويل للوصول إلى المنصة واستخدامها للأغراض المقصودة منها. لا يجوز لك نسخ أو توزيع أو تعديل أو إنشاء أعمال مشتقة أو عرض علنًا أو استغلال أي محتوى دون إذن كتابي صريح منا.",
  },

  terms_section_7_heading: {
    en: "7. Limitation of Liability",
    ar: "7. تحديد المسؤولية",
  },
  terms_section_7_para_1: {
    en: "To the maximum extent permitted by law, Tatami shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.",
    ar: "إلى أقصى حد يسمح به القانون، لن تكون تاتامي مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، بما في ذلك على سبيل المثال لا الحصر فقدان الأرباح أو البيانات أو الاستخدام أو السمعة أو الخسائر غير الملموسة الأخرى.",
  },
  terms_section_7_para_2: {
    en: "Our total liability for any claim arising out of or relating to these Terms or the Platform shall not exceed the amount you have paid to Tatami in the twelve (12) months preceding the claim.",
    ar: "لن تتجاوز مسؤوليتنا الإجمالية عن أي مطالبة ناشئة عن أو متعلقة بهذه الشروط أو المنصة المبلغ الذي دفعته لتاتامي في الاثني عشر (12) شهرًا السابقة للمطالبة.",
  },

  terms_section_8_heading: {
    en: "8. Termination",
    ar: "8. الإنهاء",
  },
  terms_section_8_para_1: {
    en: "You may terminate your account at any time by contacting our customer support team. Upon termination, your right to use the Platform will immediately cease.",
    ar: "يمكنك إنهاء حسابك في أي وقت عن طريق الاتصال بفريق دعم العملاء لدينا. عند الإنهاء، سينتهي حقك في استخدام المنصة فورًا.",
  },
  terms_section_8_para_2: {
    en: "We reserve the right to suspend or terminate your account immediately, without prior notice, if you breach these Terms or engage in any conduct that we determine to be harmful to other users, Tatami, or third parties.",
    ar: "نحتفظ بالحق في تعليق أو إنهاء حسابك فورًا، دون إشعار مسبق، إذا خالفت هذه الشروط أو انخرطت في أي سلوك نعتبره ضارًا بمستخدمين آخرين أو بتاتامي أو بأطراف ثالثة.",
  },
  terms_section_8_para_3: {
    en: "Sections regarding intellectual property, limitation of liability, and dispute resolution shall survive termination of these Terms.",
    ar: "ستظل الأقسام المتعلقة بالملكية الفكرية وتحديد المسؤولية وحل النزاعات سارية بعد إنهاء هذه الشروط.",
  },

  terms_section_9_heading: {
    en: "9. Governing Law and Dispute Resolution",
    ar: "9. القانون الواجب التطبيق وحل النزاعات",
  },
  terms_section_9_para_1: {
    en: "These Terms shall be governed by and construed in accordance with the laws of the State of Qatar, without regard to its conflict of law provisions.",
    ar: "تخضع هذه الشروط وتفسر وفقًا لقوانين دولة قطر، دون النظر إلى أحكام تنازع القوانين.",
  },
  terms_section_9_para_2: {
    en: "Any dispute arising out of or relating to these Terms or the Platform shall be resolved through binding arbitration in accordance with the rules of the Qatar International Court and Dispute Resolution Centre (QICDRC).",
    ar: "يتم حل أي نزاع ناشئ عن أو متعلق بهذه الشروط أو المنصة من خلال التحكيم الملزم وفقًا لقواعد المحكمة الدولية ومركز تسوية المنازعات في قطر (QICDRC).",
  },

  terms_section_10_heading: {
    en: "10. Changes to Terms",
    ar: "10. التغييرات على الشروط",
  },
  terms_section_10_para_1: {
    en: "We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our Platform and updating the 'Effective Date' at the top of this document.",
    ar: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سنخطرك بأي تغييرات جوهرية من خلال نشر الشروط المحدثة على منصتنا وتحديث «تاريخ السريان» في أعلى هذا المستند.",
  },
  terms_section_10_para_2: {
    en: "Your continued use of the Platform after the posting of revised Terms constitutes your acceptance of such changes. If you do not agree to the modified Terms, you must stop using the Platform.",
    ar: "يشكل استمرارك في استخدام المنصة بعد نشر الشروط المعدلة قبولك لهذه التغييرات. إذا كنت لا توافق على الشروط المعدلة، فيجب عليك التوقف عن استخدام المنصة.",
  },

  terms_contact_info: {
    en: "For questions about these Terms, please contact us at legal@tatamihq.com or through our customer support channels.",
    ar: "للأسئلة حول هذه الشروط، يرجى الاتصال بنا على legal@tatamihq.com أو من خلال قنوات دعم العملاء لدينا.",
  },

  // Additional Terms sections
  terms_section_11_heading: {
    en: "11. Privacy and Data Protection",
    ar: "11. الخصوصية وحماية البيانات",
  },
  terms_section_11_para_1: {
    en: "Your use of the Platform is also governed by our Privacy Statement, which is incorporated into these Terms by reference. Please review our Privacy Statement to understand how we collect, use, and protect your personal information.",
    ar: "يخضع استخدامك للمنصة أيضًا لبيان الخصوصية الخاص بنا، والذي يتم دمجه في هذه الشروط بالإشارة. يرجى مراجعة بيان الخصوصية الخاص بنا لفهم كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها.",
  },
  terms_section_11_para_2: {
    en: "You acknowledge and agree that we may process your personal data in accordance with applicable data protection laws, including the Qatar Personal Data Privacy Protection Law and other relevant regulations.",
    ar: "أنت تقر وتوافق على أننا قد نعالج بياناتك الشخصية وفقًا لقوانين حماية البيانات المعمول بها، بما في ذلك قانون حماية البيانات الشخصية في قطر واللوائح الأخرى ذات الصلة.",
  },

  terms_section_12_heading: {
    en: "12. Third-Party Services and Integrations",
    ar: "12. خدمات وتكاملات الطرف الثالث",
  },
  terms_section_12_para_1: {
    en: "The Platform may integrate with or contain links to third-party services, applications, or websites. Your use of any third-party services is subject to the terms and conditions and privacy policies of those third parties.",
    ar: "قد تتكامل المنصة مع خدمات أو تطبيقات أو مواقع ويب تابعة لطرف ثالث أو تحتوي على روابط لها. يخضع استخدامك لأي خدمات طرف ثالث لشروط وأحكام وسياسات الخصوصية الخاصة بتلك الأطراف الثالثة.",
  },
  terms_section_12_para_2: {
    en: "We do not endorse, control, or assume responsibility for any third-party services. You acknowledge that we are not liable for any loss or damage caused by your use of any third-party services accessed through our Platform.",
    ar: "نحن لا نؤيد أو نتحكم أو نتحمل المسؤولية عن أي خدمات طرف ثالث. أنت تقر بأننا لسنا مسؤولين عن أي خسارة أو ضرر ناتج عن استخدامك لأي خدمات طرف ثالث يتم الوصول إليها من خلال منصتنا.",
  },

  terms_section_13_heading: {
    en: "13. Service Availability and Modifications",
    ar: "13. توفر الخدمة والتعديلات",
  },
  terms_section_13_para_1: {
    en: "We strive to maintain continuous availability of our Services, but we do not guarantee uninterrupted access. The Platform may be unavailable due to maintenance, updates, or circumstances beyond our control.",
    ar: "نسعى جاهدين للحفاظ على توفر مستمر لخدماتنا، لكننا لا نضمن الوصول دون انقطاع. قد تكون المنصة غير متاحة بسبب الصيانة أو التحديثات أو ظروف خارجة عن إرادتنا.",
  },
  terms_section_13_para_2: {
    en: "We reserve the right to modify, suspend, or discontinue any part of the Services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.",
    ar: "نحتفظ بالحق في تعديل أو تعليق أو إيقاف أي جزء من الخدمات في أي وقت، مع أو بدون إشعار. لن نكون مسؤولين تجاهك أو أي طرف ثالث عن أي تعديل أو تعليق أو إيقاف للخدمات.",
  },

  terms_section_14_heading: {
    en: "14. Force Majeure",
    ar: "14. القوة القاهرة",
  },
  terms_section_14_para: {
    en: "Neither party shall be liable for any failure or delay in performing its obligations under these Terms due to circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.",
    ar: "لن يكون أي من الطرفين مسؤولاً عن أي فشل أو تأخير في أداء التزاماته بموجب هذه الشروط بسبب ظروف خارجة عن سيطرته المعقولة، بما في ذلك على سبيل المثال لا الحصر أعمال الله أو الحرب أو الإرهاب أو أعمال الشغب أو الحظر أو أعمال السلطات المدنية أو العسكرية أو الحرائق أو الفيضانات أو الحوادث أو فشل البنية التحتية للشبكة أو الإضرابات أو نقص مرافق النقل أو الوقود أو الطاقة أو العمالة أو المواد.",
  },

  terms_section_15_heading: {
    en: "15. Notices and Communications",
    ar: "15. الإشعارات والاتصالات",
  },
  terms_section_15_para: {
    en: "All notices and communications under these Terms will be in writing and delivered via email to the address you provided during registration or posted on the Platform. You agree to keep your contact information current and acknowledge that notices sent to your registered email address will be deemed received.",
    ar: "ستكون جميع الإشعارات والاتصالات بموجب هذه الشروط كتابية ويتم تسليمها عبر البريد الإلكتروني إلى العنوان الذي قدمته أثناء التسجيل أو نشره على المنصة. توافق على تحديث معلومات الاتصال الخاصة بك وتقر بأن الإشعارات المرسلة إلى عنوان بريدك الإلكتروني المسجل ستعتبر مستلمة.",
  },

  terms_section_16_heading: {
    en: "16. Severability and Waiver",
    ar: "16. قابلية الفصل والتنازل",
  },
  terms_section_16_para_1: {
    en: "If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.",
    ar: "إذا وُجد أن أي حكم من هذه الشروط غير صالح أو غير قابل للتنفيذ من قبل محكمة ذات اختصاص، فسيتم تقييد أو إلغاء هذا الحكم إلى الحد الأدنى الضروري، وستظل الأحكام المتبقية سارية المفعول بالكامل.",
  },
  terms_section_16_para_2: {
    en: "No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.",
    ar: "لن يُعتبر أي تنازل عن أي بند أو شرط من هذه الشروط بمثابة تنازل إضافي أو مستمر عن هذا البند أو الشرط أو أي بند أو شرط آخر، ولن يشكل فشلنا في تأكيد أي حق أو حكم بموجب هذه الشروط تنازلاً عن هذا الحق أو الحكم.",
  },

  terms_section_17_heading: {
    en: "17. Entire Agreement",
    ar: "17. الاتفاقية الكاملة",
  },
  terms_section_17_para: {
    en: "These Terms, together with our Privacy Statement and any other policies referenced herein, constitute the entire agreement between you and Tatami regarding the Services and supersede all prior agreements, understandings, and communications, whether written or oral, relating to the subject matter herein.",
    ar: "تشكل هذه الشروط، جنبًا إلى جنب مع بيان الخصوصية الخاص بنا وأي سياسات أخرى مشار إليها هنا، الاتفاقية الكاملة بينك وبين تاتامي فيما يتعلق بالخدمات وتلغي جميع الاتفاقيات والتفاهمات والاتصالات السابقة، سواء كانت مكتوبة أو شفهية، فيما يتعلق بالموضوع الوارد هنا.",
  },

  terms_acceptance_notice: {
    en: "By using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
    ar: "باستخدام خدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بشروط الخدمة هذه.",
  },

  terms_last_updated: {
    en: "Last Updated",
    ar: "آخر تحديث",
  },

  // About Us Page Translations
  about_hero_title: {
    en: "Transforming Rent Payments in Qatar",
    ar: "تحويل مدفوعات الإيجار في قطر",
  },
  about_hero_subtitle: {
    en: "We're building the future of digital rent payments for the GCC region, starting with Qatar.",
    ar: "نحن نبني مستقبل مدفوعات الإيجار الرقمية لمنطقة دول مجلس التعاون الخليجي، بدءًا من قطر.",
  },
  about_hero_badge: {
    en: "Pioneering Digital Rent Payments",
    ar: "رواد مدفوعات الإيجار الرقمية",
  },

  about_mission_title: {
    en: "Our Mission",
    ar: "مهمتنا",
  },
  about_mission_text: {
    en: "To digitize and simplify rent payments across the GCC, making them more convenient, secure, and rewarding for tenants and landlords alike.",
    ar: "رقمنة وتبسيط مدفوعات الإيجار في دول مجلس التعاون الخليجي، لجعلها أكثر راحة وأمانًا ومكافأة للمستأجرين والملاك على حد سواء.",
  },

  about_vision_title: {
    en: "Our Vision",
    ar: "رؤيتنا",
  },
  about_vision_text: {
    en: "To become the leading digital payment platform for the GCC's $50B+ rental market, empowering millions of tenants and property owners with seamless financial technology.",
    ar: "أن نصبح منصة الدفع الرقمي الرائدة لسوق الإيجار في دول مجلس التعاون الخليجي البالغ 50 مليار دولار، وتمكين ملايين المستأجرين وملاك العقارات بتكنولوجيا مالية سلسة.",
  },

  about_story_title: {
    en: "Our Story",
    ar: "قصتنا",
  },
  about_story_subtitle: {
    en: "From observing a problem to building the solution",
    ar: "من ملاحظة المشكلة إلى بناء الحل",
  },
  about_story_chapter_1: {
    en: "The Observation",
    ar: "الملاحظة",
  },
  about_story_chapter_2: {
    en: "The Decision",
    ar: "القرار",
  },
  about_story_chapter_3: {
    en: "Today",
    ar: "اليوم",
  },
  about_story_para1_enhanced: {
    en: "In 2023, we noticed something strange: Qatar, with one of the world's highest GDP per capita and cutting-edge infrastructure, was still relying on post-dated cheques for rent. Over 90% of Qatar's QAR 20B rental market remained offline—tenants signing 12-13 cheques annually, landlords managing stacks of paper, and billions flowing through an outdated system.",
    ar: "في عام 2023، لاحظنا شيئًا غريبًا: قطر، التي تتمتع بأحد أعلى معدلات الناتج المحلي الإجمالي للفرد في العالم وبنية تحتية متطورة، لا تزال تعتمد على الشيكات المؤجلة للإيجار. أكثر من 90٪ من سوق الإيجار القطري البالغ 20 مليار ريال قطري يبقى غير متصل بالإنترنت—المستأجرون يوقعون 12-13 شيكًا سنويًا، والملاك يديرون أكوام الأوراق، ومليارات تتدفق عبر نظام قديم.",
  },
  about_story_para2_enhanced: {
    en: "We assembled a team with deep expertise in fintech, real estate, and the GCC market. Our mission was clear: build a platform that doesn't just digitize rent payments, but transforms them into an opportunity—rewards for tenants, credit building for all, and seamless management for landlords.",
    ar: "جمعنا فريقًا يتمتع بخبرة عميقة في التكنولوجيا المالية والعقارات وسوق دول مجلس التعاون الخليجي. كانت مهمتنا واضحة: بناء منصة لا ترقمن مدفوعات الإيجار فحسب، بل تحولها إلى فرصة—مكافآت للمستأجرين، وبناء ائتمان للجميع، وإدارة سلسة للملاك.",
  },
  about_story_para3_enhanced: {
    en: "We're pioneering Qatar's digital rent payment revolution. Partnering with leading banks, property management companies, and thousands of landlords and tenants to make rent payment as simple as sending a message—while building credit, earning rewards, and bringing transparency to every transaction.",
    ar: "نحن نقود ثورة الدفع الرقمي للإيجار في قطر. نتعاون مع البنوك الرائدة وشركات إدارة العقارات والآلاف من الملاك والمستأجرين لجعل دفع الإيجار بسيطًا مثل إرسال رسالة—مع بناء الائتمان وكسب المكافآت وتحقيق الشفافية في كل معاملة.",
  },

  about_values_title: {
    en: "Our Values",
    ar: "قيمنا",
  },
  about_values_subtitle: {
    en: "The principles that guide everything we do",
    ar: "المبادئ التي توجه كل ما نقوم به",
  },
  about_value_trust_title: {
    en: "Trust & Security",
    ar: "الثقة والأمان",
  },
  about_value_trust_desc: {
    en: "We prioritize the security of your financial data and transactions above all else.",
    ar: "نعطي الأولوية لأمن بياناتك المالية ومعاملاتك فوق كل شيء آخر.",
  },
  about_value_innovation_title: {
    en: "Innovation",
    ar: "الابتكار",
  },
  about_value_innovation_desc: {
    en: "We constantly evolve our platform to meet the changing needs of the rental market.",
    ar: "نقوم بتطوير منصتنا باستمرار لتلبية الاحتياجات المتغيرة لسوق الإيجار.",
  },
  about_value_customer_title: {
    en: "Customer First",
    ar: "العميل أولاً",
  },
  about_value_customer_desc: {
    en: "Every feature we build starts with understanding our users' needs and challenges.",
    ar: "كل ميزة نبنيها تبدأ بفهم احتياجات مستخدمينا وتحدياتهم.",
  },
  about_value_compliance_title: {
    en: "Compliance",
    ar: "الامتثال",
  },
  about_value_compliance_desc: {
    en: "We adhere to all Qatar and GCC financial regulations to ensure your peace of mind.",
    ar: "نلتزم بجميع اللوائح المالية في قطر ودول مجلس التعاون الخليجي لضمان راحة بالك.",
  },

  about_stats_title: {
    en: "Tatami by the Numbers",
    ar: "تاتامي بالأرقام",
  },
  about_stat_founded: {
    en: "Founded in 2024",
    ar: "تأسست في 2024",
  },
  about_stat_market: {
    en: "$5.4B Qatar Rental Market",
    ar: "سوق إيجار قطر 5.4 مليار دولار",
  },
  about_stat_cheques: {
    en: ">90% Rent Paid by Cheque",
    ar: ">90٪ إيجار مدفوع بالشيك",
  },
  about_stat_vision: {
    en: "Vision for Digital Future",
    ar: "رؤية للمستقبل الرقمي",
  },

  about_cta_title: {
    en: "Join Us in Transforming Rent Payments",
    ar: "انضم إلينا في تحويل مدفوعات الإيجار",
  },
  about_cta_text: {
    en: "Whether you're a tenant, landlord, or property manager, we're here to make your rental experience better.",
    ar: "سواء كنت مستأجرًا أو مالكًا أو مدير عقارات، نحن هنا لجعل تجربة الإيجار الخاصة بك أفضل.",
  },
  about_cta_button: {
    en: "Get Started Today",
    ar: "ابدأ اليوم",
  },

  about_backed_title: {
    en: "Backed By",
    ar: "مدعوم من",
  },
  about_backed_subtitle: {
    en: "We're proud to be supported by leading investors and partners who share our vision.",
    ar: "نحن فخورون بأن نكون مدعومين من قبل مستثمرين وشركاء رائدين يشاركوننا رؤيتنا.",
  },
  about_bold_statement: {
    en: "Rent is the largest monthly expense for millions in the GCC — yet it's still paid like it's 1995.",
    ar: "الإيجار هو أكبر نفقة شهرية للملايين في دول مجلس التعاون الخليجي — ومع ذلك لا يزال يُدفع كما كان في عام 1995.",
  },
  about_mission_highlight: {
    en: "We turn rent into value — not friction.",
    ar: "نحول الإيجار إلى قيمة — وليس احتكاكًا.",
  },
  about_vision_highlight: {
    en: "The default way to pay rent across the GCC by 2027.",
    ar: "الطريقة الافتراضية لدفع الإيجار في دول مجلس التعاون الخليجي بحلول 2027.",
  },
  about_founders_title: {
    en: "Built in Qatar, for Qatar",
    ar: "بُنيت في قطر، من أجل قطر",
  },
  about_founders_text: {
    en: "Founded by operators with deep experience in fintech, real estate, and the GCC market. We've lived the problem — managing rent payments across Qatar, navigating post-dated cheques, and missing out on rewards. Now we're building the solution.",
    ar: "تأسست من قبل خبراء لديهم خبرة عميقة في التكنولوجيا المالية والعقارات وسوق دول مجلس التعاون الخليجي. لقد عشنا المشكلة — إدارة مدفوعات الإيجار في قطر، والتعامل مع الشيكات المؤجلة، وتفويت المكافآت. الآن نحن نبني الحل.",
  },
  about_founders_expertise_1: {
    en: "Fintech Veterans",
    ar: "قدامى التكنولوجيا المالية",
  },
  about_founders_expertise_2: {
    en: "Real Estate Experts",
    ar: "خبراء العقارات",
  },
  about_founders_expertise_3: {
    en: "GCC Market Leaders",
    ar: "قادة السوق الخليجي",
  },
  about_cta_button_enhanced: {
    en: "Join Waitlist — Get Early Access & Rewards",
    ar: "انضم لقائمة الانتظار — احصل على وصول مبكر ومكافآت",
  },
  about_cta_subtext: {
    en: "Free to join. No credit card required.",
    ar: "مجاني للانضمام. لا يتطلب بطاقة ائتمان.",
  },
  about_mission_vision_title: {
    en: "Our Mission & Vision",
    ar: "مهمتنا ورؤيتنا",
  },
};

export default translations;
