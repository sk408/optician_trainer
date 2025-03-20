# PowerShell script to find and fix duplicate y1 attributes in SVG files
# This specifically targets the error: "Attribute y1 redefined"

Write-Host "Starting SVG y1 attribute fix script..." -ForegroundColor Green

$svgFiles = Get-ChildItem -Path ".\public\assets\images\study\*.svg" -Recurse

foreach ($file in $svgFiles) {
    Write-Host "Checking $($file.Name)..." -ForegroundColor Yellow
    
    # Read the file content
    $content = Get-Content -Path $file.FullName -Raw
    
    # Create a regex pattern to find duplicate y1 attributes
    $pattern = '(\s+y1)="[^"]*"\s+\1="[^"]*"'
    
    if ($content -match $pattern) {
        Write-Host "  Found duplicate y1 attributes in $($file.Name)" -ForegroundColor Red
        
        # Extract the matches
        $matches = [regex]::Matches($content, $pattern)
        
        foreach ($match in $matches) {
            $fullMatch = $match.Value
            Write-Host "  Found duplicate: $fullMatch" -ForegroundColor Red
            
            # Find both attribute values
            $valueMatches = [regex]::Matches($fullMatch, 'y1="([^"]*)"')
            $firstValue = $valueMatches[0].Groups[1].Value
            $secondValue = $valueMatches[1].Groups[1].Value
            
            Write-Host "    First Value: $firstValue, Second Value: $secondValue" -ForegroundColor Yellow
            
            # Keep only the first occurrence
            $duplicatePattern = 'y1="[^"]*"\s+y1="[^"]*"'
            $replacement = "y1=`"$firstValue`""
            $newContent = $content -replace $duplicatePattern, $replacement
            
            if ($newContent -ne $content) {
                # Save the fixed content
                $newContent | Set-Content -Path $file.FullName -NoNewline
                $content = $newContent
                Write-Host "    Fixed duplicate y1 in $($file.Name)" -ForegroundColor Green
            }
        }
    } else {
        Write-Host "  No duplicate y1 attributes found in $($file.Name)" -ForegroundColor Green
    }
}

# Also check for line elements with the attribute defined twice but in different format
$svgFiles | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    
    # Check for <line x1=".." y1=".." x2=".." y1=".." ...>
    if ($content -match '<line[^>]*y1="[^"]*"[^>]*y1="[^"]*"[^>]*>') {
        Write-Host "Found line element with duplicate y1 in $($_.Name)" -ForegroundColor Red
        
        # Use an XML parser for more reliable fixing
        try {
            $xml = [xml]$content
            $lineElements = $xml.SelectNodes("//line[contains(@*, 'y1')]")
            $modified = $false
            
            foreach ($line in $lineElements) {
                $y1Count = 0
                foreach ($attr in $line.Attributes) {
                    if ($attr.Name -eq "y1") {
                        $y1Count++
                        if ($y1Count > 1) {
                            $line.RemoveAttribute("y1")
                            $modified = $true
                            Write-Host "  Removed duplicate y1 attribute in line element" -ForegroundColor Yellow
                            break
                        }
                    }
                }
            }
            
            if ($modified) {
                $xml.Save($_.FullName)
                Write-Host "  Saved fixed XML" -ForegroundColor Green
            }
        } 
        catch {
            Write-Host "  Error processing XML: $_" -ForegroundColor Red
            
            # Fallback to regex replacement if XML parsing fails
            $pattern = '(<line[^>]*?)(y1="[^"]*")([^>]*?)(y1="[^"]*")([^>]*?>)'
            $replacement = '$1$2$3$5'
            $newContent = $content -replace $pattern, $replacement
            
            if ($newContent -ne $content) {
                $newContent | Set-Content -Path $_.FullName -NoNewline
                Write-Host "  Fixed using regex replacement" -ForegroundColor Green
            }
        }
    }
}

Write-Host "SVG y1 attribute fix script completed!" -ForegroundColor Green 