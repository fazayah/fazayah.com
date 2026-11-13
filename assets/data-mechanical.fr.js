/* Mechanical engineering catalog: French text, keyed by course code. */
window.FAZAYAH.mechanicalText.fr = {
  "ME-101": {
    title: "Introduction au génie mécanique",
    summary: "Découvrez comment les machines transmettent les efforts, le mouvement et l'énergie, et apprenez les unités, les estimations et les étapes de conception sur lesquelles reposent tous les cours suivants.",
    prereq: "Physique et mathématiques du lycée. Aucune expérience de l'atelier ou de l'industrie n'est requise.",
    outcome: "Une étude de conception détaillée d'une machine simple : ses charges, ses besoins en puissance, le choix d'un matériau et un court rapport.",
    modules: [
      ["Le métier d'ingénieur mécanicien", "Domaines d'activité, démarche de conception, codes et normes, éthique professionnelle"],
      ["Unités, dimensions et estimation", "Unités SI et unités usuelles américaines, chiffres significatifs, vérifications dimensionnelles, estimations d'ordre de grandeur"],
      ["Forces et mouvement", "Lois de Newton, schémas du corps isolé, frottement, travail et puissance"],
      ["Énergie et chaleur", "Formes d'énergie, conservation de l'énergie, rendement, température et chaleur"],
      ["Les matériaux et leurs modes de ruine", "Métaux, polymères, céramiques et composites ; contraintes et déformations ; aperçu de la plastification, de la rupture et de la fatigue"],
      ["Machines et mécanismes", "Leviers, engrenages, courroies et roulements ; moteurs thermiques, moteurs électriques et pompes ; lecture d'une machine en tant que système"]
    ]
  },
  "ME-102": {
    title: "Dessin technique et CAO",
    summary: "Lisez et produisez des dessins à partir desquels un atelier peut fabriquer, puis modélisez des pièces et des assemblages en CAO 3D.",
    prereq: "Aucun. Peut être suivi en parallèle de ME-101.",
    outcome: "Un dossier de plans complet pour un petit assemblage : modèles 3D, dessins de définition cotés et tolérancés, et nomenclature.",
    modules: [
      ["Croquis et projections", "Croquis à main levée, vues orthogonales, vues isométriques, projection européenne et projection américaine"],
      ["Coupes et cotation", "Vues en coupe et vues de détail, règles de cotation, échelles, cartouches"],
      ["Tolérances et ajustements", "Écarts limites et ajustements, chaînes de cotes, symboles d'état de surface"],
      ["Cotation fonctionnelle et tolérancement géométrique", "Références, tolérances de forme, d'orientation, de position et de battement ; lecture des cadres de tolérance"],
      ["Modélisation 3D des pièces", "Esquisses et contraintes, fonctions, intention de conception, modifications paramétriques"],
      ["Assemblages et mises en plan à partir de la CAO", "Contraintes d'assemblage, détection des interférences, vues éclatées, nomenclatures, diffusion et révisions des plans"]
    ]
  },
  "ME-103": {
    title: "Statique et dynamique",
    summary: "Déterminez les efforts dans les structures au repos et prévoyez le mouvement des points matériels et des solides rigides.",
    prereq: "ME-101, ainsi que l'algèbre, la trigonométrie et les bases du calcul différentiel et intégral.",
    outcome: "Une analyse complète des efforts dans un treillis et dans un portique, et une étude du mouvement d'un mécanisme confrontée à une simulation numérique.",
    modules: [
      ["Systèmes de forces et équilibre", "Vecteurs, moments et couples, systèmes équivalents, équilibre en deux et trois dimensions"],
      ["Structures", "Treillis par la méthode des nœuds et la méthode des sections, portiques et machines, efforts intérieurs"],
      ["Charges réparties et frottement", "Centres de gravité, moments quadratiques des sections, frottement sec, coins, vis et courroies"],
      ["Cinématique du point et du solide rigide", "Mouvement rectiligne et curviligne, mouvement relatif, rotation, centres instantanés de rotation"],
      ["Cinétique : force et accélération", "Deuxième loi de Newton pour le point matériel et le solide rigide, moment d'inertie massique"],
      ["Travail, énergie et quantité de mouvement", "Théorème de l'énergie cinétique, conservation de l'énergie, impulsion et quantité de mouvement, chocs"]
    ]
  },
  "ME-201": {
    title: "Résistance des matériaux",
    summary: "Calculez les contraintes et les déformées des pièces sous charge, et déterminez si elles sont assez résistantes et assez rigides.",
    prereq: "ME-103.",
    outcome: "Un arbre et une poutre dimensionnés pour des charges données, avec vérifications des contraintes, de la flèche et du flambement, et un coefficient de sécurité explicite.",
    modules: [
      ["Contraintes, déformations et propriétés des matériaux", "Contraintes normales et tangentielles, loi de Hooke, coefficient de Poisson, essai de traction, coefficient de sécurité"],
      ["Traction-compression et torsion", "Déformation des barres, éléments hyperstatiques, contraintes thermiques, torsion des arbres circulaires"],
      ["Flexion des poutres", "Diagrammes de l'effort tranchant et du moment fléchissant, contraintes de flexion, contraintes de cisaillement dans les poutres, sections composites"],
      ["Déformée des poutres", "Ligne élastique, méthodes d'intégration et de superposition, poutres hyperstatiques"],
      ["Sollicitations composées et transformation des contraintes", "Contraintes principales, cercle de Mohr, réservoirs sous pression à paroi mince, jauges de déformation"],
      ["Flambement et critères de résistance", "Flambement d'Euler des poteaux, critères de Tresca et de von Mises, concentrations de contraintes"]
    ]
  },
  "ME-202": {
    title: "Thermodynamique appliquée",
    summary: "Appliquez les principes de la thermodynamique aux moteurs, aux centrales, aux machines frigorifiques et aux pompes à chaleur.",
    prereq: "ME-101 et les bases du calcul différentiel et intégral.",
    outcome: "Une analyse complète d'un cycle moteur à vapeur et d'un cycle frigorifique, avec le rendement, les pertes et des propositions d'amélioration.",
    modules: [
      ["Propriétés des corps purs", "Phases, tables et diagrammes thermodynamiques, gaz parfait et gaz réels"],
      ["Le premier principe", "Chaleur et travail, systèmes fermés, volumes de contrôle, machines en régime permanent : turbines, compresseurs, tuyères et échangeurs de chaleur"],
      ["Le second principe et l'entropie", "Moteurs thermiques et machines frigorifiques, cycle de Carnot, entropie, rendement isentropique"],
      ["Exergie", "Travail utilisable, irréversibilités, rendement exergétique"],
      ["Cycles moteurs", "Cycle de Rankine avec resurchauffe et soutirages, cycles d'Otto et de Diesel, cycle de Brayton, cycles combinés"],
      ["Réfrigération, pompes à chaleur et air humide", "Cycles à compression de vapeur, fluides frigorigènes et leur potentiel de réchauffement planétaire, psychrométrie"]
    ]
  },
  "ME-203": {
    title: "Mécanique des fluides",
    summary: "Prévoyez les pressions, les débits et les efforts dans les liquides et les gaz, et dimensionnez les conduites et les pompes qui les transportent.",
    prereq: "ME-103 et les bases du calcul différentiel et intégral.",
    outcome: "Un réseau de conduites dimensionné avec la pompe choisie, comprenant les pertes de charge, le point de fonctionnement et une vérification à la cavitation.",
    modules: [
      ["Propriétés des fluides et statique", "Masse volumique et viscosité, variation de la pression, manomètres, efforts sur les surfaces immergées, poussée d'Archimède"],
      ["Lois de conservation pour les fluides en écoulement", "Volumes de contrôle, équations de continuité, de quantité de mouvement et d'énergie, équation de Bernoulli"],
      ["Analyse dimensionnelle et similitude", "Théorème de Vaschy-Buckingham, nombres de Reynolds et de Mach, essais sur maquette"],
      ["Écoulements en conduite", "Écoulements laminaire et turbulent, coefficient de perte de charge, pertes de charge singulières, réseaux de conduites"],
      ["Écoulements externes", "Couches limites, traînée et portance, décollement de l'écoulement"],
      ["Pompes, ventilateurs et turbines", "Courbes caractéristiques, courbes de réseau, lois de similitude, cavitation et NPSH (hauteur de charge nette à l'aspiration)"]
    ]
  },
  "ME-204": {
    title: "Matériaux et procédés de fabrication",
    summary: "Choisissez les matériaux et les procédés qui les mettent en forme, et concevez des pièces réalisables à un coût raisonnable.",
    prereq: "ME-101 et ME-102.",
    outcome: "Un plan de fabrication pour une pièce : matériau, gamme de fabrication, tolérances, méthode de contrôle et estimation du coût.",
    modules: [
      ["Structure et propriétés des matériaux", "Structure cristalline, diagrammes de phases, système fer-carbone, traitements thermiques des aciers"],
      ["Choix des matériaux", "Diagrammes de propriétés, aciers, alliages d'aluminium et de titane, polymères et composites, corrosion"],
      ["Fonderie, mise en forme et moulage", "Moulage en sable et moulage sous pression, forgeage, laminage, extrusion, travail des tôles, moulage par injection"],
      ["Usinage", "Tournage, fraisage, perçage et rectification ; outils de coupe et durée de vie des outils ; bases de la programmation CN"],
      ["Assemblage et fabrication additive", "Procédés de soudage et défauts de soudure, brasage, collage, impression 3D métal et polymère"],
      ["Qualité et coûts", "Métrologie, maîtrise statistique des procédés, conception en vue de la fabrication et de l'assemblage, estimation des coûts"]
    ]
  },
  "ME-205": {
    title: "Cinématique et dynamique des machines",
    summary: "Analysez et concevez les mécanismes articulés, les cames et les trains d'engrenages qui transforment un mouvement en un autre.",
    prereq: "ME-103.",
    outcome: "Un mécanisme à quatre barres et une came conçus pour un mouvement imposé, avec l'analyse des vitesses, des accélérations et des efforts.",
    modules: [
      ["Mécanismes et mobilité", "Pièces, liaisons et chaînes cinématiques, degrés de liberté, condition de Grashof"],
      ["Analyse des positions, des vitesses et des accélérations", "Méthodes graphiques et analytiques, fermetures vectorielles, centres instantanés de rotation"],
      ["Synthèse des mécanismes articulés", "Synthèse à deux et trois positions, génération de fonction et de trajectoire, angle de transmission"],
      ["Cames", "Types de suiveurs, lois de mouvement, profils de came, angle de pression et rayon de courbure"],
      ["Engrenages et trains d'engrenages", "Loi de l'engrènement, dentures en développante de cercle, trains simples, composés et épicycloïdaux"],
      ["Efforts dynamiques et équilibrage", "Efforts d'inertie, volants d'inertie, équilibrage des masses tournantes et des masses en mouvement alternatif"]
    ]
  },
  "ME-301": {
    title: "Construction mécanique",
    summary: "Concevez des arbres, des roulements, des engrenages, des éléments de fixation et des ressorts qui résistent à leurs charges pendant la durée de vie requise.",
    prereq: "ME-201 et ME-205.",
    outcome: "La conception complète d'un réducteur : arbres, engrenages, roulements et éléments de fixation, avec notes de calcul et dessins de fabrication.",
    modules: [
      ["Rupture statique et fatigue", "Critères de résistance, concentration de contraintes, courbes S–N, influence de la contrainte moyenne, cumul d'endommagement"],
      ["Arbres et composants associés", "Architecture de l'arbre, contraintes et déformations, vitesse critique, clavettes, cannelures et accouplements"],
      ["Roulements et lubrification", "Choix et durée de vie des roulements, paliers lisses, régimes de lubrification, étanchéité"],
      ["Engrenages", "Engrenages droits, hélicoïdaux, coniques et à roue et vis sans fin ; résistance à la flexion en pied de dent et à la pression superficielle ; matériaux pour engrenages"],
      ["Éléments de fixation et assemblages", "Fixations filetées, précontrainte et raideur de l'assemblage, assemblages boulonnés en fatigue, assemblages soudés"],
      ["Ressorts, freins et transmissions", "Ressorts hélicoïdaux, embrayages et freins, transmissions par courroie et par chaîne, choix d'un moteur"]
    ]
  },
  "ME-302": {
    title: "Transfert thermique et CVC",
    summary: "Calculez la conduction, la convection et le rayonnement, puis concevez des échangeurs de chaleur et des installations de traitement climatique des bâtiments.",
    prereq: "ME-202 et ME-203.",
    outcome: "Un échangeur de chaleur dimensionné et un projet de climatisation pour un petit bâtiment, avec le bilan thermique et le choix des équipements.",
    modules: [
      ["Conduction", "Loi de Fourier, résistance thermique, ailettes, conduction en régime transitoire et modèle à température uniforme"],
      ["Convection", "Couches limites thermiques, convection forcée en conduite et sur des surfaces, convection naturelle, corrélations"],
      ["Rayonnement", "Corps noirs et corps gris, facteurs de forme, échanges radiatifs entre surfaces"],
      ["Échangeurs de chaleur", "Types d'échangeurs, différence de température logarithmique moyenne, méthode NUT-efficacité, encrassement"],
      ["Ébullition et condensation", "Ébullition en vase et ébullition convective, flux critique, condensation en film, caloducs"],
      ["Installations CVC", "Confort et qualité de l'air, charges de chauffage et de climatisation, centrales de traitement d'air, dimensionnement des réseaux de gaines, pompes à chaleur et fluides frigorigènes à faible PRP"]
    ]
  },
  "ME-303": {
    title: "Vibrations et automatique",
    summary: "Modélisez les vibrations et la réponse des machines, puis concevez des régulateurs en boucle fermée qui les maintiennent stables et précises.",
    prereq: "ME-103 et les équations différentielles ordinaires.",
    outcome: "Une isolation vibratoire conçue pour une machine et un asservissement de position réglé pour un moteur, tous deux vérifiés en simulation.",
    modules: [
      ["Vibrations des systèmes à un degré de liberté", "Réponses libre et forcée, amortissement, résonance, transmissibilité et isolation"],
      ["Systèmes à plusieurs degrés de liberté", "Fréquences propres et modes propres, absorbeurs de vibrations, analyse modale"],
      ["Mesure et diagnostic vibratoires", "Accéléromètres, spectres en fréquence, balourd et désalignement, surveillance de l'état des machines"],
      ["Modélisation des systèmes dynamiques", "Fonctions de transfert, schémas-blocs, représentation d'état, analogies mécaniques et électriques"],
      ["Boucle fermée et stabilité", "Réponse temporelle, erreur statique, lieu des racines, méthodes de Bode et de Nyquist, marges de stabilité"],
      ["Synthèse des correcteurs", "Régulation PID et réglage, correcteurs à avance et à retard de phase, mise en œuvre numérique"]
    ]
  },
  "ME-304": {
    title: "Ingénierie assistée par ordinateur : éléments finis et CFD",
    summary: "Menez des simulations par éléments finis et de mécanique des fluides numérique, et sachez quand vous fier aux résultats.",
    prereq: "ME-201 et ME-203. ME-302 est recommandé.",
    outcome: "Une analyse de contraintes et une analyse d'écoulement d'une pièce réelle, chacune avec une étude de maillage, une vérification par calcul manuel et un rapport.",
    modules: [
      ["Principe de la méthode des éléments finis", "Matrices de rigidité, types d'éléments, fonctions de forme, assemblage et résolution"],
      ["Construction d'un modèle de structure", "Nettoyage de la géométrie, maillage, chargements et conditions aux limites, contact, matériaux"],
      ["Au-delà de la statique linéaire", "Analyse modale et analyse de flambement, matériaux non linéaires, grands déplacements, fatigue à partir des résultats éléments finis"],
      ["Principe de la CFD", "Équations de Navier–Stokes, méthode des volumes finis, discrétisation et solveurs"],
      ["Turbulence et transfert thermique en CFD", "Modèles de turbulence, traitement des parois, transfert thermique conjugué, écoulements instationnaires"],
      ["Se fier aux résultats de simulation", "Convergence en maillage, vérification et validation, confrontation aux calculs manuels et aux données d'essais"]
    ]
  },
  "ME-305": {
    title: "Mécatronique et robotique",
    summary: "Associez mécanique, électronique et logiciel pour créer des machines qui perçoivent, décident et se déplacent.",
    prereq: "ME-205 et ME-303. Bases de la programmation.",
    outcome: "Un système de commande de mouvement fonctionnel sur microcontrôleur et un bras robotisé simulé qui suit une trajectoire planifiée.",
    modules: [
      ["Capteurs et signaux", "Capteurs de position, de force, de température et de vision ; conditionnement du signal ; échantillonnage et bruit"],
      ["Actionneurs et commande de puissance", "Moteurs à courant continu, pas à pas et servomoteurs, variateurs et cartes de commande de moteurs, actionneurs pneumatiques et hydrauliques"],
      ["Microcontrôleurs et programmation embarquée", "Entrées et sorties numériques et analogiques, temporisateurs et interruptions, communication série"],
      ["Cinématique des robots", "Repères et transformations, modèles géométriques direct et inverse, matrice jacobienne"],
      ["Planification et commande du mouvement", "Génération de trajectoires, commande articulaire, aperçu de la navigation des robots mobiles"],
      ["Automatisation industrielle", "Automates programmables industriels, réseaux industriels, sécurité des machines, robots collaboratifs"]
    ]
  },
  "ME-306": {
    title: "Systèmes énergétiques et écoconception",
    summary: "Concevez et comparez des systèmes de production d'énergie, de propulsion et de stockage d'énergie selon leurs performances, leur coût et leurs émissions.",
    prereq: "ME-202 et ME-203.",
    outcome: "Une comparaison de deux conceptions de système énergétique pour une même application : performances, coût sur la durée de vie et empreinte carbone.",
    modules: [
      ["Moteurs et turbines à gaz", "Performances et émissions des moteurs, suralimentation par turbocompresseur, composants d'une turbine à gaz, cogénération"],
      ["Éolien, hydraulique et solaire", "Aérodynamique des éoliennes, turbines hydrauliques, capteurs solaires thermiques, bases des installations photovoltaïques"],
      ["Stockage de l'énergie", "Batteries, stations de transfert d'énergie par pompage, stockage thermique, volants d'inertie, dimensionnement d'un stockage pour une charge donnée"],
      ["Véhicules électriques", "Aperçu des moteurs et de l'électronique de puissance, packs de batteries et gestion thermique, dimensionnement de la chaîne de traction"],
      ["Hydrogène et piles à combustible", "Production et stockage de l'hydrogène, types de piles à combustible, rendement du système, sécurité"],
      ["Économie et analyse du cycle de vie", "Coût actualisé de l'énergie, temps de retour sur investissement et valeur actuelle nette, carbone gris, conception en vue de la réparation et du recyclage"]
    ]
  }
};
