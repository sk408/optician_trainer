import { TopicStudyContent } from '../../interfaces/StudyContent';

export const frameAdjustmentContent: TopicStudyContent = {
  topicId: 'frame-adjustment',
  title: 'Frame Adjustment & Repair',
  introduction: 'The ability to properly adjust eyeglass frames is essential for providing comfortable, functional, and aesthetically pleasing eyewear. A well-adjusted frame improves optical performance, increases wearing comfort, and enhances the appearance of the eyewear. This module covers the principles, techniques, and tools used for frame adjustment and basic repair procedures.',
  objectives: [
    'Understand the principles of proper frame fit and alignment',
    'Identify common frame adjustment tools and their applications',
    'Demonstrate various adjustment techniques for metal and plastic frames',
    'Recognize when and how to perform basic frame repairs',
    'Apply problem-solving strategies for common fit issues'
  ],
  sections: [
    {
      id: 'adjustment-principles',
      title: 'Principles of Frame Adjustment',
      type: 'introduction',
      content: [
        {
          id: 'proper-fit-def',
          type: 'definition',
          content: {
            term: 'Proper Frame Fit',
            definition: 'A condition where the frame sits correctly on the face, providing optimal optical performance, comfort, and appearance.',
            related: ['Frame Alignment', 'Pantoscopic Tilt', 'Vertex Distance']
          }
        },
        {
          id: 'fit-importance',
          type: 'paragraph',
          content: {
            text: 'Proper frame fit is essential for both optical performance and patient comfort. Poorly fitted frames can cause optical distortion, discomfort, headaches, and reduced wear time. A well-adjusted frame should distribute weight evenly, maintain proper alignment, and position the lenses correctly in front of the eyes.'
          }
        },
        {
          id: 'fit-assessment',
          type: 'heading',
          content: {
            text: 'Frame Fit Assessment',
            level: 3
          }
        },
        {
          id: 'assessment-paragraph',
          type: 'paragraph',
          content: {
            text: 'A systematic approach to frame assessment includes checking:'
          }
        },
        {
          id: 'assessment-list',
          type: 'list',
          content: {
            items: [
              'Frame levelness: The frame should be level horizontally across the face',
              'Temple alignment: Temples should contact the side of the head evenly',
              'Bridge fit: The bridge should distribute weight comfortably across the nose',
              'Pantoscopic tilt: Proper facial angle for optimal optical performance',
              'Vertex distance: Appropriate distance between the lens and the eye',
              'Frame size: Appropriate width, height, and overall proportion to the face',
              'Temple length: Proper extension behind the ear'
            ]
          }
        },
        {
          id: 'alignment-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'The Four-Point Touch Rule',
            text: 'A properly fitted frame should have four points of contact: both sides of the nose and both ears. This provides stability and proper alignment for optimal optical performance.'
          }
        }
      ]
    },
    {
      id: 'tools-materials',
      title: 'Adjustment Tools & Materials',
      type: 'main',
      content: [
        {
          id: 'tools-intro',
          type: 'paragraph',
          content: {
            text: 'Using the right tools for frame adjustments ensures effective changes without damaging the frame. Different materials and styles require specific tools and techniques.'
          }
        },
        {
          id: 'essential-tools',
          type: 'heading',
          content: {
            text: 'Essential Adjustment Tools',
            level: 3
          }
        },
        {
          id: 'tools-table',
          type: 'table',
          content: {
            headers: ['Tool', 'Primary Use', 'Frame Type'],
            rows: [
              ['Angling Pliers', 'Bend eyewire, adjust nosepads', 'Metal frames'],
              ['Snipe/Needle-nose Pliers', 'Precision endpiece adjustments', 'Metal frames'],
              ['Flat-nose Pliers', 'Hold frame parts securely', 'Metal frames'],
              ['Nylon-jaw Pliers', 'Gentle adjustments without marking frames', 'Metal frames, high-quality plastic'],
              ['Adjustable-jaw Pliers', 'Multi-purpose frame holding and adjusting', 'All frame types'],
              ['Frame Warmer/Hot Air Blower', 'Heat plastic frames for adjustment', 'Plastic/acetate frames'],
              ['Hot Salt Pan/Bead Warmer', 'Even heating of plastic frames', 'Plastic/acetate frames'],
              ['Water Bath', 'Gentle warming of plastic frames', 'Plastic/acetate frames'],
              ['Screwdrivers (assorted sizes)', 'Hinge and screw adjustments', 'All frame types'],
              ['Frame Ruler/PD Ruler', 'Measurement verification', 'All frame types']
            ],
            caption: 'Essential tools for professional frame adjustments'
          }
        },
        {
          id: 'plastic-tools',
          type: 'heading',
          content: {
            text: 'Working with Plastic Frames',
            level: 3
          }
        },
        {
          id: 'plastic-paragraph',
          type: 'paragraph',
          content: {
            text: 'Plastic frames require heat to become pliable for adjustments. The proper temperature is crucial—too hot and the frame can bubble or discolor; too cool and the frame may crack when bent.'
          }
        },
        {
          id: 'heating-list',
          type: 'list',
          content: {
            items: [
              'Hot air blowers typically heat to 120-140°F (49-60°C)',
              'Salt/bead pans maintain temperatures around 160°F (71°C)',
              'Water baths should be maintained at approximately 160-180°F (71-82°C)',
              'Always test the temperature on a less visible part of the frame first',
              'Warm the frame evenly and thoroughly before attempting adjustments'
            ]
          }
        },
        {
          id: 'metal-tools',
          type: 'heading',
          content: {
            text: 'Working with Metal Frames',
            level: 3
          }
        },
        {
          id: 'metal-paragraph',
          type: 'paragraph',
          content: {
            text: 'Metal frames are adjusted using pliers and manual manipulation. The key is to use the right pliers for the job and to apply pressure at the correct point.'
          }
        },
        {
          id: 'plier-tips',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Plier Handling Tips',
            text: 'Always cover metal plier jaws with protective covers or tape when working with coated or high-end frames. Apply pressure gradually and check your progress frequently. Hold the frame close to where you\'re making the adjustment to prevent transmitting force to other areas.'
          }
        }
      ]
    },
    {
      id: 'adjustment-techniques',
      title: 'Basic Adjustment Techniques',
      type: 'main',
      content: [
        {
          id: 'techniques-intro',
          type: 'paragraph',
          content: {
            text: 'Mastering basic adjustment techniques is essential for addressing common fit issues. Each adjustment should be made methodically, with frequent checks on progress.'
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
          id: 'temple-techniques-list',
          type: 'list',
          content: {
            items: [
              'Temple spread adjustment: Widen or narrow the angle of the temples relative to the front',
              'Temple contour adjustment: Shape the temple to follow the contour behind the ear',
              'Temple length adjustment: Adjust the effective length by changing the bend position',
              'Temple levelness: Ensure both temples are at the same height and angle'
            ]
          }
        },
        {
          id: 'metal-temple-paragraph',
          type: 'paragraph',
          content: {
            text: 'For metal frames, use angling pliers to carefully bend the temple at the hinge, endpiece, or bend area. Apply pressure gradually and check the fit frequently.'
          }
        },
        {
          id: 'plastic-temple-paragraph',
          type: 'paragraph',
          content: {
            text: 'For plastic frames, heat the temple thoroughly before making adjustments. Shape while warm and hold in position until cool. Remember that plastic frames will try to return to their original shape if not cooled in the desired position.'
          }
        },
        {
          id: 'bridge-adjustments',
          type: 'heading',
          content: {
            text: 'Bridge & Nosepads Adjustments',
            level: 3
          }
        },
        {
          id: 'bridge-techniques-list',
          type: 'list',
          content: {
            items: [
              'Nosepad width: Adjust the distance between nosepads to distribute weight evenly',
              'Nosepad angle: Change the angle to match the contour of the nose sides',
              'Bridge height: Adjust the height of the frame on the face',
              'Bridge alignment: Ensure the bridge sits evenly across the nose'
            ]
          }
        },
        {
          id: 'metal-bridge-paragraph',
          type: 'paragraph',
          content: {
            text: 'For metal frames with adjustable nosepads, use angling pliers to carefully bend the nosepad arms. Adjust both arms symmetrically unless the patient\'s nose is asymmetrical.'
          }
        },
        {
          id: 'plastic-bridge-paragraph',
          type: 'paragraph',
          content: {
            text: 'For plastic frames with fixed bridges, heating is essential. Warm the bridge area thoroughly, then apply gentle pressure to widen or narrow the fit. Cool in position to set the adjustment.'
          }
        },
        {
          id: 'pantoscopic-tilt',
          type: 'heading',
          content: {
            text: 'Pantoscopic Tilt Adjustment',
            level: 3
          }
        },
        {
          id: 'pantoscopic-def',
          type: 'definition',
          content: {
            term: 'Pantoscopic Tilt',
            definition: 'The vertical angle of the frame front relative to the vertical plane of the face, typically 8-12 degrees with the bottom of the frame closer to the face than the top.',
            related: ['Face Form Angle', 'Vertex Distance', 'Optical Center']
          }
        },
        {
          id: 'pantoscopic-paragraph',
          type: 'paragraph',
          content: {
            text: 'Proper pantoscopic tilt ensures the optical centers of the lenses align with the patient\'s visual axis. For metal frames, this is adjusted at the endpiece or hinge. For plastic frames, heat the endpiece area and adjust the angle of the front relative to the temples.'
          }
        },
        {
          id: 'adjustment-sequence',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Adjustment Sequence',
            text: 'Always adjust frames in this sequence: 1) Temples (spread and levelness), 2) Bridge/nosepads, 3) Pantoscopic tilt, 4) Temple contour. This sequence prevents one adjustment from affecting others already made.'
          }
        }
      ]
    },
    {
      id: 'frame-repairs',
      title: 'Basic Frame Repairs',
      type: 'main',
      content: [
        {
          id: 'repairs-intro',
          type: 'paragraph',
          content: {
            text: 'Basic frame repairs can often be performed in-office, saving time and improving customer satisfaction. Understanding the limitations of in-office repairs is important to avoid further damage.'
          }
        },
        {
          id: 'screw-replacement',
          type: 'heading',
          content: {
            text: 'Screw Replacement',
            level: 3
          }
        },
        {
          id: 'screw-paragraph',
          type: 'paragraph',
          content: {
            text: 'Loose or missing screws are the most common repair needed. Having an assortment of replacement screws in various sizes is essential. When replacing screws:'
          }
        },
        {
          id: 'screw-list',
          type: 'list',
          content: {
            ordered: true,
            items: [
              'Select the correct size screw for the frame',
              'Use a magnetic screwdriver of the appropriate size',
              'Align the hinge barrels properly before inserting the screw',
              'Apply a tiny amount of clear nail polish or screw lock solution for security',
              'Avoid overtightening, which can strip the threads or stress the frame'
            ]
          }
        },
        {
          id: 'nosepad-replacement',
          type: 'heading',
          content: {
            text: 'Nosepad Replacement',
            level: 3
          }
        },
        {
          id: 'nosepad-paragraph',
          type: 'paragraph',
          content: {
            text: 'Nosepads can become discolored, damaged, or lost. Replacing them improves comfort and appearance:'
          }
        },
        {
          id: 'nosepad-list',
          type: 'list',
          content: {
            ordered: true,
            items: [
              'Identify the correct type of nosepad (screw-in, push-in, or snap-in)',
              'Remove the old nosepad using appropriate tools',
              'Clean the nosepad arm surface',
              'Install the new nosepad, ensuring it\'s securely attached',
              'Adjust the position to match the other nosepad'
            ]
          }
        },
        {
          id: 'temple-tip-replacement',
          type: 'heading',
          content: {
            text: 'Temple Tip Replacement',
            level: 3
          }
        },
        {
          id: 'tip-paragraph',
          type: 'paragraph',
          content: {
            text: 'Temple tips (skull tips) can wear out or break, exposing metal that can cause discomfort:'
          }
        },
        {
          id: 'tip-list',
          type: 'list',
          content: {
            ordered: true,
            items: [
              'Select the appropriate size and style replacement tip',
              'Remove the old tip by heating it in warm water or with a temple warmer',
              'Clean the metal core of any residue',
              'Heat the new tip until pliable',
              'Slide it onto the temple core and position correctly',
              'Allow to cool and check the fit'
            ]
          }
        },
        {
          id: 'soldering',
          type: 'heading',
          content: {
            text: 'Basic Soldering Repairs',
            level: 3
          }
        },
        {
          id: 'soldering-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some metal frame breaks can be repaired with soldering, though this requires specific equipment and skills:'
          }
        },
        {
          id: 'soldering-callout',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Soldering Cautions',
            text: 'Soldering should only be attempted on standard metal frames, not on titanium, memory metal, or frames with special coatings. Always remove lenses before soldering, and protect any plastic components from heat damage.'
          }
        },
        {
          id: 'when-to-refer',
          type: 'heading',
          content: {
            text: 'When to Refer to a Lab',
            level: 3
          }
        },
        {
          id: 'refer-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some repairs are best handled by specialized labs with advanced equipment. Consider referring repairs involving:'
          }
        },
        {
          id: 'refer-list',
          type: 'list',
          content: {
            items: [
              'Broken frame fronts requiring welding',
              'Rimless mount repairs or replacements',
              'Specialty frame materials (titanium, memory metal)',
              'Vintage or discontinued frames requiring custom parts',
              'Major structural damage affecting lens alignment'
            ]
          }
        }
      ]
    },
    {
      id: 'difficult-adjustments',
      title: 'Challenging Adjustment Scenarios',
      type: 'advanced',
      content: [
        {
          id: 'challenges-intro',
          type: 'paragraph',
          content: {
            text: 'Some adjustment scenarios present unique challenges requiring advanced techniques or special considerations.'
          }
        },
        {
          id: 'asymmetrical-features',
          type: 'heading',
          content: {
            text: 'Adjusting for Facial Asymmetry',
            level: 3
          }
        },
        {
          id: 'asymmetry-paragraph',
          type: 'paragraph',
          content: {
            text: 'Many patients have some degree of facial asymmetry. Frame adjustments should accommodate these differences while maintaining a level appearance of the frame:'
          }
        },
        {
          id: 'asymmetry-list',
          type: 'list',
          content: {
            items: [
              'Adjust individual nosepads to different heights or angles',
              'Set temples at slightly different angles if ear heights differ',
              'Modify pantoscopic tilt on one side to compensate for asymmetric features',
              'Consider asymmetric temple contours for comfort'
            ]
          }
        },
        {
          id: 'specialty-materials',
          type: 'heading',
          content: {
            text: 'Working with Specialty Frame Materials',
            level: 3
          }
        },
        {
          id: 'titanium-paragraph',
          type: 'paragraph',
          content: {
            text: 'Titanium and titanium alloy frames require special adjustment techniques:'
          }
        },
        {
          id: 'titanium-list',
          type: 'list',
          content: {
            items: [
              'Use only tools specifically designed for titanium',
              'Apply adjustments more gradually as titanium has memory properties',
              'Avoid sharp bends which can cause stress points',
              'Never heat titanium frames as this can affect their structural integrity'
            ]
          }
        },
        {
          id: 'memory-metal',
          type: 'paragraph',
          content: {
            text: 'Memory metal (Flexon®, Titanflex®) frames are challenging to adjust permanently:'
          }
        },
        {
          id: 'memory-list',
          type: 'list',
          content: {
            items: [
              'Most adjustments to the main frame are temporary due to the memory properties',
              'Focus on nosepad and temple tip adjustments which can be more permanent',
              'Use gentle, incremental changes rather than single large adjustments',
              'Avoid heating these frames as it can damage their memory properties'
            ]
          }
        },
        {
          id: 'high-prescriptions',
          type: 'heading',
          content: {
            text: 'Adjusting for High Prescriptions',
            level: 3
          }
        },
        {
          id: 'high-rx-paragraph',
          type: 'paragraph',
          content: {
            text: 'High prescription lenses create special adjustment needs due to weight and optical requirements:'
          }
        },
        {
          id: 'high-rx-list',
          type: 'list',
          content: {
            items: [
              'Ensure proper vertex distance to optimize optical performance',
              'Pay special attention to pantoscopic tilt for optimal optics',
              'Distribute weight evenly across all contact points',
              'Consider adjusting temples to provide extra support',
              'Adjust nosepads to wider positions for better weight distribution'
            ]
          }
        }
      ]
    },
    {
      id: 'patient-education',
      title: 'Patient Education & Care Instructions',
      type: 'clinical',
      content: [
        {
          id: 'education-intro',
          type: 'paragraph',
          content: {
            text: 'Educating patients about proper frame care and maintenance is an important part of dispensing. Proper care instructions can extend frame life and reduce the need for frequent adjustments.'
          }
        },
        {
          id: 'handling-instructions',
          type: 'heading',
          content: {
            text: 'Proper Handling Instructions',
            level: 3
          }
        },
        {
          id: 'handling-list',
          type: 'list',
          content: {
            items: [
              'Use both hands when putting on or removing glasses',
              'Avoid pushing glasses up by the bridge with one finger',
              'Never place glasses face-down on hard surfaces',
              'Store glasses in a case when not in use',
              'Avoid leaving glasses in hot environments (like car dashboards)'
            ]
          }
        },
        {
          id: 'cleaning-heading',
          type: 'heading',
          content: {
            text: 'Cleaning Recommendations',
            level: 3
          }
        },
        {
          id: 'cleaning-list',
          type: 'list',
          content: {
            items: [
              'Rinse frames with lukewarm water before cleaning',
              'Use only approved eyeglass cleaners or mild soap',
              'Clean frames with a soft, lint-free cloth',
              'Avoid household cleaners, alcohol, or acetone which can damage coatings and frames',
              'Clean hinges and crevices periodically with a soft brush'
            ]
          }
        },
        {
          id: 'adjustment-schedule',
          type: 'heading',
          content: {
            text: 'Recommended Adjustment Schedule',
            level: 3
          }
        },
        {
          id: 'schedule-paragraph',
          type: 'paragraph',
          content: {
            text: 'Advise patients to have their frames professionally adjusted:'
          }
        },
        {
          id: 'schedule-list',
          type: 'list',
          content: {
            items: [
              'At delivery/dispensing',
              'After 1-2 weeks of initial wear',
              'Every 3-6 months for regular maintenance',
              'After any impact or accident',
              'When discomfort develops or the frame sits unevenly'
            ]
          }
        },
        {
          id: 'home-adjustment-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Warning Against Home Adjustments',
            text: 'Caution patients against attempting their own frame adjustments. Improper techniques can break frames, void warranties, and potentially cause injury. Always encourage them to return to the office for professional adjustments, which are often provided at no charge.'
          }
        }
      ]
    }
  ],
  summary: 'Frame adjustment is both an art and a science that requires understanding of materials, techniques, and individual patient needs. Proper adjustments ensure optimal visual performance, comfort, and aesthetics. The adjustment process begins with a thorough assessment of the current fit, followed by methodical adjustments using appropriate tools and techniques. Different frame materials require specific approaches, with plastic frames needing heat and metal frames requiring various pliers. Beyond adjustments, basic repair skills like screw replacement, nosepad changes, and temple tip replacement can be performed in-office. For complex scenarios involving facial asymmetry or specialty materials, advanced techniques may be necessary. Patient education about proper frame care completes the dispensing process, promoting frame longevity and continued satisfaction.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2016). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Ferguson, D., & Lee, W. (2013). Frame Adjustment for Dispensing Opticians. London: Association of British Dispensing Opticians.',
    'American Board of Opticianry. (2019). Eyeglass Dispensing - Frame Fitting and Adjustment Manual.',
    'Robertson, D. K. (2018). "The Art and Science of Eyeglass Frame Adjustment." Journal of Ophthalmic Dispensing Practice, 25(3), 112-128.'
  ]
}; 