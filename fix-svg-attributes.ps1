# PowerShell script to find and fix duplicate SVG attributes
# Specifically targeting duplicate y1 attributes mentioned in the error

Write-Host "Starting SVG attribute fix script..." -ForegroundColor Green

$svgFiles = Get-ChildItem -Path ".\public\assets\images\study\*.svg" -Recurse

foreach ($file in $svgFiles) {
    Write-Host "Checking $($file.Name)..." -ForegroundColor Yellow
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Create a regex pattern to find duplicate attributes like y1="value" y1="value"
    $pattern = '(\s+[a-zA-Z0-9]+)="[^"]*"\s+\1="[^"]*"'
    
    if ($content -match $pattern) {
        Write-Host "  Found duplicate attributes in $($file.Name)" -ForegroundColor Red
        
        # Extract the matches
        $matches = [regex]::Matches($content, $pattern)
        
        foreach ($match in $matches) {
            $fullMatch = $match.Value
            Write-Host "  Found duplicate: $fullMatch" -ForegroundColor Red
            
            # Get the attribute name
            $attrMatch = [regex]::Match($fullMatch, '(\s+[a-zA-Z0-9]+)=')
            $attrName = $attrMatch.Groups[1].Value.Trim()
            
            # Create pattern to match the second occurrence
            $duplicatePattern = "$attrName=`"[^`"]*`"\s+$attrName=`"[^`"]*`""
            
            # Find both attribute values
            $valueMatches = [regex]::Matches($fullMatch, "$attrName=`"([^`"]*)`"")
            $firstValue = $valueMatches[0].Groups[1].Value
            $secondValue = $valueMatches[1].Groups[1].Value
            
            Write-Host "    Attribute: $attrName, First Value: $firstValue, Second Value: $secondValue" -ForegroundColor Yellow
            
            # Keep only the first occurrence
            $replacement = "$attrName=`"$firstValue`""
            $newContent = $content -replace $duplicatePattern, $replacement
            
            if ($newContent -ne $content) {
                # Save the fixed content
                $newContent | Set-Content -Path $file.FullName -NoNewline
                $content = $newContent
                Write-Host "    Fixed duplicate in $($file.Name)" -ForegroundColor Green
            }
        }
    } else {
        Write-Host "  No duplicate attributes found in $($file.Name)" -ForegroundColor Green
    }
}

Write-Host "SVG attribute fix script completed!" -ForegroundColor Green 