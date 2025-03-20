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
    question: 'What is the focal length of a +2.00 D lens?',
    options: [
      '0.50 meters',
      '2.00 meters',
      '0.25 meters',
      '5.00 meters'
    ],
    correctAnswer: 0,
    explanation: 'The focal length (in meters) is the reciprocal of the lens power in diopters. For a +2.00 D lens, the focal length is 1/2.00 = 0.50 meters or 50 centimeters.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-026',
    question: 'What happens to the focal length of a lens when its power increases?',
    options: [
      'The focal length increases',
      'The focal length decreases',
      'The focal length remains unchanged',
      'The focal length becomes negative'
    ],
    correctAnswer: 1,
    explanation: 'As lens power increases, the focal length decreases. This is because focal length (in meters) is the reciprocal of lens power (in diopters).',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-027',
    question: 'Which of the following formulas represents the vergence equation?',
    options: [
      'D₁ + D₂ = D₃',
      'L₁ + L₂ = L₃',
      'L₁ + D₂ = D₃',
      'D₁ + L₂ = 1'
    ],
    correctAnswer: 0,
    explanation: 'The vergence equation is D₁ + D₂ = D₃, where D₁ is the incident vergence, D₂ is the lens power, and D₃ is the emergent vergence.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-028',
    question: 'What is the power of a lens with a focal length of 25 centimeters?',
    options: [
      '+0.25 D',
      '+0.40 D',
      '+2.50 D',
      '+4.00 D'
    ],
    correctAnswer: 3,
    explanation: 'The power (in diopters) is the reciprocal of the focal length in meters. For a focal length of 25 centimeters (0.25 meters), the power is 1/0.25 = 4.00 D.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-029',
    question: 'What does the Abbe value of a lens material indicate?',
    options: [
      'Index of refraction',
      'Resistance to impact',
      'Dispersion characteristics',
      'Light transmission'
    ],
    correctAnswer: 2,
    explanation: 'The Abbe value (or V-value) indicates the dispersion characteristics of an optical material. A higher Abbe value indicates less chromatic aberration (color dispersion).',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-030',
    question: 'Which lens has more plus power?',
    options: [
      'A lens with a back vertex power of +3.00 D',
      'A lens with a front vertex power of +3.00 D',
      'Both have the same power',
      'It depends on the lens thickness'
    ],
    correctAnswer: 0,
    explanation: 'For a plus lens, the back vertex power is slightly greater than the front vertex power due to the lens thickness. The opposite is true for minus lenses.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'hard'
  },
  {
    id: 'abo-optics-031',
    question: 'What is the effect of increasing the index of refraction in a lens of given power?',
    options: [
      'The lens becomes thicker',
      'The lens becomes thinner',
      'The lens power increases',
      'The lens focal length decreases'
    ],
    correctAnswer: 1,
    explanation: 'Increasing the index of refraction allows a lens to be made thinner while maintaining the same power, which is why high-index materials are used for high-power prescriptions.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-032',
    question: 'Which of the following lens materials typically has the highest index of refraction?',
    options: [
      'CR-39 (standard plastic)',
      'Crown glass',
      '1.74 high-index plastic',
      'Polycarbonate'
    ],
    correctAnswer: 2,
    explanation: '1.74 high-index plastic has the highest index of refraction among the options listed. CR-39 is approximately 1.498, crown glass is about 1.523, and polycarbonate is around 1.586.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-033',
    question: 'How much prism would be induced if a +2.50 D lens is decentered 4 mm?',
    options: [
      '0.1 prism diopters',
      '1.0 prism diopters',
      '2.5 prism diopters',
      '10.0 prism diopters'
    ],
    correctAnswer: 1,
    explanation: 'Prentice\'s Rule states that induced prism = power × decentration (in cm). In this case, 2.50 × 0.4 = 1.0 prism diopters.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-034',
    question: 'In what direction does the base of an induced prism point when a plus lens is decentered?',
    options: [
      'In the same direction as the decentration',
      'In the opposite direction from the decentration',
      'Always base-in',
      'Always base-out'
    ],
    correctAnswer: 0,
    explanation: 'For a plus lens, the base of the induced prism is in the same direction as the decentration. For a minus lens, it is in the opposite direction.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-035',
    question: 'What is the primary purpose of prescribing prism in eyeglasses?',
    options: [
      'To increase visual acuity',
      'To correct refractive errors',
      'To align images for patients with binocular vision issues',
      'To reduce lens thickness'
    ],
    correctAnswer: 2,
    explanation: 'Prism is prescribed primarily to align images for patients with binocular vision issues such as strabismus or phoria, helping to prevent double vision or reduce eye strain.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-036',
    question: 'What is the total amount of horizontal prism when combining 2Δ base-in for the right eye and 3Δ base-out for the left eye?',
    options: [
      '5Δ base-in',
      '5Δ base-out',
      '1Δ base-in',
      '1Δ base-out'
    ],
    correctAnswer: 3,
    explanation: 'When combining horizontal prisms, base-in is considered negative and base-out is positive. Therefore, -2Δ (BI) + 3Δ (BO) = 1Δ base-out.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'hard'
  },
  {
    id: 'abo-optics-037',
    question: 'Which of the following is true about Fresnel prisms?',
    options: [
      'They are thicker than conventional prisms',
      'They have better optical quality than conventional prisms',
      'They are typically used for permanent prescriptions',
      'They are thin press-on prisms with concentric grooves'
    ],
    correctAnswer: 3,
    explanation: 'Fresnel prisms are thin, press-on prisms with concentric grooves that create prismatic effect without the thickness of conventional prisms. They are often used temporarily or for high amounts of prism.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-038',
    question: 'When using Prentice\'s Rule, what units must be used for decentration?',
    options: [
      'Millimeters',
      'Centimeters',
      'Inches',
      'Meters'
    ],
    correctAnswer: 1,
    explanation: 'When using Prentice\'s Rule (P = c × F), decentration (c) must be expressed in centimeters for the formula to work correctly.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-039',
    question: 'What is the effect of a base-up prism in front of the right eye?',
    options: [
      'The image appears to move upward',
      'The image appears to move downward',
      'The image appears to move to the right',
      'The image appears to move to the left'
    ],
    correctAnswer: 1,
    explanation: 'Prism displaces the image in the direction opposite to its base. A base-up prism will displace the image downward.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-040',
    question: 'How much prism is induced at a point 5 mm from the optical center of a -4.00 D lens?',
    options: [
      '2.0 prism diopters, base toward the optical center',
      '2.0 prism diopters, base away from the optical center',
      '20.0 prism diopters, base toward the optical center',
      '20.0 prism diopters, base away from the optical center'
    ],
    correctAnswer: 0,
    explanation: 'Using Prentice\'s Rule: P = c × F = 0.5 cm × 4.00 D = 2.0 prism diopters. For a minus lens, the base points toward the optical center.',
    category: 'ophthalmic-optics',
    subcategory: 'prism',
    difficulty: 'hard'
  },
  {
    id: 'abo-optics-041',
    question: 'What is the equivalent power of two thin lenses with powers of +2.00 D and -1.50 D placed in contact?',
    options: [
      '+0.50 D',
      '+3.50 D',
      '-0.50 D',
      '-3.50 D'
    ],
    correctAnswer: 0,
    explanation: 'When thin lenses are placed in contact, their powers add algebraically: +2.00 D + (-1.50 D) = +0.50 D.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'easy'
  },
  {
    id: 'abo-optics-042',
    question: 'What is the primary advantage of aspheric lens designs compared to spherical lenses?',
    options: [
      'They are less expensive to manufacture',
      'They provide better peripheral vision with reduced aberrations',
      'They are more durable and scratch-resistant',
      'They have higher index of refraction'
    ],
    correctAnswer: 1,
    explanation: 'Aspheric lenses have flatter peripheral curves that reduce aberrations and distortions in peripheral vision, particularly in higher prescriptions.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-043',
    question: 'What is the effective power of a +3.00 D lens placed 15 mm from the eye?',
    options: [
      '+3.00 D',
      '+3.14 D',
      '+2.87 D',
      '+3.45 D'
    ],
    correctAnswer: 2,
    explanation: 'The effective power is calculated using the formula: Fe = F / (1 - d×F), where F is the lens power in diopters and d is the distance in meters. Fe = 3.00 / (1 - 0.015×3.00) = 3.00 / 0.955 = 2.87 D (approximately).',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'hard'
  },
  {
    id: 'abo-optics-044',
    question: 'Which lens material has the highest Abbe value?',
    options: [
      'Crown glass',
      'Polycarbonate',
      'Trivex',
      '1.74 high-index plastic'
    ],
    correctAnswer: 0,
    explanation: 'Crown glass typically has the highest Abbe value (around 58-60) among these materials, indicating less chromatic aberration. Polycarbonate has a relatively low Abbe value of around 30.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  },
  {
    id: 'abo-optics-045',
    question: 'What is the effect of a cylinder lens on incident light?',
    options: [
      'It converges light equally in all meridians',
      'It diverges light equally in all meridians',
      'It refracts light differently in different meridians',
      'It has no effect on light rays'
    ],
    correctAnswer: 2,
    explanation: 'A cylinder lens refracts light differently in different meridians. It has power in one principal meridian and no power in the perpendicular meridian.',
    category: 'ophthalmic-optics',
    subcategory: 'lens-power',
    difficulty: 'medium'
  }
]; 