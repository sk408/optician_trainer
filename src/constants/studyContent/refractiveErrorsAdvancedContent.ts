import { TopicStudyContent } from '@/types/study';

export const refractiveErrorsAdvancedContent: TopicStudyContent = {
  id: 'refractive-errors-advanced',
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
      title: 'Irregular Astigmatism',
      content: `
        Unlike regular astigmatism where the principal meridians are perpendicular to each other, irregular 
        astigmatism exhibits complex optical aberrations that cannot be fully corrected with conventional 
        spectacle lenses.
        
        ### Definition & Characteristics
        
        Irregular astigmatism occurs when:
        - The cornea has multiple different curvatures across its surface
        - Principal meridians are not 90 degrees apart
        - Refraction varies across different parts of the pupil
        - The condition cannot be fully corrected with conventional spherocylindrical lenses
        
        ### Causes of Irregular Astigmatism
        
        Common causes include:
        - **Corneal scarring** from trauma or infection (e.g., herpes keratitis)
        - **Keratoconus** and other corneal ectatic disorders
        - **Post-surgical irregularities** (following PKP, RK, LASIK complications)
        - **Corneal dystrophies** affecting corneal shape
        - **Pterygia** extending onto the visual axis
        - **Dry eye disease** causing irregular tear film
        
        ### Clinical Signs and Symptoms
        
        Patients with irregular astigmatism typically report:
        - Reduced best-corrected visual acuity with spectacles
        - Multiple or ghost images (monocular diplopia or polyopia)
        - Glare and halos around lights, especially at night
        - Fluctuating vision (particularly with dry eye-related irregular astigmatism)
        - Poor results on standard refraction ("scissor reflex" during retinoscopy)
        
        ### Diagnostic Technologies
        
        Modern technologies to detect and measure irregular astigmatism include:
        - **Corneal topography**: Maps the anterior corneal surface
        - **Corneal tomography**: Provides 3D analysis of anterior and posterior corneal surfaces
        - **Wavefront aberrometry**: Measures total ocular aberrations
        - **Anterior segment OCT**: Provides cross-sectional imaging of the cornea
        
        ### Management Approaches
        
        Treatment options typically include:
        - **Rigid gas permeable (RGP) contact lenses**: Create a new refracting surface
        - **Scleral lenses**: Vault over the irregular cornea completely
        - **Hybrid contact lenses**: Combine RGP center with soft lens skirt
        - **Specialty soft lenses**: For mild to moderate irregularity
        - **Surgical interventions**: Corneal cross-linking, intrastromal corneal ring segments, or keratoplasty
      `
    },
    {
      title: 'Higher-Order Aberrations',
      content: `
        Higher-order aberrations (HOAs) are complex optical imperfections that go beyond the lower-order 
        aberrations (defocus and astigmatism) correctable with standard lenses.
        
        ### Understanding Wavefront Optics
        
        Wavefront technology measures how light travels through the eye's optical system by comparing the 
        path of light rays entering the eye to an ideal reference wavefront.
        
        - **Perfect optical system**: Creates a perfectly flat wavefront
        - **Real eyes**: Produce wavefronts with various deviations from ideal
        - **Zernike polynomials**: Mathematical functions used to describe these deviations
        
        ### Types of Higher-Order Aberrations
        
        Common HOAs include:
        
        | Aberration | Zernike Order | Visual Effect | Common Causes |
        |------------|---------------|---------------|---------------|
        | Coma | 3rd | Comet-like distortion, tail extending from point sources | Decentered corneal treatments, keratoconus |
        | Spherical Aberration | 4th | Halos around point sources, reduced contrast sensitivity | Age-related lens changes, myopic LASIK |
        | Trefoil | 3rd | Three-pointed star pattern around lights | Tear film irregularities, corneal scars |
        | Quadrafoil | 4th | Four-pointed star pattern | Complex corneal irregularities |
        | Secondary Astigmatism | 4th | Complex distortion | Post-surgical corneas, advanced keratoconus |
        
        ### Clinical Significance
        
        The impact of HOAs increases with:
        - **Larger pupil size** (especially in low light conditions)
        - **Advanced age** (due to lenticular changes)
        - **Post-refractive surgery status**
        - **Corneal disease**
        
        HOAs contribute significantly to:
        - Reduced contrast sensitivity
        - Night vision difficulties
        - Glare and haloes
        - Reduced quality of vision despite good Snellen acuity
        
        ### Measurement and Quantification
        
        HOAs are measured using:
        - **Wavefront aberrometers** (Hartmann-Shack sensors most common)
        - **Root Mean Square (RMS)** values to quantify the magnitude of aberrations
        - **Point Spread Function (PSF)** to visualize the effect on image quality
        - **Modulation Transfer Function (MTF)** to assess optical performance across spatial frequencies
        
        ### Correction Approaches
        
        Options for managing HOAs include:
        - **Wavefront-guided laser refractive surgery**
        - **Customized soft contact lenses** (limited effectiveness)
        - **Rigid gas permeable lenses** (masks corneal irregularities)
        - **Small-aperture optics** (pinhole contact lenses, corneal inlays)
        - **Adaptive optics** (emerging technology)
      `
    },
    {
      title: 'Anisometropia and Aniseikonia',
      content: `
        These conditions involve significant differences between the two eyes, creating unique optical challenges.
        
        ### Anisometropia
        
        Anisometropia is a significant difference in refractive error between the eyes, generally considered 
        clinically significant when greater than 1.00D.
        
        #### Classification
        
        - **Simple anisometropia**: Same type of refractive error but different magnitudes
        - **Compound anisometropia**: Different types of refractive errors (e.g., myopia in one eye, hyperopia in the other)
        - **Antimetropia**: Opposite refractive errors (one eye myopic, one hyperopic)
        
        #### Causes
        
        - **Congenital/developmental** differences in axial length or corneal power
        - **Unilateral trauma or disease** affecting one eye's refractive components
        - **Post-surgical** (e.g., cataract surgery with only one eye implanted)
        - **Pathological conditions** affecting one eye (e.g., unilateral cataract)
        
        #### Optical Implications
        
        - **Binocular vision challenges** due to unequal retinal image sizes
        - **Prismatic effects** with spectacle correction when looking away from optical centers
        - **Stereopsis reduction** or loss
        - **Potential amblyopia** if occurred during visual development
        
        ### Aniseikonia
        
        Aniseikonia is the condition where the perceived image size differs between the two eyes.
        
        #### Types
        
        - **Static aniseikonia**: Constant difference in image size
        - **Dynamic aniseikonia**: Varies with gaze position (common with spectacle correction of anisometropia)
        - **Refractive aniseikonia**: Due to different magnification from corrective lenses
        - **Retinal aniseikonia**: Due to retinal element displacement or stretching
        
        #### Measurement
        
        - **Direct comparison methods**: Presenting two images of different sizes
        - **Space eikonometry**: Measuring apparent displacement due to size differences
        - **Aniseikonia Inspector software**: Computer-based testing
        
        #### Symptoms and Significance
        
        Common symptoms include:
        - Asthenopia (eye strain)
        - Headaches
        - Reading difficulties
        - Depth perception problems
        - Spatial disorientation
        
        Generally, aniseikonia greater than 3-5% becomes symptomatic for many patients.
        
        ### Management Approaches
        
        #### For Anisometropia:
        
        - **Contact lenses**: Eliminate spectacle magnification differences and peripheral prismatic effects
        - **Size-adjusted spectacle lenses**: Modified base curves, thicknesses, or lens materials
        - **Monovision correction**: For presbyopic patients (intentionally correcting one eye for distance, one for near)
        - **Refractive surgery**: To reduce the difference between eyes
        
        #### For Aniseikonia:
        
        - **Iseikonic lenses**: Specially designed to adjust image size
        - **Spectacle lens modifications**: Adjusting base curve, thickness, or vertex distance
        - **Combination approaches**: Partial contact lens correction with spectacles
      `
    },
    {
      title: 'Corneal Ectatic Disorders',
      content: `
        Corneal ectatic disorders are progressive conditions characterized by corneal thinning and protrusion, 
        resulting in significant irregular astigmatism and visual distortion.
        
        ### Keratoconus
        
        Keratoconus is the most common corneal ectatic disorder, typically beginning in adolescence or early adulthood.
        
        #### Clinical Features
        
        - **Progressive corneal thinning** with inferior or central protrusion
        - **Irregular astigmatism** that worsens over time
        - **Steepening** of corneal curvature
        - **Vogt's striae**: Vertical stress lines in the deep stroma
        - **Fleischer's ring**: Iron deposition around the cone base
        - **Munson's sign**: Bulging of the lower lid on downward gaze (advanced cases)
        
        #### Classification
        
        | Stage | K Readings | Clinical Signs | Visual Impact |
        |-------|------------|----------------|---------------|
        | Mild | < 48D | Slight distortion on topography | Correctable with spectacles |
        | Moderate | 48-54D | Definite topographical distortion | Often requires specialty contact lenses |
        | Advanced | 54-65D | Significant corneal thinning, scarring possible | Poor spectacle correction, specialized contact lenses required |
        | Severe | > 65D | Significant scarring, extreme thinning | May require surgical intervention |
        
        #### Refractive Characteristics
        
        - Initially presents as myopia with regular astigmatism
        - Progresses to high irregular astigmatism
        - Frequent prescription changes
        - Poor best-corrected visual acuity with glasses
        
        ### Other Ectatic Disorders
        
        #### Pellucid Marginal Degeneration (PMD)
        
        - Thinning in the **inferior peripheral cornea**
        - "Crab claw" or "butterfly" pattern on topography
        - Difficult to fit with standard contact lenses
        - Against-the-rule astigmatism common
        
        #### Keratoglobus
        
        - **Global** corneal thinning and protrusion
        - Extreme corneal fragility
        - Severe refractive error
        - Very challenging for contact lens fitting
        
        #### Post-LASIK Ectasia
        
        - Iatrogenic ectasia following laser refractive surgery
        - Similar presentation to keratoconus
        - Risk factors include thin preoperative corneas and forme fruste keratoconus
        
        ### Diagnostic Technologies
        
        Essential technologies for diagnosis and monitoring include:
        
        - **Corneal topography**: Maps anterior corneal surface
        - **Corneal tomography**: Provides anterior and posterior elevation data
        - **Pachymetry**: Measures corneal thickness across different points
        - **Ocular coherence tomography**: Provides cross-sectional imaging of the cornea
        - **Corneal biomechanics assessment**: Evaluates corneal rigidity and resistance
        
        ### Management Approaches
        
        #### Non-Surgical
        
        - **Specialty contact lenses**:
          - Rigid gas permeable lenses
          - Scleral lenses
          - Hybrid lenses
          - Custom soft lenses (for mild cases)
        
        #### Surgical
        
        - **Corneal cross-linking (CXL)**: Strengthens corneal tissue to halt progression
        - **Intrastromal corneal ring segments (ICRS)**: Reshape the cornea to reduce irregularity
        - **Topography-guided PRK**: Limited cases with adequate corneal thickness
        - **Keratoplasty**: Deep anterior lamellar keratoplasty (DALK) or penetrating keratoplasty (PK) for advanced cases
      `
    },
    {
      title: 'Post-Refractive Surgery Complications',
      content: `
        Laser refractive surgery (LASIK, PRK, SMILE) can occasionally result in complex refractive 
        outcomes that present unique challenges for optical correction.
        
        ### Common Refractive Complications
        
        #### Residual Refractive Error
        
        - **Undercorrection**: More common in high myopia and hyperopia
        - **Overcorrection**: Can result in unintended hyperopia after myopic treatment
        - **Regression**: Gradual return toward pre-surgical refractive error
        - **Induced astigmatism**: Often from healing or treatment decentration
        
        #### Irregular Astigmatism
        
        Causes include:
        - **Decentered ablations**: Treatment not properly centered on visual axis
        - **Central islands**: Areas of tissue with insufficient treatment
        - **Flap complications**: Wrinkles, striae, or partial flaps (LASIK)
        - **Epithelial ingrowth**: Cells growing under the flap (LASIK)
        
        #### Higher-Order Aberrations
        
        - **Spherical aberration**: Common after myopic corrections, causing reduced contrast and night vision issues
        - **Coma**: Often resulting from decentered treatments
        - **Trefoil**: Can occur with irregular healing or complicated surgeries
        
        ### Clinical Presentation
        
        Post-refractive surgery complications often present with:
        
        - **Reduced quality of vision** despite acceptable Snellen acuity
        - **Night vision difficulties**, glare, and halos
        - **Starbursts** around light sources
        - **Monocular diplopia** or polyopia
        - **Fluctuating vision** throughout the day
        - **Contact lens intolerance** when attempting to correct residual error
        - **Dry eye symptoms** exacerbating visual disturbances
        
        ### Diagnostic Approach
        
        Important clinical assessments include:
        
        - **Careful refraction**: Including spherical refinement techniques
        - **Pupil size measurement**: Essential for understanding night vision complaints
        - **Wavefront aberrometry**: To measure higher-order aberrations
        - **Corneal topography/tomography**: To visualize treatment zone, centration, and regularity
        - **Tear film assessment**: To identify concurrent dry eye issues
        
        ### Correction Options
        
        #### Optical Solutions
        
        - **Specialty spectacle lenses**:
          - Wavefront-optimized designs (limited benefit)
          - Prism-compensated designs for decentration issues
        
        - **Contact lens options**:
          - Rigid gas permeable lenses
          - Scleral lenses (particularly beneficial)
          - Hybrid lenses
          - Custom wavefront-guided soft lenses
        
        #### Surgical Management
        
        - **Enhancement procedures**:
          - Topography-guided ablations
          - Wavefront-guided treatments
          - PRK often preferred over LASIK for enhancements
        
        - **Other surgical approaches**:
          - Small aperture corneal inlays
          - Therapeutic PTK for surface irregularities
          - Specialty IOLs if concurrent cataract surgery is indicated
        
        ### Special Considerations for Optical Dispensing
        
        When working with post-refractive surgery patients:
        
        - **Careful history taking** to understand the type of surgery performed
        - **Managing expectations** about visual outcomes with optical correction
        - **Consideration of pupil size** when selecting lens designs
        - **Anti-reflective coatings** to minimize glare and halos
        - **Potential benefit of light tints** to reduce photophobia and improve contrast
        - **Trial frame or test lenses** to demonstrate likely outcomes before lens fabrication
      `
    },
    {
      title: 'Specialized Correction Methods',
      content: `
        Patients with advanced refractive errors often require specialized correction approaches 
        beyond conventional spectacles and soft contact lenses.
        
        ### Contact Lens Solutions
        
        #### Scleral Lenses
        
        These large-diameter rigid lenses vault over the entire cornea and rest on the sclera.
        
        **Key benefits**:
        - Create a new, regular refracting surface
        - Vault over corneal irregularities completely
        - Provide a liquid reservoir that masks corneal irregularities
        - Offer stable vision throughout wearing time
        - Protect the ocular surface (beneficial for concurrent dry eye)
        
        **Fitting considerations**:
        - Requires specialized training and equipment
        - Multiple parameters must be customized (sagittal depth, landing zone alignment, optic zone power)
        - Trial lens evaluation crucial for success
        
        #### Custom Wavefront-Guided Soft Lenses
        
        These incorporate aberration corrections into the lens design.
        
        **Applications**:
        - Mild to moderate irregular astigmatism
        - Higher-order aberrations after refractive surgery
        - Keratoconus (early stages)
        
        **Limitations**:
        - Effectiveness depends on lens centration and stability
        - May not fully correct severe irregularities
        - More expensive than conventional soft lenses
        
        #### Hybrid Lenses
        
        Combining a rigid center with a soft skirt.
        
        **Advantages**:
        - Provides rigid lens optics with soft lens comfort
        - Good centration and stability
        - Less awareness of edge than standard RGPs
        
        **Challenges**:
        - Careful fitting required to prevent corneal bearing
        - Limited parameter availability compared to custom RGPs
        - More expensive than standard contact lenses
        
        ### Specialty Spectacle Considerations
        
        #### Aberration-Controlling Lenses
        
        - **Wavefront-optimized designs**: Limited but growing options
        - **Customized free-form lenses**: Can incorporate some higher-order aberration correction
        - **Position of wear measurements**: Critical for optimal performance
        
        #### Management of Aniseikonia
        
        - **Base curve adjustments**: Altering the front surface curvature
        - **Thickness modifications**: Affecting magnification
        - **Vertex distance optimization**: Minimizing differential magnification
        - **Specialized iseikonic designs**: Custom-made to equalize image sizes
        
        #### Considerations for Advanced Presbyopes
        
        Patients with both presbyopia and advanced refractive errors face additional challenges:
        
        - **Limited progressive lens options** for highly irregular corneas
        - **Modified monovision** approaches with specialty contact lenses
        - **Combination correction** (e.g., contact lens for distance with reading glasses)
        
        ### Assistive Devices and Low Vision Aids
        
        For cases where standard optical correction is insufficient:
        
        - **Pinhole glasses**: Reduce aberrations by limiting aperture
        - **Telescopic systems**: For distance magnification
        - **Microscopic systems**: For near magnification
        - **Electronic magnifiers**: Flexible magnification options
        - **Specialized filters**: Enhance contrast and reduce glare
        
        ### Advanced Technologies
        
        #### Emerging Optical Solutions
        
        - **Adaptive optics contact lenses**: Currently experimental
        - **Customized 3D-printed contact lenses**: Growing in availability
        - **Smart contact lenses**: Under development for dynamic correction
        - **Virtual reality systems**: Incorporating refractive correction
        
        #### Digital Compensation
        
        - **Aberration-correcting displays**: Customize display to compensate for the eye's aberrations
        - **Software compensation**: Image processing to enhance visibility for those with irregular optics
      `
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
  quizzes: [
    {
      id: 'refractive-errors-advanced-quiz-1',
      title: 'Advanced Refractive Errors Quiz',
      questions: [
        {
          id: 'q1',
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
          id: 'q2',
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
          id: 'q3',
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
          id: 'q4',
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
          id: 'q5',
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
    }
  ]
}; 