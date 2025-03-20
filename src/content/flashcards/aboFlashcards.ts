import { FlashcardData } from './types';

/**
 * Enhanced flashcards for ABO (American Board of Opticianry) exam preparation
 * These cards provide more comprehensive content with detailed explanations,
 * real-world applications, and technical details to help student opticians.
 */
export const aboFlashcards: FlashcardData[] = [
  // OPTICAL THEORY
  {
    id: 'optical-theory-1',
    term: 'Index of Refraction',
    definition: 'The ratio of the speed of light in a vacuum to the speed of light in a medium. Higher index materials (>1.50) bend light more, allowing for thinner lenses with the same corrective power.',
    details: 'Common lens materials by index: CR-39 (1.498), Polycarbonate (1.586), Hi-Index (1.60-1.74), Glass (1.52-1.80).',
    example: 'A +4.00D lens in high-index 1.67 material will be up to 30% thinner than the same prescription in CR-39.',
    examType: 'ABO',
    category: 'Optical Theory',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Index+of+Refraction',
    furtherReading: 'Optical Formulas Tutorial by Ellen Stoner'
  },
  {
    id: 'optical-theory-2',
    term: 'Snell\'s Law',
    definition: 'n₁sin(θ₁) = n₂sin(θ₂) - Mathematical formula describing how light bends when passing from one medium to another with different refractive indices.',
    details: 'When light moves from a medium with lower index to higher index, it bends toward the normal. When moving from higher to lower, it bends away from the normal.',
    example: 'Light entering a +3.00D CR-39 lens bends toward the normal, converging to create the plus power effect.',
    examType: 'ABO',
    category: 'Optical Theory',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Snells+Law',
    furtherReading: 'System for Ophthalmic Dispensing by Brooks & Borish'
  },
  {
    id: 'optical-theory-3',
    term: 'Prentice\'s Rule',
    definition: 'P = c × F where P is prism diopters, c is decentration in centimeters, and F is lens power in diopters.',
    details: 'This rule calculates the prismatic effect when a lens is decentered from the optical center. Critical for understanding unwanted prism in spectacle lenses.',
    example: 'A +4.00D lens decentered 5mm (0.5cm) induces 2Δ base in the direction of decentration.',
    examType: 'ABO',
    category: 'Optical Theory',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Prentices+Rule',
    furtherReading: 'Practical Optical Dispensing by David Wilson'
  },
  {
    id: 'optical-theory-4',
    term: 'Focal Length',
    definition: 'The distance from the optical center of a lens to the point where light rays converge (plus lens) or appear to diverge from (minus lens).',
    details: 'Focal length in meters is the reciprocal of the dioptric power: f = 1/D.',
    example: 'A +2.00D lens has a focal length of 1/2 = 0.5 meters or 50cm.',
    examType: 'ABO',
    category: 'Optical Theory',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Focal+Length',
    furtherReading: 'Ophthalmic Lenses by T. E. Obrig'
  },
  
  // DISPENSING PROCEDURES
  {
    id: 'dispensing-1',
    term: 'Pantoscopic Tilt',
    definition: 'The vertical angle of the frame front relative to the facial plane, with the bottom of the frame closer to the face than the top.',
    details: 'Typically between 8-12 degrees. Affects vertex distance, optical performance, and cosmetic appearance.',
    example: 'Increasing pantoscopic tilt from 5° to 10° can help prevent the lenses from hitting the cheeks and improve optical performance for high plus prescriptions.',
    examType: 'ABO',
    category: 'Dispensing Procedures',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Pantoscopic+Tilt',
    furtherReading: 'Mastering the Art of Dispensing Eyewear'
  },
  {
    id: 'dispensing-2',
    term: 'Vertex Distance',
    definition: 'The distance from the back surface of the lens to the front surface of the cornea, typically measured in millimeters.',
    details: 'Standard refraction vertex is 13-14mm. Significant changes (>2mm) in prescriptions over ±4.00D require power adjustment using vertex compensation formula.',
    example: 'A -7.00D lens worn at 18mm vertex instead of the 14mm refraction vertex will effectively be more minus power at the eye than prescribed.',
    examType: 'ABO',
    category: 'Dispensing Procedures',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Vertex+Distance',
    furtherReading: 'System for Ophthalmic Dispensing by Brooks & Borish'
  },
  {
    id: 'dispensing-3',
    term: 'Frame Adjustment Techniques',
    definition: 'Methods of altering frame fit parameters to achieve proper alignment, comfort, and optical performance.',
    details: 'Includes temple adjustment (width, length, bow), nosepad adjustment (width, height, angle), pantoscopic tilt, face form angle, and vertex distance.',
    example: 'For a frame sliding down: Increase nosepad width, adjust pad angle inward, or increase temple bow after the ear.',
    examType: 'ABO',
    category: 'Dispensing Procedures',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Frame+Adjustments',
    furtherReading: 'Practical Optical Workshop by Mo Jalie'
  },
  {
    id: 'dispensing-4',
    term: 'Effective Diameter',
    definition: 'The minimum blank size required to cut a lens, accounting for the frame\'s eye size, bridge, and decentration due to PD.',
    details: 'ED = √(A² + B²) + 2 × decentration, where A is the frame\'s horizontal dimension and B is the vertical dimension.',
    example: 'A frame with A=54mm, B=42mm, and 2mm decentration requires an ED of 69mm minimum blank size.',
    examType: 'ABO',
    category: 'Dispensing Procedures',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Effective+Diameter',
    furtherReading: 'Practical Optical Dispensing by David Wilson'
  },
  
  // LENS APPLICATIONS
  {
    id: 'lens-applications-1',
    term: 'Progressive Addition Lenses (PALs)',
    definition: 'Multifocal lenses with a gradual power increase from the distance zone at the top to the near zone at the bottom, without visible lines.',
    details: 'Components include: distance zone, intermediate corridor, near zone, and peripheral blending zones. Fitting height and PD are critical measurements.',
    example: 'A computer user with +2.00D add might benefit from a "short corridor" PAL with a wider intermediate zone or an "office" PAL design.',
    examType: 'ABO',
    category: 'Lens Applications',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Progressive+Lenses',
    furtherReading: 'Progressive Lenses by Darryl Meister'
  },
  {
    id: 'lens-applications-2',
    term: 'Anti-Reflective (AR) Coating',
    definition: 'Multi-layer thin film coating that reduces reflections on lens surfaces, increasing light transmission from ~92% to 99%.',
    details: 'Reduces glare, improves cosmetic appearance, enhances contrast, reduces eye fatigue, and improves night vision. Modern AR coatings include hydrophobic, oleophobic, and anti-static properties.',
    example: 'High-index lenses (1.60+) reflect more light and strongly benefit from AR coating to prevent the "headlight effect" when driving at night.',
    examType: 'ABO',
    category: 'Lens Applications',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=AR+Coating',
    furtherReading: 'Optical Formulas Tutorial by Ellen Stoner'
  },
  {
    id: 'lens-applications-3',
    term: 'Photochromic Lenses',
    definition: 'Lenses containing special dyes that darken when exposed to UV light and return to clear when UV exposure is reduced.',
    details: 'Temperature affects performance (slower in cold). Car windshields block most UV, limiting activation. Various technologies include silver halide (glass), pyridobenzoxazines (plastic).',
    example: 'Transitions® XTRActive® activates slightly behind windshields and achieves darker tints outdoors than standard photochromics.',
    examType: 'ABO',
    category: 'Lens Applications',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Photochromic+Lenses',
    furtherReading: 'Transitions Optical Technical Documentation'
  },
  {
    id: 'lens-applications-4',
    term: 'High-Index Materials',
    definition: 'Lens materials with refractive indices higher than standard plastic (1.498), allowing for thinner lenses.',
    details: 'Common indices: 1.60, 1.67, 1.74. Higher index = thinner lenses but more reflections, chromatic aberration, and typically higher cost.',
    example: 'A -8.00D prescription in 1.67 high-index will be approximately 40% thinner at the edge than the same prescription in CR-39.',
    examType: 'ABO',
    category: 'Lens Applications',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=High-Index+Lenses',
    furtherReading: 'Practical Optical Dispensing by David Wilson'
  },
  
  // MEASUREMENTS
  {
    id: 'measurements-1',
    term: 'Pupillary Distance (PD)',
    definition: 'The distance between the centers of the pupils, measured in millimeters. Used to align optical centers of lenses with the visual axes.',
    details: 'Binocular PD (single measurement) vs. Monocular PD (right and left measurements from center of nose). Near PD is typically 3-5mm less than distance PD.',
    example: 'A typical adult might have a distance PD of 64mm and a near PD of 60mm. High prescriptions require precise monocular measurements.',
    examType: 'ABO',
    category: 'Measurements',
    difficulty: 'beginner',
    imageUrl: 'https://placehold.co/300x200/png?text=Pupillary+Distance',
    furtherReading: 'System for Ophthalmic Dispensing by Brooks & Borish'
  },
  {
    id: 'measurements-2',
    term: 'Segment Height',
    definition: 'The vertical distance from the lowest point of the eyewire to the top of the bifocal segment or progressive addition starting point.',
    details: 'Measured with the frame properly adjusted on the patient\'s face. Critical for proper function of multifocals. Typically 5-10mm below pupil center.',
    example: 'A flat-top bifocal typically has the segment top aligned with the lower eyelid, while a progressive lens height is measured to the fitting cross.',
    examType: 'ABO',
    category: 'Measurements',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Segment+Height',
    furtherReading: 'Practical Optical Dispensing by David Wilson'
  },
  {
    id: 'measurements-3',
    term: 'Boxing System',
    definition: 'Method of measuring frames using a rectangle that exactly encloses the lens shape, establishing standard A, B, and ED dimensions.',
    details: 'A = horizontal box width, B = vertical box height, DBL = distance between lenses, ED = effective diameter. Frame size typically written as A-B-DBL.',
    example: 'A frame marked 54-17 has an A dimension of 54mm and a bridge (DBL) of 17mm.',
    examType: 'ABO',
    category: 'Measurements',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Boxing+System',
    furtherReading: 'System for Ophthalmic Dispensing by Brooks & Borish'
  },
  {
    id: 'measurements-4',
    term: 'Lens Clock (Geneva Lens Measure)',
    definition: 'A calibrated instrument with three pins used to measure the curvature of lens surfaces in diopters.',
    details: 'Two outer pins establish a baseline while the center pin measures the sagittal depth. Scale reads in diopters of curvature.',
    example: 'A +2.00D spherical lens might show +8.00D on the front surface and +6.00D on the back surface, with the difference being the lens power.',
    examType: 'ABO',
    category: 'Measurements',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Lens+Clock',
    furtherReading: 'Practical Optical Workshop by Mo Jalie'
  },
  
  // REGULATIONS AND STANDARDS
  {
    id: 'regulations-1',
    term: 'ANSI Z80.1 Standards',
    definition: 'American National Standards Institute specifications for prescription ophthalmic lenses, establishing tolerance limits for various optical parameters.',
    details: 'Covers power, cylinder axis, add power, prism, optical center location, and impact resistance requirements. Updated periodically with latest standards.',
    example: 'ANSI tolerance for sphere power in a -2.00D lens is ±0.13D, while a +5.00D lens allows ±0.18D.',
    examType: 'ABO',
    category: 'Regulations',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=ANSI+Standards',
    furtherReading: 'ANSI Z80.1 Documentation'
  },
  {
    id: 'regulations-2',
    term: 'FDA Impact Resistance Requirements',
    definition: 'Federal regulations requiring all prescription lenses to pass a drop-ball test or be made from impact-resistant materials like polycarbonate or Trivex.',
    details: 'Standard test: 5/8" steel ball dropped from 50 inches. Children\'s lenses and monocular patients require impact-resistant materials by law.',
    example: 'Polycarbonate is approximately 10 times more impact-resistant than standard plastic CR-39, making it required for safety applications.',
    examType: 'ABO',
    category: 'Regulations',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=FDA+Requirements',
    furtherReading: 'FDA Regulation 21 CFR 801.410'
  },
  {
    id: 'regulations-3',
    term: 'HIPAA Compliance',
    definition: 'Health Insurance Portability and Accountability Act regulations that protect patient medical information and establish standards for electronic healthcare transactions.',
    details: 'Requires safeguards for patient information, limits disclosures, gives patients rights to their records, and establishes penalties for violations.',
    example: 'Patient prescription information cannot be shared with a third party without patient consent, even if a family member is requesting it.',
    examType: 'ABO',
    category: 'Regulations',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=HIPAA',
    furtherReading: 'HIPAA Guidelines for Optical Practices'
  },
  {
    id: 'regulations-4',
    term: 'ANSI Z87.1 Safety Standards',
    definition: 'Requirements for eye protection in industrial and educational settings, establishing performance criteria for impact, coverage, and optical clarity.',
    details: 'Basic vs. High Impact designations ("Z87" vs. "Z87+"). Includes specifications for markings, side shields, and prescription safety frame requirements.',
    example: 'Polycarbonate is typically used for safety eyewear due to meeting high-impact requirements, but the entire frame-lens combination must be Z87 certified.',
    examType: 'ABO',
    category: 'Regulations',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Safety+Standards',
    furtherReading: 'ANSI Z87.1 Documentation'
  },
  
  // SPECIALIZED AREAS
  {
    id: 'specialized-1',
    term: 'Prism Thinning',
    definition: 'Technique of incorporating prism into lens design to reduce thickness without changing the optical center location or affecting vision.',
    details: 'Base-down prism thins the top of minus lenses and base-up thins the bottom of plus lenses. Must be equal in both lenses to avoid vertical imbalance.',
    example: 'A high-index progressive lens for a -8.00D myope might use 2-3Δ base-down prism in both lenses to reduce superior thickness and improve cosmetics.',
    examType: 'ABO',
    category: 'Specialized Techniques',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Prism+Thinning',
    furtherReading: 'System for Ophthalmic Dispensing by Brooks & Borish'
  },
  {
    id: 'specialized-2',
    term: 'Slab-Off (Bicentric Grinding)',
    definition: 'A technique used to correct vertical imbalance in prescriptions with significantly different powers between the two eyes, especially with unequal spherical components.',
    details: 'Creates a visible line across the lens where base-up prism is ground into the lower portion of one lens. Amount determined by the difference in power at the reading level.',
    example: 'A prescription with OD: -2.00D and OS: +3.00D might need 5Δ slab-off in the left lens to eliminate vertical diplopia when reading.',
    examType: 'ABO',
    category: 'Specialized Techniques',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Slab-Off',
    furtherReading: 'System for Ophthalmic Dispensing by Brooks & Borish'
  },
  {
    id: 'specialized-3',
    term: 'Anisometropia',
    definition: 'Condition where the refractive power of the two eyes differs significantly, creating challenges for dispensing due to image size differences and prismatic effects.',
    details: 'Can cause aniseikonia (unequal image size) and vertical imbalance. Solutions include material choices, lens design, vertex adjustments, and slab-off.',
    example: 'A patient with OD: +5.00D and OS: +1.00D experiences ~8% image size difference between eyes, potentially causing adaptability issues.',
    examType: 'ABO',
    category: 'Specialized Techniques',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Anisometropia',
    furtherReading: 'Clinical Optics by Troy Fannin'
  },
  {
    id: 'specialized-4',
    term: 'Sports Eyewear Dispensing',
    definition: 'Specialized techniques for fitting protective eyewear for athletic activities, emphasizing impact resistance, stability, field of vision, and performance enhancement.',
    details: 'Considerations include wrap angle, pantoscopic tilt compensation, decentration, specialized materials, anti-fog treatments, and sport-specific designs.',
    example: 'A wrap-around cycling frame with 18° curve requires specialized lens surfacing to compensate for peripheral distortion and power errors.',
    examType: 'ABO',
    category: 'Specialized Techniques',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Sports+Eyewear',
    furtherReading: 'Sports Vision by Graham Erickson'
  }
]; 