import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * NCLE Quiz Questions: Diagnostic Fitting
 * 
 * Topics covered:
 * - Contact Lens Fitting Basics
 * - Soft Lens Parameters
 * - RGP Lens Parameters
 */

export const diagnosticFittingQuizQuestions: ExamQuestion[] = [
  // Contact Lens Fitting Basics
  {
    id: 'quiz-diagnostic-fitting-001',
    question: 'What is the first step in contact lens fitting?',
    options: [
      'Selecting a trial lens',
      'Taking a complete patient history',
      'Measuring pupil size',
      'Checking lens power'
    ],
    correctAnswer: 1,
    explanation: 'Taking a complete patient history is the first step in contact lens fitting. This includes gathering information about the patient\'s ocular and medical history, medication use, lifestyle, previous contact lens experience, expectations, and specific visual needs.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-diagnostic-fitting-002',
    question: 'What is the purpose of an alignment fit with RGP lenses?',
    options: [
      'To have the lens center perfectly over the pupil',
      'To have the lens edge rest heavily on the cornea',
      'To have the lens bearing distribute evenly across the cornea with appropriate tear exchange',
      'To have the lens vault completely over the cornea'
    ],
    correctAnswer: 2,
    explanation: 'The purpose of an alignment fit with RGP lenses is to have the lens bearing distribute evenly across the cornea with appropriate tear exchange. This provides optimal comfort, vision, and corneal health by avoiding excessive localized pressure and allowing proper tear flow under the lens.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-003',
    question: 'What does "HVID" stand for in contact lens fitting?',
    options: [
      'Horizontal Visible Iris Diameter',
      'High Vertex Internal Diameter',
      'Horizontal Visual Imaging Display',
      'Highest Valuable Identifiable Distance'
    ],
    correctAnswer: 0,
    explanation: 'HVID stands for Horizontal Visible Iris Diameter. This measurement (typically 11.0-12.5 mm) is used to determine the appropriate contact lens diameter, especially for RGP lenses. It represents the width of the iris visible through the cornea.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-diagnostic-fitting-004',
    question: 'Which method is used to evaluate tear exchange under an RGP lens?',
    options: [
      'Schirmer test',
      'Fluorescein pattern evaluation',
      'Phenol red thread test',
      'Tear break-up time (TBUT)'
    ],
    correctAnswer: 1,
    explanation: 'Fluorescein pattern evaluation is used to assess tear exchange under an RGP lens. When fluorescein dye is instilled, the pattern of fluorescence viewed under cobalt blue light reveals the lens-to-cornea relationship and the movement of tears beneath the lens during blinking.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-005',
    question: 'What is the recommended initial base curve selection for a spherical soft contact lens?',
    options: [
      'Steeper than K readings to ensure the lens stays on the eye',
      'Flatter than K readings to avoid corneal molding',
      'Approximately equal to K readings or slightly steeper',
      'Always 8.4 mm regardless of corneal curvature'
    ],
    correctAnswer: 2,
    explanation: 'The recommended initial base curve selection for a spherical soft contact lens is approximately equal to K readings or slightly steeper. Most manufacturers offer limited base curve options (commonly 8.3-8.7 mm), and the selection is based on corneal curvature and diameter.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-006',
    question: 'What is the ideal movement of a soft contact lens after blinking?',
    options: [
      'No movement',
      '0.25-0.5 mm',
      '1.0-2.0 mm',
      'More than 2.0 mm'
    ],
    correctAnswer: 1,
    explanation: 'The ideal movement of a soft contact lens after blinking is approximately 0.25-0.5 mm. This amount provides adequate tear exchange without compromising comfort or vision. Insufficient movement can lead to hypoxia and corneal complications, while excessive movement can cause discomfort and unstable vision.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-diagnostic-fitting-007',
    question: 'What is a steep-fitting RGP lens characterized by?',
    options: [
      'Excessive movement and edge standoff',
      'Central pooling and minimal movement',
      'Perfect alignment with even fluorescein pattern',
      'Flat bearing in the center with heavy edge lift'
    ],
    correctAnswer: 1,
    explanation: 'A steep-fitting RGP lens is characterized by central pooling (visible as bright central fluorescence) and minimal movement. The lens is too curved relative to the cornea, creating a vault in the center and excessive bearing at the periphery, which can cause discomfort, reduced tear exchange, and potential corneal issues.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-008',
    question: 'What should be evaluated during a contact lens follow-up visit?',
    options: [
      'Only visual acuity',
      'Only comfort level',
      'Only wearing time',
      'Visual acuity, comfort, lens fit, wearing time, and ocular health'
    ],
    correctAnswer: 3,
    explanation: 'During a contact lens follow-up visit, the practitioner should evaluate visual acuity, comfort, lens fit, wearing time, and ocular health. This comprehensive assessment ensures the lenses are providing good vision, comfortable wear, proper fit, adequate wearing time for the patient\'s needs, and maintaining ocular health.',
    category: 'diagnostic-fitting',
    subcategory: 'cl-fitting-basics',
    difficulty: 'easy'
  },
  
  // Soft Lens Parameters
  {
    id: 'quiz-diagnostic-fitting-009',
    question: 'What is the typical diameter range for soft contact lenses?',
    options: [
      '7.0-8.0 mm',
      '9.0-10.0 mm',
      '13.8-14.5 mm',
      '16.0-18.0 mm'
    ],
    correctAnswer: 2,
    explanation: 'The typical diameter range for soft contact lenses is 13.8-14.5 mm. This size allows the lens to extend 1-2 mm beyond the limbus (the corneal-scleral junction), providing stable centration, good coverage, and comfortable fit on the eye.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'easy'
  },
  {
    id: 'quiz-diagnostic-fitting-010',
    question: 'What does a higher base curve value (e.g., 8.9 mm vs. 8.4 mm) indicate about a soft contact lens?',
    options: [
      'A steeper fitting lens',
      'A flatter fitting lens',
      'A thicker lens',
      'A higher powered lens'
    ],
    correctAnswer: 1,
    explanation: 'A higher base curve value (e.g., 8.9 mm vs. 8.4 mm) indicates a flatter fitting lens. In soft lenses, the base curve is expressed in millimeters of radius of curvature, so a larger number means a flatter curve. Flatter lenses may be recommended for flatter corneas.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-011',
    question: 'How does center thickness typically differ between plus and minus powered soft lenses of the same material?',
    options: [
      'Plus lenses are thinner in the center than minus lenses',
      'Plus lenses are thicker in the center than minus lenses',
      'Center thickness is always the same regardless of power',
      'Center thickness varies randomly with power'
    ],
    correctAnswer: 1,
    explanation: 'Plus lenses are thicker in the center than minus lenses of the same material. Plus lenses have their thickest point at the center and taper toward the edges, while minus lenses are thinnest at the center and thicker at the edges. This difference affects oxygen transmissibility and lens handling.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-012',
    question: 'What is the primary purpose of prism ballast in a toric soft contact lens?',
    options: [
      'To increase oxygen permeability',
      'To improve comfort',
      'To stabilize lens orientation',
      'To increase lens thickness'
    ],
    correctAnswer: 2,
    explanation: 'The primary purpose of prism ballast in a toric soft contact lens is to stabilize lens orientation. Prism ballast creates a thicker bottom portion of the lens, which interacts with the eyelid during blinking to maintain proper lens orientation, ensuring the cylindrical correction aligns properly with the eye\'s astigmatism.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-013',
    question: 'What is the most appropriate soft lens parameter to change if a lens moves excessively on the eye?',
    options: [
      'Increase power',
      'Decrease diameter',
      'Steepen base curve',
      'Change the material'
    ],
    correctAnswer: 2,
    explanation: 'If a soft lens moves excessively on the eye, the most appropriate parameter to change is to steepen the base curve (use a smaller BC value). A steeper base curve creates a tighter fit with less movement. Alternatively, increasing the diameter could also help reduce excessive movement.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-014',
    question: 'How does increasing the water content of a hydrogel lens typically affect oxygen permeability?',
    options: [
      'Decreases oxygen permeability',
      'Increases oxygen permeability',
      'Has no effect on oxygen permeability',
      'First increases then decreases oxygen permeability'
    ],
    correctAnswer: 1,
    explanation: 'In traditional hydrogel lenses, increasing the water content typically increases oxygen permeability (Dk). Higher water content allows more oxygen to dissolve and diffuse through the material. However, this relationship doesn\'t apply to silicone hydrogel lenses, where the silicone component primarily determines oxygen permeability.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-015',
    question: 'What does a spherical equivalent power conversion do when fitting toric contact lenses?',
    options: [
      'It combines the sphere and cylinder powers to calculate an average power',
      'It ignores the cylinder power completely',
      'It doubles the cylinder power',
      'It converts plus cylinder to minus cylinder notation'
    ],
    correctAnswer: 0,
    explanation: 'A spherical equivalent power conversion combines the sphere and cylinder powers to calculate an average power using the formula: SE = Sphere + (Cylinder/2). This helps determine a starting point for spherical lens powers when toric lenses are not available or needed for low astigmatism.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-016',
    question: 'What parameter is unique to toric soft contact lenses compared to spherical soft lenses?',
    options: [
      'Base curve',
      'Diameter',
      'Axis orientation markings',
      'Center thickness'
    ],
    correctAnswer: 2,
    explanation: 'Axis orientation markings are unique to toric soft contact lenses. These markings (such as dots, lines, or truncations) allow practitioners to assess the rotational position of the lens on the eye, which is critical for determining if the cylindrical correction is properly aligned with the eye\'s astigmatism.',
    category: 'diagnostic-fitting',
    subcategory: 'soft-lens-parameters',
    difficulty: 'easy'
  },
  
  // RGP Lens Parameters
  {
    id: 'quiz-diagnostic-fitting-017',
    question: 'What is the typical diameter range for RGP contact lenses?',
    options: [
      '7.0-10.0 mm',
      '10.5-12.5 mm',
      '13.0-15.0 mm',
      '16.0-18.0 mm'
    ],
    correctAnswer: 0,
    explanation: 'The typical diameter range for RGP contact lenses is 7.0-10.0 mm. This is significantly smaller than soft lenses, typically covering only about 75-90% of the corneal surface. Smaller diameters (8.6-9.2 mm) are common for normal corneas, while larger diameters may be used for keratoconus or post-surgical fitting.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'easy'
  },
  {
    id: 'quiz-diagnostic-fitting-018',
    question: 'What is the relationship between the base curve and the flattest K reading in a typical RGP alignment fit?',
    options: [
      'Base curve is typically 1.00D steeper than flat K',
      'Base curve is typically on flat K or slightly flatter (0.25-0.75D)',
      'Base curve is typically 2.00D flatter than flat K',
      'Base curve is always exactly equal to flat K'
    ],
    correctAnswer: 1,
    explanation: 'In a typical RGP alignment fit, the base curve is typically on flat K or slightly flatter (0.25-0.75D flatter than the flattest K reading). This creates an alignment fitting relationship where the lens aligns with the corneal surface, distributing bearing evenly and allowing appropriate tear exchange.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-019',
    question: 'What is the purpose of the peripheral curve system in an RGP lens?',
    options: [
      'To determine the lens power',
      'To improve centration on the cornea',
      'To provide gradual flattening toward the edge for comfort and tear exchange',
      'To enhance oxygen permeability'
    ],
    correctAnswer: 2,
    explanation: 'The purpose of the peripheral curve system in an RGP lens is to provide gradual flattening toward the edge for comfort and tear exchange. These secondary and peripheral curves create appropriate edge lift, allowing tear exchange under the lens and making the lens more comfortable by preventing the edge from digging into the cornea or conjunctiva.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-020',
    question: 'What happens to the lens-tear-cornea optical system when an RGP lens is placed on the eye?',
    options: [
      'The tear film has no optical effect',
      'The tear layer between the lens and cornea neutralizes corneal astigmatism',
      'The tear layer magnifies corneal astigmatism',
      'The tear layer eliminates the need for cylinder correction'
    ],
    correctAnswer: 1,
    explanation: 'When an RGP lens is placed on the eye, the tear layer between the lens and cornea neutralizes corneal astigmatism. The rigid lens creates a new front surface, and the tear film fills the space between the lens and cornea, effectively masking corneal irregularities. This is why RGP lenses can correct regular and irregular astigmatism without cylindrical power in the lens itself.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-021',
    question: 'What does the optical zone diameter represent in an RGP lens?',
    options: [
      'The total diameter of the lens',
      'The central portion of the lens that provides the refractive correction',
      'The area of transition between base curve and peripheral curves',
      'The diameter of the pupil'
    ],
    correctAnswer: 1,
    explanation: 'The optical zone diameter represents the central portion of the lens that provides the refractive correction. This zone typically has a uniform base curve and is where the lens power is ground. The optical zone diameter is usually 1-2 mm smaller than the total lens diameter, leaving room for peripheral curves.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-022',
    question: 'What is the typical edge design for an RGP lens?',
    options: [
      'Sharp and pointed',
      'Squared off with 90-degree angles',
      'Rounded and blended for comfort',
      'Beveled only on the front surface'
    ],
    correctAnswer: 2,
    explanation: 'The typical edge design for an RGP lens is rounded and blended for comfort. A properly designed edge has anterior and posterior blend curves that create a smooth junction with the peripheral curves, minimizing lid awareness and optimizing comfort while maintaining appropriate edge lift for tear exchange.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-023',
    question: 'How does increasing the overall diameter of an RGP lens affect its fitting relationship?',
    options: [
      'Makes the lens fit more steeply',
      'Makes the lens fit flatter',
      'Has no effect on the fitting relationship',
      'Always improves centration regardless of base curve'
    ],
    correctAnswer: 0,
    explanation: 'Increasing the overall diameter of an RGP lens makes the lens fit more steeply. Larger diameter lenses bridge more of the corneal surface and align with the flatter peripheral cornea, requiring a steeper base curve to maintain an appropriate fitting relationship. This is why base curve must be adjusted when diameter is changed.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'hard'
  },
  {
    id: 'quiz-diagnostic-fitting-024',
    question: 'What is the purpose of fenestrations in some RGP lens designs?',
    options: [
      'To increase lens stability',
      'To enhance oxygen transmission and tear exchange',
      'To decrease lens thickness',
      'To improve optical quality'
    ],
    correctAnswer: 1,
    explanation: 'The purpose of fenestrations (small holes) in some RGP lens designs is to enhance oxygen transmission and tear exchange. These holes allow additional pathways for tear circulation and oxygen delivery, potentially reducing hypoxic complications. They are most commonly used in scleral lenses or specialty designs where tear exchange might otherwise be limited.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'medium'
  },
  {
    id: 'quiz-diagnostic-fitting-025',
    question: 'What happens to the effective power of an RGP lens when it is placed on the eye compared to its labeled power?',
    options: [
      'The effective power always remains exactly the same as the labeled power',
      'The effective power always increases by exactly 0.25D',
      'The effective power changes based on the tear lens formed between the lens and cornea',
      'The effective power always decreases by exactly 0.50D'
    ],
    correctAnswer: 2,
    explanation: 'The effective power of an RGP lens when placed on the eye changes based on the tear lens formed between the lens and cornea. This tear lens has optical power that adds to or subtracts from the labeled lens power, depending on the fitting relationship. If the base curve is flatter than K, the tear lens adds minus power; if steeper than K, it adds plus power.',
    category: 'diagnostic-fitting',
    subcategory: 'rgp-lens-parameters',
    difficulty: 'hard'
  }
]; 