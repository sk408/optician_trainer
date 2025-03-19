import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Laboratory Procedures
 * 
 * Topics covered:
 * - Lens Fabrication and Processing
 * - Quality Control and Verification
 * - Tools and Equipment
 */

export const laboratoryProceduresQuestions: ExamQuestion[] = [
  // Lens Fabrication and Processing
  {
    id: 'abo-lab-001',
    question: 'What is the purpose of blocking a lens during the surfacing process?',
    options: [
      'To verify the lens power',
      'To hold the lens in place during grinding and polishing',
      'To check for cylinder axis alignment',
      'To prevent lens fracture during edging'
    ],
    correctAnswer: 1,
    explanation: 'Blocking a lens during the surfacing process is done to hold the lens in place during grinding and polishing. The lens blank is attached to a metal block with a specific pitch or adhesive that maintains the correct positioning throughout manufacturing.',
    category: 'laboratory-procedures',
    subcategory: 'lens-fabrication',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-002',
    question: 'What is the process of removing the rough, sharp edges of a finished lens called?',
    options: [
      'Polishing',
      'Deblocking',
      'Safety beveling',
      'Resurfacing'
    ],
    correctAnswer: 2,
    explanation: 'Safety beveling is the process of removing the rough, sharp edges of a finished lens. This process rounds the edges to reduce the risk of injury and improve comfort for the wearer.',
    category: 'laboratory-procedures',
    subcategory: 'lens-fabrication',
    difficulty: 'easy'
  },
  {
    id: 'abo-lab-003',
    question: 'What machine is used to create the optical curve on uncut lens blanks?',
    options: [
      'Lensometer',
      'Generator',
      'Edger',
      'Slit lamp'
    ],
    correctAnswer: 1,
    explanation: 'A generator is used to create the optical curve on uncut lens blanks. It cuts the basic curve into the lens blank according to the prescription requirements.',
    category: 'laboratory-procedures',
    subcategory: 'lens-fabrication',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-004',
    question: 'What is the purpose of lens "breaking" or "spotting"?',
    options: [
      'To identify the optical center',
      'To crack the lens for recycling',
      'To polish the lens edges',
      'To remove the anti-reflective coating'
    ],
    correctAnswer: 0,
    explanation: 'Lens "breaking" or "spotting" is done to identify the optical center of a lens. This process involves placing marks on the lens to indicate where the optical center is located, which is crucial for proper lens alignment.',
    category: 'laboratory-procedures',
    subcategory: 'lens-fabrication',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-005',
    question: 'What is the purpose of a lap tool in lens fabrication?',
    options: [
      'To measure lens power',
      'To remove lens coatings',
      'To provide a curved surface for polishing the lens',
      'To cut the lens to the shape of the frame'
    ],
    correctAnswer: 2,
    explanation: 'A lap tool is used to provide a curved surface for polishing the lens. It has a specific curvature that matches the desired lens surface, allowing for precise polishing to achieve the proper optical properties.',
    category: 'laboratory-procedures',
    subcategory: 'lens-fabrication',
    difficulty: 'medium'
  },
  
  // Quality Control and Verification
  {
    id: 'abo-lab-006',
    question: 'What instrument is commonly used to verify the optical center and power of a finished lens?',
    options: [
      'Keratometer',
      'Lensometer',
      'Pupillometer',
      'Tonometer'
    ],
    correctAnswer: 1,
    explanation: 'A lensometer (also called a focimeter or vertometer) is commonly used to verify the optical center and power of a finished lens. It measures the sphere, cylinder, axis, and prism of the lens.',
    category: 'laboratory-procedures',
    subcategory: 'quality-control',
    difficulty: 'easy'
  },
  {
    id: 'abo-lab-007',
    question: 'What is the ANSI Z80.1 standard tolerance for sphere power in a finished prescription between +/- 0.00D and 6.50D?',
    options: [
      '+/- 0.06D',
      '+/- 0.13D',
      '+/- 0.25D',
      '+/- 0.50D'
    ],
    correctAnswer: 2,
    explanation: 'According to ANSI Z80.1 standards, the tolerance for sphere power in a finished prescription between +/- 0.00D and 6.50D is +/- 0.13D.',
    category: 'laboratory-procedures',
    subcategory: 'quality-control',
    difficulty: 'hard'
  },
  {
    id: 'abo-lab-008',
    question: 'What instrument would be used to check for lens surface imperfections?',
    options: [
      'Lensometer',
      'Radiuscope',
      'Surface gauge',
      'Polariscope'
    ],
    correctAnswer: 3,
    explanation: 'A polariscope would be used to check for lens surface imperfections. It uses polarized light to reveal internal stresses, imperfections, and defects in lenses that might not be visible to the naked eye.',
    category: 'laboratory-procedures',
    subcategory: 'quality-control',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-009',
    question: 'What is the maximum allowed vertical prismatic imbalance at the reading level for a lined bifocal according to ANSI standards?',
    options: [
      '0.25 diopters',
      '0.50 diopters',
      '0.75 diopters',
      '1.00 diopters'
    ],
    correctAnswer: 3,
    explanation: 'According to ANSI standards, the maximum allowed vertical prismatic imbalance at the reading level for a lined bifocal is 1.00 diopters. This ensures comfortable binocular vision when using the near portion of the lens.',
    category: 'laboratory-procedures',
    subcategory: 'quality-control',
    difficulty: 'hard'
  },
  {
    id: 'abo-lab-010',
    question: 'When checking a progressive lens for correct position, what marking indicates the fitting cross?',
    options: [
      'Circle',
      'Square',
      'Triangle',
      'Cross'
    ],
    correctAnswer: 3,
    explanation: 'When checking a progressive lens for correct position, a cross marking indicates the fitting cross. This reference point is crucial for proper positioning of the lens in relation to the pupil.',
    category: 'laboratory-procedures',
    subcategory: 'quality-control',
    difficulty: 'medium'
  },
  
  // Tools and Equipment
  {
    id: 'abo-lab-011',
    question: 'What tool is used to determine the base curve of a finished lens?',
    options: [
      'Lens clock',
      'Lensometer',
      'Pupillometer',
      'Thickness gauge'
    ],
    correctAnswer: 0,
    explanation: 'A lens clock (also called a Geneva lens measure) is used to determine the base curve of a finished lens. It measures the front and back surface curvatures of a lens in diopters.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'easy'
  },
  {
    id: 'abo-lab-012',
    question: 'What is the primary function of a pattern maker?',
    options: [
      'To create frame templates for edging lenses',
      'To measure pupillary distance',
      'To check for surface imperfections',
      'To verify lens power'
    ],
    correctAnswer: 0,
    explanation: 'The primary function of a pattern maker is to create frame templates for edging lenses. It traces the shape of a frame and creates a pattern that guides the edger in cutting the lens to the correct shape.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-013',
    question: 'What tool is used to verify the thickness of a lens at various points?',
    options: [
      'Lensometer',
      'Thickness gauge',
      'Pupillometer',
      'Radiuscope'
    ],
    correctAnswer: 1,
    explanation: 'A thickness gauge is used to verify the thickness of a lens at various points. This measurement is important for aesthetics, weight considerations, and ensuring compliance with prescription requirements.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'easy'
  },
  {
    id: 'abo-lab-014',
    question: 'What device is used to heat plastic frames for adjustments?',
    options: [
      'Ultrasonic cleaner',
      'Frame warmer',
      'Edger',
      'Pattern maker'
    ],
    correctAnswer: 1,
    explanation: 'A frame warmer is used to heat plastic frames for adjustments. It softens the plastic material allowing for safe and effective bending and adjusting without damaging the frame.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'easy'
  },
  {
    id: 'abo-lab-015',
    question: 'What is the purpose of using a UV meter in an optical laboratory?',
    options: [
      'To measure the temperature of edging machines',
      'To test the UV protection of lenses',
      'To verify prescription accuracy',
      'To check frame dimensions'
    ],
    correctAnswer: 1,
    explanation: 'A UV meter is used to test the UV protection of lenses. It measures the amount of ultraviolet light that passes through a lens, ensuring that UV-protective lenses are providing the claimed level of protection.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-016',
    question: 'What tool is used to determine if a lens has been properly hardened with an anti-scratch coating?',
    options: [
      'Steel wool test device',
      'Polariscope',
      'Saline solution',
      'UV light'
    ],
    correctAnswer: 0,
    explanation: 'A steel wool test device is used to determine if a lens has been properly hardened with an anti-scratch coating. It standardizes the pressure and number of strokes with steel wool against the lens surface to test for scratch resistance.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-017',
    question: 'What instrument is used to mark the optical center of a lens?',
    options: [
      'Lensometer',
      'Layout blocker',
      'Spotting device',
      'Pattern maker'
    ],
    correctAnswer: 2,
    explanation: 'A spotting device is used to mark the optical center of a lens. It precisely indicates where the optical center is located, which is essential for proper lens alignment during edging and mounting.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-018',
    question: 'What is the primary function of a lens deblocking unit?',
    options: [
      'To remove lens coatings',
      'To separate the lens from the block after processing',
      'To check for optical imperfections',
      'To mount lenses in frames'
    ],
    correctAnswer: 1,
    explanation: 'The primary function of a lens deblocking unit is to separate the lens from the block after processing. This typically involves applying controlled heat to soften the adhesive or pitch that holds the lens to the metal block.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-019',
    question: 'What tool is commonly used to verify the location of the progressive corridor?',
    options: [
      'Pupillometer',
      'Progressive identifier',
      'Lens clock',
      'Thickness gauge'
    ],
    correctAnswer: 1,
    explanation: 'A progressive identifier is commonly used to verify the location of the progressive corridor. It helps identify the positions of the distance, intermediate, and near viewing areas of progressive lenses.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'medium'
  },
  {
    id: 'abo-lab-020',
    question: 'What is the purpose of a frame ruler (PD ruler) in laboratory procedures?',
    options: [
      'To measure the diameter of lenses',
      'To measure the distance between lens centers',
      'To verify the lens thickness',
      'To check the frame material'
    ],
    correctAnswer: 1,
    explanation: 'A frame ruler (PD ruler) is used to measure the distance between lens centers in frames. This measurement is critical for proper lens placement to ensure the optical centers align with the patient\'s pupils.',
    category: 'laboratory-procedures',
    subcategory: 'tools-equipment',
    difficulty: 'easy'
  }
]; 