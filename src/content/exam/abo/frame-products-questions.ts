import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Frame Products
 * 
 * Topics covered:
 * - Frame Materials and Components
 * - Frame Styles and Selection
 * - Specialty and Safety Frames
 */

export const originalFrameProductsQuestions: ExamQuestion[] = [
  // Frame Materials and Components
  {
    id: 'abo-frame-001',
    question: 'Which frame material has the highest resistance to corrosion?',
    options: [
      'Monel',
      'Titanium',
      'Stainless steel',
      'Nickel silver'
    ],
    correctAnswer: 1,
    explanation: 'Titanium has the highest resistance to corrosion among these materials. It is highly resistant to perspiration, skin oils, and environmental factors, making it an excellent choice for patients with skin sensitivities.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-002',
    question: 'What is the primary advantage of beta-titanium (TIX) frame material?',
    options: [
      'Lower cost than regular titanium',
      'Higher durability than pure titanium',
      'Greater flexibility and adjustability while maintaining strength',
      'Lighter weight than any other frame material'
    ],
    correctAnswer: 2,
    explanation: 'Beta-titanium (TIX) offers greater flexibility and adjustability while maintaining strength. It combines the corrosion resistance and hypoallergenic properties of pure titanium with enhanced flexibility, making it easier to adjust the temples and bridge.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-003',
    question: 'What is the most common composition of zyl (cellulose acetate) frame material?',
    options: [
      'Plastic and nylon',
      'Cellulose acetate and plasticizers',
      'Polyamide and carbon fiber',
      'Epoxy resin and hardener'
    ],
    correctAnswer: 1,
    explanation: 'Zyl (cellulose acetate) frame material is primarily composed of cellulose acetate and plasticizers. The plasticizers allow the material to be molded and provide flexibility to the finished frame.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-004',
    question: 'Which frame component is responsible for most of the vertical adjustment in fitting?',
    options: [
      'Bridge',
      'Temple',
      'Endpiece',
      'Pad arms'
    ],
    correctAnswer: 3,
    explanation: 'Pad arms (or pad posts) are responsible for most of the vertical adjustment in fitting. Adjusting these components allows the optician to raise or lower the frame on the face without affecting other fit parameters.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-005',
    question: 'What is the primary disadvantage of polyamide (nylon) frames?',
    options: [
      'They are too rigid for adjustments',
      'They cannot be made in multiple colors',
      'They become brittle with age and UV exposure',
      'They are heavier than most other materials'
    ],
    correctAnswer: 2,
    explanation: 'Polyamide (nylon) frames can become brittle with age and UV exposure. Over time, the material loses moisture content and flexibility, which can lead to cracking and breakage, especially in older frames.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-006',
    question: 'What is the difference between a spring hinge and a standard barrel hinge?',
    options: [
      'Spring hinges are only used on metal frames',
      'Spring hinges include a tension mechanism that allows outward temple movement',
      'Spring hinges cannot be adjusted',
      'Spring hinges are less durable than standard barrel hinges'
    ],
    correctAnswer: 1,
    explanation: 'Spring hinges include a tension mechanism that allows outward temple movement beyond the standard 90-degree opening. This provides greater comfort and helps prevent damage when the frames are removed or if they receive impact.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  
  // Frame Styles and Selection
  {
    id: 'abo-frame-007',
    question: 'Which facial feature is MOST important when selecting frame shape?',
    options: [
      'Eyebrows',
      'Nose',
      'Cheekbones',
      'Face shape'
    ],
    correctAnswer: 3,
    explanation: 'Face shape is the most important feature when selecting frame shape. The goal is typically to choose a frame shape that complements or balances the face shape (e.g., angular frames for round faces, rounded frames for angular faces).',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-008',
    question: 'Which frame style typically has the least amount of vertical depth?',
    options: [
      'Round',
      'Cat-eye',
      'Aviator',
      'Rimless'
    ],
    correctAnswer: 3,
    explanation: 'Rimless frames typically have the least amount of vertical depth, as they have no frame around the lenses and can be customized to minimize vertical size. This makes them suitable for progressive lenses with shorter corridors or for patients who prefer a minimalist look.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-009',
    question: 'What is the "B" measurement in frame dimensions?',
    options: [
      'Bridge width',
      'Vertical lens height',
      'Temple length',
      'Horizontal lens width'
    ],
    correctAnswer: 1,
    explanation: 'The "B" measurement in frame dimensions refers to the vertical lens height. This measurement is crucial for determining if a frame has sufficient vertical space for progressive lenses or multifocals.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-010',
    question: 'Which frame style would be MOST appropriate for a patient with a strong prescription who wants to minimize lens thickness?',
    options: [
      'Large rectangular frame',
      'Small round frame',
      'Semi-rimless frame',
      'Wide aviator style'
    ],
    correctAnswer: 1,
    explanation: 'A small round frame would be most appropriate for a patient with a strong prescription who wants to minimize lens thickness. Smaller lenses require less peripheral thickness, and round shapes minimize the edge thickness compared to angular shapes.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-011',
    question: 'What is the recommended minimum "B" dimension for a frame that will house progressive lenses?',
    options: [
      '14 mm',
      '18 mm',
      '24 mm',
      '30 mm'
    ],
    correctAnswer: 2,
    explanation: 'The recommended minimum "B" dimension (vertical height) for a frame that will house progressive lenses is typically 24 mm. This ensures sufficient vertical space for the distance, intermediate, and near zones of the progressive lens.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-012',
    question: 'Which of the following would be MOST important to consider when selecting frames for a child?',
    options: [
      'Fashion trends',
      'Lens shape',
      'Durability and fit security',
      'Frame color'
    ],
    correctAnswer: 2,
    explanation: 'Durability and fit security are most important when selecting frames for a child. Children\'s frames should be robust enough to withstand active play and should fit securely to stay in place during activity and ensure proper vision correction.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'easy'
  },
  
  // Specialty and Safety Frames
  {
    id: 'abo-frame-013',
    question: 'What standard must industrial safety frames and lenses meet in the United States?',
    options: [
      'FDA 21 CFR 801',
      'ANSI Z80.3',
      'ANSI Z87.1',
      'OSHA 1910.133'
    ],
    correctAnswer: 2,
    explanation: 'Industrial safety frames and lenses in the United States must meet ANSI Z87.1 standard. This standard specifies the design, construction, testing, and use requirements for eye protectors to prevent or minimize injuries in industrial environments.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-014',
    question: 'Which feature is required on all industrial safety frames?',
    options: [
      'Spring hinges',
      'Permanently attached side shields',
      'Metal construction',
      'Adjustable nose pads'
    ],
    correctAnswer: 1,
    explanation: 'Permanently attached side shields are required on all industrial safety frames. These shields provide protection from flying particles, dust, and other hazards approaching from the sides, which regular eyewear does not address.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-015',
    question: 'What is the primary purpose of a sports frame\'s wrap-around design?',
    options: [
      'To improve peripheral vision',
      'To provide better protection from impact and UV radiation',
      'To make the frame more fashionable',
      'To reduce weight'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of a sports frame\'s wrap-around design is to provide better protection from impact and UV radiation. The curved design follows facial contours to shield the eyes from various angles and prevent debris, wind, or sun from entering around the frame edges.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-016',
    question: 'What is the key feature of frames designed for individuals with hearing aids?',
    options: [
      'Wider temples',
      'Flexible hinges',
      'Thinner, straight temples',
      'Larger lens sizes'
    ],
    correctAnswer: 2,
    explanation: 'Frames designed for individuals with hearing aids typically feature thinner, straight temples. This design reduces interference with behind-the-ear hearing aids and prevents discomfort from pressure points where the hearing aid and temple would otherwise compete for space.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'hard'
  },
  {
    id: 'abo-frame-017',
    question: 'What distinguishes a SCUBA diving mask with prescription lenses from standard prescription eyewear?',
    options: [
      'Use of polarized lenses only',
      'Correction for underwater refraction',
      'Special tints for water conditions',
      'Plastic lenses only'
    ],
    correctAnswer: 1,
    explanation: 'SCUBA diving masks with prescription lenses must be corrected for underwater refraction. Water has a different refractive index than air, which affects how light travels to the eye, requiring approximately 25% less power in the prescription for accurate underwater vision correction.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'hard'
  },
  {
    id: 'abo-frame-018',
    question: 'Which of the following is NOT a standard feature of frames designed for computer use?',
    options: [
      'Blue light filtering',
      'Anti-reflective coating',
      'Polarization',
      'Wider intermediate viewing area'
    ],
    correctAnswer: 2,
    explanation: 'Polarization is not a standard feature of frames designed for computer use. While blue light filtering, anti-reflective coating, and wider intermediate viewing areas are beneficial for computer work, polarization can actually interfere with viewing some digital screens and is typically not included in computer eyewear.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'medium'
  }
];

// Adding more frame products questions
export const additionalFrameProductsQuestions: ExamQuestion[] = [
  // Frame Materials and Components
  {
    id: 'abo-frame-019',
    question: 'Which frame material is most brittle and susceptible to breakage in cold temperatures?',
    options: [
      'Titanium',
      'Stainless steel',
      'Zyl (cellulose acetate)',
      'Memory metal (Flexon)'
    ],
    correctAnswer: 2,
    explanation: 'Zyl (cellulose acetate) becomes brittle and more susceptible to breakage in cold temperatures. This is due to the material properties which make it less flexible and more prone to cracking when exposed to cold environments.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-020',
    question: 'What is the primary advantage of using adjustable nose pads in frame design?',
    options: [
      'They are more durable than fixed pads',
      'They allow for better adjustment of frame position',
      'They are less expensive to manufacture',
      'They are less likely to cause allergic reactions'
    ],
    correctAnswer: 1,
    explanation: 'The primary advantage of adjustable nose pads is that they allow for better adjustment of frame position. They provide opticians with the ability to customize the fit, adjust pantoscopic tilt, vertex distance, and frame height to accommodate different facial features and prescription requirements.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-021',
    question: 'What is the "B" measurement in frame dimensions?',
    options: [
      'Bridge width',
      'Lens height',
      'Lens width',
      'Temple length'
    ],
    correctAnswer: 2,
    explanation: 'The "B" measurement in frame dimensions refers to the lens width - the horizontal measurement of the lens at its widest point. It is one of the key measurements in the boxing system used to describe frame and lens dimensions.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-022',
    question: 'Which of the following is NOT a common application for stainless steel in frame construction?',
    options: [
      'Temples',
      'Nose pads',
      'Bridges',
      'Intricate decorative elements'
    ],
    correctAnswer: 3,
    explanation: 'Stainless steel is not commonly used for intricate decorative elements in frame construction. While it is excellent for structural components like temples, bridges, and nose pads due to its strength and corrosion resistance, it is relatively difficult to form into detailed decorative designs compared to materials like acetate or precious metals.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  
  // Frame Styles and Selection
  {
    id: 'abo-frame-023',
    question: 'What frame feature is most important when fitting progressive lenses?',
    options: [
      'Decorative temples',
      'Sufficient vertical height',
      'Bright colors',
      'Spring hinges'
    ],
    correctAnswer: 1,
    explanation: 'Sufficient vertical height is the most important frame feature when fitting progressive lenses. A minimum vertical dimension is required to accommodate the distance, intermediate, and near zones of progressive lenses while providing comfortable viewing corridors.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-024',
    question: 'Which facial measurement is most relevant when selecting appropriate bridge width?',
    options: [
      'Pupillary distance',
      'Interpupillary distance at near',
      'Nasal bridge width',
      'Vertex distance'
    ],
    correctAnswer: 2,
    explanation: 'Nasal bridge width is the most relevant facial measurement when selecting appropriate bridge width for a frame. The frame bridge should match the patient\'s nasal bridge width for proper weight distribution and comfort.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-025',
    question: 'What type of frame style typically works best for patients with high-plus prescriptions?',
    options: [
      'Large aviator styles',
      'Small, round frames',
      'Wide rectangular frames',
      'Shield-style sunglasses'
    ],
    correctAnswer: 1,
    explanation: 'Small, round frames typically work best for patients with high-plus prescriptions. The small eye size minimizes lens edge thickness and weight, while round shapes minimize the distance from the optical center to the edge of the lens, reducing overall thickness and magnification effects.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'hard'
  },
  {
    id: 'abo-frame-026',
    question: 'Which type of frame is characterized by having lens rims only on the top portion of the lenses?',
    options: [
      'Full-rim frames',
      'Semi-rimless frames',
      'Rimless frames',
      'Combination frames'
    ],
    correctAnswer: 1,
    explanation: 'Semi-rimless frames are characterized by having lens rims only on a portion of the lenses, typically the top. The bottom portion of the lenses is secured using a nylon cord or other securing mechanism.',
    category: 'frame-products',
    subcategory: 'frame-styles',
    difficulty: 'easy'
  },
  
  // Specialty and Safety Frames
  {
    id: 'abo-frame-027',
    question: 'Which of the following is required for a frame to meet ANSI Z87.1 safety standards?',
    options: [
      'Lightweight materials only',
      'Impact resistance and side shields',
      'Anti-reflective coating',
      'Polarized lenses'
    ],
    correctAnswer: 1,
    explanation: 'For a frame to meet ANSI Z87.1 safety standards, it must provide impact resistance and include side shields. These features protect the eyes from flying particles and debris from multiple angles, which is essential in industrial and hazardous environments.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-028',
    question: 'What key feature distinguishes sports frames from regular eyewear?',
    options: [
      'Lighter weight',
      'More stylish designs',
      'Enhanced retention and impact protection',
      'Prescription limitations'
    ],
    correctAnswer: 2,
    explanation: 'Enhanced retention and impact protection distinguish sports frames from regular eyewear. Sports frames typically feature wrap designs, secure fit systems, and impact-resistant materials to stay in place during physical activity and protect the eyes from potential impacts.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'medium'
  },
  {
    id: 'abo-frame-029',
    question: 'Which of the following is a key consideration when dispensing frames to children?',
    options: [
      'Using adult frames in smaller sizes',
      'Selecting frames with spring hinges and durable materials',
      'Choosing frames based primarily on fashion trends',
      'Recommending rimless styles for durability'
    ],
    correctAnswer: 1,
    explanation: 'When dispensing frames to children, selecting frames with spring hinges and durable materials is a key consideration. Children\'s frames should withstand rough handling, provide comfortable fit, and incorporate features like spring hinges that accommodate active movement and prevent damage from frequent on-and-off wear.',
    category: 'frame-products',
    subcategory: 'specialty-frames',
    difficulty: 'easy'
  },
  {
    id: 'abo-frame-030',
    question: 'What is the primary purpose of an endpiece on a frame?',
    options: [
      'To attach the lens to the frame',
      'To connect the temple to the front of the frame',
      'To support the bridge',
      'To hold the nose pads'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of an endpiece on a frame is to connect the temple to the front of the frame. It houses the hinge mechanism that allows the temples to fold and forms the junction between the front and sides of the eyewear.',
    category: 'frame-products',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  }
];

// Combine original and additional questions
export const frameProductsQuestions: ExamQuestion[] = [
  ...originalFrameProductsQuestions,
  ...additionalFrameProductsQuestions
]; 