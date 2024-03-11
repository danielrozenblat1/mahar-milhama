import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



export default function VerticalLinearStepper(props) {

    

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: "80dvw" }} dir="rtl">
         
      <Stepper activeStep={activeStep} orientation="vertical">
        {props.steps?.map((step, index) => (
          <Step key={step.label} textAlign="right">
            <StepLabel sx={{textAlign:"right"}}
              StepIconProps={{
                style: { display: 'none' },
              }}
            >
              <Typography variant="inherit" color="textPrimary" sx={{fontFamily:"Horev" ,fontSize:"2rem"}}>
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography sx={{fontFamily:"HeeboR" ,fontSize:"1rem", width:"100%"}}>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1,fontFamily:"Heebo"}}
                  >
                    {index === props.steps?.length - 1 ? 'סיום' : 'המשך'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, fontFamily:"Heebo" }}
                    variant="contained"
                  >
                    חזור
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === props.steps?.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography sx={{fontFamily:"HeeboR" ,fontSize:"1rem"}}>כל השלבים הושלמו - סיימת</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1,fontFamily:"Heebo" }} variant="contained">
            איפוס
          </Button>
        </Paper>
      )}
    </Box>
  );
}
