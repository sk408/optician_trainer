import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Lens Products
 * 
 * Topics covered:
 * - Lens Materials and Characteristics
 * - Lens Treatments and Coatings
 * - Multifocal and Progressive Lenses
 */

export const lensProductsQuestions: ExamQuestion[] = [
  // Lens Materials and Characteristics
  {
    id: 'abo-lens-001',
    question: 'Which lens material has the highest index of refraction?',
    options: [
      'CR-39 (standard plastic)',
      'Polycarbonate',
      'Trivex',
      'High-index 1.74'
    ],
    correctAnswer: 3,
    explanation: 'High-index 1.74 material has the highest index of refraction among these options. The higher the index number, the thinner the lens can be for the same prescription.',
    category: 'lens-products',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-002',
    question: 'Which lens material provides the best impact resistance?',
    options: [
      'CR-39 plastic',
      'Crown glass',
      'Polycarbonate',
      'High-index 1.67'
    ],
    correctAnswer: 2,
    explanation: 'Polycarbonate offers the best impact resistance of these materials, making it an excellent choice for safety eyewear and children\'s glasses.',
    category: 'lens-products',
    subcategory: 'lens-materials',
    difficulty: 'easy'
  },
  {
    id: 'abo-lens-003',
    question: 'What is the Abbe value and why is it important?',
    options: [
      'A measure of lens thickness; important for cosmetic appearance',
      'A measure of light transmission; important for UV protection',
      'A measure of chromatic aberration; important for optical clarity',
      'A measure of impact resistance; important for safety'
    ],
    correctAnswer: 2,
    explanation: 'The Abbe value measures a lens material\'s chromatic aberration or color dispersion. Higher Abbe values indicate less chromatic aberration, resulting in better optical clarity and less color fringing, especially in higher prescriptions.',
    category: 'lens-products',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-004',
    question: 'Which of the following is a disadvantage of glass lenses compared to plastic lenses?',
    options: [
      'Lower scratch resistance',
      'Higher weight',
      'Lower optical clarity',
      'Higher chromatic aberration'
    ],
    correctAnswer: 1,
    explanation: 'Glass lenses are heavier than plastic lenses, making them less comfortable for the wearer, especially in higher prescriptions. However, they typically have better scratch resistance and optical clarity than many plastic materials.',
    category: 'lens-products',
    subcategory: 'lens-materials',
    difficulty: 'easy'
  },
  {
    id: 'abo-lens-005',
    question: 'What is the typical specific gravity of CR-39 plastic lens material?',
    options: [
      '1.18',
      '1.32',
      '1.86',
      '2.54'
    ],
    correctAnswer: 1,
    explanation: 'CR-39 plastic lens material has a specific gravity of approximately 1.32, which is about half the weight of glass (2.54). This lower density contributes to its popularity as a comfortable lens material.',
    category: 'lens-products',
    subcategory: 'lens-materials',
    difficulty: 'hard'
  },
  {
    id: 'abo-lens-006',
    question: 'Which lens material would be MOST appropriate for a high minus prescription where minimizing edge thickness is a priority?',
    options: [
      'CR-39 plastic',
      'Polycarbonate',
      'Trivex',
      'High-index 1.67'
    ],
    correctAnswer: 3,
    explanation: 'High-index 1.67 material would be most appropriate for minimizing edge thickness in a high minus prescription due to its high refractive index, allowing for thinner lenses than lower index materials like CR-39, polycarbonate, or Trivex.',
    category: 'lens-products',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  
  // Lens Treatments and Coatings
  {
    id: 'abo-lens-007',
    question: 'What is the primary purpose of an anti-reflective coating?',
    options: [
      'To protect lenses from scratches',
      'To reduce glare and increase light transmission',
      'To block UV radiation',
      'To darken lenses in sunlight'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of an anti-reflective (AR) coating is to reduce glare by minimizing light reflection from the lens surfaces and to increase light transmission through the lens, resulting in better vision and cosmetic appearance.',
    category: 'lens-products',
    subcategory: 'lens-treatments',
    difficulty: 'easy'
  },
  {
    id: 'abo-lens-008',
    question: 'What is the approximate light reflection percentage from an uncoated lens surface?',
    options: [
      '1-2%',
      '4-8%',
      '10-15%',
      '20-25%'
    ],
    correctAnswer: 1,
    explanation: 'An uncoated lens surface typically reflects approximately 4-8% of incident light, depending on the lens material and index of refraction. AR coatings can reduce this to less than 1%.',
    category: 'lens-products',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-009',
    question: 'Which lens treatment helps reduce eye fatigue from digital device use?',
    options: [
      'UV coating',
      'Blue light filtering treatment',
      'Mirror coating',
      'Polarization'
    ],
    correctAnswer: 1,
    explanation: 'Blue light filtering treatments help reduce eye fatigue associated with digital device use by selectively filtering high-energy visible blue light emitted by digital screens, which may contribute to digital eye strain.',
    category: 'lens-products',
    subcategory: 'lens-treatments',
    difficulty: 'easy'
  },
  {
    id: 'abo-lens-010',
    question: 'What is the primary disadvantage of polarized lenses?',
    options: [
      'They don\'t provide UV protection',
      'They make LCD screens difficult to read',
      'They scratch more easily',
      'They don\'t work well for night driving'
    ],
    correctAnswer: 1,
    explanation: 'A primary disadvantage of polarized lenses is that they can make LCD screens difficult to read, as the polarization may interfere with the visibility of displays on phones, GPS devices, and some dashboard instruments.',
    category: 'lens-products',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-011',
    question: 'What process is used to create a scratch-resistant coating on plastic lenses?',
    options: [
      'Vacuum deposition',
      'Dip coating',
      'Both vacuum deposition and dip coating',
      'Polarization'
    ],
    correctAnswer: 2,
    explanation: 'Both vacuum deposition and dip coating processes can be used to apply scratch-resistant coatings to plastic lenses. Dip coating involves immersing the lens in a solution, while vacuum deposition uses vaporized materials in a vacuum chamber to deposit the coating.',
    category: 'lens-products',
    subcategory: 'lens-treatments',
    difficulty: 'hard'
  },
  {
    id: 'abo-lens-012',
    question: 'Which lens treatment should be applied first when multiple coatings are used?',
    options: [
      'Anti-reflective coating',
      'Scratch-resistant coating',
      'UV coating',
      'Hydrophobic coating'
    ],
    correctAnswer: 1,
    explanation: 'The scratch-resistant coating is typically applied first to the lens surface, followed by other treatments like AR coating. This provides a hard base layer that protects the lens while supporting additional treatments.',
    category: 'lens-products',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  
  // Multifocal and Progressive Lenses
  {
    id: 'abo-lens-013',
    question: 'What is the main advantage of progressive lenses over bifocal lenses?',
    options: [
      'Progressive lenses are less expensive',
      'Progressive lenses eliminate the visible line and provide intermediate vision',
      'Progressive lenses are easier to adapt to',
      'Progressive lenses provide wider reading areas'
    ],
    correctAnswer: 1,
    explanation: 'The main advantage of progressive lenses over bifocals is that they eliminate the visible dividing line while providing a gradual transition between distance, intermediate, and near vision zones, offering vision correction at all distances.',
    category: 'lens-products',
    subcategory: 'multifocal-lenses',
    difficulty: 'easy'
  },
  {
    id: 'abo-lens-014',
    question: 'What is the typical corridor width in a standard progressive lens design?',
    options: [
      '2-3 mm',
      '4-5 mm',
      '7-8 mm',
      '10-12 mm'
    ],
    correctAnswer: 1,
    explanation: 'The typical corridor width in a standard progressive lens design is approximately 4-5 mm. This is the usable portion of the lens for clear intermediate vision as power gradually changes from distance to near.',
    category: 'lens-products',
    subcategory: 'multifocal-lenses',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-015',
    question: 'Which measurement is most critical for properly fitting progressive lenses?',
    options: [
      'Pupillary distance (PD)',
      'Vertex distance',
      'Segment height',
      'Pantoscopic tilt'
    ],
    correctAnswer: 2,
    explanation: 'Segment height (also called fitting height) is the most critical measurement for properly fitting progressive lenses as it determines where the progressive corridor is positioned relative to the pupil, ensuring proper alignment of the various viewing zones.',
    category: 'lens-products',
    subcategory: 'multifocal-lenses',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-016',
    question: 'What distinguishes a "short corridor" progressive lens from a standard progressive design?',
    options: [
      'It has a wider reading area',
      'It has a wider distance area',
      'It has a shorter vertical distance between distance and near zones',
      'It has less peripheral distortion'
    ],
    correctAnswer: 2,
    explanation: 'A "short corridor" progressive lens has a shorter vertical distance between the distance and near zones, allowing it to fit in smaller frames. The trade-off is typically a narrower corridor and potentially more peripheral distortion.',
    category: 'lens-products',
    subcategory: 'multifocal-lenses',
    difficulty: 'medium'
  },
  {
    id: 'abo-lens-017',
    question: 'What is an "office" or "computer" progressive lens designed for?',
    options: [
      'Only close-up work',
      'Only distance vision',
      'Primarily intermediate and near vision tasks',
      'Only outdoor activities'
    ],
    correctAnswer: 2,
    explanation: 'An "office" or "computer" progressive lens is specially designed for intermediate and near vision tasks, providing wider and more comfortable viewing zones for computer work and reading, with less emphasis on distance vision.',
    category: 'lens-products',
    subcategory: 'multifocal-lenses',
    difficulty: 'easy'
  },
  {
    id: 'abo-lens-018',
    question: 'Which of these factors does NOT affect adaptation to progressive lenses?',
    options: [
      'Previous lens design',
      'Lens material index',
      'Frame size and shape',
      'Add power'
    ],
    correctAnswer: 1,
    explanation: 'The lens material index generally does not affect adaptation to progressive lenses. Factors that do affect adaptation include previous lens design (what the patient is used to), frame size and shape (affecting usable lens area), and add power (higher adds create more peripheral distortion).',
    category: 'lens-products',
    subcategory: 'multifocal-lenses',
    difficulty: 'hard'
  }
]; 