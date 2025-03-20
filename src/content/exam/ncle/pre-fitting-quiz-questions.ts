import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Quiz Questions: Pre-Fitting
 * 
 * Topics covered:
 * - Contact Lens Overview
 * - Eye Anatomy for Contact Lenses
 * - Corneal Topography Basics
 */

export const preFittingQuizQuestions: ExamQuestion[] = [
  // Contact Lens Overview
  {
    id: 'quiz-pre-fitting-001',
    question: 'Which type of contact lens is most commonly prescribed today?',
    options: [
      'Rigid gas permeable (RGP) lenses',
      'Soft hydrogel lenses',
      'Soft silicone hydrogel lenses',
      'PMMA hard lenses'
    ],
    correctAnswer: 2,
    explanation: 'Soft silicone hydrogel lenses are the most commonly prescribed contact lenses today. They combine the comfort of soft hydrogel lenses with significantly improved oxygen permeability, making them suitable for daily and extended wear.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-002',
    question: 'What is the primary advantage of silicone hydrogel over traditional hydrogel lenses?',
    options: [
      'Lower cost',
      'Increased durability',
      'Higher oxygen permeability',
      'Better wettability'
    ],
    correctAnswer: 2,
    explanation: 'The primary advantage of silicone hydrogel over traditional hydrogel lenses is higher oxygen permeability (Dk). Silicone hydrogel materials allow 5-7 times more oxygen to reach the cornea, reducing the risk of hypoxia-related complications.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-003',
    question: 'What does "Dk" measure in contact lenses?',
    options: [
      'Diameter and curvature',
      'Durability and keratometric value',
      'Oxygen permeability',
      'Thickness and water content'
    ],
    correctAnswer: 2,
    explanation: 'Dk measures oxygen permeability in contact lens materials. D represents the diffusion coefficient (how fast oxygen moves through the material), and k represents the oxygen solubility coefficient. Higher Dk values indicate greater oxygen transmission.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-004',
    question: 'What is the difference between Dk and Dk/t?',
    options: [
      'Dk is for soft lenses, Dk/t is for RGP lenses',
      'Dk measures oxygen permeability of a material, Dk/t measures oxygen transmissibility through a specific lens',
      'Dk is a theoretical value, Dk/t is the measured value',
      'They are different units of the same measurement'
    ],
    correctAnswer: 1,
    explanation: 'Dk measures oxygen permeability, which is a property of the material regardless of thickness. Dk/t measures oxygen transmissibility, which is the permeability (Dk) divided by the lens thickness (t). Dk/t reflects how much oxygen actually reaches the cornea through a specific lens.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-005',
    question: 'What are toric contact lenses designed to correct?',
    options: [
      'Myopia (nearsightedness)',
      'Hyperopia (farsightedness)',
      'Astigmatism',
      'Presbyopia'
    ],
    correctAnswer: 2,
    explanation: 'Toric contact lenses are specifically designed to correct astigmatism. They have different powers in different meridians of the lens and typically use stabilization methods to maintain proper orientation on the eye.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-006',
    question: 'What is the FDA Group classification system for soft contact lenses based on?',
    options: [
      'Oxygen permeability only',
      'Water content and chemical composition',
      'Replacement schedule',
      'Manufacturing method'
    ],
    correctAnswer: 1,
    explanation: 'The FDA Group classification system for soft contact lenses is based on water content and chemical composition. Groups I and III are low and high water content non-ionic materials, while Groups II and IV are low and high water content ionic materials, respectively.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-007',
    question: 'What is the typical water content range for hydrogel contact lenses?',
    options: [
      '10-25%',
      '25-55%',
      '38-75%',
      '80-99%'
    ],
    correctAnswer: 2,
    explanation: 'The typical water content range for hydrogel contact lenses is 38-75%. Traditional hydrogel materials like HEMA have water content around 38-40%, while high water content materials can reach 70-75%. Water content affects oxygen permeability, wettability, and comfort.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-008',
    question: 'What type of contact lens design is most appropriate for presbyopia correction?',
    options: [
      'Spherical lenses',
      'Toric lenses',
      'Multifocal or bifocal lenses',
      'Custom tinted lenses'
    ],
    correctAnswer: 2,
    explanation: 'Multifocal or bifocal contact lenses are most appropriate for presbyopia correction. These designs provide different powers for distance and near vision, helping to overcome the loss of accommodation associated with presbyopia.',
    category: 'pre-fitting',
    subcategory: 'cl-overview',
    difficulty: 'easy'
  },
  
  // Eye Anatomy for Contact Lenses
  {
    id: 'quiz-pre-fitting-009',
    question: 'Which layer of the cornea makes up approximately 90% of the corneal thickness?',
    options: [
      'Epithelium',
      'Bowman\'s layer',
      'Stroma',
      'Endothelium'
    ],
    correctAnswer: 2,
    explanation: 'The stroma makes up approximately 90% of the corneal thickness. It consists of regularly arranged collagen fibrils that provide structural strength and transparency. The stroma\'s health is critical for maintaining clear vision and corneal integrity.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-010',
    question: 'Which corneal layer is responsible for preventing fluid from entering the stroma?',
    options: [
      'Epithelium',
      'Bowman\'s layer',
      'Descemet\'s membrane',
      'Endothelium'
    ],
    correctAnswer: 3,
    explanation: 'The endothelium is responsible for preventing fluid from entering the stroma. These single-layered cells actively pump fluid out of the cornea to maintain proper corneal hydration and transparency. Endothelial cells do not regenerate when damaged.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-011',
    question: 'What is the tear film\'s primary function?',
    options: [
      'Only to provide nutrition to the cornea',
      'Only to lubricate the ocular surface',
      'Only to protect against infection',
      'To provide a smooth optical surface, nourishment, lubrication, and protection'
    ],
    correctAnswer: 3,
    explanation: 'The tear film serves multiple essential functions: it provides a smooth optical surface for clear vision, delivers nutrients and oxygen to the avascular cornea, lubricates the eye during blinking, removes waste products, and contains antibacterial enzymes that protect against infection.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-012',
    question: 'What are the three layers of the tear film from outermost to innermost?',
    options: [
      'Aqueous, mucin, lipid',
      'Mucin, aqueous, lipid',
      'Lipid, aqueous, mucin',
      'Mucin, lipid, aqueous'
    ],
    correctAnswer: 2,
    explanation: 'From outermost to innermost, the three layers of the tear film are: lipid (oily) layer produced by meibomian glands; aqueous (watery) layer produced by lacrimal glands; and mucin layer produced by conjunctival goblet cells. The lipid layer prevents evaporation, the aqueous provides nutrients, and the mucin allows tears to adhere to the corneal surface.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-013',
    question: 'What is the average central corneal thickness in humans?',
    options: [
      '0.2-0.3 mm',
      '0.5-0.6 mm',
      '0.8-0.9 mm',
      '1.1-1.2 mm'
    ],
    correctAnswer: 1,
    explanation: 'The average central corneal thickness in humans is approximately 0.5-0.6 mm (500-600 microns). The cornea is thicker in the periphery (about 700 microns) and thinner in the center. This measurement is important for contact lens fitting and assessing risk factors for certain conditions.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-014',
    question: 'Which of the following is NOT a layer of the cornea?',
    options: [
      'Epithelium',
      'Stroma',
      'Conjunctiva',
      'Endothelium'
    ],
    correctAnswer: 2,
    explanation: 'The conjunctiva is NOT a layer of the cornea. It is a transparent mucous membrane that covers the anterior surface of the sclera (the white of the eye) and the inner surfaces of the eyelids. The five corneal layers are epithelium, Bowman\'s layer, stroma, Descemet\'s membrane, and endothelium.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-015',
    question: 'What is the normal oxygen requirement of the cornea?',
    options: [
      'Approximately 5-7 mmHg',
      'Approximately 20-30 mmHg',
      'Approximately 45-60 mmHg',
      'Approximately 80-100 mmHg'
    ],
    correctAnswer: 2,
    explanation: 'The normal oxygen requirement of the cornea is approximately 45-60 mmHg (partial pressure of oxygen). Sufficient oxygen is critical for normal corneal metabolism, and inadequate oxygen supply (hypoxia) can lead to corneal edema, neovascularization, and other complications.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'hard'
  },
  {
    id: 'quiz-pre-fitting-016',
    question: 'What is the primary source of oxygen for the cornea?',
    options: [
      'Blood vessels in the cornea',
      'Tears and aqueous humor',
      'Atmospheric oxygen through the tear film',
      'Vitreous humor'
    ],
    correctAnswer: 2,
    explanation: 'The primary source of oxygen for the cornea is atmospheric oxygen that dissolves in the tear film and diffuses to the cornea. The cornea is avascular (contains no blood vessels), so it relies on external oxygen supply through the tears and direct absorption from the air.',
    category: 'pre-fitting',
    subcategory: 'eye-anatomy-cl',
    difficulty: 'easy'
  },
  
  // Corneal Topography Basics
  {
    id: 'quiz-pre-fitting-017',
    question: 'What does corneal topography measure?',
    options: [
      'Only corneal thickness',
      'Only tear film stability',
      'The anterior and/or posterior corneal surface shape and curvature',
      'Only the refractive error of the eye'
    ],
    correctAnswer: 2,
    explanation: 'Corneal topography measures the anterior and/or posterior corneal surface shape and curvature. It creates a detailed map of corneal elevation, curvature, and power across the entire corneal surface, providing more comprehensive information than keratometry.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-018',
    question: 'What is the average corneal diameter?',
    options: [
      '8-9 mm',
      '11-12 mm',
      '14-15 mm',
      '17-18 mm'
    ],
    correctAnswer: 1,
    explanation: 'The average corneal diameter is approximately 11-12 mm horizontally and slightly less vertically (10.5-11.5 mm), creating a slightly oval shape. This measurement is important when determining the appropriate diameter for contact lenses, particularly RGP lenses.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-019',
    question: 'What is the term for the measurement of corneal curvature?',
    options: [
      'Topometry',
      'Keratometry',
      'Pachymetry',
      'Tonometry'
    ],
    correctAnswer: 1,
    explanation: 'Keratometry is the measurement of corneal curvature. A keratometer measures the radius of curvature of the anterior corneal surface, typically in the central 3-4 mm zone. These measurements are critical for contact lens fitting and are expressed in millimeters or diopters.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-020',
    question: 'What corneal condition is characterized by progressive thinning and steepening, often resulting in an irregular, cone-shaped cornea?',
    options: [
      'Corneal dystrophy',
      'Keratoconus',
      'Corneal abrasion',
      'Arcus senilis'
    ],
    correctAnswer: 1,
    explanation: 'Keratoconus is characterized by progressive thinning and steepening, resulting in an irregular, cone-shaped cornea. This non-inflammatory condition typically begins in adolescence and can cause significant visual impairment. Corneal topography is essential for early diagnosis and monitoring.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-pre-fitting-021',
    question: 'What is the average corneal power (keratometry reading) for a normal adult eye?',
    options: [
      '30-35 diopters',
      '36-40 diopters',
      '43-45 diopters',
      '50-55 diopters'
    ],
    correctAnswer: 2,
    explanation: 'The average corneal power (keratometry reading) for a normal adult eye is approximately 43-45 diopters. The cornea provides about two-thirds of the eye\'s total refractive power. Values significantly higher or lower than this range may indicate conditions requiring special consideration in contact lens fitting.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-022',
    question: 'What information is provided by corneal topography that isn\'t available from standard keratometry?',
    options: [
      'Central corneal power',
      'The two principal meridians of the cornea',
      'Detailed mapping of the entire corneal surface, including irregularities and asymmetry',
      'Basic lens power needed for correction'
    ],
    correctAnswer: 2,
    explanation: 'Corneal topography provides detailed mapping of the entire corneal surface, including irregularities and asymmetry. While keratometry only measures the central 3-4 mm in two meridians, topography maps thousands of points across the cornea, detecting subtle irregularities and peripheral changes that keratometry cannot identify.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-023',
    question: 'What corneal measurement is most important for determining the base curve of a rigid gas permeable contact lens?',
    options: [
      'Corneal thickness',
      'Corneal diameter',
      'Keratometry readings',
      'Tear volume'
    ],
    correctAnswer: 2,
    explanation: 'Keratometry readings are most important for determining the base curve of a rigid gas permeable contact lens. The central corneal curvature (K readings) serves as the starting point for selecting an appropriate base curve, which is typically selected slightly flatter than the flattest K reading for alignment fitting.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-024',
    question: 'In corneal topography, what do the "warm" colors (red and orange) typically represent?',
    options: [
      'Areas of corneal thinning',
      'Areas of increased tear film',
      'Steeper corneal curvature',
      'Flatter corneal curvature'
    ],
    correctAnswer: 2,
    explanation: 'In standard corneal topography color maps, "warm" colors (red and orange) typically represent steeper corneal curvature (higher dioptric power). "Cool" colors (blue and green) typically represent flatter corneal curvature (lower dioptric power). This standardized color scheme helps practitioners quickly identify corneal shape patterns.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-pre-fitting-025',
    question: 'Which corneal topography pattern typically shows a "bow-tie" appearance with the steep axis oriented horizontally?',
    options: [
      'With-the-rule astigmatism',
      'Against-the-rule astigmatism',
      'Keratoconus',
      'Regular spherical cornea'
    ],
    correctAnswer: 1,
    explanation: 'Against-the-rule astigmatism typically shows a "bow-tie" appearance with the steep axis oriented horizontally (180° ±20°). In contrast, with-the-rule astigmatism shows a vertical steepening pattern (90° ±20°). These patterns are important for diagnosing astigmatism type and fitting toric contact lenses.',
    category: 'pre-fitting',
    subcategory: 'corneal-topography-basics',
    difficulty: 'hard'
  }
]; 