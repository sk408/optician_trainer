import { TopicStudyContent } from '../../interfaces/StudyContent';

export const lensTypesContent: TopicStudyContent = {
  topicId: 'lens-types',
  title: 'Types of Lenses',
  introduction: 'Ophthalmic lenses come in various types, each designed to address specific vision problems. Understanding the different lens types, their characteristics, and their applications is fundamental for opticians to properly dispense eyewear that meets patients\' visual needs. This module explores the basic categories of lenses and their properties.',
  objectives: [
    'Differentiate between convex (plus) and concave (minus) lenses',
    'Explain the optical properties of spherical and cylindrical lenses',
    'Identify which lens types are used to correct specific refractive errors',
    'Understand the fundamental terminology used to describe different lens types',
    'Recognize how lens shape affects optical power'
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
            definition: 'A transparent optical device with curved surfaces that focuses or disperses light rays.',
            related: ['Optics', 'Refraction']
          }
        },
        {
          id: 'lens-intro',
          type: 'paragraph',
          content: {
            text: 'Lenses work by refracting (bending) light. The amount and direction of bending depend on the lens shape, material, and the index of refraction. By carefully designing these properties, lenses can correct various vision problems.'
          }
        },
        {
          id: 'lens-parts',
          type: 'paragraph',
          content: {
            text: 'All lenses have certain common elements:'
          }
        },
        {
          id: 'lens-parts-list',
          type: 'list',
          content: {
            items: [
              'Optical center: The point on a lens through which light passes without deviation',
              'Principal axis: An imaginary line passing through the optical center perpendicular to the lens',
              'Focal point: The point at which parallel light rays converge (or appear to diverge from) after passing through the lens',
              'Focal length: The distance from the optical center to the focal point'
            ],
            ordered: false
          }
        },
        {
          id: 'lens-diagram',
          type: 'image',
          content: {
            src: '/assets/images/study/lens-diagram.jpg',
            alt: 'Diagram showing the parts of a lens including optical center, principal axis, and focal point',
            caption: 'Basic elements of a lens',
            width: '70%'
          }
        },
        {
          id: 'power-def',
          type: 'definition',
          content: {
            term: 'Lens Power',
            definition: 'The refractive strength of a lens, measured in diopters (D). It equals the reciprocal of the focal length in meters.',
            related: ['Diopter', 'Focal length']
          }
        },
        {
          id: 'power-formula',
          type: 'paragraph',
          content: {
            text: 'The power of a lens in diopters (D) is calculated using:',
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
            text: 'For example, a lens with a focal length of 0.5 meters has a power of +2.00 D, while a lens with a focal length of -0.25 meters has a power of -4.00 D.'
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
            definition: 'A lens that is thicker in the center than at the edges. Also called a plus (+) lens or convergent lens.',
            related: ['Hyperopia', 'Presbyopia']
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
              'Converges light rays to a focal point',
              'Has positive power (measured in plus diopters)',
              'Creates a magnified, upright image for objects closer than the focal length',
              'Creates a real, inverted image for objects beyond the focal length'
            ],
            ordered: false
          }
        },
        {
          id: 'convex-image',
          type: 'image',
          content: {
            src: '/assets/images/study/convex-lens.jpg',
            alt: 'Diagram of a convex lens showing light rays converging to a focal point',
            caption: 'A convex lens converges parallel light rays to a focal point',
            width: '70%'
          }
        },
        {
          id: 'convex-uses',
          type: 'paragraph',
          content: {
            text: 'Convex lenses are used to correct:'
          }
        },
        {
          id: 'convex-uses-list',
          type: 'list',
          content: {
            items: [
              'Hyperopia (farsightedness): The lens helps focus light properly on the retina',
              'Presbyopia: Reading glasses use convex lenses to compensate for decreased accommodation',
              'Aphakia: Strong convex lenses can help patients who have had their natural lens removed'
            ],
            ordered: false
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
            definition: 'A lens that is thinner in the center than at the edges. Also called a minus (-) lens or divergent lens.',
            related: ['Myopia']
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
              'Diverges light rays (makes them spread out)',
              'Has negative power (measured in minus diopters)',
              'Always creates a virtual, upright, minified image',
              'Cannot form a real image'
            ],
            ordered: false
          }
        },
        {
          id: 'concave-image',
          type: 'image',
          content: {
            src: '/assets/images/study/concave-lens.jpg',
            alt: 'Diagram of a concave lens showing light rays diverging',
            caption: 'A concave lens causes parallel light rays to diverge',
            width: '70%'
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
              'Myopia (nearsightedness): The lens spreads out light rays so they focus properly on the retina rather than in front of it'
            ],
            ordered: false
          }
        },
        {
          id: 'comparison-table',
          type: 'table',
          content: {
            headers: ['Property', 'Convex (Plus) Lens', 'Concave (Minus) Lens'],
            rows: [
              ['Shape', 'Thicker in center', 'Thinner in center'],
              ['Effect on light', 'Converges rays', 'Diverges rays'],
              ['Power', 'Positive (+)', 'Negative (-)'],
              ['Image formation', 'Can form real or virtual images', 'Forms only virtual images'],
              ['Corrects', 'Hyperopia, presbyopia', 'Myopia'],
              ['Edge thickness', 'Thin edges', 'Thick edges']
            ],
            caption: 'Comparison of convex and concave lenses'
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
            definition: 'A lens with surfaces that have the same curvature in all meridians (like a section of a sphere).',
            related: ['Hyperopia', 'Myopia']
          }
        },
        {
          id: 'spherical-explanation',
          type: 'paragraph',
          content: {
            text: 'Spherical lenses have uniform power in all meridians. Think of the surface as being shaped like a portion of a basketball — the curvature is the same no matter which direction you measure it.'
          }
        },
        {
          id: 'spherical-types',
          type: 'paragraph',
          content: {
            text: 'There are several types of spherical lenses:'
          }
        },
        {
          id: 'spherical-types-list',
          type: 'list',
          content: {
            items: [
              'Biconvex: Convex on both surfaces',
              'Biconcave: Concave on both surfaces',
              'Plano-convex: Flat on one side, convex on the other',
              'Plano-concave: Flat on one side, concave on the other',
              'Meniscus: One concave surface and one convex surface (can be either plus or minus power overall)'
            ],
            ordered: false
          }
        },
        {
          id: 'spherical-image',
          type: 'image',
          content: {
            src: '/assets/images/study/spherical-lens-types.jpg',
            alt: 'Various types of spherical lenses',
            caption: 'Common types of spherical lenses',
            width: '80%'
          }
        },
        {
          id: 'spherical-rx',
          type: 'paragraph',
          content: {
            text: 'On a prescription, spherical power is indicated in the "sphere" or "sph" column. For example, a prescription of "+2.00 DS" indicates a spherical lens with +2.00 diopters of power (DS stands for "diopters sphere").'
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
            definition: 'A lens with one or both surfaces having different curvatures in different meridians (like a section of a cylinder).',
            related: ['Astigmatism', 'Axis']
          }
        },
        {
          id: 'cylindrical-explanation',
          type: 'paragraph',
          content: {
            text: 'Unlike spherical lenses, cylindrical lenses have different powers in different meridians. They have no power along one meridian (the axis) and maximum power 90 degrees away from this meridian.'
          }
        },
        {
          id: 'cylindrical-analogy',
          type: 'paragraph',
          content: {
            text: 'Think of the surface of a cylindrical lens as being shaped like the side of a can — it curves in one direction but not in the perpendicular direction.'
          }
        },
        {
          id: 'cylindrical-image',
          type: 'image',
          content: {
            src: '/assets/images/study/cylindrical-lens.jpg',
            alt: 'Diagram of a cylindrical lens showing different curvatures',
            caption: 'A cylindrical lens with different curvatures in different meridians',
            width: '70%'
          }
        },
        {
          id: 'astigmatism-correction',
          type: 'paragraph',
          content: {
            text: 'Cylindrical lenses are used to correct astigmatism, a condition where the cornea or lens has an irregular shape, causing light to focus at multiple points rather than a single point on the retina.'
          }
        },
        {
          id: 'cylindrical-rx',
          type: 'paragraph',
          content: {
            text: 'On a prescription, cylindrical power is indicated in the "cylinder" or "cyl" column, and the orientation is specified by the "axis" (measured in degrees from 1 to 180). For example, a prescription of "+2.00 -1.00 x 180" means a lens with +2.00 diopters of spherical power combined with -1.00 diopters of cylindrical power at axis 180.'
          }
        },
        {
          id: 'axis-explanation',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Understanding Axis',
            text: 'The axis of a cylindrical lens specifies the orientation of the lens. It\'s measured in degrees from 1 to 180, with 90° representing vertical and 180° representing horizontal. The axis indicates the meridian that has no cylindrical power.'
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
          id: 'prescription-interpretation',
          type: 'heading',
          content: {
            text: 'Prescription Interpretation',
            level: 3
          }
        },
        {
          id: 'rx-example',
          type: 'paragraph',
          content: {
            text: 'Understanding lens types is essential for correctly interpreting eyeglass prescriptions. Let\'s break down some example prescriptions:'
          }
        },
        {
          id: 'rx-table',
          type: 'table',
          content: {
            headers: ['Prescription', 'Interpretation'],
            rows: [
              ['+2.00 DS', 'A spherical convex lens with +2.00 diopters of power. Used for hyperopia.'],
              ['-3.50 DS', 'A spherical concave lens with -3.50 diopters of power. Used for myopia.'],
              ['+1.50 -0.75 x 90', 'A sphero-cylindrical lens with +1.50 diopters of sphere power and -0.75 diopters of cylinder power at axis 90. Used for hyperopia with astigmatism.'],
              ['-2.25 -1.25 x 180', 'A sphero-cylindrical lens with -2.25 diopters of sphere power and -1.25 diopters of cylinder power at axis 180. Used for myopia with astigmatism.']
            ],
            caption: 'Examples of prescription interpretation'
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
            text: 'When selecting lenses for patients, consider the following factors:'
          }
        },
        {
          id: 'lens-selection-list',
          type: 'list',
          content: {
            items: [
              'Prescription strength: Higher prescriptions may benefit from high-index materials to reduce thickness',
              'Lens diameter: Larger frames require larger lenses, which increases edge thickness in minus lenses',
              'Cosmetic appearance: Convex lenses magnify the eyes, while concave lenses minify them',
              'Intended use: Reading glasses, computer glasses, and distance glasses may require different lens types',
              'Patient age: Children may need more impact-resistant materials like polycarbonate'
            ],
            ordered: false
          }
        },
        {
          id: 'dispensing-tips',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Dispensing Tip',
            text: 'For patients with strong minus prescriptions, recommend smaller frames to minimize edge thickness. For strong plus prescriptions, advise on anti-reflective coatings to reduce internal reflections and improve cosmetic appearance.'
          }
        }
      ]
    }
  ],
  summary: 'This module covered the fundamental types of ophthalmic lenses. We explored the differences between convex (plus) and concave (minus) lenses, and how they correct hyperopia and myopia, respectively. We also examined spherical lenses, which have uniform power in all meridians, and cylindrical lenses, which have varying power across different meridians to correct astigmatism. Understanding these basic lens types provides the foundation for more advanced topics in opticianry, such as multifocal lenses, specialty lenses, and lens materials. By mastering these concepts, you\'ll be better equipped to interpret prescriptions and recommend appropriate lenses for patients\' specific visual needs.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2003). Ophthalmic Lenses and Dispensing. Butterworth-Heinemann.',
    'Fannin, T. E., & Grosvenor, T. (1996). Clinical Optics. Butterworth-Heinemann.',
    'American Board of Opticianry. (2022). Exam Content Outline.'
  ]
}; 