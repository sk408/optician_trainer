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
    question: 'Which of the following is the primary function of the corneal endothelium?',
    options: [
      'Providing structural support',
      'Maintaining corneal transparency through fluid regulation',
      'Protecting the eye from UV radiation',
      'Providing nutrients to the corneal epithelium'
    ],
    correctAnswer: 1,
    explanation: 'The primary function of the corneal endothelium is to maintain corneal transparency through fluid regulation. It acts as a pump to remove excess fluid from the stroma, preventing corneal edema and maintaining clarity.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-026',
    question: 'What is the approximate diameter of the normal adult cornea?',
    options: [
      '9-10 mm',
      '11-12 mm',
      '13-14 mm',
      '15-16 mm'
    ],
    correctAnswer: 1,
    explanation: 'The normal adult cornea has an approximate diameter of 11-12 mm horizontally (white-to-white distance or HVID). This measurement is important in contact lens fitting.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-027',
    question: 'Which of the following statements about corneal endothelial cells is TRUE?',
    options: [
      'They regenerate quickly when damaged',
      'Their density increases with age',
      'They are approximately 5 microns thick',
      'They are incapable of mitosis in the adult human eye'
    ],
    correctAnswer: 3,
    explanation: 'Corneal endothelial cells are incapable of mitosis (cell division) in the adult human eye. When endothelial cells are lost due to age, disease, or trauma, the remaining cells spread out to cover the posterior corneal surface, resulting in decreased cell density over time.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-028',
    question: 'What is the most common shape of the normal cornea when viewed from the front?',
    options: [
      'Perfectly circular',
      'Horizontally oval',
      'Vertically oval',
      'Triangular'
    ],
    correctAnswer: 1,
    explanation: 'When viewed from the front, the normal cornea is horizontally oval, with the horizontal diameter (11-12 mm) being slightly larger than the vertical diameter (10-11 mm).',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-029',
    question: 'Which layer of the cornea makes up approximately 90% of the corneal thickness?',
    options: [
      'Epithelium',
      'Bowman\'s layer',
      'Stroma',
      'Descemet\'s membrane'
    ],
    correctAnswer: 2,
    explanation: 'The stroma makes up approximately 90% of the corneal thickness. It consists of regularly arranged collagen fibrils, which contribute to the cornea\'s transparency and strength.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-030',
    question: 'What structure is responsible for producing aqueous humor?',
    options: [
      'Iris',
      'Lens',
      'Ciliary body',
      'Trabecular meshwork'
    ],
    correctAnswer: 2,
    explanation: 'The ciliary body is responsible for producing aqueous humor, which fills the anterior chamber and provides nutrients to the avascular cornea and lens.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-031',
    question: 'Which of the following best describes the limbus?',
    options: [
      'The center of the cornea',
      'The junction between the cornea and sclera',
      'The outer edge of the iris',
      'The junction between the iris and ciliary body'
    ],
    correctAnswer: 1,
    explanation: 'The limbus is the junction (transition zone) between the cornea and sclera. It contains stem cells that are important for corneal epithelial regeneration.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-032',
    question: 'What is the primary purpose of the conjunctiva?',
    options: [
      'To produce tears',
      'To protect and lubricate the exposed surface of the eye',
      'To regulate the amount of light entering the eye',
      'To help focus light onto the retina'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of the conjunctiva is to protect and lubricate the exposed surface of the eye. It is a thin, transparent membrane that covers the anterior sclera (bulbar conjunctiva) and lines the inner surfaces of the eyelids (palpebral conjunctiva).',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-033',
    question: 'What is the normal central corneal thickness in humans?',
    options: [
      '200-300 microns',
      '350-450 microns',
      '500-600 microns',
      '700-800 microns'
    ],
    correctAnswer: 2,
    explanation: 'The normal central corneal thickness in humans is approximately 500-600 microns (0.5-0.6 mm). This thickness is important in assessing conditions like glaucoma and for determining candidacy for certain refractive surgeries.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-034',
    question: 'Which of the following describes the normal corneal curvature?',
    options: [
      'Steeper centrally than peripherally',
      'Uniform across the entire surface',
      'Steeper peripherally than centrally',
      'Variable depending on age only'
    ],
    correctAnswer: 0,
    explanation: 'The normal cornea is steeper centrally than peripherally, becoming progressively flatter toward the limbus. This prolate shape contributes to the optical properties of the eye.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-035',
    question: 'What is the primary source of oxygen for the cornea during waking hours?',
    options: [
      'Blood vessels in the cornea',
      'Atmospheric oxygen through the tear film',
      'Aqueous humor',
      'Vitreous humor'
    ],
    correctAnswer: 1,
    explanation: 'During waking hours, the primary source of oxygen for the cornea is atmospheric oxygen that diffuses through the tear film. The cornea is avascular (has no blood vessels), so it requires alternate means of oxygen supply.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-036',
    question: 'What is the approximate pH of normal tears?',
    options: [
      '5.0-5.5',
      '6.5-7.0',
      '7.3-7.7',
      '8.0-8.5'
    ],
    correctAnswer: 2,
    explanation: 'The approximate pH of normal tears is 7.3-7.7, which is slightly alkaline. This pH helps maintain ocular surface health and comfort.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-037',
    question: 'Which of the following is NOT a layer of the tear film according to the classic three-layer model?',
    options: [
      'Mucin layer',
      'Aqueous layer',
      'Lipid layer',
      'Protein layer'
    ],
    correctAnswer: 3,
    explanation: 'According to the classic three-layer model, the tear film consists of a mucin (mucous) layer adjacent to the cornea, an aqueous (watery) middle layer, and a lipid (oily) outer layer. There is no distinct protein layer, although proteins are present within the aqueous layer.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-038',
    question: 'Which glands produce the lipid layer of the tear film?',
    options: [
      'Meibomian glands',
      'Lacrimal glands',
      'Goblet cells',
      'Glands of Zeis'
    ],
    correctAnswer: 0,
    explanation: 'The meibomian glands, located in the tarsal plates of the eyelids, produce the lipid (oil) layer of the tear film. This layer helps prevent evaporation of the aqueous layer and provides a smooth optical surface.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-039',
    question: 'Which structure produces the aqueous component of tears?',
    options: [
      'Meibomian glands',
      'Lacrimal gland',
      'Goblet cells',
      'Glands of Wolfring'
    ],
    correctAnswer: 1,
    explanation: 'The lacrimal gland produces the bulk of the aqueous (watery) component of tears, which makes up the middle layer of the tear film. The accessory lacrimal glands (glands of Krause and Wolfring) also contribute to aqueous tear production.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'easy'
  },
  {
    id: 'ncle-anatomy-040',
    question: 'What is the primary function of the mucin layer of the tear film?',
    options: [
      'To prevent tear evaporation',
      'To kill bacteria',
      'To make the hydrophobic corneal epithelium wettable',
      'To nourish the cornea'
    ],
    correctAnswer: 2,
    explanation: 'The primary function of the mucin layer is to make the naturally hydrophobic (water-repelling) corneal epithelium wettable. It creates an interface that allows the aqueous layer to spread evenly across the ocular surface.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-041',
    question: 'What cells are primarily responsible for producing the mucin layer of the tear film?',
    options: [
      'Meibomian gland cells',
      'Lacrimal gland cells',
      'Goblet cells',
      'Epithelial cells'
    ],
    correctAnswer: 2,
    explanation: 'Goblet cells, found in the conjunctiva, are primarily responsible for producing the mucin (mucous) layer of the tear film, although corneal epithelial cells also produce membrane-bound mucins.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-042',
    question: 'What is the typical tear film thickness?',
    options: [
      '3-5 microns',
      '7-10 microns',
      '15-20 microns',
      '30-40 microns'
    ],
    correctAnswer: 1,
    explanation: 'The typical tear film thickness is approximately 7-10 microns. This thin layer plays a crucial role in maintaining ocular surface health and optical clarity.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-043',
    question: 'What happens to corneal thickness after prolonged wear of low-oxygen transmissible contact lenses?',
    options: [
      'It decreases',
      'It increases due to corneal edema',
      'It remains unchanged',
      'It fluctuates randomly'
    ],
    correctAnswer: 1,
    explanation: 'After prolonged wear of low-oxygen transmissible contact lenses, corneal thickness increases due to corneal edema (swelling). This is caused by hypoxia (oxygen deprivation) that leads to increased stromal fluid retention.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-044',
    question: 'What is the primary metabolic pathway the cornea uses to produce energy under normal aerobic conditions?',
    options: [
      'Pentose phosphate pathway',
      'Glycolysis only',
      'Glycolysis and Krebs cycle',
      'Beta-oxidation'
    ],
    correctAnswer: 2,
    explanation: 'Under normal aerobic conditions, the cornea primarily uses glycolysis followed by the Krebs cycle (citric acid cycle) to produce energy efficiently. When oxygen is limited, the cornea shifts to anaerobic glycolysis alone, which is less efficient.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-045',
    question: 'What is the average corneal refractive index?',
    options: [
      '1.336',
      '1.376',
      '1.416',
      '1.456'
    ],
    correctAnswer: 1,
    explanation: 'The average corneal refractive index is approximately 1.376. This is higher than the refractive index of tears (1.336) and contributes to the cornea\'s role in light refraction.',
    category: 'ocular-anatomy',
    subcategory: 'anterior-segment',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-046',
    question: 'What is the primary reason for the cornea\'s transparency?',
    options: [
      'Its high water content',
      'The regular arrangement of collagen fibrils in the stroma',
      'The absence of nerves',
      'Its smooth surface'
    ],
    correctAnswer: 1,
    explanation: 'The primary reason for the cornea\'s transparency is the regular arrangement of collagen fibrils in the stroma, with spacing less than the wavelength of visible light. This minimizes light scatter and allows light to pass through.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-047',
    question: 'Which of the following is NOT a common cause of reduced corneal sensitivity?',
    options: [
      'Long-term contact lens wear',
      'Keratoconus',
      'Age',
      'LASIK surgery'
    ],
    correctAnswer: 1,
    explanation: 'Keratoconus is not typically associated with reduced corneal sensitivity. In fact, patients with keratoconus often have normal or even increased corneal sensitivity. Long-term contact lens wear, aging, and LASIK surgery can all reduce corneal sensitivity due to effects on corneal nerves.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-048',
    question: 'What is corneal neovascularization?',
    options: [
      'Normal growth of the cornea',
      'Growth of new blood vessels into the normally avascular cornea',
      'Thinning of the cornea',
      'Hardening of the corneal tissue'
    ],
    correctAnswer: 1,
    explanation: 'Corneal neovascularization is the growth of new blood vessels into the normally avascular (without blood vessels) cornea. It can be a response to hypoxia, inflammation, or trauma and can compromise corneal clarity.',
    category: 'ocular-anatomy',
    subcategory: 'corneal-physiology',
    difficulty: 'medium'
  },
  {
    id: 'ncle-anatomy-049',
    question: 'What is the average tear production rate (basal tears) per minute?',
    options: [
      '0.5-1 μL',
      '1-2 μL',
      '5-10 μL',
      '15-30 μL'
    ],
    correctAnswer: 1,
    explanation: 'The average tear production rate for basal (continuous) tears is approximately 1-2 microliters (μL) per minute. This is significantly less than reflex tearing, which can produce up to 100 μL per minute.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'hard'
  },
  {
    id: 'ncle-anatomy-050',
    question: 'What is the normal tear break-up time (TBUT)?',
    options: [
      'Less than 5 seconds',
      '10-15 seconds or longer',
      '30-40 seconds',
      '1-2 minutes'
    ],
    correctAnswer: 1,
    explanation: 'The normal tear break-up time (TBUT) is 10-15 seconds or longer. TBUT is the time it takes for dry spots to appear in the tear film after a blink, and shorter times may indicate tear film instability or dry eye.',
    category: 'ocular-anatomy',
    subcategory: 'tear-film',
    difficulty: 'easy'
  }
]; 