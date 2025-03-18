import { TopicStudyContent } from '../../interfaces/StudyContent';

export const prescriptionAnalysisContent: TopicStudyContent = {
  topicId: 'prescription-analysis',
  title: 'Analyzing Optical Prescriptions',
  introduction: 'Understanding and correctly interpreting optical prescriptions is one of the most fundamental skills for optical professionals. Prescriptions contain critical information about a patient\'s visual needs encoded in a standardized format. The ability to analyze these prescriptions, recognize potential issues, and translate the technical specifications into appropriate eyewear solutions is essential for delivering optimal patient care. This module covers prescription notation systems, interpreting various components, analyzing complex prescriptions, and troubleshooting common issues that arise when filling prescriptions.',
  objectives: [
    'Interpret standard optical prescription notations and formats',
    'Analyze different components of prescriptions including sphere, cylinder, axis, add power, and prism',
    'Compare and convert between different prescription notation methods',
    'Identify potential errors or incompatibilities in written prescriptions',
    'Recognize when to question or verify prescription parameters',
    'Apply prescription analysis to solve common dispensing challenges'
  ],
  sections: [
    {
      id: 'prescription-basics',
      title: 'Prescription Format and Notation',
      type: 'introduction',
      content: [
        {
          id: 'rx-definition',
          type: 'definition',
          content: {
            term: 'Optical Prescription',
            definition: 'A written directive from an eye care professional that specifies the parameters required to fabricate corrective lenses for a patient\'s visual needs, including refractive power, lens design, and special requirements.',
            related: ['Refraction', 'Lens Power', 'Visual Correction']
          }
        },
        {
          id: 'rx-importance',
          type: 'paragraph',
          content: {
            text: 'The optical prescription represents the bridge between clinical assessment and practical correction of vision problems. It translates the results of the refractive examination into a standardized format that can be used to fabricate appropriate lenses. A thorough understanding of prescription components is essential for recognizing when values may be outside normal ranges or potentially erroneous.'
          }
        },
        {
          id: 'rx-formats',
          type: 'heading',
          content: {
            text: 'Standard Prescription Formats',
            level: 3
          }
        },
        {
          id: 'format-paragraph',
          type: 'paragraph',
          content: {
            text: 'Optical prescriptions may vary in format depending on regional conventions, practice preferences, and electronic health record systems. However, most include the following core elements:'
          }
        },
        {
          id: 'format-list',
          type: 'list',
          content: {
            items: [
              'Patient identifying information and date of examination',
              'Separate specifications for right (OD) and left (OS) eyes, or occasionally both eyes (OU)',
              'Sphere power (SPH) in diopters',
              'Cylinder power (CYL) in diopters (when astigmatism is present)',
              'Axis orientation in degrees (when cylinder is prescribed)',
              'Add power for multifocal prescriptions',
              'Prism amount and direction (when prescribed)',
              'Special instructions (material, design, tints, treatments)',
              'Expiration date and prescriber information'
            ]
          }
        },
        {
          id: 'notation-systems',
          type: 'heading',
          content: {
            text: 'Prescription Notation Systems',
            level: 3
          }
        },
        {
          id: 'plus-minus-def',
          type: 'definition',
          content: {
            term: 'Plus/Minus Notation',
            definition: 'A convention for writing prescriptions where hyperopic corrections are denoted with plus (+) signs and myopic corrections with minus (-) signs. Cylindrical corrections may be written in either plus or minus cylinder form.',
            related: ['Minus Cylinder Form', 'Plus Cylinder Form', 'Transposition']
          }
        },
        {
          id: 'notation-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescriptions can be written in either plus or minus cylinder form. While both forms represent the same optical correction, understanding how to convert between them is essential for interpreting prescriptions correctly:'
          }
        },
        {
          id: 'notation-table',
          type: 'table',
          content: {
            headers: ['Notation System', 'Typically Used By', 'Characteristics', 'Example'],
            rows: [
              ['Minus Cylinder', 'Most optometrists (US) and lens manufacturers', 'Spherical power followed by negative cylinder power', 'OD: +2.00 -1.00 x 180'],
              ['Plus Cylinder', 'Many ophthalmologists and some international practitioners', 'Spherical power followed by positive cylinder power', 'OD: +1.00 +1.00 x 90'],
              ['Spherical Equivalent', 'Sometimes used for quick reference or approximation', 'Single spherical value that averages the overall refractive effect', 'OD: +1.50 DS (for the above examples)']
            ],
            caption: 'Common prescription notation systems and their characteristics'
          }
        },
        {
          id: 'transposition',
          type: 'heading',
          content: {
            text: 'Prescription Transposition',
            level: 3
          }
        },
        {
          id: 'transposition-def',
          type: 'definition',
          content: {
            term: 'Transposition',
            definition: 'The mathematical conversion of a prescription from plus cylinder notation to minus cylinder notation or vice versa, while maintaining the same optical effect.',
            related: ['Algebraic Conversion', 'Spherical Power', 'Cylindrical Power']
          }
        },
        {
          id: 'transposition-paragraph',
          type: 'paragraph',
          content: {
            text: 'Converting between notation systems follows specific rules to ensure the optical effect remains identical. The process involves three key steps:'
          }
        },
        {
          id: 'transposition-steps',
          type: 'list',
          content: {
            items: [
              '1. Add the cylinder power to the spherical power',
              '2. Change the sign of the cylinder power',
              '3. Add 90 degrees to or subtract 90 degrees from the axis (choose whichever results in a value between 1 and 180)'
            ]
          }
        },
        {
          id: 'transposition-example',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Transposition Example',
            text: 'Minus to Plus: "-2.00 -1.50 x 180" → Add cylinder to sphere: -2.00 + (-1.50) = -3.50 → Change cylinder sign: +1.50 → Adjust axis: 180 - 90 = 90 → Result: "-3.50 +1.50 x 90"\n\nPlus to Minus: "+1.25 +0.75 x 45" → Add cylinder to sphere: +1.25 + (+0.75) = +2.00 → Change cylinder sign: -0.75 → Adjust axis: 45 + 90 = 135 → Result: "+2.00 -0.75 x 135"'
          }
        },
        {
          id: 'order-conventions',
          type: 'heading',
          content: {
            text: 'Prescription Order Conventions',
            level: 3
          }
        },
        {
          id: 'order-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescriptions typically follow standardized ordering conventions that help prevent miscommunication. The most common format is:'
          }
        },
        {
          id: 'order-format',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Standard Prescription Format',
            text: 'Sphere Power (SPH), Cylinder Power (CYL) x Axis, Add Power (ADD), Prism Amount and Direction\n\nExample: OD: -3.25 -0.75 x 175, ADD +2.00, 2Δ Base In'
          }
        },
        {
          id: 'abbreviations',
          type: 'heading',
          content: {
            text: 'Common Prescription Abbreviations',
            level: 3
          }
        },
        {
          id: 'abbreviations-table',
          type: 'table',
          content: {
            headers: ['Abbreviation', 'Meaning', 'Usage'],
            rows: [
              ['OD', 'Oculus Dexter', 'Right eye'],
              ['OS', 'Oculus Sinister', 'Left eye'],
              ['OU', 'Oculi Uterque', 'Both eyes'],
              ['SPH', 'Sphere', 'Spherical power component'],
              ['CYL', 'Cylinder', 'Cylindrical power component'],
              ['AXIS', 'Axis', 'Orientation of cylinder in degrees'],
              ['ADD', 'Addition', 'Reading addition power'],
              ['PD', 'Pupillary Distance', 'Distance between pupil centers'],
              ['DV', 'Distance Vision', 'Correction for far viewing'],
              ['NV', 'Near Vision', 'Correction for near viewing'],
              ['BVD', 'Back Vertex Distance', 'Distance from lens to cornea'],
              ['Δ', 'Prism diopter', 'Unit of prismatic power'],
              ['BI/BO', 'Base In/Base Out', 'Direction of prismatic correction'],
              ['BU/BD', 'Base Up/Base Down', 'Direction of prismatic correction'],
              ['DS', 'Diopter Sphere', 'Spherical correction only (no cylinder)']
            ],
            caption: 'Common abbreviations used in optical prescriptions'
          }
        },
        {
          id: 'digital-formats',
          type: 'heading',
          content: {
            text: 'Electronic and Digital Prescription Formats',
            level: 3
          }
        },
        {
          id: 'digital-paragraph',
          type: 'paragraph',
          content: {
            text: 'Modern electronic health record (EHR) systems and digital prescribing platforms have introduced standardized electronic formats for prescriptions. These formats may include additional data fields such as:'
          }
        },
        {
          id: 'digital-list',
          type: 'list',
          content: {
            items: [
              'Billing and insurance codes',
              'Digital prescription verification measures',
              'Prescriber identification numbers',
              'Timestamps and tracking information',
              'Additional measurements (corneal curvature, anterior chamber depth)',
              'Previous prescription data for comparison'
            ]
          }
        },
        {
          id: 'format-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Interpreting Handwritten Prescriptions',
            text: 'When working with handwritten prescriptions, particular attention should be paid to decimal points, signs (+ and -), and axis notations. Common errors include misplaced decimal points, unclear cylinder signs, and transposed digits in axis values. When in doubt, always verify with the prescribing doctor before proceeding with lens fabrication.'
          }
        }
      ]
    },
    {
      id: 'prescription-components',
      title: 'Analyzing Prescription Components',
      type: 'main',
      content: [
        {
          id: 'components-intro',
          type: 'paragraph',
          content: {
            text: 'Each component of an optical prescription serves a specific purpose in correcting the patient\'s vision. Understanding the significance of each value, its normal ranges, and potential implications is crucial for proper analysis and problem-solving when dispensing eyewear.'
          }
        },
        {
          id: 'spherical-power',
          type: 'heading',
          content: {
            text: 'Spherical Power Analysis',
            level: 3
          }
        },
        {
          id: 'sphere-def',
          type: 'definition',
          content: {
            term: 'Spherical Power',
            definition: 'The portion of the prescription that corrects for nearsightedness (myopia) or farsightedness (hyperopia), measured in diopters (D). Positive values indicate hyperopic correction, while negative values indicate myopic correction.',
            related: ['Myopia', 'Hyperopia', 'Diopter']
          }
        },
        {
          id: 'sphere-paragraph',
          type: 'paragraph',
          content: {
            text: 'The spherical component provides equal refractive power in all meridians of the lens. When analyzing spherical power, consider:'
          }
        },
        {
          id: 'sphere-considerations',
          type: 'list',
          content: {
            items: [
              'Magnitude: Higher powers (above ±4.00D) require special attention to lens thickness, material selection, and frame fitting',
              'Sign: Positive values correct hyperopia, negative values correct myopia',
              'Increment pattern: Standard prescribing typically follows 0.25D steps; unusual increments may indicate transcription errors',
              'Vertex distance: High sphere values (above ±4.00D) require vertex compensation when changing frame styles',
              'Age appropriateness: Unusual spherical prescriptions for age groups (e.g., high minus in young children) may warrant verification'
            ]
          }
        },
        {
          id: 'sphere-ranges',
          type: 'table',
          content: {
            headers: ['Power Range', 'Classification', 'Lens Considerations'],
            rows: [
              ['±0.25D to ±3.00D', 'Mild correction', 'Standard materials, minimal thickness concerns'],
              ['±3.25D to ±6.00D', 'Moderate correction', 'Higher-index materials recommended, thickness becomes a factor'],
              ['±6.25D to ±10.00D', 'High correction', 'High-index materials necessary, frame selection critical, edge/center thickness concerns'],
              ['Above ±10.00D', 'Very high correction', 'Highest-index materials, specialized frame fitting, asphericity, vertex calculations essential']
            ],
            caption: 'Spherical power ranges and their practical implications'
          }
        },
        {
          id: 'cylinder-power',
          type: 'heading',
          content: {
            text: 'Cylindrical Power Analysis',
            level: 3
          }
        },
        {
          id: 'cylinder-def',
          type: 'definition',
          content: {
            term: 'Cylindrical Power',
            definition: 'The portion of the prescription that corrects for astigmatism, providing additional refractive power in a specific meridian of the lens, measured in diopters (D).',
            related: ['Astigmatism', 'Axis', 'Toric Lens']
          }
        },
        {
          id: 'cylinder-paragraph',
          type: 'paragraph',
          content: {
            text: 'Cylindrical power corrects for astigmatism by adding power along a specific meridian. When analyzing cylinder power, consider:'
          }
        },
        {
          id: 'cylinder-considerations',
          type: 'list',
          content: {
            items: [
              'Magnitude: Higher cylinders (above 2.00D) may cause image distortion and adaptation challenges',
              'Notation: Confirm whether it\'s written in plus or minus cylinder form',
              'Relationship to sphere: Very high cylinder relative to sphere power may indicate unusual corneal topography',
              'Axis orientation: Requires precise fabrication and alignment during dispensing',
              'Symmetry between eyes: Significant differences between eyes may cause adaptation issues'
            ]
          }
        },
        {
          id: 'axis-analysis',
          type: 'heading',
          content: {
            text: 'Axis Analysis and Interpretation',
            level: 3
          }
        },
        {
          id: 'axis-def',
          type: 'definition',
          content: {
            term: 'Cylinder Axis',
            definition: 'The orientation of the cylindrical correction, measured in degrees from 1 to 180, where the meridian of no cylinder power is located.',
            related: ['Astigmatism', 'Meridian', 'Oblique Axis']
          }
        },
        {
          id: 'axis-paragraph',
          type: 'paragraph',
          content: {
            text: 'The axis determines the orientation of the cylindrical correction. The axis value ranges from 1 to 180 degrees and represents the direction of the meridian with no cylindrical power. When analyzing axis values, consider:'
          }
        },
        {
          id: 'axis-list',
          type: 'list',
          content: {
            items: [
              'Classification: Axes at or near 90° (vertical) indicate with-the-rule astigmatism; axes at or near 180° (horizontal) indicate against-the-rule astigmatism; axes between 30-60° or 120-150° indicate oblique astigmatism',
              'Symmetry: Eyes often have approximately mirror-image axes (e.g., OD: 175, OS: 5) or symmetrical axes (e.g., OD: 45, OS: 135)',
              'Precision: Higher cylinder powers require more precise axis alignment during fabrication and dispensing',
              'Unusual values: Single-digit or very specific axis values (e.g., 37°) may require verification',
              'Frame selection: High cylinders with oblique axes may cause more noticeable visual distortions with frame tilt'
            ]
          }
        },
        {
          id: 'axis-table',
          type: 'table',
          content: {
            headers: ['Axis Pattern', 'Description', 'Clinical Significance'],
            rows: [
              ['With-the-rule', 'Axis near 180° (±20°)', 'Most common in younger patients; power meridian is vertical'],
              ['Against-the-rule', 'Axis near 90° (±20°)', 'More common in older patients; power meridian is horizontal'],
              ['Oblique', 'Axis between 30-60° or 120-150°', 'Less common; may cause more adaptation issues'],
              ['Mirror symmetric', 'OD: x°, OS: (180-x)°', 'Normal physiological pattern suggesting regular astigmatism'],
              ['Asymmetric', 'Significantly different axes between eyes', 'May indicate corneal abnormalities or prior trauma/surgery']
            ],
            caption: 'Common axis patterns and their clinical significance'
          }
        },
        {
          id: 'add-power',
          type: 'heading',
          content: {
            text: 'Add Power Analysis',
            level: 3
          }
        },
        {
          id: 'add-def',
          type: 'definition',
          content: {
            term: 'Add Power',
            definition: 'The additional plus power prescribed for near vision in multifocal lenses, measured in diopters (D). It represents the difference between the distance and near prescription.',
            related: ['Presbyopia', 'Multifocal Lenses', 'Accommodation']
          }
        },
        {
          id: 'add-paragraph',
          type: 'paragraph',
          content: {
            text: 'Add power compensates for decreased accommodation associated with presbyopia. When analyzing add power, consider:'
          }
        },
        {
          id: 'add-table',
          type: 'table',
          content: {
            headers: ['Add Power Range', 'Typical Age Group', 'Design Considerations'],
            rows: [
              ['+0.75D to +1.00D', 'Early presbyopia (40-45 years)', 'Entry-level progressives or low-power readers; wider intermediate zones beneficial'],
              ['+1.25D to +1.75D', 'Developing presbyopia (45-52 years)', 'Standard progressive designs; balance of distance, intermediate, and near'],
              ['+2.00D to +2.50D', 'Advanced presbyopia (53-65 years)', 'Short corridor progressives may be appropriate; reading area more critical'],
              ['+2.75D and higher', 'Severe presbyopia (65+ years)', 'Specialized high-add designs; consider larger reading segments or specialized near-task lenses']
            ],
            caption: 'Add power ranges, typical age associations, and design considerations'
          }
        },
        {
          id: 'add-considerations',
          type: 'list',
          content: {
            items: [
              'Age appropriateness: Add powers should typically match age-related accommodation loss',
              'Increment pattern: Standard progression typically follows 0.25D or 0.50D steps',
              'Working distance: Higher adds reduce working distance; consider occupational needs',
              'Convergence demands: Higher adds require more convergence at near, potentially causing issues for patients with binocular vision challenges',
              'Previous adaptation: Compare with previous add power; large jumps may cause adaptation issues'
            ]
          }
        },
        {
          id: 'add-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Verifying Appropriate Add Power',
            text: 'When an add power seems unusual for a patient\'s age (e.g., +2.50D for a 42-year-old), consider special circumstances such as accommodative insufficiency, medication effects, neurological conditions, or specialized occupational needs. These situations may warrant discussion with the prescribing doctor.'
          }
        },
        {
          id: 'prism',
          type: 'heading',
          content: {
            text: 'Prismatic Correction Analysis',
            level: 3
          }
        },
        {
          id: 'prism-def',
          type: 'definition',
          content: {
            term: 'Prismatic Correction',
            definition: 'A prescription element that displaces light to compensate for binocular vision disorders or muscle imbalances. Measured in prism diopters (Δ) with a specified base direction.',
            related: ['Binocular Vision', 'Diplopia', 'Vertical Imbalance']
          }
        },
        {
          id: 'prism-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prismatic corrections address muscle imbalances and binocular vision issues by redirecting light to alleviate eyestrain or double vision. When analyzing prismatic corrections, consider:'
          }
        },
        {
          id: 'prism-considerations',
          type: 'list',
          content: {
            items: [
              'Magnitude: Higher prism powers (above 4Δ) may cause noticeable optical aberrations and thickness issues',
              'Direction: Base direction indicates the thick edge of the prism (Base In/Out for horizontal prism; Base Up/Down for vertical prism)',
              'Distribution: Prism may be split between eyes or prescribed for one eye only',
              'Yoked prism: Same base direction in both eyes, typically for visual field displacement',
              'Vertical vs. horizontal: Vertical prism tends to be more critical for patient comfort than horizontal prism'
            ]
          }
        },
        {
          id: 'prism-notation',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Prism Notation Methods',
            text: 'Prism may be notated in several ways:\n1. Full notation: "2Δ Base In OD, 1Δ Base Down OS"\n2. Abbreviated: "2Δ BI OD, 1Δ BD OS"\n3. X and Y components: "OD: 2Δ 180°, OS: 1Δ 270°"\n4. With prescription: "+2.00 -1.00 x 180 2Δ BI"'
          }
        },
        {
          id: 'prism-table',
          type: 'table',
          content: {
            headers: ['Direction', 'Common Uses', 'Visual Effect'],
            rows: [
              ['Base In (BI)', 'Exophoria, divergence excess', 'Reduces outward eye deviation; increases convergence demand'],
              ['Base Out (BO)', 'Esophoria, convergence insufficiency', 'Reduces inward eye deviation; decreases convergence demand'],
              ['Base Up (BU)', 'Hypophoria (eye turns down)', 'Elevates image; compensates for downward deviation'],
              ['Base Down (BD)', 'Hyperphoria (eye turns up)', 'Lowers image; compensates for upward deviation'],
              ['Yoked prism (same direction both eyes)', 'Visual field defects, spatial inattention', 'Shifts entire visual field in the direction opposite the base']
            ],
            caption: 'Prismatic directions, common clinical applications, and visual effects'
          }
        },
        {
          id: 'induced-prism',
          type: 'paragraph',
          content: {
            text: 'Be aware that prismatic effects can be induced unintentionally through decentration of lenses or inappropriate fitting. For every 1mm of decentration, approximately 0.1Δ of prism is induced per diopter of power. This becomes especially significant with higher prescriptions.'
          }
        },
        {
          id: 'special-notations',
          type: 'heading',
          content: {
            text: 'Special Notations and Instructions',
            level: 3
          }
        },
        {
          id: 'special-paragraph',
          type: 'paragraph',
          content: {
            text: 'Beyond the standard prescription components, prescriptions may include special notations and instructions that require careful interpretation:'
          }
        },
        {
          id: 'special-table',
          type: 'table',
          content: {
            headers: ['Notation', 'Meaning', 'Considerations'],
            rows: [
              ['Slab-off/Reverse slab-off', 'Technique to address vertical imbalance in different prescription powers', 'Requires specialized lens processing; typically indicated for anisometropic prescriptions'],
              ['Monocular PD values', 'Separate PD measurements for each eye', 'Critical for high prescriptions; indicates asymmetrical facial features'],
              ['Occupational Rx', 'Prescription designed for specific work environments', 'May have limited use outside the intended environment; special lens designs often indicated'],
              ['Temporary Rx', 'Interim prescription during visual/medical treatment', 'Consider cost-effective solutions; expect changes in near future'],
              ['SEG height', 'Specified segment height for bifocals/progressives', 'Takes precedence over standard fitting conventions'],
              ['Pantoscopic tilt specification', 'Required frame tilt for optimal performance', 'Critical for certain progressive designs; affects effective cylinder power'],
              ['Roll & Polish', 'Edge treatment instruction', 'Aesthetics and comfort consideration for high prescriptions']
            ],
            caption: 'Special prescription notations and their implications'
          }
        }
      ]
    },
    {
      id: 'complex-prescriptions',
      title: 'Analyzing Complex Prescriptions',
      type: 'main',
      content: [
        {
          id: 'complex-intro',
          type: 'paragraph',
          content: {
            text: 'Some prescriptions present unique challenges due to their complexity, magnitude, or unusual combinations of components. These complex prescriptions require special analysis techniques to ensure appropriate eyewear solutions and successful patient outcomes.'
          }
        },
        {
          id: 'anisometropia',
          type: 'heading',
          content: {
            text: 'Anisometropic Prescriptions',
            level: 3
          }
        },
        {
          id: 'anisometropia-def',
          type: 'definition',
          content: {
            term: 'Anisometropia',
            definition: 'A condition where the refractive errors differ significantly between the two eyes, typically by 2.00D or more. This difference can create challenges with image size disparity, fusion, and adaptation.',
            related: ['Aniseikonia', 'Image Jump', 'Differential Magnification']
          }
        },
        {
          id: 'anisometropia-paragraph',
          type: 'paragraph',
          content: {
            text: 'Anisometropic prescriptions require careful analysis of potential visual and adaptation issues. Primary concerns include:'
          }
        },
        {
          id: 'anisometropia-list',
          type: 'list',
          content: {
            items: [
              'Image size differences (aniseikonia): Each diopter of difference creates approximately 2% image size disparity',
              'Vertical prismatic effect: Different lens powers create vertical imbalance in downgaze',
              'Peripheral distortion: More pronounced in the higher-powered lens',
              'Cosmetic appearance: Noticeable thickness differences between lenses',
              'Adaptation challenges: Including possible suppression or asthenopia'
            ]
          }
        },
        {
          id: 'anisometropia-table',
          type: 'table',
          content: {
            headers: ['Degree of Anisometropia', 'Potential Issues', 'Recommended Solutions'],
            rows: [
              ['2.00-3.00D', 'Mild image size difference; adaptation usually possible', 'Aspheric lenses; careful center of rotation matching; frame selection to minimize vertex distance'],
              ['3.25-5.00D', 'Moderate aniseikonia; potential for adaptation issues', 'High-index materials; consideration of contact lenses; possible use of slab-off technique'],
              ['Above 5.00D', 'Significant aniseikonia; may cause binocular vision problems', 'Contact lenses strongly recommended; monocular fitting approaches; specialized aniseikonic lenses; possible refractive surgery discussion']
            ],
            caption: 'Anisometropia classifications and management approaches'
          }
        },
        {
          id: 'anisometropia-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Slab-Off Technique for Anisometropia',
            text: 'For significant anisometropia with 2.00D or more difference, vertical imbalance in downgaze can be addressed using slab-off (or reverse slab-off) techniques. This manufacturing process incorporates prismatic correction in the lower portion of the more plus/less minus lens to equalize the vertical prismatic effect in reading position.'
          }
        },
        {
          id: 'high-powered',
          type: 'heading',
          content: {
            text: 'High-Powered Prescriptions',
            level: 3
          }
        },
        {
          id: 'high-power-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescriptions with substantial corrective power (generally above ±6.00D) present unique challenges related to thickness, weight, optical performance, and cosmetics. Analysis should consider:'
          }
        },
        {
          id: 'high-power-list',
          type: 'list',
          content: {
            items: [
              'Lens thickness: Central thickness for high plus, edge thickness for high minus',
              'Material selection: Higher index materials reduce thickness but may introduce other optical compromises',
              'Vertex distance effects: Changes in vertex distance significantly impact effective power',
              'Frame selection: Smaller eye sizes reduce thickness and weight; full frames provide better support',
              'Lens design: Aspheric designs reduce thickness and peripheral distortion',
              'Magnification effects: High plus lenses magnify eyes; high minus lenses minify eyes',
              'Weight considerations: Especially important for long-term comfort'
            ]
          }
        },
        {
          id: 'vertex-compensation',
          type: 'callout',
          content: {
            type: 'formula',
            title: 'Vertex Compensation Calculation',
            text: 'When a prescription exceeds ±4.00D and vertex distance changes, power adjustments may be necessary. The formula is:\n\nF₂ = F₁ / (1 - d × F₁)\n\nWhere F₁ is the original power, F₂ is the new power, and d is the change in vertex distance in meters.\n\nExample: A -8.00D lens worn at 12mm (0.012m) that needs to be worn at 15mm (0.015m) would be calculated as:\nF₂ = -8.00 / (1 - 0.003 × -8.00) = -8.00 / 1.024 = -7.81D'
          }
        },
        {
          id: 'high-power-table',
          type: 'table',
          content: {
            headers: ['Prescription Range', 'Critical Concerns', 'Recommended Approaches'],
            rows: [
              ['High plus (+6.00D to +10.00D)', 'Center thickness; weight; magnification; peripheral distortion', 'High-index materials; aspheric designs; smaller lens sizes; proper pantoscopic tilt'],
              ['Very high plus (above +10.00D)', 'Significant thickness; weight; reduced field of view; magnification', 'Highest-index materials; lenticular designs; careful frame selection; possible contacts consideration'],
              ['High minus (-6.00D to -10.00D)', 'Edge thickness; minification; weight; negative facial impact', 'High-index aspheric designs; edge polish; careful frame selection; anti-reflective treatment'],
              ['Very high minus (above -10.00D)', 'Extreme edge thickness; significant minification; limited field', 'Highest-index materials; specialty lab processing; smaller frames; aspherics; possible contacts']
            ],
            caption: 'High-powered prescription considerations and management strategies'
          }
        },
        {
          id: 'multiple-rx',
          type: 'heading',
          content: {
            text: 'Multiple Prescription Analysis',
            level: 3
          }
        },
        {
          id: 'multiple-rx-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some patients may have multiple prescriptions for different purposes. Comparing these prescriptions can provide valuable insights:'
          }
        },
        {
          id: 'multiple-rx-list',
          type: 'list',
          content: {
            items: [
              'Distance vs. near-only prescriptions: Understanding the relationship between them',
              'Progressive vs. single vision options: When multiple pairs might be beneficial',
              'Occupational prescriptions: Tailored for specific working environments',
              'Previous vs. current prescriptions: Analyzing adaptation issues during prescription changes',
              'Alternating prescriptions: For specific conditions like accommodative spasm'
            ]
          }
        },
        {
          id: 'multiple-rx-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Comparing Sequential Prescriptions',
            text: 'When comparing a patient\'s current prescription with their previous prescription, note the magnitude and direction of changes. Substantial changes (more than 0.75D in sphere or 0.50D in cylinder) may require patient education about adaptation expectations. Changes in axis beyond 15° may cause particular adaptation challenges.'
          }
        },
        {
          id: 'special-purpose',
          type: 'heading',
          content: {
            text: 'Special-Purpose Prescriptions',
            level: 3
          }
        },
        {
          id: 'special-purpose-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some prescriptions are designed for specific activities or conditions. Identifying and analyzing these special-purpose prescriptions requires understanding their intended use:'
          }
        },
        {
          id: 'special-purpose-table',
          type: 'table',
          content: {
            headers: ['Type', 'Characteristics', 'Considerations'],
            rows: [
              ['Computer/Occupational', 'Enhanced intermediate vision; limited distance range', 'Working distance requirements; screen positioning; limited outdoor use'],
              ['Reading/Near-Only', 'Optimized for near vision only; often higher plus power', 'Not for distance use; working distance limitations; possible induced prism'],
              ['Sports/Safety', 'Modified for specific activities; often includes safety requirements', 'Impact resistance; wrap requirements; specialized tints'],
              ['Driving', 'Optimized for distance with dashboard consideration', 'Contrast enhancement; anti-reflective treatment; photochromic considerations'],
              ['Low Vision', 'High-powered; specialized design; may include prism', 'Magnification effects; field of view limitations; specialty fitting'],
              ['Post-Surgical', 'Often temporary; may have unusual parameters', 'Expected changes; material considerations for healing period; UV protection']
            ],
            caption: 'Special-purpose prescription types and their analysis considerations'
          }
        },
        {
          id: 'binocular-balance',
          type: 'heading',
          content: {
            text: 'Binocular Balance Analysis',
            level: 3
          }
        },
        {
          id: 'binocular-balance-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescriptions must be analyzed not just for each eye individually, but also for how the eyes will work together. Binocular balance considerations include:'
          }
        },
        {
          id: 'binocular-list',
          type: 'list',
          content: {
            items: [
              'Relative prescription magnification between eyes',
              'Prismatic effects, both intended and as a result of decentration',
              'Prescription symmetry and its effect on fusion',
              'Different accommodative demands between eyes',
              'Effect of prism and cylinder on spatial perception'
            ]
          }
        },
        {
          id: 'adaptation-factors',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Prescription Adaptation Factors',
            text: 'When analyzing how easily a patient will adapt to a prescription, consider these factors in order of potential difficulty:\n1. Changes in cylinder axis (especially for higher cylinder powers)\n2. Changes in add power (especially increases above 0.75D)\n3. Introduction or significant change in prism\n4. Large changes in sphere power\n5. Changes in cylinder power\n\nPatients with prior adaptation issues may need more gradual prescription changes.'
          }
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Prescription Troubleshooting and Problem Solving',
      type: 'main',
      content: [
        {
          id: 'troubleshooting-intro',
          type: 'paragraph',
          content: {
            text: 'Even with careful prescription analysis, patients may experience visual discomfort or difficulties with their eyewear. Systematic troubleshooting approaches can identify and resolve these issues effectively.'
          }
        },
        {
          id: 'prescription-errors',
          type: 'heading',
          content: {
            text: 'Identifying Potential Prescription Errors',
            level: 3
          }
        },
        {
          id: 'errors-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescription errors can occur during examination, transcription, or fabrication. Analyzing potential errors involves:'
          }
        },
        {
          id: 'errors-table',
          type: 'table',
          content: {
            headers: ['Error Type', 'Signs and Symptoms', 'Verification Approach'],
            rows: [
              ['Transposed numbers', 'Significant blur; patient insistence that prescription is incorrect', 'Compare to previous Rx; check for unusual values; verify with prescriber'],
              ['Incorrect cylinder notation', 'Significant visual discomfort; cylindrical correction issues', 'Transpose prescription and compare to intended values; neutralize lenses'],
              ['Decimal point errors', 'Extreme vision changes; major adaptation problems', 'Look for unusually large or small values; compare to previous prescriptions'],
              ['Switched OD/OS values', 'Vision comfortable with glasses held upside-down', 'Neutralize each lens and compare to written prescription'],
              ['Omitted components', 'Specific visual complaints related to missing correction', 'Review full examination records; check for missing add or prism values'],
              ['Inverted signs', 'Significant blur and eyestrain; possibly worse vision than without correction', 'Neutralize lenses to confirm power sign; verify with prescriber']
            ],
            caption: 'Common prescription errors, their symptoms, and verification approaches'
          }
        },
        {
          id: 'verification-techniques',
          type: 'heading',
          content: {
            text: 'Clinical Verification Techniques',
            level: 3
          }
        },
        {
          id: 'verification-paragraph',
          type: 'paragraph',
          content: {
            text: 'When troubleshooting prescription issues, several verification techniques can help identify the source of the problem:'
          }
        },
        {
          id: 'verification-list',
          type: 'list',
          content: {
            items: [
              'Lensometry: Compare actual lens powers with prescribed values',
              'Visual acuity check: Verify expected vision improvement with correction',
              'Over-refraction: Determine if additional correction improves vision',
              'Subjective comparison: Have patient compare new glasses with previous pair',
              'Monocular testing: Isolate visual issues to a specific eye',
              'Frame adjustment: Eliminate fitting issues as a source of visual problems',
              'Progressive lens verification: Confirm proper layout and fitting height'
            ]
          }
        },
        {
          id: 'fabrication-vs-rx',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Distinguishing Prescription vs. Fabrication Issues',
            text: 'When troubleshooting vision complaints, determining whether the issue stems from the prescription itself or from fabrication errors is critical. Fabrication issues typically affect one or both eyes equally and can be identified through lensometry. Prescription issues often relate to the way the eyes work together and may be identified through binocular testing.'
          }
        },
        {
          id: 'adaptation-issues',
          type: 'heading',
          content: {
            text: 'Addressing Adaptation Issues',
            level: 3
          }
        },
        {
          id: 'adaptation-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some prescription problems are related to adaptation rather than errors. Recognizing and managing adaptation challenges requires:'
          }
        },
        {
          id: 'adaptation-table',
          type: 'table',
          content: {
            headers: ['Adaptation Challenge', 'Common Causes', 'Management Approach'],
            rows: [
              ['Progressive lens discomfort', 'First-time wearers; significant design changes; improper fitting', 'Verify fitting parameters; consider adaptation period; possible corridor length adjustment'],
              ['Magnification issues', 'Material changes; significant power changes; anisometropia', 'Explain adaptation timeframe; consider more gradual changes; possible return to previous lenses'],
              ['Cylinder axis adaptation', 'Axis changes beyond 15°; oblique axis introduction', 'Possible intermediate prescription; explain visual adaptation; ensure proper frame adjustment'],
              ['Prism adaptation', 'Introduction of new prism; significant prism changes', 'Verify prescribed vs. actual prism; consider graduated introduction; check vertical alignment'],
              ['Add power discomfort', 'Significant increases in add power; first-time multifocals', 'Verify appropriate add for age; consider reducing add temporarily; check working distance']
            ],
            caption: 'Common adaptation challenges and management approaches'
          }
        },
        {
          id: 'systematic-troubleshooting',
          type: 'heading',
          content: {
            text: 'Systematic Troubleshooting Approach',
            level: 3
          }
        },
        {
          id: 'troubleshooting-steps',
          type: 'list',
          content: {
            items: [
              '1. Listen carefully to the patient\'s specific complaints and when they occur',
              '2. Examine the glasses for proper fit, alignment, and positioning',
              '3. Verify the prescription through lensometry and compare to the written order',
              '4. Check optical center placement and compare to pupillary measurements',
              '5. Assess visual acuity and perform overrefraction if needed',
              '6. Evaluate binocular vision and accommodative function',
              '7. Compare current eyewear with previous eyewear if available',
              '8. Consider potential adaptation issues based on prescription changes',
              '9. Develop a specific action plan based on findings'
            ]
          }
        },
        {
          id: 'troubleshooting-table',
          type: 'table',
          content: {
            headers: ['Visual Complaint', 'Potential Causes', 'Investigation Methods'],
            rows: [
              ['Blurred distance vision', 'Incorrect sphere; PD errors; frame misalignment; adaptation', 'Lensometry; monocular acuity; overrefraction; PD verification'],
              ['Blurred near vision', 'Incorrect add power; improper segment height; incorrect working distance', 'Verify add power; check segment positioning; assess working habits'],
              ['Double vision', 'Optical center misalignment; prescribed prism errors; binocular issues', 'Cover testing; prism verification; binocular assessment'],
              ['Distortion/swimming effects', 'Cylinder errors; high prescriptions with improper frame fit; progressive adaption', 'Frame adjustment; cylinder verification; progressive fit verification'],
              ['Headaches/eyestrain', 'Binocular vision issues; incorrect prescription; adaptation challenges', 'Extended binocular testing; muscle balance assessment; comparison to previous Rx'],
              ['Limited field of view', 'Frame selection; progressive lens design; high prescription effects', 'Frame adjustments; lens design consideration; material evaluation']
            ],
            caption: 'Common visual complaints, potential causes, and investigation methods'
          }
        },
        {
          id: 'when-to-remake',
          type: 'heading',
          content: {
            text: 'Determining When to Remake Eyewear',
            level: 3
          }
        },
        {
          id: 'remake-paragraph',
          type: 'paragraph',
          content: {
            text: 'After analyzing prescription issues, determining whether to remake eyewear requires careful consideration of:'
          }
        },
        {
          id: 'remake-list',
          type: 'list',
          content: {
            items: [
              'Nature and severity of the visual problem',
              'Whether the issue is due to prescription error or fabrication error',
              'Potential for adaptation with time or minor adjustments',
              'Patient\'s visual needs and priorities',
              'Options for modification of existing eyewear',
              'Whether a full remake or a change to one component would resolve the issue'
            ]
          }
        },
        {
          id: 'remake-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Professional Communication During Troubleshooting',
            text: 'When discussing prescription problems with patients, maintain professional communication by:\n1. Avoiding blame and focusing on solutions\n2. Explaining technical issues in accessible language\n3. Providing a clear timeline for resolution\n4. Documenting all findings and actions taken\n5. Communicating with the prescribing doctor when necessary'
          }
        }
      ]
    }
  ],
  summary: 'Prescription analysis is a fundamental skill for optical professionals that requires both technical knowledge and clinical insight. By understanding prescription formats, notation systems, and component values, opticians can interpret prescriptions accurately and identify potential issues before fabrication. Complex prescriptions, such as those with high powers, significant anisometropia, or special-purpose designs, require additional analysis and specialized approaches. When visual problems arise, systematic troubleshooting techniques help determine whether the issue stems from the prescription itself, fabrication errors, or adaptation challenges. Through comprehensive prescription analysis and problem-solving skills, optical professionals can ensure optimal visual outcomes and patient satisfaction.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2020). Ophthalmic Lenses and Dispensing (4th ed.). Butterworth-Heinemann.',
    'Benjamin, W. J. (2006). Borish\'s Clinical Refraction (2nd ed.). Butterworth-Heinemann.',
    'American National Standards Institute. (2020). ANSI Z80.1-2020: Prescription Ophthalmic Lenses—Recommendations.',
    'Fannin, T. E., & Grosvenor, T. (2013). Clinical Optics (3rd ed.). Butterworth-Heinemann.',
    'Elliott, D. B. (2013). Clinical Procedures in Primary Eye Care (4th ed.). Elsevier Health Sciences.',
    'International Organization for Standardization. (2017). ISO 13666:2019: Ophthalmic optics — Spectacle lenses — Vocabulary.',
    'Newman, A. (2008). The Art of Troubleshooting Spectacle Lens Problems. Review of Optometry, 145(3), 73-80.',
    'Meister, D. J., & Fisher, S. W. (2018). Progress in the spectacle correction of presbyopia. Part 1: Design and development of progressive lenses. Clinical and Experimental Optometry, 91(3), 240-250.',
    'Walsh, G. (2009). The practical optical dispensing course: Notes for students and practitioners. Butterworth-Heinemann.'
  ]
}; 