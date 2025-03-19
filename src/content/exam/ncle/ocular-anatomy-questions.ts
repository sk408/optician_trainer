import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Ocular Anatomy and Physiology
 * 
 * Topics covered:
 * - Anterior Segment Anatomy
 * - Tear Film and Ocular Surface
 * - Corneal Physiology
 */

export const ocularAnatomyQuestions: ExamQuestion[] = [
  // Anterior Segment Anatomy
  {
    id: 'ncle-anatomy-001',
    question: 'Which structure forms the transparent front surface of the eye?',
    options: [
      'Iris',
      'Lens',
      'Cornea',
      'Sclera'
    ],
    correctAnswer: 2,
    explanation: 'The cornea is the transparent, dome-shaped front surface of the eye that allows light to enter and provides approximately two-thirds of the eye\'s focusing power.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-002',
    question: 'What is the average adult corneal diameter?',
    options: [
      '8-9 mm',
      '10-12 mm',
      '12-14 mm',
      '14-16 mm'
    ],
    correctAnswer: 2,
    explanation: 'The average horizontal corneal diameter in adults is 12-14 mm. This measurement is important in contact lens fitting as it influences the size of the lens needed.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-003',
    question: 'Which layer of the cornea makes up approximately 90% of the corneal thickness?',
    options: [
      'Epithelium',
      'Bowman\'s layer',
      'Stroma',
      'Endothelium'
    ],
    correctAnswer: 2,
    explanation: 'The stroma makes up about 90% of the corneal thickness. It consists of regularly arranged collagen fibrils that provide transparency and structural integrity.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-004',
    question: 'Which of the following is NOT a layer of the cornea?',
    options: [
      'Epithelium',
      'Stroma',
      'Macula',
      'Endothelium'
    ],
    correctAnswer: 2,
    explanation: 'The macula is not a layer of the cornea but a part of the retina. The five layers of the cornea, from anterior to posterior, are: epithelium, Bowman\'s layer, stroma, Descemet\'s membrane, and endothelium.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-005',
    question: 'What is the primary function of the corneal endothelium?',
    options: [
      'Protection against pathogens',
      'Production of tears',
      'Maintaining corneal hydration through pumping fluid out of the cornea',
      'Absorbing UV radiation'
    ],
    correctAnswer: 2,
    explanation: 'The corneal endothelium maintains corneal transparency by pumping fluid out of the cornea, preventing excessive hydration that would lead to corneal edema and reduced transparency.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-006',
    question: 'What is the average central corneal thickness?',
    options: [
      '250-350 microns',
      '350-450 microns',
      '500-600 microns',
      '700-800 microns'
    ],
    correctAnswer: 2,
    explanation: 'The average central corneal thickness is approximately 500-600 microns (0.5-0.6 mm). This thickness is important in contact lens fitting and corneal health assessment.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-007',
    question: 'Which part of the anterior segment regulates the amount of light entering the eye?',
    options: [
      'Cornea',
      'Iris',
      'Lens',
      'Conjunctiva'
    ],
    correctAnswer: 1,
    explanation: 'The iris regulates the amount of light entering the eye by controlling the size of the pupil. It constricts in bright light and dilates in dim light.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-008',
    question: 'What is the limbus?',
    options: [
      'The central region of the cornea',
      'The junction between the cornea and sclera',
      'The fold between the eyelid and eyeball',
      'The colored part of the eye'
    ],
    correctAnswer: 1,
    explanation: 'The limbus is the junction between the cornea and sclera. It contains stem cells that help regenerate the corneal epithelium and is an important landmark in contact lens fitting.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-009',
    question: 'What is the primary function of the crystalline lens?',
    options: [
      'To protect the retina',
      'To focus light onto the retina',
      'To produce aqueous humor',
      'To regulate pupil size'
    ],
    correctAnswer: 1,
    explanation: 'The primary function of the crystalline lens is to focus light onto the retina. It changes shape to adjust focus for different viewing distances, a process called accommodation.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-010',
    question: 'Which structure prevents most contact lenses from moving behind the eyeball?',
    options: [
      'Iris',
      'Conjunctiva',
      'Sclera',
      'Conjunctival fornix'
    ],
    correctAnswer: 3,
    explanation: 'The conjunctival fornix (the fold where the conjunctiva reflects from the eyeball to the eyelid) creates a physical barrier that prevents most contact lenses from moving behind the eyeball.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  
  // Tear Film and Ocular Surface
  {
    id: 'ncle-anatomy-011',
    question: 'What are the three main layers of the tear film?',
    options: [
      'Lipid, aqueous, and mucin',
      'Epithelium, stroma, and endothelium',
      'Protein, water, and oil',
      'Anterior, middle, and posterior'
    ],
    correctAnswer: 0,
    explanation: 'The tear film consists of three main layers: the outer lipid (oil) layer, the middle aqueous (water) layer, and the inner mucin (mucus) layer. Each layer has specific functions in maintaining ocular surface health.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-012',
    question: 'Which glands produce the lipid layer of the tear film?',
    options: [
      'Lacrimal glands',
      'Meibomian glands',
      'Goblet cells',
      'Glands of Zeis'
    ],
    correctAnswer: 1,
    explanation: 'The meibomian glands, located in the tarsal plates of the eyelids, produce the lipid (oil) layer of the tear film. This layer prevents evaporation of the aqueous layer and provides a smooth optical surface.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-013',
    question: 'What is the primary function of the lipid layer of the tear film?',
    options: [
      'To provide nutrients to the cornea',
      'To kill bacteria on the ocular surface',
      'To prevent evaporation of the aqueous layer',
      'To assist in removing debris from the eye'
    ],
    correctAnswer: 2,
    explanation: 'The primary function of the lipid layer is to prevent evaporation of the underlying aqueous layer. It also provides a smooth optical surface for good vision and helps stabilize the tear film.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-014',
    question: 'Which cells produce the mucin layer of the tear film?',
    options: [
      'Meibomian glands',
      'Lacrimal glands',
      'Goblet cells',
      'Corneal epithelial cells'
    ],
    correctAnswer: 2,
    explanation: 'Goblet cells in the conjunctiva produce the mucin layer of the tear film. This layer helps the aqueous layer adhere to the corneal epithelium, which is naturally hydrophobic.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-015',
    question: 'What is the approximate thickness of the normal tear film?',
    options: [
      '1-3 micrometers',
      '3-7 micrometers',
      '10-15 micrometers',
      '20-30 micrometers'
    ],
    correctAnswer: 1,
    explanation: 'The normal tear film has a thickness of approximately 3-7 micrometers (0.003-0.007 mm). This thin layer is critical for corneal health and optical quality.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-016',
    question: 'Which component of tears contains antibacterial enzymes like lysozyme and lactoferrin?',
    options: [
      'Lipid layer',
      'Aqueous layer',
      'Mucin layer',
      'Stromal layer'
    ],
    correctAnswer: 1,
    explanation: 'The aqueous layer of tears contains antibacterial enzymes such as lysozyme and lactoferrin, which help protect the eye from infection.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-017',
    question: 'What is the normal tear volume in the eye?',
    options: [
      '0.5-1 μL',
      '6-8 μL',
      '15-20 μL',
      '30-35 μL'
    ],
    correctAnswer: 1,
    explanation: 'The normal tear volume in the eye is approximately 6-8 microliters (μL). This small volume is constantly replenished by tear production and drained through the nasolacrimal system.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-018',
    question: 'Which test measures the tear break-up time (TBUT)?',
    options: [
      'Schirmer test',
      'Fluorescein staining',
      'Phenol red thread test',
      'Jones dye test'
    ],
    correctAnswer: 1,
    explanation: 'Tear break-up time (TBUT) is measured using fluorescein staining. After instilling fluorescein dye, the examiner observes how long it takes for dry spots to appear in the tear film under blue light.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-019',
    question: 'What is the typical tear break-up time in normal eyes?',
    options: [
      'Less than 5 seconds',
      '10-15 seconds',
      '20-30 seconds',
      'More than 45 seconds'
    ],
    correctAnswer: 1,
    explanation: 'The typical tear break-up time (TBUT) in normal eyes is 10-15 seconds. A TBUT of less than 10 seconds may indicate tear film instability or dry eye.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-020',
    question: 'Which of the following is NOT a function of the tear film?',
    options: [
      'Providing nutrition to the cornea',
      'Protecting against infection',
      'Creating a smooth optical surface',
      'Producing melanin for UV protection'
    ],
    correctAnswer: 3,
    explanation: 'The tear film does not produce melanin for UV protection. Its functions include providing nutrition to the cornea, protecting against infection, creating a smooth optical surface, and maintaining corneal hydration.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'easy'
  },
  
  // Corneal Physiology
  {
    id: 'ncle-anatomy-021',
    question: 'How does the cornea primarily receive oxygen?',
    options: [
      'From blood vessels within the cornea',
      'From the aqueous humor behind the cornea',
      'From the atmosphere through the tear film',
      'From the vitreous humor'
    ],
    correctAnswer: 2,
    explanation: 'The cornea is avascular (has no blood vessels) and primarily receives oxygen by diffusion from the atmosphere through the tear film. This is why contact lens wear can impact corneal oxygenation.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-022',
    question: 'What is the primary energy source for corneal metabolism?',
    options: [
      'Protein',
      'Glucose',
      'Lipids',
      'Vitamin A'
    ],
    correctAnswer: 1,
    explanation: 'Glucose is the primary energy source for corneal metabolism. It is supplied mainly by the aqueous humor and, to a lesser extent, by the tear film.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-023',
    question: 'What is the normal oxygen percentage in the atmosphere at sea level?',
    options: [
      '10-15%',
      '21%',
      '35-40%',
      '50-60%'
    ],
    correctAnswer: 1,
    explanation: 'The normal oxygen percentage in the atmosphere at sea level is approximately 21%. This is the baseline for considering oxygen availability to the cornea when fitting contact lenses.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-024',
    question: 'What happens to corneal thickness during overnight sleep?',
    options: [
      'It decreases by about 2-3%',
      'It increases by about 2-4%',
      'It remains exactly the same',
      'It fluctuates randomly throughout the night'
    ],
    correctAnswer: 1,
    explanation: 'Corneal thickness typically increases by about 2-4% during overnight sleep due to reduced oxygen availability and metabolic changes. This is why many people experience mild corneal edema upon waking.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-025',
    question: 'What unit is used to measure oxygen permeability (Dk) of contact lens materials?',
    options: [
      'cm²/s',
      'mL O₂ × cm / (cm² × s × mmHg)',
      'mmHg/hour',
      'mL/min'
    ],
    correctAnswer: 1,
    explanation: 'Oxygen permeability (Dk) is measured in units of mL O₂ × cm / (cm² × s × mmHg). It describes how much oxygen can pass through a material of a specific thickness.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-026',
    question: 'What is corneal edema?',
    options: [
      'Thinning of the cornea due to contact lens wear',
      'Normal variation in corneal curvature',
      'Swelling of the cornea due to increased hydration',
      'Drying of the corneal epithelium'
    ],
    correctAnswer: 2,
    explanation: 'Corneal edema is swelling of the cornea due to increased hydration, often from reduced oxygen availability or endothelial dysfunction. It can lead to blurred vision and discomfort.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-027',
    question: 'What is the minimum oxygen transmissibility (Dk/t) recommended for daily wear soft contact lenses?',
    options: [
      '10-15',
      '20-30',
      '35-50',
      'Greater than 87'
    ],
    correctAnswer: 1,
    explanation: 'The minimum oxygen transmissibility (Dk/t) recommended for daily wear soft contact lenses is generally 20-30 to prevent corneal hypoxia and its complications.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-028',
    question: 'What is the minimum Dk/t value recommended for extended wear (overnight) contact lenses?',
    options: [
      'At least 24',
      'At least 35',
      'At least 87',
      'At least 125'
    ],
    correctAnswer: 2,
    explanation: 'The minimum Dk/t value recommended for extended wear (overnight) contact lenses is at least 87, often referred to as the Holden-Mertz criteria, to prevent significant corneal swelling during overnight wear.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-029',
    question: 'What is the main metabolic pathway used by the cornea in normal conditions?',
    options: [
      'Anaerobic glycolysis',
      'Aerobic glycolysis',
      'Krebs cycle',
      'Beta-oxidation'
    ],
    correctAnswer: 2,
    explanation: 'Under normal conditions with sufficient oxygen, the cornea primarily uses the Krebs cycle (aerobic metabolism) as its main metabolic pathway, which is more efficient than anaerobic glycolysis.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-030',
    question: 'What is the process by which the corneal epithelium regenerates?',
    options: [
      'Centripetal movement from the limbus',
      'Centrifugal movement from the central cornea',
      'Random cell division throughout the cornea',
      'Cell division only at sites of injury'
    ],
    correctAnswer: 0,
    explanation: 'The corneal epithelium regenerates through centripetal movement of cells from the limbus toward the center of the cornea. Stem cells at the limbus divide to produce cells that migrate centrally and differentiate to replace lost epithelial cells.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  }
]; 