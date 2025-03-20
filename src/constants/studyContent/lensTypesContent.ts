import { TopicStudyContent } from '../../interfaces/StudyContent';
import { lensImages } from '../mediaAssets';

export const lensTypesContent: TopicStudyContent = {
  topicId: 'lens-types',
  title: 'Types of Lenses',
  introduction: 'Understanding ophthalmic lenses is like learning the alphabet before reading - it\'s a fundamental skill every optician needs. Each lens type serves a specific purpose in correcting vision problems. This module will help you identify different lens types, understand how they work, and know when to use them. We\'ll use simple, everyday examples to make these concepts easy to grasp, even if you\'re new to optics.',
  objectives: [
    'Differentiate between convex (plus) and concave (minus) lenses using simple visual cues',
    'Explain the optical properties of spherical and cylindrical lenses in everyday terms',
    'Connect specific lens types to the vision problems they correct',
    'Master essential terminology used to describe different lens types',
    'Recognize how lens shape affects optical power and vision correction',
    'Interpret basic eyeglass prescriptions correctly',
    'Identify common misconceptions about lens types and their applications'
  ],
  sections: [
    {
      id: 'lens-basics',
      title: 'Lens Fundamentals',
      type: 'introduction',
      content: [
        {
          id: 'lens-def',
          type: 'definition',
          content: {
            term: 'Lens',
            definition: 'A transparent optical device with curved surfaces that focuses or disperses light rays. Think of a lens as a tool that bends light in a predictable, controlled way.',
            related: ['Optics', 'Refraction']
          }
        },
        {
          id: 'lens-intro',
          type: 'paragraph',
          content: {
            text: 'Lenses work by refracting (bending) light rays. This is similar to how a straw appears bent when placed in a glass of water - the light bends as it passes from air to water, creating an optical illusion. In eyeglasses, we use this bending property purposefully to redirect light to the correct focal point on the retina.'
          }
        },
        {
          id: 'lens-everyday',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Lenses in Everyday Life',
            text: 'You encounter lenses daily: the camera lens in your smartphone, magnifying glasses, binoculars, and even the lens in your eye itself. All work on the same principle of bending light in specific ways.'
          }
        },
        {
          id: 'lens-parts',
          type: 'paragraph',
          content: {
            text: 'All lenses have certain common elements that help us understand how they function:'
          }
        },
        {
          id: 'lens-parts-list',
          type: 'list',
          content: {
            items: [
              'Optical center: The point on a lens through which light passes without changing direction - like the "bullseye" of the lens',
              'Principal axis: An imaginary straight line passing through the optical center perpendicular to the lens - think of it as the lens\'s centerline',
              'Focal point: The point where parallel light rays meet (or appear to come from) after passing through the lens - like where sunlight focused through a magnifying glass creates a hot spot',
              'Focal length: The distance from the optical center to the focal point - shorter focal lengths mean stronger lenses'
            ],
            ordered: false
          }
        },
        {
          id: 'lens-diagram',
          type: 'image',
          content: {
            src: lensImages.diagram.path,
            alt: 'Basic lens diagram showing key parts',
            caption: 'Basic diagram of a lens showing optical center, focal length, and surfaces'
          }
        },
        {
          id: 'lens-shapes',
          type: 'image',
          content: {
            src: lensImages.shapesComparison.path,
            alt: 'Comparison of different lens shapes',
            caption: 'Various lens shapes and their optical properties'
          }
        },
        {
          id: 'lens-analogy',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Helpful Analogy',
            text: 'Think of a lens like a traffic controller for light rays. A plus lens brings traffic (light rays) together to a meeting point (focal point). A minus lens directs traffic away from each other, making the rays spread out.'
          }
        },
        {
          id: 'power-def',
          type: 'definition',
          content: {
            term: 'Lens Power',
            definition: 'The strength of a lens to bend light, measured in diopters (D). Higher numbers (positive or negative) indicate stronger lenses that bend light more dramatically.',
            related: ['Diopter', 'Focal length']
          }
        },
        {
          id: 'diopter-explanation',
          type: 'paragraph',
          content: {
            text: 'A diopter is the unit used to measure lens power. Think of diopters like spiciness levels at a restaurant - higher numbers mean stronger effect. A +4.00D lens is twice as strong as a +2.00D lens, just as a spice level of 8 is twice as intense as level 4.'
          }
        },
        {
          id: 'power-formula',
          type: 'paragraph',
          content: {
            text: 'The power of a lens in diopters (D) is calculated using this simple formula:',
            highlight: true
          }
        },
        {
          id: 'power-formula-p2',
          type: 'paragraph',
          content: {
            text: 'Power (D) = 1 / Focal Length (meters)',
            highlight: true
          }
        },
        {
          id: 'power-example',
          type: 'paragraph',
          content: {
            text: 'For example, a lens with a focal length of 0.5 meters has a power of +2.00 D (1 ÷ 0.5 = 2), while a lens with a focal length of -0.25 meters has a power of -4.00 D (1 ÷ -0.25 = -4).'
          }
        },
        {
          id: 'why-it-matters',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Why Lens Types Matter',
            text: 'Understanding lens types is crucial because each vision problem requires a specific lens solution. Just as you wouldn\'t use a hammer to tighten a screw, you wouldn\'t use a concave lens to correct farsightedness. Choosing the right lens type is the first step in creating effective eyewear.'
          }
        },
        {
          id: 'hands-on-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Hands-On Learning',
            text: 'To better understand lens types, try this simple exercise: Hold different lenses (from demo glasses or a lens set) at arm\'s length and look through them at a straight line (like a doorframe). A plus lens will make the line appear to bend inward, while a minus lens will make it bend outward. This quick test helps identify lens type without measuring equipment.'
          }
        }
      ]
    },
    {
      id: 'convex-concave',
      title: 'Convex vs. Concave Lenses',
      type: 'main',
      content: [
        {
          id: 'basic-distinction',
          type: 'paragraph',
          content: {
            text: 'The most fundamental distinction in ophthalmic lenses is whether they are convex (plus) or concave (minus). This difference determines which vision problems they correct and how they affect light.'
          }
        },
        {
          id: 'lens-shape-image',
          type: 'image',
          content: {
            src: lensImages.shapesComparison.path,
            alt: 'Comparison of different lens shapes',
            caption: 'Various lens shapes and their optical properties'
          }
        },
        {
          id: 'convex-heading',
          type: 'heading',
          content: {
            text: 'Convex (Plus) Lenses',
            level: 3
          }
        },
        {
          id: 'convex-def',
          type: 'definition',
          content: {
            term: 'Convex Lens',
            definition: 'A lens that is thicker in the center than at the edges, like a magnifying glass. Also called a plus (+) lens because it has positive power.',
            related: ['Hyperopia', 'Presbyopia', 'Plus power']
          }
        },
        {
          id: 'convex-identification',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'How to Identify a Convex Lens',
            text: 'Place the lens on a flat surface and look down at it. If the edges appear thinner than the center (like a mountain peak), it\'s convex. When you move the lens over text, the text appears larger. When you hold it up and move it side to side, objects appear to move in the opposite direction.'
          }
        },
        {
          id: 'convex-properties',
          type: 'paragraph',
          content: {
            text: 'Properties of convex lenses:'
          }
        },
        {
          id: 'convex-properties-list',
          type: 'list',
          content: {
            items: [
              'Converges light rays to a focal point (brings light rays together)',
              'Has positive power (measured in plus diopters, e.g., +1.00, +2.50)',
              'Creates a magnified, upright image for objects held closer than the focal length',
              'Creates a real, inverted image for objects beyond the focal length',
              'Feels thicker in the center when you hold it'
            ],
            ordered: false
          }
        },
        {
          id: 'convex-lens',
          type: 'image',
          content: {
            src: lensImages.convexLens.path,
            alt: 'Convex lens diagram',
            caption: 'Convex (plus) lens showing convergence of light rays'
          }
        },
        {
          id: 'convex-real-world',
          type: 'paragraph',
          content: {
            text: 'Real-world examples of convex lenses include magnifying glasses, the objective lens in a telescope, and the lens in a projector. Each of these brings light rays together to create larger images or focused light.'
          }
        },
        {
          id: 'convex-uses',
          type: 'paragraph',
          content: {
            text: 'Convex lenses are used to correct these vision conditions:'
          }
        },
        {
          id: 'convex-uses-list',
          type: 'list',
          content: {
            items: [
              'Hyperopia (farsightedness): The lens helps focus light properly on the retina instead of behind it',
              'Presbyopia: Reading glasses use convex lenses to compensate for decreased focusing ability that comes with age',
              'Aphakia: Strong convex lenses can help patients who have had their natural lens removed due to cataracts (before intraocular lens implants became common)'
            ],
            ordered: false
          }
        },
        {
          id: 'convex-analogy',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Convex Lens Analogy',
            text: 'A convex lens works like a crowd of people being funneled through a narrower doorway - it takes widely spaced light rays and brings them together to a single point.'
          }
        },
        {
          id: 'concave-heading',
          type: 'heading',
          content: {
            text: 'Concave (Minus) Lenses',
            level: 3
          }
        },
        {
          id: 'concave-def',
          type: 'definition',
          content: {
            term: 'Concave Lens',
            definition: 'A lens that is thinner in the center than at the edges, like the bowl of a spoon. Also called a minus (-) lens because it has negative power.',
            related: ['Myopia', 'Minus power', 'Divergence']
          }
        },
        {
          id: 'concave-identification',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'How to Identify a Concave Lens',
            text: 'Place the lens on a flat surface and look down at it. If the edges appear thicker than the center (like a valley), it\'s concave. When you move the lens over text, the text appears smaller. When you hold it up and move it side to side, objects appear to move in the same direction.'
          }
        },
        {
          id: 'concave-properties',
          type: 'paragraph',
          content: {
            text: 'Properties of concave lenses:'
          }
        },
        {
          id: 'concave-properties-list',
          type: 'list',
          content: {
            items: [
              'Diverges light rays (makes them spread out as if coming from a virtual focal point)',
              'Has negative power (measured in minus diopters, e.g., -1.00, -2.50)',
              'Always creates a virtual, upright, minified (smaller) image',
              'Cannot form a real image (all images are virtual)',
              'Feels thinner in the center when you hold it'
            ],
            ordered: false
          }
        },
        {
          id: 'concave-lens',
          type: 'image',
          content: {
            src: lensImages.concaveLens.path,
            alt: 'Concave lens diagram',
            caption: 'Concave (minus) lens showing divergence of light rays'
          }
        },
        {
          id: 'concave-real-world',
          type: 'paragraph',
          content: {
            text: 'Real-world examples of concave lenses include peepholes in doors, the eyepiece in binoculars, and wide-angle lenses in cameras. Each creates a wider field of view by spreading light rays.'
          }
        },
        {
          id: 'concave-uses',
          type: 'paragraph',
          content: {
            text: 'Concave lenses are primarily used to correct:'
          }
        },
        {
          id: 'concave-uses-list',
          type: 'list',
          content: {
            items: [
              'Myopia (nearsightedness): The lens spreads out light rays so they focus properly on the retina rather than in front of it',
              'High plus power compensation: Sometimes used in combination with plus lenses to reduce overall thickness',
              'Field of view expansion: In certain specialty applications where wider viewing angles are needed'
            ],
            ordered: false
          }
        },
        {
          id: 'concave-analogy',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Concave Lens Analogy',
            text: 'A concave lens works like a crowd of people exiting a stadium through multiple doors - it takes light rays that would normally converge and spreads them out in different directions.'
          }
        },
        {
          id: 'common-misconception',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Common Misconception',
            text: 'Many beginners think minus lenses are for reading and plus lenses are for distance. This is incorrect! The lens type depends on the refractive error being corrected, not the viewing distance. Minus lenses correct myopia (typically affecting distance vision), while plus lenses correct hyperopia and presbyopia (often affecting near vision).'
          }
        },
        {
          id: 'comparison-table',
          type: 'table',
          content: {
            headers: ['Property', 'Convex (Plus) Lens', 'Concave (Minus) Lens'],
            rows: [
              ['Shape', 'Thicker in center, thinner at edges', 'Thinner in center, thicker at edges'],
              ['Effect on light', 'Converges rays (brings together)', 'Diverges rays (spreads apart)'],
              ['Power', 'Positive (+)', 'Negative (-)'],
              ['Effect on image', 'Magnifies when close to object', 'Minifies (makes smaller)'],
              ['Movement test', 'Objects move opposite to lens movement', 'Objects move same direction as lens movement'],
              ['Corrects', 'Hyperopia, presbyopia', 'Myopia'],
              ['Real-world example', 'Magnifying glass', 'Peephole in door'],
              ['Edge profile', 'Thin edges', 'Thick edges']
            ],
            caption: 'Comparison of convex and concave lenses: key differences to remember'
          }
        },
        {
          id: 'combination-heading',
          type: 'heading',
          content: {
            text: 'Combined Lens Forms',
            level: 3
          }
        },
        {
          id: 'combination-explanation',
          type: 'paragraph',
          content: {
            text: 'In practice, many lenses combine convex and concave surfaces to achieve specific optical effects while maintaining a desirable thickness profile:'
          }
        },
        {
          id: 'meniscus-def',
          type: 'definition',
          content: {
            term: 'Meniscus Lens',
            definition: 'A lens with one convex surface and one concave surface. The overall power depends on which curve is stronger. Modern lenses are usually meniscus form for better optics and cosmetics.',
            related: ['Plus meniscus', 'Minus meniscus']
          }
        },
        {
          id: 'lens-forms',
          type: 'image',
          content: {
            src: lensImages.lensForms.path,
            alt: 'Various lens form designs',
            caption: 'Different lens forms: plano-convex, biconvex, meniscus, etc.'
          }
        },
        {
          id: 'practical-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Practical Application',
            text: 'When dispensing glasses, remember that high plus lenses magnify the eyes (which some patients may not like) while high minus lenses make eyes appear smaller (potentially creating a "beady eyes" effect). Consider frame size and lens design to minimize these cosmetic issues.'
          }
        }
      ]
    },
    {
      id: 'spherical-cylindrical',
      title: 'Spherical vs. Cylindrical Lenses',
      type: 'main',
      content: [
        {
          id: 'section-intro',
          type: 'paragraph',
          content: {
            text: 'Another critical distinction in eyeglass lenses is between spherical and cylindrical lenses. This difference is especially important because many patients require a combination of both types to correct their vision properly.'
          }
        },
        {
          id: 'spherical-heading',
          type: 'heading',
          content: {
            text: 'Spherical Lenses',
            level: 3
          }
        },
        {
          id: 'spherical-def',
          type: 'definition',
          content: {
            term: 'Spherical Lens',
            definition: 'A lens with surfaces that have the same curvature in all meridians (like a section of a ball). Power is equal in all directions.',
            related: ['Hyperopia', 'Myopia', 'Diopter sphere']
          }
        },
        {
          id: 'spherical-explanation',
          type: 'paragraph',
          content: {
            text: 'Spherical lenses have uniform power in all meridians (directions). Their surface resembles a portion of a basketball - the curvature is the same no matter which direction you measure across the lens surface.'
          }
        },
        {
          id: 'spherical-everyday',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Real-World Analogy',
            text: 'Think of a spherical lens like a bowl or soup spoon - it curves equally in all directions. If you slice it in any direction through the center, you\'ll get the same curve profile.'
          }
        },
        {
          id: 'spherical-types',
          type: 'paragraph',
          content: {
            text: 'There are several types of spherical lenses, each with different surface profiles:'
          }
        },
        {
          id: 'spherical-types-list',
          type: 'list',
          content: {
            items: [
              'Biconvex: Convex on both surfaces (like a lentil bean) - used for higher plus powers',
              'Biconcave: Concave on both surfaces (like the inside of a hollow ball cut in half) - used for higher minus powers',
              'Plano-convex: Flat on one side, convex on the other - used for lower plus powers',
              'Plano-concave: Flat on one side, concave on the other - used for lower minus powers',
              'Meniscus: One concave surface and one convex surface (like a crescent moon) - most modern lenses use this design for better optics and comfort'
            ],
            ordered: false
          }
        },
        {
          id: 'spherical-lens-types',
          type: 'image',
          content: {
            src: lensImages.sphericalLensTypes.path,
            alt: 'Types of spherical lenses',
            caption: 'Different types of spherical lenses and their optical properties'
          }
        },
        {
          id: 'sphere-correction',
          type: 'paragraph',
          content: {
            text: 'Spherical lenses correct refractive errors that affect the eye equally in all meridians:'
          }
        },
        {
          id: 'sphere-correction-list',
          type: 'list',
          content: {
            items: [
              'Myopia (nearsightedness): Corrected with minus spherical lenses',
              'Hyperopia (farsightedness): Corrected with plus spherical lenses', 
              'Presbyopia: Age-related difficulty focusing up close, corrected with plus spherical lenses (reading glasses)'
            ],
            ordered: false
          }
        },
        {
          id: 'spherical-rx',
          type: 'image',
          content: {
            src: lensImages.sphericalRx.path,
            alt: 'Spherical prescription example',
            caption: 'Example of a spherical prescription showing power in diopters'
          }
        },
        {
          id: 'spherical-try-this',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Try This',
            text: 'To experience spherical lens effects, try on a pair of simple reading glasses (plus spherical) or a myope\'s distance glasses (minus spherical). Notice how objects appear uniformly magnified or minified in all directions.'
          }
        },
        {
          id: 'cylindrical-heading',
          type: 'heading',
          content: {
            text: 'Cylindrical Lenses',
            level: 3
          }
        },
        {
          id: 'cylindrical-def',
          type: 'definition',
          content: {
            term: 'Cylindrical Lens',
            definition: 'A lens with one or both surfaces having different curvatures in different meridians (like a section of a cylinder or pipe). Power varies across different meridians.',
            related: ['Astigmatism', 'Axis', 'Toric lenses']
          }
        },
        {
          id: 'cylindrical-explanation',
          type: 'paragraph',
          content: {
            text: 'Unlike spherical lenses, cylindrical lenses have different powers in different meridians. They have power along one meridian but no power along the perpendicular meridian (called the axis). Imagine bending a rigid piece of paper - it curves in one direction but remains straight in the perpendicular direction.'
          }
        },
        {
          id: 'cylindrical-analogy',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Cylindrical Lens Analogy',
            text: 'Think of a cylindrical lens like a paper tube or can cut lengthwise. If you look at a cross-section one way, you\'ll see a curve; if you look at it 90 degrees to that direction, you\'ll see a straight line. This is why cylindrical lenses focus light differently in different meridians.'
          }
        },
        {
          id: 'cylindrical-lens',
          type: 'image',
          content: {
            src: lensImages.cylindricalLens.path,
            alt: 'Cylindrical lens diagram',
            caption: 'Cylindrical lens showing different meridians of power'
          }
        },
        {
          id: 'cylindrical-concept',
          type: 'paragraph',
          content: {
            text: 'Conceptually, a cylindrical lens functions like a spherical lens in one meridian and like a piece of flat glass in the perpendicular meridian. This unique property allows it to correct vision problems that affect the eye differently in different directions.'
          }
        },
        {
          id: 'astigmatism-explanation',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Understanding Astigmatism',
            text: 'Astigmatism occurs when the cornea or lens has an irregular shape, more like a football than a basketball. This causes light to focus at multiple points rather than a single point on the retina. Cylindrical lenses correct astigmatism by compensating for this irregularity.'
          }
        },
        {
          id: 'astigmatism-correction',
          type: 'paragraph',
          content: {
            text: 'Cylindrical lenses are used to correct astigmatism. The power and orientation (axis) of the cylindrical lens must match the patient\'s astigmatism exactly for proper correction.'
          }
        },
        {
          id: 'cylindrical-rx',
          type: 'paragraph',
          content: {
            text: 'On a prescription, cylindrical power is indicated in the "cylinder" or "cyl" column, and the orientation is specified by the "axis" (measured in degrees from 1 to 180). For example:'
          }
        },
        {
          id: 'cylinder-rx-example',
          type: 'table',
          content: {
            headers: ['Prescription', 'Explanation'],
            rows: [
              ['+2.00 -1.00 x 180', 'Sphere power of +2.00D, cylinder power of -1.00D at axis 180° (horizontal)'],
              ['-3.50 -0.75 x 90', 'Sphere power of -3.50D, cylinder power of -0.75D at axis 90° (vertical)']
            ],
            caption: 'Examples of prescriptions with cylindrical components'
          }
        },
        {
          id: 'axis-explanation',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Understanding Axis',
            text: 'The axis of a cylindrical lens indicates which meridian has no cylindrical power. It\'s measured in degrees from 1 to 180, with 90° representing vertical and 180° representing horizontal. Think of it like a protractor placed over the lens, with 0°/180° being horizontal and 90° being vertical.'
          }
        },
        {
          id: 'axis-diagram',
          type: 'image',
          content: {
            src: lensImages.axisDiagram.path,
            alt: 'Axis diagram for astigmatism correction',
            caption: 'Diagram showing how axis is specified for astigmatism correction'
          }
        },
        {
          id: 'common-cyl-axes',
          type: 'paragraph',
          content: {
            text: 'While astigmatism can occur at any axis, it commonly appears around certain orientations:'
          }
        },
        {
          id: 'axes-list',
          type: 'list',
          content: {
            items: [
              'With-the-rule astigmatism: Axis around 180° (±20°) - more common in younger patients',
              'Against-the-rule astigmatism: Axis around 90° (±20°) - more common in older patients',
              'Oblique astigmatism: Axis between 30-60° or 120-150° - often causes more noticeable visual distortion'
            ],
            ordered: false
          }
        },
        {
          id: 'sphero-cyl-heading',
          type: 'heading',
          content: {
            text: 'Sphero-Cylindrical Lenses',
            level: 3
          }
        },
        {
          id: 'sphero-cyl-def',
          type: 'definition',
          content: {
            term: 'Sphero-Cylindrical Lens',
            definition: 'A lens that combines both spherical and cylindrical components to correct both overall refractive error and astigmatism simultaneously.',
            related: ['Compound astigmatism', 'Mixed astigmatism']
          }
        },
        {
          id: 'sphero-cyl-explanation',
          type: 'paragraph',
          content: {
            text: 'Most prescription lenses are actually sphero-cylindrical combinations, containing both spherical and cylindrical elements. This allows for correction of both the overall refractive error (myopia or hyperopia) and astigmatism in a single lens.'
          }
        },
        {
          id: 'sphero-cyl-prescription',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Reading a Complete Prescription',
            text: 'A prescription of "-2.25 -1.50 x 075" means: a spherical power of -2.25D (for myopia) combined with a cylindrical power of -1.50D at axis 075° (for astigmatism). This single lens corrects both conditions simultaneously.'
          }
        },
        {
          id: 'transposition',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Note for Advanced Students',
            text: 'Prescriptions can be written in different forms (minus cylinder vs. plus cylinder) through a process called transposition. While we use minus cylinder form in the US, some countries use plus cylinder. They represent the same optical correction, just expressed differently.'
          }
        }
      ]
    },
    {
      id: 'clinical-applications',
      title: 'Clinical Applications in Opticianry',
      type: 'clinical',
      content: [
        {
          id: 'clinical-intro',
          type: 'paragraph',
          content: {
            text: 'Understanding lens types is essential for your daily work as an optician. Let\'s explore how this knowledge applies in real-world situations when helping patients.'
          }
        },
        {
          id: 'prescription-interpretation',
          type: 'heading',
          content: {
            text: 'Prescription Interpretation',
            level: 3
          }
        },
        {
          id: 'rx-importance',
          type: 'paragraph',
          content: {
            text: 'As an optician, one of your most important skills is accurately interpreting prescriptions. The lens type needed is determined directly by the prescription values.'
          }
        },
        {
          id: 'rx-example',
          type: 'paragraph',
          content: {
            text: 'Let\'s break down some example prescriptions to understand what lens types each patient needs:'
          }
        },
        {
          id: 'rx-table',
          type: 'table',
          content: {
            headers: ['Prescription', 'Interpretation', 'Patient\'s Vision', 'Lens Type Needed'],
            rows: [
              ['+2.00 DS', 'A spherical convex lens with +2.00 diopters of power', 'Hyperopic (farsighted), likely struggles with near vision', 'Plus spherical lens'],
              ['-3.50 DS', 'A spherical concave lens with -3.50 diopters of power', 'Myopic (nearsighted), has difficulty seeing distant objects clearly', 'Minus spherical lens'],
              ['+1.50 -0.75 x 90', 'A sphero-cylindrical lens with +1.50 diopters of sphere power and -0.75 diopters of cylinder power at axis 90', 'Hyperopic with astigmatism, vision is blurred at all distances but more noticeably for near tasks', 'Plus spherical lens with cylindrical component'],
              ['-2.25 -1.25 x 180', 'A sphero-cylindrical lens with -2.25 diopters of sphere power and -1.25 diopters of cylinder power at axis 180', 'Myopic with astigmatism, distance vision is blurred with additional distortion', 'Minus spherical lens with cylindrical component']
            ],
            caption: 'Examples of common prescription types and their corresponding lens needs'
          }
        },
        {
          id: 'practical-consequences',
          type: 'paragraph',
          content: {
            text: 'Understanding the lens type needed affects many aspects of eyewear dispensing:'
          }
        },
        {
          id: 'consequences-list',
          type: 'list',
          content: {
            items: [
              'Frame selection: Higher power lenses (especially minus) benefit from smaller frames to reduce thickness',
              'Lens material recommendations: Higher prescriptions may need higher-index materials',
              'Cosmetic appearance: Strong minus lenses make eyes appear smaller; strong plus lenses magnify eyes',
              'Edge thickness: Minus lenses have thicker edges; plus lenses have thicker centers',
              'Special treatments: High-power lenses often benefit from anti-reflective coatings'
            ],
            ordered: false
          }
        },
        {
          id: 'explaining-to-patients',
          type: 'heading',
          content: {
            text: 'Explaining Lens Types to Patients',
            level: 3
          }
        },
        {
          id: 'communication-importance',
          type: 'paragraph',
          content: {
            text: 'Being able to explain lens types in simple terms helps patients understand their vision correction needs. Here are some patient-friendly explanations:'
          }
        },
        {
          id: 'patient-explanations',
          type: 'table',
          content: {
            headers: ['Technical Term', 'Patient-Friendly Explanation'],
            rows: [
              ['Convex/Plus Lens', '"Your lenses will be thicker in the middle and thinner at the edges. They help your eyes focus light that\'s reaching too far back in your eye."'],
              ['Concave/Minus Lens', '"Your lenses will be thinner in the middle and thicker at the edges. They help spread out light that\'s focusing too soon in your eye."'],
              ['Cylindrical Component', '"Part of your lens has a special curve, like the side of a soup can, to correct blurriness that happens in specific directions."'],
              ['Axis', '"The direction we position the special curve in your lens, measured in degrees like on a protractor, to match the unique shape of your eye."']
            ],
            caption: 'Simplified explanations of lens concepts for patient communication'
          }
        },
        {
          id: 'visual-aids',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Using Visual Aids',
            text: 'When explaining lens types to patients, use visual aids like lens cross-section displays or simple drawings. Many patients understand concepts better when they can see them represented visually. Lens samples showing different powers can also help demonstrate the differences.'
          }
        },
        {
          id: 'lens-selection',
          type: 'heading',
          content: {
            text: 'Lens Selection Considerations',
            level: 3
          }
        },
        {
          id: 'lens-selection-para',
          type: 'paragraph',
          content: {
            text: 'When selecting specific lenses for patients, consider these factors along with the basic lens type:'
          }
        },
        {
          id: 'lens-selection-list',
          type: 'list',
          content: {
            items: [
              'Prescription strength: Higher prescriptions (typically over ±3.00D) often benefit from high-index materials to reduce thickness and weight',
              'Lens diameter: Larger frames require larger lenses, which increases edge thickness in minus lenses and center thickness in plus lenses',
              'Cosmetic appearance: Consider lens and frame combinations that minimize negative cosmetic effects of strong prescriptions',
              'Intended use: The primary use of the glasses (reading, computer, distance, general) influences lens design and material choices',
              'Patient age and lifestyle: Children and active adults benefit from impact-resistant materials regardless of lens type',
              'Occupational needs: Some jobs require specific lens considerations (e.g., safety requirements, specific viewing distances)'
            ],
            ordered: false
          }
        },
        {
          id: 'troubleshooting',
          type: 'heading',
          content: {
            text: 'Troubleshooting Common Issues',
            level: 3
          }
        },
        {
          id: 'common-issues',
          type: 'paragraph',
          content: {
            text: 'Understanding lens types helps you troubleshoot common patient complaints:'
          }
        },
        {
          id: 'troubleshooting-table',
          type: 'table',
          content: {
            headers: ['Patient Complaint', 'Possible Lens-Related Cause', 'Potential Solution'],
            rows: [
              ['"Everything looks smaller"', 'First-time high minus prescription', 'Explain that this is normal; vision will adapt but objects will appear slightly smaller permanently'],
              ['"My eyes look tiny in these glasses"', 'High minus lenses minifying effect', 'Consider smaller frames, high-index materials, or aspheric designs to reduce edge thickness'],
              ['"My eyes look huge"', 'High plus lenses magnifying effect', 'Recommend frames with smaller lens openings or higher-index materials'],
              ['"Straight lines look curved"', 'Cylindrical component adaptation or incorrect axis', 'Verify axis orientation; reassure that adaptation typically occurs within 1-2 weeks'],
              ['"I feel like I\'m looking through a fishbowl"', 'High prescription with lens distortion', 'Consider aspheric lens designs or different base curves']
            ],
            caption: 'Common patient complaints related to lens types and potential solutions'
          }
        },
        {
          id: 'dispensing-tips',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Pro Dispensing Tip',
            text: 'When dispensing strong prescriptions, set appropriate expectations during frame selection. Show patients lens samples or digital previews of how their lenses will look in different frames. It\'s better to educate patients before ordering rather than dealing with disappointment at pickup.'
          }
        }
      ]
    }
  ],
  summary: 'This module covered the fundamental types of ophthalmic lenses. Convex (plus) lenses are thicker in the center and converge light to correct hyperopia and presbyopia. Concave (minus) lenses are thinner in the center and diverge light to correct myopia. Spherical lenses have uniform power in all meridians, while cylindrical lenses have different powers in different meridians to correct astigmatism. Most prescription lenses are sphero-cylindrical combinations that address both spherical refractive errors and astigmatism simultaneously. Understanding these basic lens types allows you to interpret prescriptions correctly, recommend appropriate lenses for patients, and troubleshoot common vision problems and complaints.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2003). Ophthalmic Lenses and Dispensing. Butterworth-Heinemann.',
    'Fannin, T. E., & Grosvenor, T. (1996). Clinical Optics. Butterworth-Heinemann.',
    'American Board of Opticianry. (2022). Exam Content Outline.'
  ],
  practiceQuestions: [
    {
      question: 'Which of the following lens types would be used to correct myopia (nearsightedness)?',
      options: [
        'Convex lens',
        'Concave lens',
        'Cylindrical lens only',
        'Prism lens'
      ],
      correctAnswer: 1,
      explanation: 'Concave (minus) lenses are used to correct myopia because they diverge light rays. This helps focus light properly on the retina instead of in front of it, which occurs in myopic eyes.'
    },
    {
      question: 'How can you visually identify a convex lens?',
      options: [
        'It is thinner in the center than at the edges',
        'It is thicker in the center than at the edges',
        'It has the same thickness throughout',
        'It is colored blue at the edges'
      ],
      correctAnswer: 1,
      explanation: 'Convex (plus) lenses are thicker in the center than at the edges, giving them a bulging middle appearance, like a magnifying glass. This shape causes light rays to converge.'
    },
    {
      question: 'In a prescription written as "+2.50 -1.00 x 180", what does the "-1.00" represent?',
      options: [
        'The spherical power',
        'The cylindrical power',
        'The axis',
        'The add power'
      ],
      correctAnswer: 1,
      explanation: 'In a prescription, the middle number (in this case, -1.00) represents the cylindrical power, which corrects astigmatism. The cylindrical component always includes both a power and an axis (the "x 180" part).'
    },
    {
      question: 'Which lens type has uniform power in all meridians?',
      options: [
        'Cylindrical lens',
        'Sphero-cylindrical lens',
        'Spherical lens',
        'Prismatic lens'
      ],
      correctAnswer: 2,
      explanation: 'Spherical lenses have uniform power in all meridians, meaning they have the same curvature in all directions, like a portion of a basketball. This is in contrast to cylindrical lenses, which have different powers in different meridians.'
    },
    {
      question: 'What does the axis measurement represent in a cylindrical lens prescription?',
      options: [
        'The thickness of the lens at its center',
        'The direction of maximum cylindrical power',
        'The meridian that has no cylindrical power',
        'The overall strength of the lens'
      ],
      correctAnswer: 2,
      explanation: 'The axis in a cylindrical lens prescription (measured in degrees from 1 to 180) indicates the meridian that has no cylindrical power. The maximum cylindrical power is located 90 degrees away from this axis.'
    },
    {
      question: 'When moving a minus lens side to side while looking through it at an object, the object appears to:',
      options: [
        'Move in the opposite direction of the lens',
        'Move in the same direction as the lens',
        'Stay stationary',
        'Blur out completely'
      ],
      correctAnswer: 1,
      explanation: 'When looking through a minus lens and moving it side to side, objects appear to move in the same direction as the lens. This is a quick way to identify a minus lens. Conversely, objects viewed through a plus lens appear to move in the opposite direction.'
    },
    {
      question: 'A prescription for "+3.00 DS" would require what type of lens?',
      options: [
        'Concave spherical lens',
        'Convex spherical lens',
        'Cylindrical lens',
        'Sphero-cylindrical lens'
      ],
      correctAnswer: 1,
      explanation: 'A prescription of "+3.00 DS" indicates a convex spherical lens with +3.00 diopters of power. The "DS" stands for "diopters sphere," indicating there is no cylindrical component.'
    },
    {
      question: 'Which type of lens is used to correct astigmatism?',
      options: [
        'Spherical lens only',
        'Cylindrical lens',
        'Convex lens only',
        'Concave lens only'
      ],
      correctAnswer: 1,
      explanation: 'Cylindrical lenses are used to correct astigmatism because they have different powers in different meridians, which compensates for the irregular corneal or lens shape that causes astigmatism.'
    },
    {
      question: 'The power of a lens measured in diopters is:',
      options: [
        'Directly proportional to the focal length',
        'The reciprocal of the focal length in meters',
        'Equal to the focal length in millimeters',
        'The square of the focal length'
      ],
      correctAnswer: 1,
      explanation: 'The power of a lens in diopters (D) is the reciprocal of the focal length in meters: Power (D) = 1 / Focal Length (m). This means a lens with a focal length of 0.5 meters has a power of +2.00 D (1 ÷ 0.5 = 2).'
    },
    {
      question: 'When dispensing glasses for a patient with a high minus prescription, which frame characteristic is most important to consider?',
      options: [
        'The frame should be as large as possible',
        'The frame should be relatively small',
        'The frame should be rimless',
        'The frame material doesn\'t matter'
      ],
      correctAnswer: 1,
      explanation: 'For high minus prescriptions, smaller frames are preferable because they reduce the overall lens diameter. This results in thinner edges, less weight, better cosmetics, and potentially better optics. Large frames with high minus prescriptions result in very thick, heavy lenses at the edges.'
    }
  ]
}; 