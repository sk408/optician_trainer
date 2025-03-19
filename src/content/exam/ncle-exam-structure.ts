import { ExamType } from '../../interfaces/ExamQuestions';

/**
 * Comprehensive NCLE (National Contact Lens Examiners) exam structure
 * based on the current content outline
 */
export const ncleExamStructure: ExamType = {
  id: 'ncle',
  title: 'NCLE Certification Exam',
  description: 'Comprehensive exam preparation for the National Contact Lens Examiners certification',
  categories: [
    {
      id: 'ocular-anatomy',
      title: 'Ocular Anatomy and Physiology',
      description: 'Structure and function of the eye as related to contact lens wear',
      subcategories: [
        {
          id: 'anterior-segment',
          title: 'Anterior Segment Anatomy',
          description: 'Structures of the front portion of the eye relevant to contact lens fitting'
        },
        {
          id: 'tear-film',
          title: 'Tear Film and Ocular Surface',
          description: 'Composition and function of the tear film and ocular surface'
        },
        {
          id: 'corneal-physiology',
          title: 'Corneal Physiology',
          description: 'Corneal structure, metabolism, and physiological responses'
        }
      ]
    },
    {
      id: 'pre-fitting',
      title: 'Pre-Fitting Evaluation',
      description: 'Patient assessment and preparation before contact lens fitting',
      subcategories: [
        {
          id: 'patient-history',
          title: 'Patient History and Selection',
          description: 'Gathering relevant patient information and determining candidacy'
        },
        {
          id: 'external-examination',
          title: 'External Examination',
          description: 'Evaluation of external ocular structures and adnexa'
        },
        {
          id: 'corneal-topography',
          title: 'Corneal Topography and Keratometry',
          description: 'Measuring and analyzing corneal curvature and shape'
        }
      ]
    },
    {
      id: 'cl-design',
      title: 'Contact Lens Design',
      description: 'Types, parameters, and design features of contact lenses',
      subcategories: [
        {
          id: 'soft-lens-design',
          title: 'Soft Lens Design and Parameters',
          description: 'Design features and parameters of hydrogel and silicone hydrogel lenses'
        },
        {
          id: 'rgp-lens-design',
          title: 'Rigid Gas Permeable Lens Design',
          description: 'Design features and parameters of RGP lenses'
        },
        {
          id: 'specialty-lens-design',
          title: 'Specialty Lens Designs',
          description: 'Designs for special applications like orthokeratology, scleral, and hybrid lenses'
        }
      ]
    },
    {
      id: 'cl-fitting',
      title: 'Contact Lens Fitting and Evaluation',
      description: 'Procedures for fitting contact lenses and evaluating the fit',
      subcategories: [
        {
          id: 'soft-cl-fitting',
          title: 'Soft Contact Lens Fitting',
          description: 'Techniques and procedures for fitting soft contact lenses'
        },
        {
          id: 'rgp-cl-fitting',
          title: 'RGP Contact Lens Fitting',
          description: 'Techniques and procedures for fitting rigid gas permeable lenses'
        },
        {
          id: 'fit-evaluation',
          title: 'Fitting Evaluation and Assessment',
          description: 'Methods to evaluate and assess proper contact lens fit'
        }
      ]
    },
    {
      id: 'cl-materials',
      title: 'Contact Lens Materials',
      description: 'Properties and characteristics of contact lens materials',
      subcategories: [
        {
          id: 'soft-cl-materials',
          title: 'Soft Contact Lens Materials',
          description: 'Properties of hydrogel and silicone hydrogel materials'
        },
        {
          id: 'rgp-cl-materials',
          title: 'RGP Contact Lens Materials',
          description: 'Properties of rigid gas permeable materials'
        },
        {
          id: 'material-performance',
          title: 'Material Performance and Selection',
          description: 'Selecting appropriate materials based on patient needs'
        }
      ]
    },
    {
      id: 'cl-care',
      title: 'Contact Lens Care and Maintenance',
      description: 'Products and procedures for contact lens care',
      subcategories: [
        {
          id: 'care-systems',
          title: 'Contact Lens Care Systems',
          description: 'Types of contact lens solutions and care products'
        },
        {
          id: 'cl-hygiene',
          title: 'Contact Lens Hygiene',
          description: 'Proper handling, cleaning, and disinfection procedures'
        },
        {
          id: 'case-care',
          title: 'Lens Case Care and Replacement',
          description: 'Proper care and maintenance of contact lens cases'
        }
      ]
    },
    {
      id: 'cl-complications',
      title: 'Contact Lens Complications',
      description: 'Identification and management of contact lens-related issues',
      subcategories: [
        {
          id: 'corneal-complications',
          title: 'Corneal Complications',
          description: 'Issues affecting the cornea due to contact lens wear'
        },
        {
          id: 'allergic-reactions',
          title: 'Allergic and Toxic Reactions',
          description: 'Allergic and toxic responses to contact lens materials and solutions'
        },
        {
          id: 'cl-discomfort',
          title: 'Contact Lens Discomfort',
          description: 'Causes and management of discomfort during contact lens wear'
        }
      ]
    },
    {
      id: 'patient-education',
      title: 'Patient Education and Follow-up',
      description: 'Instructing patients on contact lens use and follow-up care',
      subcategories: [
        {
          id: 'insertion-removal',
          title: 'Insertion and Removal Training',
          description: 'Teaching patients proper insertion and removal techniques'
        },
        {
          id: 'wear-schedule',
          title: 'Wear Schedule and Replacement',
          description: 'Instructions on wearing time and replacement schedules'
        },
        {
          id: 'follow-up-care',
          title: 'Follow-up Schedule and Evaluations',
          description: 'Appropriate follow-up protocols and assessments'
        }
      ]
    }
  ]
}; 