import { TopicStudyContent } from '../../interfaces/StudyContent';
import { contactLensOverviewImages } from '../mediaAssets';

export const contactLensOverviewContent: TopicStudyContent = {
  topicId: 'cl-overview',
  title: 'Introduction to Contact Lenses',
  introduction: 'Contact lenses are thin, curved lenses placed directly on the eye\'s surface to correct vision problems. They offer an alternative to traditional eyeglasses and come in various types to address different vision needs and lifestyles. This module provides a comprehensive introduction to contact lenses, their history, types, and basic considerations for wear.',
  objectives: [
    'Understand the history and evolution of contact lenses',
    'Differentiate between the main types of contact lenses (soft, rigid gas permeable)',
    'Recognize the various wear schedules and replacement schedules',
    'Identify the basic parameters of contact lenses',
    'Understand the advantages and limitations of different contact lens types',
    'Learn the basics of contact lens care and maintenance'
  ],
  sections: [
    {
      id: 'history-evolution',
      title: 'History and Evolution of Contact Lenses',
      type: 'introduction',
      content: [
        {
          id: 'history-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lenses have evolved significantly since their conceptualization by Leonardo da Vinci in the early 16th century. The journey from glass scleral lenses to today\'s advanced materials represents one of the most innovative developments in vision correction technology.'
          }
        },
        {
          id: 'history-timeline',
          type: 'table',
          content: {
            headers: ['Era', 'Development', 'Significance'],
            rows: [
              ['1508', 'Leonardo da Vinci\'s concept', 'First theoretical design of contact lenses'],
              ['1887', 'First glass contact lens', 'F.E. Muller created glass lenses to cover the entire eye'],
              ['1936', 'PMMA (plastic) lenses', 'First practical, mass-produced contact lenses'],
              ['1971', 'Soft contact lenses', 'Introduction of hydrogel materials (Bausch & Lomb)'],
              ['1979', 'RGP lenses', 'Rigid gas permeable lenses improved oxygen permeability'],
              ['1981', 'Extended wear lenses', 'First FDA-approved extended wear contact lenses'],
              ['1995', 'Disposable lenses', 'Mass production of affordable disposable lenses'],
              ['1999', 'Silicone hydrogel', 'Revolutionary high-oxygen permeability soft lens material'],
              ['2002', 'Daily disposables', 'Widespread adoption of single-use lenses'],
              ['Present', 'Smart contact lenses', 'Development of lenses with sensors and displays']
            ],
            caption: 'Timeline of significant developments in contact lens technology'
          }
        },
        {
          id: 'evolution-note',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Evolution of Materials',
            text: 'The evolution of contact lens materials has been driven by the need to increase oxygen permeability, comfort, and convenience while reducing complications.'
          }
        }
      ]
    },
    {
      id: 'types-of-lenses',
      title: 'Types of Contact Lenses',
      type: 'main',
      content: [
        {
          id: 'types-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lenses can be categorized based on their material, design, wear schedule, and replacement frequency. Understanding these classifications is essential for properly recommending and fitting contact lenses.'
          }
        },
        {
          id: 'material-heading',
          type: 'heading',
          content: {
            text: 'Classification by Material',
            level: 3
          }
        },
        {
          id: 'soft-cl-def',
          type: 'definition',
          content: {
            term: 'Soft Contact Lenses',
            definition: 'Made from hydrogel or silicone hydrogel materials that contain water, these lenses are flexible and conform to the eye\'s surface. They typically range from 38% to 78% water content.',
            related: ['hydrogel', 'silicone-hydrogel', 'water-content']
          }
        },
        {
          id: 'soft-cl-paragraph',
          type: 'paragraph',
          content: {
            text: 'Soft contact lenses are the most popular type due to their immediate comfort and ease of adaptation. The primary types include hydrogel (older technology) and silicone hydrogel (newer technology with higher oxygen permeability).'
          }
        },
        {
          id: 'soft-cl-advantages',
          type: 'list',
          content: {
            items: [
              'Quick adaptation and comfort',
              'Available in a wide range of prescriptions',
              'Less sensitivity to dust and debris',
              'Less likely to dislodge during sports and activities',
              'Can be tinted for visibility or cosmetic purposes'
            ],
            ordered: false
          }
        },
        {
          id: 'rgp-cl-def',
          type: 'definition',
          content: {
            term: 'Rigid Gas Permeable (RGP) Lenses',
            definition: 'Made from rigid, oxygen-permeable materials, these lenses maintain their shape while allowing oxygen to pass through to the cornea. They are more durable and provide sharper vision than soft lenses.',
            related: ['oxygen-permeability', 'dk-value', 'corneal-physiology']
          }
        },
        {
          id: 'rgp-cl-paragraph',
          type: 'paragraph',
          content: {
            text: 'RGP lenses are more rigid than soft lenses but are still gas-permeable. They provide excellent optical quality and are especially beneficial for patients with astigmatism, keratoconus, or after refractive surgery.'
          }
        },
        {
          id: 'rgp-cl-advantages',
          type: 'list',
          content: {
            items: [
              'Superior visual acuity',
              'Excellent for correcting astigmatism',
              'Durability (can last 1-2 years with proper care)',
              'Less prone to protein deposits',
              'Better handling for some patients',
              'Cost-effective over time due to longevity'
            ],
            ordered: false
          }
        },
        {
          id: 'material-comparison',
          type: 'image',
          content: {
            src: contactLensOverviewImages.clMaterialComparison.path,
            alt: 'Comparison of soft and RGP contact lenses',
            caption: 'Side-by-side comparison of soft (left) and RGP (right) contact lenses',
            width: '80%'
          }
        }
      ]
    },
    {
      id: 'wear-schedules',
      title: 'Wear and Replacement Schedules',
      type: 'main',
      content: [
        {
          id: 'schedules-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lenses vary in how long they can be worn before removal and how frequently they should be replaced. These schedules are designed to maximize eye health and minimize complications.'
          }
        },
        {
          id: 'wear-heading',
          type: 'heading',
          content: {
            text: 'Wear Modalities',
            level: 3
          }
        },
        {
          id: 'daily-wear-def',
          type: 'definition',
          content: {
            term: 'Daily Wear',
            definition: 'Lenses that must be removed before sleeping and should not be worn overnight.',
            related: ['corneal-hypoxia', 'oxygen-transmission']
          }
        },
        {
          id: 'extended-wear-def',
          type: 'definition',
          content: {
            term: 'Extended Wear',
            definition: 'Lenses approved for overnight wear, typically for up to 6 or 7 days continuously before removal for cleaning.',
            related: ['silicone-hydrogel', 'corneal-complications']
          }
        },
        {
          id: 'continuous-wear-def',
          type: 'definition',
          content: {
            term: 'Continuous Wear',
            definition: 'High oxygen-permeable lenses that can be worn for up to 30 days continuously, including during sleep.',
            related: ['extended-wear', 'oxygen-permeability']
          }
        },
        {
          id: 'wear-warning',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Overnight Wear Risks',
            text: 'All overnight wear of contact lenses increases the risk of serious eye infections and complications, even with lenses approved for this purpose. Daily removal and cleaning are always safest.'
          }
        },
        {
          id: 'replacement-heading',
          type: 'heading',
          content: {
            text: 'Replacement Schedules',
            level: 3
          }
        },
        {
          id: 'daily-disposable-def',
          type: 'definition',
          content: {
            term: 'Daily Disposable',
            definition: 'Fresh lenses worn each day and discarded after a single use, requiring no cleaning or storage.',
            related: ['convenience', 'hygiene', 'compliance']
          }
        },
        {
          id: 'biweekly-def',
          type: 'definition',
          content: {
            term: 'Bi-weekly Replacement',
            definition: 'Lenses discarded and replaced every two weeks, requiring daily cleaning and proper storage when not worn.',
            related: ['lens-deposits', 'solution-compatibility']
          }
        },
        {
          id: 'monthly-def',
          type: 'definition',
          content: {
            term: 'Monthly Replacement',
            definition: 'Lenses replaced once a month, requiring daily cleaning and proper storage when not worn.',
            related: ['protein-removal', 'lens-care-systems']
          }
        },
        {
          id: 'quarterly-annual-def',
          type: 'definition',
          content: {
            term: 'Quarterly/Annual Replacement',
            definition: 'Typically applies to RGP lenses which are more durable and can last 3-12 months with proper care.',
            related: ['RGP-care', 'lens-deposits']
          }
        },
        {
          id: 'replacement-table',
          type: 'table',
          content: {
            headers: ['Replacement Schedule', 'Advantages', 'Considerations'],
            rows: [
              ['Daily Disposable', 'Maximum hygiene, convenience, no solutions needed', 'Higher daily cost, limited in some prescriptions'],
              ['Bi-weekly', 'Good balance of freshness and cost', 'Requires disciplined cleaning and replacement schedule'],
              ['Monthly', 'Cost-effective, widely available', 'More deposit buildup, requires thorough care routine'],
              ['Quarterly/Annual', 'Most economical over time (RGPs)', 'Highest maintenance, specialized cleaning needs']
            ],
            caption: 'Comparison of different contact lens replacement schedules'
          }
        }
      ]
    },
    {
      id: 'lens-designs',
      title: 'Specialized Contact Lens Designs',
      type: 'main',
      content: [
        {
          id: 'designs-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lenses are available in various designs to address specific vision needs beyond simple spherical correction. These specialized designs can correct astigmatism, presbyopia, and other complex vision issues.'
          }
        },
        {
          id: 'spherical-lenses',
          type: 'definition',
          content: {
            term: 'Spherical Lenses',
            definition: 'Basic contact lenses with the same optical power throughout, designed to correct myopia (nearsightedness) or hyperopia (farsightedness).',
            related: ['myopia', 'hyperopia', 'refractive-error']
          }
        },
        {
          id: 'toric-lenses',
          type: 'definition',
          content: {
            term: 'Toric Lenses',
            definition: 'Lenses with different powers in different meridians, designed to correct astigmatism in addition to myopia or hyperopia.',
            related: ['astigmatism', 'stabilization', 'rotation']
          }
        },
        {
          id: 'toric-design-paragraph',
          type: 'paragraph',
          content: {
            text: 'Toric lenses must maintain their orientation on the eye to correct astigmatism properly. This is achieved through various stabilization methods:'
          }
        },
        {
          id: 'toric-stabilization-list',
          type: 'list',
          content: {
            items: [
              'Prism ballast: Thicker at the bottom to orient via gravity',
              'Peri-ballast: Thicker in the periphery',
              'Double slab-off: Thinned superior and inferior zones',
              'Accelerated Stabilization Design (ASD): Uses the natural pressure of eyelids'
            ],
            ordered: false
          }
        },
        {
          id: 'multifocal-lenses',
          type: 'definition',
          content: {
            term: 'Multifocal/Bifocal Lenses',
            definition: 'Lenses with multiple prescriptive powers designed to correct presbyopia, allowing clear vision at different distances.',
            related: ['presbyopia', 'near-vision', 'distance-vision']
          }
        },
        {
          id: 'multifocal-designs-list',
          type: 'list',
          content: {
            items: [
              'Concentric design: Alternating rings of distance and near power',
              'Aspheric design: Gradual power change from center to periphery',
              'Segmented/translating design: Similar to bifocal glasses, primarily in RGP lenses',
              'Modified monovision: Different multifocal designs in each eye'
            ],
            ordered: false
          }
        },
        {
          id: 'specialty-lenses-heading',
          type: 'heading',
          content: {
            text: 'Specialty Contact Lenses',
            level: 3
          }
        },
        {
          id: 'cosmetic-lenses',
          type: 'definition',
          content: {
            term: 'Cosmetic/Colored Lenses',
            definition: 'Lenses designed to change or enhance eye color, available with or without vision correction.',
            related: ['tint-types', 'visibility-tint', 'medical-device']
          }
        },
        {
          id: 'therapeutic-lenses',
          type: 'definition',
          content: {
            term: 'Therapeutic Lenses',
            definition: 'Lenses used to protect and heal the corneal surface or to deliver medication to the eye.',
            related: ['bandage-lens', 'drug-delivery']
          }
        },
        {
          id: 'scleral-lenses',
          type: 'definition',
          content: {
            term: 'Scleral and Semi-Scleral Lenses',
            definition: 'Large-diameter RGP lenses that vault over the cornea and rest on the sclera, useful for keratoconus, severe dry eye, and post-surgical corneas.',
            related: ['keratoconus', 'irregular-cornea', 'corneal-transplant']
          }
        },
        {
          id: 'ortho-k-lenses',
          type: 'definition',
          content: {
            term: 'Orthokeratology (Ortho-K) Lenses',
            definition: 'RGP lenses worn overnight to temporarily reshape the cornea, providing vision correction during the day without lenses.',
            related: ['corneal-molding', 'myopia-control', 'night-wear']
          }
        }
      ]
    },
    {
      id: 'basic-parameters',
      title: 'Understanding Contact Lens Parameters',
      type: 'main',
      content: [
        {
          id: 'parameters-intro',
          type: 'paragraph',
          content: {
            text: 'Contact lenses are characterized by several key measurements that determine their fit, comfort, and optical performance. Understanding these parameters is essential for proper contact lens selection and fitting.'
          }
        },
        {
          id: 'parameters-image',
          type: 'image',
          content: {
            src: contactLensOverviewImages.contactLensParameters.path,
            alt: 'Diagram illustrating key contact lens parameters',
            caption: 'Key parameters of a contact lens: base curve, diameter, power, and thickness profile',
            width: '75%'
          }
        },
        {
          id: 'base-curve-def',
          type: 'definition',
          content: {
            term: 'Base Curve (BC)',
            definition: 'The curvature of the posterior (back) surface of a contact lens, measured in millimeters. This determines how the lens fits on the eye.',
            related: ['keratometry', 'corneal-curvature', 'flat-k']
          }
        },
        {
          id: 'base-curve-paragraph',
          type: 'paragraph',
          content: {
            text: 'The base curve is critical for proper lens fit. If too steep (smaller number), the lens may be too tight and cause reduced tear exchange. If too flat (larger number), the lens may be loose and uncomfortable or may decentrate.'
          }
        },
        {
          id: 'diameter-def',
          type: 'definition',
          content: {
            term: 'Diameter (DIA)',
            definition: 'The overall size of the contact lens from edge to edge, measured in millimeters.',
            related: ['corneal-diameter', 'lens-centration']
          }
        },
        {
          id: 'diameter-table',
          type: 'table',
          content: {
            headers: ['Lens Type', 'Typical Diameter Range'],
            rows: [
              ['Soft Contact Lenses', '13.5 to 14.5 mm'],
              ['RGP Lenses', '9.0 to 10.5 mm'],
              ['Scleral Lenses', '15.0 to 25.0 mm'],
              ['Corneal Diameter (for reference)', '11.5 to 12.5 mm']
            ],
            caption: 'Typical diameter ranges for different types of contact lenses'
          }
        },
        {
          id: 'power-def',
          type: 'definition',
          content: {
            term: 'Power',
            definition: 'The refractive correction provided by the lens, measured in diopters (D). Minus (-) powers correct myopia, while plus (+) powers correct hyperopia.',
            related: ['diopter', 'spherical-equivalent', 'over-refraction']
          }
        },
        {
          id: 'water-content-def',
          type: 'definition',
          content: {
            term: 'Water Content',
            definition: 'The percentage of water in a hydrogel or silicone hydrogel lens, typically ranging from 38% to 78%.',
            related: ['hydrogel', 'dehydration', 'comfort']
          }
        },
        {
          id: 'water-content-note',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Water Content and Comfort',
            text: 'Higher water content lenses often feel more comfortable initially but may cause more dryness later in the day due to more rapid dehydration.'
          }
        },
        {
          id: 'dk-def',
          type: 'definition',
          content: {
            term: 'Oxygen Permeability (Dk)',
            definition: 'A measure of how much oxygen can pass through a contact lens material. Higher Dk values indicate better oxygen transmission.',
            related: ['dk/t', 'hypoxia', 'corneal-health']
          }
        },
        {
          id: 'dkt-def',
          type: 'definition',
          content: {
            term: 'Oxygen Transmissibility (Dk/t)',
            definition: 'Oxygen permeability (Dk) divided by the lens thickness (t). This value more accurately reflects the oxygen reaching the cornea through a specific lens.',
            related: ['dk', 'corneal-hypoxia', 'overnight-wear']
          }
        },
        {
          id: 'thickness-def',
          type: 'definition',
          content: {
            term: 'Center Thickness',
            definition: 'The thickness of a contact lens at its center, typically measured in millimeters or micrometers. Varies based on lens material, design, and power.',
            related: ['dk/t', 'lens-handling', 'durability']
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
              'Contact lenses are medical devices that require proper fitting, care, and follow-up',
              'Soft contact lenses offer immediate comfort and adaptability, while RGP lenses provide superior vision quality and durability',
              'Replacement schedules range from daily disposable to annual replacement, each with different care requirements',
              'Specialized designs include toric lenses for astigmatism, multifocal lenses for presbyopia, and specialty lenses for various conditions',
              'Key parameters include base curve, diameter, power, water content, and oxygen permeability (Dk)',
              'The right contact lens depends on vision needs, eye health, lifestyle, and personal preferences'
            ],
            ordered: false
          }
        },
        {
          id: 'next-steps',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Next Steps',
            text: 'After mastering the basics of contact lenses, continue to the modules on Eye Anatomy for Contact Lenses, Contact Lens Materials, and Contact Lens Fitting Basics to deepen your understanding.'
          }
        }
      ]
    }
  ],
  summary: 'Contact lenses are specialized optical devices placed directly on the eye to correct vision. They have evolved significantly from early glass designs to today\'s advanced materials and come in two main categories: soft lenses (hydrogel and silicone hydrogel) and rigid gas permeable (RGP) lenses. Various replacement schedules exist, from daily disposable to annual replacement, and specialized designs address specific vision needs like astigmatism (toric lenses) and presbyopia (multifocal lenses). Key parameters include base curve, diameter, power, water content, and oxygen permeability (Dk). The right contact lens depends on a patient\'s prescription, eye health, lifestyle, and preferences, with each type offering distinct advantages and considerations.',
  references: [
    'Gasson, A., & Morris, J. (2010). The Contact Lens Manual: A Practical Guide to Fitting (4th ed.). Butterworth-Heinemann.',
    'Phillips, A. J., & Speedwell, L. (2018). Contact Lenses (6th ed.). Elsevier.',
    'Efron, N. (2018). Contact Lens Practice (3rd ed.). Elsevier.',
    'American Academy of Ophthalmology. (2021). Contact Lens Basics.',
    'Contact Lens Association of Ophthalmologists. (2022). CLAO Guidelines for Contact Lens Fitting.'
  ]
}; 