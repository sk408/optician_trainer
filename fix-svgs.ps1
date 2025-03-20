# PowerShell script to fix SVG files

# Function to fix electromagnetic-spectrum.svg
function Fix-ElectromagneticSpectrum {
    $file = "public/assets/images/study/electromagnetic-spectrum.svg"
    $content = Get-Content -Path $file -Raw
    
    # Remove duplicate y1 attributes from linearGradient elements
    $content = $content -replace 'x1="0%" y1="0%" x2="100%" y1="0%"', 'x1="0%" x2="100%"'
    
    # Save the fixed content
    $content | Set-Content -Path $file -NoNewline
    Write-Host "Fixed electromagnetic-spectrum.svg"
}

# Function to fix refraction.svg
function Fix-Refraction {
    $file = "public/assets/images/study/refraction.svg"
    $content = Get-Content -Path $file -Raw
    
    # Remove extra whitespace and line breaks
    $content = $content -replace '\s+', ' '
    $content = $content -replace '>\s+<', '><'
    
    # Save the fixed content
    $content | Set-Content -Path $file -NoNewline
    Write-Host "Fixed refraction.svg"
}

# Run the fixes
Fix-ElectromagneticSpectrum
Fix-Refraction 