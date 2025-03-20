# PowerShell script to generate placeholder SVG files for all references in mediaAssets.ts

# Function to create a placeholder SVG
function Create-PlaceholderSVG {
    param (
        [string]$filePath,
        [string]$title
    )
    
    # Create directory if it doesn't exist
    $directory = Split-Path -Path $filePath -Parent
    if (-not (Test-Path -Path $directory)) {
        New-Item -Path $directory -ItemType Directory -Force | Out-Null
        Write-Host "Created directory: $directory" -ForegroundColor Cyan
    }
    
    # Skip if file already exists
    if (Test-Path -Path $filePath) {
        Write-Host "File already exists: $filePath" -ForegroundColor Yellow
        return
    }
    
    # Create a basic placeholder SVG
    $svgContent = @"
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
    <title>$title</title>
    <rect width="300" height="200" fill="#f0f0f0" />
    <text x="150" y="100" font-family="Arial" font-size="16" text-anchor="middle">$title</text>
    <text x="150" y="130" font-family="Arial" font-size="12" text-anchor="middle">Placeholder SVG</text>
</svg>
"@
    
    # Save the SVG file
    $svgContent | Set-Content -Path $filePath -NoNewline
    Write-Host "Created placeholder SVG: $filePath" -ForegroundColor Green
}

# Create directories for different asset categories
$directories = @(
    "public/assets/images/study",
    "public/assets/images/tools",
    "public/assets/images/dispensing",
    "public/images"
)

foreach ($dir in $directories) {
    if (-not (Test-Path -Path $dir)) {
        New-Item -Path $dir -ItemType Directory -Force | Out-Null
        Write-Host "Created directory: $dir" -ForegroundColor Cyan
    }
}

# Study Images - Refractive Errors (checking for missing files)
$refractiveErrorsImages = @(
    @{Path="public/assets/images/study/refractive-errors-intro.svg"; Title="Introduction to Refractive Errors"},
    @{Path="public/assets/images/study/myopia-simplified.svg"; Title="Simplified Myopia Diagram"},
    @{Path="public/assets/images/study/myopia-diagram.svg"; Title="Detailed Myopia Diagram"},
    @{Path="public/assets/images/study/hyperopia-simplified.svg"; Title="Simplified Hyperopia Diagram"},
    @{Path="public/assets/images/study/hyperopia-diagram.svg"; Title="Detailed Hyperopia Diagram"},
    @{Path="public/assets/images/study/astigmatism-simplified.svg"; Title="Simplified Astigmatism Diagram"},
    @{Path="public/assets/images/study/astigmatism-diagram.svg"; Title="Detailed Astigmatism Diagram"},
    @{Path="public/assets/images/study/presbyopia-simplified.svg"; Title="Simplified Presbyopia Diagram"},
    @{Path="public/assets/images/study/presbyopia-diagram.svg"; Title="Detailed Presbyopia Diagram"},
    @{Path="public/assets/images/study/prescription-anatomy.svg"; Title="Anatomy of a Prescription"},
    @{Path="public/assets/images/study/refractive-errors-summary.svg"; Title="Summary of Refractive Errors"}
)

# Study Images - Prism
$prismImages = @(
    @{Path="public/assets/images/study/prism-diagram.svg"; Title="Prism Diagram"},
    @{Path="public/assets/images/study/prism-light-path.svg"; Title="Light Path Through Prism"},
    @{Path="public/assets/images/study/prism-diopter.svg"; Title="Prism Diopter Explanation"},
    @{Path="public/assets/images/study/prism-directions.svg"; Title="Prism Directions"},
    @{Path="public/assets/images/study/fresnel-prism.svg"; Title="Fresnel Prism"}
)

# Study Images - PD Measurement
$pdMeasurementImages = @(
    @{Path="public/assets/images/study/pd-diagram.svg"; Title="Pupillary Distance Diagram"},
    @{Path="public/assets/images/study/pupilometer.svg"; Title="Pupilometer Device"}
)

# Study Images - Low Vision Aids
$lowVisionImages = @(
    @{Path="public/assets/images/study/low-vision-magnifiers.svg"; Title="Low Vision Magnifiers"},
    @{Path="public/assets/images/study/bioptic-telescope.svg"; Title="Bioptic Telescope"},
    @{Path="public/assets/images/study/desktop-cctv.svg"; Title="Desktop CCTV"}
)

# Study Images - Lens Types
$lensImages = @(
    @{Path="public/assets/images/study/lens-diagram.svg"; Title="Lens Diagram"},
    @{Path="public/assets/images/study/lens-shapes-comparison.svg"; Title="Comparison of Lens Shapes"},
    @{Path="public/assets/images/study/convex-lens.svg"; Title="Convex Lens"},
    @{Path="public/assets/images/study/concave-lens.svg"; Title="Concave Lens"},
    @{Path="public/assets/images/study/lens-forms.svg"; Title="Different Lens Forms"},
    @{Path="public/assets/images/study/spherical-lens-types.svg"; Title="Types of Spherical Lenses"},
    @{Path="public/assets/images/study/spherical-rx.svg"; Title="Spherical Prescription"},
    @{Path="public/assets/images/study/cylindrical-lens.svg"; Title="Cylindrical Lens"},
    @{Path="public/assets/images/study/axis-diagram.svg"; Title="Axis Diagram"}
)

# Study Images - Lens Coatings
$lensCoatingImages = @(
    @{Path="public/assets/images/study/ar-coating-comparison.svg"; Title="AR Coating Comparison"}
)

# Study Images - Lens Basics
$lensBasicsImages = @(
    @{Path="public/assets/images/study/basic-lens-types.svg"; Title="Basic Lens Types"},
    @{Path="public/assets/images/study/pupillary-distance-measurement.svg"; Title="Pupillary Distance Measurement"},
    @{Path="public/assets/images/study/progressive-lens-design.svg"; Title="Progressive Lens Design"},
    @{Path="public/assets/images/study/sample-prescription.svg"; Title="Sample Prescription"}
)

# Study Images - Laboratory Procedures
$laboratoryImages = @(
    @{Path="public/assets/images/study/lens-fabrication-flowchart.svg"; Title="Lens Fabrication Flowchart"}
)

# Study Images - Frame Basics
$frameBasicsImages = @(
    @{Path="public/assets/images/study/frame-anatomy-diagram.svg"; Title="Frame Anatomy Diagram"},
    @{Path="public/assets/images/study/frame-measurements-diagram.svg"; Title="Frame Measurements Diagram"}
)

# Study Images - Eye Anatomy
$eyeAnatomyImages = @(
    @{Path="public/assets/images/study/eye-anatomy-diagram.svg"; Title="Eye Anatomy Diagram"},
    @{Path="public/assets/images/study/visual-pathway-diagram.svg"; Title="Visual Pathway Diagram"},
    @{Path="public/assets/images/study/refractive-errors-diagram.svg"; Title="Refractive Errors Diagram"}
)

# Study Images - Eye Anatomy CL
$eyeAnatomyClImages = @(
    @{Path="public/assets/images/study/cornea-layers.svg"; Title="Cornea Layers"},
    @{Path="public/assets/images/study/corneal-topography-map.svg"; Title="Corneal Topography Map"},
    @{Path="public/assets/images/study/tear-film-layers.svg"; Title="Tear Film Layers"},
    @{Path="public/assets/images/study/eyelid-anatomy.svg"; Title="Eyelid Anatomy"}
)

# Study Images - Contact Lens Overview
$contactLensOverviewImages = @(
    @{Path="public/assets/images/study/cl-material-comparison.svg"; Title="Contact Lens Material Comparison"},
    @{Path="public/assets/images/study/contact-lens-parameters.svg"; Title="Contact Lens Parameters"}
)

# Study Images - Contact Lens Fitting
$contactLensFittingImages = @(
    @{Path="public/assets/images/study/soft-lens-fit.svg"; Title="Soft Lens Fit"},
    @{Path="public/assets/images/study/fluorescein-patterns.svg"; Title="Fluorescein Patterns"}
)

# Study Images - Contact Lens Complications
$contactLensComplicationsImages = @(
    @{Path="public/assets/images/study/corneal-neovascularization.svg"; Title="Corneal Neovascularization"}
)

# Study Images - Contact Lens Design Materials
$contactLensDesignMaterialsImages = @(
    @{Path="public/assets/images/study/contact-lens-categories.svg"; Title="Contact Lens Categories"},
    @{Path="public/assets/images/study/rgp-design-zones.svg"; Title="RGP Design Zones"},
    @{Path="public/assets/images/study/scleral-lens-vault.svg"; Title="Scleral Lens Vault"}
)

# Study Images - Basic Optics
$basicOpticsImages = @(
    @{Path="public/assets/images/study/electromagnetic-spectrum.svg"; Title="Electromagnetic Spectrum"},
    @{Path="public/assets/images/study/reflection-types.svg"; Title="Types of Reflection"},
    @{Path="public/assets/images/study/refraction.svg"; Title="Refraction"},
    @{Path="public/assets/images/study/snells-law.svg"; Title="Snell's Law"}
)

# Study Images - Advanced Frame Fitting
$advancedFrameFittingImages = @(
    @{Path="public/assets/images/study/face-shapes.svg"; Title="Face Shapes"},
    @{Path="public/assets/images/study/frame-measurements.svg"; Title="Frame Measurements"}
)

# Study Images - Contact Lens Care
$contactLensCareImages = @(
    @{Path="public/assets/images/study/lens-case-types.svg"; Title="Lens Case Types"}
)

# Study Images - Sports Vision
$sportsVisionImages = @(
    @{Path="public/assets/images/study/sports-eyewear-strap.svg"; Title="Sports Eyewear Strap"},
    @{Path="public/assets/images/study/rx-insert-eyewear.svg"; Title="RX Insert Eyewear"}
)

# Study Images - Special Populations
$specialPopulationsImages = @(
    @{Path="public/assets/images/study/sport-tints-comparison.svg"; Title="Sport Tints Comparison"},
    @{Path="public/assets/images/study/pediatric-frame-fitting.svg"; Title="Pediatric Frame Fitting"}
)

# Tools Images
$toolsImages = @(
    @{Path="public/assets/images/tools/pupillometer.svg"; Title="Pupillometer Tool"},
    @{Path="public/assets/images/tools/adjustment-pliers.svg"; Title="Adjustment Pliers"},
    @{Path="public/assets/images/tools/frame-heater.svg"; Title="Frame Heater"},
    @{Path="public/assets/images/tools/lensometer.svg"; Title="Lensometer"},
    @{Path="public/assets/images/tools/frame-warmer.svg"; Title="Frame Warmer"},
    @{Path="public/assets/images/tools/nose-pad-pliers.svg"; Title="Nose Pad Pliers"},
    @{Path="public/assets/images/tools/angling-pliers.svg"; Title="Angling Pliers"},
    @{Path="public/assets/images/tools/temple-forming-pliers.svg"; Title="Temple Forming Pliers"}
)

# Dispensing Images
$dispensingImages = @(
    @{Path="public/assets/images/dispensing/frame-measurements-diagram.svg"; Title="Frame Measurements Diagram (Dispensing)"},
    @{Path="public/assets/images/dispensing/seg-height-measurement.svg"; Title="Seg Height Measurement"}
)

# Other Images
$otherImages = @(
    @{Path="public/images/visible-spectrum.svg"; Title="Visible Spectrum"}
)

# App Images
$appImages = @(
    @{Path="public/apple-touch-icon.svg"; Title="Apple Touch Icon"}
)

# Combine all image arrays
$allImages = @() + 
    $refractiveErrorsImages + 
    $prismImages + 
    $pdMeasurementImages + 
    $lowVisionImages + 
    $lensImages + 
    $lensCoatingImages + 
    $lensBasicsImages + 
    $laboratoryImages + 
    $frameBasicsImages + 
    $eyeAnatomyImages + 
    $eyeAnatomyClImages + 
    $contactLensOverviewImages + 
    $contactLensFittingImages + 
    $contactLensComplicationsImages + 
    $contactLensDesignMaterialsImages + 
    $basicOpticsImages + 
    $advancedFrameFittingImages + 
    $contactLensCareImages + 
    $sportsVisionImages + 
    $specialPopulationsImages + 
    $toolsImages + 
    $dispensingImages + 
    $otherImages + 
    $appImages

# Create placeholder SVGs for all images
$createdCount = 0
foreach ($image in $allImages) {
    Create-PlaceholderSVG -filePath $image.Path -title $image.Title
    $createdCount++
}

Write-Host "Created $createdCount placeholder SVG files" -ForegroundColor Green
Write-Host "Script completed!" -ForegroundColor Green 