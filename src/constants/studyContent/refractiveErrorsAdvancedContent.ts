import { TopicStudyContent } from '../../interfaces/StudyContent';

export const refractiveErrorsAdvancedContent: TopicStudyContent = {
  topicId: 'refractive-errors-advanced',
  title: 'Advanced Refractive Errors',
  introduction: `
    While common refractive errors like myopia, hyperopia, and regular astigmatism affect many individuals, 
    a subset of patients present with more complex refractive conditions. Advanced refractive errors include 
    irregular astigmatism, higher-order aberrations, and other unusual refractive conditions that require 
    specialized understanding and management approaches. These conditions often result from corneal irregularities, 
    post-surgical complications, trauma, or congenital issues.
    
    Understanding these advanced refractive concepts is essential for optical professionals working with specialty 
    prescriptions, specialty contact lenses, or patients with challenging visual needs. This knowledge helps in 
    properly interpreting complex prescriptions, understanding visual complaints that standard refractive 
    correction cannot address, and recommending appropriate solutions for patients with challenging visual situations.
  `,
  objectives: [
    'Explain irregular astigmatism and its causes, impacts on vision, and correction methods',
    'Identify and describe higher-order aberrations (HOAs) and their effects on visual quality',
    'Understand anisometropia, aniseikonia, and their optical implications',
    'Recognize corneal ectatic disorders and their refractive consequences',
    'Explain post-refractive surgery complications and their management',
    'Evaluate specialized correction options for complex refractive errors'
  ],
  sections: [
    {
      id: 'irregular-astigmatism',
      title: 'Irregular Astigmatism',
      type: 'main',
      content: [
        {
          id: 'irregular-astigmatism-intro',
          type: 'paragraph',
          content: {
            text: `Unlike regular astigmatism where the principal meridians are perpendicular to each other, irregular 
            astigmatism exhibits complex optical aberrations that cannot be fully corrected with conventional 
            spectacle lenses.`
          }
        },
        {
          id: 'irregular-astigmatism-definition',
          type: 'heading',
          content: {
            text: 'Definition & Characteristics',
            level: 3
          }
        },
        {
          id: 'irregular-astigmatism-definition-content',
          type: 'paragraph',
          content: {
            text: `Irregular astigmatism occurs when:`
          }
        },
        {
          id: 'irregular-astigmatism-list',
          type: 'list',
          content: {
            items: [
              'The cornea has multiple different curvatures across its surface',
              'Principal meridians are not 90 degrees apart',
              'Refraction varies across different parts of the pupil',
              'The condition cannot be fully corrected with conventional spherocylindrical lenses'
            ],
            ordered: false
          }
        },
        {
          id: 'irregular-astigmatism-causes-heading',
          type: 'heading',
          content: {
            text: 'Causes of Irregular Astigmatism',
            level: 3
          }
        },
        {
          id: 'irregular-astigmatism-causes-intro',
          type: 'paragraph',
          content: {
            text: `Common causes include:`
          }
        },
        {
          id: 'irregular-astigmatism-causes-list',
          type: 'list',
          content: {
            items: [
              'Corneal scarring from trauma or infection (e.g., herpes keratitis)',
              'Keratoconus and other corneal ectatic disorders',
              'Post-surgical irregularities (following PKP, RK, LASIK complications)',
              'Corneal dystrophies affecting corneal shape',
              'Pterygia extending onto the visual axis',
              'Dry eye disease causing irregular tear film'
            ],
            ordered: false
          }
        },
        {
          id: 'irregular-astigmatism-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Clinical Signs and Symptoms',
            level: 3
          }
        },
        {
          id: 'irregular-astigmatism-symptoms-intro',
          type: 'paragraph',
          content: {
            text: `Patients with irregular astigmatism typically report:`
          }
        },
        {
          id: 'irregular-astigmatism-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Reduced best-corrected visual acuity with spectacles',
              'Multiple or ghost images (monocular diplopia or polyopia)',
              'Glare and halos around lights, especially at night',
              'Fluctuating vision (particularly with dry eye-related irregular astigmatism)',
              'Poor results on standard refraction ("scissor reflex" during retinoscopy)'
            ],
            ordered: false
          }
        },
        {
          id: 'irregular-astigmatism-diagnostic-heading',
          type: 'heading',
          content: {
            text: 'Diagnostic Technologies',
            level: 3
          }
        },
        {
          id: 'irregular-astigmatism-diagnostic-intro',
          type: 'paragraph',
          content: {
            text: `Modern technologies to detect and measure irregular astigmatism include:`
          }
        },
        {
          id: 'irregular-astigmatism-diagnostic-list',
          type: 'list',
          content: {
            items: [
              'Corneal topography: Maps the anterior corneal surface',
              'Corneal tomography: Provides 3D analysis of anterior and posterior corneal surfaces',
              'Wavefront aberrometry: Measures total ocular aberrations',
              'Anterior segment OCT: Provides cross-sectional imaging of the cornea'
            ],
            ordered: false
          }
        },
        {
          id: 'irregular-astigmatism-management-heading',
          type: 'heading',
          content: {
            text: 'Management Approaches',
            level: 3
          }
        },
        {
          id: 'irregular-astigmatism-management-intro',
          type: 'paragraph',
          content: {
            text: `Treatment options typically include:`
          }
        },
        {
          id: 'irregular-astigmatism-management-list',
          type: 'list',
          content: {
            items: [
              'Rigid gas permeable (RGP) contact lenses: Create a new refracting surface',
              'Scleral lenses: Vault over the irregular cornea completely',
              'Hybrid contact lenses: Combine RGP center with soft lens skirt',
              'Specialty soft lenses: For mild to moderate irregularity',
              'Surgical interventions: Corneal cross-linking, intrastromal corneal ring segments, or keratoplasty'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'higher-order-aberrations',
      title: 'Higher-Order Aberrations',
      type: 'main',
      content: [
        {
          id: 'hoa-intro',
          type: 'paragraph',
          content: {
            text: `Higher-order aberrations (HOAs) are complex optical imperfections that go beyond the lower-order 
            aberrations (defocus and astigmatism) correctable with standard lenses.`
          }
        },
        {
          id: 'wavefront-optics-heading',
          type: 'heading',
          content: {
            text: 'Understanding Wavefront Optics',
            level: 3
          }
        },
        {
          id: 'wavefront-optics-content',
          type: 'paragraph',
          content: {
            text: `Wavefront technology measures how light travels through the eye's optical system by comparing the 
            path of light rays entering the eye to an ideal reference wavefront.`
          }
        },
        {
          id: 'wavefront-optics-list',
          type: 'list',
          content: {
            items: [
              'Perfect optical system: Creates a perfectly flat wavefront',
              'Real eyes: Produce wavefronts with various deviations from ideal',
              'Zernike polynomials: Mathematical functions used to describe these deviations'
            ],
            ordered: false
          }
        },
        {
          id: 'hoa-types-heading',
          type: 'heading',
          content: {
            text: 'Types of Higher-Order Aberrations',
            level: 3
          }
        },
        {
          id: 'hoa-types-intro',
          type: 'paragraph',
          content: {
            text: `Common HOAs include:`
          }
        },
        {
          id: 'hoa-types-table',
          type: 'table',
          content: {
            headers: ['Aberration', 'Zernike Order', 'Visual Effect', 'Common Causes'],
            rows: [
              ['Coma', '3rd', 'Comet-like distortion, tail extending from point sources', 'Decentered corneal treatments, keratoconus'],
              ['Spherical Aberration', '4th', 'Halos around point sources, reduced contrast sensitivity', 'Age-related lens changes, myopic LASIK'],
              ['Trefoil', '3rd', 'Three-pointed star pattern around lights', 'Tear film irregularities, corneal scars'],
              ['Quadrafoil', '4th', 'Four-pointed star pattern', 'Complex corneal irregularities'],
              ['Secondary Astigmatism', '4th', 'Complex distortion', 'Post-surgical corneas, advanced keratoconus']
            ]
          }
        },
        {
          id: 'hoa-significance-heading',
          type: 'heading',
          content: {
            text: 'Clinical Significance',
            level: 3
          }
        },
        {
          id: 'hoa-significance-intro',
          type: 'paragraph',
          content: {
            text: `The impact of HOAs increases with:`
          }
        },
        {
          id: 'hoa-significance-list',
          type: 'list',
          content: {
            items: [
              'Larger pupil size (especially in low light conditions)',
              'Advanced age (due to lenticular changes)',
              'Post-refractive surgery status',
              'Corneal disease'
            ],
            ordered: false
          }
        },
        {
          id: 'hoa-impact-intro',
          type: 'paragraph',
          content: {
            text: `HOAs contribute significantly to:`
          }
        },
        {
          id: 'hoa-impact-list',
          type: 'list',
          content: {
            items: [
              'Reduced contrast sensitivity',
              'Night vision difficulties',
              'Glare and haloes',
              'Reduced quality of vision despite good Snellen acuity'
            ],
            ordered: false
          }
        },
        {
          id: 'hoa-measurement-heading',
          type: 'heading',
          content: {
            text: 'Measurement and Quantification',
            level: 3
          }
        },
        {
          id: 'hoa-measurement-intro',
          type: 'paragraph',
          content: {
            text: `HOAs are measured using:`
          }
        },
        {
          id: 'hoa-measurement-list',
          type: 'list',
          content: {
            items: [
              'Wavefront aberrometers (Hartmann-Shack sensors most common)',
              'Root Mean Square (RMS) values to quantify the magnitude of aberrations',
              'Point Spread Function (PSF) to visualize the effect on image quality',
              'Modulation Transfer Function (MTF) to assess optical performance across spatial frequencies'
            ],
            ordered: false
          }
        },
        {
          id: 'hoa-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Approaches',
            level: 3
          }
        },
        {
          id: 'hoa-correction-intro',
          type: 'paragraph',
          content: {
            text: `Options for managing HOAs include:`
          }
        },
        {
          id: 'hoa-correction-list',
          type: 'list',
          content: {
            items: [
              'Wavefront-guided laser refractive surgery',
              'Customized soft contact lenses (limited effectiveness)',
              'Rigid gas permeable lenses (masks corneal irregularities)',
              'Small-aperture optics (pinhole contact lenses, corneal inlays)',
              'Adaptive optics (emerging technology)'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'anisometropia-aniseikonia',
      title: 'Anisometropia and Aniseikonia',
      type: 'main',
      content: [
        {
          id: 'anisometropia-aniseikonia-intro',
          type: 'paragraph',
          content: {
            text: `These conditions involve significant differences between the two eyes, creating unique optical challenges.`
          }
        },
        {
          id: 'anisometropia-heading',
          type: 'heading',
          content: {
            text: 'Anisometropia',
            level: 3
          }
        },
        {
          id: 'anisometropia-definition',
          type: 'paragraph',
          content: {
            text: `Anisometropia is a significant difference in refractive error between the eyes, generally considered 
            clinically significant when greater than 1.00D.`
          }
        },
        {
          id: 'anisometropia-classification',
          type: 'heading',
          content: {
            text: 'Classification',
            level: 3
          }
        },
        {
          id: 'anisometropia-classification-list',
          type: 'list',
          content: {
            items: [
              'Simple anisometropia: Same type of refractive error but different magnitudes',
              'Compound anisometropia: Different types of refractive errors (e.g., myopia in one eye, hyperopia in the other)',
              'Antimetropia: Opposite refractive errors (one eye myopic, one hyperopic)'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-causes',
          type: 'heading',
          content: {
            text: 'Causes',
            level: 3
          }
        },
        {
          id: 'anisometropia-causes-list',
          type: 'list',
          content: {
            items: [
              'Congenital/developmental differences in axial length or corneal power',
              'Unilateral trauma or disease affecting one eye\'s refractive components',
              'Post-surgical (e.g., cataract surgery with only one eye implanted)',
              'Pathological conditions affecting one eye (e.g., unilateral cataract)'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-optical-implications',
          type: 'heading',
          content: {
            text: 'Optical Implications',
            level: 3
          }
        },
        {
          id: 'anisometropia-optical-implications-list',
          type: 'list',
          content: {
            items: [
              'Binocular vision challenges due to unequal retinal image sizes',
              'Prismatic effects with spectacle correction when looking away from optical centers',
              'Stereopsis reduction or loss',
              'Potential amblyopia if occurred during visual development'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-aniseikonia-heading',
          type: 'heading',
          content: {
            text: 'Aniseikonia',
            level: 3
          }
        },
        {
          id: 'anisometropia-aniseikonia-definition',
          type: 'paragraph',
          content: {
            text: `Aniseikonia is the condition where the perceived image size differs between the two eyes.`
          }
        },
        {
          id: 'anisometropia-aniseikonia-types',
          type: 'heading',
          content: {
            text: 'Types',
            level: 3
          }
        },
        {
          id: 'anisometropia-aniseikonia-types-list',
          type: 'list',
          content: {
            items: [
              'Static aniseikonia: Constant difference in image size',
              'Dynamic aniseikonia: Varies with gaze position (common with spectacle correction of anisometropia)',
              'Refractive aniseikonia: Due to different magnification from corrective lenses',
              'Retinal aniseikonia: Due to retinal element displacement or stretching'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-aniseikonia-measurement',
          type: 'heading',
          content: {
            text: 'Measurement',
            level: 3
          }
        },
        {
          id: 'anisometropia-aniseikonia-measurement-list',
          type: 'list',
          content: {
            items: [
              'Direct comparison methods: Presenting two images of different sizes',
              'Space eikonometry: Measuring apparent displacement due to size differences',
              'Aniseikonia Inspector software: Computer-based testing'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-aniseikonia-symptoms-significance',
          type: 'heading',
          content: {
            text: 'Symptoms and Significance',
            level: 3
          }
        },
        {
          id: 'anisometropia-aniseikonia-symptoms-intro',
          type: 'paragraph',
          content: {
            text: `Common symptoms include:`
          }
        },
        {
          id: 'anisometropia-aniseikonia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Asthenopia (eye strain)',
              'Headaches',
              'Reading difficulties',
              'Depth perception problems',
              'Spatial disorientation'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-aniseikonia-management',
          type: 'heading',
          content: {
            text: 'Management Approaches',
            level: 3
          }
        },
        {
          id: 'anisometropia-aniseikonia-management-for-anisometropia',
          type: 'paragraph',
          content: {
            text: `For Anisometropia:`
          }
        },
        {
          id: 'anisometropia-aniseikonia-management-for-anisometropia-list',
          type: 'list',
          content: {
            items: [
              'Contact lenses: Eliminate spectacle magnification differences and peripheral prismatic effects',
              'Size-adjusted spectacle lenses: Modified base curves, thicknesses, or lens materials',
              'Monovision correction: For presbyopic patients (intentionally correcting one eye for distance, one for near)',
              'Refractive surgery: To reduce the difference between eyes'
            ],
            ordered: false
          }
        },
        {
          id: 'anisometropia-aniseikonia-management-for-aniseikonia',
          type: 'paragraph',
          content: {
            text: `For Aniseikonia:`
          }
        },
        {
          id: 'anisometropia-aniseikonia-management-for-aniseikonia-list',
          type: 'list',
          content: {
            items: [
              'Iseikonic lenses: Specially designed to adjust image size',
              'Spectacle lens modifications: Adjusting base curve, thickness, or vertex distance',
              'Combination approaches: Partial contact lens correction with spectacles'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'corneal-ectatic-disorders',
      title: 'Corneal Ectatic Disorders',
      type: 'main',
      content: [
        {
          id: 'corneal-ectatic-disorders-intro',
          type: 'paragraph',
          content: {
            text: `Corneal ectatic disorders are progressive conditions characterized by corneal thinning and protrusion, 
            resulting in significant irregular astigmatism and visual distortion.`
          }
        },
        {
          id: 'keratoconus-heading',
          type: 'heading',
          content: {
            text: 'Keratoconus',
            level: 3
          }
        },
        {
          id: 'keratoconus-clinical-features',
          type: 'heading',
          content: {
            text: 'Clinical Features',
            level: 4
          }
        },
        {
          id: 'keratoconus-clinical-features-list',
          type: 'list',
          content: {
            items: [
              'Progressive corneal thinning with inferior or central protrusion',
              'Irregular astigmatism that worsens over time',
              'Steepening of corneal curvature',
              'Vogt\'s striae: Vertical stress lines in the deep stroma',
              'Fleischer\'s ring: Iron deposition around the cone base',
              'Munson\'s sign: Bulging of the lower lid on downward gaze (advanced cases)'
            ],
            ordered: false
          }
        },
        {
          id: 'keratoconus-classification',
          type: 'heading',
          content: {
            text: 'Classification',
            level: 3
          }
        },
        {
          id: 'keratoconus-classification-table',
          type: 'table',
          content: {
            headers: ['Stage', 'K Readings', 'Clinical Signs', 'Visual Impact'],
            rows: [
              ['Mild', '< 48D', 'Slight distortion on topography', 'Correctable with spectacles'],
              ['Moderate', '48-54D', 'Definite topographical distortion', 'Often requires specialty contact lenses'],
              ['Advanced', '54-65D', 'Significant corneal thinning, scarring possible', 'Poor spectacle correction, specialized contact lenses required'],
              ['Severe', '> 65D', 'Significant scarring, extreme thinning', 'May require surgical intervention']
            ]
          }
        },
        {
          id: 'keratoconus-refractive-characteristics',
          type: 'heading',
          content: {
            text: 'Refractive Characteristics',
            level: 3
          }
        },
        {
          id: 'keratoconus-refractive-characteristics-list',
          type: 'list',
          content: {
            items: [
              'Initially presents as myopia with regular astigmatism',
              'Progresses to high irregular astigmatism',
              'Frequent prescription changes',
              'Poor best-corrected visual acuity with glasses'
            ],
            ordered: false
          }
        },
        {
          id: 'other-ectatic-disorders',
          type: 'heading',
          content: {
            text: 'Other Ectatic Disorders',
            level: 3
          }
        },
        {
          id: 'other-ectatic-disorders-pellucid-marginal-degeneration',
          type: 'heading',
          content: {
            text: 'Pellucid Marginal Degeneration (PMD)',
            level: 4
          }
        },
        {
          id: 'pellucid-marginal-degeneration-description',
          type: 'paragraph',
          content: {
            text: 'Thinning in the inferior peripheral cornea'
          }
        },
        {
          id: 'pellucid-marginal-degeneration-pattern',
          type: 'paragraph',
          content: {
            text: '"Crab claw" or "butterfly" pattern on topography'
          }
        },
        {
          id: 'pellucid-marginal-degeneration-difficulty',
          type: 'paragraph',
          content: {
            text: 'Difficult to fit with standard contact lenses'
          }
        },
        {
          id: 'pellucid-marginal-degeneration-against-rule-astigmatism',
          type: 'paragraph',
          content: {
            text: 'Against-the-rule astigmatism common'
          }
        },
        {
          id: 'keratoglobus',
          type: 'heading',
          content: {
            text: 'Keratoglobus',
            level: 4
          }
        },
        {
          id: 'keratoglobus-description',
          type: 'paragraph',
          content: {
            text: 'Global corneal thinning and protrusion'
          }
        },
        {
          id: 'keratoglobus-extreme-fragility',
          type: 'paragraph',
          content: {
            text: 'Extreme corneal fragility'
          }
        },
        {
          id: 'keratoglobus-severe-refractive-error',
          type: 'paragraph',
          content: {
            text: 'Severe refractive error'
          }
        },
        {
          id: 'keratoglobus-challenging-contact-lens-fitting',
          type: 'paragraph',
          content: {
            text: 'Very challenging for contact lens fitting'
          }
        },
        {
          id: 'post-lasik-ectasia',
          type: 'heading',
          content: {
            text: 'Post-LASIK Ectasia',
            level: 4
          }
        },
        {
          id: 'post-lasik-ectasia-description',
          type: 'paragraph',
          content: {
            text: 'Iatrogenic ectasia following laser refractive surgery'
          }
        },
        {
          id: 'post-lasik-ectasia-presentation',
          type: 'paragraph',
          content: {
            text: 'Similar presentation to keratoconus'
          }
        },
        {
          id: 'post-lasik-ectasia-risk-factors',
          type: 'paragraph',
          content: {
            text: 'Risk factors include thin preoperative corneas and forme fruste keratoconus'
          }
        },
        {
          id: 'diagnostic-technologies',
          type: 'heading',
          content: {
            text: 'Diagnostic Technologies',
            level: 3
          }
        },
        {
          id: 'diagnostic-technologies-list',
          type: 'list',
          content: {
            items: [
              'Corneal topography: Maps anterior corneal surface',
              'Corneal tomography: Provides anterior and posterior elevation data',
              'Pachymetry: Measures corneal thickness across different points',
              'Ocular coherence tomography: Provides cross-sectional imaging of the cornea',
              'Corneal biomechanics assessment: Evaluates corneal rigidity and resistance'
            ],
            ordered: false
          }
        },
        {
          id: 'management-approaches',
          type: 'heading',
          content: {
            text: 'Management Approaches',
            level: 3
          }
        },
        {
          id: 'management-approaches-non-surgical',
          type: 'paragraph',
          content: {
            text: 'Non-Surgical:'
          }
        },
        {
          id: 'management-approaches-non-surgical-list',
          type: 'list',
          content: {
            items: [
              'Specialty contact lenses:',
              '- Rigid gas permeable lenses',
              '- Scleral lenses',
              '- Hybrid lenses',
              '- Custom soft lenses (for mild cases)'
            ],
            ordered: false
          }
        },
        {
          id: 'management-approaches-surgical',
          type: 'paragraph',
          content: {
            text: 'Surgical:'
          }
        },
        {
          id: 'management-approaches-surgical-list',
          type: 'list',
          content: {
            items: [
              'Corneal cross-linking (CXL): Strengthens corneal tissue to halt progression',
              'Intrastromal corneal ring segments (ICRS): Reshape the cornea to reduce irregularity',
              'Topography-guided PRK: Limited cases with adequate corneal thickness',
              'Keratoplasty: Deep anterior lamellar keratoplasty (DALK) or penetrating keratoplasty (PK) for advanced cases'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'post-refractive-surgery-complications',
      title: 'Post-Refractive Surgery Complications',
      type: 'main',
      content: [
        {
          id: 'post-refractive-surgery-complications-intro',
          type: 'paragraph',
          content: {
            text: `Laser refractive surgery (LASIK, PRK, SMILE) can occasionally result in complex refractive 
            outcomes that present unique challenges for optical correction.`
          }
        },
        {
          id: 'common-refractive-complications',
          type: 'heading',
          content: {
            text: 'Common Refractive Complications',
            level: 3
          }
        },
        {
          id: 'common-refractive-complications-residual-refractive-error',
          type: 'heading',
          content: {
            text: 'Residual Refractive Error',
            level: 4
          }
        },
        {
          id: 'common-refractive-complications-residual-refractive-error-list',
          type: 'list',
          content: {
            items: [
              'Undercorrection: More common in high myopia and hyperopia',
              'Overcorrection: Can result in unintended hyperopia after myopic treatment',
              'Regression: Gradual return toward pre-surgical refractive error',
              'Induced astigmatism: Often from healing or treatment decentration'
            ],
            ordered: false
          }
        },
        {
          id: 'common-refractive-complications-irregular-astigmatism',
          type: 'heading',
          content: {
            text: 'Irregular Astigmatism',
            level: 4
          }
        },
        {
          id: 'common-refractive-complications-irregular-astigmatism-causes',
          type: 'paragraph',
          content: {
            text: 'Causes include:'
          }
        },
        {
          id: 'common-refractive-complications-irregular-astigmatism-causes-list',
          type: 'list',
          content: {
            items: [
              'Decentered ablations: Treatment not properly centered on visual axis',
              'Central islands: Areas of tissue with insufficient treatment',
              'Flap complications: Wrinkles, striae, or partial flaps (LASIK)',
              'Epithelial ingrowth: Cells growing under the flap (LASIK)'
            ],
            ordered: false
          }
        },
        {
          id: 'common-refractive-complications-higher-order-aberrations',
          type: 'heading',
          content: {
            text: 'Higher-Order Aberrations',
            level: 4
          }
        },
        {
          id: 'common-refractive-complications-higher-order-aberrations-list',
          type: 'list',
          content: {
            items: [
              'Spherical aberration: Common after myopic corrections, causing reduced contrast and night vision issues',
              'Coma: Often resulting from decentered treatments',
              'Trefoil: Can occur with irregular healing or complicated surgeries'
            ],
            ordered: false
          }
        },
        {
          id: 'clinical-presentation',
          type: 'heading',
          content: {
            text: 'Clinical Presentation',
            level: 3
          }
        },
        {
          id: 'clinical-presentation-intro',
          type: 'paragraph',
          content: {
            text: 'Post-refractive surgery complications often present with:'
          }
        },
        {
          id: 'clinical-presentation-list',
          type: 'list',
          content: {
            items: [
              'Reduced quality of vision despite acceptable Snellen acuity',
              'Night vision difficulties, glare, and halos',
              'Starbursts around light sources',
              'Monocular diplopia or polyopia',
              'Fluctuating vision throughout the day',
              'Contact lens intolerance when attempting to correct residual error',
              'Dry eye symptoms exacerbating visual disturbances'
            ],
            ordered: false
          }
        },
        {
          id: 'diagnostic-approach',
          type: 'heading',
          content: {
            text: 'Diagnostic Approach',
            level: 3
          }
        },
        {
          id: 'diagnostic-approach-intro',
          type: 'paragraph',
          content: {
            text: 'Important clinical assessments include:'
          }
        },
        {
          id: 'diagnostic-approach-list',
          type: 'list',
          content: {
            items: [
              'Careful refraction: Including spherical refinement techniques',
              'Pupil size measurement: Essential for understanding night vision complaints',
              'Wavefront aberrometry: To measure higher-order aberrations',
              'Corneal topography/tomography: To visualize treatment zone, centration, and regularity',
              'Tear film assessment: To identify concurrent dry eye issues'
            ],
            ordered: false
          }
        },
        {
          id: 'correction-options',
          type: 'heading',
          content: {
            text: 'Correction Options',
            level: 3
          }
        },
        {
          id: 'correction-options-optical-solutions',
          type: 'paragraph',
          content: {
            text: 'Optical Solutions:'
          }
        },
        {
          id: 'correction-options-optical-solutions-list',
          type: 'list',
          content: {
            items: [
              'Specialty spectacle lenses:',
              '- Wavefront-optimized designs (limited benefit)',
              '- Prism-compensated designs for decentration issues'
            ],
            ordered: false
          }
        },
        {
          id: 'correction-options-contact-lens-options',
          type: 'paragraph',
          content: {
            text: 'Contact lens options:'
          }
        },
        {
          id: 'correction-options-contact-lens-options-list',
          type: 'list',
          content: {
            items: [
              'Rigid gas permeable lenses',
              'Scleral lenses (particularly beneficial)',
              'Hybrid lenses',
              'Custom wavefront-guided soft lenses'
            ],
            ordered: false
          }
        },
        {
          id: 'correction-options-surgical-management',
          type: 'paragraph',
          content: {
            text: 'Surgical Management:'
          }
        },
        {
          id: 'correction-options-surgical-management-list',
          type: 'list',
          content: {
            items: [
              'Enhancement procedures:',
              '- Topography-guided ablations',
              '- Wavefront-guided treatments',
              '- PRK often preferred over LASIK for enhancements',
              'Other surgical approaches:',
              '- Small aperture corneal inlays',
              '- Therapeutic PTK for surface irregularities',
              '- Specialty IOLs if concurrent cataract surgery is indicated'
            ],
            ordered: false
          }
        },
        {
          id: 'special-considerations-optical-dispensing',
          type: 'heading',
          content: {
            text: 'Special Considerations for Optical Dispensing',
            level: 3
          }
        },
        {
          id: 'special-considerations-optical-dispensing-intro',
          type: 'paragraph',
          content: {
            text: 'When working with post-refractive surgery patients:'
          }
        },
        {
          id: 'special-considerations-optical-dispensing-list',
          type: 'list',
          content: {
            items: [
              'Careful history taking to understand the type of surgery performed',
              'Managing expectations about visual outcomes with optical correction',
              'Consideration of pupil size when selecting lens designs',
              'Anti-reflective coatings to minimize glare and halos',
              'Potential benefit of light tints to reduce photophobia and improve contrast',
              'Trial frame or test lenses to demonstrate likely outcomes before lens fabrication'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'specialized-correction-methods',
      title: 'Specialized Correction Methods',
      type: 'main',
      content: [
        {
          id: 'specialized-correction-methods-intro',
          type: 'paragraph',
          content: {
            text: `Patients with advanced refractive errors often require specialized correction approaches 
            beyond conventional spectacles and soft contact lenses.`
          }
        },
        {
          id: 'contact-lens-solutions',
          type: 'heading',
          content: {
            text: 'Contact Lens Solutions',
            level: 3
          }
        },
        {
          id: 'contact-lens-solutions-scleral-lenses',
          type: 'heading',
          content: {
            text: 'Scleral Lenses',
            level: 4
          }
        },
        {
          id: 'contact-lens-solutions-scleral-lenses-key-benefits',
          type: 'paragraph',
          content: {
            text: 'These large-diameter rigid lenses vault over the entire cornea and rest on the sclera.'
          }
        },
        {
          id: 'contact-lens-solutions-scleral-lenses-key-benefits-list',
          type: 'list',
          content: {
            items: [
              'Create a new, regular refracting surface',
              'Vault over corneal irregularities completely',
              'Provide a liquid reservoir that masks corneal irregularities',
              'Offer stable vision throughout wearing time',
              'Protect the ocular surface (beneficial for concurrent dry eye)'
            ],
            ordered: false
          }
        },
        {
          id: 'contact-lens-solutions-scleral-lenses-fitting-considerations',
          type: 'paragraph',
          content: {
            text: 'Fitting considerations:'
          }
        },
        {
          id: 'contact-lens-solutions-scleral-lenses-fitting-considerations-list',
          type: 'list',
          content: {
            items: [
              'Requires specialized training and equipment',
              'Multiple parameters must be customized (sagittal depth, landing zone alignment, optic zone power)',
              'Trial lens evaluation crucial for success'
            ],
            ordered: false
          }
        },
        {
          id: 'contact-lens-solutions-custom-wavefront-guided-soft-lenses',
          type: 'heading',
          content: {
            text: 'Custom Wavefront-Guided Soft Lenses',
            level: 4
          }
        },
        {
          id: 'contact-lens-solutions-custom-wavefront-guided-soft-lenses-applications',
          type: 'paragraph',
          content: {
            text: 'These incorporate aberration corrections into the lens design.'
          }
        },
        {
          id: 'contact-lens-solutions-custom-wavefront-guided-soft-lenses-limitations',
          type: 'paragraph',
          content: {
            text: 'Limitations:'
          }
        },
        {
          id: 'contact-lens-solutions-custom-wavefront-guided-soft-lenses-limitations-list',
          type: 'list',
          content: {
            items: [
              'Effectiveness depends on lens centration and stability',
              'May not fully correct severe irregularities',
              'More expensive than conventional soft lenses'
            ],
            ordered: false
          }
        },
        {
          id: 'contact-lens-solutions-hybrid-lenses',
          type: 'heading',
          content: {
            text: 'Hybrid Lenses',
            level: 4
          }
        },
        {
          id: 'contact-lens-solutions-hybrid-lenses-advantages',
          type: 'paragraph',
          content: {
            text: 'Combining a rigid center with a soft skirt.'
          }
        },
        {
          id: 'contact-lens-solutions-hybrid-lenses-advantages-list',
          type: 'list',
          content: {
            items: [
              'Provides rigid lens optics with soft lens comfort',
              'Good centration and stability',
              'Less awareness of edge than standard RGPs'
            ],
            ordered: false
          }
        },
        {
          id: 'contact-lens-solutions-hybrid-lenses-challenges',
          type: 'paragraph',
          content: {
            text: 'Challenges:'
          }
        },
        {
          id: 'contact-lens-solutions-hybrid-lenses-challenges-list',
          type: 'list',
          content: {
            items: [
              'Careful fitting required to prevent corneal bearing',
              'Limited parameter availability compared to custom RGPs',
              'More expensive than standard contact lenses'
            ],
            ordered: false
          }
        },
        {
          id: 'specialty-spectacle-considerations',
          type: 'heading',
          content: {
            text: 'Specialty Spectacle Considerations',
            level: 3
          }
        },
        {
          id: 'specialty-spectacle-considerations-aberration-controlling-lenses',
          type: 'heading',
          content: {
            text: 'Aberration-Controlling Lenses',
            level: 4
          }
        },
        {
          id: 'specialty-spectacle-considerations-aberration-controlling-lenses-list',
          type: 'list',
          content: {
            items: [
              'Wavefront-optimized designs: Limited but growing options',
              'Customized free-form lenses: Can incorporate some higher-order aberration correction',
              'Position of wear measurements: Critical for optimal performance'
            ],
            ordered: false
          }
        },
        {
          id: 'specialty-spectacle-considerations-management-of-aniseikonia',
          type: 'heading',
          content: {
            text: 'Management of Aniseikonia',
            level: 4
          }
        },
        {
          id: 'specialty-spectacle-considerations-management-of-aniseikonia-list',
          type: 'list',
          content: {
            items: [
              'Base curve adjustments: Altering the front surface curvature',
              'Thickness modifications: Affecting magnification',
              'Vertex distance optimization: Minimizing differential magnification',
              'Specialized iseikonic designs: Custom-made to equalize image sizes'
            ],
            ordered: false
          }
        },
        {
          id: 'specialty-spectacle-considerations-considerations-for-advanced-presbyopes',
          type: 'heading',
          content: {
            text: 'Considerations for Advanced Presbyopes',
            level: 4
          }
        },
        {
          id: 'specialty-spectacle-considerations-considerations-for-advanced-presbyopes-intro',
          type: 'paragraph',
          content: {
            text: 'Patients with both presbyopia and advanced refractive errors face additional challenges:'
          }
        },
        {
          id: 'specialty-spectacle-considerations-considerations-for-advanced-presbyopes-list',
          type: 'list',
          content: {
            items: [
              'Limited progressive lens options for highly irregular corneas',
              'Modified monovision approaches with specialty contact lenses',
              'Combination correction (e.g., contact lens for distance with reading glasses)'
            ],
            ordered: false
          }
        },
        {
          id: 'assistive-devices-low-vision-aids',
          type: 'heading',
          content: {
            text: 'Assistive Devices and Low Vision Aids',
            level: 3
          }
        },
        {
          id: 'assistive-devices-low-vision-aids-intro',
          type: 'paragraph',
          content: {
            text: 'For cases where standard optical correction is insufficient:'
          }
        },
        {
          id: 'assistive-devices-low-vision-aids-list',
          type: 'list',
          content: {
            items: [
              'Pinhole glasses: Reduce aberrations by limiting aperture',
              'Telescopic systems: For distance magnification',
              'Microscopic systems: For near magnification',
              'Electronic magnifiers: Flexible magnification options',
              'Specialized filters: Enhance contrast and reduce glare'
            ],
            ordered: false
          }
        },
        {
          id: 'advanced-technologies',
          type: 'heading',
          content: {
            text: 'Advanced Technologies',
            level: 3
          }
        },
        {
          id: 'advanced-technologies-emerging-optical-solutions',
          type: 'heading',
          content: {
            text: 'Emerging Optical Solutions',
            level: 4
          }
        },
        {
          id: 'advanced-technologies-emerging-optical-solutions-list',
          type: 'list',
          content: {
            items: [
              'Adaptive optics contact lenses: Currently experimental',
              'Customized 3D-printed contact lenses: Growing in availability',
              'Smart contact lenses: Under development for dynamic correction',
              'Virtual reality systems: Incorporating refractive correction'
            ],
            ordered: false
          }
        },
        {
          id: 'advanced-technologies-digital-compensation',
          type: 'heading',
          content: {
            text: 'Digital Compensation',
            level: 4
          }
        },
        {
          id: 'advanced-technologies-digital-compensation-list',
          type: 'list',
          content: {
            items: [
              'Aberration-correcting displays: Customize display to compensate for the eye\'s aberrations',
              'Software compensation: Image processing to enhance visibility for those with irregular optics'
            ],
            ordered: false
          }
        }
      ]
    }
  ],
  summary: `
    Advanced refractive errors represent some of the most challenging visual conditions optical professionals 
    encounter. Unlike standard refractive errors that can be corrected with conventional spectacles or contact 
    lenses, these complex conditions require specialized knowledge, advanced diagnostic technology, and 
    innovative correction approaches.
    
    The field of advanced refractive management continues to evolve with new technologies and treatment options. 
    For optimal patient care, optical professionals should maintain current knowledge of diagnostic technologies 
    and correction options, develop collaborative relationships with eye care professionals specialized in 
    managing these conditions, and cultivate the patient communication skills necessary to manage expectations 
    and guide patients through what can often be a complex journey to their best possible vision.
    
    By understanding the principles and correction options for irregular astigmatism, higher-order aberrations, 
    anisometropia/aniseikonia, and other advanced refractive conditions, optical professionals can provide 
    valuable care to patients who might otherwise struggle to find satisfactory visual solutions.
  `,
  references: [
    'American Academy of Ophthalmology. (2021). Clinical Optics.',
    'Calossi, A. (2007). Corneal asphericity and spherical aberration. Journal of Refractive Surgery, 23(5), 505-514.',
    'Downie, L. E., & Lindsay, R. G. (2015). Contact lens management of keratoconus. Clinical and Experimental Optometry, 98(4), 299-311.',
    'Goss, D. A., & Grosvenor, T. (1996). Reliability of refraction—a literature review. Journal of the American Optometric Association, 67(10), 619-630.',
    'Marsack, J. D., Parker, K. E., & Applegate, R. A. (2008). Performance of wavefront-guided soft lenses in three keratoconus subjects. Optometry and Vision Science, 85(12), E1172-E1178.',
    'Pinero, D. P., Nieto, J. C., & Lopez-Miguel, A. (2012). Characterization of corneal structure in keratoconus. Journal of Cataract & Refractive Surgery, 38(12), 2167-2183.',
    'Rabinowitz, Y. S. (1998). Keratoconus. Survey of Ophthalmology, 42(4), 297-319.',
    'Salmon, T. O., & van de Pol, C. (2006). Normal-eye Zernike coefficients and root-mean-square wavefront errors. Journal of Cataract & Refractive Surgery, 32(12), 2064-2074.',
    'Schornack, M. M. (2015). Scleral lenses: a literature review. Eye & Contact Lens, 41(1), 3-11.',
    'Waring, G. O., Durrie, D. S., Thompson, K. P., & Assil, K. K. (2018). Results of the Prospective Evaluation of Radial Keratotomy (PERK) Study 10 years after surgery. Archives of Ophthalmology, 112(10), 1298-1308.'
  ],
  practiceQuestions: [
    {
      question: 'Which of the following best describes irregular astigmatism?',
      options: [
        'Astigmatism where the principal meridians are 90 degrees apart',
        'Astigmatism that can be fully corrected with standard toric spectacle lenses',
        'Astigmatism where the cornea has multiple different curvatures across its surface',
        'Astigmatism that only affects one eye'
      ],
      correctAnswer: 2,
      explanation: 'Irregular astigmatism is characterized by multiple different curvatures across the corneal surface that cannot be fully corrected with conventional spherocylindrical lenses. Unlike regular astigmatism, the principal meridians are often not 90 degrees apart.'
    },
    {
      question: 'Which higher-order aberration is most commonly increased following myopic LASIK procedures?',
      options: [
        'Coma',
        'Trefoil',
        'Spherical aberration',
        'Quadrafoil'
      ],
      correctAnswer: 2,
      explanation: 'Spherical aberration is most commonly increased following myopic LASIK procedures due to the change in corneal shape. The procedure flattens the central cornea more than the periphery, creating a positive spherical aberration that can cause halos and reduced contrast sensitivity.'
    },
    {
      question: 'A patient with keratoconus is most likely to benefit from which type of contact lens?',
      options: [
        'Standard soft toric lenses',
        'Rigid gas permeable or scleral lenses',
        'Daily disposable soft lenses',
        'Hydrogel multifocal lenses'
      ],
      correctAnswer: 1,
      explanation: 'Patients with keratoconus benefit most from rigid gas permeable (RGP) or scleral lenses. These lenses create a new refracting surface that masks the irregular corneal shape, providing improved visual acuity that cannot be achieved with standard soft lenses.'
    },
    {
      question: 'What is aniseikonia?',
      options: [
        'A difference in refractive error between the two eyes',
        'A difference in perceived image size between the two eyes',
        'A difference in pupil size between the two eyes',
        'Irregular astigmatism affecting only one eye'
      ],
      correctAnswer: 1,
      explanation: 'Aniseikonia is a condition where the perceived image size differs between the two eyes. It can result from anisometropia (different refractive errors between eyes) when corrected with spectacles, or from retinal element displacement or other factors affecting image perception.'
    },
    {
      question: 'Which topographical pattern is most characteristic of pellucid marginal degeneration (PMD)?',
      options: [
        'Central steepening',
        '"Bow tie" pattern with regular astigmatism',
        '"Crab claw" or "butterfly" pattern',
        'Uniform corneal flattening'
      ],
      correctAnswer: 2,
      explanation: 'Pellucid marginal degeneration (PMD) typically presents with a characteristic "crab claw" or "butterfly" pattern on corneal topography. This pattern results from inferior peripheral thinning of the cornea with relative steepening above the thinned area.'
    }
  ]
}; 