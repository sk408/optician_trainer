import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Exam Questions: Ophthalmic Optics and Principles
 * 
 * Topics covered:
 * - Basic Optics and Light Properties
 * - Lens Power and Materials
 * - Prism and Prismatic Effects
 */

export const ophthalmicOpticsQuestions: ExamQuestion[] = [
  // Basic Optics and Light Properties
  {
    id: 'abo-optics-001',
    question: 'Which of the following correctly describes how light travels?',
    options: [
      'Light travels in curved paths',
      'Light travels in straight lines in a homogeneous medium',
      'Light always bends when traveling through air',
      'Light travels at different speeds depending on its color in a vacuum'
    ],
    correctAnswer: 1,
    explanation: 'Light travels in straight lines in a homogeneous medium. This is known as rectilinear propagation of light.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-002',
    question: 'What is the index of refraction?',
    options: [
      'The amount of light absorbed by a material',
      'The ratio of the speed of light in a vacuum to the speed of light in a given material',
      'The amount of light reflected from a surface',
      'The angle at which light enters a lens'
    ],
    correctAnswer: 1,
    explanation: 'The index of refraction (n) is defined as the ratio of the speed of light in a vacuum to the speed of light in a given material. It measures how much a material slows down light passing through it.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-003',
    question: 'What happens when light passes from a medium with a higher index of refraction to a medium with a lower index of refraction?',
    options: [
      'The light speeds up and bends away from the normal',
      'The light slows down and bends toward the normal',
      'The light speeds up and bends toward the normal',
      'The light maintains the same speed and direction'
    ],
    correctAnswer: 0,
    explanation: 'When light passes from a higher index medium to a lower index medium (e.g., from glass to air), it speeds up and bends away from the normal to the surface.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-004',
    question: 'Which formula represents Snell\'s Law?',
    options: [
      'n₁ × sin(θ₁) = n₂ × sin(θ₂)',
      'n₁ × cos(θ₁) = n₂ × cos(θ₂)',
      'n₁ × tan(θ₁) = n₂ × tan(θ₂)',
      'n₁ / sin(θ₁) = n₂ / sin(θ₂)'
    ],
    correctAnswer: 0,
    explanation: 'Snell\'s Law is represented by the formula n₁ × sin(θ₁) = n₂ × sin(θ₂), where n₁ and n₂ are the refractive indices of the two media, and θ₁ and θ₂ are the angles of incidence and refraction, respectively.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-005',
    question: 'Which color of visible light has the longest wavelength?',
    options: [
      'Violet',
      'Blue',
      'Green',
      'Red'
    ],
    correctAnswer: 3,
    explanation: 'Red light has the longest wavelength in the visible spectrum, approximately 650-700 nanometers.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-006',
    question: 'What is dispersion in the context of ophthalmic optics?',
    options: [
      'The splitting of light based on wavelength when traveling through a medium',
      'The scattering of light when it encounters small particles',
      'The absorption of light by a material',
      'The polarization of light waves'
    ],
    correctAnswer: 0,
    explanation: 'Dispersion is the phenomenon where light is split into its component colors when passing through a medium. This occurs because different wavelengths of light travel at different speeds in the medium, causing them to refract at different angles.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-007',
    question: 'What is the principle of reflection?',
    options: [
      'The angle of incidence equals the angle of refraction',
      'The angle of incidence equals the angle of reflection',
      'The sum of angles of incidence and reflection equals 90 degrees',
      'Light always reflects at a 45-degree angle'
    ],
    correctAnswer: 1,
    explanation: 'The principle of reflection states that the angle of incidence equals the angle of reflection, and both angles are measured from the normal to the reflecting surface.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-008',
    question: 'Which property of a lens determines if it will converge or diverge light?',
    options: [
      'Index of refraction',
      'Surface curvature',
      'Diameter',
      'Center thickness'
    ],
    correctAnswer: 1,
    explanation: 'The surface curvature of a lens determines whether it will converge or diverge light. Convex surfaces (curved outward) converge light, while concave surfaces (curved inward) diverge light.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-009',
    question: 'What is the focal length of a lens?',
    options: [
      'The distance from the lens to the retina',
      'The distance from the lens to where parallel rays of light converge to a point',
      'The measurement of how much a lens bends light',
      'The thickness of the lens at its center'
    ],
    correctAnswer: 1,
    explanation: 'The focal length of a lens is the distance from the optical center of the lens to the point where parallel rays of light converge (or appear to diverge from, in the case of a negative lens) after passing through the lens.',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-010',
    question: 'What unit is used to measure the power of a lens?',
    options: [
      'Diopter',
      'Prism diopter',
      'Millimeter',
      'Newton'
    ],
    correctAnswer: 0,
    explanation: 'The diopter (D) is the unit used to measure the refractive power of a lens. It is defined as the reciprocal of the focal length in meters (D = 1/f).',
    category: 'ophthalmic-optics',
    subcategory: 'basic-optics',
    difficulty: 'easy'
  },
  
  // Lens Power and Materials
  {
    id: 'abo-optics-011',
    question: 'How is the power of a thin lens calculated?',
    options: [
      'Power = Radius of curvature × Index of refraction',
      'Power = (Index of refraction - 1) × (1/R₁ - 1/R₂)',
      'Power = 1/Focal length (in meters)',
      'Power = Index of refraction / Lens thickness'
    ],
    correctAnswer: 2,
    explanation: 'The power of a lens in diopters is calculated as the reciprocal of the focal length in meters (P = 1/f). For a thin lens, this can also be calculated using the lens maker\'s formula: P = (n-1)(1/R₁ - 1/R₂), where n is the index of refraction and R₁, R₂ are the radii of curvature.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-012',
    question: 'What is the relationship between a lens\'s focal length and its power?',
    options: [
      'They are directly proportional',
      'They are inversely proportional',
      'There is no relationship',
      'They are exponentially related'
    ],
    correctAnswer: 1,
    explanation: 'The power of a lens and its focal length are inversely proportional. As the focal length increases, the power decreases, and vice versa. The formula is P = 1/f, where P is power in diopters and f is focal length in meters.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-013',
    question: 'A lens has a power of +2.00D. What is its focal length in meters?',
    options: [
      '0.25 meters',
      '0.50 meters',
      '2.00 meters',
      '4.00 meters'
    ],
    correctAnswer: 1,
    explanation: 'The focal length (f) is the reciprocal of the power (P) in diopters: f = 1/P. For a +2.00D lens, f = 1/2.00 = 0.50 meters or 50 centimeters.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-014',
    question: 'Which of the following materials has the highest index of refraction?',
    options: [
      'CR-39 (1.498)',
      'Crown glass (1.523)',
      'Polycarbonate (1.586)',
      'High-index 1.74'
    ],
    correctAnswer: 3,
    explanation: 'High-index 1.74 material has the highest index of refraction among the options listed. The higher the index, the more the material bends light for a given surface curvature.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-015',
    question: 'What happens to the center thickness of a minus lens as the index of refraction increases (assuming the same power)?',
    options: [
      'It increases',
      'It decreases',
      'It remains the same',
      'It depends on the base curve'
    ],
    correctAnswer: 1,
    explanation: 'For the same lens power, an increase in the index of refraction allows for a thinner lens design. Therefore, the center thickness of a minus lens will decrease as the index of refraction increases.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-016',
    question: 'What is the Abbe value?',
    options: [
      'The measurement of a lens\'s light transmission',
      'The ratio of a lens\'s back surface power to front surface power',
      'A measure of a material\'s chromatic dispersion',
      'The percentage of UV light blocked by a lens'
    ],
    correctAnswer: 2,
    explanation: 'The Abbe value (or Abbe number) is a measure of a material\'s chromatic dispersion, which indicates how much a material separates light into its component colors. A higher Abbe value indicates less chromatic dispersion.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'hard'
  },
  {
    id: 'abo-optics-017',
    question: 'What is the effect of increasing a lens\'s center thickness?',
    options: [
      'Increases the lens power',
      'Decreases the lens power',
      'Has no effect on lens power in thin lens approximation',
      'Changes the axis of cylinder power'
    ],
    correctAnswer: 2,
    explanation: 'In the thin lens approximation commonly used in ophthalmic optics, the center thickness has negligible effect on lens power. The power is primarily determined by the surface curvatures and index of refraction.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-018',
    question: 'What is the primary advantage of higher index materials?',
    options: [
      'They have better impact resistance',
      'They allow for thinner lens designs at the same power',
      'They have less chromatic aberration',
      'They are less expensive'
    ],
    correctAnswer: 1,
    explanation: 'The primary advantage of higher index materials is that they allow for thinner lens designs at the same power. This is especially beneficial for higher prescriptions, where standard materials would result in thick, heavy lenses.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-019',
    question: 'When two lenses of powers +2.00D and -1.00D are placed in contact, what is the equivalent power?',
    options: [
      '+1.00D',
      '+3.00D',
      '-1.00D',
      '-3.00D'
    ],
    correctAnswer: 0,
    explanation: 'When two thin lenses are placed in contact, their powers add algebraically. In this case, (+2.00D) + (-1.00D) = +1.00D.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-020',
    question: 'What is the back vertex power of a lens?',
    options: [
      'The power measured at the optical center of the lens',
      'The power measured at the front surface of the lens',
      'The power measured at a point 12mm behind the front surface',
      'The power measured at the back surface of the lens'
    ],
    correctAnswer: 3,
    explanation: 'Back vertex power is the refractive power measured at the back surface of the lens. It is especially important for high-powered lenses where the thin lens approximation may not be accurate.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'hard'
  },
  
  // Prism and Prismatic Effects
  {
    id: 'abo-optics-021',
    question: 'What is the unit of measurement for prismatic power?',
    options: [
      'Diopter',
      'Prism diopter',
      'Centimeter',
      'Degree'
    ],
    correctAnswer: 1,
    explanation: 'Prismatic power is measured in prism diopters (Δ). One prism diopter causes a deflection of light by 1 centimeter at a distance of 1 meter.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-022',
    question: 'Which formula represents Prentice\'s Rule?',
    options: [
      'P = c × F',
      'P = F / c',
      'P = F × h',
      'P = h / F'
    ],
    correctAnswer: 2,
    explanation: 'Prentice\'s Rule is P = F × h, where P is the prismatic effect in prism diopters, F is the power of the lens in diopters, and h is the distance from the optical center in centimeters.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-023',
    question: 'When a patient looks through a point 1 cm below the optical center of a +2.00D lens, what prismatic effect will they experience?',
    options: [
      '2 prism diopters base down',
      '2 prism diopters base up',
      '1 prism diopter base down',
      '1 prism diopter base up'
    ],
    correctAnswer: 1,
    explanation: 'Using Prentice\'s Rule (P = F × h), we get P = 2.00D × 1cm = 2 prism diopters. Since the lens is plus power and the point is below the optical center, the prismatic effect is base up.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-024',
    question: 'What is the direction of prismatic effect in a minus lens when the optical center is displaced upward?',
    options: [
      'Base up',
      'Base down',
      'Base in',
      'Base out'
    ],
    correctAnswer: 1,
    explanation: 'When the optical center of a minus lens is displaced upward (or when looking through a point below the optical center), the prismatic effect is base down.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-025',
    question: 'How does vertical prismatic effect in a lens affect the perceived image?',
    options: [
      'It shifts the image horizontally',
      'It shifts the image vertically',
      'It rotates the image',
      'It magnifies the image'
    ],
    correctAnswer: 1,
    explanation: 'Vertical prismatic effect (base up or base down) shifts the perceived image vertically. Base up prism shifts the image downward, and base down prism shifts the image upward.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-026',
    question: 'What is the result when combining 2Δ base up and 3Δ base down prisms?',
    options: [
      '5Δ base down',
      '5Δ base up',
      '1Δ base down',
      '1Δ base up'
    ],
    correctAnswer: 2,
    explanation: 'When combining prisms in opposite directions, subtract the smaller from the larger. Since 3Δ base down is larger than 2Δ base up, the result is 3Δ - 2Δ = 1Δ in the direction of the larger prism, which is base down.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-027',
    question: 'A patient needs 4Δ base in for each eye. Using split prism, how much prism should be prescribed for each eye?',
    options: [
      '4Δ base in for each eye',
      '2Δ base in for each eye',
      '8Δ base in for one eye only',
      '4Δ base in for right eye, 4Δ base out for left eye'
    ],
    correctAnswer: 1,
    explanation: 'Split prism divides the total prismatic correction equally between the two eyes. For 4Δ base in for each eye (total of 8Δ), each eye would get 2Δ base in when using split prism.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'hard'
  },
  {
    id: 'abo-optics-028',
    question: 'What prismatic effect is created when a spherical lens is decentered?',
    options: [
      'No prismatic effect',
      'Vertical prismatic effect only',
      'Horizontal prismatic effect only',
      'Prismatic effect in the direction of decentration'
    ],
    correctAnswer: 3,
    explanation: 'When a spherical lens is decentered, prismatic effect is created in the direction of the decentration. The magnitude is calculated using Prentice\'s Rule (P = F × h).',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-029',
    question: 'What happens to the prismatic effect in a lens when its power increases (assuming the same decentration)?',
    options: [
      'The prismatic effect decreases',
      'The prismatic effect increases',
      'The prismatic effect remains the same',
      'The prismatic effect changes direction'
    ],
    correctAnswer: 1,
    explanation: 'According to Prentice\'s Rule (P = F × h), when the lens power (F) increases while the decentration (h) remains the same, the prismatic effect (P) increases proportionally.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-030',
    question: 'Why might Fresnel prisms be prescribed over conventional prism?',
    options: [
      'They provide better optical quality',
      'They are less expensive to manufacture',
      'They are thinner and lighter, especially for higher powers',
      'They have less chromatic aberration'
    ],
    correctAnswer: 2,
    explanation: 'Fresnel prisms are thin, press-on plastic sheets that can be applied to spectacle lenses. They are prescribed over conventional prism because they are much thinner and lighter, especially for higher prismatic powers, though they do have some optical compromises like reduced clarity and increased light scatter.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'easy'
  }
]; 