import { TopicStudyContent } from '../../interfaces/StudyContent';
import { eyeAnatomyClImages } from '../mediaAssets';

export const eyeAnatomyClContent: TopicStudyContent = {
  topicId: 'eye-anatomy-cl',
  title: 'Eye Anatomy for Contact Lenses',
  introduction: 'Understanding the structures of the eye that interact with contact lenses is crucial for proper fitting, troubleshooting, and patient education. This module focuses on the anatomical structures most relevant to contact lens practice, with special emphasis on how these structures affect lens fit, comfort, and ocular health.',
  objectives: [
    'Identify and describe the key anatomical structures relevant to contact lens wear',
    'Understand the cornea\'s structure, function, and importance in contact lens fitting',
    'Explain the composition and role of the tear film in contact lens wear',
    'Recognize how the conjunctiva, sclera, and limbus relate to contact lens fit',
    'Describe how eyelids interact with contact lenses during blinking and wear',
    'Identify anatomical variations that may impact contact lens fitting and comfort'
  ],
  sections: [
    {
      id: 'cornea-structure',
      title: 'Corneal Structure and Function',
      type: 'main',
      content: [
        {
          id: 'cornea-intro',
          type: 'paragraph',
          content: {
            text: 'The cornea is the primary interface between a contact lens and the eye. Its structure, curvature, and physiological needs significantly impact lens design, fit, and performance.'
          }
        },
        {
          id: 'cornea-anatomy-image',
          type: 'image',
          content: {
            src: eyeAnatomyClImages.corneaLayers.path,
            alt: 'Cross-section of corneal layers',
            caption: 'The five layers of the cornea: epithelium, Bowman\'s layer, stroma, Descemet\'s membrane, and endothelium',
            width: '75%'
          }
        },
        {
          id: 'cornea-layers-heading',
          type: 'heading',
          content: {
            text: 'Corneal Layers',
            level: 3
          }
        },
        {
          id: 'epithelium-def',
          type: 'definition',
          content: {
            term: 'Epithelium',
            definition: 'The outermost layer of the cornea, 5-7 cells thick (50-52 μm). It provides a smooth optical surface and serves as a barrier against foreign material and pathogens.',
            related: ['epithelial-staining', 'corneal-abrasion', 'barrier-function']
          }
        },
        {
          id: 'epithelium-cl',
          type: 'paragraph',
          content: {
            text: 'The epithelium is the first tissue to interact with contact lenses. Mechanical trauma from poor lens fit or handling can damage this layer, resulting in epithelial staining or abrasions visible with fluorescein. The epithelium can also be compromised by lens-induced hypoxia or toxic reactions to solutions.'
          }
        },
        {
          id: 'bowmans-def',
          type: 'definition',
          content: {
            term: 'Bowman\'s Layer',
            definition: 'A tough, acellular layer (8-14 μm thick) composed of collagen fibrils that protects the underlying stroma.',
            related: ['scarring', 'corneal-erosion']
          }
        },
        {
          id: 'stroma-def',
          type: 'definition',
          content: {
            term: 'Stroma',
            definition: 'The thickest layer of the cornea (approximately 500 μm, or 90% of corneal thickness), composed of regularly arranged collagen fibrils, which provides structural integrity and transparency.',
            related: ['corneal-edema', 'transparency', 'hydration']
          }
        },
        {
          id: 'stroma-cl',
          type: 'paragraph',
          content: {
            text: 'The stroma requires adequate oxygen to maintain normal hydration. Hypoxia from contact lens wear can cause stromal swelling (edema), resulting in corneal haze, reduced vision, and discomfort. This is why oxygen transmissibility (Dk/t) is such an important parameter for contact lens materials.'
          }
        },
        {
          id: 'descemets-def',
          type: 'definition',
          content: {
            term: 'Descemet\'s Membrane',
            definition: 'A thin but strong elastic layer (10-15 μm) that serves as the basement membrane for the endothelium.',
            related: ['corneal-hydrops', 'keratoconus']
          }
        },
        {
          id: 'endothelium-def',
          type: 'definition',
          content: {
            term: 'Endothelium',
            definition: 'A single layer of hexagonal cells that pumps excess fluid out of the stroma, maintaining proper corneal hydration and clarity.',
            related: ['corneal-edema', 'endothelial-cell-count', 'pump-function']
          }
        },
        {
          id: 'endothelium-cl',
          type: 'paragraph',
          content: {
            text: 'The endothelium\'s "pump" function is critical for maintaining corneal clarity. Endothelial cells do not regenerate, and their density decreases with age. Contact lens-induced hypoxia can stress these cells, potentially accelerating cell loss. Long-term corneal health depends on preserving endothelial function through proper lens selection and wear schedule.'
          }
        },
        {
          id: 'endothelium-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Endothelial Health',
            text: 'Extended or overnight contact lens wear increases stress on endothelial cells. Patients with compromised endothelial function (e.g., Fuchs\' dystrophy) may require specialized fitting with highly oxygen-permeable materials or may not be suitable candidates for contact lenses.'
          }
        }
      ]
    },
    {
      id: 'corneal-topography',
      title: 'Corneal Topography and Measurements',
      type: 'main',
      content: [
        {
          id: 'topography-intro',
          type: 'paragraph',
          content: {
            text: 'The cornea is not uniformly curved but has a complex shape that varies between individuals. Understanding corneal topography is essential for proper contact lens fitting.'
          }
        },
        {
          id: 'k-readings-def',
          type: 'definition',
          content: {
            term: 'Keratometry (K) Readings',
            definition: 'Measurements of the corneal curvature in the central 3-4mm, typically expressed in millimeters of radius or diopters. The two principal meridians are recorded as flat K (K1) and steep K (K2).',
            related: ['base-curve', 'astigmatism', 'keratometer']
          }
        },
        {
          id: 'k-readings-paragraph',
          type: 'paragraph',
          content: {
            text: 'K readings guide the selection of a contact lens base curve. For soft lenses, the base curve is typically flatter than the flattest K to allow proper lens centration and movement. For RGP lenses, the relationship between base curve and K readings follows more complex fitting philosophies.'
          }
        },
        {
          id: 'corneal-diameter-def',
          type: 'definition',
          content: {
            term: 'Horizontal Visible Iris Diameter (HVID)',
            definition: 'The measurement of the cornea from limbus to limbus horizontally, typically 11.5-12.5mm. Also known as white-to-white (WTW) measurement.',
            related: ['lens-diameter', 'corneal-coverage']
          }
        },
        {
          id: 'corneal-diameter-paragraph',
          type: 'paragraph',
          content: {
            text: 'HVID helps determine appropriate soft lens diameter. Soft lenses typically extend 1-2mm beyond the limbus for proper centration and stability. Smaller corneas may require smaller diameter lenses to prevent excessive overlap onto the conjunctiva.'
          }
        },
        {
          id: 'topography-maps',
          type: 'image',
          content: {
            src: eyeAnatomyClImages.cornealTopographyMap.path,
            alt: 'Corneal topography map showing different curvature patterns',
            caption: 'Corneal topography map with color-coding representing different curvatures across the corneal surface',
            width: '80%'
          }
        },
        {
          id: 'corneal-sagittal-def',
          type: 'definition',
          content: {
            term: 'Sagittal Height (Sag)',
            definition: 'The height or depth of the cornea measured from the plane of its base to its apex. Important for specialty lens fitting, especially scleral lenses.',
            related: ['vault', 'scleral-lenses', 'OCT-measurement']
          }
        },
        {
          id: 'eccentricity-def',
          type: 'definition',
          content: {
            term: 'Corneal Eccentricity (e-value)',
            definition: 'A measure of how much the corneal shape deviates from a perfect sphere. Most corneas are prolate (steeper in the center, flatter in the periphery) with e-values between 0.4 and 0.7.',
            related: ['prolate', 'oblate', 'asphericity']
          }
        },
        {
          id: 'eccentricity-callout',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Post-Refractive Surgery Eyes',
            text: 'Patients who have undergone LASIK or PRK typically have oblate corneas (flatter in the center, steeper in the periphery), which can make standard contact lens fitting challenging. Specialty designs are often required for these patients.'
          }
        }
      ]
    },
    {
      id: 'tear-film',
      title: 'Tear Film Composition and Function',
      type: 'main',
      content: [
        {
          id: 'tear-film-intro',
          type: 'paragraph',
          content: {
            text: 'The tear film is crucial for maintaining corneal health and contact lens comfort. It provides oxygen and nutrients to the avascular cornea, maintains a smooth optical surface, and interacts directly with contact lenses.'
          }
        },
        {
          id: 'tear-film-image',
          type: 'image',
          content: {
            src: eyeAnatomyClImages.tearFilmLayers.path,
            alt: 'The three layers of the tear film',
            caption: 'The tear film consists of three layers: lipid (outermost), aqueous (middle), and mucin (innermost)',
            width: '70%'
          }
        },
        {
          id: 'tear-film-layers-heading',
          type: 'heading',
          content: {
            text: 'Tear Film Layers',
            level: 3
          }
        },
        {
          id: 'lipid-layer-def',
          type: 'definition',
          content: {
            term: 'Lipid Layer',
            definition: 'The outermost layer (0.1-0.2 μm thick) produced by the meibomian glands. It retards evaporation of the aqueous layer and provides a smooth optical surface.',
            related: ['meibomian-glands', 'evaporative-dry-eye', 'TBUT']
          }
        },
        {
          id: 'lipid-layer-cl',
          type: 'paragraph',
          content: {
            text: 'Contact lenses can disrupt the lipid layer, leading to increased evaporation and dry eye symptoms. Meibomian gland dysfunction (MGD) is a common condition that affects the lipid layer and can significantly impact contact lens comfort.'
          }
        },
        {
          id: 'aqueous-layer-def',
          type: 'definition',
          content: {
            term: 'Aqueous Layer',
            definition: 'The middle and thickest layer (7-10 μm) produced by the lacrimal gland and accessory glands. Contains water, electrolytes, proteins, and soluble mucins.',
            related: ['lacrimal-gland', 'aqueous-deficient-dry-eye', 'schirmer-test']
          }
        },
        {
          id: 'aqueous-layer-cl',
          type: 'paragraph',
          content: {
            text: 'Soft contact lenses absorb water from this layer and require adequate aqueous production for comfortable wear. Patients with aqueous-deficient dry eye may experience reduced wearing time and discomfort with contact lenses.'
          }
        },
        {
          id: 'mucin-layer-def',
          type: 'definition',
          content: {
            term: 'Mucin Layer',
            definition: 'The innermost layer (0.02-0.05 μm) produced by conjunctival goblet cells. Converts the hydrophobic corneal epithelium to a hydrophilic surface, allowing the aqueous layer to spread evenly.',
            related: ['goblet-cells', 'wettability', 'conjunctival-impression-cytology']
          }
        },
        {
          id: 'tear-film-cl-heading',
          type: 'heading',
          content: {
            text: 'Tear Film and Contact Lenses',
            level: 3
          }
        },
        {
          id: 'pre-lens-tear-film',
          type: 'paragraph',
          content: {
            text: 'With a contact lens on the eye, the tear film splits into pre-lens and post-lens tear films. The pre-lens tear film covers the front surface of the lens and interacts with the eyelids during blinking. Its stability affects comfort, optical quality, and deposit formation.'
          }
        },
        {
          id: 'post-lens-tear-film',
          type: 'paragraph',
          content: {
            text: 'The post-lens tear film lies between the lens and the cornea. It provides oxygen and nutrients to the cornea and removes metabolic waste. Insufficient tear exchange in this layer can lead to corneal hypoxia, epithelial staining, and inflammatory responses.'
          }
        },
        {
          id: 'tear-exchange-def',
          type: 'definition',
          content: {
            term: 'Tear Exchange',
            definition: 'The replacement of tears beneath a contact lens with fresh tears during blinking and eye movements, essential for corneal health and comfort.',
            related: ['lens-movement', 'tight-lens-syndrome', 'fluorescein-pattern']
          }
        },
        {
          id: 'tear-clinical-tests',
          type: 'table',
          content: {
            headers: ['Test', 'Measures', 'Relevance to Contact Lenses'],
            rows: [
              ['Tear Break-Up Time (TBUT)', 'Tear film stability', 'Predicts comfort and lens surface wetting'],
              ['Schirmer Test', 'Aqueous tear production', 'Identifies aqueous-deficient patients who may struggle with lens wear'],
              ['Phenol Red Thread Test', 'Tear volume', 'Less invasive alternative to Schirmer for predicting comfort'],
              ['Tear Meniscus Height', 'Tear volume', 'Reduced height may indicate insufficient tears for comfortable lens wear'],
              ['Tear Osmolarity', 'Salt concentration in tears', 'Elevated osmolarity indicates dry eye and potential comfort issues'],
              ['MMP-9 Testing', 'Inflammatory markers', 'Positive test suggests inflammation that may be exacerbated by lens wear']
            ],
            caption: 'Clinical tests for tear film assessment relevant to contact lens practice'
          }
        }
      ]
    },
    {
      id: 'conjunctiva-sclera',
      title: 'Conjunctiva and Sclera',
      type: 'main',
      content: [
        {
          id: 'conjunctiva-intro',
          type: 'paragraph',
          content: {
            text: 'The conjunctiva is a thin, transparent mucous membrane that covers the anterior portion of the sclera (bulbar conjunctiva) and lines the inner surfaces of the eyelids (palpebral conjunctiva). It plays important roles in tear production, immune defense, and interacts directly with soft contact lenses.'
          }
        },
        {
          id: 'bulbar-conjunctiva-def',
          type: 'definition',
          content: {
            term: 'Bulbar Conjunctiva',
            definition: 'The portion of the conjunctiva that covers the anterior sclera up to the limbus. Soft contact lenses typically extend onto this region.',
            related: ['limbus', 'hyperemia', 'conjunctival-staining']
          }
        },
        {
          id: 'conjunctival-cl',
          type: 'paragraph',
          content: {
            text: 'Soft contact lenses typically overlap onto the bulbar conjunctiva by 1-2mm beyond the limbus. This interaction can cause mechanical irritation, especially with large-diameter or poorly fitting lenses. Signs of conjunctival irritation include hyperemia (redness), staining, and papillary reactions.'
          }
        },
        {
          id: 'limbus-def',
          type: 'definition',
          content: {
            term: 'Limbus',
            definition: 'The boundary between the cornea and sclera, about 1-2mm wide. Contains stem cells critical for corneal epithelial regeneration.',
            related: ['limbal-stem-cells', 'vascularization', 'neovascularization']
          }
        },
        {
          id: 'limbus-cl-callout',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Limbal Protection',
            text: 'Chronic hypoxia from contact lens wear can cause limbal hyperemia and neovascularization, where blood vessels grow into the normally avascular cornea. This highlights the importance of adequate oxygen transmission and proper lens fit.'
          }
        },
        {
          id: 'sclera-def',
          type: 'definition',
          content: {
            term: 'Sclera',
            definition: 'The white, opaque outer coat of the eye that maintains the eye\'s shape and provides attachment for extraocular muscles.',
            related: ['scleral-lenses', 'scleral-toricity', 'scleral-topography']
          }
        },
        {
          id: 'sclera-cl',
          type: 'paragraph',
          content: {
            text: 'The sclera becomes important in specialty contact lens fitting, particularly with scleral lenses. These large-diameter RGP lenses vault over the cornea and land on the sclera, making scleral shape and contour critical fitting considerations.'
          }
        },
        {
          id: 'scleral-shape',
          type: 'paragraph',
          content: {
            text: 'Unlike the cornea, which is typically steeper in the center (prolate), the sclera is non-symmetrical and often toric or irregular in shape. Advanced fitting of scleral lenses may require scleral topography or OCT imaging to map these variations.'
          }
        }
      ]
    },
    {
      id: 'eyelids-blinking',
      title: 'Eyelids and Blinking',
      type: 'main',
      content: [
        {
          id: 'eyelids-intro',
          type: 'paragraph',
          content: {
            text: 'The eyelids interact directly with contact lenses during wear, affecting lens positioning, movement, tear distribution, and comfort. Understanding eyelid anatomy and blinking dynamics is essential for successful lens fitting.'
          }
        },
        {
          id: 'eyelid-anatomy-image',
          type: 'image',
          content: {
            src: eyeAnatomyClImages.eyelidAnatomy.path,
            alt: 'Cross-section of eyelid anatomy',
            caption: 'Cross-section showing eyelid structures including the tarsus, meibomian glands, and muscle layers',
            width: '75%'
          }
        },
        {
          id: 'upper-lid-def',
          type: 'definition',
          content: {
            term: 'Upper Eyelid',
            definition: 'Covers and protects the superior portion of the eye, contains approximately 25-40 meibomian glands, and plays the primary role in tear distribution during blinking.',
            related: ['blink-rate', 'lid-attachment', 'lens-positioning']
          }
        },
        {
          id: 'upper-lid-cl',
          type: 'paragraph',
          content: {
            text: 'The upper lid exerts pressure on contact lenses during blinking, which can affect lens positioning. Soft toric lenses often use this interaction for stabilization. The upper lid also influences the lens-induced pressure on the cornea, which can be significant with certain lens designs.'
          }
        },
        {
          id: 'lower-lid-def',
          type: 'definition',
          content: {
            term: 'Lower Eyelid',
            definition: 'Covers and protects the inferior portion of the eye, contains approximately 20-30 meibomian glands, and forms the lower tear meniscus.',
            related: ['lagophthalmos', 'lid-laxity', 'lens-decentration']
          }
        },
        {
          id: 'lid-position',
          type: 'paragraph',
          content: {
            text: 'The position of the lower lid relative to the limbus affects soft lens fitting. A low-riding lens (positioned below the lower limbus) may cause discomfort and poor vision. Variations in lid position, such as high lower lids or low upper lids, must be considered when selecting lens diameter and base curve.'
          }
        },
        {
          id: 'meibomian-glands-def',
          type: 'definition',
          content: {
            term: 'Meibomian Glands',
            definition: 'Sebaceous glands embedded in the tarsal plates of the eyelids that secrete meibum, the oily component of the tear film that prevents evaporation.',
            related: ['MGD', 'lipid-layer', 'dry-eye']
          }
        },
        {
          id: 'mgd-cl',
          type: 'callout',
          content: {
            type: 'important',
            title: 'MGD and Contact Lenses',
            text: 'Meibomian gland dysfunction (MGD) is a leading cause of dry eye syndrome and contact lens discomfort. Contact lens wearers have a higher prevalence of MGD, possibly due to altered blinking patterns or physical interaction with the glands.'
          }
        },
        {
          id: 'blinking-heading',
          type: 'heading',
          content: {
            text: 'Blinking and Contact Lenses',
            level: 3
          }
        },
        {
          id: 'blink-rate-def',
          type: 'definition',
          content: {
            term: 'Blink Rate',
            definition: 'The frequency of blinking, typically 12-15 blinks per minute under normal conditions. Can be reduced during contact lens wear and sustained visual tasks.',
            related: ['incomplete-blinking', 'computer-vision-syndrome']
          }
        },
        {
          id: 'blink-mechanics',
          type: 'paragraph',
          content: {
            text: 'Blinking serves multiple functions with contact lenses: it redistributes the tear film over the lens surface, helps maintain lens hydration, facilitates tear exchange beneath the lens, and may assist in removing debris from the lens surface.'
          }
        },
        {
          id: 'incomplete-blinking',
          type: 'definition',
          content: {
            term: 'Incomplete Blinking',
            definition: 'Blinks that fail to cover the entire corneal surface, resulting in poor tear distribution and potential drying of the inferior cornea and contact lens.',
            related: ['3-9-staining', 'digital-eye-strain', 'dryness']
          }
        },
        {
          id: 'blink-training',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Blink Training',
            text: 'Patients with digital eye strain or contact lens discomfort often benefit from blink awareness training. Teaching conscious, complete blinking can improve lens comfort and wearing time, particularly during computer use.'
          }
        }
      ]
    },
    {
      id: 'anatomical-variations',
      title: 'Anatomical Variations Affecting Contact Lens Fit',
      type: 'advanced',
      content: [
        {
          id: 'variations-intro',
          type: 'paragraph',
          content: {
            text: 'Various anatomical variations can complicate contact lens fitting and require specialized approaches. Recognizing these conditions is essential for successful lens adaptation and ocular health.'
          }
        },
        {
          id: 'keratoconus-def',
          type: 'definition',
          content: {
            term: 'Keratoconus',
            definition: 'A progressive corneal condition characterized by thinning and protrusion of the cornea, resulting in irregular astigmatism and visual distortion.',
            related: ['irregular-astigmatism', 'corneal-topography', 'specialty-lenses']
          }
        },
        {
          id: 'keratoconus-cl',
          type: 'paragraph',
          content: {
            text: 'Patients with keratoconus often achieve better vision with specialty contact lenses than with spectacles. Options include RGP lenses, hybrid lenses, piggyback systems, or scleral lenses depending on the severity and corneal shape.'
          }
        },
        {
          id: 'pterygia-pinguecula-def',
          type: 'definition',
          content: {
            term: 'Pterygia and Pingueculae',
            definition: 'Growths on the conjunctiva that can elevate the surface and create irregularities that affect contact lens fit and comfort.',
            related: ['limbal-clearance', 'lens-edge-interaction', 'notching']
          }
        },
        {
          id: 'dry-eye-def',
          type: 'definition',
          content: {
            term: 'Dry Eye Syndrome',
            definition: 'A multifactorial condition characterized by inadequate tear quantity or quality, leading to symptoms of discomfort, visual disturbance, and potential ocular surface damage.',
            related: ['tear-film-instability', 'lens-dehydration', 'comfort']
          }
        },
        {
          id: 'post-surgical-def',
          type: 'definition',
          content: {
            term: 'Post-Surgical Corneas',
            definition: 'Corneas that have undergone procedures such as LASIK, PRK, RK, or corneal transplants, resulting in altered topography and potentially compromised tear function.',
            related: ['oblate-cornea', 'scleral-lenses', 'interface-healing']
          }
        },
        {
          id: 'palpebral-fissure-var',
          type: 'paragraph',
          content: {
            text: 'Variations in palpebral fissure width and shape can affect lens centration and stability. Narrow palpebral fissures may require smaller diameter lenses, while wide fissures may benefit from larger diameters for better coverage and stability.'
          }
        },
        {
          id: 'eyelid-tonus-var',
          type: 'paragraph',
          content: {
            text: 'Eyelid tonus (tension) varies between patients and affects lens movement and positioning. Tight lids may restrict lens movement and cause central pooling, while loose lids may result in excessive lens movement or decentration.'
          }
        },
        {
          id: 'anatomical-table',
          type: 'table',
          content: {
            headers: ['Anatomical Variation', 'Impact on Contact Lens Fitting', 'Potential Solutions'],
            rows: [
              ['High corneal astigmatism', 'Soft lens rotation, unstable vision', 'Toric lenses with stabilization, RGP lenses'],
              ['Corneal irregularity', 'Poor lens-to-cornea relationship, discomfort', 'RGP or scleral lenses to vault irregularity'],
              ['Steep cornea (K > 47D)', 'Lens adherence, limited movement', 'Steeper base curves, smaller diameters, RGP designs'],
              ['Flat cornea (K < 41D)', 'Excessive movement, edge awareness', 'Flatter base curves, larger diameters, steeper peripheries'],
              ['Large pupil size', 'Glare, halos, poor vision in low light', 'Larger optic zones, aspherics, RGP materials'],
              ['Severe lid tonus', 'Lens displacement, difficult handling', 'Steeper base curves, different edge profiles, lid attachment fitting']
            ],
            caption: 'Common anatomical variations and their impact on contact lens fitting'
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
              'The cornea\'s structure and metabolism require continuous oxygen supply, making lens oxygen permeability (Dk/t) critical for ocular health',
              'Tear film quality and quantity directly impact contact lens comfort, wettability, and ocular surface health',
              'Corneal topography influences base curve selection and lens design, with measurements like K readings and HVID guiding proper lens fitting',
              'Eyelid anatomy and blinking mechanics affect lens movement, position, and tear exchange beneath the lens',
              'The conjunctiva and limbus interact directly with soft lenses, requiring careful assessment for signs of mechanical irritation or hypoxic stress',
              'Anatomical variations may require specialty contact lens designs and fitting approaches to ensure comfort and vision'
            ],
            ordered: false
          }
        },
        {
          id: 'clinical-application',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Clinical Application',
            text: 'Always assess anatomical structures before fitting contact lenses and re-evaluate at follow-up visits. Changes in ocular anatomy can indicate fitting issues or physiological responses requiring prompt intervention.'
          }
        }
      ]
    }
  ],
  summary: 'Understanding ocular anatomy is fundamental to successful contact lens practice. The cornea, with its five distinct layers, requires adequate oxygen supply and metabolic exchange that can be compromised by improper lens selection. The tear film consists of lipid, aqueous, and mucin layers, each playing vital roles in lens comfort and performance. Corneal measurements including keratometry readings and diameter guide base curve and lens diameter selection. The conjunctiva and limbus directly interact with soft lens edges, making proper lens diameter and edge design crucial. Eyelid anatomy and blinking mechanics influence lens movement, stability, and tear exchange. Various anatomical variations including keratoconus, dry eye syndrome, and post-surgical corneas require specialized fitting approaches. Comprehensive anatomical assessment before fitting and during follow-up visits ensures optimal lens performance and ocular health maintenance.',
  references: [
    'Efron, N. (2018). Contact Lens Practice (3rd ed.). Elsevier.',
    'Gasson, A., & Morris, J. (2010). The Contact Lens Manual: A Practical Guide to Fitting (4th ed.). Butterworth-Heinemann.',
    'Phillips, A. J., & Speedwell, L. (2018). Contact Lenses (6th ed.). Elsevier.',
    'Craig, J. P., Nelson, J. D., Azar, D. T., et al. (2017). TFOS DEWS II Report Executive Summary. The Ocular Surface, 15(4), 802-812.',
    'Sulley, A., Young, G., & Hunt, C. (2019). Factors in the success of new contact lens wearers. Contact Lens and Anterior Eye, 42(5), 498-503.'
  ]
}; 