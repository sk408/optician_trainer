import { FlashcardData } from './types';

/**
 * Enhanced flashcards for NCLE (National Contact Lens Examiners) exam preparation
 * These cards provide comprehensive content with detailed explanations,
 * real-world applications, and technical details to help student opticians.
 */
export const ncleFlashcards: FlashcardData[] = [
  // PRE-FITTING
  {
    id: 'pre-fitting-1',
    term: 'Corneal Anatomy',
    definition: 'The transparent, avascular dome-shaped anterior portion of the eye that provides 2/3 of the eye\'s refractive power and is the primary tissue interacting with contact lenses.',
    details: 'Five layers: epithelium, Bowman\'s layer, stroma, Descemet\'s membrane, and endothelium. Horizontal diameter: ~11.7mm, vertical diameter: ~10.6mm, central thickness: ~0.54mm.',
    example: 'The corneal epithelium interacts directly with contact lenses and can show staining patterns that help diagnose fitting issues.',
    examType: 'NCLE',
    category: 'Pre-Fitting',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Corneal+Anatomy',
    furtherReading: 'Contact Lens Practice by Nathan Efron'
  },
  {
    id: 'pre-fitting-2',
    term: 'Tear Film Structure',
    definition: 'The three-layered fluid covering the anterior eye surface, crucial for contact lens wettability, comfort, and clear vision.',
    details: 'Layers: lipid (outer, ~0.1μm), aqueous (middle, ~7μm), and mucin (inner, ~0.2-0.5μm). Functions include lubrication, antibacterial protection, nutrient delivery, and optical surface smoothing.',
    example: 'A contact lens wearer with meibomian gland dysfunction may experience rapid tear evaporation (lipid layer deficiency), leading to lens discomfort and deposits.',
    examType: 'NCLE',
    category: 'Pre-Fitting',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Tear+Film',
    furtherReading: 'Tear Film and Ocular Surface by Donald Korb'
  },
  {
    id: 'pre-fitting-3',
    term: 'Keratometry',
    definition: 'The measurement of the anterior corneal curvature to determine the base curve selection for contact lenses and detect irregularities.',
    details: 'Measures the central 3-4mm of cornea. Results expressed as radius of curvature (mm) or dioptric power. Average K-readings: 43.00-44.00D (7.85-7.65mm).',
    example: 'A patient with K readings of 42.00D and 44.00D has 2.00D of corneal astigmatism, suggesting a toric lens design might be needed.',
    examType: 'NCLE',
    category: 'Pre-Fitting',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Keratometry',
    furtherReading: 'Contact Lens Practice by Nathan Efron'
  },
  {
    id: 'pre-fitting-4',
    term: 'Corneal Topography',
    definition: 'Computer-assisted analysis of the corneal surface shape, providing detailed maps of curvature, elevation, and power across the entire cornea.',
    details: 'Maps typically use color-coding (warm colors for steep areas, cool colors for flat areas). Measures thousands of points versus just four in keratometry.',
    example: 'Topography revealing inferior steepening with an asymmetric bow-tie pattern may indicate early keratoconus, requiring specialized contact lens designs.',
    examType: 'NCLE',
    category: 'Pre-Fitting',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Corneal+Topography',
    furtherReading: 'Contemporary Scleral Lenses: Theory and Application by Melissa Barnett'
  },
  
  // DIAGNOSTIC FITTING
  {
    id: 'diagnostic-fitting-1',
    term: 'Soft Lens Fitting Assessment',
    definition: 'Evaluation of how a soft contact lens interacts with the eye, focusing on centration, movement, and coverage.',
    details: 'Optimal fit shows: good centration (within 0.5mm of pupil center), movement of 0.25-0.5mm on blink, no edge standoff, and complete corneal coverage. Evaluated with slit lamp.',
    example: 'Excessive lens movement (>1mm) with edge fluting may indicate a flat fitting relationship, requiring a steeper base curve or larger diameter.',
    examType: 'NCLE',
    category: 'Diagnostic Fitting',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Soft+Lens+Fitting',
    furtherReading: 'Clinical Manual of Contact Lenses by Timothy Bennett'
  },
  {
    id: 'diagnostic-fitting-2',
    term: 'RGP Fitting Assessment',
    definition: 'Evaluation of rigid gas permeable lens position, movement, and fluorescein pattern to assess the fitting relationship.',
    details: 'Optimal alignment fit shows: centered position, 1-2mm movement on blink, slight superior position with lid attachment, and even fluorescein pattern with minimal central pooling.',
    example: 'An RGP lens showing central pooling (bright central fluorescein) with mid-peripheral touch indicates a steep fitting relationship, requiring a flatter base curve.',
    examType: 'NCLE',
    category: 'Diagnostic Fitting',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=RGP+Fitting',
    furtherReading: 'Gas Permeable Lens Fitting by Edward Bennett'
  },
  {
    id: 'diagnostic-fitting-3',
    term: 'Over-Refraction',
    definition: 'The process of determining the residual refractive error while a patient is wearing contact lenses to fine-tune the final prescription.',
    details: 'Performed using a phoropter or trial frame. Result is combined with lens power to determine final prescription. Spherical equivalent technique may be used for initial assessment.',
    example: 'A patient wearing +3.00D trial lenses with a -0.50D over-refraction would need a final lens power of +2.50D.',
    examType: 'NCLE',
    category: 'Diagnostic Fitting',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Over-Refraction',
    furtherReading: 'Clinical Manual of Contact Lenses by Timothy Bennett'
  },
  {
    id: 'diagnostic-fitting-4',
    term: 'LARS Rule',
    definition: 'Left Add, Right Subtract - A mnemonic for adjusting the base curve of a contact lens based on the fluorescein pattern.',
    details: 'If the fluorescein pattern shows central pooling (steep fit), move LEFT on the fitting set (add to base curve value). If the pattern shows central bearing (flat fit), move RIGHT on the fitting set (subtract from base curve value).',
    example: 'An RGP lens with 7.80mm base curve showing central pooling should be adjusted LEFT to 7.90mm (adding 0.10mm to flatten the fit).',
    examType: 'NCLE',
    category: 'Diagnostic Fitting',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=LARS+Rule',
    furtherReading: 'Gas Permeable Lens Fitting by Edward Bennett'
  },
  
  // CONTACT LENS MATERIALS
  {
    id: 'cl-materials-1',
    term: 'Oxygen Permeability (Dk)',
    definition: 'A measure of how much oxygen can pass through a contact lens material, with "D" representing diffusion and "k" representing solubility.',
    details: 'Measured in units of 10⁻¹¹ (cm² × mL O₂)/(sec × mL × mmHg). Higher values indicate more oxygen transmission. Critical for corneal health and extended wear.',
    example: 'Silicone hydrogel materials typically have Dk values of 60-140, while traditional hydrogels range from 8-30, explaining why silicone hydrogels are safer for overnight wear.',
    examType: 'NCLE',
    category: 'Contact Lens Materials',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Oxygen+Permeability',
    furtherReading: 'Contact Lens Practice by Nathan Efron'
  },
  {
    id: 'cl-materials-2',
    term: 'Oxygen Transmissibility (Dk/t)',
    definition: 'The amount of oxygen that reaches the cornea through a contact lens, accounting for both material permeability (Dk) and lens thickness (t).',
    details: 'Measured in units of 10⁻⁹ (cm × mL O₂)/(sec × mL × mmHg). Critical value for corneal health is minimum of 24 for daily wear and 87 for overnight wear (central cornea).',
    example: 'A -3.00D lens made in a material with Dk of 80 but center thickness of 0.08mm has a Dk/t of 100, while a +3.00D lens in the same material with center thickness of 0.2mm has a Dk/t of only 40.',
    examType: 'NCLE',
    category: 'Contact Lens Materials',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Oxygen+Transmissibility',
    furtherReading: 'Anterior Eye Disease by Bruce Jenkins'
  },
  {
    id: 'cl-materials-3',
    term: 'Water Content',
    definition: 'The percentage of water in a hydrogel contact lens material when fully hydrated, affecting oxygen permeability, dimensional stability, and comfort.',
    details: 'FDA Groups: Group I (low water, non-ionic, <50%), Group II (high water, non-ionic, >50%), Group III (low water, ionic, <50%), Group IV (high water, ionic, >50%).',
    example: 'A Group IV lens like etafilcon A (58% water, ionic) will dehydrate more rapidly in low humidity environments than a Group II lens, potentially affecting comfort later in the day.',
    examType: 'NCLE',
    category: 'Contact Lens Materials',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Water+Content',
    furtherReading: 'Contact Lens Practice by Nathan Efron'
  },
  {
    id: 'cl-materials-4',
    term: 'Modulus',
    definition: 'A measure of a contact lens material\'s stiffness or flexibility, reflecting the amount of force required to stretch or deform the material.',
    details: 'Measured in megapascals (MPa). Higher modulus = stiffer lens. Early silicone hydrogels had high modulus (1.0-1.5 MPa) while newer generations are lower (0.4-0.6 MPa).',
    example: 'A patient experiencing discomfort with first-generation silicone hydrogel lenses might be switched to a lower modulus material to reduce mechanical irritation and superior epithelial arcuate lesions (SEALs).',
    examType: 'NCLE',
    category: 'Contact Lens Materials',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Material+Modulus',
    furtherReading: 'Contact Lens Practice by Nathan Efron'
  },
  
  // PATIENT EDUCATION
  {
    id: 'patient-education-1',
    term: 'Contact Lens Insertion and Removal',
    definition: 'Techniques for safely placing contact lenses on the eye and removing them, a fundamental skill taught to all new lens wearers.',
    details: 'Steps for soft lens insertion: clean hands, rinse lens, check orientation, place on index finger, hold lids with other hand, place lens directly on cornea. Removal involves pinching or sliding techniques.',
    example: 'When teaching a new wearer, having them look in different directions during insertion attempts can help overcome reflexive blinking and eyelid squeezing.',
    examType: 'NCLE',
    category: 'Patient Education',
    difficulty: 'beginner',
    imageUrl: 'https://placehold.co/300x200/png?text=Lens+Insertion',
    furtherReading: 'Clinical Manual of Contact Lenses by Timothy Bennett'
  },
  {
    id: 'patient-education-2',
    term: 'Contact Lens Care Systems',
    definition: 'Products and procedures used to clean, disinfect, rinse, and store contact lenses to maintain comfort, clarity, and eye health.',
    details: 'Types include: multipurpose solutions (MPS), hydrogen peroxide systems, daily cleaners, enzymatic cleaners, and saline solutions. Each with specific instructions and compatibility considerations.',
    example: 'A patient experiencing solution sensitivity with a preserved MPS might be switched to a preservative-free hydrogen peroxide system like CLEAR CARE® with proper education on the 6-hour neutralization requirement.',
    examType: 'NCLE',
    category: 'Patient Education',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Lens+Care+Systems',
    furtherReading: 'Contact Lens Care and Compliance by Robin Chalmers'
  },
  {
    id: 'patient-education-3',
    term: 'Replacement Schedules',
    definition: 'Manufacturer-recommended timeframes for disposing of contact lenses and replacing with fresh lenses to maintain eye health and comfort.',
    details: 'Common schedules: daily disposable, bi-weekly (14 days), monthly (30 days), quarterly (3 months), and annual. Extended wear options allow for overnight wear from 1-30 nights, depending on material.',
    example: 'A patient who frequently experiences protein deposits might be best suited for daily disposable lenses rather than monthly lenses to eliminate the need for cleaning and reduce deposit-related discomfort.',
    examType: 'NCLE',
    category: 'Patient Education',
    difficulty: 'beginner',
    imageUrl: 'https://placehold.co/300x200/png?text=Replacement+Schedules',
    furtherReading: 'Clinical Manual of Contact Lenses by Timothy Bennett'
  },
  {
    id: 'patient-education-4',
    term: 'Contact Lens Case Care',
    definition: 'Proper maintenance and replacement procedures for lens storage cases to prevent microbial contamination and biofilm formation.',
    details: 'Cases should be rinsed with fresh solution (not tap water), air-dried face down on clean tissue, and replaced every 1-3 months. A major source of eye infections when not properly maintained.',
    example: 'Instructing patients to mark their calendar for case replacement every quarter and storing cases away from bathroom humidity can significantly reduce risk of microbial keratitis.',
    examType: 'NCLE',
    category: 'Patient Education',
    difficulty: 'intermediate',
    imageUrl: 'https://placehold.co/300x200/png?text=Case+Care',
    furtherReading: 'Contact Lens Care and Compliance by Robin Chalmers'
  },
  
  // COMPLICATIONS
  {
    id: 'complications-1',
    term: 'Corneal Neovascularization',
    definition: 'Growth of new blood vessels into the normally avascular cornea, typically from the limbus toward the central cornea, due to chronic hypoxia.',
    details: 'Stages: early (minimal limbal vessel dilation), mild (1-2mm incursion), moderate (2-3mm), severe (>3mm). Associated with extended wear, tight lens fits, and low-Dk materials.',
    example: 'A patient showing 2mm of superior corneal neovascularization while wearing conventional hydrogel lenses overnight should be refitted with high-Dk silicone hydrogels or limited to daily wear.',
    examType: 'NCLE',
    category: 'Complications',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Neovascularization',
    furtherReading: 'Contact Lens Complications by Nathan Efron'
  },
  {
    id: 'complications-2',
    term: 'Solution-Induced Corneal Staining (SICS)',
    definition: 'Diffuse micropunctate corneal epithelial staining observed with fluorescein, associated with interactions between certain lens materials and multipurpose solutions.',
    details: 'Typically appears as diffuse punctate staining across the cornea, often most visible 2-4 hours after lens insertion. May be asymptomatic or cause mild irritation.',
    example: 'A patient using polyquaternium-preserved MPS with a silicone hydrogel lens showing diffuse corneal staining but minimal symptoms might benefit from switching to a peroxide-based care system.',
    examType: 'NCLE',
    category: 'Complications',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=SICS',
    furtherReading: 'Contact Lens Complications by Nathan Efron'
  },
  {
    id: 'complications-3',
    term: 'Giant Papillary Conjunctivitis (GPC)',
    definition: 'Inflammatory reaction of the upper tarsal conjunctiva characterized by papillary hypertrophy, mucus production, and discomfort, typically caused by mechanical irritation or protein deposits.',
    details: 'Graded from 1-4 based on papillae size and symptoms. Treatment includes more frequent replacement, enhanced cleaning regimens, switching lens materials, or temporary lens discontinuation.',
    example: 'A two-week replacement lens wearer with Grade 2 GPC might be successfully managed by switching to daily disposables to eliminate deposit-related inflammation.',
    examType: 'NCLE',
    category: 'Complications',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=GPC',
    furtherReading: 'Contact Lens Complications by Nathan Efron'
  },
  {
    id: 'complications-4',
    term: 'Microbial Keratitis',
    definition: 'Infection of the cornea by microorganisms that can lead to scarring, vision loss, and in severe cases, corneal perforation. A serious adverse event requiring immediate medical attention.',
    details: 'Risk factors: overnight wear, poor compliance, smoking, improper lens care, older age, high water content lenses. Common organisms: Pseudomonas, Staphylococcus, Acanthamoeba.',
    example: 'A patient presenting with a painful red eye, light sensitivity, and a focal white infiltrate should be immediately referred to an ophthalmologist for corneal cultures and intensive antibiotic therapy.',
    examType: 'NCLE',
    category: 'Complications',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Microbial+Keratitis',
    furtherReading: 'Contact Lens-Related Microbial Keratitis by Stapleton et al.'
  },
  
  // SPECIALTY LENSES
  {
    id: 'specialty-1',
    term: 'Orthokeratology',
    definition: 'The use of specially designed rigid gas permeable lenses to temporarily reshape the cornea during sleep, providing lens-free vision during waking hours and potentially slowing myopia progression.',
    details: 'Uses reverse geometry lenses (steeper in periphery than center) to create controlled central corneal flattening. FDA approved for up to 6.00D of myopia correction. Effect is temporary.',
    example: 'A 12-year-old progressing myope with -3.00D prescription might be fit with overnight orthokeratology lenses to provide clear daytime vision without glasses and potentially slow myopia progression.',
    examType: 'NCLE',
    category: 'Specialty Lenses',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Orthokeratology',
    furtherReading: 'Contemporary Orthokeratology by John Mountford'
  },
  {
    id: 'specialty-2',
    term: 'Scleral Lenses',
    definition: 'Large-diameter rigid gas permeable lenses that vault over the entire cornea and limbus to rest on the sclera, providing vision correction and therapeutic benefits.',
    details: 'Diameters range from 15-25mm. Filled with preservative-free saline. Used for irregular corneas, severe dry eye, post-surgical complications, and high refractive errors.',
    example: 'A keratoconus patient with 9.00D of irregular astigmatism who cannot achieve functional vision with spectacles or standard contact lenses might achieve 20/20 acuity with a 18mm scleral lens.',
    examType: 'NCLE',
    category: 'Specialty Lenses',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Scleral+Lenses',
    furtherReading: 'Contemporary Scleral Lenses: Theory and Application by Melissa Barnett'
  },
  {
    id: 'specialty-3',
    term: 'Multifocal Contact Lenses',
    definition: 'Lenses designed to correct presbyopia by incorporating multiple powers to allow clear vision at different distances (distance, intermediate, and near).',
    details: 'Designs include: simultaneous vision (concentric or aspheric), translating/segmented, and modified monovision. Available in both soft and rigid materials.',
    example: 'A 48-year-old executive with +2.00D add who spends 8 hours daily on digital devices might be fit with center-near aspheric multifocals with increased intermediate power in the dominant eye.',
    examType: 'NCLE',
    category: 'Specialty Lenses',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Multifocal+Lenses',
    furtherReading: 'Presbyopia: Clinical Management by Thomas Quinn'
  },
  {
    id: 'specialty-4',
    term: 'Hybrid Contact Lenses',
    definition: 'Lenses featuring a rigid gas permeable center surrounded by a soft hydrogel or silicone hydrogel skirt, combining the optical quality of RGPs with the comfort of soft lenses.',
    details: 'Used for irregular corneas, high astigmatism, presbyopia, and patients with RGP stability issues. Fitting requires specialized training and manufacturer-specific guidelines.',
    example: 'An early keratoconus patient who discontinued traditional RGPs due to comfort issues might successfully wear hybrid lenses that provide stable vision with improved comfort and centration.',
    examType: 'NCLE',
    category: 'Specialty Lenses',
    difficulty: 'advanced',
    imageUrl: 'https://placehold.co/300x200/png?text=Hybrid+Lenses',
    furtherReading: 'Specialty Contact Lenses by Patricia Keech'
  }
]; 