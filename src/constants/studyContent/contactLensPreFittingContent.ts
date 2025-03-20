import { TopicStudyContent } from '../../interfaces/StudyContent';

export const contactLensPreFittingContent: TopicStudyContent = {
  topicId: 'cl-pre-fitting',
  title: 'Contact Lens Pre-Fitting Evaluation',
  introduction: 'A comprehensive pre-fitting evaluation is essential for successful contact lens fitting. This assessment includes detailed patient history, ocular surface examination, corneal measurements, and tear film evaluation. Gathering this information helps determine suitable lens options, identify contraindications, and establish baseline measurements for future comparisons.',
  objectives: [
    'Understand the essential components of a contact lens patient history',
    'Learn techniques for external ocular health assessment',
    'Master corneal evaluation including topography and keratometry',
    'Understand tear film analysis and its impact on lens selection',
    'Identify contraindications for contact lens wear',
    'Develop skills to select appropriate lens options based on pre-fitting findings'
  ],
  sections: [
    {
      id: 'patient-history',
      title: 'Comprehensive Patient History',
      type: 'introduction',
      content: [
        {
          id: 'history-importance',
          type: 'paragraph',
          content: {
            text: 'A thorough patient history provides critical information for contact lens selection and helps identify potential challenges. The history should cover medical, ocular, medication, allergy, occupational, and lifestyle factors that may influence contact lens success.'
          }
        },
        {
          id: 'history-components',
          type: 'list',
          content: {
            title: 'Essential Components of Patient History:',
            items: [
              'Previous contact lens experience (types, wearing schedule, solutions, complications)',
              'Ocular and medical conditions (dry eye, allergies, autoimmune disorders, diabetes)',
              'Current medications (systemic and ocular)',
              'Allergies (medication, environmental, solution sensitivities)',
              'Occupational factors (environment, visual demands, computer use)',
              'Lifestyle considerations (sports, hobbies, cosmetic concerns)',
              'Wearing expectations (daily wear hours, overnight use, replacement schedule)',
              'Visual needs (distance, near, intermediate vision requirements)'
            ]
          }
        },
        {
          id: 'red-flags',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'History Red Flags',
            text: 'Certain history findings may indicate increased risk for complications. These include previous contact lens intolerance, severe dry eye syndrome, recurrent eye infections, poorly controlled diabetes, and certain autoimmune conditions affecting the ocular surface.'
          }
        },
        {
          id: 'history-form',
          type: 'paragraph',
          content: {
            text: 'Using a standardized contact lens history form ensures comprehensive data collection and proper documentation. The form should be reviewed with the patient to clarify responses and identify concerns that may need further investigation.'
          }
        }
      ]
    },
    {
      id: 'refractive-evaluation',
      title: 'Refractive Assessment',
      type: 'main',
      content: [
        {
          id: 'refraction-importance',
          type: 'paragraph',
          content: {
            text: 'A precise refraction provides the foundation for contact lens power selection. Unlike spectacle prescriptions, contact lens prescriptions must account for factors such as vertex distance and tear lens effects.'
          }
        },
        {
          id: 'refraction-components',
          type: 'list',
          content: {
            items: [
              'Monocular subjective refraction (distance and near)',
              'Binocular balance assessment',
              'Accommodative response evaluation',
              'Pupil size measurement in different lighting conditions',
              'Visual acuity at various distances',
              'Dominant eye determination'
            ]
          }
        },
        {
          id: 'vertex-correction',
          type: 'definition',
          content: {
            term: 'Vertex Distance Correction',
            definition: 'The adjustment of lens power based on the change in distance between the spectacle lens and the cornea versus a contact lens directly on the eye. Significant for prescriptions greater than ±4.00D.',
            related: ['effective power', 'vertex distance', 'contact lens power']
          }
        },
        {
          id: 'vertex-calculation',
          type: 'callout',
          content: {
            type: 'formula',
            title: 'Vertex Distance Formula',
            text: 'CL Power = Spectacle Rx / (1 - [Vertex Distance × Spectacle Rx])'
          }
        },
        {
          id: 'toric-considerations',
          type: 'paragraph',
          content: {
            text: 'For astigmatic corrections, the clinician must determine whether a toric lens is necessary. Generally, astigmatism ≥0.75D may require toric correction, though patient sensitivity to cylinder and lens design options also influence this decision.'
          }
        }
      ]
    },
    {
      id: 'external-examination',
      title: 'External Ocular Examination',
      type: 'main',
      content: [
        {
          id: 'external-exam-intro',
          type: 'paragraph',
          content: {
            text: 'A comprehensive external examination assesses the health of ocular structures relevant to contact lens wear. This evaluation establishes baseline conditions and identifies potential contraindications or concerns.'
          }
        },
        {
          id: 'examination-components',
          type: 'table',
          content: {
            headers: ['Structure', 'Assessment', 'Significance for CL Wear'],
            rows: [
              ['Lids/Lashes', 'Position, tone, blepharitis, meibomian gland function', 'Impacts lens deposition, comfort, and tear quality'],
              ['Conjunctiva', 'Hyperemia, papillae, follicles, discharge', 'Indicates allergies, inflammation, or infection'],
              ['Cornea', 'Clarity, surface regularity, scarring, infiltrates', 'Affects fitting relationship and visual acuity'],
              ['Limbus', 'Neovascularization, inflammation', 'Indicator of corneal hypoxia or inflammation'],
              ['Tear Film', 'Quality, quantity, debris, break-up time', 'Critical for lens comfort and surface wetting'],
              ['Anterior Chamber', 'Depth, clarity', 'Relevant for specialty lens selection'],
              ['Iris', 'Color, structure', 'Impacts cosmetic lens selection']
            ],
            caption: 'External Ocular Structures Evaluation for Contact Lens Fitting'
          }
        },
        {
          id: 'assessment-techniques',
          type: 'paragraph',
          content: {
            text: 'The examination should utilize a variety of techniques, including diffuse illumination, sclerotic scatter, direct and indirect illumination, and fluorescein staining. Magnification with a slit lamp allows detailed assessment of these structures.'
          }
        },
        {
          id: 'grading-scales',
          type: 'paragraph',
          content: {
            text: 'Standardized grading scales (e.g., Efron, CCLRU) should be used to document findings objectively. These scales provide consistent terminology and reference images for conditions such as hyperemia, staining, and papillary changes.'
          }
        },
        {
          id: 'fluorescein',
          type: 'definition',
          content: {
            term: 'Fluorescein Staining',
            definition: 'A diagnostic technique using fluorescein dye to reveal corneal and conjunctival epithelial defects. Patterns of staining can help diagnose dry eye, exposure keratopathy, and other ocular surface disorders.',
            related: ['epithelial defects', 'cobalt blue filter', 'rose bengal']
          }
        }
      ]
    },
    {
      id: 'corneal-topography',
      title: 'Corneal Topography and Keratometry',
      type: 'main',
      content: [
        {
          id: 'corneal-topo-intro',
          type: 'paragraph',
          content: {
            text: 'Corneal topography provides detailed analysis of corneal shape, curvature, and regularity. This information is essential for selecting appropriate base curves, diagnosing corneal conditions, and detecting subtle irregularities.'
          }
        },
        {
          id: 'keratometry',
          type: 'definition',
          content: {
            term: 'Keratometry',
            definition: 'Measurement of the curvature of the anterior surface of the cornea, typically in the central 3-4mm zone. Provides K readings in diopters or radius of curvature in millimeters.',
            related: ['base curve', 'astigmatism', 'corneal cylinder']
          }
        },
        {
          id: 'manual-k',
          type: 'paragraph',
          content: {
            text: 'Manual keratometry measures curvature in two principal meridians, typically 90 degrees apart. This provides information about corneal astigmatism (toricity) and helps determine initial base curve selection for rigid lenses.'
          }
        },
        {
          id: 'topography-types',
          type: 'list',
          content: {
            title: 'Types of Corneal Topographers:',
            items: [
              'Placido-based systems (analyze reflected rings pattern)',
              'Elevation-based systems (directly measure corneal height)',
              'Scheimpflug imaging (provide anterior and posterior corneal surface data)',
              'Optical coherence tomography (OCT) based systems (provide high-resolution cross-sectional images)',
              'Hybrid systems combining multiple technologies'
            ]
          }
        },
        {
          id: 'topography-maps',
          type: 'paragraph',
          content: {
            text: 'Topographic maps use color-coded displays to represent corneal curvature or elevation data. Axial (sagittal) maps are useful for fitting spherical lenses, while tangential (instantaneous) maps better display local curvature changes relevant for toric and specialty lenses.'
          }
        },
        {
          id: 'topography-interpretation',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Interpreting Topography Maps',
            text: 'Warm colors (red, orange) typically represent steeper corneal areas, while cool colors (blue, green) represent flatter areas. Symmetric bow-tie patterns often indicate regular astigmatism, while asymmetric patterns may suggest irregularities or pathology.'
          }
        },
        {
          id: 'topography-applications',
          type: 'table',
          content: {
            headers: ['Application', 'Utility in Contact Lens Fitting'],
            rows: [
              ['RGP lens fitting', 'Determines base curve, identifies optimal alignment zones'],
              ['Soft toric lens fitting', 'Quantifies corneal toricity and axis orientation'],
              ['Specialty lens design', 'Essential for scleral, orthokeratology, and post-surgical fits'],
              ['Keratoconus detection', 'Identifies irregular astigmatism and ectasia'],
              ['Presurgical screening', 'Identifies contraindications for refractive surgery candidates'],
              ['Orthokeratology monitoring', 'Tracks corneal reshaping progress'],
              ['Contact lens-induced changes', 'Monitors corneal health over time']
            ],
            caption: 'Applications of Corneal Topography in Contact Lens Practice'
          }
        }
      ]
    },
    {
      id: 'tear-film-evaluation',
      title: 'Tear Film Analysis',
      type: 'main',
      content: [
        {
          id: 'tear-film-intro',
          type: 'paragraph',
          content: {
            text: 'The tear film plays a crucial role in contact lens comfort, vision quality, and ocular health. A thorough tear film assessment helps predict contact lens success and guides material selection.'
          }
        },
        {
          id: 'tear-film-structure',
          type: 'definition',
          content: {
            term: 'Tear Film Structure',
            definition: 'The tear film consists of three main layers: the outer lipid layer (prevents evaporation), the middle aqueous layer (provides nutrients and oxygen), and the inner mucin layer (helps tears adhere to the ocular surface).',
            related: ['meibomian glands', 'lacrimal gland', 'goblet cells']
          }
        },
        {
          id: 'tbut',
          type: 'definition',
          content: {
            term: 'Tear Break-Up Time (TBUT)',
            definition: 'The time interval between a complete blink and the appearance of the first dry spot in the tear film. Measured in seconds, with values below 10 seconds generally considered abnormal.',
            related: ['dry eye', 'tear film stability', 'fluorescein']
          }
        },
        {
          id: 'test-methods',
          type: 'table',
          content: {
            headers: ['Test', 'Procedure', 'Normal Values', 'Significance'],
            rows: [
              ['TBUT', 'Fluorescein application, observation of first break', '≥10 seconds', 'Indicates tear film stability'],
              ['Schirmer Test', 'Filter paper strip placed in lower lid, measures wetting', '≥10mm in 5 minutes', 'Quantifies aqueous tear production'],
              ['Phenol Red Thread', 'Thread placed in lower lid, measures wetting', '≥10mm in 15 seconds', 'Less reflex tearing than Schirmer'],
              ['Tear Meniscus Height', 'Observed at lower lid margin', '0.2-0.5mm', 'Indicates tear volume'],
              ['Tear Osmolarity', 'Measured with specialized equipment', '275-308 mOsm/L', 'Indicates dry eye severity'],
              ['Meibomian Gland Expression', 'Digital pressure on lid margins', 'Clear oil secretion', 'Assesses lipid layer quality'],
              ['Interferometry', 'Observation of lipid layer patterns', 'Uniform, colorful pattern', 'Assesses lipid layer thickness']
            ],
            caption: 'Tear Film Assessment Methods and Interpretation'
          }
        },
        {
          id: 'dry-eye-implication',
          type: 'paragraph',
          content: {
            text: 'Patients with marginal or insufficient tear parameters may experience comfort issues with contact lenses. For such patients, consider prescribing high water content materials, silicone hydrogels with enhanced wettability, or specialty lenses that vault the cornea.'
          }
        },
        {
          id: 'tear-film-management',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Tear Film Management',
            text: 'For patients with borderline tear film quality, treatment before lens fitting may improve success. Options include artificial tears, lid hygiene, punctal plugs, or prescription medications such as cyclosporine or lifitegrast.'
          }
        }
      ]
    },
    {
      id: 'pupil-parameters',
      title: 'Pupil and Palpebral Aperture Assessment',
      type: 'main',
      content: [
        {
          id: 'pupil-intro',
          type: 'paragraph',
          content: {
            text: 'Pupil size and dynamics affect visual performance with contact lenses, particularly for specialty designs like multifocals or colored lenses. Palpebral aperture dimensions influence lens diameter selection and movement patterns.'
          }
        },
        {
          id: 'pupil-measurement',
          type: 'paragraph',
          content: {
            text: 'Pupil size should be measured in both bright and dim illumination. Digital pupillometers provide precise measurements, though comparison to standardized charts is also effective. Document both photopic (bright light) and scotopic (dim light) measurements.'
          }
        },
        {
          id: 'pupil-significance',
          type: 'list',
          content: {
            title: 'Significance of Pupil Size in Contact Lens Fitting:',
            items: [
              'Multifocal design selection (pupil-dependent vs. pupil-independent designs)',
              'Optical zone requirements for optimal vision and comfort',
              'Cosmetic lens centration and appearance',
              'Assessment of potential night vision issues (halos, glare)',
              'RGP lens diameter considerations'
            ]
          }
        },
        {
          id: 'palpebral-assessment',
          type: 'paragraph',
          content: {
            text: 'The palpebral aperture (distance between upper and lower lids) affects lens positioning and movement. Measure the vertical aperture in primary gaze and assess lid tension and position during blinking.'
          }
        },
        {
          id: 'lid-interaction',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Lid-Lens Interaction',
            text: 'Lid position and tension significantly influence lens movement. A high upper lid with tight tension may cause superior lens positioning, while a loose lower lid might result in inferior decentration.'
          }
        }
      ]
    },
    {
      id: 'contraindications',
      title: 'Identifying Contraindications',
      type: 'summary',
      content: [
        {
          id: 'contraindication-intro',
          type: 'paragraph',
          content: {
            text: 'Pre-fitting evaluation should identify absolute and relative contraindications to contact lens wear. While relatively few absolute contraindications exist, several conditions may increase risk or require special lens designs or management.'
          }
        },
        {
          id: 'contraindication-table',
          type: 'table',
          content: {
            headers: ['Category', 'Absolute Contraindications', 'Relative Contraindications'],
            rows: [
              ['Ocular Surface', 'Active corneal infection, Severe recurrent erosion', 'Moderate dry eye, Recurrent anterior blepharitis'],
              ['Corneal Conditions', 'Severe keratoconus with scarring, Recent corneal transplant', 'Mild to moderate keratoconus, Corneal dystrophies'],
              ['Lid/Adnexa', 'Trichiasis affecting cornea, Severe entropion/ectropion', 'Lagophthalmos, Incomplete blink'],
              ['Systemic', 'Inability to handle lenses or perform care', 'Poorly controlled diabetes, Sjögren\'s syndrome'],
              ['Environmental', 'Extreme dust/chemical exposure with no protection', 'Excessive air travel, Very dry climate'],
              ['Medications', 'None absolute if monitored properly', 'Antihistamines, Beta-blockers, Isotretinoin'],
              ['Patient Factors', 'Unwillingness to follow care instructions', 'Poor hygiene habits, Inability to maintain follow-up']
            ],
            caption: 'Contraindications for Contact Lens Wear'
          }
        },
        {
          id: 'special-considerations',
          type: 'paragraph',
          content: {
            text: 'Many relative contraindications can be managed with appropriate lens selection, modified wearing schedules, or concurrent treatment. For example, scleral lenses may be appropriate for patients with moderate dry eye or corneal irregularities who cannot tolerate conventional lenses.'
          }
        },
        {
          id: 'risk-assessment',
          type: 'callout',
          content: {
            type: 'warning',
            title: 'Risk-Benefit Assessment',
            text: 'When relative contraindications exist, perform a thorough risk-benefit analysis and ensure the patient understands the potential complications. Document this discussion and the patient\'s informed consent in the medical record.'
          }
        }
      ]
    }
  ],
  summary: 'This module provided comprehensive information on the pre-fitting evaluation process for contact lens patients. We covered the essential components of a detailed patient history, techniques for ocular health assessment, corneal evaluation methods including topography and keratometry, and tear film analysis. The module also discussed pupil and lid assessment, as well as identifying contraindications for contact lens wear. A thorough pre-fitting evaluation establishes the foundation for successful contact lens fitting and helps predict potential challenges and complications.',
  references: [
    'Efron N. Contact Lens Practice. 3rd ed. Elsevier; 2018.',
    'Gasson A, Morris J. The Contact Lens Manual: A Practical Guide to Fitting. 4th ed. Butterworth-Heinemann; 2010.',
    'Nichols JJ, Willcox MD, Bron AJ, et al. The TFOS International Workshop on Contact Lens Discomfort: Executive Summary. Invest Ophthalmol Vis Sci. 2013;54(11):TFOS7-TFOS13.',
    'Wolffsohn JS, Arita R, Chalmers R, et al. TFOS DEWS II Diagnostic Methodology report. Ocul Surf. 2017;15(3):539-574.'
  ],
  practiceQuestions: [
    {
      question: 'Which test best assesses the stability of the tear film for contact lens wear?',
      options: [
        'Keratometry',
        'Schirmer test',
        'Tear break-up time (TBUT)',
        'Corneal topography'
      ],
      correctAnswer: 2,
      explanation: 'Tear break-up time (TBUT) specifically measures tear film stability by recording the time between a blink and the first appearance of dry spots on the cornea. A short TBUT indicates poor tear film stability, which can lead to discomfort and dryness with contact lens wear.'
    },
    {
      question: 'What is the primary purpose of corneal topography in contact lens pre-fitting evaluation?',
      options: [
        'To measure pupil size and function',
        'To evaluate tear production volume',
        'To map corneal shape and identify irregularities',
        'To assess eyelid tension'
      ],
      correctAnswer: 2,
      explanation: 'Corneal topography maps the anterior corneal surface, providing detailed information about corneal curvature, shape, and any irregularities. This information is crucial for selecting appropriate lens designs, especially for patients with conditions like astigmatism or keratoconus.'
    },
    {
      question: 'Which of the following is an absolute contraindication for contact lens wear?',
      options: [
        'Mild dry eye syndrome',
        'Active corneal infection',
        'History of seasonal allergies',
        'Low astigmatism'
      ],
      correctAnswer: 1,
      explanation: 'An active corneal infection is an absolute contraindication for contact lens wear as lenses can exacerbate the infection and potentially lead to serious complications like corneal ulcers. Contact lens fitting should be delayed until the infection is completely resolved.'
    },
    {
      question: 'Which patient history factor would most likely indicate a potential challenge for soft contact lens wear?',
      options: [
        'Previous LASIK surgery 5 years ago with stable refraction',
        'Part-time computer use (2-3 hours daily)',
        'Taking oral antihistamines for seasonal allergies',
        'Occasional weekend participation in swimming'
      ],
      correctAnswer: 2,
      explanation: 'Oral antihistamines often cause systemic dryness, including dry eyes, which can significantly impact contact lens comfort and wearing time. This medication would necessitate careful consideration of lens material (higher water content) and possibly artificial tear supplementation.'
    },
    {
      question: 'Which test provides the most basic measurement needed for initial contact lens selection?',
      options: [
        'Keratometry',
        'Specular microscopy',
        'Pupillometry',
        'Lid tension test'
      ],
      correctAnswer: 0,
      explanation: 'Keratometry provides measurements of the corneal curvature, which is the most fundamental parameter for initial contact lens selection. These K readings help determine the base curve of the lens, which is essential for proper lens fit.'
    }
  ]
}; 