import { TopicStudyContent } from '../../interfaces/StudyContent';

export const laboratoryProceduresContent: TopicStudyContent = {
  topicId: 'laboratory-procedures',
  title: 'Laboratory Procedures and Quality Control',
  introduction: 'Optical laboratory procedures involve the processes, techniques, and equipment used to fabricate, verify, and dispense prescription eyewear. Understanding these procedures is essential for opticians to ensure that finished eyewear meets required specifications and quality standards. This module covers lens fabrication techniques, quality control measures, and the proper use of common optical tools and equipment.',
  objectives: [
    'Understand the lens fabrication process from start to finish',
    'Learn proper techniques for lens layout, blocking, edging, and mounting',
    'Identify common quality control procedures and verification techniques',
    'Understand ANSI standards and tolerances for finished eyewear',
    'Learn the proper use and maintenance of optical tools and equipment',
    'Understand troubleshooting techniques for common fabrication issues'
  ],
  sections: [
    {
      id: 'fabrication-overview',
      title: 'Lens Fabrication Process Overview',
      type: 'introduction',
      content: [
        {
          id: 'fabrication-intro',
          type: 'paragraph',
          content: {
            text: 'Lens fabrication is the process of transforming uncut lens blanks into finished, mounted lenses that meet the patient\'s prescription requirements. The process involves multiple steps, each requiring specific skills and proper technique to ensure quality finished eyewear.'
          }
        },
        {
          id: 'fabrication-flowchart',
          type: 'image',
          content: {
            src: '/assets/images/study/lens-fabrication-flowchart.jpg',
            alt: 'Flowchart showing the lens fabrication process',
            caption: 'Lens fabrication process flowchart, from prescription verification to final inspection',
            width: '80%'
          }
        },
        {
          id: 'fabrication-steps',
          type: 'list',
          content: {
            title: 'Key Fabrication Steps:',
            items: [
              'Prescription verification and work order creation',
              'Lens blank selection based on prescription and frame requirements',
              'Layout and blocking of lens blanks',
              'Edging to match frame shape and dimensions',
              'Lens treatment application (if not done at manufacturing level)',
              'Mounting lenses into frames',
              'Final verification and quality control',
              'Finishing touches and cleaning'
            ],
            ordered: true
          }
        },
        {
          id: 'fabrication-considerations',
          type: 'table',
          content: {
            headers: ['Consideration', 'Impact', 'Requirements'],
            rows: [
              ['Prescription Complexity', 'Affects fabrication difficulty and process selection', 'Higher precision for complex prescriptions (high power, prism, etc.)'],
              ['Lens Material', 'Determines cutting parameters and handling requirements', 'Different blade speeds, cooling needs, and finishing techniques'],
              ['Frame Type', 'Affects edging style and mounting method', 'Special considerations for rimless, semi-rimless, and full-rim frames'],
              ['Lens Design', 'Influences layout and orientation', 'Careful alignment of progressive, multifocal, and free-form designs'],
              ['Coatings/Treatments', 'May require special handling', 'Avoid contamination and damage to coated surfaces']
            ],
            caption: 'Key considerations in the lens fabrication process'
          }
        }
      ]
    },
    {
      id: 'layout-blocking',
      title: 'Layout and Blocking',
      type: 'main',
      content: [
        {
          id: 'layout-intro',
          type: 'paragraph',
          content: {
            text: 'Layout and blocking are critical first steps in the lens fabrication process. Layout involves marking the optical center, major reference point, or fitting cross on the lens blank based on the prescription and patient measurements. Blocking attaches a removable "block" to hold the lens during edging.'
          }
        },
        {
          id: 'layout-definition',
          type: 'definition',
          content: {
            term: 'Layout',
            definition: 'The process of marking and positioning the lens blank to ensure proper optical alignment in the finished eyewear, taking into account the patient\'s pupillary distance (PD), segment height, and other measurements.',
            related: ['optical-center', 'major-reference-point', 'decentration']
          }
        },
        {
          id: 'blocking-definition',
          type: 'definition',
          content: {
            term: 'Blocking',
            definition: 'The process of attaching a temporary holder (block) to the lens blank to maintain proper orientation and position during the edging process.',
            related: ['blocking-pad', 'lens-block', 'layout-chart']
          }
        },
        {
          id: 'layout-considerations',
          type: 'list',
          content: {
            title: 'Critical Layout Considerations:',
            items: [
              'Proper decentration based on PD and frame dimensions',
              'Correct vertical positioning for progressive and multifocal lenses',
              'Proper axis alignment for astigmatic corrections',
              'Prism orientation and amount (if prescribed)',
              'Identification of front and back surfaces of lens'
            ],
            ordered: false
          }
        },
        {
          id: 'layout-methods',
          type: 'table',
          content: {
            headers: ['Method', 'Description', 'Best For'],
            rows: [
              ['Manual Layout', 'Using lensmeters, layout markers, and blocking devices', 'Small labs, custom work, complex prescriptions'],
              ['Semi-Automated', 'Computer-assisted layout with some manual intervention', 'Medium-volume labs with varied prescriptions'],
              ['Fully Automated', 'Computer-controlled layout and blocking systems', 'High-volume labs with standardized processes']
            ],
            caption: 'Methods of lens layout and blocking'
          }
        },
        {
          id: 'pd-considerations',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Monocular vs. Binocular PD',
            text: 'When using binocular PD for layout, divide the measurement equally for symmetrical frames. For asymmetrical frames or patients with facial asymmetry, monocular PDs provide more accurate results. Always use monocular PDs for high-power prescriptions.'
          }
        }
      ]
    },
    {
      id: 'edging-process',
      title: 'Edging and Lens Shaping',
      type: 'main',
      content: [
        {
          id: 'edging-intro',
          type: 'paragraph',
          content: {
            text: 'Edging is the process of cutting and shaping the lens blank to the precise dimensions and profile required for the selected frame. Modern edging systems range from manual to fully automated CNC machines that can produce precise shapes with various edge treatments.'
          }
        },
        {
          id: 'edging-definition',
          type: 'definition',
          content: {
            term: 'Edging',
            definition: 'The process of cutting and shaping a lens blank to match the shape and dimensions of a frame, including applying the appropriate edge profile and bevel position.',
            related: ['bevel', 'groove', 'polish', 'safety-bevel']
          }
        },
        {
          id: 'edging-types',
          type: 'table',
          content: {
            headers: ['Edge Type', 'Description', 'Application'],
            rows: [
              ['Standard Bevel', 'V-shaped edge profile that fits into the frame groove', 'Most standard plastic and metal frames'],
              ['Modified Bevel', 'Customized bevel position for high-power lenses', 'High minus or plus lenses to optimize appearance'],
              ['Flat Edge', 'Straight edge with minimal or no bevel', 'Some rimless mounting systems'],
              ['Groove', 'Channel cut around lens perimeter', 'Semi-rimless frames with nylon cord'],
              ['Drill Mounts', 'Flat edge with precision holes', 'Rimless mounting systems'],
              ['Polish', 'Smoothing and polishing the lens edge', 'Cosmetic enhancement, particularly for thick lenses']
            ],
            caption: 'Common edge types and their applications'
          }
        },
        {
          id: 'edging-parameters',
          type: 'list',
          content: {
            title: 'Edging Parameters:',
            items: [
              'Frame trace or pattern dimensions',
              'Lens material (affecting cutting speed and cooling requirements)',
              'Bevel placement and type',
              'Edge polish requirements',
              'Safety bevel specifications',
              'Lens thickness and minimum edge thickness requirements'
            ],
            ordered: false
          }
        },
        {
          id: 'edging-quality',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Quality Control During Edging',
            text: 'Inspect lenses during and after edging for chips, cracks, or incorrect dimensions. Proper cooling during cutting prevents stress and potential lens fractures. Maintain edger calibration regularly to ensure consistent results.'
          }
        },
        {
          id: 'edging-materials',
          type: 'table',
          content: {
            headers: ['Lens Material', 'Cutting Considerations', 'Special Requirements'],
            rows: [
              ['CR-39', 'Medium cutting speed, moderate cooling', 'Standard diamond or carbide wheels'],
              ['Polycarbonate', 'Slower cutting speed, increased cooling', 'Special polycarbonate wheels, avoid excessive heat'],
              ['High-index', 'Slower cutting speed, careful handling', 'Sharp cutting tools, avoid chipping'],
              ['Trivex/Phoenix', 'Medium cutting speed, good cooling', 'Similar to polycarbonate but less heat-sensitive'],
              ['Glass', 'Very slow cutting, significant cooling', 'Specialized glass-cutting equipment, careful handling']
            ],
            caption: 'Lens material considerations for edging'
          }
        }
      ]
    },
    {
      id: 'mounting-finishing',
      title: 'Lens Mounting and Finishing',
      type: 'main',
      content: [
        {
          id: 'mounting-intro',
          type: 'paragraph',
          content: {
            text: 'After edging, lenses must be mounted into the frame. This process varies depending on the frame type and requires specific techniques to ensure proper fit, alignment, and tensioning without damaging the lenses or frame.'
          }
        },
        {
          id: 'mounting-types',
          type: 'table',
          content: {
            headers: ['Frame Type', 'Mounting Method', 'Tools Required', 'Special Considerations'],
            rows: [
              ['Full-Rim Plastic', 'Heat frame front, insert lenses', 'Frame warmer, insertion tools', 'Avoid overheating, ensure complete seating'],
              ['Full-Rim Metal', 'Loosen screws, insert lenses, tighten', 'Screwdrivers, pliers', 'Proper screw tension, avoid stripping'],
              ['Semi-Rimless', 'Insert lenses, attach cord/spring', 'Cord/spring tools, pliers', 'Proper cord tension, secure attachment'],
              ['Rimless Drill Mount', 'Attach mounts through drill holes', 'Specialized rimless tools', 'Proper torque, protective washers']
            ],
            caption: 'Mounting methods by frame type'
          }
        },
        {
          id: 'finishing-steps',
          type: 'list',
          content: {
            title: 'Finishing Steps:',
            items: [
              'Inspection of lens mounting and alignment',
              'Frame alignment and adjustment',
              'Cleaning of lenses and frame',
              'Final verification of optical specifications',
              'Application of any final treatments (anti-fog, water repellent)',
              'Packaging and labeling'
            ],
            ordered: true
          }
        },
        {
          id: 'mounting-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Mounting Precautions',
            text: 'Handle coated lenses with clean, lint-free gloves to prevent fingerprints and smudges. Use the appropriate amount of heat for plastic frames to prevent warping or crazing. Ensure proper torque on rimless mounts to prevent cracking or overtightening.'
          }
        }
      ]
    },
    {
      id: 'quality-control',
      title: 'Quality Control and Verification',
      type: 'main',
      content: [
        {
          id: 'qc-intro',
          type: 'paragraph',
          content: {
            text: 'Quality control is critical throughout the fabrication process, with final verification ensuring the finished eyewear meets all prescribed specifications and industry standards. Proper verification involves checking multiple parameters against established tolerances.'
          }
        },
        {
          id: 'ansi-standards',
          type: 'definition',
          content: {
            term: 'ANSI Z80.1 Standards',
            definition: 'American National Standards Institute guidelines that establish acceptable tolerances for ophthalmic lenses, including power, axis, decentration, and other optical specifications.',
            related: ['tolerance', 'verification', 'standard-compliance']
          }
        },
        {
          id: 'ansi-tolerances',
          type: 'table',
          content: {
            headers: ['Parameter', 'ANSI Tolerance', 'Verification Method'],
            rows: [
              ['Sphere Power', '±0.13D for powers under 6.00D', 'Lensometer measurement'],
              ['Cylinder Power', '±0.13D for powers under 2.00D', 'Lensometer measurement'],
              ['Cylinder Axis', '±5° for cylinders 0.25-0.50D', 'Lensometer measurement'],
              ['Prism', '±0.33Δ (≤2.00Δ) or 0.67Δ (>2.00Δ)', 'Lensometer measurement'],
              ['Optical Center', '±1.0mm (Single Vision), ±2.5mm (Multifocal)', 'Layout marker, centering device'],
              ['Segment Height', '±1.0mm', 'Millimeter rule, height gauge']
            ],
            caption: 'Sample ANSI Z80.1 tolerances for finished spectacle lenses'
          }
        },
        {
          id: 'verification-tools',
          type: 'list',
          content: {
            title: 'Essential Verification Tools:',
            items: [
              'Lensometer (manual or automatic)',
              'Lens clock (for base curve verification)',
              'Thickness gauge (for edge and center thickness)',
              'PD meter or ruler',
              'Frame adjustment tools',
              'Polariscope (for stress detection)',
              'Power cross marking device (for progressive verification)'
            ],
            ordered: false
          }
        },
        {
          id: 'verification-checklist',
          type: 'list',
          content: {
            title: 'Final Verification Checklist:',
            items: [
              'Lens power (sphere, cylinder, axis) within tolerances',
              'Prism power and orientation (if prescribed)',
              'Optical center placement relative to pupillary centers',
              'Segment height and alignment (for multifocals)',
              'Progressive corridor alignment',
              'Frame alignment and fit',
              'Lens thickness and edge profile',
              'Surface quality (scratches, defects, coating quality)',
              'Proper mounting and tension'
            ],
            ordered: true
          }
        },
        {
          id: 'common-errors',
          type: 'table',
          content: {
            headers: ['Error', 'Potential Cause', 'Remedy'],
            rows: [
              ['Incorrect power', 'Wrong lens blank, lensometer error', 'Verify against Rx, remake if necessary'],
              ['Axis error', 'Incorrect layout, block rotation', 'Re-verify Rx, remake with careful layout'],
              ['Incorrect OC placement', 'Calculation error, layout error', 'Recalculate decentration, remake'],
              ['Poor lens mounting', 'Improper technique, poor fit', 'Remount properly or adjust frame'],
              ['Lens surface defects', 'Handling issues, contamination', 'Replace lens if defects are significant'],
              ['Edge defects', 'Edger issues, poor technique', 'Polish edges or remake as needed']
            ],
            caption: 'Common fabrication errors, causes, and remedies'
          }
        },
        {
          id: 'inspection-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Final Inspection Technique',
            text: 'Hold finished eyewear under good lighting and inspect from multiple angles. Check against a white background to spot defects, smudges, or scratches. Verify alignment by placing on a flat surface and checking for rocking or misalignment.'
          }
        }
      ]
    },
    {
      id: 'tools-equipment',
      title: 'Laboratory Tools and Equipment',
      type: 'main',
      content: [
        {
          id: 'tools-intro',
          type: 'paragraph',
          content: {
            text: 'Modern optical laboratories utilize a variety of specialized tools and equipment for lens fabrication, verification, and finishing. Understanding the proper use, maintenance, and calibration of these tools is essential for producing quality eyewear.'
          }
        },
        {
          id: 'primary-equipment',
          type: 'table',
          content: {
            headers: ['Equipment', 'Purpose', 'Maintenance Requirements'],
            rows: [
              ['Lensometer/Focimeter', 'Measure lens power and orientation', 'Regular calibration, clean eyepiece and stage'],
              ['Edger', 'Cut and shape lenses to fit frames', 'Regular blade replacement, calibration, lubrication'],
              ['Tracer', 'Digitize frame shape dimensions', 'Stylus check, calibration, clean tracing mechanism'],
              ['Blocker', 'Attach block to lens for edging', 'Clean blocking pads, verify alignment accuracy'],
              ['Pattern Maker', 'Create physical patterns for edging', 'Verify scales, maintain cutting components'],
              ['Lens Drill', 'Create holes for rimless mounts', 'Regular bit replacement, cooling system maintenance']
            ],
            caption: 'Primary laboratory equipment and maintenance requirements'
          }
        },
        {
          id: 'hand-tools',
          type: 'list',
          content: {
            title: 'Essential Hand Tools:',
            items: [
              'Screwdrivers (various sizes and types)',
              'Pliers (snipe nose, flat nose, adjusting)',
              'Frame warmers (for plastic frame adjustment)',
              'Lens marking pens and devices',
              'Calipers and thickness gauges',
              'Lens clocks (for measuring base curve)',
              'Pupillometers and PD rulers',
              'Frame adjustment tools'
            ],
            ordered: false
          }
        },
        {
          id: 'equipment-technology',
          type: 'paragraph',
          content: {
            text: 'Modern laboratory equipment has evolved from manual to automated digital systems. Contemporary edgers can read frame tracings directly, calculate optimal lens placement, and execute precise cuts with minimal human intervention. Digital surfacing equipment can create complex free-form progressive lenses that were impossible with traditional methods.'
          }
        },
        {
          id: 'equipment-maintenance',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Equipment Maintenance',
            text: 'Establish a regular maintenance schedule for all laboratory equipment. Keep maintenance logs, perform daily cleaning procedures, and schedule professional calibration at recommended intervals. Well-maintained equipment produces better quality and has a longer service life.'
          }
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting Fabrication Issues',
      type: 'summary',
      content: [
        {
          id: 'troubleshooting-intro',
          type: 'paragraph',
          content: {
            text: 'Even with proper techniques and equipment, issues can arise during the fabrication process. Effective troubleshooting requires identifying the problem, determining its cause, and implementing appropriate corrective actions.'
          }
        },
        {
          id: 'common-problems',
          type: 'table',
          content: {
            headers: ['Problem', 'Possible Causes', 'Solutions'],
            rows: [
              ['Lens Chipping', 'Dull cutting wheel, excessive pressure, improper cooling', 'Replace wheel, adjust cutting parameters, ensure proper cooling'],
              ['Poor Bevel Placement', 'Incorrect settings, lens thickness issues', 'Adjust bevel placement settings, consider manual edging for extreme lenses'],
              ['Size Inaccuracy', 'Tracer calibration issues, pattern problems', 'Recalibrate tracer, verify pattern accuracy, check edger calibration'],
              ['Optical Misalignment', 'Layout errors, block slippage', 'Improve blocking technique, verify layout accuracy'],
              ['Surface Defects', 'Contamination, handling issues', 'Improve clean room conditions, use proper handling techniques'],
              ['Frame Mounting Issues', 'Incorrect lens shape, excessive tension', 'Verify shape accuracy, adjust edging parameters, modify mounting technique']
            ],
            caption: 'Common fabrication problems and solutions'
          }
        },
        {
          id: 'problem-analysis',
          type: 'list',
          content: {
            title: 'Systematic Problem-Solving Approach:',
            items: [
              'Identify and document the specific issue',
              'Determine at which stage of fabrication the problem occurred',
              'Check equipment calibration and settings',
              'Review process steps for deviations from standard procedure',
              'Implement corrective action',
              'Verify the solution worked through quality checks',
              'Implement preventive measures to avoid recurrence'
            ],
            ordered: true
          }
        },
        {
          id: 'quality-improvement',
          type: 'paragraph',
          content: {
            text: 'Continuous quality improvement involves monitoring rejection rates, identifying recurring issues, and implementing process improvements. Track common problems and their solutions to develop best practices and training materials for laboratory staff.'
          }
        },
        {
          id: 'troubleshooting-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Maintaining a Reference Library',
            text: 'Keep a well-organized reference library of fabrication guides, equipment manuals, and troubleshooting solutions. Include sample images of common problems and their corrective actions to assist technicians in quickly resolving issues.'
          }
        }
      ]
    }
  ],
  summary: 'Laboratory procedures form the critical link between prescription and finished eyewear. Understanding lens fabrication processes, quality control standards, and equipment operation ensures that opticians can produce accurate, high-quality eyewear. From layout and blocking to edging, mounting, and final verification, each step requires attention to detail and adherence to established techniques. Proper use and maintenance of laboratory tools and equipment, along with effective troubleshooting skills, allow opticians to overcome fabrication challenges and consistently deliver eyewear that meets both optical requirements and quality standards.',
  practiceQuestions: [
    {
      question: 'According to ANSI Z80.1 standards, what is the acceptable tolerance for cylinder axis when the cylinder power is 0.75D?',
      options: [
        '±1°',
        '±3°',
        '±5°',
        '±7°'
      ],
      correctAnswer: 2,
      explanation: 'For cylinder powers between 0.25D and 0.50D, the ANSI Z80.1 tolerance is ±5° for axis. For cylinder powers over 0.50D up to 2.50D, the tolerance is ±3°.'
    },
    {
      question: 'Which of the following would be the most appropriate edge type for a high-minus lens in a metal frame?',
      options: [
        'Standard bevel',
        'Modified bevel (front)',
        'Modified bevel (back)',
        'Flat edge'
      ],
      correctAnswer: 1,
      explanation: 'A modified front bevel is most appropriate for high-minus lenses in metal frames. This placement positions the bevel toward the front surface of the lens, which helps minimize edge thickness and provides better cosmetic appearance while ensuring proper mounting in the frame groove.'
    },
    {
      question: 'What is the purpose of blocking in the lens fabrication process?',
      options: [
        'To prevent light from passing through the lens',
        'To attach a temporary holder to maintain lens position during edging',
        'To create a physical barrier around the lens edge',
        'To block certain wavelengths of light'
      ],
      correctAnswer: 1,
      explanation: 'Blocking is the process of attaching a temporary holder (block) to the lens blank to maintain proper orientation and position during the edging process. This ensures that the optical center or major reference point remains correctly positioned relative to the frame shape.'
    },
    {
      question: 'Which of the following lens materials typically requires the slowest cutting speed and most cooling during edging?',
      options: [
        'CR-39',
        'Trivex',
        'High-index plastic',
        'Glass'
      ],
      correctAnswer: 3,
      explanation: 'Glass lenses require the slowest cutting speed and most significant cooling during the edging process. Glass is more brittle than plastic materials and generates more heat during cutting, requiring careful handling to prevent chips, cracks, and excessive heat buildup.'
    },
    {
      question: 'What should be included in a final verification check of progressive lenses?',
      options: [
        'Only distance and reading powers',
        'Only fitting cross position relative to pupil',
        'Only verification of add power',
        'Distance power, add power, fitting cross position, and corridor alignment'
      ],
      correctAnswer: 3,
      explanation: 'A complete verification of progressive lenses must include checking the distance power, add power, proper positioning of the fitting cross relative to the pupil, and corridor alignment. All these elements are essential for proper progressive lens function and patient comfort.'
    }
  ]
}; 