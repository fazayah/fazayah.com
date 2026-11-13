/* Mechanical engineering catalog: Spanish text, keyed by course code. */
window.FAZAYAH.mechanicalText.es = {
  "ME-101": {
    title: "Introducción a la ingeniería mecánica",
    summary: "Descubre cómo las máquinas transmiten fuerza, movimiento y energía, y aprende las unidades, las estimaciones y los pasos de diseño en los que se apoyan todos los cursos posteriores.",
    prereq: "Física y matemáticas de secundaria. No hace falta experiencia en taller ni en la industria.",
    outcome: "Un estudio de diseño resuelto de una máquina sencilla: sus cargas, su demanda de potencia, la elección de un material y un informe breve.",
    modules: [
      ["Qué hacen los ingenieros mecánicos", "Campos de trabajo, el proceso de diseño, códigos y normas, ética profesional"],
      ["Unidades, dimensiones y estimación", "Unidades del SI y del sistema anglosajón, cifras significativas, comprobaciones dimensionales, estimaciones de orden de magnitud"],
      ["Fuerzas y movimiento", "Leyes de Newton, diagramas de cuerpo libre, rozamiento, trabajo y potencia"],
      ["Energía y calor", "Formas de energía, conservación de la energía, rendimiento, temperatura y calor"],
      ["Los materiales y cómo fallan", "Metales, polímeros, cerámicos y materiales compuestos; tensión y deformación; nociones de fluencia, fractura y fatiga"],
      ["Máquinas y mecanismos", "Palancas, engranajes, correas y rodamientos; motores térmicos, motores eléctricos y bombas; cómo leer una máquina como un sistema"]
    ]
  },
  "ME-102": {
    title: "Dibujo técnico y CAD",
    summary: "Lee y elabora planos con los que un taller pueda fabricar, y después modela piezas y conjuntos en CAD 3D.",
    prereq: "Ninguno. Puede cursarse a la vez que ME-101.",
    outcome: "Un juego completo de planos de un conjunto pequeño: modelos 3D, planos de pieza acotados y con tolerancias, y una lista de materiales.",
    modules: [
      ["Croquis y proyección", "Croquis a mano alzada, vistas ortogonales, vistas isométricas, proyección en primer y tercer diedro"],
      ["Cortes y acotación", "Vistas en corte y de detalle, reglas de acotación, escalas, cajetines"],
      ["Tolerancias y ajustes", "Límites y ajustes, cadenas de tolerancias, símbolos de acabado superficial"],
      ["Acotación y tolerancias geométricas", "Referencias, controles de forma, orientación, posición y oscilación; lectura de los marcos de control de tolerancia"],
      ["Modelado 3D de piezas", "Croquis y restricciones, operaciones, intención de diseño, cambios paramétricos"],
      ["Conjuntos y planos a partir del CAD", "Relaciones de posición, comprobación de interferencias, vistas explosionadas, listas de materiales, emisión y revisiones de planos"]
    ]
  },
  "ME-103": {
    title: "Estática y dinámica",
    summary: "Determina las fuerzas en estructuras en reposo y predice el movimiento de partículas y cuerpos rígidos.",
    prereq: "ME-101, además de álgebra, trigonometría y cálculo introductorio.",
    outcome: "Un análisis de fuerzas completo de una armadura y de un bastidor, y un estudio del movimiento de un mecanismo contrastado con una simulación numérica.",
    modules: [
      ["Sistemas de fuerzas y equilibrio", "Vectores, momentos y pares, sistemas equivalentes, equilibrio en dos y tres dimensiones"],
      ["Estructuras", "Armaduras por el método de los nudos y el de las secciones, bastidores y máquinas, fuerzas internas"],
      ["Cargas distribuidas y rozamiento", "Centroides, momentos de inercia de áreas, rozamiento seco, cuñas, tornillos y correas"],
      ["Cinemática de partículas y cuerpos rígidos", "Movimiento rectilíneo y curvilíneo, movimiento relativo, rotación, centros instantáneos de rotación"],
      ["Cinética: fuerza y aceleración", "Segunda ley de Newton para partículas y cuerpos rígidos, momento de inercia de masa"],
      ["Trabajo, energía y cantidad de movimiento", "Principio del trabajo y la energía, conservación de la energía, impulso y cantidad de movimiento, choques"]
    ]
  },
  "ME-201": {
    title: "Resistencia de materiales",
    summary: "Calcula las tensiones y las deformaciones de piezas sometidas a carga y decide si son lo bastante resistentes y rígidas.",
    prereq: "ME-103.",
    outcome: "Un eje y una viga dimensionados para unas cargas dadas, con comprobaciones de tensión, flecha y pandeo y un coeficiente de seguridad declarado.",
    modules: [
      ["Tensión, deformación y propiedades de los materiales", "Tensión normal y tangencial, ley de Hooke, coeficiente de Poisson, el ensayo de tracción, coeficiente de seguridad"],
      ["Carga axial y torsión", "Deformación de barras, elementos hiperestáticos, tensiones térmicas, torsión de ejes circulares"],
      ["Flexión de vigas", "Diagramas de esfuerzo cortante y momento flector, tensiones de flexión, tensiones tangenciales en vigas, secciones compuestas"],
      ["Deformación de vigas", "La curva elástica, métodos de integración y de superposición, vigas hiperestáticas"],
      ["Cargas combinadas y transformación de tensiones", "Tensiones principales, círculo de Mohr, recipientes a presión de pared delgada, galgas extensométricas"],
      ["Pandeo y criterios de fallo", "Pandeo de Euler en columnas, criterios de la tensión tangencial máxima y de von Mises, concentración de tensiones"]
    ]
  },
  "ME-202": {
    title: "Termodinámica técnica",
    summary: "Aplica las leyes de la termodinámica a motores, centrales eléctricas, máquinas frigoríficas y bombas de calor.",
    prereq: "ME-101 y cálculo introductorio.",
    outcome: "Un análisis completo de un ciclo de potencia de vapor y de un ciclo de refrigeración, con rendimiento, pérdidas y propuestas de mejora.",
    modules: [
      ["Propiedades de las sustancias puras", "Fases, tablas y diagramas de propiedades, el gas ideal y los gases reales"],
      ["La primera ley", "Calor y trabajo, sistemas cerrados, volúmenes de control, equipos de flujo estacionario: turbinas, compresores, toberas e intercambiadores de calor"],
      ["La segunda ley y la entropía", "Máquinas térmicas y máquinas frigoríficas, el ciclo de Carnot, entropía, rendimiento isentrópico"],
      ["Exergía", "Trabajo disponible, irreversibilidad, rendimiento según la segunda ley"],
      ["Ciclos de potencia", "Ciclo Rankine con recalentamiento y regeneración, ciclos Otto y Diesel, ciclo Brayton, ciclos combinados"],
      ["Refrigeración, bombas de calor y aire húmedo", "Ciclos de compresión de vapor, refrigerantes y su potencial de calentamiento global, psicrometría"]
    ]
  },
  "ME-203": {
    title: "Mecánica de fluidos",
    summary: "Predice presiones, caudales y fuerzas en líquidos y gases, y dimensiona las tuberías y las bombas que los mueven.",
    prereq: "ME-103 y cálculo introductorio.",
    outcome: "El diseño de una red de tuberías con la bomba seleccionada, incluidas las pérdidas de carga, el punto de funcionamiento y una comprobación de cavitación.",
    modules: [
      ["Propiedades de los fluidos y estática", "Densidad y viscosidad, variación de la presión, manómetros, fuerzas sobre superficies sumergidas, flotación"],
      ["Leyes de conservación para fluidos en movimiento", "Volúmenes de control, ecuaciones de continuidad, de cantidad de movimiento y de energía, la ecuación de Bernoulli"],
      ["Análisis dimensional y semejanza", "Teorema pi de Buckingham, números de Reynolds y de Mach, ensayos con modelos"],
      ["Flujo en tuberías", "Flujo laminar y turbulento, factor de fricción, pérdidas localizadas, redes de tuberías"],
      ["Flujo externo", "Capas límite, resistencia y sustentación, desprendimiento del flujo"],
      ["Bombas, ventiladores y turbinas", "Curvas características, curvas del sistema, leyes de afinidad, cavitación y altura neta positiva de aspiración"]
    ]
  },
  "ME-204": {
    title: "Materiales y procesos de fabricación",
    summary: "Elige los materiales y los procesos que les dan forma, y diseña piezas que puedan fabricarse a un coste razonable.",
    prereq: "ME-101 y ME-102.",
    outcome: "Un plan de fabricación de una pieza: material, ruta de proceso, tolerancias, método de inspección y una estimación de costes.",
    modules: [
      ["Estructura y propiedades de los materiales", "Estructura cristalina, diagramas de fases, el sistema hierro-carbono, tratamientos térmicos de los aceros"],
      ["Selección de materiales", "Diagramas de propiedades, aceros, aleaciones de aluminio y de titanio, polímeros y materiales compuestos, corrosión"],
      ["Fundición, conformado y moldeo", "Fundición en arena y a presión, forja, laminación, extrusión, trabajo de chapa, moldeo por inyección"],
      ["Mecanizado", "Torneado, fresado, taladrado y rectificado; herramientas de corte y vida de la herramienta; fundamentos de programación CNC"],
      ["Unión y fabricación aditiva", "Procesos de soldadura y defectos de soldadura, soldadura fuerte, adhesivos, impresión 3D de metales y polímeros"],
      ["Calidad y costes", "Metrología, control estadístico de procesos, diseño para la fabricación y el montaje, estimación de costes"]
    ]
  },
  "ME-205": {
    title: "Cinemática y dinámica de máquinas",
    summary: "Analiza y diseña los mecanismos de barras, las levas y los trenes de engranajes que transforman un movimiento en otro.",
    prereq: "ME-103.",
    outcome: "El diseño de un mecanismo de cuatro barras y de una leva para un movimiento especificado, con análisis de velocidades, aceleraciones y fuerzas.",
    modules: [
      ["Mecanismos y movilidad", "Eslabones, pares y cadenas cinemáticas, grados de libertad, condición de Grashof"],
      ["Análisis de posición, velocidad y aceleración", "Métodos gráficos y analíticos, lazos vectoriales, centros instantáneos de rotación"],
      ["Síntesis de mecanismos", "Síntesis de dos y tres posiciones, generación de función y de trayectoria, ángulo de transmisión"],
      ["Levas", "Tipos de seguidor, leyes de movimiento, perfiles de leva, ángulo de presión y radio de curvatura"],
      ["Engranajes y trenes de engranajes", "La ley fundamental del engrane, dientes de evolvente, trenes simples, compuestos y planetarios"],
      ["Fuerzas dinámicas y equilibrado", "Fuerzas de inercia, volantes de inercia, equilibrado de masas rotativas y alternativas"]
    ]
  },
  "ME-301": {
    title: "Diseño de máquinas",
    summary: "Diseña ejes, rodamientos, engranajes, uniones atornilladas y resortes que soporten sus cargas durante la vida útil que necesitas.",
    prereq: "ME-201 y ME-205.",
    outcome: "El diseño completo de una caja reductora: ejes, engranajes, rodamientos y elementos de unión, con los cálculos y los planos de fabricación.",
    modules: [
      ["Fallo estático y fatiga", "Teorías de fallo, concentración de tensiones, curvas S-N, efecto de la tensión media, daño acumulado"],
      ["Ejes y sus componentes", "Configuración del eje, tensiones y deformaciones, velocidad crítica, chavetas, ejes estriados y acoplamientos"],
      ["Rodamientos y lubricación", "Selección y vida de los rodamientos, cojinetes de deslizamiento, regímenes de lubricación, juntas y retenes"],
      ["Engranajes", "Engranajes rectos, helicoidales, cónicos y de tornillo sin fin; resistencia a flexión del diente y resistencia superficial; materiales para engranajes"],
      ["Elementos de unión y uniones", "Elementos de unión roscados, precarga y rigidez de la unión, uniones atornilladas a fatiga, uniones soldadas"],
      ["Resortes, frenos y transmisiones", "Resortes helicoidales, embragues y frenos, transmisiones por correa y por cadena, selección de un motor"]
    ]
  },
  "ME-302": {
    title: "Transferencia de calor y climatización (HVAC)",
    summary: "Calcula la conducción, la convección y la radiación, y después diseña intercambiadores de calor y sistemas de climatización de edificios.",
    prereq: "ME-202 y ME-203.",
    outcome: "Un intercambiador de calor dimensionado y el diseño del aire acondicionado de un edificio pequeño, con el cálculo de cargas y la selección de equipos.",
    modules: [
      ["Conducción", "Ley de Fourier, resistencia térmica, aletas, conducción transitoria y método de la capacidad concentrada"],
      ["Convección", "Capas límite térmicas, convección forzada en tuberías y sobre superficies, convección natural, correlaciones"],
      ["Radiación", "Cuerpos negros y grises, factores de visión, intercambio de radiación entre superficies"],
      ["Intercambiadores de calor", "Tipos de intercambiador, diferencia de temperatura media logarítmica, método de la efectividad-NTU, ensuciamiento"],
      ["Ebullición y condensación", "Ebullición en estanque y en flujo, flujo de calor crítico, condensación en película, tubos de calor"],
      ["Sistemas de climatización (HVAC)", "Confort y calidad del aire, cargas de calefacción y de refrigeración, unidades de tratamiento de aire, diseño de conductos, bombas de calor y refrigerantes de bajo potencial de calentamiento global"]
    ]
  },
  "ME-303": {
    title: "Vibraciones y sistemas de control",
    summary: "Modela cómo vibran y responden las máquinas, y después diseña controladores realimentados que las mantengan estables y precisas.",
    prereq: "ME-103 y ecuaciones diferenciales ordinarias.",
    outcome: "El diseño del aislamiento de vibraciones de una máquina y un controlador de posición sintonizado para un motor, ambos verificados mediante simulación.",
    modules: [
      ["Vibraciones de un grado de libertad", "Respuesta libre y forzada, amortiguamiento, resonancia, transmisibilidad y aislamiento"],
      ["Sistemas de varios grados de libertad", "Frecuencias naturales y modos de vibración, absorbedores de vibraciones, análisis modal"],
      ["Medición y diagnóstico de vibraciones", "Acelerómetros, espectros de frecuencia, desequilibrio y desalineación, monitorización de condición"],
      ["Modelado de sistemas dinámicos", "Funciones de transferencia, diagramas de bloques, modelos en espacio de estados, analogías mecánicas y eléctricas"],
      ["Realimentación y estabilidad", "Respuesta temporal, error en régimen permanente, lugar de las raíces, métodos de Bode y de Nyquist, márgenes de estabilidad"],
      ["Diseño de controladores", "Control PID y su sintonización, compensación en adelanto y en atraso, implementación digital"]
    ]
  },
  "ME-304": {
    title: "Ingeniería asistida por computadora: FEA y CFD",
    summary: "Ejecuta simulaciones por elementos finitos y de dinámica de fluidos computacional, y aprende cuándo puedes fiarte de los resultados.",
    prereq: "ME-201 y ME-203. Se recomienda ME-302.",
    outcome: "Un análisis de tensiones y un análisis de flujo de una pieza real, cada uno con un estudio de malla, una comprobación con cálculo manual y un informe.",
    modules: [
      ["Cómo funciona el método de los elementos finitos", "Matrices de rigidez, tipos de elemento, funciones de forma, ensamblaje y resolución"],
      ["Construcción de un modelo estructural", "Limpieza de la geometría, mallado, cargas y condiciones de contorno, contacto, materiales"],
      ["Más allá de la estática lineal", "Análisis modal y de pandeo, materiales no lineales, grandes desplazamientos, fatiga a partir de resultados de FEA"],
      ["Cómo funciona la CFD", "Las ecuaciones de Navier-Stokes, el método de los volúmenes finitos, discretización y solvers"],
      ["Turbulencia y transferencia de calor en CFD", "Modelos de turbulencia, tratamiento de pared, transferencia de calor conjugada, flujos transitorios"],
      ["Confiar en los resultados de la simulación", "Convergencia de malla, verificación y validación, contraste con cálculos manuales y datos de ensayo"]
    ]
  },
  "ME-305": {
    title: "Mecatrónica y robótica",
    summary: "Combina mecánica, electrónica y software en máquinas que perciben, deciden y se mueven.",
    prereq: "ME-205 y ME-303. Programación básica.",
    outcome: "Un sistema de control de movimiento en funcionamiento sobre un microcontrolador y un brazo robótico simulado que sigue una trayectoria planificada.",
    modules: [
      ["Sensores y señales", "Sensores de posición, fuerza, temperatura y visión; acondicionamiento de señal; muestreo y ruido"],
      ["Actuadores y accionamientos", "Motores de corriente continua, paso a paso y servomotores, controladores de motor, actuadores neumáticos e hidráulicos"],
      ["Microcontroladores y programación embebida", "Entradas y salidas digitales y analógicas, temporizadores e interrupciones, comunicación serie"],
      ["Cinemática de robots", "Sistemas de referencia y transformaciones, cinemática directa e inversa, el jacobiano"],
      ["Planificación y control del movimiento", "Generación de trayectorias, control articular, nociones de navegación de robots móviles"],
      ["Automatización industrial", "Autómatas programables (PLC), redes industriales, seguridad de máquinas, robots colaborativos"]
    ]
  },
  "ME-306": {
    title: "Sistemas energéticos y diseño sostenible",
    summary: "Diseña y compara sistemas de generación, propulsión y almacenamiento de energía según sus prestaciones, su coste y sus emisiones.",
    prereq: "ME-202 y ME-203.",
    outcome: "Una comparación de dos diseños de sistema energético para una misma aplicación: prestaciones, coste a lo largo de la vida útil y huella de carbono.",
    modules: [
      ["Motores y turbinas de gas", "Prestaciones y emisiones de los motores, turboalimentación, componentes de una turbina de gas, cogeneración"],
      ["Viento, agua y sol", "Aerodinámica de aerogeneradores, turbinas hidráulicas, captadores solares térmicos, fundamentos de los sistemas fotovoltaicos"],
      ["Almacenamiento de energía", "Baterías, bombeo hidráulico, almacenamiento térmico, volantes de inercia, dimensionamiento del almacenamiento para una carga"],
      ["Vehículos eléctricos", "Nociones de motores y electrónica de potencia, paquetes de baterías y gestión térmica, dimensionamiento del tren motriz"],
      ["Hidrógeno y pilas de combustible", "Producción y almacenamiento de hidrógeno, tipos de pilas de combustible, rendimiento del sistema, seguridad"],
      ["Economía y análisis del ciclo de vida", "Coste nivelado de la energía, plazo de recuperación y valor actual neto, carbono incorporado, diseño para la reparación y el reciclaje"]
    ]
  }
};
