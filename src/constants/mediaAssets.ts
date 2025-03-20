// Media Assets for Optician Trainer
// This file centralizes all media assets used in the application for easier management

// Helper function to get the correct asset path based on environment
// In development, Vite serves from root, but in production it uses the base URL
function getAssetPath(path: string): string {
  // Check if we're in development mode
  const isDev = import.meta.env.DEV;
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // In development, use the path as is (with leading slash)
  if (isDev) {
    return `/optician_trainer/${cleanPath}`;
  } 
  // In production, always prefix with /optician_trainer/
  else {
    return `/optician_trainer/${cleanPath}`;
  }
}

export interface MediaAsset {
  id: string;
  path: string;
  description: string;
  type: 'image' | 'video' | 'link';
  category: 'study' | 'tools' | 'dispensing' | 'general' | 'icon';
}

// Study Images - Refractive Errors
export const refractiveErrorsImages = {
  intro: { 
    id: 'refractive-errors-intro',
    path: getAssetPath('assets/images/study/refractive-errors-intro.svg'),
    description: 'Introduction to refractive errors',
    type: 'image' as const,
    category: 'study' as const
  },
  myopiaSimplified: { 
    id: 'myopia-simplified',
    path: getAssetPath('assets/images/study/myopia-simplified.svg'),
    description: 'Simplified myopia diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  myopiaDiagram: { 
    id: 'myopia-diagram',
    path: getAssetPath('assets/images/study/myopia-diagram.svg'),
    description: 'Detailed myopia diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  hyperopiaSimplified: { 
    id: 'hyperopia-simplified',
    path: getAssetPath('assets/images/study/hyperopia-simplified.svg'),
    description: 'Simplified hyperopia diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  hyperopiaDiagram: { 
    id: 'hyperopia-diagram',
    path: getAssetPath('assets/images/study/hyperopia-diagram.svg'),
    description: 'Detailed hyperopia diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  astigmatismSimplified: { 
    id: 'astigmatism-simplified',
    path: getAssetPath('assets/images/study/astigmatism-simplified.svg'),
    description: 'Simplified astigmatism diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  astigmatismDiagram: { 
    id: 'astigmatism-diagram',
    path: getAssetPath('assets/images/study/astigmatism-diagram.svg'),
    description: 'Detailed astigmatism diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  presbyopiaSimplified: { 
    id: 'presbyopia-simplified',
    path: getAssetPath('assets/images/study/presbyopia-simplified.svg'),
    description: 'Simplified presbyopia diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  presbyopiaDiagram: { 
    id: 'presbyopia-diagram',
    path: getAssetPath('assets/images/study/presbyopia-diagram.svg'),
    description: 'Detailed presbyopia diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  prescriptionAnatomy: { 
    id: 'prescription-anatomy',
    path: getAssetPath('assets/images/study/prescription-anatomy.svg'),
    description: 'Anatomy of a prescription',
    type: 'image' as const,
    category: 'study' as const
  },
  refractiveErrorsSummary: { 
    id: 'refractive-errors-summary',
    path: getAssetPath('assets/images/study/refractive-errors-summary.svg'),
    description: 'Summary of refractive errors',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Prism
export const prismImages = {
  diagram: { 
    id: 'prism-diagram',
    path: getAssetPath('assets/images/study/prism-diagram.svg'),
    description: 'Prism diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  lightPath: { 
    id: 'prism-light-path',
    path: getAssetPath('assets/images/study/prism-light-path.svg'),
    description: 'Light path through prism',
    type: 'image' as const,
    category: 'study' as const
  },
  diopter: { 
    id: 'prism-diopter',
    path: getAssetPath('assets/images/study/prism-diopter.svg'),
    description: 'Prism diopter explanation',
    type: 'image' as const,
    category: 'study' as const
  },
  directions: { 
    id: 'prism-directions',
    path: getAssetPath('assets/images/study/prism-directions.svg'),
    description: 'Prism directions',
    type: 'image' as const,
    category: 'study' as const
  },
  fresnelPrism: { 
    id: 'fresnel-prism',
    path: getAssetPath('assets/images/study/fresnel-prism.svg'),
    description: 'Fresnel prism',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - PD Measurement
export const pdMeasurementImages = {
  diagram: { 
    id: 'pd-diagram',
    path: getAssetPath('assets/images/study/pd-diagram.svg'),
    description: 'Pupillary distance diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  pupilometer: { 
    id: 'pupilometer',
    path: getAssetPath('assets/images/study/pupilometer.svg'),
    description: 'Pupilometer device',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Low Vision Aids
export const lowVisionImages = {
  magnifiers: { 
    id: 'low-vision-magnifiers',
    path: getAssetPath('assets/images/study/low-vision-magnifiers.svg'),
    description: 'Low vision magnifiers',
    type: 'image' as const,
    category: 'study' as const
  },
  biopticTelescope: { 
    id: 'bioptic-telescope',
    path: getAssetPath('assets/images/study/bioptic-telescope.svg'),
    description: 'Bioptic telescope',
    type: 'image' as const,
    category: 'study' as const
  },
  desktopCctv: { 
    id: 'desktop-cctv',
    path: getAssetPath('assets/images/study/desktop-cctv.svg'),
    description: 'Desktop CCTV',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Lens Types
export const lensImages = {
  diagram: { 
    id: 'lens-diagram',
    path: getAssetPath('assets/images/study/lens-diagram.svg'),
    description: 'Lens diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  shapesComparison: { 
    id: 'lens-shapes-comparison',
    path: getAssetPath('assets/images/study/lens-shapes-comparison.svg'),
    description: 'Comparison of lens shapes',
    type: 'image' as const,
    category: 'study' as const
  },
  convexLens: { 
    id: 'convex-lens',
    path: getAssetPath('assets/images/study/convex-lens.svg'),
    description: 'Convex lens',
    type: 'image' as const,
    category: 'study' as const
  },
  concaveLens: { 
    id: 'concave-lens',
    path: getAssetPath('assets/images/study/concave-lens.svg'),
    description: 'Concave lens',
    type: 'image' as const,
    category: 'study' as const
  },
  lensForms: { 
    id: 'lens-forms',
    path: getAssetPath('assets/images/study/lens-forms.svg'),
    description: 'Different lens forms',
    type: 'image' as const,
    category: 'study' as const
  },
  sphericalLensTypes: { 
    id: 'spherical-lens-types',
    path: getAssetPath('assets/images/study/spherical-lens-types.svg'),
    description: 'Types of spherical lenses',
    type: 'image' as const,
    category: 'study' as const
  },
  sphericalRx: { 
    id: 'spherical-rx',
    path: getAssetPath('assets/images/study/spherical-rx.svg'),
    description: 'Spherical prescription',
    type: 'image' as const,
    category: 'study' as const
  },
  cylindricalLens: { 
    id: 'cylindrical-lens',
    path: getAssetPath('assets/images/study/cylindrical-lens.svg'),
    description: 'Cylindrical lens',
    type: 'image' as const,
    category: 'study' as const
  },
  axisDiagram: { 
    id: 'axis-diagram',
    path: getAssetPath('assets/images/study/axis-diagram.svg'),
    description: 'Axis diagram',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Lens Coatings
export const lensCoatingImages = {
  arCoatingComparison: { 
    id: 'ar-coating-comparison',
    path: getAssetPath('assets/images/study/ar-coating-comparison.svg'),
    description: 'AR coating comparison',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Lens Basics
export const lensBasicsImages = {
  basicLensTypes: { 
    id: 'basic-lens-types',
    path: getAssetPath('assets/images/study/basic-lens-types.svg'),
    description: 'Basic lens types',
    type: 'image' as const,
    category: 'study' as const
  },
  pupillaryDistanceMeasurement: { 
    id: 'pupillary-distance-measurement',
    path: getAssetPath('assets/images/study/pupillary-distance-measurement.svg'),
    description: 'Pupillary distance measurement',
    type: 'image' as const,
    category: 'study' as const
  },
  progressiveLensDesign: { 
    id: 'progressive-lens-design',
    path: getAssetPath('assets/images/study/progressive-lens-design.svg'),
    description: 'Progressive lens design',
    type: 'image' as const,
    category: 'study' as const
  },
  samplePrescription: { 
    id: 'sample-prescription',
    path: getAssetPath('assets/images/study/sample-prescription.svg'),
    description: 'Sample prescription',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Laboratory Procedures
export const laboratoryImages = {
  lensFabricationFlowchart: { 
    id: 'lens-fabrication-flowchart',
    path: getAssetPath('assets/images/study/lens-fabrication-flowchart.svg'),
    description: 'Lens fabrication flowchart',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Frame Basics
export const frameBasicsImages = {
  frameAnatomyDiagram: { 
    id: 'frame-anatomy-diagram',
    path: getAssetPath('assets/images/study/frame-anatomy-diagram.svg'),
    description: 'Frame anatomy diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  frameMeasurementsDiagram: { 
    id: 'frame-measurements-diagram',
    path: getAssetPath('assets/images/study/frame-measurements-diagram.svg'),
    description: 'Frame measurements diagram',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Eye Anatomy
export const eyeAnatomyImages = {
  eyeAnatomyDiagram: { 
    id: 'eye-anatomy-diagram',
    path: getAssetPath('assets/images/study/eye-anatomy-diagram.svg'),
    description: 'Eye anatomy diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  visualPathwayDiagram: { 
    id: 'visual-pathway-diagram',
    path: getAssetPath('assets/images/study/visual-pathway-diagram.svg'),
    description: 'Visual pathway diagram',
    type: 'image' as const,
    category: 'study' as const
  },
  refractiveErrorsDiagram: { 
    id: 'refractive-errors-diagram',
    path: getAssetPath('assets/images/study/refractive-errors-diagram.svg'),
    description: 'Refractive errors diagram',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Eye Anatomy CL
export const eyeAnatomyClImages = {
  corneaLayers: { 
    id: 'cornea-layers',
    path: getAssetPath('assets/images/study/cornea-layers.svg'),
    description: 'Cornea layers',
    type: 'image' as const,
    category: 'study' as const
  },
  cornealTopographyMap: { 
    id: 'corneal-topography-map',
    path: getAssetPath('assets/images/study/corneal-topography-map.svg'),
    description: 'Corneal topography map',
    type: 'image' as const,
    category: 'study' as const
  },
  tearFilmLayers: { 
    id: 'tear-film-layers',
    path: getAssetPath('assets/images/study/tear-film-layers.svg'),
    description: 'Tear film layers',
    type: 'image' as const,
    category: 'study' as const
  },
  eyelidAnatomy: { 
    id: 'eyelid-anatomy',
    path: getAssetPath('assets/images/study/eyelid-anatomy.svg'),
    description: 'Eyelid anatomy',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Contact Lens Overview
export const contactLensOverviewImages = {
  clMaterialComparison: { 
    id: 'cl-material-comparison',
    path: getAssetPath('assets/images/study/cl-material-comparison.svg'),
    description: 'Contact lens material comparison',
    type: 'image' as const,
    category: 'study' as const
  },
  contactLensParameters: { 
    id: 'contact-lens-parameters',
    path: getAssetPath('assets/images/study/contact-lens-parameters.svg'),
    description: 'Contact lens parameters',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Contact Lens Fitting
export const contactLensFittingImages = {
  softLensFit: { 
    id: 'soft-lens-fit',
    path: getAssetPath('assets/images/study/soft-lens-fit.svg'),
    description: 'Soft lens fit',
    type: 'image' as const,
    category: 'study' as const
  },
  fluoresceinPatterns: { 
    id: 'fluorescein-patterns',
    path: getAssetPath('assets/images/study/fluorescein-patterns.svg'),
    description: 'Fluorescein patterns',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Contact Lens Complications
export const contactLensComplicationsImages = {
  cornealNeovascularization: { 
    id: 'corneal-neovascularization',
    path: getAssetPath('assets/images/study/corneal-neovascularization.svg'),
    description: 'Corneal neovascularization',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Contact Lens Design Materials
export const contactLensDesignMaterialsImages = {
  contactLensCategories: { 
    id: 'contact-lens-categories',
    path: getAssetPath('assets/images/study/contact-lens-categories.svg'),
    description: 'Contact lens categories',
    type: 'image' as const,
    category: 'study' as const
  },
  rgpDesignZones: { 
    id: 'rgp-design-zones',
    path: getAssetPath('assets/images/study/rgp-design-zones.svg'),
    description: 'RGP design zones',
    type: 'image' as const,
    category: 'study' as const
  },
  scleralLensVault: { 
    id: 'scleral-lens-vault',
    path: getAssetPath('assets/images/study/scleral-lens-vault.svg'),
    description: 'Scleral lens vault',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Basic Optics
export const basicOpticsImages = {
  electromagneticSpectrum: { 
    id: 'electromagnetic-spectrum',
    path: getAssetPath('assets/images/study/electromagnetic-spectrum.svg'),
    description: 'Electromagnetic spectrum',
    type: 'image' as const,
    category: 'study' as const
  },
  reflectionTypes: { 
    id: 'reflection-types',
    path: getAssetPath('assets/images/study/reflection-types.svg'),
    description: 'Types of reflection',
    type: 'image' as const,
    category: 'study' as const
  },
  refraction: { 
    id: 'refraction',
    path: getAssetPath('assets/images/study/refraction.svg'),
    description: 'Refraction',
    type: 'image' as const,
    category: 'study' as const
  },
  snellsLaw: { 
    id: 'snells-law',
    path: getAssetPath('assets/images/study/snells-law.svg'),
    description: "Snell's law",
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Advanced Frame Fitting
export const advancedFrameFittingImages = {
  faceShapes: { 
    id: 'face-shapes',
    path: getAssetPath('assets/images/study/face-shapes.svg'),
    description: 'Face shapes',
    type: 'image' as const,
    category: 'study' as const
  },
  frameMeasurements: { 
    id: 'frame-measurements',
    path: getAssetPath('assets/images/study/frame-measurements.svg'),
    description: 'Frame measurements',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Contact Lens Care
export const contactLensCareImages = {
  lensCaseTypes: { 
    id: 'lens-case-types',
    path: getAssetPath('assets/images/study/lens-case-types.svg'),
    description: 'Lens case types',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Lens Designs
export const lensDesignsImages = {
  progressiveLensDesign: { 
    id: 'progressive-lens-design',
    path: getAssetPath('assets/images/study/progressive-lens-design.svg'),
    description: 'Progressive lens design',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Sports Vision
export const sportsVisionImages = {
  sportsEyewearStrap: { 
    id: 'sports-eyewear-strap',
    path: getAssetPath('assets/images/study/sports-eyewear-strap.svg'),
    description: 'Sports eyewear strap',
    type: 'image' as const,
    category: 'study' as const
  },
  rxInsertEyewear: { 
    id: 'rx-insert-eyewear',
    path: getAssetPath('assets/images/study/rx-insert-eyewear.svg'),
    description: 'RX insert eyewear',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Study Images - Special Populations
export const specialPopulationsImages = {
  progressiveLensDesign: { 
    id: 'progressive-lens-design',
    path: getAssetPath('assets/images/study/progressive-lens-design.svg'),
    description: 'Progressive lens design',
    type: 'image' as const,
    category: 'study' as const
  },
  sportTintsComparison: { 
    id: 'sport-tints-comparison',
    path: getAssetPath('assets/images/study/sport-tints-comparison.svg'),
    description: 'Sport tints comparison',
    type: 'image' as const,
    category: 'study' as const
  },
  pediatricFrameFitting: { 
    id: 'pediatric-frame-fitting',
    path: getAssetPath('assets/images/study/pediatric-frame-fitting.svg'),
    description: 'Pediatric frame fitting',
    type: 'image' as const,
    category: 'study' as const
  }
};

// Tools Images
export const toolsImages = {
  pupillometer: { 
    id: 'pupillometer-tool',
    path: getAssetPath('assets/images/tools/pupillometer.svg'),
    description: 'Pupillometer tool',
    type: 'image' as const,
    category: 'tools' as const
  },
  adjustmentPliers: { 
    id: 'adjustment-pliers',
    path: getAssetPath('assets/images/tools/adjustment-pliers.svg'),
    description: 'Adjustment pliers',
    type: 'image' as const,
    category: 'tools' as const
  },
  frameHeater: { 
    id: 'frame-heater',
    path: getAssetPath('assets/images/tools/frame-heater.svg'),
    description: 'Frame heater',
    type: 'image' as const,
    category: 'tools' as const
  },
  lensometer: { 
    id: 'lensometer',
    path: getAssetPath('assets/images/tools/lensometer.svg'),
    description: 'Lensometer',
    type: 'image' as const,
    category: 'tools' as const
  },
  frameWarmer: { 
    id: 'frame-warmer',
    path: getAssetPath('assets/images/tools/frame-warmer.svg'),
    description: 'Frame warmer',
    type: 'image' as const,
    category: 'tools' as const
  },
  nosePadPliers: { 
    id: 'nose-pad-pliers',
    path: getAssetPath('assets/images/tools/nose-pad-pliers.svg'),
    description: 'Nose pad pliers',
    type: 'image' as const,
    category: 'tools' as const
  },
  anglingPliers: { 
    id: 'angling-pliers',
    path: getAssetPath('assets/images/tools/angling-pliers.svg'),
    description: 'Angling pliers',
    type: 'image' as const,
    category: 'tools' as const
  },
  templeFormingPliers: { 
    id: 'temple-forming-pliers',
    path: getAssetPath('assets/images/tools/temple-forming-pliers.svg'),
    description: 'Temple forming pliers',
    type: 'image' as const,
    category: 'tools' as const
  }
};

// Dispensing Images
export const dispensingImages = {
  frameMeasurementsDiagram: { 
    id: 'frame-measurements-diagram-dispensing',
    path: getAssetPath('assets/images/dispensing/frame-measurements-diagram.svg'),
    description: 'Frame measurements diagram (dispensing)',
    type: 'image' as const,
    category: 'dispensing' as const
  },
  segHeightMeasurement: { 
    id: 'seg-height-measurement',
    path: getAssetPath('assets/images/dispensing/seg-height-measurement.svg'),
    description: 'Seg height measurement',
    type: 'image' as const,
    category: 'dispensing' as const
  }
};

// Other Images
export const otherImages = {
  visibleSpectrum: { 
    id: 'visible-spectrum',
    path: getAssetPath('/images/visible-spectrum.svg'),
    description: 'Visible spectrum',
    type: 'image' as const,
    category: 'general' as const
  }
};

// Icons and App Images
export const appImages = {
  favicon: { 
    id: 'favicon',
    path: getAssetPath('/vite.svg'),
    description: 'Application favicon',
    type: 'image' as const,
    category: 'icon' as const
  },
  appleTouchIcon: { 
    id: 'apple-touch-icon',
    path: getAssetPath('/apple-touch-icon.svg'),
    description: 'Apple touch icon',
    type: 'image' as const,
    category: 'icon' as const
  },
  reactLogo: { 
    id: 'react-logo',
    path: getAssetPath('/src/assets/react.svg'),
    description: 'React logo',
    type: 'image' as const,
    category: 'icon' as const
  },
  viteLogo: { 
    id: 'vite-logo',
    path: getAssetPath('/public/vite.svg'),
    description: 'Vite logo',
    type: 'image' as const,
    category: 'icon' as const
  }
};

// External Links
export const externalLinks = {
  aboNcleOrg: { 
    id: 'abo-ncle-org',
    path: 'https://www.abo-ncle.org/',
    description: 'American Board of Opticianry & National Contact Lens Examiners',
    type: 'link' as const,
    category: 'general' as const
  }
};

// All media assets combined for easy import
export const mediaAssets = {
  refractiveErrorsImages,
  prismImages,
  pdMeasurementImages,
  lowVisionImages,
  lensImages,
  lensCoatingImages,
  lensBasicsImages,
  laboratoryImages,
  frameBasicsImages,
  eyeAnatomyImages,
  eyeAnatomyClImages,
  contactLensOverviewImages,
  contactLensFittingImages,
  contactLensComplicationsImages,
  contactLensDesignMaterialsImages,
  basicOpticsImages,
  advancedFrameFittingImages,
  contactLensCareImages,
  lensDesignsImages,
  sportsVisionImages,
  specialPopulationsImages,
  toolsImages,
  dispensingImages,
  otherImages,
  appImages,
  externalLinks
};

export default mediaAssets; 