import { TopicStudyContent } from '../../interfaces/StudyContent';

export const frameBasicsContent: TopicStudyContent = {
  topicId: 'frame-basics',
  title: 'Eyeglass Frame Basics',
  introduction: 'Selecting and fitting the right eyeglass frames is a fundamental skill for any optician. This module provides essential knowledge about frame types, materials, parts, and measurement standards that form the foundation of proper eyewear dispensing.',
  objectives: [
    'Identify the main components of eyeglass frames',
    'Distinguish between different frame materials and their properties',
    'Understand standard frame measurements and sizing',
    'Learn basic frame adjustment techniques',
    'Know how to select appropriate frames based on prescription needs',
    'Recognize quality indicators in frame construction'
  ],
  sections: [
    {
      id: 'frame-anatomy',
      title: 'Frame Anatomy and Terminology',
      type: 'introduction',
      content: [
        {
          id: 'anatomy-intro',
          type: 'paragraph',
          content: {
            text: 'Understanding the parts of an eyeglass frame is essential for proper fitting, adjusting, and communicating with patients and colleagues.'
          }
        },
        {
          id: 'frame-diagram',
          type: 'image',
          content: {
            src: '/assets/images/study/frame-anatomy-diagram.jpg',
            alt: 'Labeled diagram of eyeglass frame parts',
            caption: 'Main components of a standard eyeglass frame',
            width: '80%'
          }
        },
        {
          id: 'frame-components-heading',
          type: 'heading',
          content: {
            text: 'Major Frame Components',
            level: 3
          }
        },
        {
          id: 'front-def',
          type: 'definition',
          content: {
            term: 'Front (or Chassis)',
            definition: 'The main portion of the frame that holds the lenses, consisting of the eyewires/rims, bridge, and end pieces.',
            related: ['eyewire', 'bridge', 'end-pieces']
          }
        },
        {
          id: 'eyewire-def',
          type: 'definition',
          content: {
            term: 'Eyewire (or Rim)',
            definition: 'The part of the frame that surrounds and holds the lenses. In semi-rimless frames, only part of the lens is surrounded; in rimless, there is no eyewire.',
            related: ['front', 'lens-groove']
          }
        },
        {
          id: 'bridge-def',
          type: 'definition',
          content: {
            term: 'Bridge',
            definition: 'The portion of the frame that crosses over the nose, connecting the two eyewires.',
            related: ['saddle-bridge', 'keyhole-bridge', 'nasal-pads']
          }
        },
        {
          id: 'endpiece-def',
          type: 'definition',
          content: {
            term: 'End Piece',
            definition: 'The outer part of the frame front where the temples attach to the front via hinges.',
            related: ['hinge', 'temple']
          }
        },
        {
          id: 'temple-def',
          type: 'definition',
          content: {
            term: 'Temples',
            definition: 'The "arms" of the frame that extend from the front over the ears to help hold the frame in place. Also called sides or earpieces.',
            related: ['temple-tip', 'skull-temple', 'cable-temple']
          }
        },
        {
          id: 'temple-tip-def',
          type: 'definition',
          content: {
            term: 'Temple Tip',
            definition: 'The end portion of the temple that rests behind or on top of the ear, often covered with a plastic material for comfort.',
            related: ['temple']
          }
        },
        {
          id: 'hinge-def',
          type: 'definition',
          content: {
            term: 'Hinge',
            definition: 'The movable joint connecting the temples to the frame front, allowing the temples to open and close.',
            related: ['endpiece', 'spring-hinge']
          }
        },
        {
          id: 'nose-pads-def',
          type: 'definition',
          content: {
            term: 'Nose Pads',
            definition: 'Small pads that rest on either side of the nose, helping to support the frame and distribute weight. Can be fixed or adjustable.',
            related: ['bridge', 'pad-arms']
          }
        }
      ]
    },
    {
      id: 'frame-materials',
      title: 'Frame Materials',
      type: 'main',
      content: [
        {
          id: 'materials-intro',
          type: 'paragraph',
          content: {
            text: 'Frame materials significantly impact durability, weight, comfort, allergic reactions, adjustability, and style. Understanding the properties of different materials helps opticians recommend the best frames for each patient\'s needs.'
          }
        },
        {
          id: 'material-categories-heading',
          type: 'heading',
          content: {
            text: 'Metal Frames',
            level: 3
          }
        },
        {
          id: 'metal-intro',
          type: 'paragraph',
          content: {
            text: 'Metal frames are known for their durability, thin profiles, and classic appearance. Different metals offer varying properties:'
          }
        },
        {
          id: 'metal-frames-table',
          type: 'table',
          content: {
            headers: ['Metal Type', 'Characteristics', 'Best For', 'Considerations'],
            rows: [
              ['Monel', 'Nickel-copper alloy, highly malleable', 'General use, cost-effective', 'May cause allergic reactions in some people'],
              ['Titanium', 'Lightweight, strong, corrosion-resistant', 'Active lifestyles, sensitivity to metals', 'More expensive, limited color options'],
              ['Stainless Steel', 'Durable, corrosion-resistant, affordable', 'Everyday wear, value-conscious patients', 'Heavier than titanium, less adjustable'],
              ['Beryllium', 'Resistant to corrosion, maintains adjustment well', 'High-salt environments (coastal areas)', 'Similar to titanium but more affordable'],
              ['Aluminum', 'Very lightweight, available in many colors', 'Fashion-forward lightweight options', 'Can be less durable than other metals']
            ],
            caption: 'Common metal frame materials and their properties'
          }
        },
        {
          id: 'metal-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Metal Allergies',
            text: 'Approximately 10-15% of people have nickel allergies. For these patients, recommend hypoallergenic materials like titanium, stainless steel, or plastic frames.'
          }
        },
        {
          id: 'plastic-heading',
          type: 'heading',
          content: {
            text: 'Plastic Frames',
            level: 3
          }
        },
        {
          id: 'plastic-intro',
          type: 'paragraph',
          content: {
            text: 'Plastic frames offer versatility in colors, shapes, and styles. They tend to be lighter than metal frames and are typically hypoallergenic.'
          }
        },
        {
          id: 'plastic-frames-table',
          type: 'table',
          content: {
            headers: ['Plastic Type', 'Characteristics', 'Best For', 'Considerations'],
            rows: [
              ['Zylonite/Acetate', 'Natural material, rich colors, glossy finish', 'Fashion-forward styles, comfort', 'Can become brittle with age and sun exposure'],
              ['Propionate', 'Lightweight, flexible, hypoallergenic', 'Sensitivity concerns, children', 'Less color options than acetate'],
              ['TR-90 (Nylon)', 'Extremely flexible and lightweight', 'Sports, children, active adults', 'Limited color options'],
              ['Optyl', 'Heat-adjustable, holds adjustments well', 'Custom fitting needs', 'Requires special adjustment techniques'],
              ['Polyamide', 'Strong, flexible, lightweight', 'Rimless and semi-rimless styles', 'Higher cost than basic plastics']
            ],
            caption: 'Common plastic frame materials and their properties'
          }
        },
        {
          id: 'mixed-material-heading',
          type: 'heading',
          content: {
            text: 'Combination Frames',
            level: 3
          }
        },
        {
          id: 'combination-para',
          type: 'paragraph',
          content: {
            text: 'Combination frames feature both metal and plastic components. Typically, they have metal chassis (frame fronts) with plastic temples or plastic fronts with metal temples. These frames combine the aesthetic features and functional benefits of both materials.'
          }
        },
        {
          id: 'material-selection-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Selecting Materials for Patients',
            text: 'When recommending frame materials, consider the patient\'s lifestyle, prescription strength, allergies, and previous experience with eyewear. High prescriptions may benefit from lightweight materials like titanium or TR-90.'
          }
        }
      ]
    },
    {
      id: 'frame-measurements',
      title: 'Frame Measurements and Sizing',
      type: 'main',
      content: [
        {
          id: 'measurements-intro',
          type: 'paragraph',
          content: {
            text: 'Accurate frame measurements are essential for properly fitting eyewear. Standard measurements appear on the inside of the temple and follow a consistent format.'
          }
        },
        {
          id: 'measurement-diagram',
          type: 'image',
          content: {
            src: '/assets/images/study/frame-measurements-diagram.jpg',
            alt: 'Diagram showing standard frame measurements',
            caption: 'Standard frame measurement locations and notation',
            width: '80%'
          }
        },
        {
          id: 'standard-measurements-heading',
          type: 'heading',
          content: {
            text: 'Standard Frame Measurements',
            level: 3
          }
        },
        {
          id: 'eye-size-def',
          type: 'definition',
          content: {
            term: 'Eye Size (Lens Diameter)',
            definition: 'The horizontal width of the lens/eyewire, typically measured in millimeters (e.g., 52mm).',
            related: ['a-measurement', 'frame-size']
          }
        },
        {
          id: 'bridge-size-def',
          type: 'definition',
          content: {
            term: 'Bridge Size (DBL)',
            definition: 'The distance between the lenses, measured from the closest points of each eyewire (e.g., 18mm).',
            related: ['bridge', 'frame-pd']
          }
        },
        {
          id: 'temple-length-def',
          type: 'definition',
          content: {
            term: 'Temple Length',
            definition: 'The length of the temples from hinge to tip, typically 135mm, 140mm, or 145mm for adults.',
            related: ['temple', 'comfort-cable']
          }
        },
        {
          id: 'frame-notation-para',
          type: 'paragraph',
          content: {
            text: 'Frame measurements are typically written as three numbers separated by dashes or squares. For example, 52□18-140 means:'
          }
        },
        {
          id: 'notation-list',
          type: 'list',
          content: {
            items: [
              '52 = eye size (lens width) in millimeters',
              '18 = bridge size in millimeters',
              '140 = temple length in millimeters'
            ],
            ordered: false
          }
        },
        {
          id: 'additional-measurements-heading',
          type: 'heading',
          content: {
            text: 'Additional Measurements',
            level: 3
          }
        },
        {
          id: 'vertical-height-def',
          type: 'definition',
          content: {
            term: 'B Measurement (Lens Height)',
            definition: 'The vertical height of the lens/eyewire, measured at the widest point.',
            related: ['a-measurement', 'progressive-lenses']
          }
        },
        {
          id: 'ed-def',
          type: 'definition',
          content: {
            term: 'Effective Diameter (ED)',
            definition: 'The average of the lens width and height, used for calculating lens blank sizes.',
            related: ['minimum-blank-size', 'lens-ordering']
          }
        },
        {
          id: 'total-width-def',
          type: 'definition',
          content: {
            term: 'Total Frame Width',
            definition: 'The distance from the outermost point of one endpiece to the other, indicating overall frame size.',
            related: ['frame-size', 'face-width']
          }
        },
        {
          id: 'pantoscopic-tilt-def',
          type: 'definition',
          content: {
            term: 'Pantoscopic Tilt',
            definition: 'The angle of the front of the frame relative to vertical, typically 8-12 degrees with the bottom tilted toward the face.',
            related: ['fitting', 'vertex-distance']
          }
        },
        {
          id: 'face-width-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Matching Frame Size to Face Size',
            text: 'The total frame width should generally match the width of the patient\'s face. For proper fit, the frame should not extend beyond the sides of the face or press against the temples.'
          }
        }
      ]
    },
    {
      id: 'frame-selection',
      title: 'Basic Frame Selection Principles',
      type: 'clinical',
      content: [
        {
          id: 'selection-intro',
          type: 'paragraph',
          content: {
            text: 'Selecting appropriate frames involves considering prescription requirements, patient features, lifestyle needs, and personal style preferences.'
          }
        },
        {
          id: 'prescription-considerations-heading',
          type: 'heading',
          content: {
            text: 'Prescription Considerations',
            level: 3
          }
        },
        {
          id: 'prescription-table',
          type: 'table',
          content: {
            headers: ['Prescription Type', 'Recommended Frame Features', 'Frames to Avoid'],
            rows: [
              ['High Minus (Nearsighted)', 'Smaller eye size, thicker rims, high-index materials', 'Large frames, rimless designs, thin metal frames'],
              ['High Plus (Farsighted)', 'Smaller frames, thicker materials, well-centered PD', 'Very small frames, frameless designs, thin rims'],
              ['High Cylinder (Astigmatism)', 'Strong, stable frame materials, properly aligned', 'Flexible frames, highly adjustable styles'],
              ['Bifocals/Progressives', 'Adequate B-measurement (min. 30mm for progressives)', 'Very small frames, narrow B-measurement designs']
            ],
            caption: 'Frame selection guidelines based on prescription type'
          }
        },
        {
          id: 'face-shape-heading',
          type: 'heading',
          content: {
            text: 'Face Shape Considerations',
            level: 3
          }
        },
        {
          id: 'face-shape-para',
          type: 'paragraph',
          content: {
            text: 'While personal style should always be prioritized, understanding face shapes can help guide frame selection to achieve balanced proportions.'
          }
        },
        {
          id: 'face-shape-list',
          type: 'list',
          content: {
            items: [
              'Oval Face: Most frame shapes work well; maintain balanced proportions',
              'Round Face: Angular or rectangular frames can add definition',
              'Square Face: Rounded or oval frames can soften angular features',
              'Heart-shaped Face: Frames wider at the bottom can balance a narrower chin',
              'Diamond Face: Frames with detailing or distinctive browlines work well',
              'Rectangular Face: Deeper frames can create balance with a longer face'
            ],
            ordered: false
          }
        },
        {
          id: 'lifestyle-heading',
          type: 'heading',
          content: {
            text: 'Lifestyle Factors',
            level: 3
          }
        },
        {
          id: 'lifestyle-para',
          type: 'paragraph',
          content: {
            text: 'A patient\'s daily activities, work environment, and hobbies should influence frame recommendations:'
          }
        },
        {
          id: 'lifestyle-list',
          type: 'list',
          content: {
            items: [
              'Active/Sports: Durable materials like TR-90, rubber temples, spring hinges',
              'Office/Computer Work: Anti-glare coatings, comfortable nose pads, possibly blue light filtering',
              'Multiple Pairs: Different frames for different activities (work, driving, sports)',
              'Children: Durable, flexible materials, adjustable nose pads, spring hinges',
              'Seniors: Lightweight frames, easy-to-handle designs, possibly magnetic clips'
            ],
            ordered: false
          }
        },
        {
          id: 'selection-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Patient-Centered Approach',
            text: 'While guidelines are helpful, always prioritize the patient\'s comfort, preferences, and specific needs. The best frame is one the patient will happily wear consistently.'
          }
        }
      ]
    },
    {
      id: 'basic-adjustments',
      title: 'Basic Frame Adjustment Principles',
      type: 'summary',
      content: [
        {
          id: 'adjustment-intro',
          type: 'paragraph',
          content: {
            text: 'Proper frame adjustment ensures comfort, fit, and optimal optical performance. Beginning opticians should understand basic adjustment principles before attempting hands-on adjustments.'
          }
        },
        {
          id: 'adjustment-goals-list',
          type: 'list',
          content: {
            items: [
              'Align frames symmetrically on the face',
              'Position lenses at the correct height relative to the pupils',
              'Ensure comfort at all contact points (nose, ears, temples)',
              'Maintain appropriate vertex distance (distance from eye to lens)',
              'Position the frame to follow facial contours naturally',
              'Eliminate pressure points that can cause discomfort'
            ],
            ordered: false
          }
        },
        {
          id: 'adjustment-tools-heading',
          type: 'heading',
          content: {
            text: 'Basic Adjustment Tools',
            level: 3
          }
        },
        {
          id: 'tools-list',
          type: 'list',
          content: {
            items: [
              'Frame heater/warmer (for plastic frames)',
              'Pliers with nylon-coated jaws (to prevent scratching)',
              'Screwdrivers in various sizes',
              'Pad arms adjustment tools',
              'Microfiber cloths for handling frames'
            ],
            ordered: false
          }
        },
        {
          id: 'adjustment-safety-callout',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Adjustment Safety',
            text: 'Frame adjustments should only be performed after proper training. Improper techniques can damage frames or even break them. Practice on discontinued frames before adjusting patients\' eyewear.'
          }
        },
        {
          id: 'common-adjustments-heading',
          type: 'heading',
          content: {
            text: 'Common Adjustment Areas',
            level: 3
          }
        },
        {
          id: 'common-adjustments-list',
          type: 'list',
          content: {
            items: [
              'Temple bend: Controls overall frame alignment and level',
              'Pantoscopic tilt: Adjusts the vertical angle of the frame front',
              'Nose pad positioning: Affects frame height and comfort',
              'Temple spread: Controls the tension of the frame sides on the head',
              'Temple contour: Ensures proper fit behind the ears'
            ],
            ordered: false
          }
        },
        {
          id: 'frame-standards-para',
          type: 'paragraph',
          content: {
            text: 'A properly adjusted frame should sit level on the face, with lenses positioned so the patient looks through the optical center or the correctly measured fitting cross. The frame should be stable but not tight, with weight distributed evenly between the nose and ears.'
          }
        }
      ]
    }
  ],
  summary: 'Eyeglass frames consist of various components including the front (eyewires, bridge, and end pieces) and temples, available in diverse materials like metals (titanium, stainless steel) and plastics (acetate, TR-90). Standard frame measurements include eye size, bridge width, and temple length, typically written as three numbers (e.g., 52□18-140). When selecting frames, consider the patient\'s prescription requirements, face shape, lifestyle needs, and personal preferences. Higher prescriptions generally benefit from smaller eye sizes and sturdier materials. Basic frame adjustments focus on ensuring symmetry, proper lens positioning, and comfort at all contact points. Understanding these fundamentals enables beginning opticians to properly select, fit, and adjust frames for optimal patient satisfaction.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2016). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Obstfeld, H. (1997). Spectacle Frames and their Dispensing. W.B. Saunders Company Ltd.',
    'American Board of Opticianry. (2021). Frame Dispensing and Adjustment Practical Examination Guide.'
  ]
}; 