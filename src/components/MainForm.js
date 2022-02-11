import { Button, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ProofForm from './form components/ProofForm';
import NatureForm from './form components/NatureForm';
import LicenseDetails from './form components/LicenseDetails';
import AddReqForm from './form components/AdditionalReqForm';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MainForm = () => {
    const [step, setStep] = useState(0);

    const formDisplay = () => {
        if(step === 0) {
            return <NatureForm />
        } else if (step === 1) {
            return <ProofForm step={step} setStep={setStep}/>
        } else if (step === 2) {
            return <LicenseDetails step={step} setStep={setStep}/>
        } else {
            return <AddReqForm step={step} setStep={setStep}/>
        }
    }

    const buttonDisplay = () => {
        if(step === 0) {
            return (
                <Button
                    variant='contained'
                    sx={{ borderRadius: "999px", padding: "5px 40px 5px 40px"}}
                    onClick={() => {
                        setStep((currStep) => currStep + 1);
                    }}
                >Next</Button>
            )
        } else if(step === 1 || step === 2) {
            return (
                <Button
                    startIcon={<KeyboardArrowLeftIcon />}
                    variant='contained'
                    sx={{ borderRadius: "999px", padding: "5px 40px 5px 40px"}}
                    onClick={() => {
                        setStep((currStep) => currStep - 1);
                    }}
                >Back</Button> 
            )
        } else if(step === 3) {
            return (
                <Button
                    variant='contained'
                    sx={{ borderRadius: "999px", padding: "5px 40px 5px 40px"}}
                    onClick={() => {
                        setStep((currStep) => currStep + 1);
                    }}
                >Submit</Button>
            )
        } 
    }

    return (  
        <Box sx={{
            textAlign: 'center',
            mt: "20px"
        }}>
            <div>{formDisplay()}</div>
            {buttonDisplay()}

            <LinearProgress sx={{textAlign: 'center', margin: {sm: "30px 430px 0 430px", xs: "20px 20px 20px 20px"}}} 
            variant='determinate' 
            value={(step/4)*100} />
        </Box>
    );
}
 
export default MainForm;