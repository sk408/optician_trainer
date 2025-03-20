import { TopicStudyContent } from '../../interfaces/StudyContent';
import { refractiveErrorsImages } from '../mediaAssets';

export const refractiveErrorsContent: TopicStudyContent = {
  topicId: 'refractive-errors',
  title: 'Understanding Refractive Errors',
  introduction: 'Refractive errors are vision conditions that occur when the eye cannot properly focus light, resulting in blurred vision. As an optician, understanding these errors is essential for interpreting prescriptions and explaining vision conditions to patients. This module explains these common vision problems in simple terms that you can use with your patients who may be unfamiliar with optical terminology.',
  objectives: [
    'Identify and explain the four main types of refractive errors',
    'Understand how each refractive error affects vision',
    'Learn how different lens types correct specific refractive errors',
    'Recognize common symptoms associated with each refractive error',
    'Understand how to interpret prescription values for different refractive conditions',
    'Learn to explain refractive errors to patients in simple terms'
  ],
  sections: [
    {
      id: 'introduction-section',
      title: 'Introduction to Refractive Errors',
      type: 'introduction',
      content: [
        {
          id: 'intro-heading',
          type: 'heading',
          content: {
            text: 'What Are Refractive Errors?',
            level: 2
          }
        },
        {
          id: 'intro-paragraph-1',
          type: 'paragraph',
          content: {
            text: 'Refractive errors are vision problems that occur when the shape of the eye prevents light from focusing directly on the retina (the light-sensitive tissue at the back of the eye). When light doesn\'t focus properly, images appear blurry or distorted. Think of it like a camera that\'s out of focus - the picture won\'t be clear. Refractive errors are the most common vision problems, affecting millions of people worldwide.'
          }
        },
        {
          id: 'camera-analogy',
          type: 'paragraph',
          content: {
            text: 'The eye works much like a camera. The cornea and lens are like the camera lens, focusing light onto the retina, which is like the film or digital sensor. When a camera is out of focus, the image appears blurry. Similarly, refractive errors cause blurry vision because light isn\'t focused precisely on the retina.'
          }
        },
        {
          id: 'beginner-terminology',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Beginner-Friendly Terminology',
            text: 'You\'ll encounter some technical terms when studying refractive errors. Here are simple translations:\n- Emmetropia: Normal vision where light focuses perfectly on the retina\n- Ametropia: Any refractive error where light doesn\'t focus properly\n- Dioptric Power: The strength of a lens, measured in diopters (D)\n- Accommodation: The eye\'s ability to change focus (like a camera\'s autofocus)'
          }
        },
        {
          id: 'everyday-examples',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Seeing Refractive Errors in Everyday Life',
            text: 'You can experience what different refractive errors feel like:\n- Myopia: Look through the wrong end of binoculars - distant objects become very blurry\n- Hyperopia: Try reading with reading glasses that are too strong - close objects become blurry\n- Astigmatism: Look at your reflection in the back of a shiny spoon - the distorted image mimics astigmatism\n- Presbyopia: Try reading small print after a 5-hour flight without glasses if you\'re over 45 - eye fatigue makes focusing harder'
          }
        },
        {
          id: 'intro-image',
          type: 'image',
          content: {
            src: refractiveErrorsImages.intro.path,
            alt: 'Diagram showing how light focuses in a normal eye vs. eyes with refractive errors',
            caption: 'Comparison of light focusing in normal vision versus refractive errors',
            width: '100%',
            height: 'auto'
          }
        },
        {
          id: 'interactive-demo',
          type: 'interactive',
          content: {
            type: 'demonstration',
            id: 'refractive-errors-demo',
            title: 'Interactive Vision Simulator',
            description: 'This interactive tool lets you see how different refractive errors affect vision. Slide the controls to simulate various conditions and see how corrective lenses restore clear vision.',
            instructions: 'Use the slider to adjust the severity of each refractive error and observe how vision changes. Then add the corrective lens to see how vision improves.'
          }
        },
        {
          id: 'symptoms-overview',
          type: 'paragraph',
          content: {
            text: 'Refractive errors typically cause symptoms like blurry vision, eyestrain, headaches, or squinting. However, these symptoms vary based on the specific type of refractive error and its severity. Many people may not even realize they have a refractive error because they\'ve never experienced clear vision to compare it to - this is especially common in children.'
          }
        },
        {
          id: 'normal-vision-heading',
          type: 'heading',
          content: {
            text: 'Normal Vision (Emmetropia)',
            level: 3
          }
        },
        {
          id: 'normal-vision-paragraph',
          type: 'paragraph',
          content: {
            text: 'In an eye with normal vision (called "emmetropia" [em-eh-TROH-pee-ah]), light rays enter through the cornea (the clear front window) and are precisely focused on the retina, creating a clear image. The cornea and lens work together to bend (refract) light rays to focus them exactly on the retina. The length of the eyeball, corneal curvature, and lens power all must be properly coordinated for clear vision - just like all parts of a camera need to work together to take a clear photo.'
          }
        },
        {
          id: 'visual-comparison',
          type: 'paragraph',
          content: {
            text: 'To visualize different refractive errors, imagine taking pictures with different camera problems:\n- Normal vision (emmetropia): A perfectly focused camera\n- Nearsightedness (myopia): A camera that\'s focused too close, making distant objects blurry\n- Farsightedness (hyperopia): A camera that\'s focused too far away, making nearby objects blurry\n- Astigmatism: A camera with a warped lens, making images distorted at all distances\n- Presbyopia: A camera that can\'t adjust its focus between near and far objects'
          }
        },
        {
          id: 'error-causes-heading',
          type: 'heading',
          content: {
            text: 'What Causes Refractive Errors?',
            level: 3
          }
        },
        {
          id: 'error-causes-paragraph',
          type: 'paragraph',
          content: {
            text: 'Refractive errors typically result from one or more of these factors:'
          }
        },
        {
          id: 'error-causes-list',
          type: 'list',
          content: {
            items: [
              'Eyeball length (too long or too short) - like a camera where the film or sensor is too far or too close to the lens',
              'Corneal shape irregularities - like a camera lens that isn\'t perfectly smooth',
              'Aging of the crystalline lens - the natural lens inside your eye becomes less flexible with age, like camera parts that get stiff over time',
              'Alterations in the refractive index of the lens - changes in how well the lens bends light'
            ],
            ordered: false
          }
        },
        {
          id: 'causes-elaboration',
          type: 'paragraph',
          content: {
            text: 'Most refractive errors are inherited and may be first noticed in childhood. Some refractive errors, like presbyopia, develop naturally with age. Others might result from eye injuries, surgeries, or certain diseases. Understanding these causes helps explain to patients why they need vision correction and why their prescription might change over time.'
          }
        },
        {
          id: 'common-misconceptions',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Common Misconceptions',
            text: 'Many beginners have misconceptions about refractive errors:\n1. Myth: Reading in dim light causes refractive errors. Truth: While this may cause eyestrain, it doesn\'t permanently change eye shape.\n2. Myth: Wearing glasses makes your eyes dependent on them. Truth: Glasses correct existing problems but don\'t make vision worse.\n3. Myth: Children can outgrow all refractive errors. Truth: While some children can outgrow mild hyperopia, most refractive errors persist and may need ongoing correction.\n4. Myth: Eye exercises can cure refractive errors. Truth: While exercises may help with certain issues like convergence problems, they cannot change the physical shape of the eye or cornea.'
          }
        },
        {
          id: 'error-prevalence-callout',
          type: 'callout',
          content: {
            type: 'info',
            title: 'Did You Know?',
            text: 'Approximately 150 million Americans use some form of eyewear to correct refractive errors, making them the most common vision problems in the United States. This means nearly half of all Americans wear glasses or contacts!'
          }
        }
      ]
    },
    {
      id: 'myopia-section',
      title: 'Myopia (Nearsightedness)',
      type: 'main',
      content: [
        {
          id: 'myopia-heading',
          type: 'heading',
          content: {
            text: 'Myopia (Nearsightedness)',
            level: 2
          }
        },
        {
          id: 'myopia-definition',
          type: 'definition',
          content: {
            term: 'Myopia',
            definition: 'A refractive error where close objects appear clear, but distant objects appear blurry because light focuses in front of the retina rather than directly on it. The word "myopia" comes from Greek words meaning "close eyes" because people with myopia can see clearly when objects are close to their eyes.',
            related: ['hyperopia', 'astigmatism']
          }
        },
        {
          id: 'myopia-beginner-explanation',
          type: 'callout',
          content: {
            type: 'primary',
            title: 'MYOPIA SIMPLIFIED',
            text: 'Imagine trying to take a photo with a camera that\'s always zoomed in too much. You can take clear pictures of things up close, but anything far away is just a blur. That\'s what myopia feels like. Your eyes work perfectly for seeing things that are close (like books or phones), but they can\'t focus properly on distant objects (like road signs or classroom boards).'
          }
        },
        {
          id: 'myopia-what-it-feels-like',
          type: 'paragraph',
          content: {
            text: 'What myopia feels like: When you have uncorrected myopia, distant objects look "washed out" or blurry. Text on signs might be impossible to read until you get very close. You might find yourself squinting to see better or moving closer to objects to see them clearly. Many people with myopia don\'t even realize they have it because they\'ve never experienced clear distance vision to compare it to.'
          }
        },
        {
          id: 'myopia-simple-terms',
          type: 'paragraph',
          content: {
            text: 'In simple terms, people with myopia (nearsightedness) can see objects up close clearly, but have trouble seeing distant objects like road signs, movie screens, or writing on a whiteboard. The term "nearsighted" makes sense because these individuals can see things that are "near" to them without correction.'
          }
        },
        {
          id: 'myopia-simplified-diagram',
          type: 'image',
          content: {
            src: refractiveErrorsImages.myopiaSimplified.path,
            alt: 'Simplified diagram showing how light focuses in myopia',
            caption: 'Myopia: Light focuses in front of the retina, causing distant objects to appear blurry'
          }
        },
        {
          id: 'myopia-description',
          type: 'paragraph',
          content: {
            text: 'In myopia, the eyeball is typically too long or the cornea is too curved. This causes light rays to focus at a point in front of the retina rather than directly on its surface. Imagine a movie projector that\'s positioned too close to the screen, causing the image to be focused in front of the screen instead of on it. Myopia typically develops during childhood and adolescence and may progress until early adulthood.'
          }
        },
        {
          id: 'myopia-progression',
          type: 'paragraph',
          content: {
            text: 'Myopia often begins in childhood or early adolescence and may worsen until early adulthood when eye growth stabilizes. This is why children\'s prescriptions often change more rapidly than adults\'. Many parents notice their child has myopia when they squint to see the TV or struggle to see the board at school.'
          }
        },
        {
          id: 'myopia-real-world-examples',
          type: 'table',
          content: {
            headers: ['Common Situation', 'How Someone with Myopia Experiences It'],
            rows: [
              ['Watching a movie in a theater', 'Can see their popcorn clearly but the movie screen is blurry'],
              ['Driving a car', 'Can see the dashboard clearly but street signs are blurry until very close'],
              ['In a classroom', 'Can read their notes easily but struggles to see what\'s written on the board'],
              ['At a sports event', 'Can see their ticket clearly but can\'t make out player numbers on the field'],
              ['Looking for someone in a crowd', 'Difficulty recognizing faces until people are very close']
            ],
            caption: 'Real-world examples of how myopia affects daily activities'
          }
        },
        {
          id: 'myopia-image',
          type: 'image',
          content: {
            src: refractiveErrorsImages.myopiaDiagram.path,
            alt: 'Detailed diagram of myopia showing uncorrected and corrected vision',
            caption: 'Myopia: Uncorrected (top) vs. Corrected with concave lens (bottom)'
          }
        },
        {
          id: 'myopia-demonstration',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Explaining Myopia to Patients',
            text: 'A simple way to demonstrate myopia to patients is to show them a clear image through a camera that\'s deliberately out of focus for distant objects. Then say, "Your eyes are focusing light like this camera - sharp for near objects but blurry for distant ones. Your glasses will refocus the light so everything appears clear at all distances."'
          }
        },
        {
          id: 'myopia-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'myopia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Blurry vision when looking at distant objects (like road signs, movie screens, or whiteboards)',
              'Clear vision when looking at nearby objects (like books or phones)',
              'Need to squint to see clearly in the distance',
              'Eyestrain or headaches after activities requiring distance vision',
              'Difficulty driving, especially at night (can\'t see road signs until they\'re very close)'
            ],
            ordered: false
          }
        },
        {
          id: 'myopia-real-life',
          type: 'paragraph',
          content: {
            text: 'In daily life, someone with uncorrected myopia might need to sit at the front of a classroom to see the board, hold a television remote close to read the buttons, or struggle to recognize people\'s faces from a distance. These real-world challenges help illustrate why proper correction is so important.'
          }
        },
        {
          id: 'myopia-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'myopia-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Myopia is corrected with minus (concave) lenses that diverge light rays before they enter the eye, allowing them to focus properly on the retina. These lenses effectively "push" the focal point back to where it should be - right on the retina.'
          }
        },
        {
          id: 'myopia-lens-diagram',
          type: 'paragraph',
          content: {
            text: 'A minus lens is thinner in the center and thicker at the edges. When light passes through this lens, the rays spread out slightly (diverge), which counteracts the eye\'s excessive focusing power. The result is that the image now focuses precisely on the retina instead of in front of it.'
          }
        },
        {
          id: 'myopia-correction-options',
          type: 'table',
          content: {
            headers: ['Correction Method', 'How It Works', 'Best For'],
            rows: [
              ['Glasses with minus lenses', 'Diverges light rays before entering the eye', 'Most myopia patients, especially children'],
              ['Contact lenses', 'Works like glasses but sits directly on eye', 'Active lifestyles, sports, cosmetic concerns'],
              ['Orthokeratology (Ortho-K)', 'Specialized contact lenses worn at night that temporarily reshape the cornea', 'Selected patients, may help slow myopia progression in children'],
              ['Refractive surgery (LASIK, PRK)', 'Permanently reshapes the cornea to correct focusing', 'Adults with stable prescriptions']
            ],
            caption: 'Common correction options for myopia'
          }
        },
        {
          id: 'myopia-lens-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Lens Identification Tip',
            text: 'Minus lenses used for myopia correction are thinner in the center and thicker at the edges. When looking through a minus lens, objects appear smaller. If you\'re trying to identify whether a lens is for myopia, hold it above text - if the text appears smaller, it\'s a minus lens.'
          }
        },
        {
          id: 'high-myopia',
          type: 'callout',
          content: {
            type: 'note',
            title: 'High Myopia Considerations',
            text: 'High myopia (typically -6.00D or stronger) requires special attention. These patients benefit from high-index materials to reduce lens thickness and weight. They may also be more susceptible to retinal detachment and other eye conditions, so regular comprehensive eye exams are particularly important.'
          }
        },
        {
          id: 'myopia-prescription-example',
          type: 'paragraph',
          content: {
            text: 'A typical myopia prescription might read: -2.50 DS (diopter sphere). The minus sign indicates the lens power needed to correct myopia. Higher numbers indicate stronger correction (more myopia). For example, -4.00 indicates more myopia than -1.00.'
          }
        },
        {
          id: 'myopia-strength-examples',
          type: 'paragraph',
          content: {
            text: 'To help understand prescription strength, here\'s a general guide:'
          }
        },
        {
          id: 'myopia-strength-list',
          type: 'list',
          content: {
            items: [
              'Mild myopia: -0.25 to -3.00 diopters',
              'Moderate myopia: -3.25 to -6.00 diopters',
              'High myopia: -6.25 diopters or stronger'
            ],
            ordered: false
          }
        },
        {
          id: 'myopia-everyday-examples',
          type: 'paragraph',
          content: {
            text: 'A person with -1.00D myopia might be able to see clearly up to about 1 meter away, while someone with -5.00D might only see clearly up to about 20 centimeters without correction. Of course, these are approximations - actual visual acuity varies among individuals with the same prescription.'
          }
        }
      ]
    },
    {
      id: 'hyperopia-section',
      title: 'Hyperopia (Farsightedness)',
      type: 'main',
      content: [
        {
          id: 'hyperopia-heading',
          type: 'heading',
          content: {
            text: 'Hyperopia (Farsightedness)',
            level: 2
          }
        },
        {
          id: 'hyperopia-definition',
          type: 'definition',
          content: {
            term: 'Hyperopia',
            definition: 'A refractive error where distant objects may appear more clear than nearby objects because light focuses behind the retina rather than directly on it.',
            related: ['myopia', 'presbyopia']
          }
        },
        {
          id: 'hyperopia-beginner-explanation',
          type: 'callout',
          content: {
            type: 'primary',
            title: 'HYPEROPIA SIMPLIFIED',
            text: 'Imagine a camera that can\'t zoom in enough to take close-up photos. The camera works fine for landscape shots but can\'t focus on things that are too close. That\'s what hyperopia feels like. Your eyes can often see distant objects clearly, but have trouble focusing on things that are close to you (like books or smartphones).'
          }
        },
        {
          id: 'hyperopia-what-it-feels-like',
          type: 'paragraph',
          content: {
            text: 'What hyperopia feels like: When you have uncorrected hyperopia, especially if it\'s significant, reading or looking at your phone can cause eyestrain, headaches, or blurry vision. You might find yourself holding books farther away to see the text clearly. Some people describe the feeling as their "eyes getting tired" when doing close work. Children with hyperopia often don\'t complain because their eye\'s focusing system is strong enough to compensate, but they may experience headaches or avoid reading.'
          }
        },
        {
          id: 'hyperopia-simplified-diagram',
          type: 'image',
          content: {
            src: refractiveErrorsImages.hyperopiaSimplified.path,
            alt: 'Simplified diagram showing how light focuses in hyperopia',
            caption: 'Hyperopia: Light focuses behind the retina, causing nearby objects to appear blurry'
          }
        },
        {
          id: 'hyperopia-description',
          type: 'paragraph',
          content: {
            text: 'In hyperopia, the eyeball is usually too short or the cornea is too flat. This causes light rays to focus at a point behind the retina rather than directly on its surface. Many young people with mild hyperopia may not experience symptoms because their crystalline lens can compensate by accommodating (changing shape to increase focusing power).'
          }
        },
        {
          id: 'hyperopia-vs-myopia',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Hyperopia vs. Myopia: The Key Difference',
            text: 'The key difference to remember:\n- In myopia (nearsightedness), close objects are clear but distant objects are blurry\n- In hyperopia (farsightedness), distant objects might be clear (with effort) but close objects are blurry\n\nThink of myopia as having a "zoom stuck on" and hyperopia as having a "zoom that won\'t engage."'
          }
        },
        {
          id: 'hyperopia-real-world-examples',
          type: 'table',
          content: {
            headers: ['Common Situation', 'How Someone with Hyperopia Experiences It'],
            rows: [
              ['Reading a book', 'Text may be blurry, causing eyestrain or headaches after reading for a while'],
              ['Using a smartphone', 'May need to hold the phone farther away than arm\'s length to see it clearly'],
              ['Working on a computer', 'Close screen work causes eye fatigue and headaches, especially after long periods'],
              ['Reading a menu in a restaurant', 'Might struggle to see the text clearly, especially in dim lighting'],
              ['Threading a needle', 'Fine detail work becomes difficult and strains the eyes']
            ],
            caption: 'Real-world examples of how hyperopia affects daily activities'
          }
        },
        {
          id: 'hyperopia-image',
          type: 'image',
          content: {
            src: refractiveErrorsImages.hyperopiaDiagram.path,
            alt: 'Diagram showing light focusing in a hyperopic eye',
            caption: 'In hyperopia, light would focus behind the retina if not corrected'
          }
        },
        {
          id: 'hyperopia-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'hyperopia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Blurry vision, especially for near objects',
              'Eyestrain or discomfort after reading or close work',
              'Headaches after visual tasks',
              'Need to squint for clearer vision',
              'Eye fatigue or burning eyes'
            ],
            ordered: false
          }
        },
        {
          id: 'hyperopia-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'hyperopia-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Hyperopia is corrected with plus (convex) lenses that converge light rays before they enter the eye, allowing them to focus properly on the retina.'
          }
        },
        {
          id: 'hyperopia-lens-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Lens Identification Tip',
            text: 'Plus lenses used for hyperopia correction are thicker in the center and thinner at the edges. When looking through a plus lens, objects appear larger.'
          }
        },
        {
          id: 'hyperopia-prescription-example',
          type: 'paragraph',
          content: {
            text: 'A typical hyperopia prescription might read: +1.75 DS (diopter sphere). The plus sign indicates the lens power needed to correct hyperopia.'
          }
        }
      ]
    },
    {
      id: 'astigmatism-section',
      title: 'Astigmatism',
      type: 'main',
      content: [
        {
          id: 'astigmatism-heading',
          type: 'heading',
          content: {
            text: 'Astigmatism',
            level: 2
          }
        },
        {
          id: 'astigmatism-definition',
          type: 'definition',
          content: {
            term: 'Astigmatism',
            definition: 'A refractive error caused by an irregularly shaped cornea or lens that prevents light from focusing evenly on the retina, resulting in blurred or distorted vision at all distances.',
            related: ['myopia', 'hyperopia']
          }
        },
        {
          id: 'astigmatism-beginner-explanation',
          type: 'callout',
          content: {
            type: 'primary',
            title: 'ASTIGMATISM SIMPLIFIED',
            text: 'Imagine looking through a camera with a warped lens. The picture isn\'t just blurry—it\'s distorted, like a funhouse mirror. That\'s what astigmatism feels like. Your cornea (the clear front window of your eye) is shaped more like the back of a spoon than a perfect dome, causing light to focus unevenly.'
          }
        },
        {
          id: 'astigmatism-what-it-feels-like',
          type: 'paragraph',
          content: {
            text: 'What astigmatism feels like: When you have uncorrected astigmatism, objects might appear stretched, compressed, or distorted. Straight lines might look wavy or tilted. Text may blur in certain directions but be clearer in others. Many people describe feeling eyestrain and headaches because their eyes are constantly trying to compensate for this distortion.'
          }
        },
        {
          id: 'astigmatism-analogy',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Simple Analogy: The Spoon Test',
            text: 'To understand astigmatism, look at your reflection in the back of a metal spoon. See how your face looks stretched or squished? That\'s similar to how astigmatism distorts vision. With a normal cornea (like a round bowl), light focuses evenly. With an astigmatic cornea (like the back of a spoon), light focuses unevenly, creating distortion.'
          }
        },
        {
          id: 'astigmatism-simplified-diagram',
          type: 'image',
          content: {
            src: refractiveErrorsImages.astigmatismSimplified.path,
            alt: 'Simplified diagram showing how light focuses in astigmatism',
            caption: 'Astigmatism: Light focuses at multiple points due to irregular cornea shape'
          }
        },
        {
          id: 'astigmatism-description',
          type: 'paragraph',
          content: {
            text: 'In astigmatism, the cornea or lens has an irregular shape – more like a football than a basketball. This means light rays focus at multiple points rather than a single focal point, causing blurred or distorted vision. Astigmatism often occurs alongside myopia or hyperopia.'
          }
        },
        {
          id: 'astigmatism-real-world-examples',
          type: 'table',
          content: {
            headers: ['Common Situation', 'How Someone with Astigmatism Experiences It'],
            rows: [
              ['Reading text', 'Some letters or lines may appear more blurred than others'],
              ['Looking at a digital clock at night', 'Numbers might have "halos" or appear stretched in one direction'],
              ['Driving at night', 'Headlights and streetlights may have streaks or starbursts'],
              ['Looking at a grid pattern', 'Some lines appear darker, blurrier, or more distorted than others'],
              ['Extended computer work', 'More eye fatigue than normal because eyes constantly try to correct the distortion']
            ],
            caption: 'Real-world examples of how astigmatism affects daily activities'
          }
        },
        {
          id: 'astigmatism-myths',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Common Misconceptions',
            text: '1. Myth: Astigmatism is rare. Truth: It\'s extremely common - most people have at least a small amount of astigmatism.\n2. Myth: You can\'t wear contact lenses with astigmatism. Truth: Special toric contact lenses are designed specifically for astigmatism.\n3. Myth: Astigmatism gets worse if left untreated. Truth: Astigmatism is typically stable, though it can change gradually over time regardless of whether it\'s corrected.'
          }
        },
        {
          id: 'astigmatism-image',
          type: 'image',
          content: {
            src: refractiveErrorsImages.astigmatismDiagram.path,
            alt: 'Diagram showing light focusing in an eye with astigmatism',
            caption: 'In astigmatism, light rays focus at multiple points instead of a single point'
          }
        },
        {
          id: 'astigmatism-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'astigmatism-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Blurred or distorted vision at all distances',
              'Eyestrain or discomfort',
              'Headaches, especially after reading or screen time',
              'Squinting to try to see clearly',
              'Difficulties with night vision'
            ],
            ordered: false
          }
        },
        {
          id: 'astigmatism-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'astigmatism-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Astigmatism is corrected with cylindrical lenses that have different focusing powers in different meridians (directions) to compensate for the irregular corneal shape.'
          }
        },
        {
          id: 'astigmatism-prescription-heading',
          type: 'heading',
          content: {
            text: 'Prescription Notation',
            level: 3
          }
        },
        {
          id: 'astigmatism-prescription-table',
          type: 'table',
          content: {
            headers: ['Component', 'Example', 'Meaning'],
            rows: [
              ['Sphere (SPH)', '-2.00', 'Corrects for myopia/hyperopia'],
              ['Cylinder (CYL)', '-1.25', 'Amount of astigmatism correction'],
              ['Axis', '180', 'Direction of astigmatism (0-180°)']
            ],
            caption: 'Components of an astigmatism prescription'
          }
        },
        {
          id: 'astigmatism-prescription-explanation',
          type: 'paragraph',
          content: {
            text: 'A prescription for astigmatism includes three components: sphere power (for myopia or hyperopia), cylinder power (for astigmatism), and axis (the orientation of the astigmatism, measured in degrees from 0 to 180).'
          }
        }
      ]
    },
    {
      id: 'presbyopia-section',
      title: 'Presbyopia',
      type: 'main',
      content: [
        {
          id: 'presbyopia-heading',
          type: 'heading',
          content: {
            text: 'Presbyopia',
            level: 2
          }
        },
        {
          id: 'presbyopia-definition',
          type: 'definition',
          content: {
            term: 'Presbyopia',
            definition: 'An age-related refractive condition where the eye gradually loses its ability to focus on nearby objects due to hardening of the crystalline lens.',
            related: ['hyperopia', 'accommodation']
          }
        },
        {
          id: 'presbyopia-beginner-explanation',
          type: 'callout',
          content: {
            type: 'primary',
            title: 'PRESBYOPIA SIMPLIFIED',
            text: 'Imagine a camera that used to auto-focus quickly, but now the focus motor is getting slower and stiffer with age. That\'s presbyopia. Your eye\'s natural lens becomes less flexible over time, making it harder to focus on close objects. It\'s not a disease—it\'s a normal part of aging that happens to everyone, usually starting around age 40-45.'
          }
        },
        {
          id: 'presbyopia-what-it-feels-like',
          type: 'paragraph',
          content: {
            text: 'What presbyopia feels like: You may notice you need to hold your phone, books, or menus farther away to see them clearly. Reading small print becomes increasingly difficult, especially in dim light. Your eyes might feel tired after reading or doing close work. Many people first notice presbyopia when they realize their arms "aren\'t long enough" to hold reading material at a comfortable distance.'
          }
        },
        {
          id: 'presbyopia-onset-example',
          type: 'callout',
          content: {
            type: 'note',
            title: 'How People Usually Notice Presbyopia',
            text: 'Common first signs include:\n- Holding your phone farther away to read text messages\n- Needing brighter light to read comfortably\n- Struggling to read menus in dimly lit restaurants\n- Having difficulty threading a needle or doing other detailed close work\n- Experiencing headaches or eye fatigue when reading\n\nMany people first realize they have presbyopia when they find themselves buying "readers" from a drugstore for the first time.'
          }
        },
        {
          id: 'presbyopia-simplified-diagram',
          type: 'image',
          content: {
            src: refractiveErrorsImages.presbyopiaSimplified.path,
            alt: 'Simplified diagram showing how the lens loses flexibility in presbyopia',
            caption: 'Presbyopia: Age-related loss of lens flexibility makes focusing on near objects difficult'
          }
        },
        {
          id: 'presbyopia-description',
          type: 'paragraph',
          content: {
            text: 'Unlike other refractive errors, presbyopia is an inevitable part of aging. As we age, the crystalline lens in our eye becomes less flexible, making it more difficult to focus on near objects. Presbyopia typically becomes noticeable in the early to mid-40s and continues to progress until around age 65.'
          }
        },
        {
          id: 'presbyopia-vs-hyperopia',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Presbyopia vs. Hyperopia: The Difference',
            text: 'Though both conditions affect near vision, they\'re different:\n- Hyperopia (farsightedness) is present from birth and related to eye shape\n- Presbyopia happens to everyone with age and is related to lens flexibility\n- A person can have both conditions simultaneously\n- A young person with hyperopia might see well because their lens can compensate; as they age and develop presbyopia, this compensation becomes more difficult'
          }
        },
        {
          id: 'presbyopia-real-world-examples',
          type: 'table',
          content: {
            headers: ['Common Situation', 'How Someone with Presbyopia Experiences It'],
            rows: [
              ['Reading a text message', 'Holding the phone at arm\'s length or further away to see it clearly'],
              ['Reading a book', 'Needing to hold the book farther away or use brighter light'],
              ['Working on detailed crafts', 'Struggling with fine details that were once easy to see'],
              ['Reading medicine labels', 'Finding small print increasingly difficult to read'],
              ['Using a computer', 'Leaning back farther from the screen to see clearly']
            ],
            caption: 'Real-world examples of how presbyopia affects daily activities'
          }
        },
        {
          id: 'presbyopia-image',
          type: 'image',
          content: {
            src: refractiveErrorsImages.presbyopiaDiagram.path,
            alt: 'Diagram showing how the lens changes with age',
            caption: 'The lens becomes less flexible with age, leading to presbyopia'
          }
        },
        {
          id: 'presbyopia-symptoms-heading',
          type: 'heading',
          content: {
            text: 'Common Symptoms',
            level: 3
          }
        },
        {
          id: 'presbyopia-symptoms-list',
          type: 'list',
          content: {
            items: [
              'Difficulty focusing on small print or near objects',
              'Tendency to hold reading material at arm\'s length',
              'Blurred vision at normal reading distance',
              'Eyestrain or headaches after reading or doing close work',
              'Need for brighter lighting when reading or doing close work'
            ],
            ordered: false
          }
        },
        {
          id: 'presbyopia-correction-heading',
          type: 'heading',
          content: {
            text: 'Correction Methods',
            level: 3
          }
        },
        {
          id: 'presbyopia-correction-paragraph',
          type: 'paragraph',
          content: {
            text: 'Presbyopia is typically corrected with reading glasses, bifocals, progressive lenses, or multifocal contact lenses that provide additional power for near vision.'
          }
        },
        {
          id: 'presbyopia-add-power',
          type: 'paragraph',
          content: {
            text: 'The additional power needed for near vision is called the "Add" or "Addition" and is written as a plus value (e.g., +1.50 Add). This value increases as presbyopia progresses with age.'
          }
        },
        {
          id: 'presbyopia-progression-table',
          type: 'table',
          content: {
            headers: ['Age Range', 'Typical Add Power'],
            rows: [
              ['40-44', '+0.75 to +1.00'],
              ['45-49', '+1.00 to +1.50'],
              ['50-54', '+1.50 to +2.00'],
              ['55+', '+2.00 to +2.50']
            ],
            caption: 'Typical Add power progression with age'
          }
        },
        {
          id: 'presbyopia-callout',
          type: 'callout',
          content: {
            type: 'important',
            title: 'Patient Counseling',
            text: 'When explaining presbyopia to patients, emphasize that it\'s a normal part of aging that affects everyone. This helps patients accept the need for reading glasses or multifocal lenses.'
          }
        }
      ]
    },
    {
      id: 'prescription-section',
      title: 'Understanding Prescriptions',
      type: 'advanced',
      content: [
        {
          id: 'prescription-heading',
          type: 'heading',
          content: {
            text: 'How to Interpret Eyeglass Prescriptions',
            level: 2
          }
        },
        {
          id: 'prescription-intro',
          type: 'paragraph',
          content: {
            text: 'As an optician, one of your most important skills will be correctly interpreting eyeglass prescriptions. Prescriptions contain specific information about the lenses needed to correct a patient\'s refractive errors.'
          }
        },
        {
          id: 'prescription-beginner-explanation',
          type: 'callout',
          content: {
            type: 'primary',
            title: 'PRESCRIPTIONS SIMPLIFIED',
            text: 'Think of an eyeglass prescription like a recipe for your lenses. Just as a recipe has specific ingredients and measurements, a prescription has specific powers and measurements to create lenses that correct your unique vision needs. Each number and symbol tells the optician exactly what "ingredients" to use to make your perfect glasses.'
          }
        },
        {
          id: 'prescription-visual-aid',
          type: 'image',
          content: {
            src: refractiveErrorsImages.prescriptionAnatomy.path,
            alt: 'Diagram showing the components of an eyeglass prescription',
            caption: 'Anatomy of an eyeglass prescription showing sphere, cylinder, and axis values'
          }
        },
        {
          id: 'prescription-components-table',
          type: 'table',
          content: {
            headers: ['Abbreviation', 'Term', 'Meaning'],
            rows: [
              ['OD', 'Oculus Dexter', 'Right eye'],
              ['OS', 'Oculus Sinister', 'Left eye'],
              ['OU', 'Oculus Uterque', 'Both eyes'],
              ['SPH/DS', 'Sphere/Diopter Sphere', 'Corrects nearsightedness (-) or farsightedness (+)'],
              ['CYL/DC', 'Cylinder/Diopter Cylinder', 'Corrects astigmatism'],
              ['AXIS', 'Axis', 'Orientation of cylinder correction (0-180°)'],
              ['ADD', 'Addition', 'Extra power for near vision (presbyopia)'],
              ['PD', 'Pupillary Distance', 'Distance between pupils in millimeters']
            ],
            caption: 'Common prescription abbreviations and meanings'
          }
        },
        {
          id: 'prescription-plain-english',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Prescription Components in Plain English',
            text: '• SPH (Sphere): Think of this as the "main power" of your lens. Minus (-) numbers correct nearsightedness, plus (+) numbers correct farsightedness. Higher numbers mean stronger correction.\n\n• CYL (Cylinder): This corrects astigmatism. If this is blank or "0.00," you don\'t have significant astigmatism.\n\n• AXIS: This is like the "direction" of your astigmatism, measured in degrees like a protractor (0-180°). It tells the lab where to position the cylinder power.\n\n• ADD: This only appears for people over 40 who need reading help. It\'s always a plus (+) number and adds power to the bottom part of bifocal or progressive lenses.\n\n• PD: The distance between your pupils in millimeters. This ensures the center of each lens aligns with your pupils.'
          }
        },
        {
          id: 'prescription-example-heading',
          type: 'heading',
          content: {
            text: 'Sample Prescription Analysis',
            level: 3
          }
        },
        {
          id: 'prescription-example-callout',
          type: 'callout',
          content: {
            type: 'example',
            title: 'Sample Prescription',
            text: 'OD: -2.50 -1.25 x 180 Add +2.00\nOS: -2.25 -0.75 x 165 Add +2.00\nPD: 62mm'
          }
        },
        {
          id: 'prescription-breakdown-table',
          type: 'table',
          content: {
            headers: ['Component', 'Value', 'What It Means in Plain English'],
            rows: [
              ['Right Eye (OD) Sphere', '-2.50', 'Moderate nearsightedness in the right eye'],
              ['Right Eye (OD) Cylinder', '-1.25', 'Mild-to-moderate astigmatism in the right eye'],
              ['Right Eye (OD) Axis', '180', 'The astigmatism is oriented horizontally'],
              ['Left Eye (OS) Sphere', '-2.25', 'Moderate nearsightedness in the left eye'],
              ['Left Eye (OS) Cylinder', '-0.75', 'Mild astigmatism in the left eye'],
              ['Left Eye (OS) Axis', '165', 'The astigmatism is oriented slightly diagonally'],
              ['Add Power', '+2.00', 'Needs significant help with reading (typical for someone around age 50)'],
              ['PD', '62mm', 'The centers of the pupils are 62mm apart']
            ],
            caption: 'Breaking down a prescription into plain English'
          }
        },
        {
          id: 'prescription-analysis-paragraph',
          type: 'paragraph',
          content: {
            text: 'Overall interpretation: This person is moderately nearsighted with some astigmatism in both eyes, and also needs help with reading due to presbyopia. They would likely benefit from progressive lenses that provide clear vision at all distances.'
          }
        },
        {
          id: 'prescription-power-visualization',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Visualizing Prescription Strength',
            text: 'To understand prescription strength, consider these comparisons:\n\n• -1.00: Mild myopia (can see clearly about 1 meter away without glasses)\n• -3.00: Moderate myopia (can see clearly about 33cm away without glasses)\n• -6.00: Strong myopia (can see clearly only about 17cm away without glasses)\n\n• +1.00: Mild hyperopia or typical reading glasses power for age 40-45\n• +2.00: Moderate hyperopia or typical reading glasses power for age 50+\n• +3.00: Strong hyperopia or typical reading glasses power for age 60+'
          }
        },
        {
          id: 'prescription-tips-heading',
          type: 'heading',
          content: {
            text: 'Practical Tips for Prescription Interpretation',
            level: 3
          }
        },
        {
          id: 'prescription-tips-list',
          type: 'list',
          content: {
            items: [
              'Always double-check which notation is being used (plus or minus cylinder)',
              'Verify that the axis values are between 0-180 degrees',
              'Remember that a higher numeric value (ignoring the sign) means a stronger prescription',
              'When transpositioning prescriptions, ensure the sphere and cylinder powers are adjusted correctly and the axis rotates by 90°',
              'Always calculate the spherical equivalent when needed for lens ordering'
            ],
            ordered: false
          }
        }
      ]
    },
    {
      id: 'clinical-applications-section',
      title: 'Clinical Applications',
      type: 'clinical',
      content: [
        {
          id: 'clinical-heading',
          type: 'heading',
          content: {
            text: 'From Theory to Practice: Applying Knowledge of Refractive Errors',
            level: 2
          }
        },
        {
          id: 'lens-selection-heading',
          type: 'heading',
          content: {
            text: 'Lens Selection Based on Refractive Error',
            level: 3
          }
        },
        {
          id: 'lens-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'Understanding refractive errors helps in recommending appropriate lens materials and designs:'
          }
        },
        {
          id: 'lens-selection-table',
          type: 'table',
          content: {
            headers: ['Refractive Error', 'Lens Considerations'],
            rows: [
              ['High Myopia', 'High-index materials to reduce thickness; aspheric designs to reduce edge thickness'],
              ['High Hyperopia', 'High-index materials; aspheric designs to reduce center thickness and weight'],
              ['Astigmatism', 'Stable frame materials; proper PD and fitting height crucial for axis alignment'],
              ['Presbyopia', 'Progressive, bifocal, or office lenses based on lifestyle needs']
            ],
            caption: 'Lens considerations for different refractive errors'
          }
        },
        {
          id: 'frame-selection-heading',
          type: 'heading',
          content: {
            text: 'Frame Selection Considerations',
            level: 3
          }
        },
        {
          id: 'frame-selection-paragraph',
          type: 'paragraph',
          content: {
            text: 'Different refractive errors benefit from specific frame styles and materials:'
          }
        },
        {
          id: 'frame-selection-list',
          type: 'list',
          content: {
            items: [
              'High Myopia: Smaller frames help minimize edge thickness and weight',
              'High Hyperopia: Frames with sufficient depth for proper optical centering; careful positioning to minimize apparent lens thickness',
              'Strong Astigmatism: Stable frame materials that maintain adjustment to keep axes properly aligned',
              'Presbyopia: Frame dimensions that accommodate the progressive corridor or bifocal segment height'
            ],
            ordered: false
          }
        },
        {
          id: 'patient-education-heading',
          type: 'heading',
          content: {
            text: 'Patient Education',
            level: 3
          }
        },
        {
          id: 'patient-education-paragraph',
          type: 'paragraph',
          content: {
            text: 'Being able to explain refractive errors in simple terms is essential for patient education and compliance. Use visual aids, simple analogies, and everyday examples to help patients understand their vision condition.'
          }
        },
        {
          id: 'patient-education-callout',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Communication Tip',
            text: 'When explaining prescriptions, avoid too much technical terminology. Instead of saying "You have -2.50 diopters of myopia," you might say, "Your prescription shows you\'re nearsighted, which means you see things up close clearly, but distant objects are blurry."'
          }
        }
      ]
    },
    {
      id: 'interactive-section',
      title: 'Interactive Learning',
      type: 'interactive',
      content: [
        {
          id: 'interactive-quiz',
          type: 'interactive',
          content: {
            type: 'quiz',
            data: {
              questions: [
                {
                  question: 'Which refractive error is corrected with minus (concave) lenses?',
                  options: ['Hyperopia', 'Myopia', 'Presbyopia', 'Emmetropia'],
                  correctAnswer: 1,
                  explanation: 'Myopia (nearsightedness) is corrected with minus lenses that diverge light rays, allowing them to focus properly on the retina.'
                },
                {
                  question: 'A patient with a prescription of +2.50 DS most likely has:',
                  options: ['Myopia', 'Hyperopia', 'Astigmatism only', 'Presbyopia only'],
                  correctAnswer: 1,
                  explanation: 'The plus power (+2.50) indicates hyperopia (farsightedness).'
                },
                {
                  question: 'What does the "Axis" value in a prescription represent?',
                  options: ['The power of the lens', 'The orientation of astigmatism correction', 'The amount of near vision power', 'The center thickness of the lens'],
                  correctAnswer: 1,
                  explanation: 'The Axis (measured in degrees from 0-180) indicates the orientation of astigmatism correction.'
                }
              ]
            }
          }
        },
        {
          id: 'interactive-simulation',
          type: 'interactive',
          content: {
            type: 'simulation',
            data: {
              simulationType: 'refractiveErrors',
              description: 'This simulation allows you to see how different refractive errors affect vision. Use the controls to adjust the type and severity of refractive error.'
            }
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
          id: 'beginner-recap',
          type: 'callout',
          content: {
            type: 'primary',
            title: 'REFRACTIVE ERRORS IN SIMPLE TERMS',
            text: 'This module covered the four main refractive errors. Here\'s what to remember:\n\n• Myopia (Nearsightedness): Can see NEAR objects clearly, but FAR objects are blurry. Like a camera zoomed in too much. Corrected with MINUS (-) lenses.\n\n• Hyperopia (Farsightedness): Can see FAR objects better than NEAR objects. Like a camera that can\'t zoom in enough. Corrected with PLUS (+) lenses.\n\n• Astigmatism: Blurry or distorted vision at ALL distances. Like looking through a warped camera lens. Corrected with cylindrical lenses.\n\n• Presbyopia: Age-related difficulty seeing up CLOSE (usually after age 40). Like a camera with a stiff focus motor. Corrected with reading glasses or multifocal lenses.'
          }
        },
        {
          id: 'visual-summary',
          type: 'image',
          content: {
            src: refractiveErrorsImages.refractiveErrorsSummary.path,
            alt: 'Summary chart comparing the four main refractive errors',
            caption: 'Summary of refractive errors, their causes, symptoms, and corrections'
          }
        },
        {
          id: 'prescription-recap',
          type: 'callout',
          content: {
            type: 'tip',
            title: 'Prescription Quick Guide',
            text: '• Minus (-) numbers: Correct myopia (nearsightedness)\n• Plus (+) numbers: Correct hyperopia (farsightedness) or add reading power for presbyopia\n• Cylinder & Axis: Correct astigmatism\n• OD: Right eye, OS: Left eye\n• Higher numbers (regardless of sign) mean stronger correction'
          }
        },
        {
          id: 'summary-list',
          type: 'list',
          content: {
            items: [
              'Refractive errors occur when the eye cannot focus light properly on the retina, resulting in blurred vision',
              'Myopia (nearsightedness) is corrected with minus lenses and occurs when light focuses in front of the retina',
              'Hyperopia (farsightedness) is corrected with plus lenses and occurs when light would focus behind the retina',
              'Astigmatism is caused by an irregularly shaped cornea or lens and is corrected with cylindrical lenses',
              'Presbyopia is an age-related condition affecting near vision and is corrected with reading glasses or multifocal lenses',
              'Understanding prescriptions requires knowledge of abbreviations (OD, OS, SPH, CYL, AXIS, ADD, PD) and their meanings',
              'Proper lens and frame selection should take into account both the patient\'s prescription and lifestyle needs'
            ],
            ordered: false
          }
        },
        {
          id: 'real-world-application',
          type: 'callout',
          content: {
            type: 'note',
            title: 'Applying Your Knowledge',
            text: 'Now that you understand refractive errors, you can:\n\n• Better explain vision conditions to patients in simple terms\n• Help patients understand why they need certain lens types\n• Recognize symptoms that might indicate uncorrected refractive errors\n• Better interpret prescription notations and understand their significance\n• Recommend appropriate lens options based on specific refractive needs'
          }
        },
        {
          id: 'next-steps-paragraph',
          type: 'paragraph',
          content: {
            text: 'With a solid understanding of refractive errors, you are now better equipped to interpret prescriptions, recommend appropriate eyewear solutions, and explain vision conditions to patients. Continue your study with lens materials and designs to further enhance your knowledge as an optician.'
          }
        }
      ]
    }
  ],
  summary: 'Refractive errors are vision conditions where the eye fails to properly focus light on the retina, resulting in blurred vision. The main types include myopia (nearsightedness), hyperopia (farsightedness), astigmatism (irregular corneal curvature), and presbyopia (age-related near vision difficulty). These conditions occur due to variations in eyeball length, corneal curvature, lens shape, or aging processes. They can be effectively corrected with appropriate prescriptive lenses, with different lens designs addressing each specific error. Understanding refractive errors and their optical corrections is fundamental for opticians to recommend appropriate eyewear solutions based on patients\' prescriptions and visual needs.',
  references: [
    'American Academy of Ophthalmology. (2022). Clinical Optics.',
    'Brooks, C. W., & Borish, I. M. (2007). System for Ophthalmic Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Jalie, M. (2008). Ophthalmic Lenses and Dispensing (3rd ed.). Butterworth-Heinemann.',
    'Moore, B. D. (2009). Eye Care for Infants and Young Children. Butterworth-Heinemann.'
  ],
  practiceQuestions: [
    {
      question: 'A prescription of -3.00D indicates which refractive error?',
      options: [
        'Hyperopia',
        'Myopia',
        'Astigmatism',
        'Presbyopia'
      ],
      correctAnswer: 1,
      explanation: 'A negative power prescription (like -3.00D) corrects myopia (nearsightedness). The minus lens diverges light rays to compensate for the eye\'s excessive focusing power or elongated shape, moving the focal point back to the retina.'
    },
    {
      question: 'Which refractive error is characterized by difficulty focusing on near objects, typically beginning around age 40-45?',
      options: [
        'Myopia',
        'Hyperopia',
        'Astigmatism',
        'Presbyopia'
      ],
      correctAnswer: 3,
      explanation: 'Presbyopia is the age-related loss of accommodative ability that makes near vision difficult. It typically becomes noticeable around age 40-45 as the crystalline lens loses elasticity, requiring reading glasses or multifocal lenses.'
    },
    {
      question: 'In a prescription reading "OD: -2.00 -1.50 x 180", what does "-1.50 x 180" represent?',
      options: [
        'Sphere power and base curve',
        'Cylinder power and axis for astigmatism',
        'Add power and segment height',
        'Prism power and direction'
      ],
      correctAnswer: 1,
      explanation: 'The notation "-1.50 x 180" indicates cylinder power (-1.50D) and axis (180 degrees) for astigmatism correction. The cylinder power corrects the difference between the two principal meridians, while the axis indicates the orientation of the cylindrical correction.'
    },
    {
      question: 'A hyperopic eye is typically:',
      options: [
        'Too long for its optical power',
        'Too short for its optical power',
        'Perfectly shaped but with excessive focusing power',
        'Irregularly curved at the cornea'
      ],
      correctAnswer: 1,
      explanation: 'A hyperopic (farsighted) eye is typically too short for its optical power, causing light to focus behind the retina when viewing near objects. This requires additional focusing power from the eye\'s accommodative system or from plus-powered corrective lenses.'
    },
    {
      question: 'Which lens type would be prescribed for a patient with astigmatism?',
      options: [
        'Spherical lens',
        'Cylindrical or sphero-cylindrical lens',
        'Prism lens',
        'Base curve lens'
      ],
      correctAnswer: 1,
      explanation: 'Astigmatism is corrected with cylindrical or sphero-cylindrical lenses. These lenses have different powers in different meridians to compensate for the uneven curvature of the cornea or lens that causes astigmatism.'
    },
    {
      question: 'What does a prescription with "Add +2.00" indicate?',
      options: [
        'The patient has +2.00D of hyperopia',
        'The patient needs additional +2.00D power for near vision',
        'The lens should be made 2.00mm thicker',
        'The patient has 2.00D of astigmatism'
      ],
      correctAnswer: 1,
      explanation: 'An "Add +2.00" indicates that the patient needs an additional +2.00D of power for near vision, typically due to presbyopia. This power is added to the distance prescription in the lower portion of multifocal lenses or in separate reading glasses.'
    },
    {
      question: 'With uncorrected myopia, at which distance would vision typically be clearest?',
      options: [
        'Distance vision (20 feet/6 meters)',
        'Intermediate vision (arm\'s length)',
        'Near vision (reading distance)',
        'All distances are equally blurry'
      ],
      correctAnswer: 2,
      explanation: 'With uncorrected myopia, near vision is typically clearer than distance vision. This is because the eye focuses light in front of the retina, and objects must be brought closer to move their focal point back onto the retina.'
    },
    {
      question: 'What is the relationship between diopter power and focal length?',
      options: [
        'Diopter = Focal length in meters',
        'Diopter = Focal length in centimeters',
        'Diopter = 1 / focal length in meters',
        'Diopter = 100 / focal length in centimeters'
      ],
      correctAnswer: 2,
      explanation: 'The diopter (D) is the inverse of the focal length in meters: D = 1/f(m). For example, a +2.00D lens has a focal length of 0.50 meters, while a -4.00D lens has a focal length of -0.25 meters.'
    },
    {
      question: 'Which refractive error is caused by uneven curvature of the cornea or lens?',
      options: [
        'Myopia',
        'Hyperopia',
        'Astigmatism',
        'Presbyopia'
      ],
      correctAnswer: 2,
      explanation: 'Astigmatism is caused by uneven curvature of the cornea (corneal astigmatism) or lens (lenticular astigmatism). This creates two focal points rather than one, resulting in blurred or distorted vision at all distances.'
    },
    {
      question: 'A patient whose distance prescription is +1.50D and requires a +2.00D add would need what power for reading?',
      options: [
        '+1.50D',
        '+2.00D',
        '+3.50D',
        '-0.50D'
      ],
      correctAnswer: 2,
      explanation: 'The total reading power would be +3.50D, calculated by adding the distance prescription (+1.50D) and the add power (+2.00D). This total power provides the proper correction for near vision tasks.'
    }
  ]
}; 