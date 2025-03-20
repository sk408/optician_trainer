import { TopicStudyContent } from '../../interfaces/StudyContent';
import { advancedFrameFittingImages } from '../mediaAssets';

export const advancedFrameFittingContent: TopicStudyContent = {
  topicId: 'advanced-frame-fitting',
  title: 'Advanced Frame Fitting Techniques',
  introduction: 'Advanced frame fitting techniques help ensure optimal comfort, functionality, and aesthetics for eyewear. Understanding how to match frames to face shapes, take precise measurements, make professional adjustments, and handle special frame types is essential for providing patients with the best possible eyewear experience. This module explores beyond-the-basics approaches to frame fitting that will enhance your professional skills.',
  objectives: [
    'Match frame styles to different face shapes and patient features',
    'Take precise facial and frame measurements for optimal fitting',
    'Apply professional techniques for frame adjustments and modifications',
    'Fit special frame types including rimless, semi-rimless, and sports frames',
    'Identify and resolve common fitting issues',
    'Enhance frame aesthetics while maintaining functionality'
  ],
  sections: [
    {
      id: 'face-shapes-frame-selection',
      title: 'Understanding Face Shapes and Frame Selection',
      type: 'main',
      content: [
        {
          id: 'face-shapes-intro',
          type: 'paragraph',
          content: {
            text: 'Advanced frame fitting begins with understanding how different frame styles complement various face shapes. This knowledge allows you to quickly narrow down suitable options and provide personalized recommendations to your patients.'
          }
        },
        {
          id: 'face-shapes-image',
          type: 'image',
          content: {
            src: advancedFrameFittingImages.faceShapes.path,
            alt: 'Different face shapes with recommended frame styles',
            caption: 'Common face shapes and their complementary frame styles',
            width: '80%'
          }
        },
        {
          id: 'round-face',
          type: 'heading',
          content: {
            text: 'Round Face',
            level: 3
          }
        },
        {
          id: 'round-face-characteristics',
          type: 'paragraph',
          content: {
            text: 'Characteristics: Equal width and length with soft curves and fuller cheeks. Round faces typically have softer features with few angles.'
          }
        },
        {
          id: 'round-face-recommendations',
          type: 'list',
          content: {
            items: [
              'Angular or rectangular shapes to add definition and structure',
              'Frames wider than they are tall to enhance facial length',
              'Clear bridge to create the illusion of space',
              'Strong horizontal lines to create contrast with facial curves'
            ],
            ordered: false
          }
        },
        {
          id: 'round-face-avoid',
          type: 'paragraph',
          content: {
            text: 'Avoid: Round frames that echo face shape, small frames that emphasize roundness, and frames with curved lines that reinforce the circular appearance.'
          }
        },
        {
          id: 'square-face',
          type: 'heading',
          content: {
            text: 'Square Face',
            level: 3
          }
        },
        {
          id: 'square-face-characteristics',
          type: 'paragraph',
          content: {
            text: 'Characteristics: Strong jaw, equal width and length with angular features and a prominent forehead.'
          }
        },
        {
          id: 'square-face-recommendations',
          type: 'list',
          content: {
            items: [
              'Oval or round shapes to soften angular features',
              'Frames with soft curves to contrast with facial angles',
              'Styles wider than they are tall to maintain proportion',
              'Lightweight materials to avoid adding heaviness to strong features'
            ],
            ordered: false
          }
        },
        {
          id: 'square-face-avoid',
          type: 'paragraph',
          content: {
            text: 'Avoid: Square frames that emphasize angularity, heavy frames that add bulk, and styles with sharp angles that mirror facial structure.'
          }
        },
        {
          id: 'heart-face',
          type: 'heading',
          content: {
            text: 'Heart Face',
            level: 3
          }
        },
        {
          id: 'heart-face-characteristics',
          type: 'paragraph',
          content: {
            text: 'Characteristics: Wide forehead narrowing to a pointed chin, often with high cheekbones. The widest part is at the forehead.'
          }
        },
        {
          id: 'heart-face-recommendations',
          type: 'list',
          content: {
            items: [
              'Bottom-heavy frames to balance wider forehead',
              'Frames with light colors or materials on top portion',
              'Low-set temples to draw attention downward',
              'Oval or round frames with rounded bottom corners'
            ],
            ordered: false
          }
        },
        {
          id: 'heart-face-avoid',
          type: 'paragraph',
          content: {
            text: 'Avoid: Top-heavy frames that emphasize forehead width, dark colors at the top of frames, and cat-eye or upswept corner styles that draw attention upward.'
          }
        },
        {
          id: 'oval-face',
          type: 'heading',
          content: {
            text: 'Oval Face',
            level: 3
          }
        },
        {
          id: 'oval-face-characteristics',
          type: 'paragraph',
          content: {
            text: 'Characteristics: Balanced proportions with a slightly longer than wide ratio. Considered the "ideal" face shape as it has few fitting restrictions.'
          }
        },
        {
          id: 'oval-face-recommendations',
          type: 'list',
          content: {
            items: [
              'Most frame styles work well',
              'Maintain proportional size to face',
              'Focus on other factors like coloring and prescription needs',
              'Choose frames that maintain the natural balance of the face'
            ],
            ordered: false
          }
        },
        {
          id: 'oval-face-avoid',
          type: 'paragraph',
          content: {
            text: 'Avoid: Extremely oversized frames that disrupt natural balance and extremely unusual shapes that distract from facial harmony.'
          }
        },
        {
          id: 'diamond-face',
          type: 'heading',
          content: {
            text: 'Diamond Face',
            level: 3
          }
        },
        {
          id: 'diamond-face-characteristics',
          type: 'paragraph',
          content: {
            text: 'Characteristics: Narrow forehead and chin with wide, high cheekbones. The rarest face shape with distinctive angular features.'
          }
        },
        {
          id: 'diamond-face-recommendations',
          type: 'list',
          content: {
            items: [
              'Oval or cat-eye shapes to complement cheekbones',
              'Frames with detailing or distinctive brow lines',
              'Rimless or semi-rimless styles to reduce visual weight',
              'Frames with width at the top to balance narrow forehead'
            ],
            ordered: false
          }
        },
        {
          id: 'diamond-face-avoid',
          type: 'paragraph',
          content: {
            text: 'Avoid: Narrow frames that emphasize face width, heavy frames that add bulk to delicate features, and severely angular styles that compete with cheekbones.'
          }
        },
        {
          id: 'face-shape-considerations',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Key Considerations for All Face Shapes',
            text: 'Frame size should be proportional to face size. Bridge width should match nose width. Temple length should reach ear with slight curve. Frames should not touch cheeks when the patient smiles. Always consider these factors regardless of face shape.'
          }
        }
      ]
    },
    {
      id: 'advanced-measurements',
      title: 'Advanced Measurement Techniques',
      type: 'main',
      content: [
        {
          id: 'measurements-intro',
          type: 'paragraph',
          content: {
            text: 'Precise measurements are crucial for optimal frame fitting. Advanced techniques go beyond basic PD and bridge measurements to ensure perfect alignment and comfort.'
          }
        },
        {
          id: 'pd-measurement',
          type: 'heading',
          content: {
            text: 'Pupillary Distance (PD) Measurement',
            level: 3
          }
        },
        {
          id: 'monocular-pd',
          type: 'paragraph',
          content: {
            text: 'Monocular PD measurement is critical for asymmetrical faces and high prescriptions. Measure from the bridge to each pupil independently rather than measuring total distance.'
          }
        },
        {
          id: 'digital-pd',
          type: 'paragraph',
          content: {
            text: 'Digital PD measuring devices can provide more accurate measurements than traditional rulers. These devices often capture both distance and near PDs simultaneously.'
          }
        },
        {
          id: 'prescription-pd',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Progressive Lens PD Tip',
            text: 'For progressive lenses, measuring PD for both distance and near vision is essential. Use a near PD ruler and have patients hold reading material at their typical reading distance.'
          }
        },
        {
          id: 'frame-measurements',
          type: 'heading',
          content: {
            text: 'Frame Measurements',
            level: 3
          }
        },
        {
          id: 'frame-measurements-diagram',
          type: 'image',
          content: {
            src: advancedFrameFittingImages.frameMeasurements.path,
            alt: 'Diagram showing key frame measurements',
            caption: 'Standard frame measurements: A (eye size), B (bridge width), ED (effective diameter), DBL (distance between lenses)',
            width: '70%'
          }
        },
        {
          id: 'frame-size-metrics',
          type: 'list',
          content: {
            items: [
              'Eye Size: Width of each lens opening (horizontal dimension)',
              'Bridge Width: Distance between lenses across the nose',
              'Temple Length: Length from hinge to bend plus the drop length to tip',
              'Frame Width: Total horizontal width from hinge to hinge',
              'Lens Height: Vertical dimension of the lens shape',
              'Effective Diameter (ED): Average of lens width and height, important for minimum blank size'
            ],
            ordered: false
          }
        },
        {
          id: 'special-measurements',
          type: 'heading',
          content: {
            text: 'Special Prescription Considerations',
            level: 3
          }
        },
        {
          id: 'high-rx-considerations',
          type: 'paragraph',
          content: {
            text: 'High prescriptions require special measurement considerations:'
          }
        },
        {
          id: 'high-rx-list',
          type: 'list',
          content: {
            items: [
              'Vertex Distance: Distance from cornea to back of lens (important for powers over ±4.00D)',
              'Pantoscopic Tilt: Forward tilt of frame front (typically 8-12 degrees)',
              'Face Form/Wrap Angle: Curvature of frame front around the face',
              'Minimum Edge Thickness: Critical for strong minus lenses',
              'Lens Decentration: Horizontal and vertical lens placement relative to the optical center'
            ],
            ordered: false
          }
        },
        {
          id: 'progressive-considerations',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Progressive Lens Requirements',
            text: 'Progressive lenses require: minimum fitting height (typically 18-22mm), proper pantoscopic tilt (8-12 degrees), appropriate vertex distance (12-14mm), and correctly positioned major reference points marked on demo lenses.'
          }
        },
        {
          id: 'measurement-best-practices',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Measurement Best Practices',
            text: 'Always double-check measurements. Consider taking digital photos with reference markings. Document all measurements in the patient record. Account for frame material flexibility in the final fit.'
          }
        }
      ]
    },
    {
      id: 'adjustment-techniques',
      title: 'Advanced Adjustment Techniques',
      type: 'main',
      content: [
        {
          id: 'adjustments-intro',
          type: 'paragraph',
          content: {
            text: 'Professional frame adjustments require skill and precision. Advanced techniques ensure both comfort and optimal optical performance.'
          }
        },
        {
          id: 'temple-adjustments',
          type: 'heading',
          content: {
            text: 'Temple Adjustments',
            level: 3
          }
        },
        {
          id: 'temple-length',
          type: 'paragraph',
          content: {
            text: 'Temple length should reach the ear with a slight curve. When adjusting:'
          }
        },
        {
          id: 'temple-length-tips',
          type: 'list',
          content: {
            items: [
              'Ensure equal length on both sides using temple measurement tool',
              'Heat metal temples uniformly before bending to prevent stress points',
              'Apply gentle, even pressure when bending plastic temples',
              'Create a bend that follows the contour behind the ear',
              'Allow 1-2mm space between temple and head for comfort'
            ],
            ordered: false
          }
        },
        {
          id: 'temple-angle',
          type: 'paragraph',
          content: {
            text: 'Temple angle adjustments affect frame position and pressure distribution:'
          }
        },
        {
          id: 'temple-angle-techniques',
          type: 'list',
          content: {
            items: [
              'Widen or narrow temple spread at the hinge for proper side pressure',
              'Adjust at the bend point rather than along the entire temple',
              'Test pressure by having patient nod vigorously',
              'Ensure temples don\'t press against mastoid process (bone behind ear)',
              'For skull irregularities, adjust temples asymmetrically as needed'
            ],
            ordered: false
          }
        },
        {
          id: 'nose-pad-adjustments',
          type: 'heading',
          content: {
            text: 'Nose Pad Adjustments',
            level: 3
          }
        },
        {
          id: 'nose-pad-positions',
          type: 'paragraph',
          content: {
            text: 'Nose pad position affects frame height, comfort, and stability:'
          }
        },
        {
          id: 'nose-pad-adjustment-list',
          type: 'list',
          content: {
            items: [
              'In/Out: Adjust pad arms to move pads closer to or further from the frame',
              'Up/Down: Rotate pad arms to change vertical position of frame on face',
              'Angle: Change the pad angle to match the slope of the nose sides',
              'Surface Contact: Ensure even contact with both sides of the nose'
            ],
            ordered: false
          }
        },
        {
          id: 'nose-pad-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Nose Pad Selection',
            text: 'Consider special nose pads for patients with skin sensitivities, oily skin, or narrow nose bridges. Silicone pads provide more grip, while clear pads are less visible.'
          }
        },
        {
          id: 'frame-alignment',
          type: 'heading',
          content: {
            text: 'Frame Alignment',
            level: 3
          }
        },
        {
          id: 'frame-alignment-horizontal',
          type: 'paragraph',
          content: {
            text: 'Horizontal alignment ensures the frame sits level on the face:'
          }
        },
        {
          id: 'horizontal-alignment-steps',
          type: 'list',
          content: {
            items: [
              'Have patient look straight ahead at eye level',
              'Check that top of frame is parallel to eyebrow line',
              'Verify that top rim is equidistant from eyebrows on both sides',
              'Adjust temple height at hinge if one side appears higher',
              'For asymmetrical features, align with the dominant eye'
            ],
            ordered: false
          }
        },
        {
          id: 'frame-alignment-vertical',
          type: 'paragraph',
          content: {
            text: 'Vertical alignment involves pantoscopic tilt:'
          }
        },
        {
          id: 'vertical-alignment-tips',
          type: 'list',
          content: {
            items: [
              'Standard pantoscopic tilt is 8-12 degrees (bottom of frame closer to face than top)',
              'Adjust at endpiece or hinge depending on frame construction',
              'More tilt can improve reading zone access in progressives',
              'Less tilt may be needed for computer use or higher-mounted monitors',
              'Zero or negative tilt (retroscopic) is rarely appropriate'
            ],
            ordered: false
          }
        },
        {
          id: 'common-issues',
          type: 'heading',
          content: {
            text: 'Common Issues and Solutions',
            level: 3
          }
        },
        {
          id: 'sliding-frames',
          type: 'definition',
          content: {
            term: 'Sliding Frames',
            definition: 'Frames that slide down the nose during normal wear.',
            related: ['Nose pad adjustment', 'Temple tension', 'Weight distribution']
          }
        },
        {
          id: 'sliding-solutions',
          type: 'list',
          content: {
            items: [
              'Increase nose pad spread to provide more grip surface',
              'Add silicone nose pads or sleeve grippers to temple tips',
              'Adjust temple curvature to provide more retention behind ears',
              'Verify bridge width matches patient\'s nose bridge width',
              'Consider cable temples for extreme cases'
            ],
            ordered: false
          }
        },
        {
          id: 'uneven-height',
          type: 'definition',
          content: {
            term: 'Uneven Height',
            definition: 'Frame sits higher on one side than the other, creating an unbalanced appearance.',
            related: ['Face asymmetry', 'Temple adjustment', 'Ear height differences']
          }
        },
        {
          id: 'uneven-height-solutions',
          type: 'list',
          content: {
            items: [
              'Check for ear height differences (common cause)',
              'Adjust temple bend location and curve to compensate',
              'Modify nose pad positions asymmetrically if needed',
              'For significant asymmetry, consider custom temple adjustments'
            ],
            ordered: false
          }
        },
        {
          id: 'pressure-points',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Addressing Pressure Points',
            text: 'Pressure points can cause pain and skin irritation. If a patient reports discomfort, check: nose pad placement, temple tip pressure behind ears, frame front pressure on brow or cheeks, and overall frame tension. Always adjust the frame rather than expecting the patient to "get used to it."'
          }
        }
      ]
    },
    {
      id: 'special-frames',
      title: 'Special Frame Types and Considerations',
      type: 'main',
      content: [
        {
          id: 'special-frames-intro',
          type: 'paragraph',
          content: {
            text: 'Different frame types require specific fitting approaches and considerations. Understanding these differences is essential for successful dispensing.'
          }
        },
        {
          id: 'rimless-frames',
          type: 'heading',
          content: {
            text: 'Rimless Frames',
            level: 3
          }
        },
        {
          id: 'rimless-mounting',
          type: 'paragraph',
          content: {
            text: 'Rimless mounting requires special attention to detail:'
          }
        },
        {
          id: 'rimless-mounting-list',
          type: 'list',
          content: {
            items: [
              'Proper hole placement is critical - typically 2-3mm from edge',
              'Hole size must match mounting hardware exactly',
              'Lens material must be compatible with drilling (polycarbonate often not recommended)',
              'Mount tension affects both security and stress on lens',
              'Lens shape and size influence stability and durability'
            ],
            ordered: false
          }
        },
        {
          id: 'rimless-adjustments',
          type: 'paragraph',
          content: {
            text: 'Adjusting rimless frames requires special techniques:'
          }
        },
        {
          id: 'rimless-adjustments-list',
          type: 'list',
          content: {
            items: [
              'Always use proper tools designed for rimless mounts',
              'Adjust at mounting points rather than applying pressure to lenses',
              'Handle with extreme care to prevent lens breakage',
              'Make small, incremental adjustments rather than large ones',
              'Be aware of stress patterns in lens material during adjustment'
            ],
            ordered: false
          }
        },
        {
          id: 'semi-rimless',
          type: 'heading',
          content: {
            text: 'Semi-Rimless Frames',
            level: 3
          }
        },
        {
          id: 'semi-rimless-mounting',
          type: 'paragraph',
          content: {
            text: 'Semi-rimless mounting involves nylon cord or metal wire groove mounting:'
          }
        },
        {
          id: 'semi-rimless-considerations',
          type: 'list',
          content: {
            items: [
              'Groove depth must be uniform (typically 0.4-0.6mm)',
              'Lens material must support grooving (avoid thin high-index)',
              'Nylon cord tension must be even to prevent lens warpage',
              'Lens shape must provide adequate support at all points',
              'Bottom-mounted styles put different stresses on lenses than top-mounted'
            ],
            ordered: false
          }
        },
        {
          id: 'semi-rimless-maintenance',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Semi-Rimless Maintenance',
            text: 'Educate patients on signs of cord/wire wear and the importance of prompt replacement. Provide a complimentary cord replacement at the 6-month checkup to prevent lens loss.'
          }
        },
        {
          id: 'sports-frames',
          type: 'heading',
          content: {
            text: 'Sports Frames',
            level: 3
          }
        },
        {
          id: 'sports-fit-requirements',
          type: 'paragraph',
          content: {
            text: 'Sports frames have unique fitting requirements:'
          }
        },
        {
          id: 'sports-frames-list',
          type: 'list',
          content: {
            items: [
              'Wrap angle must be appropriate for the activity (typically 8-15 degrees)',
              'Temple grip should be secure without pressure points',
              'Frame must stay in place during high-impact movements',
              'Ventilation features prevent fogging during exertion',
              'Lens retention system must be secure for safety'
            ],
            ordered: false
          }
        },
        {
          id: 'sports-special-features',
          type: 'paragraph',
          content: {
            text: 'Consider these special features for sports frames:'
          }
        },
        {
          id: 'sports-features-list',
          type: 'list',
          content: {
            items: [
              'Sweat channels to direct moisture away from eyes',
              'Hydrophobic coatings to repel water and sweat',
              'Replaceable components for parts subject to wear',
              'Convertible temples/straps for different activities',
              'Interchangeable lenses for varying light conditions'
            ],
            ordered: false
          }
        },
        {
          id: 'specialty-frames-heading',
          type: 'heading',
          content: {
            text: 'Specialty Frames',
            level: 3
          }
        },
        {
          id: 'high-wrap-frames',
          type: 'paragraph',
          content: {
            text: 'High wrap frames require special optical considerations:'
          }
        },
        {
          id: 'high-wrap-list',
          type: 'list',
          content: {
            items: [
              'Base curve selection must complement frame curve',
              'Lens material should be chosen for optimal wrap properties',
              'Compensated prescriptions may be needed for high wraps',
              'Peripheral distortion management for high prescriptions',
              'Special attention to decentration to align optical centers'
            ],
            ordered: false
          }
        },
        {
          id: 'low-bridge-frames',
          type: 'paragraph',
          content: {
            text: 'Low bridge fit frames accommodate different facial structures:'
          }
        },
        {
          id: 'low-bridge-list',
          type: 'list',
          content: {
            items: [
              'Wider, flatter nose pads for distributed weight',
              'Adjusted pantoscopic tilt to maintain proper vertex',
              'Modified temple position to maintain frame stability',
              'Often require shorter vertex distance settings',
              'May need specialized nose pad materials for grip'
            ],
            ordered: false
          }
        },
        {
          id: 'maintenance-tips',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Maintenance Education',
            text: 'Provide specific care instructions based on frame material and type. Demonstrate proper cleaning techniques. Recommend regular professional adjustments every 3-6 months. Explain how to recognize when adjustments are needed.'
          }
        }
      ]
    }
  ],
  summary: 'Advanced frame fitting requires a deep understanding of the relationship between facial features and frame designs. By mastering face shape analysis, precise measurement techniques, professional adjustment methods, and special frame considerations, you can provide patients with eyewear that is comfortable, functional, and aesthetically pleasing. Remember that frame fitting is both a science and an art - while measurements provide a foundation, your professional judgment and attention to detail will ultimately determine the success of the fit.',
  references: [
    'Brooks CW, Borish IM. System for Ophthalmic Dispensing, 3rd ed. Butterworth-Heinemann; 2007.',
    'Jalie M. Ophthalmic Lenses and Dispensing, 3rd ed. Butterworth-Heinemann; 2008.',
    'American National Standards Institute. ANSI Z80.1-2015 Prescription Ophthalmic Lenses—Recommendations.',
    'The Vision Council. Frame Fit Guide and Best Practices. 2018.'
  ],
  practiceQuestions: [
    {
      question: 'What frame style is best for a round face?',
      options: [
        'Round frames',
        'Rectangular or angular frames',
        'Cat-eye frames',
        'Oval frames'
      ],
      correctAnswer: 1,
      explanation: 'Rectangular or angular frames help add definition and structure to a round face, creating a contrast with the natural soft curves of the facial features.'
    },
    {
      question: 'When adjusting nose pads on a frame, which of the following is NOT a proper adjustment technique?',
      options: [
        'Moving pads closer to or farther from the frame',
        'Rotating pad arms to change vertical position',
        'Bending pads to match the angle of the nose',
        'Filing down pads to reduce contact area'
      ],
      correctAnswer: 3,
      explanation: 'Filing down nose pads is not a proper adjustment technique as it damages the pads and reduces their functionality. The other options are all standard nose pad adjustments.'
    },
    {
      question: 'What is the typical range for proper pantoscopic tilt in eyeglass frames?',
      options: [
        '0-4 degrees',
        '8-12 degrees',
        '15-20 degrees',
        '25-30 degrees'
      ],
      correctAnswer: 1,
      explanation: 'The standard pantoscopic tilt for most eyeglass frames is 8-12 degrees, with the bottom of the frame closer to the face than the top.'
    },
    {
      question: 'Which measurement is most critical for progressive lens fitting?',
      options: [
        'Temple length',
        'Bridge width',
        'Frame width',
        'Minimum fitting height'
      ],
      correctAnswer: 3,
      explanation: 'Minimum fitting height is critical for progressive lenses as it ensures sufficient vertical space for the distance, intermediate, and near zones of the lens.'
    },
    {
      question: 'What is a common cause of frames sliding down the nose?',
      options: [
        'Excessively tight temples',
        'Too little pantoscopic tilt',
        'Nose pads set too close together',
        'Temples adjusted too far down'
      ],
      correctAnswer: 2,
      explanation: 'Nose pads set too close together provide insufficient grip surface on the sides of the nose, often causing frames to slide down.'
    }
  ]
}; 