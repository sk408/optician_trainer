import { TopicStudyContent } from '../../interfaces/StudyContent';
import { frameBasicsImages } from '../mediaAssets';

export const frameBasicsContent: TopicStudyContent = {
  topicId: 'frame-basics',
  title: 'Eyeglass Frame Basics',
  introduction: 'Selecting and fitting the right eyeglass frames is a fundamental skill for any optician. Think of frames as both the foundation of eyewear and the fashion statement your patients will wear every day. This module provides essential knowledge about frame types, materials, parts, and measurement standards that will help you guide patients toward frames that look good, feel comfortable, and work well with their prescriptions.',
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
            text: 'Understanding the parts of an eyeglass frame is essential for proper fitting, adjusting, and communicating with patients and colleagues. Just like learning the parts of a car helps you drive and maintain it, knowing frame components helps you work with eyewear effectively.'
          }
        },
        {
          id: 'anatomy-intro-2',
          type: 'paragraph',
          content: {
            text: 'Many beginners find frame terminology confusing because different manufacturers may use slightly different terms for the same parts. For example, you might hear "temples" called "arms" or "sides." Don\'t worry - we\'ll cover all the common terms used in the industry so you\'ll be prepared regardless of which terminology you encounter.'
          }
        },
        {
          id: 'frame-diagram',
          type: 'image',
          content: {
            src: frameBasicsImages.frameAnatomyDiagram.path,
            alt: 'Labeled diagram of eyeglass frame parts',
            caption: 'Main components of a standard eyeglass frame',
            width: '80%'
          }
        },
        {
          id: 'hands-on-learning',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Hands-On Learning Activity',
            text: 'Grab a pair of glasses and identify each part as you read about it. Physically touching and examining the components will help you memorize them much faster. If possible, compare different frame styles to see how the same components may look different across various designs.'
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
            definition: 'The main portion of the frame that holds the lenses, consisting of the eyewires/rims, bridge, and end pieces. Think of this as the "face" of the eyeglasses that you see when looking at someone head-on.',
            related: ['eyewire', 'bridge', 'end-pieces']
          }
        },
        {
          id: 'eyewire-def',
          type: 'definition',
          content: {
            term: 'Eyewire (or Rim)',
            definition: 'The part of the frame that surrounds and holds the lenses - like a picture frame around a picture. In semi-rimless frames, only part of the lens is surrounded; in rimless, there is no eyewire at all, just mounting points.',
            related: ['front', 'lens-groove']
          }
        },
        {
          id: 'bridge-def',
          type: 'definition',
          content: {
            term: 'Bridge',
            definition: 'The portion of the frame that crosses over the nose, connecting the two eyewires. This is like the central support of a bridge spanning between two sides. The bridge is crucial for comfort as it bears much of the frame\'s weight.',
            related: ['saddle-bridge', 'keyhole-bridge', 'nasal-pads']
          }
        },
        {
          id: 'bridge-types',
          type: 'paragraph',
          content: {
            text: 'There are different bridge styles that fit different nose shapes:'
          }
        },
        {
          id: 'bridge-types-list',
          type: 'list',
          content: {
            items: [
              'Saddle bridge: Sits directly on the nose without pads (common in plastic frames)',
              'Keyhole bridge: Has a keyhole-shaped opening that straddles the nose',
              'Adjustable bridge: Uses nose pads that can be positioned for comfort (common in metal frames)'
            ],
            ordered: false
          }
        },
        {
          id: 'endpiece-def',
          type: 'definition',
          content: {
            term: 'End Piece',
            definition: 'The outer part of the frame front where the temples attach to the front via hinges. These are like the "shoulders" of the frame where the "arms" (temples) connect.',
            related: ['hinge', 'temple']
          }
        },
        {
          id: 'temple-def',
          type: 'definition',
          content: {
            term: 'Temples',
            definition: 'The "arms" of the frame that extend from the front over the ears to help hold the frame in place. Also called sides or earpieces. These keep the glasses securely positioned on the face, like the sides of a headband.',
            related: ['temple-tip', 'skull-temple', 'cable-temple']
          }
        },
        {
          id: 'temple-types',
          type: 'paragraph',
          content: {
            text: 'Common temple styles include:'
          }
        },
        {
          id: 'temple-types-list',
          type: 'list',
          content: {
            items: [
              'Skull temples: Curve gently behind the ear (most common type)',
              'Library temples: Straight temples that don\'t curve behind the ear',
              'Cable temples: Wrap more securely around the ear (good for active wear or children)'
            ],
            ordered: false
          }
        },
        {
          id: 'temple-tip-def',
          type: 'definition',
          content: {
            term: 'Temple Tip',
            definition: 'The end portion of the temple that rests behind or on top of the ear, often covered with a plastic material for comfort. This part is crucial for comfort during all-day wear and can be adjusted to fit each patient\'s ear shape.',
            related: ['temple']
          }
        },
        {
          id: 'hinge-def',
          type: 'definition',
          content: {
            term: 'Hinge',
            definition: 'The movable joint connecting the temples to the frame front, allowing the temples to open and close. Like a door hinge, this component faces daily stress and is often where frames break if not properly maintained.',
            related: ['endpiece', 'spring-hinge']
          }
        },
        {
          id: 'hinge-types',
          type: 'paragraph',
          content: {
            text: 'There are two main types of hinges:'
          }
        },
        {
          id: 'hinge-types-list',
          type: 'list',
          content: {
            items: [
              'Standard hinges: Fixed hinges that open to a predetermined angle',
              'Spring hinges: Feature a spring mechanism allowing temples to flex outward beyond their normal stopping point (more durable and forgiving)'
            ],
            ordered: false
          }
        },
        {
          id: 'nose-pads-def',
          type: 'definition',
          content: {
            term: 'Nose Pads',
            definition: 'Small pads that rest on either side of the nose, helping to support the frame and distribute weight. Can be fixed (part of the frame) or adjustable (on movable arms). These are like the foundation of a house - they provide stability and comfort for the entire structure.',
            related: ['bridge', 'pad-arms']
          }
        },
        {
          id: 'common-misconceptions',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Common Misconceptions',
            text: 'Many beginners assume all frames have separate nose pads. In reality, plastic frames typically have an integrated bridge without separate pads. Another common confusion is thinking that all hinges work the same way - spring hinges and standard hinges require different adjustment techniques and have different durability characteristics.'
          }
        },
        {
          id: 'frame-parts-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Learning Frame Parts',
            text: 'To help remember frame parts, practice identifying them on your own glasses or frames in your dispensary. When handling frames, name each part mentally as you touch it. This hands-on approach helps build memory much faster than just reading about the components.'
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
            text: 'Frame materials significantly impact durability, weight, comfort, allergic reactions, adjustability, and style. Understanding the properties of different materials helps opticians recommend the best frames for each patient\'s needs, similar to how a home contractor might recommend different building materials based on climate and budget.'
          }
        },
        {
          id: 'materials-visual-guide',
          type: 'paragraph',
          content: {
            text: 'As a beginner, you might wonder how to tell different frame materials apart by looking at them. Here\'s a quick visual guide: Metal frames typically have a shiny or matte metallic appearance with separate nose pads, while plastic frames usually have thicker profiles, more color options, and integrated nose bridges. Titanium frames are often lighter in color with a distinctive matte finish, while acetate frames can have unique color patterns, layered effects, or translucent qualities.'
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
            text: 'Metal frames are known for their durability, thin profiles, and classic appearance. Different metals offer varying properties, just like different metals are chosen for specific purposes in other products (aluminum for lightweight items, titanium for strength, etc.):'
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
          id: 'metal-example-brands',
          type: 'paragraph',
          content: {
            text: 'Real-world examples you might encounter:'
          }
        },
        {
          id: 'metal-examples-list',
          type: 'list',
          content: {
            items: [
              'Titanium: Lindberg, Silhouette, and many Japanese brands like Kazuo Kawasaki',
              'Stainless Steel: Many Ray-Ban models, Flexon frames',
              'Aluminum: Specs of wood aluminum series, ic! berlin frames',
              'Monel: Found in many mid-priced frames from brands like Safilo and Marchon'
            ],
            ordered: false
          }
        },
        {
          id: 'metal-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Metal Allergies',
            text: 'Approximately 10-15% of people have nickel allergies, which can cause skin irritation where the frame contacts the face. For these patients, recommend hypoallergenic materials like titanium, stainless steel, or plastic frames. If a patient mentions that previous metal frames caused redness or irritation, this is often a sign of metal allergy.'
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
            text: 'Plastic frames offer versatility in colors, shapes, and styles. They tend to be lighter than metal frames and are typically hypoallergenic. Plastic frames have evolved significantly from the heavy materials of the past to today\'s lightweight, durable options.'
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
          id: 'plastic-example-brands',
          type: 'paragraph',
          content: {
            text: 'Real-world examples you might encounter:'
          }
        },
        {
          id: 'plastic-examples-list',
          type: 'list',
          content: {
            items: [
              'Acetate: Most luxury frames including Persol, Oliver Peoples, and high-end Prada models',
              'Propionate: Many moderately priced frames from brands like Luxottica and Safilo',
              'TR-90: Nike performance eyewear, many sports frames, and children\'s flexible frames',
              'Polyamide: Commonly used in Silhouette rimless frames and other high-end rimless designs'
            ],
            ordered: false
          }
        },
        {
          id: 'beginner-guide-to-identification',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Beginner\'s Guide to Material Identification',
            text: 'As you start working with frames, use these simple tests to identify materials: 1) Weight test - titanium and TR-90 are noticeably lighter than other materials, 2) Flexibility test - nylon frames can be gently twisted or flexed more than acetate, 3) Temperature test - metal frames feel cool to the touch initially, while plastic frames warm up quickly, 4) Look for acetate\'s distinctive layered patterns or "tortoise shell" effects that can\'t be achieved with injected plastics.'
          }
        },
        {
          id: 'material-selection-heading',
          type: 'heading',
          content: {
            text: 'Matching Materials to Patient Needs',
            level: 3
          }
        },
        {
          id: 'material-matching-list',
          type: 'list',
          content: {
            items: [
              'For children: Consider flexible materials (TR-90, propionate) that can withstand rough handling and have spring hinges',
              'For active adults: Lightweight, durable materials (titanium, TR-90) that maintain adjustment',
              'For those with skin sensitivities: Hypoallergenic materials (titanium, propionate, acetate)',
              'For fashion-conscious patients: Acetate frames with unique color patterns or distinctive metal designs',
              'For patients with strong prescriptions: Materials that can support thicker lenses (strong acetate or metal with reinforced eyewires)'
            ],
            ordered: false
          }
        },
        {
          id: 'material-selection-examples',
          type: 'paragraph',
          content: {
            text: 'Practical examples to help you understand material selection:'
          }
        },
        {
          id: 'material-selection-examples-list',
          type: 'list',
          content: {
            items: [
              'A 7-year-old who plays sports and frequently drops things would benefit from lightweight TR-90 frames with spring hinges and cable temples',
              'A business professional with a high prescription might prefer thin titanium frames to minimize bulk while providing sufficient strength',
              'A fashion-forward young adult with no prescription concerns might enjoy unique, colorful acetate frames with distinctive patterns',
              'A senior citizen might benefit from lightweight frames with easy-to-adjust nose pads and spring hinges for comfort and fit'
            ],
            ordered: false
          }
        },
        {
          id: 'material-feel-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Hands-On Learning',
            text: 'To understand frame materials better, handle various frames and notice their weight, flexibility, and temperature (metal frames feel cooler to the touch than plastic). This tactile knowledge will help you explain differences to patients who often make decisions based on how frames feel as much as how they look.'
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
          id: 'measurements-importance',
          type: 'paragraph',
          content: {
            text: 'For beginners, understanding frame measurements can seem overwhelming, but it\'s actually a straightforward numbering system. Think of it like clothing sizes - just as you wouldn\'t put a size XL shirt on a small child, you wouldn\'t put a frame that\'s too large or small on a patient. Proper measurements ensure comfort, appearance, and optimal lens performance.'
          }
        },
        {
          id: 'measurement-diagram',
          type: 'image',
          content: {
            src: frameBasicsImages.frameMeasurementsDiagram.path,
            alt: 'Diagram showing standard frame measurements',
            caption: 'Standard frame measurement locations and notation',
            width: '80%'
          }
        },
        {
          id: 'measurement-location',
          type: 'paragraph',
          content: {
            text: 'Where to find measurements: Look on the inside of the temple (arm) of the frame. Measurements are typically printed or etched and might look like "52□18-140" or "54-16-145" or similar combinations of numbers.'
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
          id: 'eye-size-example',
          type: 'paragraph',
          content: {
            text: 'Common adult eye sizes range from about 46mm (small) to 58mm (large). For comparison, 52mm is approximately the width of a standard business card folded in half. Your thumb is approximately 25mm wide, so two thumb widths is about 50mm.'
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
          id: 'bridge-size-example',
          type: 'paragraph',
          content: {
            text: 'Common bridge sizes range from 14mm (narrow) to 24mm (wide). A standard paper clip is about 1mm thick - so imagine about 18 paper clips stacked side by side to visualize an 18mm bridge.'
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
          id: 'temple-length-example',
          type: 'paragraph',
          content: {
            text: 'For reference, 140mm is about 5.5 inches, roughly the width of a standard smartphone or the length of a credit card plus about 1.5 inches.'
          }
        },
        {
          id: 'how-to-read-heading',
          type: 'heading',
          content: {
            text: 'How to Read Frame Measurements',
            level: 3
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
          id: 'measurement-variations',
          type: 'paragraph',
          content: {
            text: 'You might see variations in how measurements are written. Some common formats include:'
          }
        },
        {
          id: 'measurement-variations-list',
          type: 'list',
          content: {
            items: [
              '52-18-140 (using dashes)',
              '52□18-140 (using a square symbol between eye size and bridge)',
              '52/18/140 (using slashes)',
              'Sometimes only two numbers are shown (52-18) with the temple length omitted'
            ],
            ordered: false
          }
        },
        {
          id: 'measurement-practice',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Practice Activity',
            text: 'Find several different frames and locate their measurements. Try to identify which frames have larger eye sizes or bridge sizes just by looking at them, then check the measurements to see if you were right. This will help train your eye to estimate sizes visually.'
          }
        },
        {
          id: 'common-mistakes',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Common Beginner Mistakes',
            text: 'Mistake #1: Confusing the first and second numbers (eye size vs. bridge size). Remember: the first number is always the largest of the two.\nMistake #2: Assuming all frames with the same eye size will look the same size. The overall width and shape can make frames appear different even with identical measurements.\nMistake #3: Forgetting that frame sizes are in millimeters, not inches or centimeters.'
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
          id: 'b-measurement-importance',
          type: 'paragraph',
          content: {
            text: 'The B measurement is particularly important when fitting progressive lenses, which require a minimum height (typically at least 28-30mm) to accommodate the different viewing zones. Think of it like needing a minimum size canvas to fit a complete painting - too small, and parts of the image must be cut off.'
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
          id: 'total-width-example',
          type: 'paragraph',
          content: {
            text: 'You can estimate the total frame width by adding the eye size twice, plus the bridge size, plus about 6-10mm for the endpieces (e.g., for a 52-18 frame: 52 + 52 + 18 + 8 = 130mm total width).'
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
          id: 'pantoscopic-visualized',
          type: 'paragraph',
          content: {
            text: 'To visualize pantoscopic tilt, imagine looking at someone from the side. A frame with proper pantoscopic tilt would have the bottom of the lenses closer to their face than the top. This positioning improves vision by aligning the lenses more perpendicular to the wearer\'s line of sight when looking straight ahead.'
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
  summary: 'Eyeglass frames have distinct components - the front holding the lenses and temples extending to the ears. Key measurements include eye size, bridge width, and temple length, shown as numbers like 52-18-140mm on frames. Materials range from lightweight plastics to durable metals, each with advantages for different needs. Frames must balance fitting points: ears, nose bridge, and cheeks, with proper pantoscopic tilt. Frame selection should consider face shape, prescription needs, lifestyle, and personal style, while adjustments ensure comfort and optical performance. Understanding these basics allows opticians to help patients choose frames that fit well, support their prescription requirements, and match their preferences and daily activities.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2016). The Principles of Ophthalmic Lenses (5th ed.). Association of British Dispensing Opticians.',
    'American Board of Opticianry. (2023). Frame Selection and Design Reference Guide.'
  ],
  practiceQuestions: [
    {
      question: 'What does the first number in frame measurements (e.g., 52-18-140) represent?',
      options: [
        'Bridge width',
        'Eye size/lens diameter',
        'Temple length',
        'Frame width'
      ],
      correctAnswer: 1,
      explanation: 'The first number (52 in this example) represents the eye size or lens diameter, measured horizontally in millimeters. This is the width of each lens at its widest point.'
    },
    {
      question: 'Which frame material is best for patients with nickel allergies?',
      options: [
        'Monel',
        'Stainless steel',
        'Titanium',
        'Nickel silver'
      ],
      correctAnswer: 2,
      explanation: 'Titanium is hypoallergenic and ideal for patients with nickel allergies. Monel and nickel silver contain nickel, which can cause allergic reactions in sensitive individuals. While some stainless steel is nickel-free, many stainless alloys do contain nickel.'
    },
    {
      question: 'What term describes the downward angle of a frame front relative to the horizontal plane?',
      options: [
        'Face form angle',
        'Pantoscopic tilt',
        'Retroscopic tilt',
        'Bridge angle'
      ],
      correctAnswer: 1,
      explanation: 'Pantoscopic tilt refers to the downward angle of the frame front relative to the horizontal plane. This tilt brings the lower portion of the lenses closer to the face, optimizing the optical performance.'
    },
    {
      question: 'Which face shape is best complemented by rectangular frames?',
      options: [
        'Square face',
        'Rectangle face',
        'Round face',
        'Heart-shaped face'
      ],
      correctAnswer: 2,
      explanation: 'Rectangular frames complement round faces by adding definition and angles that contrast with the soft curves of a round face. The angular lines help create the illusion of a thinner, more defined facial structure.'
    },
    {
      question: 'What is the purpose of the endpiece on an eyeglass frame?',
      options: [
        'To connect the temple to the frame front',
        'To adjust the pantoscopic tilt',
        'To hold nose pads',
        'To provide weight distribution'
      ],
      correctAnswer: 0,
      explanation: 'The endpiece is the part of the frame that connects the temple to the frame front. It houses the hinge mechanism and provides structural support at this critical junction of the frame.'
    },
    {
      question: 'Why are zyl (acetate) frames often preferred for fashion eyewear?',
      options: [
        'They are more durable than metal frames',
        'They are available in various colors and patterns',
        'They are the lightest material option',
        'They are the most cost-effective'
      ],
      correctAnswer: 1,
      explanation: 'Zyl (cellulose acetate) frames are popular for fashion eyewear because they can be produced in virtually unlimited colors, patterns, and textures. The material can be layered to create unique designs and offers excellent design versatility.'
    },
    {
      question: 'What should be considered when fitting high-powered lenses?',
      options: [
        'Small frames are generally better',
        'Metal frames are always preferred',
        'Frame color should match eye color',
        'Large frames minimize lens thickness'
      ],
      correctAnswer: 0,
      explanation: 'For high-powered prescriptions, smaller frames are generally better because they minimize lens thickness and weight. The smaller lens area requires less material and produces less edge thickness for minus lenses or center thickness for plus lenses.'
    },
    {
      question: 'What is the DBL measurement?',
      options: [
        'Distance between lenses',
        'The diagonal box length',
        'The distance between temples',
        'The depth below lens'
      ],
      correctAnswer: 0,
      explanation: 'DBL stands for Distance Between Lenses, which measures the space between the two lenses at their closest points. This is different from the bridge size, which measures the length of the bridge component itself.'
    },
    {
      question: 'Which part of the frame is most likely to need adjustment for a frame sliding down the nose?',
      options: [
        'Temple length',
        'Nose pads or bridge',
        'Endpiece',
        'Frame front'
      ],
      correctAnswer: 1,
      explanation: 'If a frame is sliding down the nose, adjusting the nose pads (on metal frames) or the bridge area (on plastic frames) is typically needed. For metal frames, the nose pads can be moved closer together; for plastic frames, the bridge may need to be heated and adjusted for a better fit.'
    },
    {
      question: 'What frame feature is most important for patients who frequently remove their glasses?',
      options: [
        'Spring hinges',
        'Adjustable nose pads',
        'Lightweight material',
        'Rimless design'
      ],
      correctAnswer: 0,
      explanation: 'Spring hinges provide flexibility and durability for patients who frequently remove their glasses. The spring mechanism allows the temples to flex outward beyond the normal stopping point, reducing stress on the frame and minimizing the need for readjustment.'
    }
  ]
}; 