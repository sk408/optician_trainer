import { TopicStudyContent } from '../../interfaces/StudyContent';

export const contactLensDesignsDetailedContent: TopicStudyContent = {
  topicId: 'cl-designs-detailed',
  title: 'Detailed Contact Lens Designs',
  introduction: 'Contact lens designs have evolved significantly to address various refractive needs, ocular conditions, and wearing preferences. Understanding the design features, fitting characteristics, and applications of different lens types is essential for successful contact lens practice. This module explores the detailed design considerations for soft, rigid gas permeable, specialty, and therapeutic contact lenses.',
  objectives: [
    'Understand the design principles of spherical, toric, and multifocal soft lenses',
    'Learn the fitting characteristics of various rigid gas permeable (RGP) lens designs',
    'Master the principles of specialty contact lenses including scleral, hybrid, and orthokeratology lenses',
    'Understand therapeutic lens designs for ocular disease management',
    'Learn design considerations for extended wear and continuous wear lenses',
    'Compare advantages and limitations of different lens designs for specific patient needs'
  ],
  sections: [
    {
      id: 'soft-lens-designs',
      title: 'Soft Contact Lens Designs',
      type: 'introduction',
      content: [
        {
          id: 'soft-design-intro',
          type: 'paragraph',
          content: {
            text: 'Soft contact lenses are made from hydrogel or silicone hydrogel materials that contain water and conform to the eye\'s shape. Their designs vary based on optical correction needs, lens geometry, and intended wearing schedule.'
          }
        },
        {
          id: 'spherical-design',
          type: 'definition',
          content: {
            term: 'Spherical Soft Lenses',
            definition: 'Lenses designed to correct myopia or hyperopia with a uniform power across the optical zone. The lens front and back surfaces have spherical curvatures.',
            related: ['myopia', 'hyperopia', 'base curve', 'diameter']
          }
        },
        {
          id: 'soft-lens-parameters',
          type: 'table',
          content: {
            headers: ['Parameter', 'Common Range', 'Design Significance'],
            rows: [
              ['Base Curve (BC)', '8.0 to 9.2mm', 'Determines lens-cornea fitting relationship'],
              ['Diameter', '13.8 to 14.5mm', 'Affects coverage, movement, and comfort'],
              ['Center Thickness', '0.07 to 0.15mm', 'Influences oxygen transmission and lens durability'],
              ['Peripheral Curve System', 'Varies by manufacturer', 'Controls edge configuration and lens movement'],
              ['Power Range', '-20.00D to +20.00D', 'Available correction range (varies by design)'],
              ['Water Content', '38% to 78%', 'Affects oxygen transmission and dehydration potential']
            ],
            caption: 'Soft Contact Lens Design Parameters'
          }
        },
        {
          id: 'toric-design',
          type: 'definition',
          content: {
            term: 'Toric Soft Lenses',
            definition: 'Lenses designed to correct astigmatism by incorporating different powers in two principal meridians, usually 90° apart. Require stabilization to maintain correct orientation.',
            related: ['astigmatism', 'cylinder', 'axis', 'stabilization']
          }
        },
        {
          id: 'toric-stabilization',
          type: 'paragraph',
          content: {
            text: 'Toric lenses require stabilization methods to prevent rotation and maintain the cylindrical correction at the appropriate axis. Several stabilization designs have been developed to achieve this goal.'
          }
        },
        {
          id: 'stabilization-table',
          type: 'table',
          content: {
            headers: ['Stabilization Method', 'Design Features', 'Advantages', 'Limitations'],
            rows: [
              ['Prism Ballast', 'Thicker inferior portion', 'Reliable stabilization', 'Reduced oxygen in thicker zones'],
              ['Periballast', 'Thin optical zone with thicker periphery', 'Better optics, comfort', 'Less stable than full prism ballast'],
              ['Double Slab-Off', 'Thin superior and inferior zones', 'Good comfort, less lid interaction', 'May be less stable in some patients'],
              ['Dynamic Stabilization', 'Thin zones at 3 and 9 o\'clock', 'Works with natural lid forces', 'May rotate with certain lid configurations'],
              ['Accelerated Stabilization', 'Four zones of thickness variation', 'Quick settling, stable orientation', 'Complex manufacturing process']
            ],
            caption: 'Toric Lens Stabilization Methods'
          }
        },
        {
          id: 'multifocal-design',
          type: 'definition',
          content: {
            term: 'Multifocal Soft Lenses',
            definition: 'Lenses designed to correct presbyopia by incorporating multiple powers to provide clear vision at different distances (near, intermediate, and distance).',
            related: ['presbyopia', 'progressive', 'bifocal', 'addition power']
          }
        },
        {
          id: 'multifocal-types',
          type: 'table',
          content: {
            headers: ['Design Type', 'Optical Arrangement', 'Advantages', 'Limitations'],
            rows: [
              ['Concentric', 'Circular zones of different powers', 'Less dependent on lens positioning', 'May produce glare/haloes'],
              ['Aspheric', 'Gradual power change from center to periphery', 'Smooth vision transition', 'Pupil size dependent'],
              ['Segmented (Translating)', 'Distinct zones like bifocal glasses', 'Clear separation of powers', 'Dependent on proper positioning'],
              ['Center-Near', 'Reading power in center, distance in periphery', 'Works well in dim light (larger pupils)', 'May affect distance vision clarity'],
              ['Center-Distance', 'Distance power in center, near in periphery', 'Excellent distance vision', 'May compromise near vision in dim light']
            ],
            caption: 'Multifocal Soft Lens Design Types'
          }
        },
        {
          id: 'custom-soft-lenses',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Custom Soft Lenses',
            text: 'Beyond mass-produced disposable lenses, custom soft lenses can be manufactured for unique prescriptions or ocular conditions. These include high toric powers, multifocal torics, irregular cornea designs, and lenses with specific dimensional customizations.'
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
            text: 'Rigid gas permeable (RGP) lenses maintain their shape on the eye while allowing oxygen to pass through the material. Their design parameters can be customized to a greater degree than soft lenses, making them suitable for complex prescriptions and irregular corneas.'
          }
        },
        {
          id: 'rgp-parameters',
          type: 'table',
          content: {
            headers: ['Parameter', 'Common Range', 'Design Significance'],
            rows: [
              ['Base Curve (BC)', '7.0 to 8.2mm', 'Primary determinant of fitting relationship'],
              ['Overall Diameter (OAD)', '9.0 to 10.5mm', 'Influences lens positioning and movement'],
              ['Optical Zone Diameter (OZD)', '7.0 to 8.5mm', 'Affects optical quality and glare'],
              ['Edge Design', 'Varies', 'Critical for comfort and tear exchange'],
              ['Peripheral Curve System', '0.5 to 1.2mm widths', 'Controls edge lift and alignment'],
              ['Center Thickness', '0.12 to 0.20mm', 'Affects oxygen transmission and durability']
            ],
            caption: 'RGP Lens Design Parameters'
          }
        },
        {
          id: 'spherical-rgp',
          type: 'definition',
          content: {
            term: 'Spherical RGP Lenses',
            definition: 'Basic RGP design with spherical base curve that corrects myopia, hyperopia, and regular astigmatism through the tear lens formed between the cornea and lens.',
            related: ['tear lens', 'aspheric', 'base curve radius']
          }
        },
        {
          id: 'fitting-philosophies',
          type: 'paragraph',
          content: {
            text: 'Several fitting philosophies exist for RGP lenses, including alignment fitting (base curve parallels the cornea), apical clearance (flatter than K), and apical bearing (steeper than K). Each approach has specific indications and potential advantages.'
          }
        },
        {
          id: 'toric-rgp',
          type: 'paragraph',
          content: {
            text: 'Toric RGP lenses incorporate toric surfaces on either the front, back, or both surfaces of the lens. These designs address different fitting and optical needs.'
          }
        },
        {
          id: 'toric-rgp-table',
          type: 'table',
          content: {
            headers: ['Toric Design', 'Features', 'Primary Indications'],
            rows: [
              ['Back Toric', 'Toric posterior surface matches corneal toricity', 'Moderate to high corneal astigmatism (>2.50D)'],
              ['Front Toric', 'Toric anterior surface, spherical posterior', 'Residual astigmatism, spherical corneas'],
              ['Bitoric', 'Both surfaces have toric curves', 'High corneal astigmatism with residual cylinder'],
              ['Quadrant-Specific', 'Different curves in each quadrant', 'Irregular corneal toricity, post-surgical cases']
            ],
            caption: 'Toric RGP Lens Designs'
          }
        },
        {
          id: 'multifocal-rgp',
          type: 'paragraph',
          content: {
            text: 'RGP multifocal lenses offer excellent optical quality for presbyopia correction and can be designed as simultaneous vision or translating (alternating) systems.'
          }
        },
        {
          id: 'multifocal-rgp-table',
          type: 'table',
          content: {
            headers: ['Design Type', 'Features', 'Advantages', 'Limitations'],
            rows: [
              ['Aspheric', 'Progressive power change across surface', 'Natural vision progression', 'Pupil size dependent'],
              ['Concentric/Annular', 'Distinct zones of power', 'Less dependent on pupil size', 'May cause glare'],
              ['Translating (Segmented)', 'Distance power above, near below', 'Clear vision at all distances', 'Relies on proper translation'],
              ['Diffractive', 'Microscopic echelettes create power', 'Less pupil dependent', 'Reduced contrast sensitivity']
            ],
            caption: 'Multifocal RGP Lens Design Options'
          }
        },
        {
          id: 'edge-design',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Edge Design',
            text: 'Edge design is critical for RGP lens comfort and performance. A properly designed edge facilitates tear exchange, minimizes lid interaction, and improves overall comfort. Edge profiles may be rounded, squared, or tapered depending on specific fitting needs.'
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
            text: 'Specialty contact lenses are designed for unique visual needs, irregular corneal conditions, or therapeutic purposes that cannot be adequately addressed with conventional soft or RGP lenses.'
          }
        },
        {
          id: 'scleral-lenses',
          type: 'definition',
          content: {
            term: 'Scleral Lenses',
            definition: 'Large-diameter rigid gas permeable lenses that vault over the entire cornea and rest on the sclera. The space between the lens and cornea is filled with fluid, creating a liquid reservoir.',
            related: ['vault', 'corneal clearance', 'landing zone', 'haptic zone']
          }
        },
        {
          id: 'scleral-design',
          type: 'paragraph',
          content: {
            text: 'Scleral lenses are categorized based on their diameter and extent of scleral landing. Their design incorporates multiple zones with specific functions.'
          }
        },
        {
          id: 'scleral-categories',
          type: 'table',
          content: {
            headers: ['Category', 'Diameter Range', 'Design Features'],
            rows: [
              ['Corneo-scleral', '12.9-13.5mm', 'Rests partly on cornea, partly on sclera'],
              ['Semi-scleral', '13.6-14.9mm', 'Minimal corneal contact, primarily scleral support'],
              ['Mini-scleral', '15.0-18.0mm', 'Complete corneal vault, moderate scleral landing'],
              ['Full scleral', '18.1-24.0mm', 'Complete corneal vault, extensive scleral landing']
            ],
            caption: 'Scleral Lens Categories'
          }
        },
        {
          id: 'scleral-zones',
          type: 'list',
          content: {
            title: 'Scleral Lens Design Zones:',
            items: [
              'Optical Zone: Central portion that provides vision correction',
              'Transitional Zone: Connects optical zone to landing zone, controls vault height',
              'Landing Zone: Peripheral portion that aligns with and distributes pressure on the sclera',
              'Edge Design: Optimizes comfort, prevents seal-off, and facilitates tear exchange'
            ]
          }
        },
        {
          id: 'hybrid-lenses',
          type: 'definition',
          content: {
            term: 'Hybrid Lenses',
            definition: 'Contact lenses featuring a rigid gas permeable center surrounded by a soft hydrogel or silicone hydrogel skirt, combining the optical quality of RGPs with the comfort of soft lenses.',
            related: ['SynergEyes', 'rigid-soft junction', 'vault']
          }
        },
        {
          id: 'hybrid-design',
          type: 'paragraph',
          content: {
            text: 'Hybrid lenses are designed with specific parameters for the rigid center and soft skirt, with particular attention to the junction between the two materials. The soft skirt diameter typically ranges from 14.5-15.0mm, while the RGP portion may range from 8.0-8.5mm in diameter.'
          }
        },
        {
          id: 'orthokeratology',
          type: 'definition',
          content: {
            term: 'Orthokeratology Lenses',
            definition: 'Specially designed RGP lenses worn overnight to temporarily reshape the cornea, providing vision correction during the day without lenses. Primarily used for myopia control and refractive error correction.',
            related: ['reverse geometry', 'corneal reshaping', 'myopia control']
          }
        },
        {
          id: 'ortho-k-design',
          type: 'paragraph',
          content: {
            text: 'Orthokeratology lenses typically utilize reverse geometry designs with multiple curves to achieve controlled corneal reshaping. The central treatment zone is flatter than the peripheral curves, creating hydraulic forces that reshape the corneal epithelium.'
          }
        },
        {
          id: 'ortho-k-zones',
          type: 'table',
          content: {
            headers: ['Zone', 'Function', 'Design Characteristics'],
            rows: [
              ['Base Curve Zone', 'Treatment zone that reshapes cornea', 'Flatter than corneal curvature (typically by Rx + 0.75D)'],
              ['Reverse Curve', 'Connects treatment zone to alignment curve', 'Steeper than base curve, controls epithelial redistribution'],
              ['Alignment Curve', 'Centers and stabilizes lens', 'Aligns with peripheral cornea, provides centration'],
              ['Peripheral Curve', 'Enhances tear exchange', 'Flatter than alignment curve, optimizes edge lift']
            ],
            caption: 'Orthokeratology Lens Design Zones'
          }
        },
        {
          id: 'custom-soft-designs',
          type: 'paragraph',
          content: {
            text: 'Custom soft lenses for irregular corneas incorporate design features to accommodate corneal irregularities. These include increased center thickness, aspheric posterior surfaces, and quadrant-specific designs.'
          }
        }
      ]
    },
    {
      id: 'therapeutic-lens-designs',
      title: 'Therapeutic Contact Lens Designs',
      type: 'advanced',
      content: [
        {
          id: 'therapeutic-intro',
          type: 'paragraph',
          content: {
            text: 'Therapeutic contact lenses are specifically designed to manage ocular surface disorders, protect the cornea, facilitate healing, or deliver medications to the eye. Their design priorities differ from standard vision-correcting lenses.'
          }
        },
        {
          id: 'bandage-lenses',
          type: 'definition',
          content: {
            term: 'Bandage Contact Lenses',
            definition: 'Soft lenses used to protect the cornea, promote epithelial healing, and provide pain relief for various corneal conditions. Typically made from high water content silicone hydrogel materials for extended wear.',
            related: ['epithelial defects', 'corneal abrasion', 'bullous keratopathy']
          }
        },
        {
          id: 'bandage-design',
          type: 'paragraph',
          content: {
            text: 'Bandage lenses are designed to prioritize oxygen transmission, retention of a stable tear layer, and minimal mechanical interaction with the compromised cornea. They typically feature thin designs with high Dk/t values and gentle edge profiles.'
          }
        },
        {
          id: 'prosthetic-lenses',
          type: 'definition',
          content: {
            term: 'Prosthetic Contact Lenses',
            definition: 'Specially designed lenses that improve the appearance of damaged or disfigured eyes, mask corneal irregularities, or manage light sensitivity conditions. May incorporate tints, prints, or specialized coatings.',
            related: ['iris print', 'pupil occlusion', 'cosmetic shell']
          }
        },
        {
          id: 'prosthetic-design-features',
          type: 'list',
          content: {
            title: 'Design Features of Prosthetic Lenses:',
            items: [
              'Opaque iris prints to mask corneal or iris irregularities',
              'Pupil occlusion for light sensitivity or aniridia',
              'Black backing for light-blocking in albinism or aniridia',
              'Clear pupil options for vision requirements',
              'Sector iridectomy designs for specific visual field enhancements',
              'Custom hand-painted iris matches for optimal cosmetic results'
            ]
          }
        },
        {
          id: 'drug-delivery',
          type: 'definition',
          content: {
            term: 'Drug-Delivery Contact Lenses',
            definition: 'Specialized lenses designed to release medications gradually to the ocular surface, improving drug bioavailability compared to eye drops. May incorporate drug-impregnated materials or reservoirs.',
            related: ['sustained release', 'drug elution', 'bioavailability']
          }
        },
        {
          id: 'drug-design-approaches',
          type: 'paragraph',
          content: {
            text: 'Several design approaches exist for drug-delivering contact lenses, including molecular imprinting, nanoparticle incorporation, drug-polymer films, and reservoir systems. These designs control release kinetics to maintain therapeutic drug levels over extended periods.'
          }
        },
        {
          id: 'biosensing-lenses',
          type: 'paragraph',
          content: {
            text: 'Emerging contact lens designs incorporate biosensing capabilities to monitor various ocular and systemic conditions. These include intraocular pressure sensors for glaucoma monitoring, glucose sensors for diabetes management, and other biomarkers.'
          }
        }
      ]
    },
    {
      id: 'design-considerations',
      title: 'Design Considerations for Special Applications',
      type: 'clinical',
      content: [
        {
          id: 'extended-wear',
          type: 'paragraph',
          content: {
            text: 'Extended wear and continuous wear lenses require specific design considerations to maintain ocular health during overnight use. These include enhanced oxygen transmission, resistance to deposition, and stability of material properties over extended periods.'
          }
        },
        {
          id: 'extended-wear-features',
          type: 'table',
          content: {
            headers: ['Design Feature', 'Purpose', 'Implementation'],
            rows: [
              ['High Oxygen Transmissibility', 'Prevent hypoxic complications', 'Silicone hydrogel materials with Dk/t >125'],
              ['Low Modulus', 'Enhance comfort, reduce mechanical stress', 'Balanced silicone content with hydrophilic components'],
              ['Surface Treatments', 'Improve wettability, reduce deposits', 'Plasma treatments, hydrophilic coatings'],
              ['Edge Design', 'Optimize tear exchange, reduce irritation', 'Tapered, thin edge profiles'],
              ['Stabilized Water Content', 'Maintain consistent performance', 'Materials resistant to dehydration']
            ],
            caption: 'Design Features for Extended Wear Contact Lenses'
          }
        },
        {
          id: 'pediatric-lenses',
          type: 'paragraph',
          content: {
            text: 'Contact lenses for pediatric patients require design considerations that address smaller ocular dimensions, different tear chemistry, and growth-related changes. Lenses for children may feature smaller diameters, steeper base curves, and more durable materials.'
          }
        },
        {
          id: 'sports-designs',
          type: 'paragraph',
          content: {
            text: 'Contact lenses designed for sports and active lifestyles often incorporate features to enhance stability, prevent dehydration, and optimize visual performance in dynamic conditions. These may include increased diameter, enhanced stabilization, and tints for specific visual environments.'
          }
        },
        {
          id: 'presbyopic-athletes',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Contact Lenses for Presbyopic Athletes',
            text: 'Modified monovision or asymmetric multifocal designs often work better for sports than conventional multifocals. These designs preserve binocular distance vision while providing functional near vision for essential tasks.'
          }
        },
        {
          id: 'high-altitude',
          type: 'paragraph',
          content: {
            text: 'Contact lenses for high-altitude or extreme environments require special design considerations to address low humidity, UV exposure, and atmospheric pressure changes. These may include higher water content materials, UV blockers, and wetting agents.'
          }
        }
      ]
    }
  ],
  summary: 'This module presented detailed information on the design principles of various contact lens types. We explored the specific parameters and features of soft lenses, rigid gas permeable lenses, and specialty designs like scleral and orthokeratology lenses. The module also covered therapeutic lens designs for ocular surface management and emerging technologies like drug-delivering and biosensing lenses. Understanding these design principles is essential for selecting appropriate lenses for different patient needs and optimizing lens performance.',
  references: [
    'Bennett ES, Henry VA. Clinical Manual of Contact Lenses. 4th ed. Lippincott Williams & Wilkins; 2014.',
    'Efron N. Contact Lens Practice. 3rd ed. Elsevier; 2018.',
    'Walker MK, et al. Scleral lens fitting: current theory and practice. Cont Lens Anterior Eye. 2020;43(4):335-350.',
    'Fadel D. Modern scleral lenses: Mini versus large. Cont Lens Anterior Eye. 2017;40(4):200-207.',
    'Van der Worp E, et al. Modern scleral contact lenses: A review. Cont Lens Anterior Eye. 2014;37(4):240-250.',
    'Michaud L, et al. The official CLEAR report by BCLA: Orthokeratology. Cont Lens Anterior Eye. 2021;44(2):240-269.'
  ]
}; 