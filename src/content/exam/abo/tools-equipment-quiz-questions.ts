import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Quiz Questions: Tools and Equipment
 * 
 * Topics covered:
 * - Basic Optical Tools
 * - Lensometers
 * - Measuring Devices
 */

export const toolsEquipmentQuizQuestions: ExamQuestion[] = [
  // Basic Optical Tools
  {
    id: 'quiz-tools-001',
    question: 'Which tool is primarily used to warm frames for adjustment?',
    options: [
      'Lens inserter',
      'Frame warmer',
      'Lens clock',
      'Pupillometer'
    ],
    correctAnswer: 1,
    explanation: 'Frame warmers (including salt pans, hot air blowers, or bead warmers) are used to warm plastic frames to make them more pliable for adjustments. This helps prevent cracking or damaging the frame during the adjustment process.',
    category: 'tools-equipment',
    subcategory: 'basic-tools',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-002',
    question: 'What is the primary purpose of a lens clock?',
    options: [
      'To verify lens prescription power',
      'To measure frame dimensions',
      'To measure base curve of a lens',
      'To identify lens material'
    ],
    correctAnswer: 2,
    explanation: 'A lens clock (or lens gauge) is primarily used to measure the base curve of a lens by determining the curvature of its surface. It can also help determine the approximate power of a lens, but that is not its primary purpose.',
    category: 'tools-equipment',
    subcategory: 'basic-tools',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-003',
    question: 'Which tool is essential for ensuring accurate placement of progressive lens markings?',
    options: [
      'Lens coating machine',
      'Pupillometer',
      'Manual PD ruler',
      'Progressive lens marking device'
    ],
    correctAnswer: 3,
    explanation: 'A progressive lens marking device ensures accurate placement of progressive lens markings. This tool typically has a leveling system to ensure horizontal alignment and properly mark the fitting cross and other reference points that are crucial for proper progressive lens positioning.',
    category: 'tools-equipment',
    subcategory: 'basic-tools',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-004',
    question: 'What type of pliers would be most appropriate for adjusting plastic frame temples?',
    options: [
      'Snipe nose pliers',
      'Adjusting pliers with nylon jaw covers',
      'Metal cutting pliers',
      'Rimless mounting pliers'
    ],
    correctAnswer: 1,
    explanation: 'Adjusting pliers with nylon jaw covers are most appropriate for plastic frame adjustments. The nylon covers prevent marking or damaging the plastic surface while allowing necessary adjustments to be made to temple angles or other frame components.',
    category: 'tools-equipment',
    subcategory: 'basic-tools',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-005',
    question: 'Which tool is used to verify the axis of cylinder in a prescription?',
    options: [
      'Lens clock',
      'Pupillometer',
      'Lensometer',
      'PD ruler'
    ],
    correctAnswer: 2,
    explanation: 'A lensometer (also called a vertometer or focimeter) is used to verify the axis of cylinder in a prescription. It allows an optician to determine the precise orientation of the cylinder axis as well as other prescription parameters.',
    category: 'tools-equipment',
    subcategory: 'lensometers',
    difficulty: 'easy'
  },
  
  // Lensometers
  {
    id: 'quiz-tools-006',
    question: 'What is the first step in using a manual lensometer correctly?',
    options: [
      'Positioning the lens',
      'Finding the optical center',
      'Focusing the eyepiece',
      'Reading the cylinder power'
    ],
    correctAnswer: 2,
    explanation: "The first step in using a manual lensometer correctly is focusing the eyepiece. This ensures that the mires (target pattern) are clear for the user's vision and prevents inaccurate readings due to the user's own refractive error. This should be done before positioning any lens for measurement.",
    category: 'tools-equipment',
    subcategory: 'lensometers',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-007',
    question: 'What do the series of concentric circles (mires) in a lensometer target represent?',
    options: [
      'Diopters of sphere power',
      'Diopters of cylinder power',
      'Axis markings',
      'Prism measurements'
    ],
    correctAnswer: 0,
    explanation: 'The concentric circles or rings in a lensometer target represent diopters of sphere power. Each ring typically represents 0.25 diopters, allowing the optician to read the sphere power by counting the number of rings from the center.',
    category: 'tools-equipment',
    subcategory: 'lensometers',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-008',
    question: 'How is prism verified using a manual lensometer?',
    options: [
      'By the clarity of the mires',
      'By the position of the mires in relation to the target crosshairs',
      'By the thickness of the lens',
      'By the color of the mires'
    ],
    correctAnswer: 1,
    explanation: 'Prism is verified in a manual lensometer by observing the position of the mires in relation to the target crosshairs. If prism is present, the mires will be displaced from the center of the crosshairs. The direction and amount of displacement indicate the base direction and amount of prism.',
    category: 'tools-equipment',
    subcategory: 'lensometers',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-009',
    question: 'What is the typical scale used for reading cylinder power on most lensometers?',
    options: [
      '0.10 diopter steps',
      '0.12 diopter steps',
      '0.25 diopter steps',
      '0.50 diopter steps'
    ],
    correctAnswer: 2,
    explanation: 'Most lensometers use 0.25 diopter steps for reading cylinder power. This is the standard increment used in prescriptions and lens manufacturing, allowing for precise measurement of the astigmatic correction.',
    category: 'tools-equipment',
    subcategory: 'lensometers',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-010',
    question: 'What happens to the mires in a lensometer when measuring an astigmatic lens?',
    options: [
      'They appear as a single clear circle',
      'They split into two lines at 90 degrees to each other',
      'They appear as multiple overlapping circles',
      'They disappear completely'
    ],
    correctAnswer: 1,
    explanation: 'When measuring an astigmatic lens with a lensometer, the mires split into two lines at 90 degrees to each other. These lines represent the principal meridians of the lens, with the power difference between them indicating the cylinder power.',
    category: 'tools-equipment',
    subcategory: 'lensometers',
    difficulty: 'medium'
  },
  
  // Measuring Devices
  {
    id: 'quiz-tools-011',
    question: 'What is the advantage of a digital pupillometer over a manual PD ruler?',
    options: [
      'It measures vertex distance',
      'It measures frame wrap',
      'It can measure monocular PDs more accurately',
      'It measures pantoscopic tilt'
    ],
    correctAnswer: 2,
    explanation: 'A digital pupillometer can measure monocular PDs more accurately than a manual PD ruler. It typically uses corneal reflection and calibrated optics to precisely locate each pupil center independently, reducing the potential for human error in measurement.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-012',
    question: 'Which measurement device is specifically designed to measure the curvature of the cornea?',
    options: [
      'Pupillometer',
      'Keratometer',
      'Lensometer',
      'Lens clock'
    ],
    correctAnswer: 1,
    explanation: "A keratometer is specifically designed to measure the curvature of the cornea. It's used to determine the shape and curvature of the corneal surface, which is essential information for contact lens fitting and certain ophthalmic procedures.",
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-013',
    question: 'What type of measuring system is typically used on frame rulers to measure lens diameter?',
    options: [
      'Millimeters',
      'Centimeters',
      'Box system',
      'Inches'
    ],
    correctAnswer: 0,
    explanation: 'Frame rulers typically use millimeters to measure lens diameter. This measurement system is the international standard for ophthalmic measurements and provides the precision needed for proper frame and lens specifications.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-014',
    question: 'What does a digital centration device measure that a manual PD stick cannot?',
    options: [
      'Binocular PD only',
      'Monocular PD only',
      'Multiple fitting parameters including fitting height',
      'Frame width only'
    ],
    correctAnswer: 2,
    explanation: 'A digital centration device can measure multiple fitting parameters simultaneously, including monocular PDs, fitting heights, vertex distance, pantoscopic tilt, and sometimes face form angle. Manual PD sticks are typically limited to horizontal pupillary distance measurements only.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-015',
    question: 'Which tool would be most appropriate for measuring segment height on a bifocal lens?',
    options: [
      'Lens clock',
      'Millimeter ruler with PD scale',
      'Pupillometer',
      'Lensometer'
    ],
    correctAnswer: 1,
    explanation: 'A millimeter ruler with a PD scale would be most appropriate for measuring segment height on a bifocal lens. This tool allows for precise vertical measurement from the bottom of the lens (or frame) to the top of the bifocal segment.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-016',
    question: 'What is the purpose of an optical radiuscope?',
    options: [
      'To measure the base curve of finished lenses',
      'To verify lens prescription',
      'To measure pupillary distance',
      'To cut lenses to shape'
    ],
    correctAnswer: 0,
    explanation: 'An optical radiuscope is used to measure the base curve of finished lenses with high precision. Unlike a lens clock, which provides an approximate measurement, a radiuscope can determine the exact radius of curvature of a lens surface, which is critical for certain specialty applications.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'hard'
  },
  {
    id: 'quiz-tools-017',
    question: 'Which of the following tools is used to verify the thickness of a lens?',
    options: [
      'Lens clock',
      'Thickness gauge',
      'Pupillometer',
      'Lensometer'
    ],
    correctAnswer: 1,
    explanation: 'A thickness gauge is used to verify the thickness of a lens. This precision measuring tool typically uses a mechanical dial or digital readout to determine the exact thickness at various points on the lens, which is important for high-power lenses and quality control.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-018',
    question: 'Which tool is essential for marking the optical center of a lens?',
    options: [
      'Layout marker/Lens marker',
      'Pupillometer',
      'PD ruler',
      'Frame heater'
    ],
    correctAnswer: 0,
    explanation: "A layout marker or lens marker is essential for marking the optical center of a lens. This tool typically uses ink to place a temporary dot at the exact location where the optical center should be positioned relative to the patient's pupil.",
    category: 'tools-equipment',
    subcategory: 'basic-tools',
    difficulty: 'easy'
  },
  {
    id: 'quiz-tools-019',
    question: 'What would an optician use a frame adjustment tool called a "spanner" for?',
    options: [
      'Adjusting nose pads',
      'Tightening screws on the frame front',
      'Adjusting rimless mountings',
      'Bending metal temples'
    ],
    correctAnswer: 0,
    explanation: 'A spanner is used for adjusting nose pads on frames. This specialized tool allows the optician to grip and precisely adjust the position of metal nose pads to achieve proper fit and comfort for the wearer.',
    category: 'tools-equipment',
    subcategory: 'basic-tools',
    difficulty: 'medium'
  },
  {
    id: 'quiz-tools-020',
    question: 'What is the purpose of a UV meter in an optical laboratory or dispensary?',
    options: [
      'To determine if lenses need UV coating',
      'To measure the UV protection provided by lenses',
      'To test if frame materials contain UV stabilizers',
      'To check if lighting in the dispensary has dangerous UV levels'
    ],
    correctAnswer: 1,
    explanation: 'A UV meter in an optical setting is used to measure the UV protection provided by lenses. This tool helps verify that UV-blocking lenses are actually blocking the claimed amount of ultraviolet radiation, which is important for eye health and protection.',
    category: 'tools-equipment',
    subcategory: 'measuring-devices',
    difficulty: 'medium'
  }
]; 