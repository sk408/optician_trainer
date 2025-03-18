import { TopicStudyContent } from '../../interfaces/StudyContent';

export const lensMaterialsContent: TopicStudyContent = {
  topicId: 'lens-materials',
  title: 'Ophthalmic Lens Materials',
  introduction: 'The material a lens is made from significantly impacts its performance, appearance, weight, and durability. Understanding the properties of different lens materials is essential for recommending the most appropriate options for each patient. This module focuses on the most common lens materials used today, their properties, advantages, and appropriate applications.',
  objectives: [
    'Identify the major ophthalmic lens materials and their key properties',
    'Compare refractive indices, Abbe values, and specific gravity of different materials',
    'Understand how lens material selection affects thickness, weight, and optical quality',
    'Learn appropriate applications for different lens materials based on prescription',
    'Recognize material-specific considerations for processing and dispensing',
    'Develop skills for recommending lens materials based on patient needs'
  ],
  sections: [
    {
      id: 'introduction-section',
      title: 'Introduction to Lens Materials',
      type: 'introduction',
      content: [
        {
          id: 'intro-heading',
          type: 'heading',
          content: {
            text: 'The Evolution of Lens Materials',
            level: 2
          }
        },
        {
          id: 'intro-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Ophthalmic lenses have evolved significantly from their early glass origins. Today\'s lenses are predominantly made from various plastic materials that offer improved safety, lighter weight, and better optical properties. Understanding the characteristics of different materials helps opticians select the best option for each patient based on their prescription, lifestyle, and visual needs.'
          }
        },
        {
          id: 'key-material-properties-heading',
          type: 'heading',
          content: {
            text: 'Key Properties of Lens Materials',
            level: 3
          }
        },
        {
          id: 'key-properties-paragraph',
          type: 'paragraph',
          content: {
            text: 'When evaluating lens materials, several essential properties must be considered:'
          }
        },
        {
          id: 'key-properties-list',
          type: 'list',
          content: {
            items: [
              'Refractive Index: How efficiently the material bends light (higher values create thinner lenses)',
              'Abbe Value: A measure of chromatic aberration or color dispersion (higher values provide better optical quality)',
              'Specific Gravity: The material\'s density relative to water (affects weight)',
              'Impact Resistance: The material\'s ability to withstand impact without breaking',
              'UV Protection: Whether the material naturally blocks ultraviolet radiation',
              'Scratch Resistance: The material\'s resistance to surface scratches'
            ],
            ordered: false
          }
        },
        {
          id: 'properties-table',
          type: 'table',
          content: {
            headers: ['Material', 'Refractive Index', 'Abbe Value', 'Specific Gravity', 'Impact Resistance', 'UV Protection'],
            rows: [
              ['CR-39 (Hard Resin)', '1.498', '58', '1.32', 'Good', 'Poor'],
              ['Polycarbonate', '1.586', '30', '1.20', 'Excellent', 'Excellent'],
              ['Trivex', '1.53', '43-45', '1.11', 'Excellent', 'Excellent'],
              ['Mid-Index (1.54)', '1.54', '47', '1.30', 'Good', 'Variable'],
              ['Mid-Index (1.60)', '1.60', '36', '1.30', 'Good', 'Variable'],
              ['High-Index (1.67)', '1.67', '32', '1.35', 'Good', 'Variable'],
              ['High-Index (1.74)', '1.74', '33', '1.47', 'Fair', 'Variable'],
              ['Glass (Crown)', '1.523', '59', '2.54', 'Poor', 'Good']
            ],
            caption: 'Comparison of common lens material properties'
          }
        },
        {
          id: 'material-tradeoffs-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Material Trade-offs',
            text: 'Lens material selection often involves trade-offs. Materials with higher refractive indices (for thinner lenses) typically have lower Abbe values (more chromatic aberration). Finding the right balance for each patient is a key skill for opticians.'
          }
        }
      ]
    },
    {
      id: 'cr39-section',
      title: 'CR-39 (Hard Resin)',
      type: 'main',
      content: [
        {
          id: 'cr39-heading',
          type: 'heading',
          content: {
            text: 'CR-39 (Hard Resin)',
            level: 2
          }
        },
        {
          id: 'cr39-definition',
          type: 'definition',
          content: {
            term: 'CR-39',
            definition: 'A lightweight plastic lens material made from allyl diglycol carbonate (ADC) with excellent optical properties and moderate impact resistance.',
            related: ['hard resin', 'plastic lenses']
          }
        },
        {
          id: 'cr39-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'CR-39 (Columbia Resin #39) was the first widely adopted plastic lens material, introduced in the 1940s. Despite being one of the oldest plastic lens materials still in use, it remains popular due to its excellent optical clarity, good scratch resistance, and affordability.'
          }
        },
        {
          id: 'cr39-properties-heading',
          type: 'heading',
          content: {
            text: 'Key Properties',
            level: 3
          }
        },
        {
          id: 'cr39-properties-list',
          type: 'list',
          content: {
            items: [
              'Refractive Index: 1.498 (relatively low, resulting in thicker lenses for higher prescriptions)',
              'Abbe Value: 58 (excellent optical quality with minimal chromatic aberration)',
              'Specific Gravity: 1.32 (about half the weight of glass)',
              'Impact Resistance: Good (passes FDA drop ball test but not as impact-resistant as polycarbonate or Trivex)',
              'UV Protection: Poor (requires additional UV coating)',
              'Tintability: Excellent (easily accepts tints in a wide range of colors and densities)'
            ],
            ordered: false
          }
        },
        {
          id: 'cr39-advantages-heading',
          type: 'heading',
          content: {
            text: 'Advantages',
            level: 3
          }
        },
        {
          id: 'cr39-advantages-list',
          type: 'list',
          content: {
            items: [
              'Excellent optical clarity with minimal distortion',
              'Good scratch resistance compared to other plastic materials',
              'Accepts all types of tints easily and evenly',
              'Affordable option for patients',
              'Compatible with most lens treatments and coatings',
              'Easy to process in optical labs'
            ],
            ordered: false
          }
        },
        {
          id: 'cr39-limitations-heading',
          type: 'heading',
          content: {
            text: 'Limitations',
            level: 3
          }
        },
        {
          id: 'cr39-limitations-list',
          type: 'list',
          content: {
            items: [
              'Thicker lenses for higher prescriptions',
              'Not recommended for rimless or semi-rimless frames due to potential chipping',
              'Less impact-resistant than polycarbonate or Trivex',
              'No inherent UV protection',
              'Not suitable for safety eyewear'
            ],
            ordered: false
          }
        },
        {
          id: 'cr39-best-applications-heading',
          type: 'heading',
          content: {
            text: 'Best Applications',
            level: 3
          }
        },
        {
          id: 'cr39-applications-paragraph',
          type: 'paragraph',
          content: {
            text: 'CR-39 is ideal for:'
          }
        },
        {
          id: 'cr39-applications-list',
          type: 'list',
          content: {
            items: [
              'Low to moderate prescriptions (±4.00 diopters or less)',
              'Patients who prioritize optical clarity over lens thickness',
              'Patients who require tinted lenses or photochromic lenses',
              'Budget-conscious patients',
              'Fully-rimmed frames that provide edge protection'
            ],
            ordered: false
          }
        },
        {
          id: 'cr39-dispensing-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Dispensing Tip',
            text: 'Always recommend a UV protective coating for CR-39 lenses, as they do not provide inherent UV protection like polycarbonate or Trivex lenses.'
          }
        }
      ]
    },
    {
      id: 'polycarbonate-section',
      title: 'Polycarbonate',
      type: 'main',
      content: [
        {
          id: 'polycarbonate-heading',
          type: 'heading',
          content: {
            text: 'Polycarbonate',
            level: 2
          }
        },
        {
          id: 'polycarbonate-definition',
          type: 'definition',
          content: {
            term: 'Polycarbonate',
            definition: 'A lightweight, highly impact-resistant thermoplastic lens material commonly used for safety eyewear and children\'s glasses.',
            related: ['safety lenses', 'impact resistance']
          }
        },
        {
          id: 'polycarbonate-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Polycarbonate was introduced to the optical industry in the 1970s after being used in aerospace applications. It quickly became popular due to its exceptional impact resistance, making it the standard material for safety eyewear and children\'s glasses. Its higher refractive index also produces thinner lenses than CR-39.'
          }
        },
        {
          id: 'polycarbonate-properties-heading',
          type: 'heading',
          content: {
            text: 'Key Properties',
            level: 3
          }
        },
        {
          id: 'polycarbonate-properties-list',
          type: 'list',
          content: {
            items: [
              'Refractive Index: 1.586 (creating lenses about 20% thinner than CR-39)',
              'Abbe Value: 30 (low, potentially causing noticeable chromatic aberration in higher prescriptions)',
              'Specific Gravity: 1.20 (lighter than CR-39 and glass)',
              'Impact Resistance: Excellent (10-20 times more impact-resistant than CR-39)',
              'UV Protection: Excellent (blocks 100% of UV-A and UV-B radiation)',
              'Scratch Resistance: Poor (requires hard coating)'
            ],
            ordered: false
          }
        },
        {
          id: 'polycarbonate-advantages-heading',
          type: 'heading',
          content: {
            text: 'Advantages',
            level: 3
          }
        },
        {
          id: 'polycarbonate-advantages-list',
          type: 'list',
          content: {
            items: [
              'Superior impact resistance making it virtually unbreakable in normal use',
              'Inherent 100% UV protection',
              'Lighter weight than CR-39 and other materials',
              'Thinner lenses for moderate to high prescriptions',
              'Suitable for rimless and semi-rimless frame styles',
              'Required material for many safety eyewear applications'
            ],
            ordered: false
          }
        },
        {
          id: 'polycarbonate-limitations-heading',
          type: 'heading',
          content: {
            text: 'Limitations',
            level: 3
          }
        },
        {
          id: 'polycarbonate-limitations-list',
          type: 'list',
          content: {
            items: [
              'Poor optical clarity (low Abbe value) causing chromatic aberration',
              'Very soft surface requiring scratch-resistant coating',
              'Limited tintability (doesn\'t accept dark tints well)',
              'More internal stress leading to potential warpage',
              'Higher cost compared to CR-39'
            ],
            ordered: false
          }
        },
        {
          id: 'polycarbonate-best-applications-heading',
          type: 'heading',
          content: {
            text: 'Best Applications',
            level: 3
          }
        },
        {
          id: 'polycarbonate-applications-paragraph',
          type: 'paragraph',
          content: {
            text: 'Polycarbonate is ideal for:'
          }
        },
        {
          id: 'polycarbonate-applications-list',
          type: 'list',
          content: {
            items: [
              'Children\'s eyewear',
              'Sports and safety glasses',
              'Patients with active lifestyles',
              'Rimless and semi-rimless frames',
              'Moderate to high prescriptions where impact resistance is a priority',
              'Monocular patients (those with only one functional eye)'
            ],
            ordered: false
          }
        },
        {
          id: 'polycarbonate-dispensing-tip',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Dispensing Tip',
            text: 'Always include a premium scratch-resistant coating with polycarbonate lenses, as they are very susceptible to surface scratches which can affect vision and lens longevity.'
          }
        }
      ]
    },
    {
      id: 'high-index-section',
      title: 'High-Index Materials',
      type: 'main',
      content: [
        {
          id: 'high-index-heading',
          type: 'heading',
          content: {
            text: 'High-Index Materials',
            level: 2
          }
        },
        {
          id: 'high-index-definition',
          type: 'definition',
          content: {
            term: 'High-Index Materials',
            definition: 'Lens materials with a refractive index higher than standard plastic, allowing thinner, lighter lenses for strong prescriptions.',
            related: ['thin lenses', 'high prescription']
          }
        },
        {
          id: 'high-index-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'High-index materials were developed to create thinner lenses for patients with stronger prescriptions. These advanced plastics bend light more efficiently, reducing edge thickness in minus lenses and center thickness in plus lenses. They\'re available in various indices, with higher numbers indicating thinner lenses.'
          }
        },
        {
          id: 'high-index-categories-heading',
          type: 'heading',
          content: {
            text: 'Common High-Index Categories',
            level: 3
          }
        },
        {
          id: 'high-index-categories-table',
          type: 'table',
          content: {
            headers: ['Material', 'Refractive Index', 'Abbe Value', 'Thickness Comparison*'],
            rows: [
              ['Mid-Index', '1.54-1.60', '36-47', '10-20% thinner than CR-39'],
              ['High-Index', '1.67', '32', '30% thinner than CR-39'],
              ['Ultra High-Index', '1.74', '33', '35% thinner than CR-39']
            ],
            caption: '*Approximate thickness reduction for same prescription compared to CR-39'
          }
        },
        {
          id: 'high-index-advantages-heading',
          type: 'heading',
          content: {
            text: 'Advantages',
            level: 3
          }
        },
        {
          id: 'high-index-advantages-list',
          type: 'list',
          content: {
            items: [
              'Significantly thinner lenses, especially for high prescriptions',
              'Lighter weight (despite higher density, less material is used)',
              'Reduced edge thickness in myopic prescriptions',
              'Reduced center thickness in hyperopic prescriptions',
              'Better cosmetic appearance with less magnification or minification',
              'Suitable for all frame types, including rimless styles'
            ],
            ordered: false
          }
        },
        {
          id: 'high-index-limitations-heading',
          type: 'heading',
          content: {
            text: 'Limitations',
            level: 3
          }
        },
        {
          id: 'high-index-limitations-list',
          type: 'list',
          content: {
            items: [
              'Lower Abbe values (more chromatic aberration)',
              'More reflective surface (requires anti-reflective coating)',
              'Higher cost compared to standard materials',
              'More brittle than polycarbonate (less impact resistant)',
              'Limited tintability, especially for darker tints',
              'Requires special processing in the lab'
            ],
            ordered: false
          }
        },
        {
          id: 'high-index-best-applications-heading',
          type: 'heading',
          content: {
            text: 'Best Applications',
            level: 3
          }
        },
        {
          id: 'high-index-applications-paragraph',
          type: 'paragraph',
          content: {
            text: 'High-index materials are ideal for:'
          }
        },
        {
          id: 'high-index-applications-list',
          type: 'list',
          content: {
            items: [
              'Moderate to high prescriptions (±4.00 diopters or greater)',
              'Patients concerned about lens thickness and cosmetic appearance',
              'Rimless and semi-rimless frame styles',
              'Fashion-forward frame styles that might emphasize thick lenses',
              'Patients willing to invest in premium lens materials'
            ],
            ordered: false
          }
        },
        {
          id: 'high-index-ar-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Essential Companion',
            text: 'Anti-reflective coating is considered essential for high-index lenses due to their increased light reflection. Without AR coating, these lenses can have noticeable glare that reduces visual comfort and cosmetic appeal.'
          }
        }
      ]
    },
    {
      id: 'material-selection-section',
      title: 'Material Selection Guidelines',
      type: 'clinical',
      content: [
        {
          id: 'material-selection-heading',
          type: 'heading',
          content: {
            text: 'Guidelines for Lens Material Selection',
            level: 2
          }
        },
        {
          id: 'material-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'Selecting the most appropriate lens material involves balancing multiple factors, including prescription, frame style, patient lifestyle, and budget. Below are general guidelines to help you make informed recommendations:'
          }
        },
        {
          id: 'prescription-based-heading',
          type: 'heading',
          content: {
            text: 'Prescription-Based Recommendations',
            level: 3
          }
        },
        {
          id: 'prescription-based-table',
          type: 'table',
          content: {
            headers: ['Prescription Range', 'Recommended Materials'],
            rows: [
              ['Low (±2.00D or less)', 'CR-39, Trivex, Polycarbonate for children/safety needs'],
              ['Moderate (±2.25D to ±4.00D)', 'Mid-index (1.54-1.60), Polycarbonate, Trivex'],
              ['High (±4.25D to ±6.00D)', 'High-index (1.67), Polycarbonate for safety needs'],
              ['Very High (greater than ±6.00D)', 'Ultra High-index (1.74)']
            ],
            caption: 'Material recommendations based on prescription strength'
          }
        },
        {
          id: 'lifestyle-based-heading',
          type: 'heading',
          content: {
            text: 'Lifestyle-Based Recommendations',
            level: 3
          }
        },
        {
          id: 'lifestyle-based-list',
          type: 'list',
          content: {
            items: [
              'Active children: Polycarbonate or Trivex',
              'Sports participants: Polycarbonate or Trivex',
              'Safety-conscious occupations: Polycarbonate (ANSI Z87.1 certified)',
              'Fashion-conscious patients: High-index materials with AR coating',
              'Outdoor enthusiasts: Polarized or photochromic options in compatible materials',
              'Computer users: Materials with higher Abbe values (CR-39, Trivex) with blue light filtering'
            ],
            ordered: false
          }
        },
        {
          id: 'frame-style-heading',
          type: 'heading',
          content: {
            text: 'Frame Style Considerations',
            level: 3
          }
        },
        {
          id: 'frame-style-list',
          type: 'list',
          content: {
            items: [
              'Rimless/Semi-rimless: Polycarbonate, Trivex, or high-index (avoid CR-39)',
              'Metal frames: Any material appropriate for prescription',
              'Plastic frames: Any material, though high-index may be needed for strong prescriptions',
              'Large frames: Higher index materials for stronger prescriptions to minimize weight and thickness',
              'Small frames: May allow use of lower index materials even with stronger prescriptions'
            ],
            ordered: false
          }
        },
        {
          id: 'budget-heading',
          type: 'heading',
          content: {
            text: 'Budget Considerations',
            level: 3
          }
        },
        {
          id: 'budget-paragraph',
          type: 'paragraph',
          content: {
            text: 'When recommending materials, consider cost implications while prioritizing visual needs:'
          }
        },
        {
          id: 'budget-table',
          type: 'table',
          content: {
            headers: ['Budget Level', 'Material Options'],
            rows: [
              ['Economy', 'CR-39 (with limitations noted for safety or high prescriptions)'],
              ['Mid-range', 'Polycarbonate, Trivex, Mid-index (1.54-1.60)'],
              ['Premium', 'High-index (1.67), Ultra High-index (1.74)']
            ],
            caption: 'Material options by general budget category'
          }
        },
        {
          id: 'patient-consult-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Patient Consultation',
            text: 'Always explain the benefits and limitations of different materials to patients. Use visual aids to demonstrate thickness differences and explain optical quality variations. This helps patients make informed decisions and understand the value of premium materials when appropriate.'
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
              'Lens material selection significantly impacts lens thickness, weight, optical quality, impact resistance, and UV protection',
              'CR-39 offers excellent optical quality but is thicker and lacks UV protection',
              'Polycarbonate provides superior impact resistance and UV protection but has lower optical quality',
              'High-index materials create thinner lenses for stronger prescriptions but require AR coating',
              'Material recommendations should balance prescription needs, lifestyle factors, frame style, and budget',
              'Higher refractive index typically means thinner lenses but lower Abbe values (more chromatic aberration)',
              'The best material choice varies based on individual patient needs and priorities'
            ],
            ordered: false
          }
        },
        {
          id: 'next-steps-paragraph',
          type: 'paragraph',
          content: {
            text: 'With a solid understanding of lens materials, you can now explore lens designs, coatings, and treatments that further enhance visual performance and comfort. These topics build upon material selection to create a complete lens solution for each patient.'
          }
        }
      ]
    }
  ],
  summary: 'Lens material selection is a critical decision that affects lens thickness, weight, optical quality, and durability. The main materials include CR-39 (excellent optical clarity), polycarbonate (superior impact resistance), Trivex (lightweight with good optics), and high-index materials (for thinner lenses). Each material offers a unique combination of properties including refractive index, Abbe value, specific gravity, impact resistance, and UV protection. Material selection should be based on prescription strength, patient lifestyle, frame style, and budget considerations. Understanding these materials enables opticians to recommend the most appropriate options for each patient\'s specific needs.',
  references: [
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2008). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Fannin, T. E., & Grosvenor, T. (1996). Clinical Optics. Butterworth-Heinemann.',
    'American Board of Opticianry. (2022). Exam Content Outline.',
    'The Vision Council. (2023). Consumer Guide to Ophthalmic Lens Materials.'
  ]
}; 