import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Exam Questions: Contact Lens Design
 * 
 * Topics covered:
 * - Soft Lens Design and Parameters
 * - Rigid Gas Permeable Lens Design
 * - Specialty Lens Designs
 */

export const contactLensDesignQuestions: ExamQuestion[] = [
  // Soft Lens Design and Parameters
  {
    id: 'ncle-design-001',
    question: 'What does BOZR stand for in contact lens specifications?',
    options: [
      'Base Optical Zone Radius',
      'Back Optic Zone Radius',
      'Basic Optical Zone Regulation',
      'Binocular Optic Zone Reference'
    ],
    correctAnswer: 1,
    explanation: 'BOZR stands for Back Optic Zone Radius, which is the radius of curvature of the posterior central portion of a contact lens. This is a critical parameter in determining the fit of the lens.',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'easy'
  },
  {
    id: 'ncle-design-002',
    question: 'What is the typical diameter range for soft contact lenses?',
    options: [
      '7.5 to 8.5 mm',
      '9.0 to 10.0 mm',
      '13.8 to 14.5 mm',
      '16.0 to 18.0 mm'
    ],
    correctAnswer: 2,
    explanation: 'The typical diameter range for soft contact lenses is 13.8 to 14.5 mm. This larger diameter (compared to RGP lenses) allows soft lenses to extend beyond the cornea onto the sclera.',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'easy'
  },
  {
    id: 'ncle-design-003',
    question: 'What does a higher water content typically contribute to in a soft contact lens?',
    options: [
      'Decreased oxygen permeability',
      'Increased durability',
      'Increased oxygen permeability',
      'Decreased lens movement'
    ],
    correctAnswer: 2,
    explanation: 'Higher water content typically contributes to increased oxygen permeability in conventional hydrogel lenses. More water in the lens allows more oxygen to pass through to the cornea, although this relationship doesn\'t apply to silicone hydrogel materials.',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-004',
    question: 'Which soft contact lens parameter has the greatest effect on lens movement?',
    options: [
      'Center thickness',
      'Base curve radius',
      'Optical zone diameter',
      'Edge design'
    ],
    correctAnswer: 1,
    explanation: 'The base curve radius (BOZR) has the greatest effect on lens movement for soft contact lenses. A flatter base curve compared to the corneal curvature will increase lens movement, while a steeper base curve will decrease movement.',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-005',
    question: 'What parameter is most important when fitting a soft toric contact lens?',
    options: [
      'Center thickness',
      'Lens diameter',
      'Stabilization design',
      'Water content'
    ],
    correctAnswer: 2,
    explanation: 'The stabilization design is most important when fitting soft toric contact lenses. This feature (prism ballast, thin zones, etc.) prevents lens rotation, ensuring that the cylindrical correction remains properly aligned with the patient\'s astigmatism.',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-006',
    question: 'What is the purpose of the modulus in soft contact lens design?',
    options: [
      'To measure the lens\'s water content',
      'To measure the lens\'s stiffness or flexibility',
      'To determine the lens\'s oxygen permeability',
      'To measure the lens\'s light transmission'
    ],
    correctAnswer: 1,
    explanation: 'The modulus of a contact lens refers to its stiffness or flexibility. A higher modulus means the lens is stiffer, which can improve handling but may reduce comfort, while a lower modulus means the lens is more flexible, potentially improving comfort but making handling more difficult.',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'hard'
  },
  {
    id: 'ncle-design-007',
    question: 'Which of the following is NOT a common stabilization method for soft toric lenses?',
    options: [
      'Prism ballast',
      'Peri-ballast',
      'Back surface toricity',
      'Dynamic stabilization'
    ],
    correctAnswer: 2,
    explanation: 'Back surface toricity is not a common stabilization method for soft toric lenses. It is primarily used in RGP lens designs. Common stabilization methods for soft toric lenses include prism ballast, peri-ballast, and dynamic stabilization (thin zone designs).',
    category: 'cl-design',
    subcategory: 'soft-lens-design',
    difficulty: 'medium'
  },
  
  // Rigid Gas Permeable Lens Design
  {
    id: 'ncle-design-008',
    question: 'What is the typical diameter range for RGP contact lenses?',
    options: [
      '7.0 to 10.5 mm',
      '10.5 to 12.0 mm',
      '13.0 to 14.5 mm',
      '15.0 to 16.5 mm'
    ],
    correctAnswer: 0,
    explanation: 'The typical diameter range for RGP contact lenses is 7.0 to 10.5 mm. These lenses are smaller than soft contact lenses and generally cover only the cornea.',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'easy'
  },
  {
    id: 'ncle-design-009',
    question: 'What is the purpose of an aspheric back surface design in an RGP lens?',
    options: [
      'To correct astigmatism',
      'To provide better centration',
      'To align more closely with the corneal shape',
      'To increase comfort in dry environments'
    ],
    correctAnswer: 2,
    explanation: 'An aspheric back surface design in an RGP lens is used to align more closely with the natural aspheric shape of the cornea. This can improve lens centration, tear exchange, and comfort while reducing mechanical stress on the cornea.',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-010',
    question: 'What parameter primarily determines the fitting relationship of an RGP lens on the cornea?',
    options: [
      'Center thickness',
      'Overall diameter',
      'Base curve to cornea relationship',
      'Edge lift'
    ],
    correctAnswer: 2,
    explanation: 'The base curve to cornea relationship (often called the fitting relationship) primarily determines how an RGP lens fits on the cornea. This relationship determines whether the lens is fit "on K" (matching corneal curvature), "flat" (flatter than corneal curvature), or "steep" (steeper than corneal curvature).',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-011',
    question: 'What does "axial edge lift" refer to in RGP lens design?',
    options: [
      'The amount of lift at the lens edge relative to the cornea',
      'The thickness of the lens edge',
      'The position of the lens relative to the visual axis',
      'The toric meridian of the lens'
    ],
    correctAnswer: 0,
    explanation: 'Axial edge lift refers to the amount of lift or clearance at the edge of an RGP lens relative to the cornea. Proper edge lift is crucial for tear exchange, lens movement, and comfort.',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-012',
    question: 'What is the primary advantage of a larger diameter RGP lens?',
    options: [
      'Better correction of high astigmatism',
      'Increased oxygen transmissibility',
      'Improved initial comfort and reduced lens awareness',
      'Easier handling for patients'
    ],
    correctAnswer: 2,
    explanation: 'The primary advantage of a larger diameter RGP lens is improved initial comfort and reduced lens awareness. Larger lenses are less likely to interact with the lid during blinking, reducing sensation and improving adaptation.',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-013',
    question: 'What is a "fenestration" in RGP lens design?',
    options: [
      'A transition zone between different curves',
      'A small hole drilled through the lens to allow tear flow',
      'The area where the lens edge meets the cornea',
      'A prism added to control lens rotation'
    ],
    correctAnswer: 1,
    explanation: 'A fenestration is a small hole drilled through an RGP lens to allow tear flow. Fenestrations are sometimes used in specialty lens designs to enhance tear exchange or reduce suction on the cornea.',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'hard'
  },
  {
    id: 'ncle-design-014',
    question: 'What is the purpose of a lenticular design in RGP lenses?',
    options: [
      'To reduce lens mass and improve comfort',
      'To improve optics in high plus powers',
      'To allow better tear exchange',
      'To improve lens centration'
    ],
    correctAnswer: 0,
    explanation: 'The purpose of a lenticular design in RGP lenses is to reduce lens mass and improve comfort. This design thins the lens periphery, making the lens lighter and more comfortable, particularly for higher power prescriptions.',
    category: 'cl-design',
    subcategory: 'rgp-lens-design',
    difficulty: 'hard'
  },
  
  // Specialty Lens Designs
  {
    id: 'ncle-design-015',
    question: 'What is the primary purpose of a scleral contact lens?',
    options: [
      'To correct high astigmatism',
      'To provide vault over the cornea for irregular corneas',
      'To increase oxygen transmission',
      'To extend wear time to 30 days'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of a scleral contact lens is to provide vault over the cornea. This vault creates a fluid reservoir that masks corneal irregularities and protects the corneal surface, making these lenses ideal for irregular corneas, severe dry eye, and ocular surface diseases.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-016',
    question: 'What is the defining characteristic of an orthokeratology lens design?',
    options: [
      'High water content',
      'Reverse geometry design',
      'Prism ballast',
      'Multifocal optics'
    ],
    correctAnswer: 1,
    explanation: 'The defining characteristic of an orthokeratology lens design is its reverse geometry. This design features a flat central base curve surrounded by one or more steeper secondary curves, which creates the reshaping force needed to temporarily reshape the cornea.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-017',
    question: 'What is the primary advantage of hybrid contact lenses?',
    options: [
      'They provide the optical quality of RGPs with the comfort of soft lenses',
      'They have higher Dk values than any other lens type',
      'They can be worn for extended periods (30 days continuous)',
      'They are more affordable than other specialty designs'
    ],
    correctAnswer: 0,
    explanation: 'The primary advantage of hybrid contact lenses is that they provide the optical quality of RGP lenses with the comfort of soft lenses. Hybrid lenses have a rigid central zone for quality optics surrounded by a soft skirt for comfort and centration.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-018',
    question: 'Which contact lens design is most appropriate for a patient with keratoconus?',
    options: [
      'Standard soft toric lenses',
      'Standard RGP lenses',
      'Specialty RGP designs like scleral or multicurve lenses',
      'Extended wear silicone hydrogel lenses'
    ],
    correctAnswer: 2,
    explanation: 'Specialty RGP designs such as scleral, semi-scleral, or multicurve lenses are most appropriate for patients with keratoconus. These designs can vault over the irregular cornea, providing improved vision and comfort compared to standard lenses.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-019',
    question: 'What is the distinguishing feature of a translating bifocal contact lens design?',
    options: [
      'It has multiple concentric zones of different powers',
      'It moves up and down with gaze changes to position different optical zones',
      'It has an aspheric front surface',
      'It changes power when exposed to different light conditions'
    ],
    correctAnswer: 1,
    explanation: 'The distinguishing feature of a translating bifocal contact lens design is that it moves (translates) up and down with changes in gaze to position different optical zones in front of the pupil. This design typically has a distance zone in the upper portion and a near zone in the lower portion.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'medium'
  },
  {
    id: 'ncle-design-020',
    question: 'What is a "piggyback" contact lens system?',
    options: [
      'Two RGP lenses worn on top of each other for increased power',
      'A soft lens worn under an RGP lens for increased comfort',
      'Two different lens powers alternated on different days',
      'A hybrid lens with both soft and RGP components'
    ],
    correctAnswer: 1,
    explanation: 'A "piggyback" contact lens system consists of a soft lens worn under an RGP lens. This approach can improve comfort and lens centration, particularly in patients with irregular corneas who cannot tolerate RGP lenses alone.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'hard'
  },
  {
    id: 'ncle-design-021',
    question: 'What is the typical diameter range for mini-scleral contact lenses?',
    options: [
      '7.0 to 9.0 mm',
      '9.5 to 11.5 mm',
      '15.0 to 18.0 mm',
      '20.0 to 25.0 mm'
    ],
    correctAnswer: 2,
    explanation: 'The typical diameter range for mini-scleral contact lenses is 15.0 to 18.0 mm. These lenses are larger than corneal RGP lenses but smaller than full scleral lenses, resting partly on the limbus and partly on the sclera.',
    category: 'cl-design',
    subcategory: 'specialty-lens-design',
    difficulty: 'hard'
  }
]; 