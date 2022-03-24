import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LeadGen from './LeadGen';
import AddLead from './AddLead';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { AppBar } from '@material-ui/core';
import InsuType from './InsuType';
import ClosingTab from './ClosingTab';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(5),
  },
  formAlign:
{
  paddingLeft:"30%",
  width:"100%",
  paddingTop:"2%",
  paddingBottom:"5%"
},
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['General Creteria', 'Type of Insulation', 'Closing Tab'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<div><LeadGen/></div>);
    case 1:
      return (<div><InsuType/></div>);
    case 2:
      return (<div><ClosingTab/></div>);
    default:
      return 'Unknown stepIndex';
  }
}

export default function Test1() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
    <div className={classes.root}>
        <AppBar position="static">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>  </AppBar>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className={classes.formAlign}>
        
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained"  size="large" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>

            </div>
          </div>
        )}
        <Divider/>
      </div>
    
    </div>
  );
}
