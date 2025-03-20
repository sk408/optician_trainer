import { TopicStudyContent } from '../../interfaces/StudyContent';
import { lensCoatingImages } from '../mediaAssets';

export const lensCoatingsContent: TopicStudyContent = {
  topicId: 'lens-coatings',
  title: 'Lens Coatings & Treatments',
  introduction: 'Modern ophthalmic lenses benefit significantly from various coatings and treatments that enhance performance, durability, and comfort. These add-ons transform basic lenses into specialized visual solutions tailored to each patient\'s needs. This module covers the most common lens enhancements available today, their benefits, applications, and how to recommend them appropriately.',
  objectives: [
    'Identify the major types of lens coatings and treatments',
    'Understand the benefits and limitations of each enhancement',
    'Learn which lens materials are compatible with different coatings',
    'Develop skills for recommending appropriate lens enhancements based on patient needs',
    'Recognize how to properly clean and maintain coated lenses',
    'Learn how to explain the value of lens coatings to patients'
  ],
  sections: [
    {
      id: 'introduction-section',
      title: 'Introduction to Lens Enhancements',
      type: 'introduction',
      content: [
        {
          id: 'intro-heading',
          type: 'heading',
          content: {
            text: 'The Value of Lens Coatings and Treatments',
            level: 2
          }
        },
        {
          id: 'intro-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'While the lens material provides the foundation for vision correction, coatings and treatments transform basic lenses into advanced visual solutions. These enhancements can improve optical performance, extend lens life, increase comfort, and provide specialized functions for specific environments or conditions.'
          }
        },
        {
          id: 'enhancement-types-heading',
          type: 'heading',
          content: {
            text: 'Types of Lens Enhancements',
            level: 3
          }
        },
        {
          id: 'enhancement-types-list',
          type: 'list',
          content: {
            items: [
              'Anti-reflective coatings: Reduce glare and reflections',
              'Scratch-resistant coatings: Improve durability',
              'UV protective treatments: Block harmful ultraviolet radiation',
              'Blue light filtering: Reduce exposure to high-energy visible light',
              'Photochromic treatments: Darken in response to UV light',
              'Polarized lenses: Eliminate glare from reflective surfaces',
              'Hydrophobic coatings: Repel water and resist smudges',
              'Anti-fog treatments: Prevent condensation on lens surfaces'
            ],
            ordered: false
          }
        },
        {
          id: 'coating-vs-treatment-heading',
          type: 'heading',
          content: {
            text: 'Coatings vs. Treatments',
            level: 3
          }
        },
        {
          id: 'coating-vs-treatment-paragraph',
          type: 'paragraph',
          content: {
            text: 'The terms "coating" and "treatment" are often used interchangeably, but they represent different enhancement methods:'
          }
        },
        {
          id: 'coating-definition',
          type: 'definition',
          content: {
            term: 'Coating',
            definition: 'A layer of material applied to the lens surface to provide a specific benefit.',
            related: ['anti-reflective', 'scratch-resistant']
          }
        },
        {
          id: 'treatment-definition',
          type: 'definition',
          content: {
            term: 'Treatment',
            definition: 'A process that changes the properties of the lens material itself rather than adding a separate layer.',
            related: ['photochromic', 'polarization']
          }
        },
        {
          id: 'coatings-importance-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Value Proposition',
            text: 'Lens coatings and treatments often represent the difference between a basic vision correction device and a premium visual solution. Recommending appropriate enhancements demonstrates your expertise and commitment to optimizing patients\' visual experience.'
          }
        }
      ]
    },
    {
      id: 'anti-reflective-section',
      title: 'Anti-Reflective Coatings',
      type: 'main',
      content: [
        {
          id: 'ar-heading',
          type: 'heading',
          content: {
            text: 'Anti-Reflective (AR) Coatings',
            level: 2
          }
        },
        {
          id: 'ar-definition',
          type: 'definition',
          content: {
            term: 'Anti-Reflective Coating',
            definition: 'A multi-layer coating applied to lens surfaces that reduces reflections, eliminates glare, and increases light transmission.',
            related: ['glare reduction', 'light transmission']
          }
        },
        {
          id: 'ar-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Anti-reflective coatings work by minimizing the reflection of light from the lens surface. Uncoated lenses reflect approximately 8% of incident light, creating distracting reflections and reducing the amount of light reaching the eye. AR coatings can reduce reflections to less than 1%, allowing more light to pass through the lens and providing clearer vision.'
          }
        },
        {
          id: 'ar-coating-comparison',
          type: 'image',
          content: {
            src: lensCoatingImages.arCoatingComparison.path,
            alt: 'Comparison of lenses with and without AR coating',
            caption: 'Left: Lens without AR coating showing reflections. Right: Lens with AR coating showing reduced reflections.'
          }
        },
        {
          id: 'ar-benefits-heading',
          type: 'heading',
          content: {
            text: 'Benefits of AR Coatings',
            level: 3
          }
        },
        {
          id: 'ar-benefits-list',
          type: 'list',
          content: {
            items: [
              'Improved visual clarity and contrast',
              'Reduced eye fatigue, especially when using digital devices',
              'Enhanced cosmetic appearance (others can see your eyes better)',
              'Reduced halos and streaks when driving at night',
              'Increased light transmission for better low-light vision',
              'Reduced reflections in photographs'
            ],
            ordered: false
          }
        },
        {
          id: 'ar-types-heading',
          type: 'heading',
          content: {
            text: 'Types of AR Coatings',
            level: 3
          }
        },
        {
          id: 'ar-types-paragraph',
          type: 'paragraph',
          content: {
            text: 'AR coatings have evolved significantly, with several generations now available:'
          }
        },
        {
          id: 'ar-types-table',
          type: 'table',
          content: {
            headers: ['Type', 'Features', 'Durability'],
            rows: [
              ['Standard AR', 'Basic reflection reduction', 'Good'],
              ['Premium AR', 'Includes scratch resistance, water/oil repellency', 'Very Good'],
              ['Ultra-Premium AR', 'Includes all premium features plus enhanced durability and easier cleaning', 'Excellent'],
              ['Specialized AR', 'Designed for specific needs (e.g., blue light filtering, enhanced night vision)', 'Varies']
            ],
            caption: 'Comparison of different AR coating types'
          }
        },
        {
          id: 'ar-material-compatibility-heading',
          type: 'heading',
          content: {
            text: 'Material Compatibility',
            level: 3
          }
        },
        {
          id: 'ar-material-paragraph',
          type: 'paragraph',
          content: {
            text: 'AR coatings can be applied to virtually all lens materials, but they are particularly important for high-index lenses. Higher index materials naturally reflect more light (up to 50% more than CR-39), making AR coating almost essential for these lenses.'
          }
        },
        {
          id: 'ar-care-heading',
          type: 'heading',
          content: {
            text: 'Care and Maintenance',
            level: 3
          }
        },
        {
          id: 'ar-care-list',
          type: 'list',
          content: {
            items: [
              'Clean with lens cleaner specifically formulated for coated lenses',
              'Use a microfiber cloth rather than paper products or clothing',
              'Rinse lenses with water before wiping to remove abrasive particles',
              'Avoid harsh chemicals like ammonia, bleach, or vinegar',
              'Store glasses in a protective case when not in use'
            ],
            ordered: false
          }
        },
        {
          id: 'ar-recommendation-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Dispensing Tip',
            text: 'AR coating is considered essential for high-index lenses, computer users, and patients who drive at night. It\'s also highly recommended for those who are frequently photographed or recorded on video.'
          }
        }
      ]
    },
    {
      id: 'scratch-resistant-section',
      title: 'Scratch-Resistant Coatings',
      type: 'main',
      content: [
        {
          id: 'scratch-heading',
          type: 'heading',
          content: {
            text: 'Scratch-Resistant Coatings',
            level: 2
          }
        },
        {
          id: 'scratch-definition',
          type: 'definition',
          content: {
            term: 'Scratch-Resistant Coating',
            definition: 'A hard coating applied to lens surfaces to improve durability and resistance to abrasion.',
            related: ['hardcoat', 'durability']
          }
        },
        {
          id: 'scratch-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Scratch-resistant coatings (often called hardcoats) create a protective barrier that shields softer lens materials from damage. While no lens is truly scratch-proof, these coatings significantly improve durability by making the surface harder and more resistant to everyday wear and tear.'
          }
        },
        {
          id: 'scratch-importance-heading',
          type: 'heading',
          content: {
            text: 'Importance for Different Materials',
            level: 3
          }
        },
        {
          id: 'scratch-importance-table',
          type: 'table',
          content: {
            headers: ['Lens Material', 'Natural Scratch Resistance', 'Hardcoat Importance'],
            rows: [
              ['CR-39', 'Moderate', 'Recommended'],
              ['Polycarbonate', 'Poor', 'Essential'],
              ['Trivex', 'Poor to Moderate', 'Essential'],
              ['High-Index', 'Poor to Moderate', 'Essential'],
              ['Glass', 'Excellent', 'Not needed']
            ],
            caption: 'Scratch resistance by lens material and hardcoat necessity'
          }
        },
        {
          id: 'scratch-application-heading',
          type: 'heading',
          content: {
            text: 'Application Methods',
            level: 3
          }
        },
        {
          id: 'scratch-application-paragraph',
          type: 'paragraph',
          content: {
            text: 'Scratch-resistant coatings can be applied in different ways, depending on the lens material and manufacturing process:'
          }
        },
        {
          id: 'scratch-application-list',
          type: 'list',
          content: {
            items: [
              'Dip coating: Lenses are dipped in the coating solution for complete coverage',
              'Spin coating: Coating is applied while the lens rotates for even distribution',
              'Factory-applied: Many lenses come with scratch resistance already integrated during manufacturing',
              'In-office application: Less common but available for specialty applications'
            ],
            ordered: false
          }
        },
        {
          id: 'scratch-limitations-heading',
          type: 'heading',
          content: {
            text: 'Limitations',
            level: 3
          }
        },
        {
          id: 'scratch-limitations-paragraph',
          type: 'paragraph',
          content: {
            text: 'While scratch-resistant coatings provide significant benefits, they have some limitations:'
          }
        },
        {
          id: 'scratch-limitations-list',
          type: 'list',
          content: {
            items: [
              'Not scratch-proof: They reduce but don\'t eliminate the risk of scratches',
              'May be damaged by certain chemicals or cleaners',
              'Can\'t protect against severe impacts or extreme conditions',
              'Quality varies significantly between brands and products'
            ],
            ordered: false
          }
        },
        {
          id: 'scratch-care-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Patient Education',
            text: 'Educate patients that "scratch-resistant" doesn\'t mean "scratch-proof." Even with the best coating, proper care is essential. Always recommend using a case, avoiding contact with abrasive surfaces, and cleaning with appropriate products.'
          }
        }
      ]
    },
    {
      id: 'uv-protection-section',
      title: 'UV Protection',
      type: 'main',
      content: [
        {
          id: 'uv-heading',
          type: 'heading',
          content: {
            text: 'UV Protective Treatments',
            level: 2
          }
        },
        {
          id: 'uv-definition',
          type: 'definition',
          content: {
            term: 'UV Protection',
            definition: 'A treatment or coating that blocks harmful ultraviolet radiation from passing through the lens to the eye.',
            related: ['UV-A', 'UV-B', 'eye health']
          }
        },
        {
          id: 'uv-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'UV protection in eyewear is crucial for long-term eye health. Prolonged exposure to ultraviolet radiation has been linked to cataracts, macular degeneration, pinguecula, pterygium, and photokeratitis. Quality eyewear should provide 100% protection against both UV-A (315-400nm) and UV-B (280-315nm) radiation.'
          }
        },
        {
          id: 'uv-material-heading',
          type: 'heading',
          content: {
            text: 'UV Protection by Material',
            level: 3
          }
        },
        {
          id: 'uv-material-paragraph',
          type: 'paragraph',
          content: {
            text: 'Some lens materials inherently block UV radiation, while others require additional treatment:'
          }
        },
        {
          id: 'uv-material-table',
          type: 'table',
          content: {
            headers: ['Lens Material', 'Inherent UV Protection', 'Additional Treatment Needed?'],
            rows: [
              ['CR-39', 'Blocks ~88% of UV', 'Yes - for 100% protection'],
              ['Polycarbonate', 'Blocks 100% of UV', 'No'],
              ['Trivex', 'Blocks 100% of UV', 'No'],
              ['High-Index (1.60+)', 'Varies by product', 'Usually needed'],
              ['Glass', 'Blocks most UV-B but limited UV-A', 'Yes']
            ],
            caption: 'UV protection properties by lens material'
          }
        },
        {
          id: 'uv-methods-heading',
          type: 'heading',
          content: {
            text: 'UV Protection Methods',
            level: 3
          }
        },
        {
          id: 'uv-methods-list',
          type: 'list',
          content: {
            items: [
              'UV absorbers in the lens material (inherent protection)',
              'UV-absorbing coating applied to the lens surface',
              'Dye treatments that absorb UV radiation',
              'Combination methods for comprehensive protection'
            ],
            ordered: false
          }
        },
        {
          id: 'uv-backside-heading',
          type: 'heading',
          content: {
            text: 'Backside UV Protection',
            level: 3
          }
        },
        {
          id: 'uv-backside-paragraph',
          type: 'paragraph',
          content: {
            text: 'Recent advancements have highlighted the importance of backside UV protection. Traditional UV treatments focus on blocking radiation coming through the front of the lens, but UV rays can also reflect off surfaces behind the wearer and reach the eye from behind the lens. Some premium coatings now provide UV protection on both lens surfaces to address this issue.'
          }
        },
        {
          id: 'uv-importance-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Essential Protection',
            text: 'UV protection should be considered essential for all prescription eyewear, not just sunglasses. Recommending 100% UV protection for all patients demonstrates your commitment to their long-term eye health.'
          }
        }
      ]
    },
    {
      id: 'photochromic-section',
      title: 'Photochromic Lenses',
      type: 'main',
      content: [
        {
          id: 'photochromic-heading',
          type: 'heading',
          content: {
            text: 'Photochromic Lenses',
            level: 2
          }
        },
        {
          id: 'photochromic-definition',
          type: 'definition',
          content: {
            term: 'Photochromic Lenses',
            definition: 'Lenses that automatically darken when exposed to ultraviolet radiation and return to clear when UV exposure decreases.',
            related: ['light-adaptive', 'transitions']
          }
        },
        {
          id: 'photochromic-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Photochromic lenses contain special molecules that change structure when exposed to UV radiation, causing the lens to darken. When UV exposure decreases, the molecules return to their original state, and the lens becomes clear again. This provides convenient sun protection without requiring a separate pair of sunglasses.'
          }
        },
        {
          id: 'photochromic-technology-heading',
          type: 'heading',
          content: {
            text: 'Photochromic Technologies',
            level: 3
          }
        },
        {
          id: 'photochromic-technology-paragraph',
          type: 'paragraph',
          content: {
            text: 'Several photochromic technologies are available, each with unique characteristics:'
          }
        },
        {
          id: 'photochromic-technology-list',
          type: 'list',
          content: {
            items: [
              'Silver halide (traditional): Molecules embedded within the lens material',
              'Pyridine-based: Newer chemistry offering faster transitions and better performance',
              'Surface-layer technology: Photochromic molecules in a coating on the lens surface',
              'Matrix-based: Combines multiple technologies for enhanced performance'
            ],
            ordered: false
          }
        },
        {
          id: 'photochromic-performance-heading',
          type: 'heading',
          content: {
            text: 'Performance Considerations',
            level: 3
          }
        },
        {
          id: 'photochromic-performance-paragraph',
          type: 'paragraph',
          content: {
            text: 'Several factors affect photochromic lens performance:'
          }
        },
        {
          id: 'photochromic-performance-list',
          type: 'list',
          content: {
            items: [
              'Temperature: Most photochromics darken more in colder temperatures and less in warmer temperatures',
              'Age: Performance diminishes over time (typically 2-3 years of regular use)',
              'UV exposure: Requires UV radiation to activate (may not darken inside vehicles with UV-blocking windshields)',
              'Lens material: Activation speed and darkness vary by material',
              'Brand and generation: Newer products generally offer improved performance'
            ],
            ordered: false
          }
        },
        {
          id: 'photochromic-material-heading',
          type: 'heading',
          content: {
            text: 'Material Compatibility',
            level: 3
          }
        },
        {
          id: 'photochromic-material-paragraph',
          type: 'paragraph',
          content: {
            text: 'Photochromic treatments are available for most lens materials, but performance characteristics vary:'
          }
        },
        {
          id: 'photochromic-material-table',
          type: 'table',
          content: {
            headers: ['Lens Material', 'Activation Speed', 'Darkness Level', 'Fade-Back Speed'],
            rows: [
              ['CR-39', 'Good', 'Excellent', 'Moderate'],
              ['Polycarbonate', 'Moderate', 'Good', 'Moderate'],
              ['Trivex', 'Good', 'Very Good', 'Good'],
              ['High-Index', 'Moderate', 'Good', 'Moderate'],
              ['Glass', 'Slow', 'Excellent', 'Slow']
            ],
            caption: 'Photochromic performance by lens material'
          }
        },
        {
          id: 'photochromic-patient-education-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Patient Expectations',
            text: 'Set realistic expectations with patients about photochromic performance. Explain that they may not darken significantly inside vehicles, may perform differently based on temperature, and are not a complete replacement for dedicated sunglasses in extremely bright conditions.'
          }
        }
      ]
    },
    {
      id: 'blue-light-section',
      title: 'Blue Light Filtering',
      type: 'main',
      content: [
        {
          id: 'blue-light-heading',
          type: 'heading',
          content: {
            text: 'Blue Light Filtering',
            level: 2
          }
        },
        {
          id: 'blue-light-definition',
          type: 'definition',
          content: {
            term: 'Blue Light Filtering',
            definition: 'A lens feature that reduces transmission of high-energy visible (HEV) blue light, typically in the 380-500nm wavelength range.',
            related: ['digital eye strain', 'HEV light']
          }
        },
        {
          id: 'blue-light-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Blue light filtering has gained popularity with the increased use of digital devices, which emit significant amounts of blue light. While research continues on the long-term effects of blue light exposure, these filters may help reduce digital eye strain and potentially protect retinal cells from damage. They may also help maintain healthy sleep patterns by reducing blue light exposure in the evening.'
          }
        },
        {
          id: 'blue-light-methods-heading',
          type: 'heading',
          content: {
            text: 'Filtering Methods',
            level: 3
          }
        },
        {
          id: 'blue-light-methods-list',
          type: 'list',
          content: {
            items: [
              'Anti-reflective coatings with blue-filtering properties',
              'Absorptive lens materials with blue-filtering molecules',
              'Surface treatments that selectively filter blue wavelengths',
              'Light tints that absorb blue light (typically yellow/amber in color)'
            ],
            ordered: false
          }
        },
        {
          id: 'blue-light-appearance-heading',
          type: 'heading',
          content: {
            text: 'Aesthetic Considerations',
            level: 3
          }
        },
        {
          id: 'blue-light-appearance-paragraph',
          type: 'paragraph',
          content: {
            text: 'Blue light filtering technology varies in its visual appearance:'
          }
        },
        {
          id: 'blue-light-appearance-list',
          type: 'list',
          content: {
            items: [
              'Clear lenses with minimal visible tint (most popular for everyday use)',
              'Lenses with a slight yellow or amber tint (more noticeable but often more effective)',
              'Lenses with a reflective blue sheen on the front surface (typical of some coatings)',
              'Significantly tinted lenses for maximum filtering (usually for specific activities)'
            ],
            ordered: false
          }
        },
        {
          id: 'blue-light-evidence-heading',
          type: 'heading',
          content: {
            text: 'The Evidence Perspective',
            level: 3
          }
        },
        {
          id: 'blue-light-evidence-paragraph',
          type: 'paragraph',
          content: {
            text: 'It\'s important to understand the current state of scientific evidence regarding blue light filtering:'
          }
        },
        {
          id: 'blue-light-evidence-list',
          type: 'list',
          content: {
            items: [
              'Strong evidence that blue light affects circadian rhythm and may disrupt sleep when exposed in the evening',
              'Moderate evidence that reducing blue light may help reduce digital eye strain symptoms',
              'Limited evidence of long-term retinal damage from blue light from digital devices',
              'Ongoing research into both potential benefits and limitations of blue light filtering'
            ],
            ordered: false
          }
        },
        {
          id: 'blue-light-recommendation-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Recommendation Guidance',
            text: 'When discussing blue light filtering, focus on the demonstrated benefits of reduced eye strain and potential sleep improvements rather than making definitive claims about eye disease prevention. This approach is both evidence-based and valuable to patients.'
          }
        }
      ]
    },
    {
      id: 'summary-section',
      title: 'Module Summary',
      type: 'summary',
      content: [
        {
          id: 'summary-heading',
          type: 'heading',
          content: {
            text: 'Key Takeaways',
            level: 2
          }
        },
        {
          id: 'summary-list',
          type: 'list',
          content: {
            items: [
              'Lens coatings and treatments transform basic lenses into specialized visual solutions',
              'Anti-reflective coatings reduce glare and improve optical clarity, making them essential for high-index lenses and digital device users',
              'Scratch-resistant coatings improve durability but don\'t make lenses scratch-proof',
              'UV protection is critical for long-term eye health and should be included in all eyewear',
              'Photochromic lenses offer convenience but have performance limitations patients should understand',
              'Blue light filtering may help reduce digital eye strain and support healthy sleep patterns',
              'The ideal combination of coatings depends on the patient\'s prescription, lifestyle, and visual needs'
            ],
            ordered: false
          }
        },
        {
          id: 'next-steps-paragraph',
          type: 'paragraph',
          content: {
            text: 'Understanding lens coatings and treatments allows you to customize eyewear solutions for each patient\'s unique needs. Combined with your knowledge of lens materials and designs, you can create truly personalized vision solutions that optimize both vision and eye health.'
          }
        }
      ]
    }
  ],
  summary: 'Lens coatings and treatments enhance the performance, durability, and comfort of ophthalmic lenses. Anti-reflective coatings reduce glare and improve visual clarity by minimizing reflected light. Scratch-resistant coatings improve durability, particularly important for softer materials like polycarbonate. UV protection shields the eyes from harmful radiation, with some materials providing inherent protection while others require additional treatment. Photochromic lenses automatically darken in response to UV light, offering convenience but with performance factors to consider. Blue light filtering may help reduce digital eye strain and support healthy sleep patterns. The optimal combination of these enhancements depends on the patient\'s prescription, lifestyle needs, and visual requirements.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2008). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'American Optometric Association. (2022). Blue Light Impact in Vision.',
    'The Vision Council. (2023). Lens Processing and Technology Report.',
    'Transitions Optical, Inc. (2022). Photochromic Performance Guide.'
  ],
  practiceQuestions: [
    {
      question: 'Which coating is most important for high-index lenses?',
      options: [
        'Scratch-resistant coating',
        'Anti-reflective coating',
        'UV protection',
        'Blue light filtering'
      ],
      correctAnswer: 1,
      explanation: 'Anti-reflective coating is most important for high-index lenses because these materials naturally reflect more light (up to 50% more than standard plastic). AR coating reduces these reflections, improving optical clarity and cosmetic appearance.'
    },
    {
      question: 'What is the main disadvantage of photochromic lenses?',
      options: [
        'They are much more expensive than regular lenses',
        'They don\'t work effectively behind windshields',
        'They can\'t be combined with anti-reflective coatings',
        'They significantly reduce visual acuity'
      ],
      correctAnswer: 1,
      explanation: 'The main disadvantage of photochromic lenses is that they don\'t activate effectively behind car windshields, as modern automotive glass blocks much of the UV light that triggers the darkening reaction. This limits their usefulness for driving.'
    },
    {
      question: 'Which lens material provides inherent UV protection without requiring additional treatments?',
      options: [
        'CR-39 (standard plastic)',
        'Crown glass',
        'Polycarbonate',
        'Trivex'
      ],
      correctAnswer: 2,
      explanation: 'Polycarbonate inherently blocks 100% of UVA and UVB radiation without requiring additional treatments or coatings. Trivex also provides inherent UV protection, while CR-39 and crown glass require additional UV treatments.'
    },
    {
      question: 'What is the primary purpose of blue light filtering coatings?',
      options: [
        'To prevent retinal disease',
        'To reduce digital eye strain and improve sleep quality',
        'To make lenses appear more attractive',
        'To protect against UV radiation'
      ],
      correctAnswer: 1,
      explanation: 'The primary purpose of blue light filtering is to reduce digital eye strain when using electronic devices and to potentially improve sleep quality by limiting exposure to blue light in the evening, which can disrupt circadian rhythms.'
    },
    {
      question: 'How does scratch-resistant coating work?',
      options: [
        'By making the lens surface softer so it absorbs impacts',
        'By filling in microscopic surface imperfections',
        'By creating a harder surface layer on the lens',
        'By making the lens thicker'
      ],
      correctAnswer: 2,
      explanation: 'Scratch-resistant coatings work by creating a harder surface layer on the lens that resists abrasion better than the base lens material. They typically use silicone-based compounds or metal oxides to achieve this hardened surface.'
    }
  ]
}; 