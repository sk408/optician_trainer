import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Quiz Questions: Optical Theory
 * 
 * Topics covered:
 * - Basic Principles of Light
 * - Types of Lenses
 * - Prism
 */

export const opticalTheoryQuizQuestions: ExamQuestion[] = [
  // Basic Principles of Light
  {
    id: 'quiz-optical-theory-001',
    question: 'Which part of the electromagnetic spectrum is visible light?',
    options: [
      '100-380 nm',
      '380-700 nm',
      '700-1000 nm',
      '1000-2000 nm'
    ],
    correctAnswer: 1,
    explanation: 'Visible light occupies the 380-700 nm range of the electromagnetic spectrum. Below 380 nm is ultraviolet light, and above 700 nm is infrared light.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-002',
    question: 'What happens when light encounters a boundary between two different materials?',
    options: [
      'It is only transmitted',
      'It is only reflected',
      'It is only absorbed',
      'It may be reflected, absorbed, and transmitted'
    ],
    correctAnswer: 3,
    explanation: 'When light encounters a boundary between materials, it can be reflected, absorbed, and transmitted in varying proportions depending on the properties of the materials and the angle of incidence.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-003',
    question: 'Which color of light has the longest wavelength?',
    options: [
      'Blue',
      'Green',
      'Yellow',
      'Red'
    ],
    correctAnswer: 3,
    explanation: 'Red light has the longest wavelength in the visible spectrum, at approximately 620-750 nm. Blue light has a shorter wavelength of about 450-495 nm.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-004',
    question: 'What is Snell\'s Law used to calculate?',
    options: [
      'Light absorption',
      'Light refraction',
      'Light dispersion',
      'Light reflection'
    ],
    correctAnswer: 1,
    explanation: 'Snell\'s Law (n₁sin(θ₁) = n₂sin(θ₂)) is used to calculate refraction - the bending of light as it passes from one medium to another with a different refractive index.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-005',
    question: 'What is the index of refraction of air?',
    options: [
      'Approximately 1.00',
      'Approximately 1.33',
      'Approximately 1.50',
      'Approximately 1.70'
    ],
    correctAnswer: 0,
    explanation: 'The index of refraction of air is approximately 1.00 (usually given as 1.0003). This is very close to the value of a vacuum (exactly 1.00).',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-006',
    question: 'Which phenomenon causes white light to separate into different colors when passing through a prism?',
    options: [
      'Reflection',
      'Refraction',
      'Dispersion',
      'Absorption'
    ],
    correctAnswer: 2,
    explanation: 'Dispersion causes white light to separate into its component colors when passing through a prism. This occurs because different wavelengths of light refract at slightly different angles.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-007',
    question: 'What happens to light speed when it enters a denser medium?',
    options: [
      'It increases',
      'It decreases',
      'It remains the same',
      'It reverses direction'
    ],
    correctAnswer: 1,
    explanation: 'Light speed decreases when entering a denser medium with a higher refractive index. This slowing down of light causes refraction at the boundary between media.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-008',
    question: 'What is the critical angle in optics?',
    options: [
      'The angle at which light completely refracts',
      'The angle at which no light is absorbed',
      'The angle at which total internal reflection occurs',
      'The angle at which dispersion is maximized'
    ],
    correctAnswer: 2,
    explanation: 'The critical angle is the angle of incidence beyond which total internal reflection occurs. When light travels from a medium with a higher refractive index to one with a lower index, beyond this angle, no light is refracted out.',
    category: 'optical-theory',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  
  // Types of Lenses
  {
    id: 'quiz-optical-theory-009',
    question: 'Which lens type has at least one concave surface?',
    options: [
      'Plano-convex lens',
      'Biconvex lens',
      'Plano-concave lens',
      'Meniscus convex lens'
    ],
    correctAnswer: 2,
    explanation: 'A plano-concave lens has one flat (plano) surface and one concave surface. It is a diverging lens that spreads light rays outward.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-010',
    question: 'Which lens type is thicker at the center than at the edges?',
    options: [
      'Plus lens',
      'Minus lens',
      'Plano lens',
      'Toric lens'
    ],
    correctAnswer: 0,
    explanation: 'Plus lenses (convex/positive power) are thicker at the center than at the edges. They converge light rays to a focal point.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-011',
    question: 'Which type of lens corrects astigmatism?',
    options: [
      'Spherical lens',
      'Cylindrical lens',
      'Prismatic lens',
      'Meniscus lens'
    ],
    correctAnswer: 1,
    explanation: 'Cylindrical lenses correct astigmatism by focusing light to a line instead of a point, compensating for the uneven curvature of the cornea or lens of the eye.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-012',
    question: 'What is the power of a spherical lens that has a focal length of 20 cm?',
    options: [
      '+0.5 diopters',
      '+2.0 diopters',
      '+5.0 diopters',
      '+20.0 diopters'
    ],
    correctAnswer: 2,
    explanation: 'The power of a lens in diopters equals 1 divided by the focal length in meters. For a 20 cm (0.2 m) focal length: 1/0.2 = +5.0 diopters.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-013',
    question: 'Which of the following lens types would be used to correct hyperopia?',
    options: [
      'Concave lens',
      'Convex lens',
      'Plano lens',
      'Dispersive lens'
    ],
    correctAnswer: 1,
    explanation: 'Convex (plus) lenses are used to correct hyperopia (farsightedness). They help converge light rays to focus properly on the retina when the eye is too short or the cornea is too flat.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-014',
    question: 'What is a compound lens?',
    options: [
      'A lens made from multiple materials',
      'A combination of two or more simple lenses',
      'A lens with both concave and convex surfaces',
      'A lens with variable focal length'
    ],
    correctAnswer: 1,
    explanation: 'A compound lens is a combination of two or more simple lenses, either attached together or with a small space between them, designed to reduce optical aberrations.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-015',
    question: 'What is the purpose of an achromatic lens?',
    options: [
      'To reduce spherical aberration',
      'To reduce chromatic aberration',
      'To increase light transmission',
      'To increase the field of view'
    ],
    correctAnswer: 1,
    explanation: 'An achromatic lens is designed to reduce chromatic aberration (color fringing) by combining lenses with different dispersive properties to bring at least two wavelengths of light to the same focal point.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-016',
    question: 'Which lens is used to correct presbyopia in combination with another refractive error?',
    options: [
      'Toric lens',
      'Spherical lens',
      'Multifocal lens',
      'Plano lens'
    ],
    correctAnswer: 2,
    explanation: 'Multifocal lenses (bifocals, trifocals, or progressives) are used to correct presbyopia in combination with other refractive errors, providing different lens powers for viewing at different distances.',
    category: 'optical-theory',
    subcategory: 'lens-types',
    difficulty: 'easy'
  },
  
  // Prism
  {
    id: 'quiz-optical-theory-017',
    question: 'What is the unit of measurement for prism power?',
    options: [
      'Diopter',
      'Prism diopter',
      'Centimeter',
      'Degree'
    ],
    correctAnswer: 1,
    explanation: 'Prism power is measured in prism diopters (∆). One prism diopter displaces an image 1 centimeter at a distance of 1 meter.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-018',
    question: 'Which direction does the base of a prism direct light?',
    options: [
      'Toward the apex',
      'Away from the apex',
      'Parallel to the base',
      'Perpendicular to the base'
    ],
    correctAnswer: 0,
    explanation: 'Light is bent toward the base of a prism, but the image is displaced toward the apex. Remember the saying: "The image goes to the apex."',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-019',
    question: 'Which ocular condition is commonly treated with prismatic correction?',
    options: [
      'Myopia',
      'Hyperopia',
      'Astigmatism',
      'Binocular vision disorders'
    ],
    correctAnswer: 3,
    explanation: 'Prism correction is commonly used to treat binocular vision disorders like strabismus (eye turn) or heterophoria (tendency of eyes to deviate) by redirecting light to help align images for both eyes.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-020',
    question: 'What is Prentice\'s Rule used to calculate?',
    options: [
      'The focal length of a lens',
      'The prismatic effect at any point of a lens',
      'The thickness of a lens',
      'The magnification of a lens'
    ],
    correctAnswer: 1,
    explanation: 'Prentice\'s Rule (P = cF) is used to calculate the prismatic effect at any point in a lens, where P is the prismatic effect in prism diopters, c is the distance from the optical center in centimeters, and F is the lens power in diopters.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-021',
    question: 'What is the result when two prisms are placed with their bases in opposite directions?',
    options: [
      'Increased prismatic effect',
      'Decreased prismatic effect',
      'Canceled prismatic effect',
      'Multiplied prismatic effect'
    ],
    correctAnswer: 2,
    explanation: 'When two prisms of equal power are placed with their bases in opposite directions, their prismatic effects cancel each other out, resulting in no net prismatic effect.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-022',
    question: 'Which notation system specifies the direction of the prism base in degrees?',
    options: [
      'Cartesian notation',
      'TABO notation',
      'Plus cylinder notation',
      'Minus cylinder notation'
    ],
    correctAnswer: 1,
    explanation: 'TABO (Technical Association of British Optical Manufacturers) notation specifies the direction of the prism base in degrees, ranging from 1 to 360 degrees, with 0/360° being to the right, 90° up, 180° to the left, and 270° down.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-023',
    question: 'What prismatic effect occurs when a lens is decentered?',
    options: [
      'No prismatic effect occurs',
      'Prismatic effect toward the thin edge',
      'Prismatic effect toward the thick edge',
      'Random prismatic effect'
    ],
    correctAnswer: 1,
    explanation: 'When a lens is decentered, a prismatic effect occurs toward the thin edge of the lens. For plus lenses, this means away from the direction of decentration; for minus lenses, it means toward the direction of decentration.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'quiz-optical-theory-024',
    question: 'What is the primary purpose of fresnel prisms in ophthalmic applications?',
    options: [
      'To provide temporary prismatic correction',
      'To provide permanent prismatic correction',
      'To enhance lens clarity',
      'To reduce lens thickness'
    ],
    correctAnswer: 0,
    explanation: 'Fresnel prisms are thin, lightweight press-on prisms primarily used to provide temporary prismatic correction, often to evaluate a patient\'s response before prescribing ground-in prism.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'easy'
  },
  {
    id: 'quiz-optical-theory-025',
    question: 'What is the total horizontal prismatic effect when 2∆ base-in for the right eye is combined with 3∆ base-out for the left eye?',
    options: [
      '1∆ base-in',
      '1∆ base-out',
      '5∆ base-in',
      '5∆ base-out'
    ],
    correctAnswer: 0,
    explanation: 'Base-in and base-out are opposite directions. The net effect is 3∆ base-out minus 2∆ base-in, which equals 1∆ base-in. Base-in for the right eye and base-out for the left eye both direct the visual axis outward.',
    category: 'optical-theory',
    subcategory: 'prism',
    difficulty: 'hard'
  }
]; 