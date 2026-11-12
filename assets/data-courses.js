/* Course catalog. Each course has its text in every site language:
   title, summary, prereq, outcome, and modules as [title, topics]. */
window.FAZAYAH.courses = [
  {
    code: "FZ-101", level: "beginner", weeks: 8, lessons: 64, projects: 4,
    stack: ["HTML", "CSS", "JavaScript", "Git", "VS Code"],
    t: {
      en: {
        title: "Web Foundations: HTML, CSS and JavaScript",
        summary: "Start from an empty file and finish with a responsive, accessible website published on your own domain.",
        prereq: "No experience needed. A computer and a browser are enough.",
        outcome: "A published personal site and three smaller pages for your portfolio.",
        modules: [
          ["How the web works", "Browsers, servers, URLs and HTTP; setting up your editor and terminal; putting a first page online"],
          ["HTML that means something", "Semantic structure, links, forms, images and media, accessibility basics"],
          ["CSS layout", "The box model, Flexbox, Grid, responsive design, custom properties"],
          ["JavaScript essentials", "Values and functions, arrays and objects, the DOM, events"],
          ["Working like a developer", "Git and GitHub, fetch and JSON, debugging with DevTools, deploying a site"]
        ]
      },
      ar: {
        title: "أساسيات الويب: HTML و CSS و JavaScript",
        summary: "ابدأ من ملف فارغ وانتهِ بموقع متجاوب وسهل الوصول منشور على نطاقك الخاص.",
        prereq: "لا تحتاج إلى خبرة. يكفي حاسوب ومتصفح.",
        outcome: "موقع شخصي منشور وثلاث صفحات أصغر لمعرض أعمالك.",
        modules: [
          ["كيف يعمل الويب", "المتصفحات والخوادم والعناوين وبروتوكول HTTP؛ إعداد المحرر والطرفية؛ نشر أول صفحة"],
          ["HTML ذات معنى", "البنية الدلالية، الروابط، النماذج، الصور والوسائط، أساسيات سهولة الوصول"],
          ["التخطيط باستخدام CSS", "نموذج الصندوق، Flexbox، Grid، التصميم المتجاوب، الخصائص المخصصة"],
          ["أساسيات JavaScript", "القيم والدوال، المصفوفات والكائنات، DOM، الأحداث"],
          ["العمل كمطوّر", "Git و GitHub، fetch و JSON، تتبع الأخطاء بأدوات DevTools، نشر الموقع"]
        ]
      },
      ur: {
        title: "ویب کی بنیادیں: HTML، CSS اور JavaScript",
        summary: "خالی فائل سے شروع کریں اور اپنے ڈومین پر شائع شدہ ریسپانسیو، قابلِ رسائی ویب سائٹ پر ختم کریں۔",
        prereq: "کسی تجربے کی ضرورت نہیں۔ ایک کمپیوٹر اور براؤزر کافی ہیں۔",
        outcome: "ایک شائع شدہ ذاتی ویب سائٹ اور آپ کے پورٹ فولیو کے لیے تین چھوٹے صفحات۔",
        modules: [
          ["ویب کیسے کام کرتا ہے", "براؤزر، سرور، URL اور HTTP؛ ایڈیٹر اور ٹرمینل کی تیاری؛ پہلا صفحہ آن لائن کرنا"],
          ["بامعنی HTML", "سیمینٹک ڈھانچہ، لنکس، فارمز، تصاویر اور میڈیا، رسائی کی بنیادی باتیں"],
          ["CSS لے آؤٹ", "باکس ماڈل، Flexbox، Grid، ریسپانسیو ڈیزائن، کسٹم پراپرٹیز"],
          ["JavaScript کی بنیادی باتیں", "ویلیوز اور فنکشنز، ارے اور آبجیکٹس، DOM، ایونٹس"],
          ["ڈیولپر کی طرح کام کرنا", "Git اور GitHub، fetch اور JSON، DevTools سے ڈیبگنگ، سائٹ ڈپلائے کرنا"]
        ]
      },
      fr: {
        title: "Fondations du web : HTML, CSS et JavaScript",
        summary: "Partez d'un fichier vide et terminez avec un site adaptatif et accessible, publié sur votre propre domaine.",
        prereq: "Aucune expérience requise. Un ordinateur et un navigateur suffisent.",
        outcome: "Un site personnel publié et trois pages plus petites pour votre portfolio.",
        modules: [
          ["Comment fonctionne le web", "Navigateurs, serveurs, URL et HTTP ; installation de l'éditeur et du terminal ; mise en ligne d'une première page"],
          ["Un HTML qui a du sens", "Structure sémantique, liens, formulaires, images et médias, bases de l'accessibilité"],
          ["Mise en page CSS", "Modèle de boîte, Flexbox, Grid, design adaptatif, propriétés personnalisées"],
          ["L'essentiel de JavaScript", "Valeurs et fonctions, tableaux et objets, le DOM, les événements"],
          ["Travailler comme un développeur", "Git et GitHub, fetch et JSON, débogage avec les DevTools, déploiement d'un site"]
        ]
      },
      es: {
        title: "Fundamentos web: HTML, CSS y JavaScript",
        summary: "Empieza con un archivo vacío y termina con un sitio adaptable y accesible, publicado en tu propio dominio.",
        prereq: "No hace falta experiencia. Basta con un ordenador y un navegador.",
        outcome: "Un sitio personal publicado y tres páginas más pequeñas para tu portafolio.",
        modules: [
          ["Cómo funciona la web", "Navegadores, servidores, URL y HTTP; preparación del editor y la terminal; publicación de una primera página"],
          ["HTML con significado", "Estructura semántica, enlaces, formularios, imágenes y medios, bases de accesibilidad"],
          ["Maquetación con CSS", "Modelo de caja, Flexbox, Grid, diseño adaptable, propiedades personalizadas"],
          ["Lo esencial de JavaScript", "Valores y funciones, arrays y objetos, el DOM, eventos"],
          ["Trabajar como desarrollador", "Git y GitHub, fetch y JSON, depuración con DevTools, despliegue de un sitio"]
        ]
      }
    }
  },
  {
    code: "FZ-201", level: "intermediate", weeks: 10, lessons: 72, projects: 3,
    stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Playwright"],
    t: {
      en: {
        title: "Frontend Engineering with React and TypeScript",
        summary: "Build fast, typed, tested interfaces the way product teams do.",
        prereq: "FZ-101, or equivalent HTML, CSS and JavaScript.",
        outcome: "A complete dashboard application with sign-in, tests and a performance report.",
        modules: [
          ["TypeScript for interfaces", "Types, generics, narrowing, typing component props and API data"],
          ["React fundamentals", "Components, state, effects, forms, lists and keys"],
          ["Application structure with Next.js", "Routing, server and client components, data fetching, caching"],
          ["Styling and accessibility", "Design tokens, Tailwind CSS, keyboard and screen-reader support"],
          ["Quality and performance", "Unit and end-to-end tests, Core Web Vitals, bundle analysis"]
        ]
      },
      ar: {
        title: "هندسة الواجهات باستخدام React و TypeScript",
        summary: "ابنِ واجهات سريعة ومضبوطة الأنواع ومُختبَرة كما تفعل فرق المنتجات.",
        prereq: "دورة FZ-101 أو ما يعادلها في HTML و CSS و JavaScript.",
        outcome: "تطبيق لوحة تحكم كامل مع تسجيل دخول واختبارات وتقرير أداء.",
        modules: [
          ["TypeScript للواجهات", "الأنواع، الأنواع العامة، تضييق الأنواع، تحديد أنواع خصائص المكوّنات وبيانات الـ API"],
          ["أساسيات React", "المكوّنات، الحالة، التأثيرات، النماذج، القوائم والمفاتيح"],
          ["بنية التطبيق مع Next.js", "التوجيه، مكوّنات الخادم والعميل، جلب البيانات، التخزين المؤقت"],
          ["التنسيق وسهولة الوصول", "رموز التصميم، Tailwind CSS، دعم لوحة المفاتيح وقارئات الشاشة"],
          ["الجودة والأداء", "اختبارات الوحدة والاختبارات الشاملة، Core Web Vitals، تحليل حجم الحزم"]
        ]
      },
      ur: {
        title: "React اور TypeScript کے ساتھ فرنٹ اینڈ انجینئرنگ",
        summary: "تیز، ٹائپ شدہ اور ٹیسٹ شدہ انٹرفیس اسی طرح بنائیں جیسے پروڈکٹ ٹیمیں بناتی ہیں۔",
        prereq: "FZ-101، یا HTML، CSS اور JavaScript کی مساوی مہارت۔",
        outcome: "سائن اِن، ٹیسٹس اور کارکردگی کی رپورٹ کے ساتھ ایک مکمل ڈیش بورڈ ایپلیکیشن۔",
        modules: [
          ["انٹرفیس کے لیے TypeScript", "ٹائپس، جینرکس، نیروئنگ، کمپوننٹ پراپس اور API ڈیٹا کی ٹائپنگ"],
          ["React کی بنیادیں", "کمپوننٹس، اسٹیٹ، ایفیکٹس، فارمز، فہرستیں اور کیز"],
          ["Next.js کے ساتھ ایپلیکیشن کا ڈھانچہ", "روٹنگ، سرور اور کلائنٹ کمپوننٹس، ڈیٹا فیچنگ، کیشنگ"],
          ["اسٹائلنگ اور رسائی", "ڈیزائن ٹوکنز، Tailwind CSS، کی بورڈ اور اسکرین ریڈر سپورٹ"],
          ["معیار اور کارکردگی", "یونٹ اور اینڈ ٹو اینڈ ٹیسٹس، Core Web Vitals، بنڈل کا تجزیہ"]
        ]
      },
      fr: {
        title: "Ingénierie frontend avec React et TypeScript",
        summary: "Construisez des interfaces rapides, typées et testées, comme le font les équipes produit.",
        prereq: "FZ-101, ou un niveau équivalent en HTML, CSS et JavaScript.",
        outcome: "Une application de tableau de bord complète avec connexion, tests et rapport de performance.",
        modules: [
          ["TypeScript pour les interfaces", "Types, génériques, affinage de types, typage des props et des données d'API"],
          ["Les bases de React", "Composants, état, effets, formulaires, listes et clés"],
          ["Structurer une application avec Next.js", "Routage, composants serveur et client, récupération des données, mise en cache"],
          ["Styles et accessibilité", "Jetons de design, Tailwind CSS, navigation au clavier et lecteurs d'écran"],
          ["Qualité et performance", "Tests unitaires et de bout en bout, Core Web Vitals, analyse du bundle"]
        ]
      },
      es: {
        title: "Ingeniería frontend con React y TypeScript",
        summary: "Construye interfaces rápidas, tipadas y probadas como lo hacen los equipos de producto.",
        prereq: "FZ-101, o un nivel equivalente de HTML, CSS y JavaScript.",
        outcome: "Una aplicación de panel completa con inicio de sesión, pruebas e informe de rendimiento.",
        modules: [
          ["TypeScript para interfaces", "Tipos, genéricos, estrechamiento de tipos, tipado de props y de datos de API"],
          ["Fundamentos de React", "Componentes, estado, efectos, formularios, listas y claves"],
          ["Estructura de una aplicación con Next.js", "Enrutamiento, componentes de servidor y de cliente, obtención de datos, caché"],
          ["Estilos y accesibilidad", "Tokens de diseño, Tailwind CSS, soporte de teclado y lectores de pantalla"],
          ["Calidad y rendimiento", "Pruebas unitarias y de extremo a extremo, Core Web Vitals, análisis del bundle"]
        ]
      }
    }
  },
  {
    code: "FZ-202", level: "intermediate", weeks: 10, lessons: 70, projects: 3,
    stack: ["Node.js", "PostgreSQL", "REST", "Docker", "GitHub Actions"],
    t: {
      en: {
        title: "Backend APIs with Node.js and PostgreSQL",
        summary: "Design, secure and deploy the server side of a real product, subscriptions included.",
        prereq: "Comfortable JavaScript. FZ-101 is enough.",
        outcome: "A documented, deployed API with sign-in, subscription payments in test mode and automated releases.",
        modules: [
          ["HTTP services in Node.js", "Routing, validation, error handling, REST design, OpenAPI documentation"],
          ["Data with PostgreSQL", "Schema design, SQL, migrations, indexes, transactions"],
          ["Authentication and security", "Sessions and tokens, password hashing, OAuth sign-in, the OWASP Top 10"],
          ["Payments and subscriptions", "Checkout, webhooks, plans and invoices, handling failed payments"],
          ["Deployment and operations", "Docker, CI/CD pipelines, logs and metrics, backups"]
        ]
      },
      ar: {
        title: "واجهات الخادم البرمجية باستخدام Node.js و PostgreSQL",
        summary: "صمّم جانب الخادم لمنتج حقيقي وأمّنه وانشره، بما في ذلك الاشتراكات.",
        prereq: "إلمام جيد بلغة JavaScript. دورة FZ-101 كافية.",
        outcome: "واجهة API موثّقة ومنشورة مع تسجيل دخول ومدفوعات اشتراك في وضع الاختبار وإصدارات مؤتمتة.",
        modules: [
          ["خدمات HTTP في Node.js", "التوجيه، التحقق من المدخلات، معالجة الأخطاء، تصميم REST، توثيق OpenAPI"],
          ["البيانات مع PostgreSQL", "تصميم المخطط، SQL، الترحيلات، الفهارس، المعاملات"],
          ["المصادقة والأمان", "الجلسات والرموز، تجزئة كلمات المرور، تسجيل الدخول عبر OAuth، قائمة OWASP Top 10"],
          ["المدفوعات والاشتراكات", "صفحة الدفع، الـ webhooks، الخطط والفواتير، التعامل مع المدفوعات الفاشلة"],
          ["النشر والتشغيل", "Docker، خطوط CI/CD، السجلات والمقاييس، النسخ الاحتياطي"]
        ]
      },
      ur: {
        title: "Node.js اور PostgreSQL کے ساتھ بیک اینڈ APIs",
        summary: "ایک حقیقی پروڈکٹ کا سرور سائیڈ ڈیزائن، محفوظ اور ڈپلائے کریں، سبسکرپشنز سمیت۔",
        prereq: "JavaScript پر اچھی گرفت۔ FZ-101 کافی ہے۔",
        outcome: "سائن اِن، ٹیسٹ موڈ میں سبسکرپشن ادائیگیوں اور خودکار ریلیز کے ساتھ ایک دستاویزی، ڈپلائے شدہ API۔",
        modules: [
          ["Node.js میں HTTP سروسز", "روٹنگ، ویلیڈیشن، ایرر ہینڈلنگ، REST ڈیزائن، OpenAPI دستاویزات"],
          ["PostgreSQL کے ساتھ ڈیٹا", "اسکیما ڈیزائن، SQL، مائیگریشنز، انڈیکسز، ٹرانزیکشنز"],
          ["تصدیق اور سیکیورٹی", "سیشنز اور ٹوکنز، پاس ورڈ ہیشنگ، OAuth سائن اِن، OWASP Top 10"],
          ["ادائیگیاں اور سبسکرپشنز", "چیک آؤٹ، webhooks، پلانز اور انوائسز، ناکام ادائیگیوں کو سنبھالنا"],
          ["ڈپلائمنٹ اور آپریشنز", "Docker، CI/CD پائپ لائنز، لاگز اور میٹرکس، بیک اپس"]
        ]
      },
      fr: {
        title: "API backend avec Node.js et PostgreSQL",
        summary: "Concevez, sécurisez et déployez le côté serveur d'un vrai produit, abonnements compris.",
        prereq: "Être à l'aise en JavaScript. FZ-101 suffit.",
        outcome: "Une API documentée et déployée, avec connexion, paiements d'abonnement en mode test et mises en production automatisées.",
        modules: [
          ["Services HTTP avec Node.js", "Routage, validation, gestion des erreurs, conception REST, documentation OpenAPI"],
          ["Les données avec PostgreSQL", "Conception de schéma, SQL, migrations, index, transactions"],
          ["Authentification et sécurité", "Sessions et jetons, hachage des mots de passe, connexion OAuth, le Top 10 de l'OWASP"],
          ["Paiements et abonnements", "Paiement en ligne, webhooks, offres et factures, gestion des paiements échoués"],
          ["Déploiement et exploitation", "Docker, pipelines CI/CD, journaux et métriques, sauvegardes"]
        ]
      },
      es: {
        title: "APIs backend con Node.js y PostgreSQL",
        summary: "Diseña, protege y despliega el lado servidor de un producto real, suscripciones incluidas.",
        prereq: "Buen manejo de JavaScript. Con FZ-101 es suficiente.",
        outcome: "Una API documentada y desplegada, con inicio de sesión, pagos de suscripción en modo de prueba y publicaciones automatizadas.",
        modules: [
          ["Servicios HTTP en Node.js", "Enrutamiento, validación, manejo de errores, diseño REST, documentación OpenAPI"],
          ["Datos con PostgreSQL", "Diseño de esquemas, SQL, migraciones, índices, transacciones"],
          ["Autenticación y seguridad", "Sesiones y tokens, hash de contraseñas, inicio de sesión con OAuth, el OWASP Top 10"],
          ["Pagos y suscripciones", "Checkout, webhooks, planes y facturas, gestión de pagos fallidos"],
          ["Despliegue y operaciones", "Docker, pipelines de CI/CD, registros y métricas, copias de seguridad"]
        ]
      }
    }
  },
  {
    code: "FZ-203", level: "intermediate", weeks: 9, lessons: 60, projects: 3,
    stack: ["React Native", "Expo", "TypeScript", "SQLite"],
    t: {
      en: {
        title: "Mobile Apps with React Native",
        summary: "One codebase, two stores. Build and release an app for iOS and Android.",
        prereq: "FZ-201, or solid React experience.",
        outcome: "An app built, signed and ready to submit to the App Store and Google Play.",
        modules: [
          ["Native building blocks", "Expo setup, core components, layout, differences between platforms"],
          ["Navigation and state", "Stacks and tabs, deep links, server state, forms"],
          ["Device features", "Camera, location, push notifications, permissions"],
          ["Offline and storage", "Local database, sync, secure storage, slow networks"],
          ["Release", "Builds and signing, store listings, over-the-air updates, crash reporting"]
        ]
      },
      ar: {
        title: "تطبيقات الجوّال باستخدام React Native",
        summary: "شيفرة واحدة ومتجران. ابنِ تطبيقًا لنظامي iOS و Android وأصدره.",
        prereq: "دورة FZ-201 أو خبرة جيدة في React.",
        outcome: "تطبيق مبنيّ وموقَّع وجاهز للإرسال إلى App Store و Google Play.",
        modules: [
          ["اللبنات الأساسية للتطبيق", "إعداد Expo، المكوّنات الأساسية، التخطيط، الفروق بين المنصّات"],
          ["التنقل والحالة", "التنقل المكدّس والتبويبات، الروابط العميقة، حالة الخادم، النماذج"],
          ["مزايا الجهاز", "الكاميرا، الموقع، الإشعارات الفورية، الأذونات"],
          ["العمل دون اتصال والتخزين", "قاعدة بيانات محلية، المزامنة، التخزين الآمن، الشبكات البطيئة"],
          ["الإصدار", "البناء والتوقيع، صفحات المتاجر، التحديثات عبر الهواء، تقارير الأعطال"]
        ]
      },
      ur: {
        title: "React Native کے ساتھ موبائل ایپس",
        summary: "ایک کوڈ بیس، دو اسٹورز۔ iOS اور Android کے لیے ایپ بنائیں اور ریلیز کریں۔",
        prereq: "FZ-201، یا React کا ٹھوس تجربہ۔",
        outcome: "ایک ایپ جو بِلڈ اور سائن ہو چکی ہو اور App Store اور Google Play پر جمع کرانے کے لیے تیار ہو۔",
        modules: [
          ["نیٹو بنیادی اجزا", "Expo سیٹ اپ، بنیادی کمپوننٹس، لے آؤٹ، پلیٹ فارمز کے فرق"],
          ["نیویگیشن اور اسٹیٹ", "اسٹیکس اور ٹیبز، ڈیپ لنکس، سرور اسٹیٹ، فارمز"],
          ["ڈیوائس کی خصوصیات", "کیمرا، لوکیشن، پُش نوٹیفکیشنز، اجازتیں"],
          ["آف لائن اور اسٹوریج", "مقامی ڈیٹا بیس، سنک، محفوظ اسٹوریج، سست نیٹ ورکس"],
          ["ریلیز", "بِلڈز اور سائننگ، اسٹور لسٹنگز، اوور دی ایئر اپ ڈیٹس، کریش رپورٹنگ"]
        ]
      },
      fr: {
        title: "Applications mobiles avec React Native",
        summary: "Un seul code, deux boutiques. Créez et publiez une application pour iOS et Android.",
        prereq: "FZ-201, ou une solide expérience de React.",
        outcome: "Une application compilée, signée et prête à être soumise à l'App Store et à Google Play.",
        modules: [
          ["Les briques natives", "Installation d'Expo, composants de base, mise en page, différences entre plateformes"],
          ["Navigation et état", "Piles et onglets, liens profonds, état serveur, formulaires"],
          ["Fonctions de l'appareil", "Appareil photo, localisation, notifications push, autorisations"],
          ["Hors ligne et stockage", "Base de données locale, synchronisation, stockage sécurisé, réseaux lents"],
          ["Publication", "Compilation et signature, fiches des boutiques, mises à jour à distance, rapports de plantage"]
        ]
      },
      es: {
        title: "Aplicaciones móviles con React Native",
        summary: "Un solo código, dos tiendas. Crea y publica una aplicación para iOS y Android.",
        prereq: "FZ-201, o experiencia sólida con React.",
        outcome: "Una aplicación compilada, firmada y lista para enviar a App Store y Google Play.",
        modules: [
          ["Piezas nativas", "Configuración de Expo, componentes básicos, maquetación, diferencias entre plataformas"],
          ["Navegación y estado", "Pilas y pestañas, enlaces profundos, estado del servidor, formularios"],
          ["Funciones del dispositivo", "Cámara, ubicación, notificaciones push, permisos"],
          ["Sin conexión y almacenamiento", "Base de datos local, sincronización, almacenamiento seguro, redes lentas"],
          ["Publicación", "Compilación y firma, fichas de las tiendas, actualizaciones remotas, informes de fallos"]
        ]
      }
    }
  },
  {
    code: "FZ-301", level: "advanced", weeks: 6, lessons: 44, projects: 3,
    stack: ["Intl API", "ICU MessageFormat", "i18next", "Unicode CLDR"],
    t: {
      en: {
        title: "Multilingual Apps: Translation, Localization and RTL",
        summary: "Make one product read naturally in many languages, including right-to-left scripts.",
        prereq: "FZ-201 or FZ-203.",
        outcome: "An existing app of yours localized into three languages, one of them right-to-left.",
        modules: [
          ["Internationalization architecture", "Locales, extracting strings, message keys, fallback chains"],
          ["Messages that survive translation", "Plurals, grammatical gender, interpolation, ICU MessageFormat"],
          ["Right-to-left and scripts", "Bidirectional text, CSS logical properties, fonts, mirroring icons"],
          ["Dates, numbers and money", "The Intl API, time zones, calendars, currencies, sorting"],
          ["Translation workflow", "Translation management, machine translation with human review, pseudo-localization, testing"]
        ]
      },
      ar: {
        title: "التطبيقات متعددة اللغات: الترجمة والتوطين ودعم RTL",
        summary: "اجعل منتجًا واحدًا يُقرأ بسلاسة بلغات كثيرة، ومنها اللغات المكتوبة من اليمين إلى اليسار.",
        prereq: "دورة FZ-201 أو FZ-203.",
        outcome: "أحد تطبيقاتك موطَّنًا بثلاث لغات، إحداها تُكتب من اليمين إلى اليسار.",
        modules: [
          ["بنية التدويل", "الإعدادات المحلية، استخراج النصوص، مفاتيح الرسائل، سلاسل اللغات البديلة"],
          ["رسائل تصمد أمام الترجمة", "صيغ الجمع، التذكير والتأنيث، إدراج المتغيرات، ICU MessageFormat"],
          ["الكتابة من اليمين إلى اليسار وأنظمة الكتابة", "النص ثنائي الاتجاه، خصائص CSS المنطقية، الخطوط، عكس الأيقونات"],
          ["التواريخ والأرقام والعملات", "واجهة Intl، المناطق الزمنية، التقاويم، العملات، الترتيب"],
          ["سير عمل الترجمة", "إدارة الترجمة، الترجمة الآلية مع مراجعة بشرية، التوطين الزائف، الاختبار"]
        ]
      },
      ur: {
        title: "کثیر لسانی ایپس: ترجمہ، لوکلائزیشن اور RTL",
        summary: "ایک ہی پروڈکٹ کو کئی زبانوں میں فطری انداز میں پڑھنے کے قابل بنائیں، دائیں سے بائیں لکھی جانے والی زبانوں سمیت۔",
        prereq: "FZ-201 یا FZ-203۔",
        outcome: "آپ کی اپنی ایک ایپ تین زبانوں میں لوکلائز شدہ، جن میں سے ایک دائیں سے بائیں لکھی جاتی ہو۔",
        modules: [
          ["انٹرنیشنلائزیشن کا ڈھانچہ", "لوکیلز، اسٹرنگز نکالنا، میسج کیز، فال بیک چینز"],
          ["ایسے پیغامات جو ترجمے میں نہ ٹوٹیں", "جمع کے صیغے، تذکیر و تانیث، انٹرپولیشن، ICU MessageFormat"],
          ["دائیں سے بائیں تحریر اور رسم الخط", "دو طرفہ متن، CSS لاجیکل پراپرٹیز، فونٹس، آئیکنز کو الٹنا"],
          ["تاریخیں، اعداد اور کرنسی", "Intl API، ٹائم زونز، کیلنڈرز، کرنسیاں، ترتیب"],
          ["ترجمے کا ورک فلو", "ترجمے کا انتظام، انسانی جائزے کے ساتھ مشینی ترجمہ، سیوڈو لوکلائزیشن، ٹیسٹنگ"]
        ]
      },
      fr: {
        title: "Applications multilingues : traduction, localisation et RTL",
        summary: "Faites en sorte qu'un même produit se lise naturellement dans de nombreuses langues, y compris celles écrites de droite à gauche.",
        prereq: "FZ-201 ou FZ-203.",
        outcome: "Une de vos applications localisée en trois langues, dont une écrite de droite à gauche.",
        modules: [
          ["Architecture d'internationalisation", "Paramètres régionaux, extraction des chaînes, clés de messages, chaînes de repli"],
          ["Des messages qui résistent à la traduction", "Pluriels, genre grammatical, interpolation, ICU MessageFormat"],
          ["Droite à gauche et systèmes d'écriture", "Texte bidirectionnel, propriétés logiques CSS, polices, inversion des icônes"],
          ["Dates, nombres et monnaies", "L'API Intl, fuseaux horaires, calendriers, devises, tri"],
          ["Flux de traduction", "Gestion des traductions, traduction automatique avec relecture humaine, pseudo-localisation, tests"]
        ]
      },
      es: {
        title: "Aplicaciones multilingües: traducción, localización y RTL",
        summary: "Haz que un mismo producto se lea con naturalidad en muchos idiomas, incluidos los que se escriben de derecha a izquierda.",
        prereq: "FZ-201 o FZ-203.",
        outcome: "Una aplicación tuya localizada a tres idiomas, uno de ellos de derecha a izquierda.",
        modules: [
          ["Arquitectura de internacionalización", "Configuraciones regionales, extracción de textos, claves de mensajes, cadenas de respaldo"],
          ["Mensajes que sobreviven a la traducción", "Plurales, género gramatical, interpolación, ICU MessageFormat"],
          ["Derecha a izquierda y sistemas de escritura", "Texto bidireccional, propiedades lógicas de CSS, tipografías, iconos en espejo"],
          ["Fechas, números y dinero", "La API Intl, zonas horarias, calendarios, monedas, ordenación"],
          ["Flujo de traducción", "Gestión de traducciones, traducción automática con revisión humana, pseudolocalización, pruebas"]
        ]
      }
    }
  },
  {
    code: "FZ-302", level: "advanced", weeks: 6, lessons: 42, projects: 3,
    stack: ["LLM APIs", "Embeddings", "Vector search", "Evals"],
    t: {
      en: {
        title: "AI Features in Web and Mobile Apps",
        summary: "Add assistants, search and automation to a product, and measure whether they work.",
        prereq: "FZ-202.",
        outcome: "A support assistant that answers from your own documents, with an evaluation suite and a cost report.",
        modules: [
          ["Working with language models", "Prompts, structured output, streaming responses, cost and latency"],
          ["Retrieval over your own data", "Embeddings, chunking, vector search, citations"],
          ["Tools and agents", "Function calling, multi-step tasks, human approval steps"],
          ["Evaluation", "Test sets, automated grading, regression checks, monitoring in production"],
          ["Safety and privacy", "Prompt injection, data handling, rate limits, fallbacks"]
        ]
      },
      ar: {
        title: "مزايا الذكاء الاصطناعي في تطبيقات الويب والجوّال",
        summary: "أضف المساعدين والبحث والأتمتة إلى منتجك، وقِس مدى نجاحها.",
        prereq: "دورة FZ-202.",
        outcome: "مساعد دعم يجيب من مستنداتك الخاصة، مع مجموعة تقييم وتقرير تكلفة.",
        modules: [
          ["العمل مع النماذج اللغوية", "صياغة التعليمات، المخرجات المنظَّمة، الردود المتدفقة، التكلفة وزمن الاستجابة"],
          ["الاسترجاع من بياناتك الخاصة", "التضمينات، تقطيع النصوص، البحث المتجهي، الاستشهاد بالمصادر"],
          ["الأدوات والوكلاء", "استدعاء الدوال، المهام متعددة الخطوات، خطوات الموافقة البشرية"],
          ["التقييم", "مجموعات الاختبار، التصحيح الآلي، فحوص التراجع، المراقبة في بيئة الإنتاج"],
          ["الأمان والخصوصية", "حقن التعليمات، التعامل مع البيانات، حدود المعدّل، الحلول البديلة"]
        ]
      },
      ur: {
        title: "ویب اور موبائل ایپس میں AI فیچرز",
        summary: "پروڈکٹ میں اسسٹنٹس، سرچ اور آٹومیشن شامل کریں، اور ناپیں کہ وہ کام کر رہے ہیں یا نہیں۔",
        prereq: "FZ-202۔",
        outcome: "ایک سپورٹ اسسٹنٹ جو آپ کی اپنی دستاویزات سے جواب دے، جانچ کے مجموعے اور لاگت کی رپورٹ کے ساتھ۔",
        modules: [
          ["لینگویج ماڈلز کے ساتھ کام", "پرامپٹس، اسٹرکچرڈ آؤٹ پٹ، اسٹریمنگ جوابات، لاگت اور تاخیر"],
          ["اپنے ڈیٹا سے ریٹریول", "ایمبیڈنگز، چنکنگ، ویکٹر سرچ، حوالہ جات"],
          ["ٹولز اور ایجنٹس", "فنکشن کالنگ، کئی مراحل والے کام، انسانی منظوری کے مراحل"],
          ["جانچ", "ٹیسٹ سیٹس، خودکار گریڈنگ، ریگریشن چیکس، پروڈکشن میں نگرانی"],
          ["حفاظت اور رازداری", "پرامپٹ انجیکشن، ڈیٹا کا انتظام، ریٹ لمٹس، متبادل راستے"]
        ]
      },
      fr: {
        title: "Fonctions d'IA dans les applications web et mobiles",
        summary: "Ajoutez des assistants, de la recherche et de l'automatisation à un produit, et mesurez si cela fonctionne.",
        prereq: "FZ-202.",
        outcome: "Un assistant de support qui répond à partir de vos propres documents, avec une suite d'évaluation et un rapport de coûts.",
        modules: [
          ["Travailler avec les modèles de langage", "Prompts, sorties structurées, réponses en streaming, coût et latence"],
          ["Recherche dans vos propres données", "Embeddings, découpage des documents, recherche vectorielle, citations"],
          ["Outils et agents", "Appel de fonctions, tâches en plusieurs étapes, étapes de validation humaine"],
          ["Évaluation", "Jeux de tests, notation automatisée, contrôles de régression, suivi en production"],
          ["Sécurité et confidentialité", "Injection de prompts, traitement des données, limites de débit, solutions de repli"]
        ]
      },
      es: {
        title: "Funciones de IA en aplicaciones web y móviles",
        summary: "Añade asistentes, búsqueda y automatización a un producto, y mide si funcionan.",
        prereq: "FZ-202.",
        outcome: "Un asistente de soporte que responde a partir de tus propios documentos, con un conjunto de evaluación y un informe de costes.",
        modules: [
          ["Trabajar con modelos de lenguaje", "Prompts, salida estructurada, respuestas en streaming, coste y latencia"],
          ["Recuperación sobre tus propios datos", "Embeddings, fragmentación de documentos, búsqueda vectorial, citas"],
          ["Herramientas y agentes", "Llamadas a funciones, tareas de varios pasos, pasos de aprobación humana"],
          ["Evaluación", "Conjuntos de prueba, calificación automática, comprobaciones de regresión, monitorización en producción"],
          ["Seguridad y privacidad", "Inyección de prompts, tratamiento de datos, límites de uso, alternativas de respaldo"]
        ]
      }
    }
  }
];
