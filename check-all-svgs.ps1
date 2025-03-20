# PowerShell script to check all SVG files for duplicate attributes
# This is a more generic script that will look for any duplicate attributes in SVG files

Write-Host "Starting SVG attribute check script..." -ForegroundColor Green

# Get all SVG files in the project
$svgFiles = Get-ChildItem -Path ".\" -Include "*.svg" -Recurse

Write-Host "Found $($svgFiles.Count) SVG files to check" -ForegroundColor Cyan

foreach ($file in $svgFiles) {
    Write-Host "Checking $($file.FullName)..." -ForegroundColor Yellow
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Try to parse as XML to check for errors
    try {
        $xml = [xml]$content
        Write-Host "  SVG is valid XML" -ForegroundColor Green
    } 
    catch {
        $errorMsg = $_.Exception.Message
        Write-Host "  XML parsing error: $errorMsg" -ForegroundColor Red
        
        # Check if it's a duplicate attribute error
        if ($errorMsg -match "'([^']+)' is a duplicate attribute name") {
            $duplicateAttr = $matches[1]
            Write-Host "  Found duplicate attribute: $duplicateAttr" -ForegroundColor Red
            
            # Create a regex pattern to find the duplicate attribute
            $pattern = "(\s+$duplicateAttr)=`"[^`"]*`"\s+\1=`"[^`"]*`""
            if ($content -match $pattern) {
                Write-Host "  Found duplicate pattern: $($matches[0])" -ForegroundColor Red
                
                # Keep only the first occurrence
                $duplicatePattern = "$duplicateAttr=`"[^`"]*`"\s+$duplicateAttr=`"[^`"]*`""
                $replacementPattern = "$duplicateAttr=`"[^`"]*`""
                
                # Extract first match
                $firstMatch = [regex]::Match($content, "$duplicateAttr=`"([^`"]*)`"").Groups[1].Value
                $replacement = "$duplicateAttr=`"$firstMatch`""
                
                # Replace the duplicate
                $newContent = [regex]::Replace($content, $duplicatePattern, $replacement)
                
                # Save the fixed content
                if ($newContent -ne $content) {
                    $newContent | Set-Content -Path $file.FullName -NoNewline
                    Write-Host "  Fixed duplicate attribute in $($file.Name)" -ForegroundColor Green
                }
            }
        }
    }
}

Write-Host "SVG attribute check script completed!" -ForegroundColor Green 