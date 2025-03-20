import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Quiz Questions: Contact Lens Materials
 * 
 * Topics covered:
 * - Material Properties
 * - Silicone Hydrogel Materials
 * - RGP Materials
 * - Specialized Materials
 */

export const contactLensMaterialsQuizQuestions: ExamQuestion[] = [
  // Material Properties
  {
    id: 'quiz-cl-materials-001',
    question: 'Which property of contact lens materials refers to the ability of a material to transmit oxygen?',
    options: [
      'Wettability',
      'Dk value',
      'Modulus',
      'Refractive index'
    ],
    correctAnswer: 1,
    explanation: 'The Dk value represents oxygen permeability in contact lens materials. "D" stands for the diffusion coefficient, and "k" represents the oxygen solubility coefficient. Higher Dk values indicate greater oxygen transmission.',
    category: 'contact-lens-materials',
    subcategory: 'material-properties',
    difficulty: 'easy'
  },
  {
    id: 'quiz-cl-materials-002',
    question: 'What is the primary benefit of higher water content in hydrogel contact lenses?',
    options: [
      'Increased durability',
      'Better oxygen transmission',
      'Higher refractive index',
      'Greater lens thickness'
    ],
    correctAnswer: 1,
    explanation: 'Higher water content in hydrogel contact lenses generally provides better oxygen transmission, as oxygen moves through the water component of the lens. However, in silicone hydrogel lenses, oxygen transmission is less dependent on water content.',
    category: 'contact-lens-materials',
    subcategory: 'material-properties',
    difficulty: 'easy'
  },
  {
    id: 'quiz-cl-materials-003',
    question: 'Which parameter is most directly affected by the modulus of a contact lens material?',
    options: [
      'Oxygen permeability',
      'Lens flexibility and rigidity',
      'Water content',
      'UV transmission'
    ],
    correctAnswer: 1,
    explanation: 'The modulus of a contact lens material directly affects its flexibility and rigidity. A higher modulus indicates a stiffer material, while a lower modulus results in a more flexible lens that may conform better to the eye but can be more difficult to handle.',
    category: 'contact-lens-materials',
    subcategory: 'material-properties',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-004',
    question: 'What typically happens to soft contact lens diameter when the lens is hydrated?',
    options: [
      'It decreases significantly',
      'It remains unchanged',
      'It increases',
      'It becomes more variable'
    ],
    correctAnswer: 2,
    explanation: 'When a soft contact lens is hydrated, its diameter typically increases as the material absorbs water and expands. This expansion must be accounted for in the manufacturing process to ensure the final hydrated lens has the correct specifications.',
    category: 'contact-lens-materials',
    subcategory: 'material-properties',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-005',
    question: 'What is the typical range of water content for traditional hydrogel lenses?',
    options: [
      '10-30%',
      '38-75%',
      '85-99%',
      '0-5%'
    ],
    correctAnswer: 1,
    explanation: 'Traditional hydrogel lenses typically have water content ranging from 38% to 75%. Low water content lenses range from about 38-45%, medium water content from 50-60%, and high water content from 65-75%.',
    category: 'contact-lens-materials',
    subcategory: 'material-properties',
    difficulty: 'easy'
  },
  
  // Silicone Hydrogel Materials
  {
    id: 'quiz-cl-materials-006',
    question: 'Which of the following is a disadvantage of silicone hydrogel materials compared to traditional hydrogels?',
    options: [
      'Lower oxygen permeability',
      'Higher risk of corneal hypoxia',
      'Generally higher modulus (stiffer materials)',
      'Reduced deposit resistance'
    ],
    correctAnswer: 2,
    explanation: 'Silicone hydrogel materials typically have a higher modulus than traditional hydrogels, making them stiffer. This can potentially lead to mechanical issues such as superior epithelial arcuate lesions (SEALs) or discomfort for some patients, especially in the initial generation of silicone hydrogel materials.',
    category: 'contact-lens-materials',
    subcategory: 'silicone-hydrogel',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-007',
    question: 'What surface treatment is commonly applied to silicone hydrogel lenses to improve wettability?',
    options: [
      'Polishing',
      'Plasma oxidation',
      'Hydration enhancement',
      'Aspheric contouring'
    ],
    correctAnswer: 1,
    explanation: 'Plasma oxidation is a common surface treatment applied to silicone hydrogel lenses to improve wettability. This process creates a thin hydrophilic layer on the surface of the lens to overcome the hydrophobic nature of silicone, improving comfort and reducing deposits.',
    category: 'contact-lens-materials',
    subcategory: 'silicone-hydrogel',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-008',
    question: 'What is typically true about the water content of silicone hydrogel lenses compared to traditional hydrogel lenses?',
    options: [
      'Silicone hydrogels always have higher water content',
      'Silicone hydrogels generally have lower water content',
      'Water content is identical between the two materials',
      'Silicone hydrogels cannot contain water'
    ],
    correctAnswer: 1,
    explanation: 'Silicone hydrogel lenses generally have lower water content than traditional hydrogel lenses. Despite this, they provide superior oxygen transmission because oxygen permeability in silicone hydrogels comes primarily from the silicone component rather than the water component.',
    category: 'contact-lens-materials',
    subcategory: 'silicone-hydrogel',
    difficulty: 'easy'
  },
  {
    id: 'quiz-cl-materials-009',
    question: 'Why is lipid deposition often more common with silicone hydrogel lenses?',
    options: [
      'Higher water content attracts lipids',
      'The inherent hydrophobic nature of silicone attracts lipids',
      'Surface treatments cause lipid binding',
      'The higher oxygen permeability causes lipid oxidation'
    ],
    correctAnswer: 1,
    explanation: 'Lipid deposition is often more common with silicone hydrogel lenses due to the inherent hydrophobic nature of silicone, which attracts lipids from the tear film. This is one reason why surface treatments or internal wetting agents are incorporated into silicone hydrogel lens designs.',
    category: 'contact-lens-materials',
    subcategory: 'silicone-hydrogel',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-010',
    question: 'What is the primary benefit of higher Dk/t values in silicone hydrogel lenses?',
    options: [
      'Increased comfort',
      'Reduced risk of corneal hypoxia',
      'Improved visual acuity',
      'Extended wear potential'
    ],
    correctAnswer: 1,
    explanation: 'The primary benefit of higher Dk/t values (oxygen transmissibility) in silicone hydrogel lenses is the reduced risk of corneal hypoxia. This allows for healthier corneal physiology and, in some cases, extended wear potential with reduced complications compared to traditional hydrogel lenses.',
    category: 'contact-lens-materials',
    subcategory: 'silicone-hydrogel',
    difficulty: 'easy'
  },
  
  // RGP Materials
  {
    id: 'quiz-cl-materials-011',
    question: 'Which material was used in the first generation of hard contact lenses before the development of RGP materials?',
    options: [
      'Silicone acrylate',
      'Fluorosilicone acrylate',
      'PMMA (polymethyl methacrylate)',
      'Cellulose acetate butyrate'
    ],
    correctAnswer: 2,
    explanation: 'PMMA (polymethyl methacrylate) was used in the first generation of hard contact lenses. While PMMA lenses provided excellent optics and durability, they had virtually no oxygen permeability, which led to the development of RGP materials.',
    category: 'contact-lens-materials',
    subcategory: 'rgp-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-cl-materials-012',
    question: 'Which component was added to early silicone acrylate RGP materials to improve wettability?',
    options: [
      'Fluorine',
      'Methacrylic acid',
      'Polyvinyl alcohol',
      'Silicone dioxide'
    ],
    correctAnswer: 1,
    explanation: 'Methacrylic acid was added to early silicone acrylate RGP materials to improve wettability. These wetting monomers helped overcome the hydrophobic nature of silicone, enhancing comfort and tear film interaction.',
    category: 'contact-lens-materials',
    subcategory: 'rgp-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-013',
    question: 'What is the typical Dk range for modern high-Dk RGP materials?',
    options: [
      '10-30 units',
      '30-60 units',
      '60-100 units',
      '100-180 units'
    ],
    correctAnswer: 3,
    explanation: 'Modern high-Dk RGP materials typically have Dk values in the range of 100-180 units. These materials, often fluorosilicone acrylates, provide excellent oxygen permeability while maintaining the optical advantages of rigid lenses.',
    category: 'contact-lens-materials',
    subcategory: 'rgp-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-014',
    question: 'What is a common trade-off when increasing the silicon content in RGP materials?',
    options: [
      'Increased oxygen permeability but decreased wettability',
      'Increased durability but decreased comfort',
      'Increased optical clarity but decreased UV protection',
      'Increased flexibility but decreased stability'
    ],
    correctAnswer: 0,
    explanation: 'When increasing the silicon content in RGP materials, there is typically a trade-off of increased oxygen permeability but decreased wettability. This occurs because silicon components are hydrophobic by nature, requiring additional wetting agents or surface treatments.',
    category: 'contact-lens-materials',
    subcategory: 'rgp-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-015',
    question: 'What effect does the addition of fluorine to RGP materials have?',
    options: [
      'Decreases oxygen permeability',
      'Increases lens flexibility',
      'Improves deposit resistance',
      'Reduces lens durability'
    ],
    correctAnswer: 2,
    explanation: 'The addition of fluorine to RGP materials improves deposit resistance by creating a more chemically inert surface. Fluorine also contributes to increased oxygen permeability and sometimes improved wettability in these materials.',
    category: 'contact-lens-materials',
    subcategory: 'rgp-materials',
    difficulty: 'medium'
  },
  
  // Specialized Materials
  {
    id: 'quiz-cl-materials-016',
    question: 'Which contact lens material is most commonly used for orthokeratology?',
    options: [
      'Low-Dk hydrogel',
      'High-Dk silicone hydrogel',
      'High-Dk RGP material',
      'Hybrid composite material'
    ],
    correctAnswer: 2,
    explanation: 'High-Dk RGP materials are most commonly used for orthokeratology. The rigid nature of these materials allows for precise corneal reshaping, while the high oxygen permeability is essential for overnight wear safety.',
    category: 'contact-lens-materials',
    subcategory: 'specialized-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-cl-materials-017',
    question: 'What is the primary advantage of hybrid contact lens materials?',
    options: [
      'Lower cost than standard lenses',
      'Combines RGP center optics with soft lens comfort',
      'Extreme durability for extended wear',
      'Highest oxygen permeability of any lens type'
    ],
    correctAnswer: 1,
    explanation: 'The primary advantage of hybrid contact lens materials is that they combine an RGP center for optical quality with a soft skirt/periphery for comfort. This design aims to provide the best attributes of both rigid and soft lens types.',
    category: 'contact-lens-materials',
    subcategory: 'specialized-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-cl-materials-018',
    question: 'Which material property is most important for scleral lenses?',
    options: [
      'High water content',
      'High oxygen permeability',
      'Low modulus',
      'UV blocking capability'
    ],
    correctAnswer: 1,
    explanation: 'High oxygen permeability is most important for scleral lenses. Since scleral lenses are larger, thicker, and trap a reservoir of tears behind them, high oxygen permeability (Dk) is essential to maintain corneal health by allowing adequate oxygen transmission.',
    category: 'contact-lens-materials',
    subcategory: 'specialized-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-cl-materials-019',
    question: 'What property of biocompatible scleral lens materials helps reduce inflammatory responses?',
    options: [
      'Non-ionic surface charge',
      'High water retention',
      'Low elastic modulus',
      'Hydrophilic coating'
    ],
    correctAnswer: 0,
    explanation: 'A non-ionic surface charge in biocompatible scleral lens materials helps reduce inflammatory responses. Materials with neutral surface charge are less likely to attract proteins and inflammatory mediators from the tear film, improving biocompatibility.',
    category: 'contact-lens-materials',
    subcategory: 'specialized-materials',
    difficulty: 'hard'
  },
  {
    id: 'quiz-cl-materials-020',
    question: 'Which property is most important for contact lens materials used in therapeutic applications for severe dry eye?',
    options: [
      'High oxygen permeability',
      'High water retention',
      'Low modulus',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'For therapeutic applications in severe dry eye, all three properties are important: high oxygen permeability to maintain corneal health, high water retention to maintain hydration, and low modulus for comfort on a potentially sensitive eye.',
    category: 'contact-lens-materials',
    subcategory: 'specialized-materials',
    difficulty: 'medium'
  }
]; 