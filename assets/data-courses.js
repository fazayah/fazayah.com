/* Course catalog. Each course has its text in every site language:
   title, summary, prereq, outcome, and modules as [title, topics]. */
window.FAZAYAH.courses = [
  {
    code: "FZ-101", level: "beginner", weeks: 8, lessons: 64, projects: 4,
    stack: ["Sieve analysis", "Assay data", "Flowsheets", "Spreadsheets"],
    t: {
      en: {
        title: "Introduction to Mineral Engineering",
        summary: "Follow an ore from the deposit to a saleable product, and learn the measurements and balances every later course relies on.",
        prereq: "Secondary-school chemistry and maths. No industry experience needed.",
        outcome: "A complete mass balance for a simple concentrator and a sampling plan for a real ore.",
        modules: [
          ["Minerals, ores and deposits", "Mineral properties, ore types, grade and cut-off, how deposits form"],
          ["From mine to metal", "Exploration, mining, processing, smelting and refining, mine closure"],
          ["Sampling and measurement", "Sampling theory, particle size analysis, assays, moisture and density"],
          ["Mass balances", "Recovery, grade and yield, the two-product formula, balancing a flowsheet"],
          ["Safety and environment", "Site hazards, dust and noise, tailings and water, regulations"]
        ]
      },
      ar: {
        title: "مدخل إلى هندسة التعدين والمعادن",
        summary: "تتبّع الخام من الراسب إلى منتج قابل للبيع، وتعلّم القياسات والموازنات التي تعتمد عليها كل الدورات اللاحقة.",
        prereq: "كيمياء ورياضيات المرحلة الثانوية. لا تحتاج إلى خبرة في الصناعة.",
        outcome: "موازنة كتلة كاملة لمصنع تركيز بسيط وخطة لأخذ العينات من خام حقيقي.",
        modules: [
          ["المعادن والخامات والرواسب", "خصائص المعادن، أنواع الخامات، الرتبة والرتبة الحدّية، كيف تتكوّن الرواسب"],
          ["من المنجم إلى الفلز", "الاستكشاف، التعدين، المعالجة، الصهر والتنقية، إغلاق المنجم"],
          ["أخذ العينات والقياس", "نظرية أخذ العينات، تحليل حجم الحبيبات، التحاليل الكيميائية، الرطوبة والكثافة"],
          ["موازنات الكتلة", "الاستخلاص، الرتبة والمردود، معادلة المنتجَين، موازنة مخطط المعالجة"],
          ["السلامة والبيئة", "مخاطر الموقع، الغبار والضوضاء، المخلفات والمياه، اللوائح التنظيمية"]
        ]
      },
      ur: {
        title: "معدنی انجینئرنگ کا تعارف",
        summary: "کچ دھات کو ذخیرے سے قابلِ فروخت پروڈکٹ تک دیکھیں، اور وہ پیمائشیں اور بیلنس سیکھیں جن پر بعد کا ہر کورس انحصار کرتا ہے۔",
        prereq: "ثانوی اسکول کی کیمسٹری اور ریاضی۔ صنعتی تجربہ ضروری نہیں۔",
        outcome: "ایک سادہ کنسنٹریٹر کا مکمل ماس بیلنس اور ایک حقیقی کچ دھات کے لیے سیمپلنگ پلان۔",
        modules: [
          ["معدنیات، کچ دھاتیں اور ذخائر", "معدنیات کی خصوصیات، کچ دھات کی اقسام، گریڈ اور کٹ آف، ذخائر کیسے بنتے ہیں"],
          ["کان سے دھات تک", "تلاش، کان کنی، پروسیسنگ، سمیلٹنگ اور ریفائننگ، کان کی بندش"],
          ["سیمپلنگ اور پیمائش", "سیمپلنگ تھیوری، ذرات کے سائز کا تجزیہ، ایسے، نمی اور کثافت"],
          ["ماس بیلنس", "ریکوری، گریڈ اور ییلڈ، ٹو پروڈکٹ فارمولا، فلو شیٹ کا بیلنس"],
          ["حفاظت اور ماحول", "سائٹ کے خطرات، گرد اور شور، ٹیلنگز اور پانی، ضوابط"]
        ]
      },
      fr: {
        title: "Introduction au génie minéral",
        summary: "Suivez un minerai du gisement jusqu'au produit vendable, et apprenez les mesures et les bilans sur lesquels reposent tous les cours suivants.",
        prereq: "Chimie et mathématiques du lycée. Aucune expérience du secteur n'est requise.",
        outcome: "Un bilan matière complet pour un concentrateur simple et un plan d'échantillonnage pour un minerai réel.",
        modules: [
          ["Minéraux, minerais et gisements", "Propriétés des minéraux, types de minerais, teneur et teneur de coupure, formation des gisements"],
          ["De la mine au métal", "Exploration, exploitation, traitement, fusion et raffinage, fermeture de la mine"],
          ["Échantillonnage et mesures", "Théorie de l'échantillonnage, analyse granulométrique, analyses chimiques, humidité et densité"],
          ["Bilans matière", "Récupération, teneur et rendement, formule à deux produits, bilan d'un schéma de traitement"],
          ["Sécurité et environnement", "Dangers sur site, poussières et bruit, résidus et eau, réglementation"]
        ]
      },
      es: {
        title: "Introducción a la ingeniería de minerales",
        summary: "Sigue una mena desde el yacimiento hasta un producto vendible y aprende las mediciones y los balances en los que se apoyan todos los cursos posteriores.",
        prereq: "Química y matemáticas de secundaria. No hace falta experiencia en el sector.",
        outcome: "Un balance de masa completo de una concentradora sencilla y un plan de muestreo para una mena real.",
        modules: [
          ["Minerales, menas y yacimientos", "Propiedades de los minerales, tipos de mena, ley y ley de corte, cómo se forman los yacimientos"],
          ["De la mina al metal", "Exploración, explotación, procesamiento, fundición y refinación, cierre de mina"],
          ["Muestreo y medición", "Teoría del muestreo, análisis granulométrico, ensayos químicos, humedad y densidad"],
          ["Balances de masa", "Recuperación, ley y rendimiento, fórmula de dos productos, balance de un diagrama de flujo"],
          ["Seguridad y medio ambiente", "Peligros en la faena, polvo y ruido, relaves y agua, normativa"]
        ]
      }
    }
  },
  {
    code: "FZ-201", level: "intermediate", weeks: 10, lessons: 72, projects: 3,
    stack: ["Bond work index", "Partition curves", "Population balance", "Circuit simulation"],
    t: {
      en: {
        title: "Comminution and Classification",
        summary: "Size and operate the crushing, grinding and classification circuits that use most of a plant's energy.",
        prereq: "FZ-101.",
        outcome: "A sized crushing and grinding circuit with an energy estimate, worked out from ore test data.",
        modules: [
          ["Breakage and energy", "The laws of Rittinger, Kick and Bond; Bond work index; specific energy"],
          ["Crushing", "Jaw, gyratory and cone crushers, high-pressure grinding rolls, reduction ratio, circuit layouts"],
          ["Grinding", "Ball, rod, SAG and AG mills; liners and media; critical speed; mill power"],
          ["Screening and classification", "Screens, hydrocyclones, partition curves, cut size"],
          ["Circuit design and control", "Closed circuits, circulating load, population balance models, energy efficiency"]
        ]
      },
      ar: {
        title: "التفتيت والتصنيف",
        summary: "حدّد أحجام دوائر التكسير والطحن والتصنيف وشغّلها، وهي التي تستهلك معظم طاقة المصنع.",
        prereq: "دورة FZ-101.",
        outcome: "دائرة تكسير وطحن محدَّدة الأحجام مع تقدير للطاقة، محسوبة من بيانات اختبار الخام.",
        modules: [
          ["التكسّر والطاقة", "قوانين Rittinger و Kick و Bond؛ معامل الشغل لـ Bond؛ الطاقة النوعية"],
          ["التكسير", "الكسارات الفكية والمخروطية والدوّارة، أسطوانات الطحن عالية الضغط، نسبة التصغير، ترتيبات الدوائر"],
          ["الطحن", "طواحين الكرات والقضبان وطواحين SAG و AG؛ البطانات ووسائط الطحن؛ السرعة الحرجة؛ قدرة الطاحونة"],
          ["الغربلة والتصنيف", "الغرابيل، الهيدروسيكلونات، منحنيات الفصل، حجم القطع"],
          ["تصميم الدوائر والتحكم فيها", "الدوائر المغلقة، الحمل الدوّار، نماذج موازنة التعداد، كفاءة الطاقة"]
        ]
      },
      ur: {
        title: "کمینیوشن اور کلاسیفیکیشن",
        summary: "کرشنگ، گرائنڈنگ اور کلاسیفیکیشن سرکٹس کا سائز طے کریں اور انہیں چلائیں، جو پلانٹ کی زیادہ تر توانائی استعمال کرتے ہیں۔",
        prereq: "FZ-101۔",
        outcome: "کچ دھات کے ٹیسٹ ڈیٹا سے تیار کردہ، توانائی کے تخمینے کے ساتھ ایک سائز شدہ کرشنگ اور گرائنڈنگ سرکٹ۔",
        modules: [
          ["ٹوٹ پھوٹ اور توانائی", "Rittinger، Kick اور Bond کے قوانین؛ Bond ورک انڈیکس؛ مخصوص توانائی"],
          ["کرشنگ", "جا، جائریٹری اور کون کرشرز، ہائی پریشر گرائنڈنگ رولز، ریڈکشن ریشو، سرکٹ کی ترتیب"],
          ["گرائنڈنگ", "بال، راڈ، SAG اور AG ملز؛ لائنرز اور میڈیا؛ کریٹیکل اسپیڈ؛ مل پاور"],
          ["اسکریننگ اور کلاسیفیکیشن", "اسکرینز، ہائیڈرو سائیکلونز، پارٹیشن کروز، کٹ سائز"],
          ["سرکٹ ڈیزائن اور کنٹرول", "کلوزڈ سرکٹس، سرکولیٹنگ لوڈ، پاپولیشن بیلنس ماڈلز، توانائی کی بچت"]
        ]
      },
      fr: {
        title: "Comminution et classification",
        summary: "Dimensionnez et exploitez les circuits de concassage, de broyage et de classification, qui consomment l'essentiel de l'énergie d'une usine.",
        prereq: "FZ-101.",
        outcome: "Un circuit de concassage et de broyage dimensionné, avec une estimation énergétique, établi à partir de données d'essais sur le minerai.",
        modules: [
          ["Fragmentation et énergie", "Lois de Rittinger, Kick et Bond ; indice de Bond ; énergie spécifique"],
          ["Concassage", "Concasseurs à mâchoires, giratoires et à cône, presses à rouleaux haute pression, rapport de réduction, schémas de circuit"],
          ["Broyage", "Broyeurs à boulets, à barres, semi-autogènes et autogènes ; blindages et corps broyants ; vitesse critique ; puissance du broyeur"],
          ["Criblage et classification", "Cribles, hydrocyclones, courbes de partage, maille de coupure"],
          ["Conception et conduite des circuits", "Circuits fermés, charge circulante, modèles de bilan de population, efficacité énergétique"]
        ]
      },
      es: {
        title: "Conminución y clasificación",
        summary: "Dimensiona y opera los circuitos de trituración, molienda y clasificación, que consumen la mayor parte de la energía de una planta.",
        prereq: "FZ-101.",
        outcome: "Un circuito de trituración y molienda dimensionado, con estimación de energía, calculado a partir de datos de ensayo de la mena.",
        modules: [
          ["Fractura y energía", "Leyes de Rittinger, Kick y Bond; índice de trabajo de Bond; energía específica"],
          ["Trituración", "Trituradoras de mandíbulas, giratorias y de cono, rodillos de alta presión, razón de reducción, configuraciones de circuito"],
          ["Molienda", "Molinos de bolas, de barras, SAG y AG; revestimientos y medios de molienda; velocidad crítica; potencia del molino"],
          ["Cribado y clasificación", "Cribas, hidrociclones, curvas de partición, tamaño de corte"],
          ["Diseño y control de circuitos", "Circuitos cerrados, carga circulante, modelos de balance poblacional, eficiencia energética"]
        ]
      }
    }
  },
  {
    code: "FZ-202", level: "intermediate", weeks: 10, lessons: 70, projects: 3,
    stack: ["Flotation tests", "Grade–recovery curves", "Dense medium separation", "Thickener sizing"],
    t: {
      en: {
        title: "Mineral Separation: Flotation, Gravity and Magnetic",
        summary: "Choose and tune the separation method for an ore, then handle the water and tailings that come out of it.",
        prereq: "FZ-101. FZ-201 is recommended.",
        outcome: "A separation flowsheet for a given ore with predicted grade and recovery.",
        modules: [
          ["Liberation and separation principles", "Mineral liberation, grade–recovery curves, separation efficiency"],
          ["Gravity concentration", "Jigs, spirals, shaking tables, dense medium separation, centrifugal concentrators"],
          ["Magnetic and electrostatic separation", "Low- and high-intensity magnetic separators, wet high-intensity separation, electrostatic separators"],
          ["Froth flotation", "Surface chemistry, collectors, frothers and modifiers, flotation cells, kinetics"],
          ["Dewatering and tailings", "Thickeners, filters, flocculants, tailings storage, water recovery"]
        ]
      },
      ar: {
        title: "فصل المعادن: التعويم والجاذبية والفصل المغناطيسي",
        summary: "اختر طريقة الفصل المناسبة للخام واضبطها، ثم تعامل مع المياه والمخلفات الناتجة عنها.",
        prereq: "دورة FZ-101، ويُنصح بدورة FZ-201.",
        outcome: "مخطط فصل لخام معيّن مع الرتبة ونسبة الاستخلاص المتوقعتين.",
        modules: [
          ["مبادئ التحرّر والفصل", "تحرّر المعادن، منحنيات الرتبة والاستخلاص، كفاءة الفصل"],
          ["التركيز بالجاذبية", "الجيغات، اللوالب، الطاولات الهزّازة، الفصل بالوسط الثقيل، المركّزات بالطرد المركزي"],
          ["الفصل المغناطيسي والكهروستاتيكي", "الفواصل المغناطيسية منخفضة وعالية الشدة، الفصل الرطب عالي الشدة، الفواصل الكهروستاتيكية"],
          ["التعويم الرغوي", "كيمياء السطوح، المجمِّعات والمرغِّيات والمعدِّلات، خلايا التعويم، حركية التعويم"],
          ["نزع الماء والمخلفات", "المكثِّفات، المرشِّحات، المواد المُلبِّدة، تخزين المخلفات، استرجاع المياه"]
        ]
      },
      ur: {
        title: "معدنیات کی علیحدگی: فلوٹیشن، گریویٹی اور مقناطیسی",
        summary: "کچ دھات کے لیے علیحدگی کا طریقہ منتخب کریں اور اسے بہتر بنائیں، پھر اس سے نکلنے والے پانی اور ٹیلنگز کو سنبھالیں۔",
        prereq: "FZ-101۔ FZ-201 کی سفارش کی جاتی ہے۔",
        outcome: "ایک دی گئی کچ دھات کے لیے علیحدگی کا فلو شیٹ، متوقع گریڈ اور ریکوری کے ساتھ۔",
        modules: [
          ["لبریشن اور علیحدگی کے اصول", "معدنیات کی لبریشن، گریڈ–ریکوری کروز، علیحدگی کی کارکردگی"],
          ["گریویٹی کنسنٹریشن", "جِگز، اسپائرلز، شیکنگ ٹیبلز، ڈینس میڈیم سیپریشن، سینٹری فیوگل کنسنٹریٹرز"],
          ["مقناطیسی اور الیکٹرو اسٹیٹک علیحدگی", "کم اور زیادہ شدت والے مقناطیسی سیپریٹرز، ویٹ ہائی انٹینسٹی سیپریشن، الیکٹرو اسٹیٹک سیپریٹرز"],
          ["فروتھ فلوٹیشن", "سطحی کیمیا، کلیکٹرز، فروتھرز اور موڈیفائرز، فلوٹیشن سیلز، کائنیٹکس"],
          ["ڈی واٹرنگ اور ٹیلنگز", "تھکنرز، فلٹرز، فلوکولینٹس، ٹیلنگز کا ذخیرہ، پانی کی بازیافت"]
        ]
      },
      fr: {
        title: "Séparation des minéraux : flottation, gravimétrie et magnétisme",
        summary: "Choisissez et réglez la méthode de séparation adaptée à un minerai, puis gérez l'eau et les résidus qui en sortent.",
        prereq: "FZ-101. FZ-201 est recommandé.",
        outcome: "Un schéma de séparation pour un minerai donné, avec la teneur et la récupération prévues.",
        modules: [
          ["Libération et principes de séparation", "Libération des minéraux, courbes teneur–récupération, efficacité de séparation"],
          ["Concentration gravimétrique", "Jigs, spirales, tables à secousses, séparation en milieu dense, concentrateurs centrifuges"],
          ["Séparation magnétique et électrostatique", "Séparateurs magnétiques à basse et haute intensité, séparation humide à haute intensité, séparateurs électrostatiques"],
          ["Flottation par mousse", "Chimie des surfaces, collecteurs, moussants et modificateurs, cellules de flottation, cinétique"],
          ["Déshydratation et résidus", "Épaississeurs, filtres, floculants, stockage des résidus, récupération de l'eau"]
        ]
      },
      es: {
        title: "Separación de minerales: flotación, gravimetría y magnetismo",
        summary: "Elige y ajusta el método de separación adecuado para una mena, y gestiona después el agua y los relaves que produce.",
        prereq: "FZ-101. Se recomienda FZ-201.",
        outcome: "Un diagrama de separación para una mena dada, con la ley y la recuperación previstas.",
        modules: [
          ["Liberación y principios de separación", "Liberación mineral, curvas ley–recuperación, eficiencia de separación"],
          ["Concentración gravimétrica", "Jigs, espirales, mesas vibratorias, separación en medio denso, concentradores centrífugos"],
          ["Separación magnética y electrostática", "Separadores magnéticos de baja y alta intensidad, separación húmeda de alta intensidad, separadores electrostáticos"],
          ["Flotación por espuma", "Química de superficies, colectores, espumantes y modificadores, celdas de flotación, cinética"],
          ["Desaguado y relaves", "Espesadores, filtros, floculantes, depósitos de relaves, recuperación de agua"]
        ]
      }
    }
  },
  {
    code: "FZ-203", level: "intermediate", weeks: 9, lessons: 60, projects: 3,
    stack: ["Pourbaix diagrams", "Ellingham diagrams", "SX-EW", "Cyanidation"],
    t: {
      en: {
        title: "Extractive Metallurgy: Hydrometallurgy and Pyrometallurgy",
        summary: "Turn a concentrate into metal, by solution chemistry or by heat, and know when to use which.",
        prereq: "FZ-101 and basic chemistry.",
        outcome: "A leach, solvent extraction and electrowinning flowsheet with reagent and energy estimates.",
        modules: [
          ["Thermodynamics for extraction", "Eh–pH (Pourbaix) diagrams, Ellingham diagrams, reaction kinetics"],
          ["Leaching", "Heap, tank and pressure leaching; gold cyanidation; acid leaching of copper"],
          ["Solution purification and recovery", "Solvent extraction, ion exchange, carbon adsorption, electrowinning"],
          ["Pyrometallurgy", "Roasting, smelting, converting, slags, off-gas handling"],
          ["Refining and products", "Electrorefining, product specifications, by-products, residues"]
        ]
      },
      ar: {
        title: "الميتالورجيا الاستخلاصية: المائية والحرارية",
        summary: "حوّل الركاز إلى فلز، بكيمياء المحاليل أو بالحرارة، واعرف متى تستخدم كل طريقة.",
        prereq: "دورة FZ-101 وأساسيات الكيمياء.",
        outcome: "مخطط للإذابة والاستخلاص بالمذيبات والاستخلاص الكهربائي مع تقديرات للكواشف والطاقة.",
        modules: [
          ["الديناميكا الحرارية للاستخلاص", "مخططات Eh–pH (Pourbaix)، مخططات Ellingham، حركية التفاعلات"],
          ["الإذابة (Leaching)", "الإذابة في الأكوام والخزانات وتحت الضغط؛ سيندة الذهب؛ الإذابة الحمضية للنحاس"],
          ["تنقية المحاليل واستخلاص الفلز", "الاستخلاص بالمذيبات، التبادل الأيوني، الامتزاز على الكربون، الاستخلاص الكهربائي"],
          ["الميتالورجيا الحرارية", "التحميص، الصهر، التحويل، الخبث، معالجة الغازات المنبعثة"],
          ["التنقية والمنتجات", "التنقية الكهربائية، مواصفات المنتج، المنتجات الثانوية، المتبقيات"]
        ]
      },
      ur: {
        title: "ایکسٹریکٹو میٹالرجی: ہائیڈرو اور پائرو میٹالرجی",
        summary: "کنسنٹریٹ کو محلول کی کیمیا یا حرارت کے ذریعے دھات میں بدلیں، اور جانیں کہ کب کون سا طریقہ استعمال کرنا ہے۔",
        prereq: "FZ-101 اور بنیادی کیمسٹری۔",
        outcome: "لیچنگ، سالوینٹ ایکسٹریکشن اور الیکٹرو وِننگ کا فلو شیٹ، ری ایجنٹس اور توانائی کے تخمینوں کے ساتھ۔",
        modules: [
          ["ایکسٹریکشن کے لیے تھرموڈائنامکس", "Eh–pH (Pourbaix) ڈایاگرامز، Ellingham ڈایاگرامز، تعامل کی کائنیٹکس"],
          ["لیچنگ", "ہیپ، ٹینک اور پریشر لیچنگ؛ سونے کی سائنائیڈیشن؛ تانبے کی ایسڈ لیچنگ"],
          ["محلول کی صفائی اور دھات کی بازیافت", "سالوینٹ ایکسٹریکشن، آئن ایکسچینج، کاربن ایڈزورپشن، الیکٹرو وِننگ"],
          ["پائرو میٹالرجی", "روسٹنگ، سمیلٹنگ، کنورٹنگ، سلیگ، خارج ہونے والی گیسوں کا انتظام"],
          ["ریفائننگ اور مصنوعات", "الیکٹرو ریفائننگ، پروڈکٹ کی خصوصیات، ضمنی مصنوعات، باقیات"]
        ]
      },
      fr: {
        title: "Métallurgie extractive : hydrométallurgie et pyrométallurgie",
        summary: "Transformez un concentré en métal, par la chimie des solutions ou par la chaleur, et sachez quand choisir l'une ou l'autre.",
        prereq: "FZ-101 et des bases de chimie.",
        outcome: "Un schéma de lixiviation, d'extraction par solvant et d'électro-extraction, avec estimation des réactifs et de l'énergie.",
        modules: [
          ["Thermodynamique de l'extraction", "Diagrammes Eh–pH (Pourbaix), diagrammes d'Ellingham, cinétique des réactions"],
          ["Lixiviation", "Lixiviation en tas, en cuve et sous pression ; cyanuration de l'or ; lixiviation acide du cuivre"],
          ["Purification des solutions et récupération", "Extraction par solvant, échange d'ions, adsorption sur charbon actif, électro-extraction"],
          ["Pyrométallurgie", "Grillage, fusion, convertissage, scories, traitement des gaz"],
          ["Raffinage et produits", "Électroraffinage, spécifications des produits, sous-produits, résidus"]
        ]
      },
      es: {
        title: "Metalurgia extractiva: hidrometalurgia y pirometalurgia",
        summary: "Convierte un concentrado en metal, mediante química de soluciones o mediante calor, y aprende cuándo usar cada vía.",
        prereq: "FZ-101 y química básica.",
        outcome: "Un diagrama de lixiviación, extracción por solventes y electroobtención, con estimaciones de reactivos y energía.",
        modules: [
          ["Termodinámica de la extracción", "Diagramas Eh–pH (Pourbaix), diagramas de Ellingham, cinética de reacción"],
          ["Lixiviación", "Lixiviación en pilas, en tanques y a presión; cianuración del oro; lixiviación ácida del cobre"],
          ["Purificación de soluciones y recuperación", "Extracción por solventes, intercambio iónico, adsorción en carbón activado, electroobtención"],
          ["Pirometalurgia", "Tostación, fundición, conversión, escorias, manejo de gases"],
          ["Refinación y productos", "Electrorrefinación, especificaciones de producto, subproductos, residuos"]
        ]
      }
    }
  },
  {
    code: "FZ-301", level: "advanced", weeks: 6, lessons: 44, projects: 3,
    stack: ["Block models", "Kriging", "Pit optimization", "Discounted cash flow"],
    t: {
      en: {
        title: "Mine Planning and Mineral Economics",
        summary: "Decide what is worth mining, in what order, and whether the project pays.",
        prereq: "FZ-101 and confident spreadsheet skills.",
        outcome: "A pit design, production schedule and cash-flow model for a sample deposit.",
        modules: [
          ["Resource and reserve estimation", "Drilling data, block models, geostatistics and kriging, reporting under the JORC Code and NI 43-101"],
          ["Surface mine design", "Pit optimization, slopes and benches, haul roads, scheduling"],
          ["Underground methods", "Method selection, stoping, caving, ventilation, ground support"],
          ["Mineral economics", "Cut-off grade, capital and operating costs, discounted cash flow, NPV and IRR"],
          ["Feasibility studies", "Study stages, risk and sensitivity analysis, commodity prices, permitting"]
        ]
      },
      ar: {
        title: "تخطيط المناجم واقتصاديات المعادن",
        summary: "قرّر ما يستحق التعدين، وبأي ترتيب، وهل المشروع مجدٍ اقتصاديًا.",
        prereq: "دورة FZ-101 وإتقان جداول البيانات.",
        outcome: "تصميم حفرة وجدول إنتاج ونموذج تدفقات نقدية لراسب نموذجي.",
        modules: [
          ["تقدير الموارد والاحتياطيات", "بيانات الحفر، النماذج الكتلية، الإحصاء الجيولوجي وطريقة Kriging، إعداد التقارير وفق JORC و NI 43-101"],
          ["تصميم المناجم السطحية", "تحديد الحفرة المثلى، الميول والمصاطب، طرق النقل، الجدولة"],
          ["طرق التعدين تحت الأرض", "اختيار الطريقة، التعدين بالحجرات، التعدين بالتكهيف، التهوية، تدعيم الصخور"],
          ["اقتصاديات المعادن", "الرتبة الحدّية، التكاليف الرأسمالية والتشغيلية، التدفقات النقدية المخصومة، NPV و IRR"],
          ["دراسات الجدوى", "مراحل الدراسة، تحليل المخاطر والحساسية، أسعار السلع، التراخيص"]
        ]
      },
      ur: {
        title: "مائن پلاننگ اور معدنی معاشیات",
        summary: "فیصلہ کریں کہ کیا نکالنا فائدہ مند ہے، کس ترتیب سے، اور آیا منصوبہ منافع بخش ہے۔",
        prereq: "FZ-101 اور اسپریڈ شیٹس میں اچھی مہارت۔",
        outcome: "ایک نمونہ ذخیرے کے لیے پِٹ ڈیزائن، پیداواری شیڈول اور کیش فلو ماڈل۔",
        modules: [
          ["وسائل اور ذخائر کا تخمینہ", "ڈرلنگ ڈیٹا، بلاک ماڈلز، جیو اسٹیٹسٹکس اور کریگنگ، JORC کوڈ اور NI 43-101 کے تحت رپورٹنگ"],
          ["سطحی کان کا ڈیزائن", "پِٹ آپٹیمائزیشن، ڈھلوانیں اور بینچز، ہال روڈز، شیڈولنگ"],
          ["زیرِ زمین طریقے", "طریقے کا انتخاب، اسٹوپنگ، کیونگ، وینٹیلیشن، گراؤنڈ سپورٹ"],
          ["معدنی معاشیات", "کٹ آف گریڈ، سرمایہ جاتی اور آپریٹنگ اخراجات، ڈسکاؤنٹڈ کیش فلو، NPV اور IRR"],
          ["فزیبلٹی اسٹڈیز", "مطالعے کے مراحل، خطرے اور حساسیت کا تجزیہ، اجناس کی قیمتیں، اجازت نامے"]
        ]
      },
      fr: {
        title: "Planification minière et économie minérale",
        summary: "Décidez ce qui vaut la peine d'être extrait, dans quel ordre, et si le projet est rentable.",
        prereq: "FZ-101 et une bonne maîtrise du tableur.",
        outcome: "Une conception de fosse, un calendrier de production et un modèle de flux de trésorerie pour un gisement type.",
        modules: [
          ["Estimation des ressources et des réserves", "Données de forage, modèles de blocs, géostatistique et krigeage, déclaration selon le code JORC et la norme NI 43-101"],
          ["Conception des mines à ciel ouvert", "Optimisation de fosse, pentes et gradins, pistes de roulage, ordonnancement"],
          ["Méthodes souterraines", "Choix de la méthode, chambres d'abattage, foudroyage, aérage, soutènement"],
          ["Économie minérale", "Teneur de coupure, coûts d'investissement et d'exploitation, flux de trésorerie actualisés, VAN et TRI"],
          ["Études de faisabilité", "Étapes d'étude, analyse des risques et de sensibilité, prix des matières premières, autorisations"]
        ]
      },
      es: {
        title: "Planificación minera y economía de minerales",
        summary: "Decide qué merece la pena extraer, en qué orden, y si el proyecto es rentable.",
        prereq: "FZ-101 y buen manejo de hojas de cálculo.",
        outcome: "Un diseño de rajo, un programa de producción y un modelo de flujo de caja para un yacimiento de ejemplo.",
        modules: [
          ["Estimación de recursos y reservas", "Datos de sondajes, modelos de bloques, geoestadística y kriging, reportes según el Código JORC y NI 43-101"],
          ["Diseño de minas a cielo abierto", "Optimización del rajo, taludes y bancos, caminos de acarreo, programación"],
          ["Métodos subterráneos", "Selección del método, caserones, hundimiento, ventilación, fortificación"],
          ["Economía de minerales", "Ley de corte, costos de capital y de operación, flujo de caja descontado, VAN y TIR"],
          ["Estudios de factibilidad", "Etapas de estudio, análisis de riesgo y sensibilidad, precios de los metales, permisos"]
        ]
      }
    }
  },
  {
    code: "FZ-302", level: "advanced", weeks: 6, lessons: 42, projects: 3,
    stack: ["Process simulation", "Control loops", "Tailings standard (GISTM)", "Life-cycle assessment"],
    t: {
      en: {
        title: "Plant Design, Process Control and Sustainable Operations",
        summary: "Bring the unit operations together into a plant that meets its targets for recovery, cost, water and carbon.",
        prereq: "FZ-201 and FZ-202.",
        outcome: "A preliminary plant design report with a control strategy, a tailings plan and a carbon estimate.",
        modules: [
          ["Geometallurgy", "Ore variability, geometallurgical domains, linking the mine plan to plant performance"],
          ["Flowsheet design and simulation", "Testwork programs, equipment sizing, process simulation, scale-up"],
          ["Process control and data", "Instrumentation, control loops, online analysers, machine learning for plant optimization"],
          ["Tailings, water and energy", "Filtered and dry-stacked tailings, the Global Industry Standard on Tailings Management, water balance, decarbonization"],
          ["Critical minerals and recycling", "Lithium, rare earths, nickel and cobalt; battery recycling; urban mining"]
        ]
      },
      ar: {
        title: "تصميم المصانع والتحكم في العمليات والتشغيل المستدام",
        summary: "اجمع عمليات الوحدة في مصنع يحقق أهدافه في الاستخلاص والتكلفة والمياه والكربون.",
        prereq: "دورتا FZ-201 و FZ-202.",
        outcome: "تقرير تصميم أولي لمصنع مع استراتيجية تحكم وخطة للمخلفات وتقدير للانبعاثات الكربونية.",
        modules: [
          ["الجيوميتالورجيا", "تباين الخام، النطاقات الجيوميتالورجية، ربط خطة المنجم بأداء المصنع"],
          ["تصميم مخطط المعالجة والمحاكاة", "برامج الاختبارات، تحديد أحجام المعدات، محاكاة العمليات، التكبير إلى الحجم الصناعي"],
          ["التحكم في العمليات والبيانات", "أجهزة القياس، حلقات التحكم، المحلِّلات الآنية، تعلّم الآلة لتحسين أداء المصنع"],
          ["المخلفات والمياه والطاقة", "المخلفات المرشَّحة والتكديس الجاف، المعيار الصناعي العالمي لإدارة المخلفات، موازنة المياه، خفض الكربون"],
          ["المعادن الحرجة وإعادة التدوير", "الليثيوم، العناصر الأرضية النادرة، النيكل والكوبالت؛ إعادة تدوير البطاريات؛ التعدين الحضري"]
        ]
      },
      ur: {
        title: "پلانٹ ڈیزائن، پروسیس کنٹرول اور پائیدار آپریشنز",
        summary: "یونٹ آپریشنز کو ایک ایسے پلانٹ میں یکجا کریں جو ریکوری، لاگت، پانی اور کاربن کے اہداف پورے کرے۔",
        prereq: "FZ-201 اور FZ-202۔",
        outcome: "کنٹرول حکمتِ عملی، ٹیلنگز پلان اور کاربن کے تخمینے کے ساتھ پلانٹ ڈیزائن کی ابتدائی رپورٹ۔",
        modules: [
          ["جیو میٹالرجی", "کچ دھات میں تغیر، جیو میٹالرجیکل ڈومینز، مائن پلان کو پلانٹ کی کارکردگی سے جوڑنا"],
          ["فلو شیٹ ڈیزائن اور سمولیشن", "ٹیسٹ ورک پروگرامز، آلات کی سائزنگ، پروسیس سمولیشن، اسکیل اَپ"],
          ["پروسیس کنٹرول اور ڈیٹا", "انسٹرومنٹیشن، کنٹرول لوپس، آن لائن اینالائزرز، پلانٹ کی بہتری کے لیے مشین لرننگ"],
          ["ٹیلنگز، پانی اور توانائی", "فلٹر شدہ اور ڈرائی اسٹیک ٹیلنگز، ٹیلنگز مینجمنٹ کا عالمی صنعتی معیار، پانی کا بیلنس، کاربن میں کمی"],
          ["اہم معدنیات اور ری سائیکلنگ", "لیتھیم، نایاب ارضی عناصر، نکل اور کوبالٹ؛ بیٹری ری سائیکلنگ؛ اربن مائننگ"]
        ]
      },
      fr: {
        title: "Conception d'usine, contrôle des procédés et exploitation durable",
        summary: "Assemblez les opérations unitaires en une usine qui atteint ses objectifs de récupération, de coût, d'eau et de carbone.",
        prereq: "FZ-201 et FZ-202.",
        outcome: "Un rapport de conception préliminaire d'usine avec une stratégie de contrôle, un plan de gestion des résidus et une estimation carbone.",
        modules: [
          ["Géométallurgie", "Variabilité du minerai, domaines géométallurgiques, lien entre le plan minier et la performance de l'usine"],
          ["Conception et simulation des schémas de traitement", "Programmes d'essais, dimensionnement des équipements, simulation des procédés, mise à l'échelle"],
          ["Contrôle des procédés et données", "Instrumentation, boucles de régulation, analyseurs en ligne, apprentissage automatique pour l'optimisation de l'usine"],
          ["Résidus, eau et énergie", "Résidus filtrés et empilés à sec, la Norme industrielle mondiale pour la gestion des résidus miniers, bilan hydrique, décarbonation"],
          ["Minéraux critiques et recyclage", "Lithium, terres rares, nickel et cobalt ; recyclage des batteries ; mine urbaine"]
        ]
      },
      es: {
        title: "Diseño de plantas, control de procesos y operación sostenible",
        summary: "Integra las operaciones unitarias en una planta que cumpla sus metas de recuperación, costo, agua y carbono.",
        prereq: "FZ-201 y FZ-202.",
        outcome: "Un informe de diseño preliminar de planta con estrategia de control, plan de relaves y estimación de carbono.",
        modules: [
          ["Geometalurgia", "Variabilidad de la mena, dominios geometalúrgicos, vínculo entre el plan minero y el desempeño de la planta"],
          ["Diseño y simulación de diagramas de flujo", "Programas de pruebas, dimensionamiento de equipos, simulación de procesos, escalamiento"],
          ["Control de procesos y datos", "Instrumentación, lazos de control, analizadores en línea, aprendizaje automático para optimizar la planta"],
          ["Relaves, agua y energía", "Relaves filtrados y apilados en seco, el Estándar Global de la Industria sobre Gestión de Relaves, balance hídrico, descarbonización"],
          ["Minerales críticos y reciclaje", "Litio, tierras raras, níquel y cobalto; reciclaje de baterías; minería urbana"]
        ]
      }
    }
  }
];
