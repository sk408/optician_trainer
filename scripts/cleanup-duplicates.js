// Script to clean up duplicate mobile SVG files
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { glob } from 'glob';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directories to clean
const SVG_DIRECTORIES = [
  'public/assets/images/study',
  'public/assets/images/tools',
  'public/assets/images/dispensing',
  'public/images'
];

// Main function
async function main() {
  let totalRemoved = 0;
  
  for (const directory of SVG_DIRECTORIES) {
    try {
      if (!fs.existsSync(directory)) {
        console.log(`Directory doesn't exist, skipping: ${directory}`);
        continue;
      }
      
      // Find duplicate mobile SVGs (.mobile.mobile.svg)
      const duplicateFiles = await glob(`${directory}/**/*.mobile.mobile.svg`);
      
      console.log(`Found ${duplicateFiles.length} duplicate mobile SVG files in ${directory}`);
      
      // Remove each duplicate file
      for (const file of duplicateFiles) {
        try {
          fs.unlinkSync(file);
          console.log(`✓ Removed duplicate: ${file}`);
          totalRemoved++;
        } catch (err) {
          console.error(`Error removing ${file}:`, err);
        }
      }
    } catch (e) {
      console.error(`Error processing directory ${directory}:`, e);
    }
  }
  
  console.log(`Cleanup complete! Removed ${totalRemoved} duplicate mobile SVG files.`);
}

// Run the script
main().catch(console.error); 