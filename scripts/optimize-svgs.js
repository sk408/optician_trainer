// Script to optimize SVGs using SVGO
const fs = require('fs');
const path = require('path');
const { optimize } = require('svgo');
const glob = require('glob');

// SVGO configuration for optimization
const svgoConfig = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Keep viewBox attribute even if it could be removed
          removeViewBox: false,
          // Remove IDs that aren't needed
          cleanupIDs: true,
          // Convert style to attributes
          convertStyleToAttrs: true,
          // Remove unnecessary metadata
          removeMetadata: true,
          // Remove comments
          removeComments: true,
          // Remove descriptions
          removeDesc: true,
          // Remove unused namespaces
          removeUnusedNS: true,
          // Remove editor data and other noise
          removeEditorsNSData: true,
          // Remove empty attrs
          removeEmptyAttrs: true,
          // Remove empty containers
          removeEmptyContainers: true,
          // Keep important attributes for accessibility
          removeUnknownsAndDefaults: {
            keepAriaAttrs: true,
            keepRoleAttr: true
          }
        },
      },
    },
    // Add responsive properties
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { width: '100%' },
          { height: 'auto' },
          { 'aria-hidden': 'false' },
        ],
      },
    },
    // Add responsive text for scaling
    {
      name: 'custom-plugin',
      fn: () => {
        return {
          element: {
            enter: (node) => {
              // Make text elements responsive
              if (node.name === 'text' && !node.attributes['font-size-adjust']) {
                node.attributes['font-size-adjust'] = '0.5';
                node.attributes['text-rendering'] = 'optimizeLegibility';
              }
            }
          }
        };
      }
    }
  ],
};

// Assets directory to optimize
const SVG_DIRECTORIES = [
  'public/assets/images/study',
  'public/assets/images/tools',
  'public/assets/images/dispensing',
  'public/images'
];

// Process a single SVG file
async function optimizeSvg(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    const svg = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has a viewBox
    const hasViewBox = svg.includes('viewBox="');
    if (!hasViewBox) {
      console.warn(`Warning: ${filePath} does not have a viewBox attribute, adding one...`);
      // Find width and height attributes
      const widthMatch = svg.match(/width="([^"]+)"/);
      const heightMatch = svg.match(/height="([^"]+)"/);
      
      if (widthMatch && heightMatch) {
        const width = widthMatch[1];
        const height = heightMatch[1];
        
        // Add viewBox if width and height are found
        const viewBoxValue = `0 0 ${width} ${height}`;
        const svgWithViewBox = svg.replace(/<svg/, `<svg viewBox="${viewBoxValue}"`);
        fs.writeFileSync(filePath, svgWithViewBox, 'utf8');
        console.log(`Added viewBox="${viewBoxValue}" to ${filePath}`);
      } else {
        console.error(`Cannot add viewBox to ${filePath}, missing width or height attributes`);
        return;
      }
    }
    
    // Optimize the SVG
    const result = optimize(fs.readFileSync(filePath, 'utf8'), {
      path: filePath,
      ...svgoConfig
    });
    
    // Write the optimized content back
    fs.writeFileSync(filePath, result.data, 'utf8');
    console.log(`✓ Optimized: ${filePath}`);
  } catch (e) {
    console.error(`Error processing ${filePath}:`, e);
  }
}

// Create a mobile-optimized version of complex diagrams
async function createMobileOptimized(filePath) {
  try {
    // Only process SVGs that are likely to be complex diagrams
    const complexDiagrams = [
      'diagram', 'detailed', 'anatomy', 'pathway', 'summary', 'comparison', 'parameters'
    ];
    
    const fileName = path.basename(filePath);
    const isComplex = complexDiagrams.some(term => fileName.includes(term));
    
    if (!isComplex) {
      return; // Skip if not a complex diagram
    }
    
    console.log(`Creating mobile version for: ${filePath}`);
    
    // Read original SVG
    const svg = fs.readFileSync(filePath, 'utf8');
    
    // Create mobile-optimized version
    // - Increase text size
    // - Simplify if possible
    let mobileVersion = svg
      // Increase font size for text elements (multiply existing by 1.25)
      .replace(/font-size="([^"]+)"/g, (match, size) => {
        // Try to parse the size
        const numericPart = parseFloat(size);
        if (!isNaN(numericPart)) {
          // If unit is specified
          const unit = size.replace(/[\d.-]/g, '');
          return `font-size="${(numericPart * 1.25)}${unit}"`;
        }
        return match; // keep original if can't parse
      })
      // Add mobile-specific class
      .replace(/<svg/, '<svg class="mobile-optimized"');
      
    // Create mobile filename (add .mobile before extension)
    const ext = path.extname(filePath);
    const mobileFilePath = filePath.replace(ext, `.mobile${ext}`);
    
    // Write mobile version
    fs.writeFileSync(mobileFilePath, mobileVersion, 'utf8');
    console.log(`✓ Created mobile version: ${mobileFilePath}`);
  } catch (e) {
    console.error(`Error creating mobile version of ${filePath}:`, e);
  }
}

// Main function
async function main() {
  for (const directory of SVG_DIRECTORIES) {
    try {
      if (!fs.existsSync(directory)) {
        console.log(`Directory doesn't exist, skipping: ${directory}`);
        continue;
      }
      
      // Get all SVG files in the directory
      const files = glob.sync(`${directory}/**/*.svg`);
      console.log(`Found ${files.length} SVG files in ${directory}`);
      
      // Process each SVG file
      for (const file of files) {
        await optimizeSvg(file);
        await createMobileOptimized(file);
      }
    } catch (e) {
      console.error(`Error processing directory ${directory}:`, e);
    }
  }
  
  console.log('SVG optimization complete!');
}

// Run the script
main().catch(console.error); 