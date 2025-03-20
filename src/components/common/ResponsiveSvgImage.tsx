import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme, Skeleton, CardProps } from '@mui/material';
import { MediaAsset } from '../../constants/mediaAssets';

interface ResponsiveSvgImageProps {
  media: MediaAsset;
  caption?: string;
  maxHeight?: string | number;
  priority?: 'high' | 'medium' | 'low';
  withBorder?: boolean;
  withBackground?: boolean;
}

/**
 * A responsive image component optimized for SVG content
 * Handles proper scaling and display across different device sizes
 * Features:
 * - Loading states
 * - Mobile-optimized versions of complex diagrams
 * - Responsive sizing based on device
 */
const ResponsiveSvgImage: React.FC<ResponsiveSvgImageProps> = ({
  media,
  caption = media.description,
  maxHeight,
  priority = 'medium',
  withBorder = true,
  withBackground = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  // State for image loading and error handling
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(media.path);
  
  // Set loading priority
  const loading = priority === 'high' ? 'eager' : 'lazy';
  
  // Determine default max heights based on device
  const getDefaultMaxHeight = () => {
    if (maxHeight) return maxHeight;
    if (isMobile) return '250px';
    if (isTablet) return '350px';
    return '450px';
  };

  // Check if a mobile-optimized version exists
  useEffect(() => {
    if (isMobile) {
      // Check if a mobile version exists by constructing the potential path
      const path = media.path;
      const extension = path.substring(path.lastIndexOf('.'));
      const mobilePath = path.replace(extension, `.mobile${extension}`);
      
      // Try to load the mobile version
      const img = new Image();
      img.onload = () => {
        setImageSrc(mobilePath);
        setIsLoading(false);
      };
      img.onerror = () => {
        // Mobile version doesn't exist, use regular version
        setImageSrc(media.path);
        setIsLoading(false);
      };
      img.src = mobilePath;
    } else {
      // On larger screens, just use the regular version
      setIsLoading(false);
    }
  }, [isMobile, media.path]);

  // Handle image load and error events
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };
  
  // Define card variant type correctly
  const cardVariant: CardProps['variant'] = withBorder ? "outlined" : "elevation";
  
  return (
    <Box 
      my={3} 
      textAlign="center" 
      width="100%" 
      data-testid={`svg-image-${media.id}`}
    >
      <Card 
        elevation={0}
        variant={cardVariant}
        sx={{ 
          bgcolor: withBackground ? 'background.paper' : 'transparent',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        {isLoading ? (
          // Skeleton loader while image is loading
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height={getDefaultMaxHeight()}
            animation="wave"
          />
        ) : hasError ? (
          // Error message if image fails to load
          <Box 
            sx={{ 
              height: getDefaultMaxHeight(),
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              p: 2,
              bgcolor: 'action.hover'
            }}
          >
            <Typography color="error">
              Unable to load image: {media.description}
            </Typography>
          </Box>
        ) : (
          // The actual image
          <CardMedia
            component="img"
            image={imageSrc}
            alt={media.description}
            loading={loading}
            onLoad={handleImageLoad}
            onError={handleImageError}
            sx={{ 
              maxWidth: '100%',
              maxHeight: getDefaultMaxHeight(),
              objectFit: 'contain',
              margin: '0 auto',
              display: 'block',
              px: 2,
              py: 2,
            }}
          />
        )}
        
        {caption && (
          <CardContent sx={{ pt: 1, pb: isMobile ? 1 : 2 }}>
            <Typography 
              variant={isMobile ? "caption" : "body2"} 
              color="text.secondary"
              align="center"
            >
              {caption}
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default ResponsiveSvgImage; 