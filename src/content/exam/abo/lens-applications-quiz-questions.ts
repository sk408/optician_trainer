import { ExamQuestion } from '../../../interfaces/ExamQuestions';

/**
 * ABO Quiz Questions: Lens Applications
 * 
 * Topics covered:
 * - Lens Materials
 * - Lens Treatments
 * - Specialty Lenses
 */

export const lensApplicationsQuizQuestions: ExamQuestion[] = [
  // Lens Materials
  {
    id: 'quiz-lens-applications-001',
    question: 'Which lens material has the highest refractive index among those commonly used?',
    options: [
      'CR-39 plastic',
      'Crown glass',
      'Polycarbonate',
      'High-index plastic (1.74)'
    ],
    correctAnswer: 3,
    explanation: 'High-index plastic (1.74) has the highest refractive index among commonly used materials. Higher refractive indices allow for thinner lenses, especially in stronger prescriptions.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-002',
    question: 'Which lens material is required for safety eyewear according to ANSI Z87.1 standards?',
    options: [
      'CR-39 plastic',
      'Crown glass',
      'Polycarbonate or Trivex',
      'High-index plastic'
    ],
    correctAnswer: 2,
    explanation: 'Polycarbonate or Trivex materials are required for safety eyewear according to ANSI Z87.1 standards due to their superior impact resistance. CR-39 and glass do not meet the impact requirements without being significantly thicker.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-003',
    question: 'What is the Abbe value and why is it important?',
    options: [
      'It measures lens thickness; higher values mean thicker lenses',
      'It measures light dispersion; higher values mean less chromatic aberration',
      'It measures light reflection; higher values mean more reflective lenses',
      'It measures lens density; higher values mean heavier lenses'
    ],
    correctAnswer: 1,
    explanation: 'The Abbe value measures chromatic dispersion (how much a lens separates light into its component colors). Higher Abbe values mean less chromatic aberration (color fringing). CR-39 (58) and glass (59) have high Abbe values, while polycarbonate (30) has a lower value.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'hard'
  },
  {
    id: 'quiz-lens-applications-004',
    question: 'What is the refractive index of standard CR-39 plastic?',
    options: [
      '1.49-1.50',
      '1.53-1.54',
      '1.58-1.60',
      '1.70-1.74'
    ],
    correctAnswer: 0,
    explanation: 'Standard CR-39 plastic has a refractive index of 1.498, typically rounded to 1.50. It was the first plastic lens material widely used and is still popular for its optical clarity and affordability.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-005',
    question: 'Which lens material provides the best UV protection?',
    options: [
      'CR-39 (unless coated)',
      'Crown glass (unless coated)',
      'Polycarbonate',
      'High-index 1.67 (unless coated)'
    ],
    correctAnswer: 2,
    explanation: 'Polycarbonate inherently blocks 100% of UV-A and UV-B radiation without requiring additional treatments or coatings. Most other materials require UV coatings to provide complete protection.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-006',
    question: 'Which of the following is a disadvantage of polycarbonate lenses?',
    options: [
      'Poor impact resistance',
      'Relatively low Abbe value (more chromatic aberration)',
      'Does not block UV light',
      'Higher density (heavier) than CR-39'
    ],
    correctAnswer: 1,
    explanation: 'A disadvantage of polycarbonate lenses is their relatively low Abbe value (around 30), which can cause more chromatic aberration (color fringing) compared to CR-39 (58) or glass (59), especially in stronger prescriptions.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-007',
    question: 'What is Trivex material known for?',
    options: [
      'Lowest cost among lens materials',
      'Highest refractive index available',
      'Excellent impact resistance with better optical quality than polycarbonate',
      'Heaviest weight for stability'
    ],
    correctAnswer: 2,
    explanation: 'Trivex is known for excellent impact resistance comparable to polycarbonate, but with better optical quality (higher Abbe value of 43-45 vs. polycarbonate\'s 30). It also has lower density, making it the lightest prescription lens material available.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-008',
    question: 'For a patient with a strong minus prescription, which lens material would be best to minimize edge thickness?',
    options: [
      'CR-39',
      'Polycarbonate',
      'Crown glass',
      'High-index (1.67 or higher)'
    ],
    correctAnswer: 3,
    explanation: 'High-index materials (1.67 or higher) would be best to minimize edge thickness in a strong minus prescription. The higher refractive index allows the lens to bend light more efficiently, resulting in thinner profiles, especially at the edges for minus lenses.',
    category: 'lens-applications',
    subcategory: 'lens-materials',
    difficulty: 'medium'
  },
  
  // Lens Treatments
  {
    id: 'quiz-lens-applications-009',
    question: 'What is the primary purpose of anti-reflective (AR) coating?',
    options: [
      'To protect lenses from scratches',
      'To reduce glare and reflections, improving visual clarity',
      'To block UV radiation',
      'To darken lenses in bright light'
    ],
    correctAnswer: 1,
    explanation: 'The primary purpose of anti-reflective (AR) coating is to reduce glare and reflections, improving visual clarity and comfort. It works by minimizing light reflecting off the lens surfaces, allowing more light to pass through to the eye.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-010',
    question: 'Which lens coating or treatment is most important for computer users concerned about digital eye strain?',
    options: [
      'Polarization',
      'Photochromic treatment',
      'Blue light filtering',
      'Mirror coating'
    ],
    correctAnswer: 2,
    explanation: 'Blue light filtering coatings or treatments are most important for computer users concerned about digital eye strain. These filters reduce the amount of high-energy visible (HEV) blue light that reaches the eye, potentially reducing eye fatigue during extended digital device use.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-011',
    question: 'What lens treatment helps reduce the appearance of lens thickness in high prescriptions?',
    options: [
      'Anti-reflective coating',
      'Edge polish and roll',
      'Scratch-resistant coating',
      'UV coating'
    ],
    correctAnswer: 1,
    explanation: 'Edge polish and roll treatments help reduce the appearance of lens thickness in high prescriptions by polishing the edges to make them more transparent and rolling or beveling the edges to create a thinner appearance.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-012',
    question: 'What is the primary advantage of polarized lenses over regular tinted lenses?',
    options: [
      'They are less expensive',
      'They selectively block horizontally reflected glare',
      'They provide more UV protection',
      'They are available in more colors'
    ],
    correctAnswer: 1,
    explanation: 'The primary advantage of polarized lenses over regular tinted lenses is that they selectively block horizontally reflected glare from surfaces like water, snow, and roads. Regular tints reduce all light equally regardless of direction.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-013',
    question: 'What is a disadvantage of polarized lenses?',
    options: [
      'They provide less UV protection than regular tints',
      'They can make LCD screens (like some car dashboards, phones, or GPS devices) difficult to read',
      'They only work indoors',
      'They cannot be combined with photochromic treatments'
    ],
    correctAnswer: 1,
    explanation: 'A disadvantage of polarized lenses is that they can make LCD screens difficult to read, as these screens often emit polarized light that may be blocked by the polarized lens. This can affect visibility of some car dashboards, phones, GPS devices, and ATM screens.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-014',
    question: 'What are photochromic lenses?',
    options: [
      'Lenses that change color based on the wearer\'s mood',
      'Lenses that darken when exposed to UV light and clear when UV is absent',
      'Lenses that enhance contrast in specific conditions',
      'Lenses that filter blue light from digital devices'
    ],
    correctAnswer: 1,
    explanation: 'Photochromic lenses darken when exposed to UV light (typically outdoors) and return to clear when UV is absent (typically indoors). This provides convenience by automatically adapting to different lighting conditions.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-015',
    question: 'Which factor can affect the performance of photochromic lenses?',
    options: [
      'The wearer\'s prescription strength',
      'The frame color',
      'Temperature (colder temperatures typically make them darker)',
      'Whether they are worn with contact lenses'
    ],
    correctAnswer: 2,
    explanation: 'Temperature significantly affects photochromic lens performance. In colder temperatures, the lenses typically get darker and change more quickly. In hotter temperatures, they may not get as dark and may take longer to change.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-016',
    question: 'What is the purpose of hydrophobic coatings on lenses?',
    options: [
      'To attract water for easier cleaning',
      'To repel water and prevent water spots',
      'To increase scratch resistance',
      'To reduce UV transmission'
    ],
    correctAnswer: 1,
    explanation: 'Hydrophobic coatings repel water, causing it to bead up and roll off rather than spreading across the lens surface. This helps prevent water spots and makes the lenses easier to clean by reducing smudges and fingerprints.',
    category: 'lens-applications',
    subcategory: 'lens-treatments',
    difficulty: 'medium'
  },
  
  // Specialty Lenses
  {
    id: 'quiz-lens-applications-017',
    question: 'What type of lens is typically recommended for presbyopia correction while maintaining natural vision at all distances?',
    options: [
      'Single vision lenses',
      'Bifocal lenses',
      'Trifocal lenses',
      'Progressive addition lenses'
    ],
    correctAnswer: 3,
    explanation: 'Progressive addition lenses (PALs) are typically recommended for presbyopia correction while maintaining natural vision at all distances. They provide a gradual change in power from distance vision at the top to near vision at the bottom without visible lines.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-018',
    question: 'What is the "corridor" in a progressive lens?',
    options: [
      'The frame\'s bridge area',
      'The portion of the lens with changing power between distance and near zones',
      'The area where bifocal segments meet',
      'The peripheral areas of the lens'
    ],
    correctAnswer: 1,
    explanation: 'The corridor in a progressive lens is the portion with changing power between the distance zone at the top and the near zone at the bottom. The wearer uses this area for intermediate vision (e.g., computer use) and must learn to access the appropriate zone for each viewing distance.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-019',
    question: 'What is a common adaptation issue with progressive lenses?',
    options: [
      'Excessive lens weight',
      'Poor UV protection',
      'Peripheral distortion and limited reading area',
      'Inability to correct astigmatism'
    ],
    correctAnswer: 2,
    explanation: 'Common adaptation issues with progressive lenses include peripheral distortion (blur in the lateral areas) and a relatively limited reading area compared to bifocals. First-time wearers often need time to adapt to finding the correct viewing zones and dealing with peripheral blur.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-020',
    question: 'What is the primary purpose of office or computer progressive lenses?',
    options: [
      'To block blue light only',
      'To provide wider intermediate and near zones with limited distance correction',
      'To eliminate the need for anti-reflective coating',
      'To function exactly like regular progressives but with tint'
    ],
    correctAnswer: 1,
    explanation: 'Office or computer progressive lenses provide wider intermediate and near zones with limited distance correction. They\'re designed for indoor environments like offices, with a focus on computer distance (intermediate) and reading (near) vision, sacrificing some full distance vision for improved comfort during extended computer work.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-021',
    question: 'What is a characteristic of sports lenses or sport-specific eyewear?',
    options: [
      'Always made of glass for better clarity',
      'Typically flatter with less wrap to improve peripheral vision',
      'Usually designed with increased wrap, impact resistance, and specialized tints',
      'Cannot incorporate prescription correction'
    ],
    correctAnswer: 2,
    explanation: 'Sports lenses and sport-specific eyewear are usually designed with increased wrap (curvature), high impact resistance materials like polycarbonate or Trivex, and specialized tints to enhance contrast in specific environments (e.g., amber for golf, rose for skiing).',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-022',
    question: 'What is the primary purpose of high-base curve (wrap) lenses?',
    options: [
      'To reduce lens thickness',
      'To provide better cosmetic appearance and peripheral protection',
      'To increase magnification',
      'To reduce prescription power'
    ],
    correctAnswer: 1,
    explanation: 'High-base curve (wrap) lenses provide better cosmetic appearance by following the contour of the face and offering better peripheral protection from wind, debris, and UV light. They\'re commonly used in sports and fashion eyewear.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-023',
    question: 'What is a Fresnel prism lens used for?',
    options: [
      'To provide magnification for low vision',
      'To temporarily correct diplopia or binocular vision problems',
      'To enhance color perception',
      'To decrease lens thickness in high prescriptions'
    ],
    correctAnswer: 1,
    explanation: 'Fresnel prism lenses are used to temporarily correct diplopia (double vision) or binocular vision problems. They\'re thin, press-on plastic sheets with prism correction that can be applied to existing glasses to evaluate the effectiveness of prismatic correction before prescribing ground-in prism.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'medium'
  },
  {
    id: 'quiz-lens-applications-024',
    question: 'Which type of bifocal segment has a visible line that is curved on top?',
    options: [
      'Flat-top (D-segment) bifocal',
      'Executive (E-style) bifocal',
      'Round segment bifocal',
      'Invisible bifocal'
    ],
    correctAnswer: 0,
    explanation: 'The flat-top (D-segment) bifocal has a visible line that is curved on top, resembling a letter "D" rotated 90 degrees. It\'s the most common bifocal style because it provides good near vision while minimizing the visibility of the segment line.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'easy'
  },
  {
    id: 'quiz-lens-applications-025',
    question: 'What is the primary advantage of digital (free-form) lens manufacturing for progressive lenses?',
    options: [
      'Lower cost production',
      'Faster manufacturing time',
      'Customization based on individual measurements and reduced peripheral distortion',
      'Thicker lenses for durability'
    ],
    correctAnswer: 2,
    explanation: 'The primary advantage of digital (free-form) lens manufacturing for progressive lenses is customization based on individual measurements and reduced peripheral distortion. This technology allows for point-by-point optimization of the lens surface, resulting in wider clear viewing areas and more comfortable vision.',
    category: 'lens-applications',
    subcategory: 'specialty-lenses',
    difficulty: 'hard'
  }
]; 