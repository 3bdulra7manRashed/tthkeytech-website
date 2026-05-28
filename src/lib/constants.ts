export const siteConfig = {
  name: "ذكي تك",
  nameEn: "TheKey Tech",
  tagline: "حلول رقمية ذكية تساعدك على النمو بثقة",
  description:
    "في ذكي تك، نطوّر مواقع إلكترونية وتطبيقات وحلولاً ذكية تساعد الشركات ورواد الأعمال على بناء حضور رقمي احترافي وتحقيق نتائج حقيقية.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://thekeytech.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@thekeytech.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "966500000000",
  locale: "ar_SA",
};

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/about", label: "من نحن" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "/contact", label: "تواصل معنا" },
];

export const challenges = [
  "لديك فكرة مشروع ولا تعرف كيف تبدأ؟",
  "موقعك الحالي لا يحقق النتائج التي تطمح إليها؟",
  "تحتاج إلى حلول ذكية توفر الوقت والجهد؟",
  "تبحث عن فريق تقني يمكنك الاعتماد عليه؟",
];

export const homeServices = [
  {
    title: "تطوير المواقع",
    description:
      "مواقع سريعة ومتجاوبة بتجربة مستخدم ذكية تعكس هوية علامتك وتدعم نمو أعمالك.",
    icon: "globe",
    href: "/services#web",
  },
  {
    title: "تطوير التطبيقات",
    description:
      "تطبيقات موبايل سلسة تصل بعملائك وتعزّز التفاعل مع خدماتك أينما كانوا.",
    icon: "smartphone",
    href: "/services#mobile",
  },
  {
    title: "حلول الذكاء الاصطناعي",
    description:
      "أتمتة ذكية وتحليل بيانات يساعدك على اتخاذ قرارات أسرع وأدق.",
    icon: "brain",
    href: "/services#ai",
  },
  {
    title: "الهوية البصرية",
    description:
      "هوية بصرية متسقة تجعل علامتك مميزة واحترافية في كل نقطة تواصل.",
    icon: "palette",
    href: "/contact",
  },
];

export const whyUsPoints = [
  "نؤمن أن الحلول الذكية تبدأ بفهم حقيقي لاحتياجات عملائنا",
  "نركّز على بناء حلول تحقق نتائج حقيقية",
  "نهتم بالتفاصيل التي تصنع تجربة أفضل",
  "نطوّر حلولاً قابلة للنمو والتوسع",
];

export const processSteps = [
  { step: 1, title: "نفهم احتياجك", description: "نستمع لأهدافك ونحدد أولويات المشروع بوضوح." },
  { step: 2, title: "نحلل الفكرة", description: "نحوّل رؤيتك إلى خطة عمل واضحة وقابلة للتنفيذ." },
  { step: 3, title: "نصمم الحل", description: "نصمم تجربة مستخدم وواجهات تعكس هوية علامتك." },
  { step: 4, title: "نطوّر وننفذ", description: "نبني الحل بأحدث التقنيات وبمعايير جودة عالية." },
  { step: 5, title: "نطلق المشروع", description: "نطلق مشروعك بثقة مع اختبارات شاملة قبل الإطلاق." },
  { step: 6, title: "دعم وتحسين مستمر", description: "نبقى بجانبك لتحسين الأداء والتوسع المستقبلي." },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "منصة تجارة إلكترونية",
    category: "تطوير مواقع",
    challenge: "متجر قديم بطيء ونسبة تحويل منخفضة رغم حجم الزيارات.",
    solution: "إعادة بناء المتجر بتجربة شراء سلسة، دفع آمن، ولوحة تحكم ذكية.",
    result: "زيادة التحويل بنسبة 42% وتحسين سرعة التحميل بنسبة 65%.",
    gradient: "from-brand-primary to-brand-purple",
  },
  {
    id: 2,
    title: "تطبيق خدمات توصيل",
    category: "تطبيقات موبايل",
    challenge: "صعوبة تتبع الطلبات وضعف التواصل بين العملاء والسائقين.",
    solution: "تطبيق موبايل مع تتبع لحظي وإشعارات ذكية ولوحة إدارة متكاملة.",
    result: "تقليل شكاوى التأخير بنسبة 38% ورفع رضا العملاء.",
    gradient: "from-brand-light to-brand-primary",
  },
  {
    id: 3,
    title: "شات بوت دعم ذكي",
    category: "ذكاء اصطناعي",
    challenge: "فريق الدعم مثقل بطلبات متكررة تستهلك وقتاً طويلاً.",
    solution: "شات بوت عربي يفهم استفسارات العملاء ويحوّل الحالات المعقدة للفريق.",
    result: "أتمتة 60% من الاستفسارات وتحرير وقت الفريق للمهام الحرجة.",
    gradient: "from-brand-purple to-brand-pink",
  },
  {
    id: 4,
    title: "موقع شركة تقنية",
    category: "هوية بصرية + موقع",
    challenge: "حضور رقمي ضعيف لا يعكس مستوى الشركة الاحترافي.",
    solution: "هوية بصرية حديثة وموقع عربي سريع بتجربة SaaS عصرية.",
    result: "زيادة طلبات التواصل بنسبة 55% خلال الشهر الأول.",
    gradient: "from-brand-pink to-brand-primary",
  },
  {
    id: 5,
    title: "نظام إدارة داخلي",
    category: "حلول مخصصة",
    challenge: "عمليات يدوية متفرقة تسبب أخطاء وتأخير في التقارير.",
    solution: "نظام موحد لإدارة المهام والتقارير مع صلاحيات ذكية.",
    result: "توفير 20 ساعة عمل أسبوعياً ودقة أعلى في البيانات.",
    gradient: "from-brand-primary to-brand-light",
  },
  {
    id: 6,
    title: "تطبيق Startup",
    category: "تطبيقات موبايل",
    challenge: "إطلاق سريع لـ MVP يجذب مستثمرين ومستخدمين أوائل.",
    solution: "تطبيق MVP أنيق مع تسجيل ولوحة تحكم أساسية خلال 6 أسابيع.",
    result: "إطلاق ناجح وجذب أول 500 مستخدم خلال أسبوعين.",
    gradient: "from-brand-light to-brand-pink",
  },
];
