import { ExamType } from '../../interfaces/ExamQuestions';

/**
 * Comprehensive ABO (American Board of Opticianry) exam structure
 * based on the current content outline
 */
export const aboExamStructure: ExamType = {
  id: 'abo',
  title: 'ABO Certification Exam',
  description: 'Comprehensive exam preparation for the American Board of Opticianry certification',
  categories: [
    {
      id: 'ophthalmic-optics',
      title: 'Ophthalmic Optics and Principles',
      description: 'Properties of light, principles of optics, and how they relate to vision correction',
      subcategories: [
        {
          id: 'basic-optics',
          title: 'Basic Optics and Light Properties',
          description: 'Fundamental principles of light behavior and optical concepts'
        },
        {
          id: 'lens-power',
          title: 'Lens Power and Materials',
          description: 'Lens power calculations, properties, and material characteristics'
        },
        {
          id: 'prism',
          title: 'Prism and Prismatic Effects',
          description: 'Principles of prism, induced prismatic effects, and applications'
        }
      ]
    },
    {
      id: 'prescription-analysis',
      title: 'Prescription Analysis and Interpretation',
      description: 'Reading, interpreting, and analyzing ophthalmic prescriptions',
      subcategories: [
        {
          id: 'rx-format',
          title: 'Prescription Format and Terminology',
          description: 'Understanding prescription notation, format, and terminology'
        },
        {
          id: 'lens-design',
          title: 'Lens Design Selection',
          description: 'Selecting appropriate lens designs based on prescription requirements'
        },
        {
          id: 'transposition',
          title: 'Transposition and Conversion',
          description: 'Converting prescriptions between formats and calculating equivalencies'
        }
      ]
    },
    {
      id: 'dispensing-procedures',
      title: 'Dispensing Procedures',
      description: 'Fitting, adjusting, and dispensing eyewear to patients',
      subcategories: [
        {
          id: 'frame-selection',
          title: 'Frame Selection and Fitting',
          description: 'Proper selection and fitting of frames for different facial features'
        },
        {
          id: 'measurements',
          title: 'Patient Measurements',
          description: 'Taking and recording accurate patient measurements for eyewear'
        },
        {
          id: 'adjustments',
          title: 'Frame Adjustments and Repairs',
          description: 'Procedures for adjusting and repairing eyewear frames'
        }
      ]
    },
    {
      id: 'lens-products',
      title: 'Lens Products',
      description: 'Types, materials, and applications of ophthalmic lenses',
      subcategories: [
        {
          id: 'lens-materials',
          title: 'Lens Materials and Characteristics',
          description: 'Properties of different lens materials and their applications'
        },
        {
          id: 'lens-treatments',
          title: 'Lens Treatments and Coatings',
          description: 'Coating options, treatments, and specialty lens enhancements'
        },
        {
          id: 'multifocal-lenses',
          title: 'Multifocal and Progressive Lenses',
          description: 'Design, fitting, and troubleshooting of multifocal lenses'
        }
      ]
    },
    {
      id: 'frame-products',
      title: 'Frame Products',
      description: 'Types, materials, and applications of eyeglass frames',
      subcategories: [
        {
          id: 'frame-materials',
          title: 'Frame Materials and Components',
          description: 'Different frame materials, parts, and their properties'
        },
        {
          id: 'frame-styles',
          title: 'Frame Styles and Selection',
          description: 'Frame designs and appropriate selection criteria'
        },
        {
          id: 'specialty-frames',
          title: 'Specialty and Safety Frames',
          description: 'Specialty frame designs including safety and sports eyewear'
        }
      ]
    },
    {
      id: 'laboratory-procedures',
      title: 'Laboratory Procedures',
      description: 'Processes and techniques used in optical laboratories',
      subcategories: [
        {
          id: 'lens-fabrication',
          title: 'Lens Fabrication and Processing',
          description: 'Techniques for lens fabrication, edging, and mounting'
        },
        {
          id: 'quality-control',
          title: 'Quality Control and Verification',
          description: 'Inspection and verification of finished eyewear'
        },
        {
          id: 'tools-equipment',
          title: 'Tools and Equipment',
          description: 'Use and maintenance of optical tools and instruments'
        }
      ]
    },
    {
      id: 'regulations',
      title: 'Regulations and Standards',
      description: 'Industry regulations, standards, and compliance requirements',
      subcategories: [
        {
          id: 'industry-standards',
          title: 'Industry Standards and Tolerances',
          description: 'ANSI standards, FDA regulations, and industry tolerances'
        },
        {
          id: 'safety-requirements',
          title: 'Safety and Compliance Requirements',
          description: 'Safety standards and regulatory compliance for eyewear'
        },
        {
          id: 'record-keeping',
          title: 'Record Keeping and Prescription Requirements',
          description: 'Proper documentation and prescription record maintenance'
        }
      ]
    }
  ]
}; 