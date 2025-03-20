import { TopicStudyContent } from '../../interfaces/StudyContent';
import { contactLensDesignMaterialsImages } from '../mediaAssets';

export const contactLensDesignMaterialsContent: TopicStudyContent = {
  topicId: 'contact-lens-design-materials',
  title: 'Contact Lens Design and Materials',
  introduction: 'Contact lens design and materials have evolved dramatically over the decades, offering patients diverse options for vision correction, comfort, and eye health. This module explores the fundamental principles of contact lens design, the characteristics of different lens materials, and how these factors influence lens performance, patient comfort, and ocular health. Understanding these aspects is essential for proper contact lens selection, fitting, and troubleshooting.',
  objectives: [
    'Understand the basic principles of contact lens design and their impact on vision and comfort',
    'Identify the major types of contact lens materials and their properties',
    'Learn how lens design affects fit, vision quality, and oxygen transmission',
    'Understand the relationship between lens material properties and patient comfort',
    'Compare different lens types and their appropriate applications',
    'Identify specialty lens designs for specific visual conditions'
  ],
  sections: [
    {
      id: 'contact-lens-basics',
      title: 'Contact Lens Design Fundamentals',
      type: 'introduction',
      content: [
        {
          id: 'design-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lens design incorporates various geometric, optical, and material considerations to create a lens that provides clear vision while maintaining ocular health and comfort. The design elements of a contact lens influence how it interacts with the eye, how it distributes on the ocular surface, and how effectively it corrects vision.'
          }
        },
        {
          id: 'design-elements',
          type: 'list',
          content: {
            title: 'Key Contact Lens Design Elements:',
            items: [
              'Base curve radius (BCR) - determines the overall curvature of the back surface',
              'Diameter - the overall size of the lens',
              'Optic zone - the central portion of the lens that contains the refractive power',
              'Peripheral curves - transitions between the optical zone and the lens edge',
              'Edge design - affects comfort, tear exchange, and lens movement',
              'Thickness profile - impacts oxygen transmission, durability, and handling',
              'Surface treatments - can enhance wettability and reduce deposits'
            ],
            ordered: false
          }
        },
        {
          id: 'lens-categories-image',
          type: 'image',
          content: {
            src: contactLensDesignMaterialsImages.contactLensCategories.path,
            alt: 'Categories of contact lenses showing soft, RGP, and specialty designs',
            caption: 'Major categories of contact lenses: soft lenses, rigid gas permeable (RGP) lenses, and specialty designs',
            width: '80%'
          }
        },
        {
          id: 'design-categories',
          type: 'table',
          content: {
            headers: ['Design Category', 'Key Characteristics', 'Best For'],
            rows: [
              ['Soft Lenses', 'Flexible, water-containing materials, drape over cornea', 'General vision correction, comfort-prioritizing patients, part-time wear'],
              ['Rigid Gas Permeable (RGP)', 'Maintain shape, less flexible, higher oxygen transmission', 'Astigmatism, irregular corneas, optimal visual acuity'],
              ['Hybrid Lenses', 'RGP center with soft skirt/periphery', 'Patients needing RGP optics with soft lens comfort'],
              ['Scleral Lenses', 'Large-diameter RGPs that vault over cornea', 'Severe dry eye, irregular corneas, post-surgical cases'],
              ['Specialty Designs', 'Custom parameters for specific conditions', 'Keratoconus, post-surgical, orthokeratology, prosthetic needs']
            ],
            caption: 'Major Contact Lens Design Categories and Their Applications'
          }
        }
      ]
    },
    {
      id: 'soft-lens-designs',
      title: 'Soft Contact Lens Designs',
      type: 'main',
      content: [
        {
          id: 'soft-intro',
          type: 'paragraph',
          content: {
            text: 'Soft contact lenses are made from hydrogel or silicone hydrogel materials that contain water and conform to the shape of the cornea. These lenses account for approximately 90% of contact lens fits worldwide due to their initial comfort and ease of adaptation.'
          }
        },
        {
          id: 'soft-lens-definition',
          type: 'definition',
          content: {
            term: 'Soft Contact Lenses',
            definition: 'Flexible lenses made from water-containing materials (hydrogels) that drape over the cornea and typically range from 13.8 to 14.5mm in diameter. They derive their oxygen permeability primarily from their water content or, in silicone hydrogels, from silicone components.',
            related: ['hydrogel', 'silicone-hydrogel', 'water-content']
          }
        },
        {
          id: 'soft-lens-parameters',
          type: 'table',
          content: {
            headers: ['Parameter', 'Typical Range', 'Significance'],
            rows: [
              ['Base Curve', '8.3 to 9.0 mm', 'Affects lens fit tightness; steeper (lower number) = tighter fit'],
              ['Diameter', '13.8 to 14.5 mm', 'Affects coverage area and stability'],
              ['Center Thickness', '0.07 to 0.14 mm', 'Affects oxygen transmission and lens handling'],
              ['Water Content', '38% to 78%', 'Affects comfort, flexibility, and oxygen transmission'],
              ['Modulus', '0.2 to 1.2 MPa', 'Measure of lens stiffness; higher = more rigid feel']
            ],
            caption: 'Typical Parameters for Soft Contact Lenses'
          }
        },
        {
          id: 'spherical-design',
          type: 'definition',
          content: {
            term: 'Spherical Soft Lenses',
            definition: 'The most basic soft lens design, with the same power across the entire optical zone. Used for correcting myopia (nearsightedness) and hyperopia (farsightedness) without astigmatism.',
            related: ['myopia', 'hyperopia', 'power-profile']
          }
        },
        {
          id: 'toric-design',
          type: 'definition',
          content: {
            term: 'Toric Soft Lenses',
            definition: 'Lenses with different powers in different meridians to correct astigmatism. These lenses incorporate a stabilization system to maintain proper orientation on the eye.',
            related: ['astigmatism', 'lens-rotation', 'stabilization']
          }
        },
        {
          id: 'stabilization-methods',
          type: 'list',
          content: {
            title: 'Toric Lens Stabilization Methods:',
            items: [
              'Prism Ballast - Thicker portion at the bottom creates weight that orients the lens',
              'Peri-Ballast - Similar to prism ballast but with different thickness distribution',
              'Dynamic Stabilization - Uses the natural pressure of the eyelids during blinking',
              'Truncation - Straight edge at the bottom aligns with the lower lid',
              'Thin Zones - Thin areas at 3 and 9 o\'clock positions to aid rotation to proper position'
            ],
            ordered: false
          }
        },
        {
          id: 'toric-rotation',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Assessing Toric Lens Rotation',
            text: 'When evaluating toric lens rotation, observe the lens markings with the patient looking straight ahead. Use the LARS rule (Left Add, Right Subtract) to calculate the required axis adjustment. For example, if the lens is rotated 10° to the left, add 10° to the axis value on the prescription.'
          }
        },
        {
          id: 'multifocal-design',
          type: 'definition',
          content: {
            term: 'Multifocal Soft Lenses',
            definition: 'Lenses that incorporate multiple powers to enable clear vision at different distances, typically used for presbyopia correction. These can use concentric, aspheric, or segmented designs to create the multiple focus zones.',
            related: ['presbyopia', 'add-power', 'near-vision']
          }
        },
        {
          id: 'multifocal-designs',
          type: 'table',
          content: {
            headers: ['Design Type', 'Description', 'Advantages/Disadvantages'],
            rows: [
              ['Concentric', 'Alternating rings of distance and near power', 'Good for varying pupil sizes; may cause haloes'],
              ['Aspheric', 'Gradual power change from center to periphery', 'Works with natural pupil response; may compromise distance vision'],
              ['Segmented/Translating', 'Distinct zones for different distances', 'Clearer vision at each distance; more difficult to fit'],
              ['Center-Distance', 'Distance power in center, near in periphery', 'Better for driving, outdoor activities; dependent on pupil size'],
              ['Center-Near', 'Near power in center, distance in periphery', 'Better for office work, reading; may compromise night vision']
            ],
            caption: 'Types of Multifocal Soft Lens Designs'
          }
        },
        {
          id: 'multifocal-considerations',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Multifocal Fitting Considerations',
            text: 'Patient expectations are critical when fitting multifocal lenses. Explain that these lenses involve a compromise between distance and near vision. The lens design and power distribution should match the patient\'s visual priorities and lifestyle needs. Lighting conditions significantly affect multifocal performance due to pupil size variations.'
          }
        }
      ]
    },
    {
      id: 'rgp-lens-designs',
      title: 'Rigid Gas Permeable Lens Designs',
      type: 'main',
      content: [
        {
          id: 'rgp-intro',
          type: 'paragraph',
          content: {
            text: 'Rigid Gas Permeable (RGP) lenses are made from firm, durable plastic materials that allow oxygen to pass through to the cornea. Unlike soft lenses, RGPs maintain their shape on the eye, creating a tear layer between the lens and cornea that provides excellent optical quality.'
          }
        },
        {
          id: 'rgp-definition',
          type: 'definition',
          content: {
            term: 'Rigid Gas Permeable Lenses',
            definition: 'Firm, durable contact lenses made from silicone-containing materials that maintain their shape on the eye while allowing oxygen transmission. They typically have smaller diameters than soft lenses (9-10.5mm) and float on the tear film over the cornea.',
            related: ['oxygen-permeability', 'tear-lens', 'lens-flexure']
          }
        },
        {
          id: 'rgp-advantages',
          type: 'list',
          content: {
            title: 'Advantages of RGP Lenses:',
            items: [
              'Superior optical quality and vision correction precision',
              'Better correction of moderate to high astigmatism',
              'Higher oxygen permeability for corneal health',
              'Durability and longer replacement intervals',
              'Less protein deposit accumulation',
              'Custom design options for irregular corneas',
              'Better tear exchange under the lens'
            ],
            ordered: false
          }
        },
        {
          id: 'rgp-parameters',
          type: 'table',
          content: {
            headers: ['Parameter', 'Typical Range', 'Significance'],
            rows: [
              ['Base Curve', '7.0 to 8.2 mm', 'Critical for lens fit; steeper (lower number) = tighter fit'],
              ['Diameter', '9.0 to 10.5 mm', 'Affects centration, movement, and comfort'],
              ['Optical Zone', '7.0 to 8.5 mm', 'Determines area of vision correction'],
              ['Center Thickness', '0.12 to 0.20 mm', 'Affects oxygen transmission and durability'],
              ['Edge Design', 'Varies', 'Crucial for comfort and tear exchange'],
              ['Dk Value', '30 to 170+', 'Oxygen permeability; higher = better oxygen transmission']
            ],
            caption: 'Typical Parameters for RGP Contact Lenses'
          }
        },
        {
          id: 'rgp-design-features',
          type: 'paragraph',
          content: {
            text: 'The design of an RGP lens can be divided into three main zones: the optical zone, the peripheral curve system, and the edge. Each zone has specific functions that affect both the lens fit and the visual performance.'
          }
        },
        {
          id: 'rgp-zones-image',
          type: 'image',
          content: {
            src: contactLensDesignMaterialsImages.rgpDesignZones.path,
            alt: 'Cross-section diagram of RGP lens showing different zones',
            caption: 'Cross-section of an RGP lens showing optical zone, peripheral curves, and edge design',
            width: '70%'
          }
        },
        {
          id: 'optical-zone-def',
          type: 'definition',
          content: {
            term: 'Optical Zone',
            definition: 'The central portion of the lens that contains the corrective power. In RGP lenses, this zone is precisely manufactured to maintain exact curvature and power specifications without flexing on the eye.',
            related: ['back-optic-zone-radius', 'power']
          }
        },
        {
          id: 'peripheral-system-def',
          type: 'definition',
          content: {
            term: 'Peripheral Curve System',
            definition: 'A series of curves that surround the optical zone and create a transition to the edge. These curves influence lens movement, tear exchange, and comfort. Typically includes secondary, intermediate, and peripheral curves with progressively flatter radii.',
            related: ['secondary-curve', 'edge-lift', 'tear-exchange']
          }
        },
        {
          id: 'edge-design-def',
          type: 'definition',
          content: {
            term: 'Edge Design',
            definition: 'The outermost portion of the lens that interacts with the eyelid and conjunctiva. Edge designs can be thin or standard thickness with varying degrees of rounding or angled profiles to optimize comfort and minimize foreign body sensation.',
            related: ['edge-thickness', 'edge-profile', 'comfort']
          }
        },
        {
          id: 'rgp-fit-characteristics',
          type: 'callout',
          content: {
            type: 'important',
            title: 'RGP Fitting Evaluation',
            text: 'An optimal RGP fit should show good centration, 1-2mm of movement with each blink, and an aligned fluorescein pattern with minimal apical clearance or touch. The peripheral curves should show a fluorescein band of increasing width and brightness toward the edge. A properly fitted RGP should re-center quickly after being manually displaced.'
          }
        },
        {
          id: 'fluorescein-patterns',
          type: 'table',
          content: {
            headers: ['Pattern', 'Description', 'Implication'],
            rows: [
              ['Central Touch/Apical Bearing', 'Dark area in center with brighter periphery', 'Flat fit; may cause central corneal distortion'],
              ['Aligned Pattern', 'Even, thin layer of fluorescein across surface', 'Optimal alignment; ideal fit'],
              ['Central Pooling', 'Bright green in center, darker in periphery', 'Steep fit; may cause bubbles or poor movement'],
              ['Peripheral Seal-off', 'Dark band in periphery', 'Poor tear exchange; may cause corneal edema'],
              ['Edge Standoff', 'Bright band at edge', 'Excessive edge lift; may cause discomfort']
            ],
            caption: 'Common Fluorescein Patterns in RGP Lens Fitting'
          }
        }
      ]
    },
    {
      id: 'specialty-lens-designs',
      title: 'Specialty Contact Lens Designs',
      type: 'main',
      content: [
        {
          id: 'specialty-intro',
          type: 'paragraph',
          content: {
            text: 'Specialty contact lenses are designed for specific visual needs or ocular conditions that cannot be adequately addressed with conventional lens designs. These advanced designs often require custom parameters and specialized fitting techniques.'
          }
        },
        {
          id: 'scleral-lenses',
          type: 'definition',
          content: {
            term: 'Scleral Lenses',
            definition: 'Large-diameter RGP lenses (15-24mm) that vault completely over the cornea and rest on the sclera. These lenses create a fluid reservoir between the lens and cornea, providing both optical correction and therapeutic benefits for irregular corneas and ocular surface diseases.',
            related: ['corneal-vault', 'limbal-clearance', 'mini-scleral']
          }
        },
        {
          id: 'scleral-diagram',
          type: 'image',
          content: {
            src: contactLensDesignMaterialsImages.scleralLensVault.path,
            alt: 'Cross-section diagram of a scleral lens showing corneal vault',
            caption: 'Cross-section of a scleral lens showing vault over the cornea and landing zone on the sclera',
            width: '70%'
          }
        },
        {
          id: 'scleral-parameters',
          type: 'table',
          content: {
            headers: ['Parameter', 'Description', 'Fitting Considerations'],
            rows: [
              ['Sagittal Depth', 'Total vault height from lens to cornea', 'Must clear corneal apex by 100-400 microns'],
              ['Landing Zone', 'Edge area that rests on the sclera', 'Should align with scleral contour without impingement'],
              ['Limbal Clearance', 'Space over the corneal-scleral junction', 'Should maintain 50-100 microns of clearance'],
              ['Central Thickness', 'Typically thicker than standard RGPs', 'Balances durability with oxygen transmission'],
              ['Diameter', '15-24mm depending on design', 'Larger diameters provide more vault, stability']
            ],
            caption: 'Key Parameters for Scleral Lens Fitting'
          }
        },
        {
          id: 'scleral-applications',
          type: 'list',
          content: {
            title: 'Clinical Applications of Scleral Lenses:',
            items: [
              'Keratoconus and other corneal ectasias',
              'Post-surgical corneas (LASIK, PKP, RK)',
              'Severe dry eye disease',
              'Stevens-Johnson syndrome',
              'Graft-versus-host disease',
              'Persistent epithelial defects',
              'Neurotrophic keratitis',
              'Ocular surface irregularities',
              'High refractive errors with regular astigmatism'
            ],
            ordered: false
          }
        },
        {
          id: 'hybrid-lenses',
          type: 'definition',
          content: {
            term: 'Hybrid Lenses',
            definition: 'Contact lenses that combine a rigid gas permeable center with a soft lens skirt/periphery. These lenses aim to provide the visual acuity benefits of RGP lenses with the comfort and centration advantages of soft lenses.',
            related: ['rgp-center', 'soft-skirt', 'synergeyes']
          }
        },
        {
          id: 'hybrid-advantages',
          type: 'list',
          content: {
            title: 'Advantages of Hybrid Lenses:',
            items: [
              'Combines RGP visual acuity with soft lens comfort',
              'Better centration than corneal RGPs',
              'Reduced sensation of lens awareness',
              'Minimal risk of lens dislocation during activities',
              'Good option for RGP intolerant patients who need better vision',
              'Alternative for patients with challenging corneal topography'
            ],
            ordered: false
          }
        },
        {
          id: 'ortho-k-lenses',
          type: 'definition',
          content: {
            term: 'Orthokeratology Lenses',
            definition: 'Specially designed RGP lenses worn overnight to temporarily reshape the cornea, providing vision correction during waking hours without daytime lens wear. These lenses have reverse geometry designs that flatten the central cornea while creating mid-peripheral steepening.',
            related: ['corneal-reshaping', 'myopia-control', 'reverse-geometry']
          }
        },
        {
          id: 'ortho-k-design',
          type: 'paragraph',
          content: {
            text: 'Orthokeratology lenses typically have a reverse geometry design with multiple zones: a central treatment zone that is flatter than the corneal curvature to reshape the central cornea, a steeper reverse curve zone that creates the pressure needed for reshaping, an alignment zone that centers and stabilizes the lens, and a peripheral zone for edge comfort and tear exchange.'
          }
        },
        {
          id: 'ortho-k-applications',
          type: 'list',
          content: {
            title: 'Applications of Orthokeratology:',
            items: [
              'Myopia correction (typically up to -6.00D)',
              'Myopia progression control in children',
              'Alternative to daytime lens wear for active individuals',
              'Patients who work in dusty or dry environments',
              'Mild to moderate astigmatism correction',
              'Some designs for hyperopia correction'
            ],
            ordered: false
          }
        },
        {
          id: 'keratoconus-lenses',
          type: 'definition',
          content: {
            term: 'Keratoconus Specialty Lenses',
            definition: 'Contact lenses specifically designed to fit the irregular, cone-shaped corneas of keratoconus patients. These lenses aim to provide stable vision while minimizing mechanical stress on the already compromised cornea.',
            related: ['corneal-ectasia', 'cone-location', 'corneal-scarring']
          }
        },
        {
          id: 'keratoconus-designs',
          type: 'table',
          content: {
            headers: ['Design Type', 'Features', 'Best For'],
            rows: [
              ['Multicurve', 'Multiple peripheral curves to match cone', 'Mild to moderate keratoconus'],
              ['Rose K', 'Specialized edge lifts and variable peripheries', 'Various stages and types of keratoconus'],
              ['Piggyback System', 'RGP lens on top of soft lens', 'Patients with comfort issues or corneal staining'],
              ['Scleral', 'Complete corneal vault with scleral landing', 'Advanced keratoconus, corneal transplants'],
              ['Hybrid', 'RGP center with soft skirt', 'Patients who cannot tolerate traditional RGPs']
            ],
            caption: 'Contact Lens Options for Keratoconus Management'
          }
        },
        {
          id: 'keratoconus-fitting',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Keratoconus Fitting Considerations',
            text: 'When fitting keratoconus patients, avoid excessive pressure on the cone apex to prevent scarring. The ideal fit should distribute the bearing evenly while maintaining good centration and movement. Topography is essential for tracking disease progression and evaluating fitting results. For progressive cases, consider corneal cross-linking referral before finalizing the lens design.'
          }
        }
      ]
    },
    {
      id: 'contact-lens-materials',
      title: 'Contact Lens Materials',
      type: 'main',
      content: [
        {
          id: 'materials-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lens materials have evolved significantly since the introduction of the first contact lenses. Modern materials aim to balance oxygen permeability, wettability, durability, deposit resistance, and optical clarity. The choice of material significantly impacts both the physiological response of the eye and the subjective comfort of the wearer.'
          }
        },
        {
          id: 'material-properties',
          type: 'table',
          content: {
            headers: ['Property', 'Definition', 'Clinical Significance'],
            rows: [
              ['Oxygen Permeability (Dk)', 'Measure of how much oxygen can pass through a material', 'Higher Dk values reduce hypoxia-related complications'],
              ['Oxygen Transmissibility (Dk/t)', 'Dk divided by lens thickness', 'Determines actual oxygen reaching the cornea'],
              ['Water Content', 'Percentage of water in hydrogel materials', 'Affects comfort, lens flexibility, and oxygen transmission'],
              ['Wettability', 'How well the lens surface attracts and maintains moisture', 'Influences comfort, vision stability, and deposit resistance'],
              ['Modulus', 'Measure of material stiffness/rigidity', 'Affects lens handling, comfort, and fit characteristics'],
              ['Surface Treatment', 'Modifications to enhance surface properties', 'Can improve wettability and deposit resistance']
            ],
            caption: 'Key Contact Lens Material Properties and Their Clinical Significance'
          }
        },
        {
          id: 'soft-lens-materials',
          type: 'heading',
          content: {
            text: 'Soft Contact Lens Materials',
            level: 3
          }
        },
        {
          id: 'hydrogel-definition',
          type: 'definition',
          content: {
            term: 'Conventional Hydrogels',
            definition: 'Water-containing polymer materials that were the first generation of soft contact lens materials. These materials derive their oxygen permeability primarily from their water content - the higher the water content, the more oxygen can pass through.',
            related: ['HEMA', 'water-content', 'ionic-materials']
          }
        },
        {
          id: 'hydrogel-properties',
          type: 'list',
          content: {
            title: 'Characteristics of Conventional Hydrogels:',
            items: [
              'Water content ranging from 38% to 78%',
              'Oxygen permeability (Dk) generally proportional to water content',
              'Classified by FDA into Groups I-IV based on water content and ionic charge',
              'Generally good initial comfort but limited oxygen transmission',
              'Higher water content lenses tend to dehydrate more on the eye',
              'May absorb tear film proteins, particularly ionic materials'
            ],
            ordered: false
          }
        },
        {
          id: 'fda-groups',
          type: 'table',
          content: {
            headers: ['FDA Group', 'Water Content', 'Ionic Charge', 'Examples'],
            rows: [
              ['Group I', 'Low (<50%)', 'Non-ionic', 'tefilcon, polymacon'],
              ['Group II', 'High (≥50%)', 'Non-ionic', 'omafilcon, lidofilcon'],
              ['Group III', 'Low (<50%)', 'Ionic', 'balafilcon, bufilcon'],
              ['Group IV', 'High (≥50%)', 'Ionic', 'etafilcon, methafilcon, ocufilcon']
            ],
            caption: 'FDA Classification of Hydrogel Contact Lens Materials'
          }
        },
        {
          id: 'silicone-hydrogel',
          type: 'definition',
          content: {
            term: 'Silicone Hydrogels',
            definition: 'Advanced soft lens materials that incorporate silicone components into the hydrogel matrix. These materials provide significantly higher oxygen permeability than conventional hydrogels while maintaining the comfort characteristics of soft lenses.',
            related: ['silicone-components', 'Dk/t', 'oxygen-transmission']
          }
        },
        {
          id: 'silicone-hydrogel-properties',
          type: 'list',
          content: {
            title: 'Characteristics of Silicone Hydrogels:',
            items: [
              'Oxygen permeability (Dk) 5-7 times higher than conventional hydrogels',
              'Oxygen transmission less dependent on water content',
              'Generally higher modulus (stiffer) than conventional hydrogels',
              'Often require surface treatments to improve wettability',
              'Reduced risk of hypoxia-related complications',
              'Tendency to attract lipid rather than protein deposits',
              'Available in daily disposable through monthly replacement schedules'
            ],
            ordered: false
          }
        },
        {
          id: 'silicone-generations',
          type: 'table',
          content: {
            headers: ['Generation', 'Key Features', 'Examples'],
            rows: [
              ['First Generation', 'High Dk, high modulus, surface treatments required', 'lotrafilcon A, balafilcon A'],
              ['Second Generation', 'Improved wettability, reduced modulus', 'galyfilcon A, senofilcon A'],
              ['Third Generation', 'Enhanced comfort, lower modulus, better surface properties', 'comfilcon A, delefilcon A']
            ],
            caption: 'Evolution of Silicone Hydrogel Materials'
          }
        },
        {
          id: 'material-selection',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Material Selection Considerations',
            text: 'When selecting a contact lens material, consider the patient\'s wearing schedule, environment, tear film quality, and ocular health needs. High Dk silicone hydrogels are typically preferred for extended wear or patients with higher oxygen demands. Conventional hydrogels may be suitable for daily wear in patients with lipid-based dry eye. Material properties should be matched to the patient\'s specific needs and ocular characteristics.'
          }
        },
        {
          id: 'rgp-materials',
          type: 'heading',
          content: {
            text: 'Rigid Gas Permeable Lens Materials',
            level: 3
          }
        },
        {
          id: 'rgp-material-definition',
          type: 'definition',
          content: {
            term: 'Rigid Gas Permeable Materials',
            definition: 'Firm plastic materials containing silicone and fluorine components that maintain their shape on the eye while allowing oxygen transmission. Unlike earlier PMMA (polymethyl methacrylate) hard lenses, modern RGP materials permit substantial oxygen flow to the cornea.',
            related: ['silicone-acrylate', 'fluorosilicone-acrylate', 'oxygen-permeability']
          }
        },
        {
          id: 'rgp-material-properties',
          type: 'list',
          content: {
            title: 'Key Properties of RGP Materials:',
            items: [
              'Oxygen permeability (Dk) ranging from 30 to 170+',
              'Excellent optical clarity and stability',
              'Durability and resistance to deposits',
              'Various wetting angles affecting tear film interaction',
              'Range of hardness affecting durability and flexibility',
              'Different specific gravities affecting lens weight and centration'
            ],
            ordered: false
          }
        },
        {
          id: 'rgp-material-evolution',
          type: 'table',
          content: {
            headers: ['Material Type', 'Composition', 'Dk Range', 'Characteristics'],
            rows: [
              ['PMMA', 'Polymethyl methacrylate', '0', 'No oxygen permeability; historical material'],
              ['Silicone Acrylate', 'Silicone + acrylate', '12-35', 'First generation RGP; moderate Dk'],
              ['Fluorosilicone Acrylate', 'Fluorine + silicone + acrylate', '40-100', 'Improved wettability and deposit resistance'],
              ['Hyperpermeable', 'Enhanced fluorosilicone acrylate', '100-170+', 'Highest Dk; best for overnight wear']
            ],
            caption: 'Evolution of RGP Contact Lens Materials'
          }
        },
        {
          id: 'material-standards',
          type: 'paragraph',
          content: {
            text: 'The International Organization for Standardization (ISO) and the American National Standards Institute (ANSI) have established standards for contact lens materials. These standards define requirements for biocompatibility, physicochemical properties, and performance characteristics to ensure safety and efficacy.'
          }
        },
        {
          id: 'material-selection-factors',
          type: 'list',
          content: {
            title: 'Factors Influencing Material Selection:',
            items: [
              'Oxygen requirements based on wearing schedule and corneal metabolism',
              'Patient\'s tear film quality and composition',
              'Lens handling considerations (manual dexterity, visual ability)',
              'Environmental factors (climate, pollution, occupation)',
              'History of contact lens-related complications',
              'Replacement schedule preferences',
              'Visual acuity requirements and lens design needs'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'material-design-relationship',
      title: 'Relationship Between Lens Design and Materials',
      type: 'main',
      content: [
        {
          id: 'design-material-intro',
          type: 'paragraph',
          content: {
            text: 'Lens design and material selection are interdependent factors in contact lens fitting. The material properties influence what designs are possible, while the intended design purpose may dictate material choice. Understanding this relationship is crucial for successful contact lens prescribing.'
          }
        },
        {
          id: 'design-material-considerations',
          type: 'table',
          content: {
            headers: ['Design Aspect', 'Material Consideration', 'Clinical Implication'],
            rows: [
              ['Thin Design', 'Higher Dk material needed', 'Maintains oxygen supply despite reduced thickness'],
              ['Edge Profile', 'Material modulus affects edge feel', 'Higher modulus materials need more precise edge designs'],
              ['Surface Treatments', 'Base material wettability', 'Poor wetting materials require more substantial treatments'],
              ['Back Surface Geometry', 'Material flexibility', 'Rigid materials maintain designed geometry more precisely'],
              ['Diameter', 'Oxygen permeability', 'Larger diameters require higher Dk to compensate for reduced tear exchange']
            ],
            caption: 'Interrelationship Between Contact Lens Design and Material Properties'
          }
        },
        {
          id: 'oxygen-considerations',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Oxygen Transmission Considerations',
            text: 'Holden and Mertz established that to avoid corneal swelling during daily wear, contact lenses should have a minimum Dk/t of 24 × 10⁻⁹ (cm × mL O₂)/(sec × mL × mmHg). For overnight wear, a minimum Dk/t of 87 × 10⁻⁹ is recommended. These values should be considered when selecting lens materials and designs, particularly for extended or overnight wear.'
          }
        },
        {
          id: 'future-trends',
          type: 'paragraph',
          content: {
            text: 'The future of contact lens design and materials is moving toward smart contact lenses with biosensing capabilities, drug delivery systems, and augmented reality displays. Materials science innovations continue to improve biocompatibility, extend wearing time, and reduce complications while enhancing comfort and visual performance.'
          }
        }
      ]
    },
    {
      id: 'design-materials-summary',
      title: 'Summary and Clinical Applications',
      type: 'summary',
      content: [
        {
          id: 'summary-paragraph',
          type: 'paragraph',
          content: {
            text: 'Contact lens design and materials are fundamental considerations in contact lens practice. The evolution from PMMA hard lenses to today\'s high-performance silicone hydrogels and specialized designs has dramatically expanded the range of patients who can be successfully fitted with contact lenses. Understanding the properties of different materials and design elements enables practitioners to make evidence-based decisions that optimize vision, comfort, and ocular health.'
          }
        },
        {
          id: 'key-takeaways',
          type: 'list',
          content: {
            title: 'Key Takeaways:',
            items: [
              'Contact lens designs range from simple spherical soft lenses to complex specialty designs for specific ocular conditions',
              'Soft lens designs include spherical, toric, and multifocal options with varying geometries and stabilization methods',
              'RGP lenses offer superior optics and are available in corneal, scleral, and specialty designs',
              'Lens material properties significantly impact oxygen transmission, comfort, durability, and deposit resistance',
              'Silicone hydrogels offer dramatically improved oxygen performance compared to conventional hydrogels',
              'Specialty designs like sclerals, hybrids, and orthokeratology provide options for challenging cases',
              'The interrelationship between design and material must be considered for optimal lens performance'
            ],
            ordered: false
          }
        },
        {
          id: 'clinical-applications',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Clinical Applications',
            text: 'For NCLE certification exams, understand the properties of various contact lens materials, design principles for different lens types, and appropriate applications for specific patient needs. Be prepared to identify suitable material and design choices for case scenarios involving different refractive errors, corneal conditions, and wearing needs.'
          }
        }
      ]
    }
  ],
  summary: 'Contact lens design and materials are critical factors in providing successful contact lens correction. Modern lenses offer a wide range of designs from simple spherical soft lenses to complex specialty options for challenging ocular conditions. Material science has advanced from conventional hydrogels to high-oxygen silicone hydrogels for soft lenses and highly permeable fluorosilicone acrylates for RGPs. The relationship between lens design elements (base curve, diameter, edge profile) and material properties (oxygen permeability, modulus, wettability) determines fit characteristics, comfort, and physiological response. Understanding these principles enables practitioners to select appropriate lenses for various patient needs while optimizing vision, comfort, and ocular health.',
  practiceQuestions: [
    {
      question: 'Which contact lens material typically has the highest oxygen permeability (Dk)?',
      options: [
        'Conventional HEMA hydrogel',
        'High water content ionic hydrogel',
        'First-generation silicone hydrogel',
        'Hyperpermeable fluorosilicone acrylate RGP'
      ],
      correctAnswer: 3,
      explanation: 'Hyperpermeable fluorosilicone acrylate RGP materials can achieve Dk values over 170, significantly higher than even the most oxygen-permeable soft lens materials. The addition of fluorine to silicone acrylate dramatically increases oxygen permeability while maintaining good wettability.'
    },
    {
      question: 'What is the primary purpose of peripheral curves in RGP lens design?',
      options: [
        'To correct astigmatism',
        'To provide multifocal correction',
        'To optimize centration and create proper edge lift',
        'To increase the overall lens diameter'
      ],
      correctAnswer: 2,
      explanation: 'Peripheral curves in RGP lens design create a transition from the optical zone to the lens edge, optimizing lens centration and creating appropriate edge lift. This ensures proper tear exchange, comfortable lens wear, and stable fit without excessive corneal pressure.'
    },
    {
      question: 'Which lens design would be most appropriate for advanced keratoconus with corneal scarring?',
      options: [
        'Daily disposable soft toric lens',
        'Corneal RGP with multicurve design',
        'Scleral lens with high corneal vault',
        'Orthokeratology lens'
      ],
      correctAnswer: 2,
      explanation: 'A scleral lens with high corneal vault would be most appropriate for advanced keratoconus with corneal scarring. Scleral lenses completely vault over the irregular cornea, providing a smooth optical surface while protecting the scarred cornea from mechanical interaction with the lens.'
    },
    {
      question: 'What is the primary advantage of silicone hydrogel materials over conventional hydrogels?',
      options: [
        'Higher water content',
        'Lower cost',
        'Significantly higher oxygen permeability',
        'Reduced lens thickness'
      ],
      correctAnswer: 2,
      explanation: 'The primary advantage of silicone hydrogel materials over conventional hydrogels is their significantly higher oxygen permeability (Dk). Silicone hydrogels can achieve 5-7 times higher oxygen transmission than conventional hydrogels, even with lower water content, due to the oxygen-permeable silicone components.'
    },
    {
      question: 'Which of these parameters is MOST critical when fitting a toric soft contact lens?',
      options: [
        'Base curve',
        'Lens stabilization design',
        'Water content',
        'Center thickness'
      ],
      correctAnswer: 1,
      explanation: 'The lens stabilization design is the most critical parameter when fitting toric soft contact lenses. This design component (prism ballast, thin zones, etc.) ensures proper orientation of the cylindrical correction. Without effective stabilization, the lens will rotate unpredictably, causing fluctuating vision.'
    },
    {
      question: 'What distinguishes hybrid contact lenses from other lens types?',
      options: [
        'They are made from a combination of hydrogel and silicone hydrogel',
        'They have both spherical and cylindrical power',
        'They combine a rigid center with a soft peripheral skirt',
        'They can be worn both day and night'
      ],
      correctAnswer: 2,
      explanation: 'Hybrid contact lenses are distinguished by their combination of a rigid gas permeable center with a soft peripheral skirt. This design aims to provide the optical quality of RGP lenses with the comfort and centration benefits of soft lenses.'
    },
    {
      question: 'Which lens design feature is primarily responsible for creating a multifocal effect in soft contact lenses?',
      options: [
        'Concentric zones of different powers or aspheric power profiles',
        'Prism ballast for stabilization',
        'Front toric surface design',
        'Thin edge profile'
      ],
      correctAnswer: 0,
      explanation: 'Multifocal soft contact lenses create their multifocal effect through concentric zones of different powers (center-distance or center-near) or aspheric power profiles that gradually change power from center to periphery. These design features allow simultaneous vision at multiple distances.'
    },
    {
      question: 'FDA Group IV soft contact lens materials are characterized by:',
      options: [
        'Low water content and non-ionic properties',
        'High water content and non-ionic properties',
        'Low water content and ionic properties',
        'High water content and ionic properties'
      ],
      correctAnswer: 3,
      explanation: 'FDA Group IV soft contact lens materials are characterized by high water content (≥50%) and ionic properties. These materials, such as etafilcon and ocufilcon, tend to attract protein deposits due to their ionic nature but offer good initial comfort due to their high water content.'
    },
    {
      question: 'What is the primary advantage of orthokeratology lens designs?',
      options: [
        'Improved night vision',
        'Correction of high astigmatism',
        'Treatment of keratoconus',
        'Vision correction without daytime lens wear'
      ],
      correctAnswer: 3,
      explanation: 'The primary advantage of orthokeratology lens designs is that they provide vision correction without daytime lens wear. The reverse geometry design temporarily reshapes the cornea during overnight wear, allowing patients to see clearly during the day without any corrective lenses.'
    },
    {
      question: 'Which contact lens parameter most directly influences oxygen transmissibility (Dk/t)?',
      options: [
        'Diameter',
        'Base curve',
        'Center thickness',
        'Edge design'
      ],
      correctAnswer: 2,
      explanation: 'Center thickness most directly influences oxygen transmissibility (Dk/t). Since Dk/t is calculated as the material\'s oxygen permeability (Dk) divided by the lens thickness (t), a change in center thickness has a direct and proportional impact on the oxygen that reaches the cornea.'
    }
  ]
}; 