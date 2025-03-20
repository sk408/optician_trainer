import React from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import ResponsiveSvgImage from '../common/ResponsiveSvgImage';
import { 
  refractiveErrorsImages, 
  eyeAnatomyImages, 
  contactLensDesignMaterialsImages 
} from '../../constants/mediaAssets';

/**
 * Example component demonstrating usage of ResponsiveSvgImage
 * with various media assets and configurations
 */
const OptimizedImageExample: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Optimized SVG Examples
      </Typography>
      
      <Typography variant="body1" paragraph>
        These examples demonstrate optimized SVGs with responsive behavior, 
        mobile-specific versions, and loading states.
      </Typography>
      
      <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          High Priority Images (Important Diagrams)
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          These images use eager loading and are given high priority:
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ResponsiveSvgImage 
              media={refractiveErrorsImages.refractiveErrorsSummary}
              priority="high"
              withBackground
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResponsiveSvgImage 
              media={eyeAnatomyImages.eyeAnatomyDiagram}
              priority="high"
              withBackground
            />
          </Grid>
        </Grid>
      </Paper>
      
      <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Medium Priority Images (Supporting Graphics)
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          These images use normal loading priority (default):
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsiveSvgImage 
              media={refractiveErrorsImages.myopiaSimplified}
              caption="Simplified myopia diagram with responsive behavior"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsiveSvgImage 
              media={refractiveErrorsImages.hyperopiaSimplified}
              caption="Simplified hyperopia diagram with responsive behavior"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResponsiveSvgImage 
              media={refractiveErrorsImages.astigmatismSimplified}
              caption="Simplified astigmatism diagram with responsive behavior"
            />
          </Grid>
        </Grid>
      </Paper>
      
      <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Low Priority Images (Alternative Views)
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          These images use lazy loading for performance optimization:
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ResponsiveSvgImage 
              media={contactLensDesignMaterialsImages.contactLensCategories}
              priority="low"
              withBorder={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <ResponsiveSvgImage 
              media={contactLensDesignMaterialsImages.rgpDesignZones}
              priority="low"
              withBorder={false}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default OptimizedImageExample; 