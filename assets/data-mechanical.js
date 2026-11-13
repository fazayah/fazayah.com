/* Mechanical engineering catalog. This file holds the course facts and the English text.
   The other languages are in data-mechanical.<lang>.js, keyed by course code, with the
   same fields: title, summary, prereq, outcome, and modules as [title, topics]. */
window.FAZAYAH.mechanicalText = {};
window.FAZAYAH.mechanical = [
  {
    code: "ME-101", level: "beginner", weeks: 8, lessons: 60, projects: 4,
    stack: ["SI units", "Free-body diagrams", "Energy balances", "Spreadsheets"],
    t: { en: {
      title: "Introduction to Mechanical Engineering",
      summary: "See how machines carry force, motion and energy, and learn the units, estimates and design steps every later course relies on.",
      prereq: "Secondary-school physics and maths. No workshop or industry experience needed.",
      outcome: "A worked design study of a simple machine: its loads, its power needs, a material choice and a short report.",
      modules: [
        ["What mechanical engineers do", "Fields of work, the design process, codes and standards, professional ethics"],
        ["Units, dimensions and estimation", "SI and US customary units, significant figures, dimensional checks, order-of-magnitude estimates"],
        ["Forces and motion", "Newton's laws, free-body diagrams, friction, work and power"],
        ["Energy and heat", "Forms of energy, conservation of energy, efficiency, temperature and heat"],
        ["Materials and how they fail", "Metals, polymers, ceramics and composites; stress and strain; yielding, fracture and fatigue in outline"],
        ["Machines and mechanisms", "Levers, gears, belts and bearings; engines, motors and pumps; reading a machine as a system"]
      ]
    } }
  },
  {
    code: "ME-102", level: "beginner", weeks: 8, lessons: 58, projects: 4,
    stack: ["Orthographic projection", "GD&T (ASME Y14.5, ISO GPS)", "Parametric CAD", "Assembly drawings"],
    t: { en: {
      title: "Engineering Drawing and CAD",
      summary: "Read and produce drawings a workshop can build from, then model parts and assemblies in 3D CAD.",
      prereq: "None. Can be taken alongside ME-101.",
      outcome: "A complete drawing pack for a small assembly: 3D models, dimensioned part drawings with tolerances, and a bill of materials.",
      modules: [
        ["Sketching and projection", "Freehand sketching, orthographic views, isometric views, first- and third-angle projection"],
        ["Sections and dimensions", "Section and detail views, dimensioning rules, scales, title blocks"],
        ["Tolerances and fits", "Limits and fits, tolerance stack-up, surface finish symbols"],
        ["Geometric dimensioning and tolerancing", "Datums, form, orientation, position and runout controls; reading feature control frames"],
        ["3D part modelling", "Sketches and constraints, features, design intent, parametric changes"],
        ["Assemblies and drawings from CAD", "Mates, interference checks, exploded views, bills of materials, drawing release and revisions"]
      ]
    } }
  },
  {
    code: "ME-103", level: "beginner", weeks: 10, lessons: 72, projects: 3,
    stack: ["Vector mechanics", "Truss analysis", "Work–energy methods", "Python or MATLAB"],
    t: { en: {
      title: "Statics and Dynamics",
      summary: "Find the forces in structures at rest and predict the motion of particles and rigid bodies.",
      prereq: "ME-101, plus algebra, trigonometry and introductory calculus.",
      outcome: "A full force analysis of a truss and a frame, and a motion study of a mechanism checked against a numerical simulation.",
      modules: [
        ["Force systems and equilibrium", "Vectors, moments and couples, equivalent systems, equilibrium in two and three dimensions"],
        ["Structures", "Trusses by joints and sections, frames and machines, internal forces"],
        ["Distributed loads and friction", "Centroids, moments of inertia of areas, dry friction, wedges, screws and belts"],
        ["Kinematics of particles and rigid bodies", "Rectilinear and curvilinear motion, relative motion, rotation, instantaneous centres"],
        ["Kinetics: force and acceleration", "Newton's second law for particles and rigid bodies, mass moment of inertia"],
        ["Work, energy and momentum", "Work–energy principle, conservation of energy, impulse and momentum, impact"]
      ]
    } }
  },
  {
    code: "ME-201", level: "intermediate", weeks: 10, lessons: 70, projects: 3,
    stack: ["Stress–strain curves", "Shear and moment diagrams", "Mohr's circle", "Tensile testing"],
    t: { en: {
      title: "Mechanics of Materials",
      summary: "Calculate the stresses and deflections in loaded parts and decide whether they are strong and stiff enough.",
      prereq: "ME-103.",
      outcome: "A sized shaft and beam for given loads, with stress, deflection and buckling checks and a stated factor of safety.",
      modules: [
        ["Stress, strain and material properties", "Normal and shear stress, Hooke's law, Poisson's ratio, the tensile test, factor of safety"],
        ["Axial loading and torsion", "Deformation of bars, statically indeterminate members, thermal stress, torsion of circular shafts"],
        ["Bending of beams", "Shear and moment diagrams, bending stress, shear stress in beams, composite sections"],
        ["Beam deflection", "The elastic curve, integration and superposition methods, statically indeterminate beams"],
        ["Combined loading and stress transformation", "Principal stresses, Mohr's circle, thin-walled pressure vessels, strain gauges"],
        ["Buckling and failure criteria", "Euler buckling of columns, maximum shear stress and von Mises criteria, stress concentrations"]
      ]
    } }
  },
  {
    code: "ME-202", level: "intermediate", weeks: 10, lessons: 68, projects: 3,
    stack: ["Steam tables", "T–s and P–h diagrams", "Cycle analysis", "CoolProp"],
    t: { en: {
      title: "Engineering Thermodynamics",
      summary: "Apply the laws of thermodynamics to engines, power plants, refrigerators and heat pumps.",
      prereq: "ME-101 and introductory calculus.",
      outcome: "A complete analysis of a steam power cycle and a refrigeration cycle, with efficiency, losses and proposed improvements.",
      modules: [
        ["Properties of pure substances", "Phases, property tables and diagrams, the ideal gas and real gases"],
        ["The first law", "Heat and work, closed systems, control volumes, steady-flow devices: turbines, compressors, nozzles and heat exchangers"],
        ["The second law and entropy", "Heat engines and refrigerators, the Carnot cycle, entropy, isentropic efficiency"],
        ["Exergy", "Available work, irreversibility, second-law efficiency"],
        ["Power cycles", "Rankine cycle with reheat and regeneration, Otto and Diesel cycles, Brayton cycle, combined cycles"],
        ["Refrigeration, heat pumps and moist air", "Vapour-compression cycles, refrigerants and their global warming potential, psychrometrics"]
      ]
    } }
  },
  {
    code: "ME-203", level: "intermediate", weeks: 10, lessons: 68, projects: 3,
    stack: ["Bernoulli equation", "Moody chart", "Pump curves", "Dimensional analysis"],
    t: { en: {
      title: "Fluid Mechanics",
      summary: "Predict pressures, flows and forces in liquids and gases, and size the pipes and pumps that move them.",
      prereq: "ME-103 and introductory calculus.",
      outcome: "A designed pipe network with a selected pump, including head losses, the operating point and a cavitation check.",
      modules: [
        ["Fluid properties and statics", "Density and viscosity, pressure variation, manometers, forces on submerged surfaces, buoyancy"],
        ["Conservation laws for flowing fluids", "Control volumes, continuity, momentum and energy equations, the Bernoulli equation"],
        ["Dimensional analysis and similarity", "Buckingham pi theorem, Reynolds and Mach numbers, model testing"],
        ["Flow in pipes", "Laminar and turbulent flow, friction factor, minor losses, pipe networks"],
        ["External flow", "Boundary layers, drag and lift, flow separation"],
        ["Pumps, fans and turbines", "Performance curves, system curves, affinity laws, cavitation and net positive suction head"]
      ]
    } }
  },
  {
    code: "ME-204", level: "intermediate", weeks: 10, lessons: 70, projects: 3,
    stack: ["Phase diagrams", "Heat treatment", "CNC machining", "Additive manufacturing"],
    t: { en: {
      title: "Materials and Manufacturing Processes",
      summary: "Choose materials and the processes that shape them, and design parts that can be made at a sensible cost.",
      prereq: "ME-101 and ME-102.",
      outcome: "A manufacturing plan for one part: material, process route, tolerances, inspection method and a cost estimate.",
      modules: [
        ["Structure and properties of materials", "Crystal structure, phase diagrams, the iron–carbon system, heat treatment of steels"],
        ["Material selection", "Property charts, steels, aluminium and titanium alloys, polymers and composites, corrosion"],
        ["Casting, forming and moulding", "Sand and die casting, forging, rolling, extrusion, sheet-metal work, injection moulding"],
        ["Machining", "Turning, milling, drilling and grinding; cutting tools and tool life; CNC programming basics"],
        ["Joining and additive manufacturing", "Welding processes and weld defects, brazing, adhesives, metal and polymer 3D printing"],
        ["Quality and cost", "Metrology, statistical process control, design for manufacture and assembly, cost estimation"]
      ]
    } }
  },
  {
    code: "ME-205", level: "intermediate", weeks: 9, lessons: 62, projects: 3,
    stack: ["Linkage synthesis", "Cam profiles", "Gear trains", "Balancing"],
    t: { en: {
      title: "Kinematics and Dynamics of Machinery",
      summary: "Analyse and design the linkages, cams and gear trains that turn one motion into another.",
      prereq: "ME-103.",
      outcome: "A designed four-bar linkage and cam for a specified motion, with velocity, acceleration and force analysis.",
      modules: [
        ["Mechanisms and mobility", "Links, joints and kinematic chains, degrees of freedom, Grashof's condition"],
        ["Position, velocity and acceleration analysis", "Graphical and analytical methods, vector loops, instantaneous centres"],
        ["Linkage synthesis", "Two- and three-position synthesis, function and path generation, transmission angle"],
        ["Cams", "Follower types, motion programs, cam profiles, pressure angle and radius of curvature"],
        ["Gears and gear trains", "The law of gearing, involute teeth, simple, compound and planetary trains"],
        ["Dynamic forces and balancing", "Inertia forces, flywheels, balancing of rotating and reciprocating masses"]
      ]
    } }
  },
  {
    code: "ME-301", level: "advanced", weeks: 10, lessons: 70, projects: 3,
    stack: ["S–N curves", "Goodman diagram", "Bearing life (ISO 281)", "Gear rating (AGMA, ISO 6336)"],
    t: { en: {
      title: "Machine Design",
      summary: "Design shafts, bearings, gears, fasteners and springs that survive their loads for the life you need.",
      prereq: "ME-201 and ME-205.",
      outcome: "A complete gearbox design: shafts, gears, bearings and fasteners, with calculations and manufacturing drawings.",
      modules: [
        ["Static failure and fatigue", "Failure theories, stress concentration, S–N curves, mean stress effects, cumulative damage"],
        ["Shafts and their components", "Shaft layout, stress and deflection, critical speed, keys, splines and couplings"],
        ["Bearings and lubrication", "Rolling bearing selection and life, journal bearings, lubrication regimes, seals"],
        ["Gears", "Spur, helical, bevel and worm gears; tooth bending and surface strength; gear materials"],
        ["Fasteners and joints", "Threaded fasteners, preload and joint stiffness, bolted joints in fatigue, welded joints"],
        ["Springs, brakes and drives", "Helical springs, clutches and brakes, belt and chain drives, selecting a motor"]
      ]
    } }
  },
  {
    code: "ME-302", level: "advanced", weeks: 9, lessons: 64, projects: 3,
    stack: ["Thermal resistance networks", "NTU–effectiveness", "Psychrometric chart", "Cooling load calculation"],
    t: { en: {
      title: "Heat Transfer and HVAC",
      summary: "Calculate conduction, convection and radiation, then design heat exchangers and building climate systems.",
      prereq: "ME-202 and ME-203.",
      outcome: "A sized heat exchanger and an air-conditioning design for a small building, with load calculations and equipment selection.",
      modules: [
        ["Conduction", "Fourier's law, thermal resistance, fins, transient conduction and lumped capacitance"],
        ["Convection", "Thermal boundary layers, forced convection in pipes and over surfaces, natural convection, correlations"],
        ["Radiation", "Black and grey bodies, view factors, radiation exchange between surfaces"],
        ["Heat exchangers", "Exchanger types, log mean temperature difference, NTU–effectiveness method, fouling"],
        ["Boiling and condensation", "Pool and flow boiling, critical heat flux, film condensation, heat pipes"],
        ["HVAC systems", "Comfort and air quality, heating and cooling loads, air-handling units, duct design, heat pumps and low-GWP refrigerants"]
      ]
    } }
  },
  {
    code: "ME-303", level: "advanced", weeks: 10, lessons: 68, projects: 3,
    stack: ["Modal analysis", "Bode plots", "PID tuning", "MATLAB or Python control libraries"],
    t: { en: {
      title: "Vibrations and Control Systems",
      summary: "Model how machines vibrate and respond, then design feedback controllers that keep them stable and accurate.",
      prereq: "ME-103 and ordinary differential equations.",
      outcome: "A vibration isolation design for a machine and a tuned position controller for a motor, both verified in simulation.",
      modules: [
        ["Single-degree-of-freedom vibration", "Free and forced response, damping, resonance, transmissibility and isolation"],
        ["Multi-degree-of-freedom systems", "Natural frequencies and mode shapes, vibration absorbers, modal analysis"],
        ["Vibration measurement and diagnosis", "Accelerometers, frequency spectra, unbalance and misalignment, condition monitoring"],
        ["Modelling dynamic systems", "Transfer functions, block diagrams, state-space models, mechanical and electrical analogies"],
        ["Feedback and stability", "Time response, steady-state error, root locus, Bode and Nyquist methods, stability margins"],
        ["Controller design", "PID control and tuning, lead and lag compensation, digital implementation"]
      ]
    } }
  },
  {
    code: "ME-304", level: "advanced", weeks: 9, lessons: 62, projects: 3,
    stack: ["Finite element method", "Finite volume method", "Mesh convergence", "Verification and validation"],
    t: { en: {
      title: "Computer-Aided Engineering: FEA and CFD",
      summary: "Run finite element and computational fluid dynamics simulations, and know when to trust the results.",
      prereq: "ME-201 and ME-203. ME-302 is recommended.",
      outcome: "A stress analysis and a flow analysis of a real part, each with a mesh study, a hand-calculation check and a report.",
      modules: [
        ["How the finite element method works", "Stiffness matrices, element types, shape functions, assembly and solution"],
        ["Building a structural model", "Geometry clean-up, meshing, loads and boundary conditions, contact, materials"],
        ["Beyond linear statics", "Modal and buckling analysis, non-linear materials, large deflection, fatigue from FEA results"],
        ["How CFD works", "The Navier–Stokes equations, the finite volume method, discretization and solvers"],
        ["Turbulence and heat transfer in CFD", "Turbulence models, wall treatment, conjugate heat transfer, transient flows"],
        ["Trusting simulation results", "Mesh convergence, verification and validation, checks against hand calculations and test data"]
      ]
    } }
  },
  {
    code: "ME-305", level: "advanced", weeks: 9, lessons: 60, projects: 4,
    stack: ["Microcontrollers", "Sensors and actuators", "Robot kinematics", "ROS 2"],
    t: { en: {
      title: "Mechatronics and Robotics",
      summary: "Combine mechanics, electronics and software into machines that sense, decide and move.",
      prereq: "ME-205 and ME-303. Basic programming.",
      outcome: "A working motion-control system on a microcontroller and a simulated robot arm that follows a planned path.",
      modules: [
        ["Sensors and signals", "Position, force, temperature and vision sensors; signal conditioning; sampling and noise"],
        ["Actuators and drives", "DC, stepper and servo motors, motor drivers, pneumatic and hydraulic actuators"],
        ["Microcontrollers and embedded programming", "Digital and analogue input and output, timers and interrupts, serial communication"],
        ["Robot kinematics", "Coordinate frames and transformations, forward and inverse kinematics, the Jacobian"],
        ["Motion planning and control", "Trajectory generation, joint control, mobile robot navigation in outline"],
        ["Industrial automation", "Programmable logic controllers, industrial networks, machine safety, collaborative robots"]
      ]
    } }
  },
  {
    code: "ME-306", level: "advanced", weeks: 8, lessons: 54, projects: 3,
    stack: ["Turbine and engine maps", "Battery and motor sizing", "Levelized cost of energy", "Life-cycle assessment"],
    t: { en: {
      title: "Energy Systems and Sustainable Design",
      summary: "Design and compare power, propulsion and energy-storage systems for performance, cost and emissions.",
      prereq: "ME-202 and ME-203.",
      outcome: "A comparison of two energy system designs for one application: performance, lifetime cost and carbon footprint.",
      modules: [
        ["Engines and gas turbines", "Engine performance and emissions, turbocharging, gas turbine components, combined heat and power"],
        ["Wind, water and solar", "Wind turbine aerodynamics, hydro turbines, solar thermal collectors, photovoltaic system basics"],
        ["Energy storage", "Batteries, pumped hydro, thermal storage, flywheels, sizing storage for a load"],
        ["Electric vehicles", "Motors and power electronics in outline, battery packs and thermal management, drivetrain sizing"],
        ["Hydrogen and fuel cells", "Hydrogen production and storage, fuel cell types, system efficiency, safety"],
        ["Economics and life-cycle assessment", "Levelized cost of energy, payback and net present value, embodied carbon, design for repair and recycling"]
      ]
    } }
  }
];
