import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Quiz Questions: Dispensing Procedures
 * 
 * Topics covered:
 * - Frame Fitting
 * - Frame Materials
 * - Frame Adjustments
 */

export const dispensingQuizQuestions: ExamQuestion[] = [
  // Frame Fitting
  {
    id: 'quiz-dispensing-001',
    question: 'What is the proper vertex distance for standard eyeglasses?',
    options: [
      '5-7 mm',
      '8-10 mm',
      '12-14 mm',
      '18-22 mm'
    ],
    correctAnswer: 2,
    explanation: 'The proper vertex distance for standard eyeglasses is typically 12-14 mm. This is the distance from the back surface of the lens to the front surface of the cornea.',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-002',
    question: 'Which face shape is best suited for round frames?',
    options: [
      'Round face',
      'Oval face',
      'Square face',
      'Heart-shaped face'
    ],
    correctAnswer: 2,
    explanation: 'Square faces are best suited for round frames. The curved lines of round frames help to soften the angular features of a square face, creating a balanced appearance.',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-003',
    question: 'What is pantoscopic tilt?',
    options: [
      'The angle of the frame front from side to side',
      'The angle of the frame front relative to the vertical plane',
      'The distance between the lenses',
      'The curvature of the frame front'
    ],
    correctAnswer: 1,
    explanation: 'Pantoscopic tilt is the angle of the frame front relative to the vertical plane, with the top of the frame tilted away from the face and the bottom closer to the face. Typically, 8-12 degrees is considered normal.',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-004',
    question: 'What measurement determines the width of the bridge of a frame?',
    options: [
      'DBL (Distance Between Lenses)',
      'ED (Effective Diameter)',
      'Frame PD (Pupillary Distance)',
      'Bridge Size'
    ],
    correctAnswer: 3,
    explanation: 'The Bridge Size specifically measures the width of the bridge of a frame. It is typically denoted by the middle number in frame measurements (e.g., 52-18-140, where 18 is the bridge size in millimeters).',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-005',
    question: 'Why is proper bridge fit important?',
    options: [
      'It only affects cosmetic appearance',
      'It only affects lens positioning',
      'It affects lens positioning, comfort, and prevents slipping',
      'It only prevents the frame from breaking'
    ],
    correctAnswer: 2,
    explanation: 'Proper bridge fit is crucial as it affects lens positioning (proper optical alignment), comfort for the wearer, and prevents slipping of the eyewear down the nose.',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-006',
    question: 'What is retroscopic tilt?',
    options: [
      'The angle of the frame front with the top tilted toward the face',
      'The angle of the frame from ear to ear',
      'The curvature of the frame around the face',
      'The angle of the temples relative to the frame front'
    ],
    correctAnswer: 0,
    explanation: 'Retroscopic tilt is the angle of the frame front with the top tilted toward the face and the bottom away from the face—the opposite of pantoscopic tilt. It\'s rarely used in standard dispensing.',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-007',
    question: 'What is the "effective diameter" in frame measurements?',
    options: [
      'The actual lens diameter',
      'The vertical height of the lens',
      'The horizontal width of the lens',
      'The average of horizontal and vertical dimensions'
    ],
    correctAnswer: 2,
    explanation: 'The effective diameter (ED) is the horizontal width of the lens. In boxing system measurements, it\'s the first number in the frame size specification (e.g., 52-18-140, where 52 is the ED).',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-008',
    question: 'What is face form (also called "wrap")?',
    options: [
      'The angle of the temples relative to the horizontal plane',
      'The curvature of the frame front around the face',
      'The angle of the frame front relative to the vertical plane',
      'The width of the frame relative to the face'
    ],
    correctAnswer: 1,
    explanation: 'Face form or wrap is the curvature of the frame front around the face, creating a horizontal angle. This provides better peripheral vision and a better cosmetic appearance while keeping the lenses at a consistent distance from the eyes.',
    category: 'dispensing',
    subcategory: 'frame-fit',
    difficulty: 'medium'
  },
  
  // Frame Materials
  {
    id: 'quiz-dispensing-009',
    question: 'Which frame material is most likely to cause allergic reactions?',
    options: [
      'Titanium',
      'Nickel-containing metal alloys',
      'Zylonite (cellulose acetate)',
      'TR-90 (nylon)'
    ],
    correctAnswer: 1,
    explanation: 'Nickel-containing metal alloys are most likely to cause allergic reactions. Nickel allergy is one of the most common causes of contact dermatitis in eyewear wearers.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-010',
    question: 'Which frame material offers memory properties, returning to its original shape after bending?',
    options: [
      'Standard stainless steel',
      'Zylonite',
      'Flexon or other memory metals',
      'CR-39'
    ],
    correctAnswer: 2,
    explanation: 'Memory metals like Flexon (a titanium-nickel alloy) offer memory properties, allowing them to return to their original shape after bending. This makes them durable and comfortable for active wearers.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-011',
    question: 'What is the primary advantage of acetate frames over injection-molded plastic frames?',
    options: [
      'They are more lightweight',
      'They offer better color richness and depth',
      'They are more flexible',
      'They are less expensive'
    ],
    correctAnswer: 1,
    explanation: 'Acetate frames offer better color richness, depth, and translucency compared to injection-molded plastic frames. They can be layered with different colors and patterns for a distinctive appearance.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-012',
    question: 'What property makes titanium frames particularly desirable?',
    options: [
      'Low cost',
      'Lightweight, strong, and hypoallergenic properties',
      'High flexibility',
      'Vibrant colors'
    ],
    correctAnswer: 1,
    explanation: 'Titanium frames are desirable due to their lightweight nature (40% lighter than standard metals), exceptional strength (as strong as steel but 45% lighter), and hypoallergenic properties, making them ideal for sensitive skin.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-013',
    question: 'How is acetate frame material typically adjusted?',
    options: [
      'Heating only',
      'Cold bending only',
      'Heating and then manipulating',
      'Chemical softening'
    ],
    correctAnswer: 2,
    explanation: 'Acetate frames are typically adjusted by heating them (using a frame warmer, hot air, or hot water) and then manipulating them while warm. The material becomes pliable when heated and retains its new shape when cooled.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-014',
    question: 'Which frame material is commonly used for safety eyewear?',
    options: [
      'Nylon',
      'Acetate',
      'Beta-titanium',
      'Wood'
    ],
    correctAnswer: 0,
    explanation: 'Nylon (and nylon blends like TR-90) is commonly used for safety eyewear due to its high impact resistance, durability, and flexibility. It\'s lightweight and can withstand extreme temperatures.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-015',
    question: 'What is beryllium used for in eyewear frames?',
    options: [
      'As a hypoallergenic alternative to nickel',
      'To add weight to lightweight frames',
      'For decorative purposes only',
      'To increase frame brittleness'
    ],
    correctAnswer: 0,
    explanation: 'Beryllium is used as a hypoallergenic alternative to nickel in metal eyewear frames. It offers corrosion resistance (especially to salt and sweat), durability, and is suitable for wearers with metal allergies.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-016',
    question: 'What is Monel?',
    options: [
      'A type of plastic material',
      'A copper-nickel alloy commonly used in frames',
      'A proprietary titanium alloy',
      'A trade name for aluminum frames'
    ],
    correctAnswer: 1,
    explanation: 'Monel is a copper-nickel alloy commonly used in eyewear frames. It\'s malleable, corrosion-resistant, and can be easily plated with other metals for various finishes and colors. However, it does contain nickel which can cause allergic reactions in some people.',
    category: 'dispensing',
    subcategory: 'frame-materials',
    difficulty: 'medium'
  },
  
  // Frame Adjustments
  {
    id: 'quiz-dispensing-017',
    question: 'What adjustment should be made if a frame sits too high on the face?',
    options: [
      'Increase pantoscopic tilt',
      'Decrease pantoscopic tilt',
      'Widen the bridge',
      'Narrow the bridge'
    ],
    correctAnswer: 0,
    explanation: 'If a frame sits too high on the face, increasing the pantoscopic tilt (tilting the top of the frame further away from the face) will help lower the frame position.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-018',
    question: 'What is the proper method for adjusting metal eyewear temples?',
    options: [
      'Bend them cold at any point',
      'Heat them first, then bend',
      'Bend only at the bend points or junction areas',
      'Adjust only the nosepads instead of the temples'
    ],
    correctAnswer: 2,
    explanation: 'The proper method for adjusting metal eyewear temples is to bend them only at the bend points or junction areas (such as where the temple meets the endpiece or at the bend near the ear). Bending elsewhere can cause metal fatigue and breakage.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-019',
    question: 'If a patient complains that their glasses slip down their nose, what is the most likely adjustment needed?',
    options: [
      'Loosen the temples',
      'Tighten the temples or adjust nosepads',
      'Increase pantoscopic tilt',
      'Decrease face form'
    ],
    correctAnswer: 1,
    explanation: 'If glasses slip down the nose, the most likely adjustment needed is to tighten the temples (by bending the temple ends inward or downward) or adjust the nosepads (bringing them closer together or angling them to increase friction on the nose).',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-020',
    question: 'What problem might result from excessive pantoscopic tilt?',
    options: [
      'Frame sitting too high',
      'Distorted distance vision',
      'Frame flaring away from the face at the bottom',
      'Increased pressure on the nose'
    ],
    correctAnswer: 2,
    explanation: 'Excessive pantoscopic tilt can cause the frame to flare away from the face at the bottom, creating an uneven fit, cosmetic issues, and potentially causing the lenses to sit at an improper angle relative to the visual axis.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-021',
    question: 'When adjusting acetate frames, what must be considered regarding the material\'s properties?',
    options: [
      'Acetate can only be adjusted when cold',
      'Acetate must be heated before adjusting to avoid breakage',
      'Acetate can only be adjusted using specialized tools',
      'Acetate cannot be adjusted at all'
    ],
    correctAnswer: 1,
    explanation: 'Acetate must be heated before adjusting to avoid breakage. The material becomes pliable when warm and can then be safely manipulated without cracking or breaking.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-022',
    question: 'What tool is typically used to heat acetate frames for adjustment?',
    options: [
      'Pliers',
      'Frame warmer',
      'Acetone solution',
      'Ultrasonic cleaner'
    ],
    correctAnswer: 1,
    explanation: 'A frame warmer (salt pan or bead warmer) is typically used to heat acetate frames for adjustment. This provides even, controlled heat that makes the material pliable without damaging it.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-dispensing-023',
    question: 'If a frame is consistently sitting crookedly (one side higher than the other), what adjustment is likely needed?',
    options: [
      'Increase pantoscopic tilt on both sides',
      'Adjust temple length equally',
      'Level the frame by adjusting temples or nosepads unevenly',
      'Increase face form symmetrically'
    ],
    correctAnswer: 2,
    explanation: 'If a frame sits crookedly with one side higher than the other, you need to level it by adjusting the temples or nosepads unevenly. For example, you might lower one side by adjusting the temple downward or raise the other side by adjusting the temple upward or adjusting the nosepads.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-024',
    question: 'What is the standard angle for temple ends (the part that goes behind the ear)?',
    options: [
      '0 degrees (straight)',
      '45 degrees',
      '90 degrees',
      'There is no standard angle'
    ],
    correctAnswer: 1,
    explanation: 'The standard angle for temple ends (the portion that goes behind the ear) is approximately 45 degrees down from horizontal. This provides comfort and helps keep the eyewear secure on the face.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-dispensing-025',
    question: 'What adjustment is needed if the eyewear is causing pressure or pain behind the ears?',
    options: [
      'Increase the length of the temples',
      'Decrease the bend in the temple ends',
      'Add more pantoscopic tilt',
      'Tighten the screws in the hinges'
    ],
    correctAnswer: 1,
    explanation: 'If eyewear is causing pressure or pain behind the ears, the temple ends are likely bent too tightly. Decreasing the bend in the temple ends (making them straighter or reducing the downward angle) will relieve the pressure.',
    category: 'dispensing',
    subcategory: 'frame-adjustments',
    difficulty: 'easy'
  }
]; 