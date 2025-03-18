import { TopicStudyContent } from '../../interfaces/StudyContent';

export const sunglassesAndTintsContent: TopicStudyContent = {
  topicId: 'sunglasses-tints',
  title: 'Sunglasses & Lens Tints',
  introduction: 'Sunglasses and tinted lenses serve both functional and fashion purposes in ophthalmic eyewear. Beyond UV protection, different tints can enhance visual performance in various lighting conditions, reduce glare, and improve contrast sensitivity. This module explores the world of sun protection, tints, and specialized lens colors for different visual needs.',
  objectives: [
    'Understand UV protection standards and their importance in eye health',
    'Identify different types of sunglasses and their intended uses',
    'Explain the benefits of various lens tints for specific activities',
    'Describe polarization and its advantages for glare reduction',
    'Understand how to recommend appropriate sun protection based on patient needs'
  ],
  sections: [
    {
      id: 'uv-protection',
      title: 'UV Protection & Eye Health',
      type: 'introduction',
      content: [
        {
          id: 'uv-def',
          type: 'definition',
          content: {
            term: 'Ultraviolet (UV) Radiation',
            definition: 'Invisible electromagnetic radiation with wavelengths from 100-400nm. UV radiation is divided into UVA (315-400nm), UVB (280-315nm), and UVC (100-280nm).',
            related: ['UV400', 'Photokeratitis', 'Solar Retinopathy']
          }
        },
        {
          id: 'uv-importance',
          type: 'paragraph',
          content: {
            text: 'UV protection is critical for long-term eye health. Extended UV exposure can lead to various eye conditions including cataracts, macular degeneration, pterygium, and photokeratitis. Quality sunglasses must block 99-100% of both UVA and UVB radiation.'
          }
        },
        {
          id: 'uv-standards',
          type: 'heading',
          content: {
            text: 'UV Protection Standards',
            level: 3
          }
        },
        {
          id: 'uv-standards-paragraph',
          type: 'paragraph',
          content: {
            text: 'Several standards exist for UV protection in eyewear:'
          }
        },
        {
          id: 'uv-standards-list',
          type: 'list',
          content: {
            items: [
              'UV400: Blocks all light rays with wavelengths up to 400 nanometers, covering all UVA and UVB rays.',
              'ANSI Z80.3: American National Standards Institute requirements for non-prescription sunglasses and fashion eyewear.',
              'EN ISO 12312-1: European standard for sunglasses and related eyewear.',
              'AS/NZS 1067: Australian/New Zealand sunglass standard with five categories of lens darkness.'
            ]
          }
        },
        {
          id: 'uv-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'UV Protection vs. Darkness',
            text: 'The darkness of a lens does not indicate its UV protection level. Clear lenses can provide 100% UV protection, while dark lenses without proper treatment may still allow UV radiation to reach the eye.'
          }
        }
      ]
    },
    {
      id: 'sunglass-types',
      title: 'Types of Sunglasses',
      type: 'main',
      content: [
        {
          id: 'sunglass-types-intro',
          type: 'paragraph',
          content: {
            text: 'Sunglasses come in many formats and styles, each designed for different purposes and activities.'
          }
        },
        {
          id: 'fashion-sunglasses',
          type: 'heading',
          content: {
            text: 'Fashion Sunglasses',
            level: 3
          }
        },
        {
          id: 'fashion-sunglasses-paragraph',
          type: 'paragraph',
          content: {
            text: 'Fashion sunglasses prioritize aesthetics while providing basic UV protection. They come in countless styles, colors, and designs but may not offer specialized features for performance or extreme conditions.'
          }
        },
        {
          id: 'sport-sunglasses',
          type: 'heading',
          content: {
            text: 'Sport & Performance Sunglasses',
            level: 3
          }
        },
        {
          id: 'sport-sunglasses-paragraph',
          type: 'paragraph',
          content: {
            text: 'Designed for athletic activities, these sunglasses feature impact-resistant materials, secure fit, ventilation to prevent fogging, and specialized lens tints to enhance visual performance in specific environments.'
          }
        },
        {
          id: 'polarized-sunglasses',
          type: 'heading',
          content: {
            text: 'Polarized Sunglasses',
            level: 3
          }
        },
        {
          id: 'polarized-def',
          type: 'definition',
          content: {
            term: 'Polarization',
            definition: 'A filter technology that blocks horizontal light waves, eliminating glare reflected from flat surfaces like water, snow, or roads.',
            related: ['Glare Reduction', 'Photochromic Lenses', 'Anti-reflective Coating']
          }
        },
        {
          id: 'polarized-paragraph',
          type: 'paragraph',
          content: {
            text: 'Polarized lenses dramatically reduce glare from reflective surfaces, making them ideal for driving, fishing, and water sports. They improve visual comfort and can enhance contrast and visual clarity in bright conditions.'
          }
        },
        {
          id: 'polarized-limitations',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Polarization Limitations',
            text: 'Polarized lenses can make it difficult to see LCD screens, may affect depth perception in certain conditions, and can reduce visibility on icy surfaces where glare can signal dangerous conditions.'
          }
        },
        {
          id: 'wrap-around',
          type: 'heading',
          content: {
            text: 'Wrap-Around Sunglasses',
            level: 3
          }
        },
        {
          id: 'wrap-around-paragraph',
          type: 'paragraph',
          content: {
            text: 'Wrap-around designs provide extended coverage, protecting eyes from peripheral light entry. They\'re ideal for high-glare environments and activities like cycling, skiing, and mountain climbing where side protection is important.'
          }
        },
        {
          id: 'prescription-sunglasses',
          type: 'heading',
          content: {
            text: 'Prescription Sunglasses',
            level: 3
          }
        },
        {
          id: 'prescription-sunglasses-paragraph',
          type: 'paragraph',
          content: {
            text: 'Prescription sunglasses combine vision correction with sun protection. They can incorporate all the features of non-prescription sunglasses, including polarization, specialized tints, and wrap-around designs.'
          }
        }
      ]
    },
    {
      id: 'lens-tints',
      title: 'Lens Tints & Their Applications',
      type: 'main',
      content: [
        {
          id: 'tints-intro',
          type: 'paragraph',
          content: {
            text: 'Lens tints serve both functional and aesthetic purposes. Different colors filter specific wavelengths of light, enhancing certain visual qualities for particular environments and activities.'
          }
        },
        {
          id: 'tint-categories',
          type: 'heading',
          content: {
            text: 'Tint Categories',
            level: 3
          }
        },
        {
          id: 'tint-table',
          type: 'table',
          content: {
            headers: ['Tint Color', 'Light Transmission', 'Best For', 'Visual Effects'],
            rows: [
              ['Gray', '10-30%', 'General use, bright sunny days', 'Reduces brightness without color distortion'],
              ['Brown/Amber', '15-30%', 'Variable light conditions, sports', 'Enhances contrast, depth perception'],
              ['Green', '15-30%', 'General use, water activities', 'Filters some blue light, good color balance'],
              ['Yellow/Gold', '60-90%', 'Low light, fog, haze, indoor shooting', 'Enhances contrast in low light'],
              ['Rose/Red', '30-60%', 'Overcast days, snow sports', 'Enhances contrast, depth perception'],
              ['Blue/Purple', '20-40%', 'Moderate light, fashion', 'Reduces yellow light, aesthetic appeal'],
              ['Mirrored', 'Varies', 'Very bright conditions, snow, water', 'Reduced light entry, reduced visible lens']
            ],
            caption: 'Common lens tints, their light transmission values, and ideal applications.'
          }
        },
        {
          id: 'gray-tint',
          type: 'heading',
          content: {
            text: 'Gray Tints',
            level: 3
          }
        },
        {
          id: 'gray-tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Gray is the most neutral tint, reducing light intensity without altering color perception. It\'s ideal for general use and driving where accurate color recognition is important. Gray tints are available in various densities from light (70% transmission) to very dark (10% transmission).'
          }
        },
        {
          id: 'brown-tint',
          type: 'heading',
          content: {
            text: 'Brown/Amber Tints',
            level: 3
          }
        },
        {
          id: 'brown-tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Brown tints filter blue light, enhancing contrast and depth perception. They\'re excellent for variable light conditions and sports like golf, fishing, and hunting where enhanced contrast aids performance. Brown lenses work well in moderate to bright conditions.'
          }
        },
        {
          id: 'green-tint',
          type: 'heading',
          content: {
            text: 'Green Tints',
            level: 3
          }
        },
        {
          id: 'green-tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Green tints provide good color balance and contrast while filtering some blue light. They reduce glare and are ideal for precision activities in moderate to bright light. Green is a popular choice for water activities and general outdoor use.'
          }
        },
        {
          id: 'yellow-tint',
          type: 'heading',
          content: {
            text: 'Yellow/Gold Tints',
            level: 3
          }
        },
        {
          id: 'yellow-tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Yellow tints filter blue light significantly, increasing contrast and definition in low-light, foggy, or hazy conditions. They\'re not suitable for bright sunlight but excel for night driving, shooting sports, and skiing in flat light conditions.'
          }
        },
        {
          id: 'rose-tint',
          type: 'heading',
          content: {
            text: 'Rose/Red Tints',
            level: 3
          }
        },
        {
          id: 'rose-tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Rose tints enhance contrast and depth perception while providing good visibility in lower light conditions. They\'re ideal for snow sports, cloudy days, and activities where enhanced depth perception is beneficial.'
          }
        },
        {
          id: 'blue-tint',
          type: 'heading',
          content: {
            text: 'Blue/Purple Tints',
            level: 3
          }
        },
        {
          id: 'blue-tint-paragraph',
          type: 'paragraph',
          content: {
            text: 'Blue tints are primarily fashion-oriented but can reduce yellow light, enhancing contours in moderate light. They aren\'t recommended for driving due to their effect on traffic light and sign perception.'
          }
        },
        {
          id: 'mirror-coating',
          type: 'heading',
          content: {
            text: 'Mirror Coatings',
            level: 3
          }
        },
        {
          id: 'mirror-coating-paragraph',
          type: 'paragraph',
          content: {
            text: 'Mirror coatings reflect light away from the lens, reducing the amount entering the eye. They\'re applied over a base tint and are excellent for very bright conditions like snow sports, water activities, and high-altitude environments.'
          }
        }
      ]
    },
    {
      id: 'photochromic-lenses',
      title: 'Photochromic Lenses',
      type: 'main',
      content: [
        {
          id: 'photochromic-def',
          type: 'definition',
          content: {
            term: 'Photochromic Lenses',
            definition: 'Lenses that darken when exposed to UV radiation and return to clear when UV is removed, automatically adjusting to lighting conditions.',
            related: ['Transitions®', 'Light-Adaptive Lenses', 'Variable Tint Lenses']
          }
        },
        {
          id: 'photochromic-paragraph',
          type: 'paragraph',
          content: {
            text: 'Photochromic lenses offer the convenience of a single pair of glasses that works in both indoor and outdoor settings. They contain special molecules that change structure when exposed to UV radiation, causing the lens to darken.'
          }
        },
        {
          id: 'photochromic-types',
          type: 'heading',
          content: {
            text: 'Types of Photochromic Technologies',
            level: 3
          }
        },
        {
          id: 'photochromic-list',
          type: 'list',
          content: {
            items: [
              'Traditional photochromics (silver halide): First-generation technology that darkens gray or brown.',
              'Transitions® Signature™: Proprietary technology that darkens quickly and is available in multiple colors.',
              'Transitions® XTRActive®: Designed to activate behind car windshields and become extra dark outdoors.',
              'Transitions® Vantage®: Features variable polarization that increases as the lens darkens.',
              'SunSync®: Fast-reacting photochromic offering rapid fade-back to clear.',
              'Sensity®: Hoya\'s photochromic offering stable performance in different climates.'
            ]
          }
        },
        {
          id: 'photochromic-limitations',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Photochromic Limitations',
            text: 'Most photochromic lenses don\'t darken well inside vehicles because windshield glass blocks UV radiation. Temperature affects darkening speed and intensity, with lenses darkening less in hot weather. They may not get as dark as dedicated sunglasses.'
          }
        }
      ]
    },
    {
      id: 'special-purpose-tints',
      title: 'Special-Purpose Tints',
      type: 'advanced',
      content: [
        {
          id: 'blue-blockers',
          type: 'heading',
          content: {
            text: 'Blue Light Blocking Lenses',
            level: 3
          }
        },
        {
          id: 'blue-blockers-paragraph',
          type: 'paragraph',
          content: {
            text: 'Blue light filtering lenses reduce exposure to high-energy visible blue light emitted by digital screens and LED lighting. They typically have a slight yellow tint or a special coating that selectively filters blue wavelengths around 400-450nm.'
          }
        },
        {
          id: 'blue-blockers-benefits',
          type: 'list',
          content: {
            items: [
              'May reduce digital eye strain and fatigue',
              'May improve sleep quality when used before bedtime',
              'Can enhance contrast for some users',
              'Available in both prescription and non-prescription formats'
            ]
          }
        },
        {
          id: 'medical-filters',
          type: 'heading',
          content: {
            text: 'Medical Filter Lenses',
            level: 3
          }
        },
        {
          id: 'medical-filters-paragraph',
          type: 'paragraph',
          content: {
            text: 'Specialized medical filters are designed for patients with specific eye conditions like macular degeneration, cataracts, or retinitis pigmentosa. These filters selectively block certain wavelengths that cause discomfort or further damage.'
          }
        },
        {
          id: 'medical-filters-table',
          type: 'table',
          content: {
            headers: ['Filter Type', 'Color', 'Conditions Helped', 'Light Filtered'],
            rows: [
              ['FL-41', 'Rose', 'Migraine, photophobia, blepharospasm', 'Blue-green wavelengths around 480-500nm'],
              ['NoIR Medical', 'Various', 'Macular degeneration, photophobia', 'UV and various visible light spectra'],
              ['CPF (Corning Photochromic Filter)', 'Amber/Orange', 'Macular degeneration, diabetic retinopathy', 'Blue and UV light'],
              ['Melanin Lenses', 'Brownish', 'General eye protection, photophobia', 'Blue light and UV']
            ],
            caption: 'Specialized medical filter lenses for various eye conditions.'
          }
        },
        {
          id: 'diagnostic-tints',
          type: 'heading',
          content: {
            text: 'Diagnostic and Specialty Tints',
            level: 3
          }
        },
        {
          id: 'diagnostic-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some specialized tints are designed for specific professional applications, such as diagnostic procedures or specialized work environments.'
          }
        },
        {
          id: 'diagnostic-list',
          type: 'list',
          content: {
            items: [
              'Didymium glass: Used by glassblowers to filter sodium flare',
              'X-ray viewing glasses: Yellow tints to enhance contrast for reading radiographs',
              'Theatrical lighting filters: For lighting professionals to preview color effects',
              'Color vision deficiency filters: Enhance color discrimination for certain color vision deficiencies'
            ]
          }
        }
      ]
    },
    {
      id: 'dispensing-considerations',
      title: 'Dispensing & Recommendation Considerations',
      type: 'clinical',
      content: [
        {
          id: 'patient-assessment',
          type: 'heading',
          content: {
            text: 'Patient Assessment',
            level: 3
          }
        },
        {
          id: 'assessment-paragraph',
          type: 'paragraph',
          content: {
            text: 'When recommending sunglasses and tints, several factors must be considered:'
          }
        },
        {
          id: 'assessment-list',
          type: 'list',
          content: {
            items: [
              'Patient\'s primary activities and visual needs',
              'Existing eye conditions or light sensitivity issues',
              'Occupational requirements and environments',
              'Cosmetic preferences and style considerations',
              'Budget constraints and lifestyle factors'
            ]
          }
        },
        {
          id: 'rx-considerations',
          type: 'heading',
          content: {
            text: 'Prescription Considerations',
            level: 3
          }
        },
        {
          id: 'rx-paragraph',
          type: 'paragraph',
          content: {
            text: 'Incorporating tints into prescription eyewear requires additional considerations:'
          }
        },
        {
          id: 'rx-list',
          type: 'list',
          content: {
            items: [
              'Lens material compatibility with different tint options',
              'Base curve and wrap angle for sport and polarized sunglasses',
              'Minimum blank size needed for larger frames',
              'Interaction between coatings, treatments, and tints',
              'Potential need for multiple pairs for different activities'
            ]
          }
        },
        {
          id: 'proper-fit',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Proper Fit for Sun Protection',
            text: 'Sunglasses should fit properly with minimal gap between the frame and face to prevent UV exposure from the sides and top. Consider factors like nose bridge fit, temple length, and overall frame size to ensure adequate coverage.'
          }
        }
      ]
    }
  ],
  summary: 'Sunglasses and tinted lenses play a critical role in both eye protection and visual performance enhancement. UV protection is non-negotiable for eye health, while specialized tints can improve visual function in specific environments and activities. Understanding the properties and applications of different tint colors, polarization, photochromic technology, and specialty filters enables opticians to recommend appropriate eyewear solutions based on individual patient needs. When dispensing sunglasses, considerations should include UV protection standards, lens tint properties, frame design for adequate coverage, and compatibility with prescription requirements.',
  references: [
    'American Academy of Ophthalmology. (2020). "The Sun, UV Light and Your Eyes."',
    'Transitions Optical. (2021). "Photochromic Lens Technology Guide."',
    'American National Standards Institute. (2018). "ANSI Z80.3-2018: Ophthalmics - Nonprescription Sunglasses and Fashion Eyewear Requirements."',
    'Carlson, K. H., & Kurtz, D. (2004). "Clinical Procedures for Ocular Examination." (3rd ed.). McGraw-Hill Medical.',
    'Brooks, C. W., & Borish, I. M. (2007). "System for Ophthalmic Dispensing." (3rd ed.). Butterworth-Heinemann.'
  ]
}; 