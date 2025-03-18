import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment
} from '@mui/material';
import { 
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon,
  School as SchoolIcon,
  EmojiObjects as EmojiObjectsIcon
} from '@mui/icons-material';

interface GlossaryTerm {
  term: string;
  technicalDefinition: string;
  laymansDefinition: string;
  category: string;
  relatedTerms: string[];
  exampleUse: string;
}

// Comprehensive glossary of optical terms with both technical and simplified definitions
const opticalGlossary: GlossaryTerm[] = [
  {
    term: 'Diopter (D)',
    technicalDefinition: 'A unit of measurement of the optical power of a lens or curved mirror, equal to the reciprocal of the focal length in meters (1/f).',
    laymansDefinition: 'A measure of how strongly a lens bends light. Higher numbers mean stronger correction.',
    category: 'Optical Measurement',
    relatedTerms: ['Power', 'Refraction', 'Focal Length'],
    exampleUse: 'A patient with -2.00D prescription needs correction for nearsightedness.'
  },
  {
    term: 'Astigmatism',
    technicalDefinition: 'A refractive error caused by an irregularly shaped cornea or lens, resulting in blurred or distorted vision at all distances.',
    laymansDefinition: 'An eye condition where your cornea is shaped more like a football than a basketball, causing blurry or distorted vision.',
    category: 'Refractive Error',
    relatedTerms: ['Cylinder', 'Axis', 'Toric Lens'],
    exampleUse: 'The prescription shows -1.50D of astigmatism, requiring a toric lens design.'
  },
  {
    term: 'Cylinder',
    technicalDefinition: 'The lens power that corrects astigmatism, measured in diopters with a minus or plus sign.',
    laymansDefinition: 'The part of your prescription that fixes the football-shaped part of your vision problem.',
    category: 'Prescription Component',
    relatedTerms: ['Astigmatism', 'Axis', 'Toric'],
    exampleUse: 'A -2.50D cylinder at axis 180 helps correct the patient\'s astigmatism.'
  },
  {
    term: 'Axis',
    technicalDefinition: 'A number from 1 to 180 degrees that indicates the orientation of the cylindrical correction for astigmatism.',
    laymansDefinition: 'The direction (like a compass direction) where your eye needs astigmatism correction.',
    category: 'Prescription Component',
    relatedTerms: ['Astigmatism', 'Cylinder', 'Meridian'],
    exampleUse: 'The axis of 90 means the astigmatism correction is oriented vertically.'
  },
  {
    term: 'Sphere (SPH)',
    technicalDefinition: 'The lens power that corrects nearsightedness or farsightedness, measured in diopters.',
    laymansDefinition: 'The part of your prescription that helps you see better overall, fixing your main vision problem.',
    category: 'Prescription Component',
    relatedTerms: ['Myopia', 'Hyperopia', 'Emmetropia'],
    exampleUse: 'A +2.00D sphere means the patient needs correction for farsightedness.'
  },
  {
    term: 'Add Power (ADD)',
    technicalDefinition: 'Additional plus power incorporated into the lower portion of a multifocal lens to correct presbyopia.',
    laymansDefinition: 'Extra magnification in the bottom part of your glasses that helps you see up close as you get older.',
    category: 'Prescription Component',
    relatedTerms: ['Presbyopia', 'Bifocal', 'Progressive'],
    exampleUse: 'An ADD of +2.50 helps the patient read comfortably without removing their glasses.'
  },
  {
    term: 'Pupillary Distance (PD)',
    technicalDefinition: 'The distance in millimeters between the centers of the pupils of the eyes.',
    laymansDefinition: 'The measurement of how far apart your eyes are, needed to center your lenses correctly.',
    category: 'Measurements',
    relatedTerms: ['Binocular PD', 'Monocular PD', 'Centration'],
    exampleUse: 'A PD of 62mm ensures the optical centers of the lenses align with the patient\'s pupils.'
  },
  {
    term: 'Prism',
    technicalDefinition: 'A lens component that displaces light without focusing it, used to treat binocular vision disorders.',
    laymansDefinition: 'A special lens correction that helps align your eyes when they tend to point in slightly different directions.',
    category: 'Prescription Component',
    relatedTerms: ['Base Direction', 'Diplopia', 'Vergence'],
    exampleUse: '2 prism diopters base out helps the patient\'s eyes work together without seeing double.'
  },
  {
    term: 'Refraction',
    technicalDefinition: 'The bending of light as it passes from one transparent medium to another with different optical density.',
    laymansDefinition: 'How light bends when it passes through different materials, like from air into a lens or your eye.',
    category: 'Optical Principle',
    relatedTerms: ['Index of Refraction', 'Snell\'s Law', 'Critical Angle'],
    exampleUse: 'During refraction, the optometrist determines which lens powers give you the clearest vision.'
  },
  {
    term: 'Presbyopia',
    technicalDefinition: 'An age-related condition where the crystalline lens loses elasticity, resulting in difficulty focusing on near objects.',
    laymansDefinition: 'A normal part of aging (usually after 40) that makes it harder to focus on things up close, like reading.',
    category: 'Vision Condition',
    relatedTerms: ['Add Power', 'Reading Glasses', 'Multifocal'],
    exampleUse: 'The patient developed presbyopia and needs reading glasses or bifocals.'
  }
];

const OpticalGlossaryComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extract unique categories for filtering
  const categories = Array.from(new Set(opticalGlossary.map(term => term.category)));
  
  // Filter terms based on search and category
  const filteredTerms = opticalGlossary.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.technicalDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.laymansDefinition.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === null || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Optical Terminology Glossary
      </Typography>
      
      <Typography paragraph color="text.secondary">
        This glossary provides both technical definitions for exam preparation and simplified explanations to help beginners understand optical concepts.
      </Typography>
      
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip 
              label="All Categories" 
              onClick={() => setSelectedCategory(null)} 
              color={selectedCategory === null ? "primary" : "default"}
              sx={{ m: 0.5 }}
            />
            {categories.map(category => (
              <Chip 
                key={category} 
                label={category} 
                onClick={() => setSelectedCategory(category)}
                color={selectedCategory === category ? "primary" : "default"}
                sx={{ m: 0.5 }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
      
      {filteredTerms.length === 0 ? (
        <Paper sx={{ p: 3, textAlign: 'center' }}>
          <Typography>No matching terms found. Try adjusting your search.</Typography>
        </Paper>
      ) : (
        <List sx={{ width: '100%' }}>
          {filteredTerms.map((term, index) => (
            <React.Fragment key={term.term}>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{term.term}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <SchoolIcon sx={{ mr: 1 }} color="primary" />
                          <Typography variant="subtitle1" fontWeight="bold">
                            Technical Definition:
                          </Typography>
                        </Box>
                        <Typography paragraph>{term.technicalDefinition}</Typography>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Paper elevation={0} sx={{ p: 2, bgcolor: 'background.default' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <EmojiObjectsIcon sx={{ mr: 1 }} color="secondary" />
                          <Typography variant="subtitle1" fontWeight="bold">
                            Simple Explanation:
                          </Typography>
                        </Box>
                        <Typography paragraph>{term.laymansDefinition}</Typography>
                      </Paper>
                    </Grid>
                    
                    <Grid item xs={12}>
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2">
                          Example: 
                        </Typography>
                        <Typography paragraph sx={{ fontStyle: 'italic' }}>
                          {term.exampleUse}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                        <Typography variant="body2" sx={{ mr: 1 }}>Related terms:</Typography>
                        {term.relatedTerms.map(related => (
                          <Chip 
                            key={related} 
                            label={related} 
                            size="small" 
                            variant="outlined"
                            onClick={() => setSearchTerm(related)}
                          />
                        ))}
                      </Box>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
              {index < filteredTerms.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Box>
  );
};

export default OpticalGlossaryComponent; 