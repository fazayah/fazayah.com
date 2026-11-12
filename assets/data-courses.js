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
    code: "FZ-102", level: "beginner", weeks: 7, lessons: 52, projects: 3,
    stack: ["Mineral identification", "Geological maps", "Drill core logging", "XRD and microscopy"],
    t: {
      en: {
        title: "Geology and Mineralogy for Engineers",
        summary: "Read rocks, maps and drill core well enough to work with geologists and understand the ore you are given.",
        prereq: "Secondary-school science. Can be taken alongside FZ-101.",
        outcome: "A logged drill core, an interpreted geological cross-section and a mineralogy report for one ore.",
        modules: [
          ["Earth materials", "The rock cycle; igneous, sedimentary and metamorphic rocks; rock-forming minerals"],
          ["Mineral identification", "Physical properties, crystal systems, optical microscopy, X-ray diffraction"],
          ["Ore deposit types", "Porphyry, epithermal, sedimentary, magmatic and placer deposits; alteration and zoning"],
          ["Structures and maps", "Faults, folds and joints; reading geological maps; cross-sections"],
          ["Exploration and drill core", "Geochemical and geophysical surveys, drilling methods, core logging, quality control of samples"]
        ]
      },
      ar: {
        title: "الجيولوجيا وعلم المعادن للمهندسين",
        summary: "اقرأ الصخور والخرائط ولُباب الحفر بما يكفي للعمل مع الجيولوجيين وفهم الخام الذي بين يديك.",
        prereq: "علوم المرحلة الثانوية. يمكن دراستها بالتزامن مع FZ-101.",
        outcome: "لُباب حفر موصوف، ومقطع جيولوجي مفسَّر، وتقرير معدني عن خام واحد.",
        modules: [
          ["مواد الأرض", "دورة الصخور؛ الصخور النارية والرسوبية والمتحولة؛ المعادن المكوِّنة للصخور"],
          ["تمييز المعادن", "الخصائص الفيزيائية، الأنظمة البلورية، المجهر الضوئي، حيود الأشعة السينية"],
          ["أنواع رواسب الخامات", "الرواسب البورفيرية والإبيثرمالية والرسوبية والصهارية والغرينية؛ التحوّر والتمنطق"],
          ["التراكيب والخرائط", "الصدوع والطيات والفواصل؛ قراءة الخرائط الجيولوجية؛ المقاطع العرضية"],
          ["الاستكشاف ولُباب الحفر", "المسوح الجيوكيميائية والجيوفيزيائية، طرق الحفر، وصف اللُّباب، ضبط جودة العينات"]
        ]
      },
      ur: {
        title: "انجینئرز کے لیے ارضیات اور معدنیات",
        summary: "چٹانوں، نقشوں اور ڈرل کور کو اتنا سمجھیں کہ ماہرینِ ارضیات کے ساتھ کام کر سکیں اور ملنے والی کچ دھات کو سمجھ سکیں۔",
        prereq: "ثانوی اسکول کی سائنس۔ FZ-101 کے ساتھ ساتھ کیا جا سکتا ہے۔",
        outcome: "ایک لاگ شدہ ڈرل کور، ایک تشریح شدہ ارضیاتی کراس سیکشن اور ایک کچ دھات کی منرالوجی رپورٹ۔",
        modules: [
          ["زمینی مواد", "چٹانوں کا چکر؛ آتشی، رسوبی اور متغیرہ چٹانیں؛ چٹان ساز معدنیات"],
          ["معدنیات کی شناخت", "طبعی خصوصیات، کرسٹل سسٹمز، آپٹیکل مائیکروسکوپی، ایکس رے ڈفریکشن"],
          ["کچ دھات کے ذخائر کی اقسام", "پورفیری، ایپی تھرمل، رسوبی، میگمیٹک اور پلیسر ذخائر؛ آلٹریشن اور زوننگ"],
          ["ساختیں اور نقشے", "فالٹس، فولڈز اور جوائنٹس؛ ارضیاتی نقشے پڑھنا؛ کراس سیکشنز"],
          ["تلاش اور ڈرل کور", "جیو کیمیکل اور جیو فزیکل سروے، ڈرلنگ کے طریقے، کور لاگنگ، نمونوں کے معیار کی جانچ"]
        ]
      },
      fr: {
        title: "Géologie et minéralogie pour ingénieurs",
        summary: "Lisez les roches, les cartes et les carottes de forage assez bien pour travailler avec les géologues et comprendre le minerai que vous recevez.",
        prereq: "Sciences du lycée. Peut être suivi en parallèle de FZ-101.",
        outcome: "Une carotte de forage décrite, une coupe géologique interprétée et un rapport minéralogique sur un minerai.",
        modules: [
          ["Les matériaux de la Terre", "Cycle des roches ; roches magmatiques, sédimentaires et métamorphiques ; minéraux constitutifs des roches"],
          ["Identification des minéraux", "Propriétés physiques, systèmes cristallins, microscopie optique, diffraction des rayons X"],
          ["Types de gisements", "Gisements porphyriques, épithermaux, sédimentaires, magmatiques et alluvionnaires ; altération et zonation"],
          ["Structures et cartes", "Failles, plis et diaclases ; lecture des cartes géologiques ; coupes"],
          ["Exploration et carottes de forage", "Levés géochimiques et géophysiques, méthodes de forage, description des carottes, contrôle qualité des échantillons"]
        ]
      },
      es: {
        title: "Geología y mineralogía para ingenieros",
        summary: "Lee rocas, mapas y testigos de sondaje lo bastante bien como para trabajar con geólogos y entender la mena que recibes.",
        prereq: "Ciencias de secundaria. Puede cursarse a la vez que FZ-101.",
        outcome: "Un testigo de sondaje descrito, una sección geológica interpretada y un informe mineralógico de una mena.",
        modules: [
          ["Materiales de la Tierra", "Ciclo de las rocas; rocas ígneas, sedimentarias y metamórficas; minerales formadores de rocas"],
          ["Identificación de minerales", "Propiedades físicas, sistemas cristalinos, microscopía óptica, difracción de rayos X"],
          ["Tipos de yacimientos", "Yacimientos porfídicos, epitermales, sedimentarios, magmáticos y de placer; alteración y zonación"],
          ["Estructuras y mapas", "Fallas, pliegues y diaclasas; lectura de mapas geológicos; secciones"],
          ["Exploración y testigos de sondaje", "Prospección geoquímica y geofísica, métodos de perforación, descripción de testigos, control de calidad de muestras"]
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
    code: "FZ-204", level: "intermediate", weeks: 9, lessons: 62, projects: 3,
    stack: ["Rock mass rating", "Blast design", "Fleet matching", "Ventilation surveys"],
    t: {
      en: {
        title: "Mining Methods, Drilling and Blasting",
        summary: "Break rock and move it safely, at the surface and underground, with the right equipment for the job.",
        prereq: "FZ-101. FZ-102 is recommended.",
        outcome: "A blast design, a matched loading and hauling fleet, and a ventilation plan for a sample mine.",
        modules: [
          ["Rock mechanics basics", "Rock strength, stress and strain, rock mass classification (RMR and Q), failure modes"],
          ["Drilling and blasting", "Drill types, explosives, blast pattern design, fragmentation, control of vibration and flyrock"],
          ["Loading and hauling", "Shovels, loaders and trucks, fleet matching, conveyors, cycle times and productivity"],
          ["Underground operations", "Development, stoping and caving methods, backfill, ground support, ventilation"],
          ["Mine safety and services", "Dewatering, power supply, gas and dust monitoring, emergency response, automation and remote operation"]
        ]
      },
      ar: {
        title: "طرق التعدين والحفر والتفجير",
        summary: "كسِّر الصخر وانقله بأمان، على السطح وتحت الأرض، بالمعدات المناسبة لكل عمل.",
        prereq: "دورة FZ-101، ويُنصح بدورة FZ-102.",
        outcome: "تصميم تفجير، وأسطول تحميل ونقل متوافق، وخطة تهوية لمنجم نموذجي.",
        modules: [
          ["أساسيات ميكانيكا الصخور", "مقاومة الصخور، الإجهاد والانفعال، تصنيف الكتل الصخرية (RMR و Q)، أنماط الانهيار"],
          ["الحفر والتفجير", "أنواع الحفارات، المتفجرات، تصميم شبكة التفجير، التفتت، التحكم في الاهتزاز والصخور المتطايرة"],
          ["التحميل والنقل", "الجرافات واللوادر والشاحنات، توافق الأسطول، السيور الناقلة، أزمنة الدورة والإنتاجية"],
          ["العمليات تحت الأرض", "أعمال التطوير، طرق الحجرات والتكهيف، الردم، تدعيم الصخور، التهوية"],
          ["سلامة المنجم وخدماته", "نزح المياه، الإمداد بالكهرباء، مراقبة الغازات والغبار، الاستجابة للطوارئ، الأتمتة والتشغيل عن بُعد"]
        ]
      },
      ur: {
        title: "کان کنی کے طریقے، ڈرلنگ اور بلاسٹنگ",
        summary: "چٹان کو توڑیں اور محفوظ طریقے سے منتقل کریں، سطح پر اور زیرِ زمین، کام کے لیے موزوں آلات کے ساتھ۔",
        prereq: "FZ-101۔ FZ-102 کی سفارش کی جاتی ہے۔",
        outcome: "ایک نمونہ کان کے لیے بلاسٹ ڈیزائن، ہم آہنگ لوڈنگ اور ہالنگ فلیٹ، اور وینٹیلیشن پلان۔",
        modules: [
          ["راک میکینکس کی بنیادیں", "چٹان کی مضبوطی، اسٹریس اور اسٹرین، راک ماس کی درجہ بندی (RMR اور Q)، ناکامی کی صورتیں"],
          ["ڈرلنگ اور بلاسٹنگ", "ڈرل کی اقسام، دھماکا خیز مواد، بلاسٹ پیٹرن ڈیزائن، فریگمنٹیشن، ارتعاش اور فلائی راک پر قابو"],
          ["لوڈنگ اور ہالنگ", "شاولز، لوڈرز اور ٹرک، فلیٹ میچنگ، کنویئرز، سائیکل ٹائم اور پیداواری صلاحیت"],
          ["زیرِ زمین آپریشنز", "ڈیولپمنٹ، اسٹوپنگ اور کیونگ کے طریقے، بیک فل، گراؤنڈ سپورٹ، وینٹیلیشن"],
          ["کان کی حفاظت اور خدمات", "پانی کی نکاسی، بجلی کی فراہمی، گیس اور گرد کی نگرانی، ہنگامی ردِعمل، آٹومیشن اور ریموٹ آپریشن"]
        ]
      },
      fr: {
        title: "Méthodes d'exploitation, forage et tir à l'explosif",
        summary: "Abattez la roche et transportez-la en sécurité, en surface comme en souterrain, avec les équipements adaptés.",
        prereq: "FZ-101. FZ-102 est recommandé.",
        outcome: "Un plan de tir, une flotte de chargement et de transport bien assortie et un plan d'aérage pour une mine type.",
        modules: [
          ["Bases de mécanique des roches", "Résistance des roches, contraintes et déformations, classification des massifs rocheux (RMR et Q), modes de rupture"],
          ["Forage et tir", "Types de foreuses, explosifs, conception du schéma de tir, fragmentation, maîtrise des vibrations et des projections"],
          ["Chargement et transport", "Pelles, chargeuses et camions, adéquation de la flotte, convoyeurs, temps de cycle et productivité"],
          ["Travaux souterrains", "Travaux préparatoires, méthodes par chambres et par foudroyage, remblayage, soutènement, aérage"],
          ["Sécurité et services de la mine", "Exhaure, alimentation électrique, surveillance des gaz et des poussières, intervention d'urgence, automatisation et téléconduite"]
        ]
      },
      es: {
        title: "Métodos de explotación, perforación y voladura",
        summary: "Fragmenta la roca y muévela con seguridad, en superficie y en subterráneo, con el equipo adecuado para cada tarea.",
        prereq: "FZ-101. Se recomienda FZ-102.",
        outcome: "Un diseño de voladura, una flota de carguío y transporte bien dimensionada y un plan de ventilación para una mina de ejemplo.",
        modules: [
          ["Fundamentos de mecánica de rocas", "Resistencia de la roca, esfuerzo y deformación, clasificación del macizo rocoso (RMR y Q), modos de falla"],
          ["Perforación y voladura", "Tipos de perforadoras, explosivos, diseño de mallas de voladura, fragmentación, control de vibraciones y proyecciones"],
          ["Carguío y transporte", "Palas, cargadores y camiones, dimensionamiento de la flota, correas transportadoras, tiempos de ciclo y productividad"],
          ["Operaciones subterráneas", "Desarrollo, métodos por caserones y por hundimiento, relleno, fortificación, ventilación"],
          ["Seguridad y servicios de mina", "Drenaje, energía eléctrica, monitoreo de gases y polvo, respuesta a emergencias, automatización y operación remota"]
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
  },
  {
    code: "FZ-303", level: "advanced", weeks: 7, lessons: 48, projects: 3,
    stack: ["CIL and CIP", "SX-EW", "Pelletizing", "Washability curves"],
    t: {
      en: {
        title: "Commodity Flowsheets: Gold, Copper, Iron Ore and Coal",
        summary: "Study how real plants treat the main commodities, and why each flowsheet looks the way it does.",
        prereq: "FZ-202 and FZ-203.",
        outcome: "A comparison of two flowsheets for one commodity, covering cost, recovery and environmental trade-offs.",
        modules: [
          ["Gold", "Free-milling and refractory ores, gravity recovery, carbon-in-leach and carbon-in-pulp, cyanide management"],
          ["Copper", "Sulphide flotation and smelting, heap leaching of oxides with SX-EW, molybdenum and gold as by-products"],
          ["Iron ore", "Beneficiation of hematite and magnetite, magnetic separation, pelletizing and sintering"],
          ["Coal", "Washability, dense medium cyclones, fine coal flotation, dewatering, product quality"],
          ["Industrial and battery minerals", "Phosphate and potash, lithium from brine and spodumene, graphite, rare earths"]
        ]
      },
      ar: {
        title: "مخططات معالجة السلع: الذهب والنحاس وخام الحديد والفحم",
        summary: "ادرس كيف تعالج المصانع الفعلية السلع الرئيسية، ولماذا يأخذ كل مخطط شكله.",
        prereq: "دورتا FZ-202 و FZ-203.",
        outcome: "مقارنة بين مخططين لمعالجة سلعة واحدة من حيث التكلفة والاستخلاص والأثر البيئي.",
        modules: [
          ["الذهب", "الخامات سهلة المعالجة والخامات المستعصية، الاستخلاص بالجاذبية، الكربون في الإذابة (CIL) والكربون في اللب (CIP)، إدارة السيانيد"],
          ["النحاس", "تعويم الكبريتيدات وصهرها، إذابة الأكاسيد في الأكوام مع SX-EW، الموليبدينوم والذهب كمنتجات ثانوية"],
          ["خام الحديد", "إثراء الهيماتيت والماغنيتيت، الفصل المغناطيسي، التكوير والتلبيد"],
          ["الفحم", "قابلية الغسل، سيكلونات الوسط الثقيل، تعويم الفحم الناعم، نزع الماء، جودة المنتج"],
          ["المعادن الصناعية ومعادن البطاريات", "الفوسفات والبوتاس، الليثيوم من المحاليل الملحية والسبودومين، الغرافيت، العناصر الأرضية النادرة"]
        ]
      },
      ur: {
        title: "اجناس کے فلو شیٹس: سونا، تانبا، خام لوہا اور کوئلہ",
        summary: "دیکھیں کہ حقیقی پلانٹس اہم اجناس کو کیسے پروسیس کرتے ہیں، اور ہر فلو شیٹ ویسا کیوں ہے جیسا وہ ہے۔",
        prereq: "FZ-202 اور FZ-203۔",
        outcome: "ایک جنس کے دو فلو شیٹس کا موازنہ، لاگت، ریکوری اور ماحولیاتی اثرات کے لحاظ سے۔",
        modules: [
          ["سونا", "فری ملنگ اور ریفریکٹری کچ دھاتیں، گریویٹی ریکوری، کاربن اِن لیچ اور کاربن اِن پلپ، سائنائیڈ کا انتظام"],
          ["تانبا", "سلفائیڈ فلوٹیشن اور سمیلٹنگ، SX-EW کے ساتھ آکسائیڈ ہیپ لیچنگ، ضمنی مصنوعات مولبڈینم اور سونا"],
          ["خام لوہا", "ہیماٹائٹ اور میگنیٹائٹ کی بینیفیشی ایشن، مقناطیسی علیحدگی، پیلیٹائزنگ اور سنٹرنگ"],
          ["کوئلہ", "واش ایبلٹی، ڈینس میڈیم سائیکلونز، باریک کوئلے کی فلوٹیشن، ڈی واٹرنگ، پروڈکٹ کا معیار"],
          ["صنعتی اور بیٹری معدنیات", "فاسفیٹ اور پوٹاش، برائن اور اسپوڈومین سے لیتھیم، گریفائٹ، نایاب ارضی عناصر"]
        ]
      },
      fr: {
        title: "Schémas de traitement par substance : or, cuivre, minerai de fer et charbon",
        summary: "Étudiez comment de vraies usines traitent les principales substances, et pourquoi chaque schéma a cette forme.",
        prereq: "FZ-202 et FZ-203.",
        outcome: "Une comparaison de deux schémas de traitement pour une même substance : coûts, récupération et compromis environnementaux.",
        modules: [
          ["Or", "Minerais libres et réfractaires, récupération gravimétrique, charbon en lixiviation (CIL) et charbon en pulpe (CIP), gestion du cyanure"],
          ["Cuivre", "Flottation et fusion des sulfures, lixiviation en tas des oxydes avec SX-EW, molybdène et or en sous-produits"],
          ["Minerai de fer", "Enrichissement de l'hématite et de la magnétite, séparation magnétique, bouletage et agglomération"],
          ["Charbon", "Lavabilité, cyclones à milieu dense, flottation des fines, déshydratation, qualité du produit"],
          ["Minéraux industriels et de batteries", "Phosphate et potasse, lithium des saumures et du spodumène, graphite, terres rares"]
        ]
      },
      es: {
        title: "Diagramas de flujo por producto: oro, cobre, mineral de hierro y carbón",
        summary: "Estudia cómo las plantas reales tratan los principales productos minerales y por qué cada diagrama tiene esa forma.",
        prereq: "FZ-202 y FZ-203.",
        outcome: "Una comparación de dos diagramas de flujo para un mismo producto: costos, recuperación y efectos ambientales.",
        modules: [
          ["Oro", "Menas de libre molienda y refractarias, recuperación gravimétrica, carbón en lixiviación (CIL) y carbón en pulpa (CIP), manejo del cianuro"],
          ["Cobre", "Flotación y fundición de sulfuros, lixiviación en pilas de óxidos con SX-EW, molibdeno y oro como subproductos"],
          ["Mineral de hierro", "Beneficio de hematita y magnetita, separación magnética, peletización y sinterización"],
          ["Carbón", "Lavabilidad, ciclones de medio denso, flotación de finos, desaguado, calidad del producto"],
          ["Minerales industriales y de baterías", "Fosfato y potasa, litio de salmueras y de espodumeno, grafito, tierras raras"]
        ]
      }
    }
  }
];
