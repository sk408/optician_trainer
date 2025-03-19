import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Divider, 
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
  AlertTitle,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { 
  Check as CheckIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

const PracticePanel: React.FC = () => {
  const [mcqAnswers, setMcqAnswers] = useState<{[key: string]: string}>({});
  const [mcqSubmitted, setMcqSubmitted] = useState<{[key: string]: boolean}>({});
  const [activeScenarioStep, setActiveScenarioStep] = useState(0);
  const [scenarioAnswers, setScenarioAnswers] = useState<string[]>(Array(5).fill(''));
  const [scenarioFeedback, setScenarioFeedback] = useState<string[]>(Array(5).fill(''));
  
  const handleMcqChange = (questionId: string, value: string) => {
    setMcqAnswers({...mcqAnswers, [questionId]: value});
  };
  
  const handleMcqSubmit = (questionId: string) => {
    setMcqSubmitted({...mcqSubmitted, [questionId]: true});
  };
  
  const handleScenarioNext = () => {
    setActiveScenarioStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleScenarioBack = () => {
    setActiveScenarioStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleScenarioInputChange = (index: number, value: string) => {
    const newAnswers = [...scenarioAnswers];
    newAnswers[index] = value;
    setScenarioAnswers(newAnswers);
  };
  
  const handleScenarioSubmit = (index: number) => {
    const newFeedback = [...scenarioFeedback];
    
    // Simple feedback logic - a more robust system would compare against model answers
    if (scenarioAnswers[index].length < 20) {
      newFeedback[index] = "Please provide a more detailed answer.";
    } else {
      newFeedback[index] = "Good thinking! Here's what an experienced optician might do: " + 
        getModelAnswer(index);
    }
    
    setScenarioFeedback(newFeedback);
  };
  
  const getModelAnswer = (index: number): string => {
    const modelAnswers = [
      "First, verify the prescription with a lensometer. Check the PD measurement and compare to what was ordered. Examine lens positioning in the frame and look for optical center placement issues. Adjust the frame if it's sitting incorrectly on the patient's face.",
      "Warm the plastic frame using a frame warmer (125-150°F). Hold the frame front with one hand and gently adjust the bridge width by applying even pressure with your other hand. Allow the frame to cool completely before returning to the patient.",
      "First, measure the current segment height and compare to what was ordered. Verify there's no rotation of the lenses or improper insertion. Check if the frame is sitting too high or low on the patient's face, and adjust accordingly.",
      "Adjust the nose pads to move the frame higher on the patient's face. For a plastic frame, warm it first and adjust the pantoscopic tilt slightly to improve the reading area position. Educate the patient on proper head positioning for progressive lenses.",
      "First, verify the prescription accuracy with a lensometer. Then check frame alignment and adjust for levelness. Examine if there's an issue with vertex distance or pantoscopic tilt. Confirm that the PD was measured and applied correctly, especially for this higher prescription."
    ];
    
    return modelAnswers[index] || "No model answer available.";
  };
  
  const checkAnswer = (questionId: string, answer: string): boolean => {
    const correctAnswers: {[key: string]: string} = {
      'q1': 'c',
      'q2': 'b',
      'q3': 'a',
      'q4': 'd',
      'q5': 'c'
    };
    
    return correctAnswers[questionId] === answer;
  };
  
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Practice Exercises for Optician Students
      </Typography>
      
      <Typography paragraph>
        Strengthen your dispensing skills with these practice exercises, scenarios, and self-assessment questions designed for new optician students preparing for ABO-NCLE certification.
      </Typography>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Multiple Choice Questions
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Question 1: When adjusting plastic frames, what temperature range should be used on the frame warmer?
              </Typography>
              
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup
                  value={mcqAnswers['q1'] || ''}
                  onChange={(e) => handleMcqChange('q1', e.target.value)}
                >
                  <FormControlLabel value="a" control={<Radio />} label="100-115°F (38-46°C)" />
                  <FormControlLabel value="b" control={<Radio />} label="115-125°F (46-52°C)" />
                  <FormControlLabel value="c" control={<Radio />} label="125-150°F (52-65°C)" />
                  <FormControlLabel value="d" control={<Radio />} label="155-170°F (68-77°C)" />
                </RadioGroup>
                
                <Box sx={{ mt: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={() => handleMcqSubmit('q1')}
                    disabled={!mcqAnswers['q1'] || mcqSubmitted['q1']}
                  >
                    Check Answer
                  </Button>
                </Box>
                
                {mcqSubmitted['q1'] && (
                  <Alert 
                    severity={checkAnswer('q1', mcqAnswers['q1']) ? "success" : "error"}
                    sx={{ mt: 2 }}
                  >
                    {checkAnswer('q1', mcqAnswers['q1']) 
                      ? "Correct! 125-150°F (52-65°C) is the appropriate temperature range for warming plastic frames." 
                      : "Incorrect. The correct answer is 125-150°F (52-65°C). Too cool and the frame won't be pliable enough, too hot and you risk damaging the frame."}
                  </Alert>
                )}
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Question 2: What is the primary purpose of pantoscopic tilt in eyeglasses?
              </Typography>
              
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup
                  value={mcqAnswers['q2'] || ''}
                  onChange={(e) => handleMcqChange('q2', e.target.value)}
                >
                  <FormControlLabel value="a" control={<Radio />} label="To increase the size of the peripheral vision field" />
                  <FormControlLabel value="b" control={<Radio />} label="To position the optical centers properly in front of the eyes" />
                  <FormControlLabel value="c" control={<Radio />} label="To make the frame more comfortable on the ears" />
                  <FormControlLabel value="d" control={<Radio />} label="To reduce the weight of the glasses on the nose" />
                </RadioGroup>
                
                <Box sx={{ mt: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={() => handleMcqSubmit('q2')}
                    disabled={!mcqAnswers['q2'] || mcqSubmitted['q2']}
                  >
                    Check Answer
                  </Button>
                </Box>
                
                {mcqSubmitted['q2'] && (
                  <Alert 
                    severity={checkAnswer('q2', mcqAnswers['q2']) ? "success" : "error"}
                    sx={{ mt: 2 }}
                  >
                    {checkAnswer('q2', mcqAnswers['q2']) 
                      ? "Correct! Pantoscopic tilt positions the optical centers properly in front of the eyes, improving optical performance." 
                      : "Incorrect. The correct answer is to position the optical centers properly in front of the eyes. This is especially important for progressive lenses."}
                  </Alert>
                )}
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Question 3: When troubleshooting a patient complaint about blurry vision through their new glasses, what should you check first?
              </Typography>
              
              <FormControl component="fieldset" sx={{ mt: 2 }}>
                <RadioGroup
                  value={mcqAnswers['q3'] || ''}
                  onChange={(e) => handleMcqChange('q3', e.target.value)}
                >
                  <FormControlLabel value="a" control={<Radio />} label="Verify the prescription with a lensometer" />
                  <FormControlLabel value="b" control={<Radio />} label="Adjust the frame fit" />
                  <FormControlLabel value="c" control={<Radio />} label="Clean the lenses" />
                  <FormControlLabel value="d" control={<Radio />} label="Ask about adaptation time" />
                </RadioGroup>
                
                <Box sx={{ mt: 2 }}>
                  <Button 
                    variant="contained" 
                    onClick={() => handleMcqSubmit('q3')}
                    disabled={!mcqAnswers['q3'] || mcqSubmitted['q3']}
                  >
                    Check Answer
                  </Button>
                </Box>
                
                {mcqSubmitted['q3'] && (
                  <Alert 
                    severity={checkAnswer('q3', mcqAnswers['q3']) ? "success" : "error"}
                    sx={{ mt: 2 }}
                  >
                    {checkAnswer('q3', mcqAnswers['q3']) 
                      ? "Correct! Always verify the prescription first to ensure it matches what was prescribed." 
                      : "Incorrect. The correct answer is to verify the prescription with a lensometer. This is the first step in troubleshooting vision problems to ensure the lenses were made correctly."}
                  </Alert>
                )}
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Troubleshooting Scenario
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Stepper activeStep={activeScenarioStep} orientation="vertical">
          <Step>
            <StepLabel>
              <Typography variant="subtitle1">
                Patient with Blurry Vision
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography paragraph>
                A 45-year-old patient picks up their new progressive lenses and complains that their vision is blurry at all distances. They've never worn progressives before. The prescription is -3.00 sphere in both eyes with a +2.00 add.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                What would you do first to troubleshoot this issue?
              </Typography>
              
              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Describe your troubleshooting approach..."
                variant="outlined"
                value={scenarioAnswers[0]}
                onChange={(e) => handleScenarioInputChange(0, e.target.value)}
                sx={{ mt: 2, mb: 2 }}
              />
              
              <Button 
                variant="contained" 
                onClick={() => handleScenarioSubmit(0)}
                sx={{ mr: 1 }}
              >
                Submit Answer
              </Button>
              
              <Button
                variant="outlined"
                onClick={handleScenarioNext}
                sx={{ mt: 1 }}
              >
                Continue to Next Scenario
              </Button>
              
              {scenarioFeedback[0] && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>Feedback</AlertTitle>
                  {scenarioFeedback[0]}
                </Alert>
              )}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>
              <Typography variant="subtitle1">
                Bridge Adjustment Needed
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography paragraph>
                A patient with a plastic frame complains that the frame pinches their nose and leaves red marks. The frame is otherwise appropriate for their face shape and prescription.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Describe how you would adjust this frame to resolve the issue.
              </Typography>
              
              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Explain your adjustment technique..."
                variant="outlined"
                value={scenarioAnswers[1]}
                onChange={(e) => handleScenarioInputChange(1, e.target.value)}
                sx={{ mt: 2, mb: 2 }}
              />
              
              <Button 
                variant="contained" 
                onClick={() => handleScenarioSubmit(1)}
                sx={{ mr: 1 }}
              >
                Submit Answer
              </Button>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  onClick={handleScenarioBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleScenarioNext}
                  sx={{ mt: 1 }}
                >
                  Continue
                </Button>
              </Box>
              
              {scenarioFeedback[1] && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>Feedback</AlertTitle>
                  {scenarioFeedback[1]}
                </Alert>
              )}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>
              <Typography variant="subtitle1">
                Incorrect Segment Height
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography paragraph>
                A patient returns with new flat-top bifocals and complains they have to tilt their head back uncomfortably to read. You notice the segment line appears to be positioned too low.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                How would you approach this problem?
              </Typography>
              
              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Describe your solution..."
                variant="outlined"
                value={scenarioAnswers[2]}
                onChange={(e) => handleScenarioInputChange(2, e.target.value)}
                sx={{ mt: 2, mb: 2 }}
              />
              
              <Button 
                variant="contained" 
                onClick={() => handleScenarioSubmit(2)}
                sx={{ mr: 1 }}
              >
                Submit Answer
              </Button>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  onClick={handleScenarioBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleScenarioNext}
                  sx={{ mt: 1 }}
                >
                  Continue
                </Button>
              </Box>
              
              {scenarioFeedback[2] && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>Feedback</AlertTitle>
                  {scenarioFeedback[2]}
                </Alert>
              )}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>
              <Typography variant="subtitle1">
                Progressive Lens Reading Difficulty
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography paragraph>
                A patient with new progressive lenses complains that the reading area feels too small and they have to hold reading material very close to see clearly. Their prescription includes a +2.50 add.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                What adjustments would you make to improve their reading experience?
              </Typography>
              
              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Explain your adjustment approach..."
                variant="outlined"
                value={scenarioAnswers[3]}
                onChange={(e) => handleScenarioInputChange(3, e.target.value)}
                sx={{ mt: 2, mb: 2 }}
              />
              
              <Button 
                variant="contained" 
                onClick={() => handleScenarioSubmit(3)}
                sx={{ mr: 1 }}
              >
                Submit Answer
              </Button>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  onClick={handleScenarioBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleScenarioNext}
                  sx={{ mt: 1 }}
                >
                  Continue
                </Button>
              </Box>
              
              {scenarioFeedback[3] && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>Feedback</AlertTitle>
                  {scenarioFeedback[3]}
                </Alert>
              )}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>
              <Typography variant="subtitle1">
                High Prescription Distortion
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography paragraph>
                A patient with a -8.00D prescription in both eyes complains about peripheral distortion and that objects appear to "swim" when they move their head. They picked up their glasses yesterday.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                How would you troubleshoot and address this complaint?
              </Typography>
              
              <TextField
                multiline
                rows={4}
                fullWidth
                placeholder="Describe your approach..."
                variant="outlined"
                value={scenarioAnswers[4]}
                onChange={(e) => handleScenarioInputChange(4, e.target.value)}
                sx={{ mt: 2, mb: 2 }}
              />
              
              <Button 
                variant="contained" 
                onClick={() => handleScenarioSubmit(4)}
                sx={{ mr: 1 }}
              >
                Submit Answer
              </Button>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="outlined"
                  onClick={handleScenarioBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
                  disabled
                  sx={{ mt: 1 }}
                >
                  Finish
                </Button>
              </Box>
              
              {scenarioFeedback[4] && (
                <Alert severity="info" sx={{ mt: 2 }}>
                  <AlertTitle>Feedback</AlertTitle>
                  {scenarioFeedback[4]}
                </Alert>
              )}
            </StepContent>
          </Step>
        </Stepper>
      </Paper>
      
      <Divider sx={{ my: 3 }} />
      
      <Typography variant="h6" gutterBottom>
        Dispensing Best Practices Study Guide
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Frame Selection Guidelines
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2" gutterBottom>
                High Plus Prescriptions (+3.00 and above):
              </Typography>
              <ul>
                <li>Recommend smaller eye sizes to minimize thickness</li>
                <li>Consider full-rim frames to hide edge thickness</li>
                <li>Recommend higher index materials (1.67 or 1.74)</li>
                <li>Avoid frames with significant face-form curve</li>
                <li>Position optical centers to minimize thickness</li>
              </ul>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                High Minus Prescriptions (-3.00 and higher):
              </Typography>
              <ul>
                <li>Recommend smaller, round or oval eye shapes</li>
                <li>Consider rimless or semi-rimless to minimize frame presence</li>
                <li>Position frame closer to the eyes (shorter vertex distance)</li>
                <li>High index materials help reduce center thickness</li>
                <li>Proper PD measurement is especially critical</li>
              </ul>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                Progressive Lenses:
              </Typography>
              <ul>
                <li>Minimum B dimension of 28-30mm (depending on design)</li>
                <li>Frame should sit close to the eyes</li>
                <li>Appropriate pantoscopic tilt (8-12 degrees)</li>
                <li>Frame size appropriate for facial proportions</li>
                <li>Avoid frames that sit too high on the face</li>
              </ul>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Essential Measurements Checklist
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Single Vision Lenses:
                  </Typography>
                  <ul>
                    <li>Monocular PD (distance)</li>
                    <li>Monocular PD (near) - for reading glasses</li>
                    <li>Vertical OC height if needed</li>
                    <li>Frame wrap angle</li>
                    <li>Pantoscopic tilt</li>
                    <li>Vertex distance (for high Rx)</li>
                  </ul>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Multifocal/Progressive Lenses:
                  </Typography>
                  <ul>
                    <li>Monocular PD (distance)</li>
                    <li>Monocular segment heights</li>
                    <li>Frame wrap angle</li>
                    <li>Pantoscopic tilt</li>
                    <li>Vertex distance</li>
                    <li>Fitting cross position</li>
                  </ul>
                </Grid>
              </Grid>
              
              <Alert severity="info" sx={{ mt: 2 }}>
                <Typography variant="body2">
                  Document all measurements taken and communicate special needs to the lab. For digitally surfaced lenses, 
                  provide all position of wear measurements for optimized performance.
                </Typography>
              </Alert>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">
                Patient Education Talking Points
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2" gutterBottom>
                New Progressive Lens Wearers:
              </Typography>
              <ul>
                <li>Expect an adaptation period of 1-2 weeks</li>
                <li>Point your nose toward what you want to see</li>
                <li>Distance vision is at the top, reading at the bottom</li>
                <li>For computer use, find the intermediate zone (middle)</li>
                <li>Avoid quick head movements initially</li>
                <li>Return for adjustments if vision remains uncomfortable</li>
              </ul>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                Lens Care Instructions:
              </Typography>
              <ul>
                <li>Clean with lens spray and microfiber cloth</li>
                <li>Rinse under lukewarm water before cleaning</li>
                <li>Avoid hot water which can damage coatings</li>
                <li>Never dry-clean lenses</li>
                <li>Store glasses in a case when not in use</li>
                <li>Avoid leaving glasses in hot cars</li>
              </ul>
              
              <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                Frame Adjustment Policy:
              </Typography>
              <ul>
                <li>Regular adjustments are included with purchase</li>
                <li>Return for adjustments if comfort changes</li>
                <li>Small adjustments may affect vision through lenses</li>
                <li>Remove glasses with both hands to maintain adjustment</li>
                <li>Visit for professional cleaning every 1-2 months</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PracticePanel; 