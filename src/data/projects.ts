export type ProjectCategory = 'simplon' | 'identite';

export interface ProjectScreen {
  title: string;
  group:
    | 'Recherche & Parcours'
    | 'Onboarding'
    | 'Navigation & Offres'
    | 'Assistant IA'
    | 'Architecture & Wireframes'
    | 'Charte & Logo'
    | 'Déclinaisons & Packaging';
  src: string;
  caption: string;
}

export interface PrototypeLink {
  label: string;
  url: string;
  role: 'habitant' | 'agent' | 'figma';
}

export interface ProjectItem {
  id: 'opportunite' | 'mairie' | 'keur' | 'navaro';
  index: string;
  title: string;
  subtitle: string;
  context: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  deliverables: string[];
  palette: [string, string, string];
  accentHex: string;
  featured?: boolean;
  screens?: ProjectScreen[];
  prototypeLinks?: PrototypeLink[];
}

export const PENCUM_SCREENS: ProjectScreen[] = [
  {
    title: 'Parcours Utilisateur (3 rôles)',
    group: 'Recherche & Parcours',
    src: '/assets/opt/Parcours_utilisateur_Pencum_Pikine_90991311.webp',
    caption: 'Architecture complète Habitant (Android), Agent/Partenaire (Web) et Administrateur.',
  },
  {
    title: 'Persona · Oumar (23 ans)',
    group: 'Recherche & Parcours',
    src: '/assets/opt/5_e78552a0.webp',
    caption: 'Tivaouane Diacksao, Pikine — cherche une formation qualifiante accessible en wolof.',
  },
  {
    title: 'Persona · Awa (26 ans)',
    group: 'Recherche & Parcours',
    src: '/assets/opt/6_25df20d9.webp',
    caption: 'Rue 10, Pikine — cherche des financements GIE et des fiches simples partageables sur WhatsApp.',
  },
  {
    title: '01 · Découvrir Pikine',
    group: 'Onboarding',
    src: '/assets/opt/01___D_couvrir_Pikine_5ca35d53.webp',
    caption: 'Premier écran d’accueil avec écoute audio en wolof intégrée dès l’ouverture.',
  },
  {
    title: '02 · Votre coup de pouce',
    group: 'Onboarding',
    src: '/assets/opt/02___Votre_coup_de_pouce_65879f20.webp',
    caption: 'Présentation de l’assistant de candidature (CV, lettre) accessible à tous.',
  },
  {
    title: '03 · Dalal ak jàmm !',
    group: 'Onboarding',
    src: '/assets/opt/03___Bienvenue_6a75672e.webp',
    caption: 'Écran de bienvenue identitaire avec logo Pencum Pikine et accès rapide.',
  },
  {
    title: '14 · Accueil Communauté',
    group: 'Navigation & Offres',
    src: '/assets/opt/14___Accueil_1906a6eb.webp',
    caption: 'Tableau d’accueil personnalisé avec Xibaar yi ci wolof et catégories rapides.',
  },
  {
    title: '15 · À la une · Formation',
    group: 'Navigation & Offres',
    src: '/assets/opt/15_____la_une___formation_fbabb803.webp',
    caption: 'Mise en avant des offres locales près de chez soi et résumé audio en wolof.',
  },
  {
    title: '16 · Explorer & Rechercher',
    group: 'Navigation & Offres',
    src: '/assets/opt/16___Recherche_ed5888c8.webp',
    caption: 'Recherche par métier, formation, bourse, stage ou activité.',
  },
  {
    title: '18 · Résultats filtrés',
    group: 'Navigation & Offres',
    src: '/assets/opt/18___R_sultats_fdc32d20.webp',
    caption: 'Cartes d’offres lisibles indiquant lieu, statut débutant et date de clôture.',
  },
  {
    title: '19 · Détail de l’opportunité',
    group: 'Navigation & Offres',
    src: '/assets/opt/19___D_tail_opportunit__99cf8565.webp',
    caption: 'Fiche complète avec résumé vocal, prérequis et contact direct de la structure.',
  },
  {
    title: '23 · Ton Assistant IA',
    group: 'Assistant IA',
    src: '/assets/opt/23___Assistant_IA_83db4b5d.webp',
    caption: 'Aide guidée pour rédiger un CV, une lettre de motivation ou une demande manuscrite.',
  },
  {
    title: '24 · Conversation IA',
    group: 'Assistant IA',
    src: '/assets/opt/24___Conversation_IA_80ba61f1.webp',
    caption: 'Accompagnement pas à pas adapté aux jeunes de Pikine.',
  },
];

export const MAIRIE_SLIDES: ProjectScreen[] = [
  {
    title: 'Parcours · Moussa Fall (Agent)',
    group: 'Recherche & Parcours',
    src: '/assets/opt/mairie_10.webp',
    caption: 'Courbe émotionnelle et solutions pour l’agent d’état civil : saisie numérique, recherche rapide et archivage sécurisé.',
  },
  {
    title: 'Parcours · Maimouna Diop (Citoyenne)',
    group: 'Recherche & Parcours',
    src: '/assets/opt/mairie_11.webp',
    caption: 'Déclaration de naissance sans files d’attente : liste de pièces, dépôt en ligne, paiement mobile et alerte « acte prêt ».',
  },
  {
    title: 'User Flow · Demande d’acte',
    group: 'Recherche & Parcours',
    src: '/assets/opt/mairie_13.webp',
    caption: 'Parcours complet étape par étape incluant vérification des pièces, paiement Wave / Orange Money et retrait.',
  },
  {
    title: 'Arborescence · SUNU_REGISTRE',
    group: 'Architecture & Wireframes',
    src: '/assets/opt/mairie_14.webp',
    caption: 'Architecture à double entrée : Portail citoyen public (7 rubriques) et Espace agent sécurisé (8 modules).',
  },
  {
    title: 'Wireframes Portail & Espace Agent',
    group: 'Architecture & Wireframes',
    src: '/assets/opt/mairie_16.webp',
    caption: 'Système complet de maquettes filaires couvrant les écrans citoyens et le back-office agent.',
  },
];

export const NAVARO_ASSETS: ProjectScreen[] = [
  {
    title: 'Charte Graphique · Flacon & Coffret Eau de Parfum',
    group: 'Charte & Logo',
    src: '/assets/opt/navaro_charte_full.webp',
    caption: 'Mise en scène du flacon Eau de Parfum (60 ml / 2 fl.oz.) et de son étui rigide sur podium prune.',
  },
  {
    title: 'Parfum NAVARO · Élégance florale rosée (100 ml)',
    group: 'Déclinaisons & Packaging',
    src: '/assets/opt/Parfum_NAVARO___l_gance_florale_ros_e_62d6cd68.webp',
    caption: 'Campagne produit Eau de Parfum 100 ml · Vaporisateur Natural Spray dans un écrin floral rose et or.',
  },
  {
    title: 'Mockup Logo sur Satin Prune',
    group: 'Déclinaisons & Packaging',
    src: '/assets/opt/Logo_Mockup_2_e1e9b26a.webp',
    caption: 'Application du logotype blanc sur textile satiné prune pour l’univers de marque luxueux.',
  },
  {
    title: 'Cartes de visite · Édition Bois & Pierre',
    group: 'Déclinaisons & Packaging',
    src: '/assets/opt/Free_Premium_Business_Card_Mockup_PSD_b144ec73.webp',
    caption: 'Mise en situation sur bois et pierre des cartes « NAVARO Parfumerie 100% Authentique » (Nord Foire, Dakar).',
  },
  {
    title: 'Sac Boutique Luxe · Packaging',
    group: 'Déclinaisons & Packaging',
    src: '/assets/opt/Free_Low_Angle_Shopping_Bag_Mockup_PSD_96250d9d.webp',
    caption: 'Sac shopping boutique en rose magenta framboise avec cordelette dorée et signature NAVARO.',
  },
  {
    title: 'Magazine Éditorial · Édition Parfum N°01',
    group: 'Déclinaisons & Packaging',
    src: '/assets/opt/NAVARO_Magazine_3a3dce5b.webp',
    caption: 'Couverture éditoriale « L’Éclat du Prestige » (Automne 2026) valorisant l’univers olfactif NAVARO.',
  },
  {
    title: 'Casquette Signature · Broderie Magenta',
    group: 'Déclinaisons & Packaging',
    src: '/assets/opt/NAVARO_Casquette_b980a0f2.webp',
    caption: 'Déclinaison textile noire avec logotype NAVARO brodé en fil magenta framboise.',
  },
];

export const KER_FACILE_SCREENS: ProjectScreen[] = [
  {
    title: '01 · Écran Splash Kër Facile',
    group: 'Onboarding',
    src: '/assets/opt/Connexion-1_343adf9b.webp',
    caption: 'Écran d’ouverture identitaire mettant en valeur le logotype géométrique Kër Facile.',
  },
  {
    title: '02 · Connexion',
    group: 'Onboarding',
    src: '/assets/opt/Connexion_de1dd74a.webp',
    caption: 'Accès rapide par numéro de téléphone avec mémorisation de session et récupération.',
  },
  {
    title: '03 · Inscription',
    group: 'Onboarding',
    src: '/assets/opt/inscription_ba9ff446.webp',
    caption: 'Création de compte simplifiée : « Kër Facile, vos services à domicile en toute confiance. »',
  },
  {
    title: '04 · Accueil & Nos Services',
    group: 'Navigation & Offres',
    src: '/assets/opt/Accueil_7db2e798.webp',
    caption: 'Catégories claires (Garde d’enfants, Ménage, Cuisine, Plomberie) et prestataires recommandés à Pikine.',
  },
  {
    title: '05 · Chercher un profil certifié',
    group: 'Navigation & Offres',
    src: '/assets/opt/chercher_un_profiml_149c3065.webp',
    caption: 'Liste filtrable de prestataires locaux vérifiés (Khadija Ndiaye, Moussa Gueye) avec badge Profil Certifié.',
  },
  {
    title: '06 · Fiche Prestataire · Khadija Ndiaye',
    group: 'Navigation & Offres',
    src: '/assets/opt/Description_e85f7736.webp',
    caption: 'Note 5.0 (12 avis), tarif transparent (2 500 fc/h), présentation et avis vérifiés.',
  },
  {
    title: '07 · Messagerie directe',
    group: 'Navigation & Offres',
    src: '/assets/opt/Chat_9a8fb94d.webp',
    caption: 'Échange instantané entre cliente et prestataire pour convenir des horaires et du tarif.',
  },
  {
    title: '08 · Confirmation de demande',
    group: 'Navigation & Offres',
    src: '/assets/opt/Description-1_9f507921.webp',
    caption: 'Retour immédiat rassurant : « Demande envoyée avec succès ! »',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'opportunite',
    index: '01',
    title: 'Pencum Pikine',
    subtitle: '« L’opportunité est tout prêt » — Plateforme locale des talents de Pikine',
    context: 'Simplon Sénégal · Pikine',
    year: '2026',
    category: 'simplon',
    categoryLabel: 'Simplon Pikine · Identité & UI/UX Mobile',
    role: 'Charte graphique (32 pages), Personas, Parcours 3 rôles, 13+ maquettes Figma & Audio Wolof',
    summary:
      'Plateforme qui centralise emploi, formations, bourses, stages et événements à Pikine, avec résumés audio en wolof et un assistant IA de candidature.',
    problem:
      'Les opportunités locales arrivent trop tard par le bouche-à-oreille ou dans un français administratif complexe, excluant de nombreux jeunes et femmes de Pikine.',
    approach:
      'Création d’une identité forte (#2B3990, #F29100, #1E7A3A), étude des personas (Oumar & Awa), architecture 3 rôles (Habitant, Partenaire, Admin) et maquettes mobiles avec bouton « Écouter en wolof ».',
    deliverables: [
      'Charte graphique complète (32 p.)',
      'Personas Oumar & Awa',
      'Parcours Utilisateur 3 rôles',
      'Maquettes UI complètes + Assistant IA',
    ],
    palette: ['#2B3990', '#F29100', '#1E7A3A'],
    accentHex: '#2B3990',
    featured: true,
    screens: PENCUM_SCREENS,
  },
  {
    id: 'mairie',
    index: '02',
    title: 'Mairie Connectée · SUNU REGISTRE',
    subtitle: 'Gestion citoyenne & état civil numérique — Mairie de Pikine-Est',
    context: 'Mairie de Pikine-Est · Simplon Sénégal',
    year: '2026',
    category: 'simplon',
    categoryLabel: 'Simplon Pikine · UI/UX Service Public',
    role: 'UX Research (Citoyenne & Agent), Architecture, Wireframes & Prototypes Figma (Habitant + Agent)',
    summary:
      'Solution intégrée reliant le Portail Citoyen et l’Espace Agent pour numériser 50 000+ actes d’état civil et réduire l’attente de 7 jours à moins de 24h.',
    problem:
      'Surcharge physique des guichets, dégradation des registres papier, erreurs de transcription manuelle et absence de suivi temps réel pour les citoyens.',
    approach:
      'Double interface dédiée : parcours citoyen guidé (demande en ligne, paiement Wave/Orange Money, retrait sur créneau) et back-office agent (saisie, recherche multicritère, archivage et journal d’activité).',
    deliverables: [
      'Parcours Citoyenne & Agent',
      'User Flow & Arborescence SUNU_REGISTRE',
      'Wireframes multi-écrans',
      'Prototypes interactifs Figma (Habitant & Agent)',
    ],
    palette: ['#164E3B', '#D4A237', '#EEF6F2'],
    accentHex: '#164E3B',
    screens: MAIRIE_SLIDES,
    prototypeLinks: [
      {
        label: 'Prototype Habitant (Figma)',
        role: 'habitant',
        url: 'https://www.figma.com/proto/HhyPLGA4oU6wPRc3IPdr9A/Mairie-Pikine-Est?node-id=580-1463&viewport=1030%2C941%2C0.04&t=pfkdmtYIgoc4eZ3Z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=580%3A1463&page-id=3%3A3',
      },
      {
        label: 'Prototype Agent (Figma)',
        role: 'agent',
        url: 'https://www.figma.com/proto/HhyPLGA4oU6wPRc3IPdr9A/Mairie-Pikine-Est?node-id=733-667&t=CORzOfyCQykyZ0K0-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A3&starting-point-node-id=580%3A1463',
      },
    ],
  },
  {
    id: 'keur',
    index: '03',
    title: 'Kër Facile',
    subtitle: 'Vos services à domicile en toute confiance — Garde d’enfants, ménage, cuisine & plomberie',
    context: 'Simplon Sénégal · Pikine',
    year: '2026',
    category: 'simplon',
    categoryLabel: 'Simplon Pikine · UI/UX Mobile',
    role: 'UX Research, Identité Kër Facile, 8 maquettes UI & Prototype interactif Figma',
    summary:
      'Application mobile reliant les familles de Pikine et Dakar à des prestataires locaux certifiés (garde d’enfants, ménage, cuisine, plomberie) avec avis vérifiés et chat direct.',
    problem:
      'Trouver une personne de confiance près de chez soi pour la garde d’enfants, le ménage ou une réparation urgente reste difficile sans recommandation fiable ni visibilité sur les tarifs.',
    approach:
      'Interface claire en bleu nuit (#0E2448) mettant en avant le badge « Profil Certifié », les avis clients vérifiés, les tarifs horaires (2 500 fc/h) et une messagerie intégrée jusqu’à la confirmation.',
    deliverables: [
      'Identité visuelle & logo Kër Facile',
      'Parcours Connexion & Inscription',
      'Fiches Prestataires Certifiés & Chat',
      'Prototype interactif Figma (8+ écrans)',
    ],
    palette: ['#0E2448', '#2E4C80', '#0D8A4E'],
    accentHex: '#0E2448',
    screens: KER_FACILE_SCREENS,
    prototypeLinks: [
      {
        label: 'Prototype Figma · Kër Facile',
        role: 'figma',
        url: 'https://www.figma.com/proto/rGcznlglH3fnFmcocNv8aL/Untitled?node-id=1-21&p=f&t=OY7CKUu4xSN1Upcn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
      },
    ],
  },
  {
    id: 'navaro',
    index: '04',
    title: 'NAVARO',
    subtitle: 'Identité visuelle & packaging — NAVARO Parfumerie 100% Authentique',
    context: 'Nord Foire, Dakar · Identité de marque',
    year: '2025',
    category: 'identite',
    categoryLabel: 'Identité visuelle · Parfumerie de luxe',
    role: 'Logotype étoile, Charte graphique, Packaging Flacon, Magazine, Casquette, Sac & Cartes',
    summary:
      'Identité de luxe pour une maison de parfumerie à Dakar : emblème circulaire à étoile négative, typographie serif raffinée, flacon 60 ml, magazine N°01, casquette, sac boutique et cartes de visite.',
    problem:
      'Positionner NAVARO Parfumerie 100% Authentique avec une image raffinée et immédiatement reconnaissable, adaptée aussi bien au flacon en verre qu’aux supports imprimés de boutique.',
    approach:
      'Création d’un symbole géométrique circulaire sculpté par une étoile à quatre branches, associé à une palette Prune Impérial (#280934) & Magenta Framboise (#E61E6E) et décliné en noir et blanc.',
    deliverables: [
      'Logo officiel (Couleur, Noir & Blanc)',
      'Packaging Flacon & Coffret 60 ml',
      'Magazine Éditorial & Casquette brodée',
      'Sac boutique, Cartes de visite & Satin',
    ],
    palette: ['#280934', '#E61E6E', '#4E314E'],
    accentHex: '#E61E6E',
    screens: NAVARO_ASSETS,
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  caption: string;
  description: string;
  tools: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'UI/UX Design',
    caption: 'Conception centrée humain',
    description:
      'Concevoir des interfaces claires, harmonieuses et accessibles où chaque écran répond à un besoin précis sans alourdir l’expérience.',
    tools: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    number: '02',
    title: 'Recherche utilisateur',
    caption: 'Écoute & compréhension',
    description:
      'Observer les usages réels, mener des entretiens terrain et synthétiser des personas concrets pour ancrer chaque décision dans le réel.',
    tools: ['Figma', 'Canva'],
  },
  {
    number: '03',
    title: 'Parcours utilisateur',
    caption: 'Architecture & fluidité',
    description:
      'Cartographier chaque étape clé, du premier regard jusqu’à l’action finale, afin de supprimer les frictions et fluidifier la navigation.',
    tools: ['Figma', 'Illustrator'],
  },
  {
    number: '04',
    title: 'Wireframing',
    caption: 'Structure & hiérarchie',
    description:
      'Poser rapidement l’ossature des écrans, hiérarchiser l’information essentielle et valider la logique fonctionnelle avant l’habillage visuel.',
    tools: ['Figma'],
  },
  {
    number: '05',
    title: 'Prototypage Figma',
    caption: 'Interactions & tests',
    description:
      'Donner vie aux écrans grâce à des prototypes interactifs permettant de tester les enchaînements et d’affiner les micro-interactions.',
    tools: ['Figma'],
  },
  {
    number: '06',
    title: 'Design graphique',
    caption: 'Composition & typographie',
    description:
      'Composer des affiches, mises en page éditoriales et supports visuels lisibles en équilibrant typographie, rythme et couleur.',
    tools: ['Photoshop', 'Illustrator', 'InDesign', 'Canva'],
  },
  {
    number: '07',
    title: 'Identité visuelle',
    caption: 'Univers & cohérence',
    description:
      'Créer des logos distinctifs, des chartes graphiques complètes et des déclinaisons durables qui incarnent la personnalité d’une marque.',
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
  },
  {
    number: '08',
    title: 'Développement web',
    caption: 'Intégration & mouvement',
    description:
      'Transformer les maquettes en interfaces vivantes, fluides et responsives en soignant l’accessibilité et la qualité des transitions.',
    tools: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    number: '09',
    title: 'HTML, CSS et JavaScript',
    caption: 'Code propre & responsive',
    description:
      'Structurer des pages sémantiques, concevoir des mises en page adaptatives soignées et animer les interactions côté navigateur.',
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '10',
    title: 'WordPress',
    caption: 'Sites administrables',
    description:
      'Concevoir, personnaliser et maintenir des sites web faciles à administrer tout en respectant l’identité graphique du projet.',
    tools: ['WordPress', 'CSS', 'Photoshop'],
  },
  {
    number: '11',
    title: 'Création de contenu digital',
    caption: 'Storytelling & supports',
    description:
      'Imaginer des visuels sociaux, bannières et formats vidéo rythmés pour capter l’attention et raconter chaque projet avec justesse.',
    tools: ['Canva', 'CapCut', 'Photoshop', 'Illustrator'],
  },
];

export const TOOL_ITEMS = [
  { name: 'Figma', category: 'Wireframes & Prototypes' },
  { name: 'Photoshop', category: 'Visuels & Retouches' },
  { name: 'Illustrator', category: 'Logos & Identités' },
  { name: 'Canva', category: 'Supports rapides' },
  { name: 'InDesign', category: 'Mise en page' },
  { name: 'CapCut', category: 'Montage vidéo' },
  { name: 'HTML', category: 'Structure sémantique' },
  { name: 'CSS', category: 'Styles & Responsive' },
  { name: 'JavaScript', category: 'Interactions dynamiques' },
  { name: 'WordPress', category: 'Sites administrables' },
];

export const FORMATIONS = [
  {
    title: 'Master 1 en Développement Web',
    place: 'Université Cheikh Hamidou Kane',
    period: '2021 – à nos jours',
  },
  {
    title: 'Certification en UI/UX Design',
    place: 'Simplon Sénégal',
    period: 'Août 2026 – à nos jours',
  },
  {
    title: 'Certificat Professionnel Google UX Design',
    place: 'Coursera',
    period: 'Septembre 2026 – Novembre 2026',
  },
  {
    title: 'Baccalauréat',
    place: 'Groupe Scolaire Sérigne Saliou Mbacké',
    period: '2019 – 2020',
  },
];

export const EXPERIENCES = [
  {
    role: 'UI/UX & Brand Designer — Pencum Pikine',
    org: 'Projet Académique · Simplon Sénégal',
    period: 'Nov 2025 – 2026',
    highlights: [
      'Recherche utilisateur (Personas Oumar & Awa), parcours 3 rôles et création de l’identité de marque',
      'Conception de wireframes basse/haute fidélité, charte graphique de 32 pages et 13+ maquettes Figma',
      'Prototypes cliquables sur Figma et tests utilisateurs',
    ],
  },
  {
    role: 'Assistante Digitale',
    org: 'COUMINAGROUP IMMOBILIER · Cité Keur Gorgui',
    period: 'Déc 2024 – Juillet 2025',
    highlights: [
      'Organisation de dossiers et gestion des tâches administratives',
      'Réalisation de logos, affiches, bannières, roll-ups et vidéos',
      'Contribution à la communication digitale de l’entreprise et mise à jour de contenus WordPress',
    ],
  },
];

export const QUALITES = [
  'Autonomie',
  'Sens de l’organisation',
  'Capacité d’apprentissage rapide',
];

export const LANGUES = ['Français', 'Wolof'];
