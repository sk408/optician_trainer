# SVG Optimization for Optician Trainer

This document describes the SVG optimization approach implemented in the Optician Trainer application to ensure diagrams and images display properly across all device types.

## Optimization Features

1. **SVG Optimization Script**
   - Removes unnecessary metadata and paths
   - Ensures proper viewBox attributes
   - Uses SVGO for automated optimization

2. **Mobile-Optimized Versions**
   - Automatically creates mobile-specific versions for complex diagrams
   - Increases text size for better readability
   - Simplifies complex diagrams for small screens

3. **Responsive Text Scaling**
   - SVG text elements have relative sizing
   - Text scales appropriately based on viewport size
   - Ensures readability on all device sizes

4. **Progressive Enhancement**
   - Loading states with skeleton loaders
   - Loading prioritization (high, medium, low)
   - Fallback handling for failed image loads

5. **Accessibility Enhancements**
   - ARIA attributes for screen readers
   - High contrast mode support
   - Keyboard navigation support

## Implementation Components

### 1. ResponsiveSvgImage Component

The core component for displaying optimized SVGs with features:
- Device-aware rendering
- Mobile-optimized image detection and loading
- Loading states with skeleton placeholders
- Error handling

```tsx
// Basic usage
<ResponsiveSvgImage 
  media={refractiveErrorsImages.myopiaDiagram}
  priority="high"
  withBackground={true}
/>
```

### 2. SVG Optimization Script

The script processes all SVGs in the project:
- Adds viewBox if missing
- Optimizes paths and attributes
- Creates mobile-optimized versions for complex diagrams

Run with:
```bash
npm run optimize-svgs
```

### 3. CSS Optimizations

Dedicated CSS styles enhance SVG display across devices:
- Responsive scaling
- Mobile-specific adjustments
- Print media optimizations
- Accessibility enhancements

## Usage Guidelines

### When to Create Mobile-Specific Versions

Create mobile-specific versions when diagrams:
- Contain small text that would be unreadable on mobile
- Have complex details that aren't necessary on small screens
- Feature multiple elements that could be simplified

### Recommended SVG Creation Process

1. Create SVGs with proper viewBox attributes
2. Use semantic text elements with relative sizing
3. Run the optimization script before committing
4. Test on various device sizes
5. Create custom mobile versions for complex diagrams

### Priority Settings

Use priority settings appropriately:
- **High**: Main diagrams essential for understanding content
- **Medium**: Supporting visuals with moderate importance
- **Low**: Optional visuals or alternative views

## Browser Compatibility

This implementation has been tested and works well with:
- Chrome, Firefox, Safari, Edge (latest versions)
- iOS and Android mobile browsers
- Screen readers and accessibility tools

## Accessibility Considerations

All SVGs should:
- Include appropriate ARIA labels
- Have sufficient contrast ratios
- Support keyboard navigation when interactive
- Work with screen readers

## Troubleshooting

Common issues:
- Missing viewBox attribute causes scaling problems
- Text too small on mobile devices
- SVGs don't scale properly in containers

Fixes:
- Run optimization script to add viewBox
- Create mobile-optimized version with larger text
- Ensure parent containers allow proper scaling 