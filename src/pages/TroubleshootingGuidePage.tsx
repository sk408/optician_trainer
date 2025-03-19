import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, Tabs, Tab, Grid, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { troubleshootingContent } from '../content/troubleshooting';

const TroubleshootingGuidePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [expandedSection, setExpandedSection] = useState<string | false>('section0');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    setExpandedSection('section0');
  };

  const handleAccordionChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedSection(isExpanded ? panel : false);
  };

  const contentToDisplay = selectedTab === 0 
    ? troubleshootingContent.commonIssuesGuide 
    : troubleshootingContent.advancedTroubleshooting;

  return (
    <Box sx={{ minHeight: '100vh', py: 4 }}>
      <Container maxwidth={false}>
        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Troubleshooting Guide
          </Typography>
          <Typography paragraph>
            Learn how to diagnose and solve common eyewear issues with these comprehensive guides.
          </Typography>
          
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs 
              value={selectedTab} 
              onChange={handleTabChange}
              aria-label="troubleshooting content tabs"
            >
              <Tab label="Common Issues" />
              <Tab label="Advanced Troubleshooting" />
            </Tabs>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom>
              {contentToDisplay.title}
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              {contentToDisplay.description}
            </Typography>

            {contentToDisplay.sections.map((section, index) => (
              <Accordion 
                key={`section${index}`}
                expanded={expandedSection === `section${index}`} 
                onChange={handleAccordionChange(`section${index}`)}
                sx={{ mb: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`section${index}-content`}
                  id={`section${index}-header`}
                >
                  <Typography variant="h6">{section.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    component="div"
                    sx={{ 
                      whiteSpace: 'pre-line',
                      mb: 3 
                    }}
                  >
                    {section.content}
                  </Typography>
                  
                  <Box sx={{ mt: 2, bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      Key Points:
                    </Typography>
                    <List dense>
                      {section.keyPoints.map((point, idx) => (
                        <ListItem key={idx} sx={{ py: 0.5 }}>
                          <ListItemText primary={point} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {contentToDisplay.practiceQuestions.length > 0 && (
            <Box sx={{ my: 4 }}>
              <Typography variant="h5" gutterBottom>
                Practice Questions
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <Grid container spacing={3}>
                {contentToDisplay.practiceQuestions.map((question, qIndex) => (
                  <Grid item xs={12} md={6} key={qIndex}>
                    <Paper 
                      elevation={1} 
                      sx={{ 
                        p: 2, 
                        height: '100%',
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Question {qIndex + 1}: {question.question}
                      </Typography>
                      <List dense>
                        {question.options.map((option, oIndex) => (
                          <ListItem key={oIndex}>
                            <ListItemText 
                              primary={`${String.fromCharCode(65 + oIndex)}. ${option}`}
                              sx={{
                                '& .MuiTypography-root': {
                                  fontWeight: question.correctAnswer === oIndex ? 'bold' : 'normal',
                                  color: question.correctAnswer === oIndex ? 'primary.main' : 'inherit'
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          
          {contentToDisplay.relatedTopics?.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                Related Topics:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                {contentToDisplay.relatedTopics.map((topic, index) => (
                  <Button 
                    key={index} 
                    component={RouterLink} 
                    to={`/topics/${topic}`} 
                    variant="outlined" 
                    size="small"
                    sx={{ textTransform: 'none' }}
                  >
                    {topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
          
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              component={RouterLink} 
              to="/" 
              variant="outlined"
            >
              Back to Home
            </Button>
            
            <Button 
              component={RouterLink} 
              to="/study" 
              variant="contained" 
              color="primary"
            >
              Go to Study Materials
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default TroubleshootingGuidePage; 