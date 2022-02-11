import { Button, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ProofForm from './form components/ProofForm';
import NatureForm from './form components/NatureForm';
import LicenseDetails from './form components/LicenseDetails';
import AddReqForm from './form components/AdditionalReqForm';

const MainForm = () => {
    const [step, setStep] = useState(0);

    const formDisplay = () => {
        if(step === 0) {
            return <NatureForm />
        } else if (step === 1) {
            return <ProofForm />
        } else if (step === 2) {
            return <LicenseDetails />
        } else {
            return <AddReqForm />
        }
    }
    return (  
        <Box sx={{
            textAlign: 'center',
            mt: "20px"
        }}>
            <div>{formDisplay()}</div>
            <Button
                    variant='contained'
                    sx={{ borderRadius: "999px", padding: "5px 40px 5px 40px"}}
                    onClick={() => {
                        setStep((currStep) => currStep + 1);
                    }}
                    >
                        Next
                    </Button>
            {/* {
                step == 0 ? 
                    <Button
                    variant='contained'
                    sx={{ borderRadius: "999px", padding: "5px 40px 5px 40px"}}
                    onClick={() => {
                        setStep((currStep) => currStep + 1);
                    }}
                    >
                        Next
                    </Button>
                : <Button
                    variant='contained'
                    sx={{ borderRadius: "999px", padding: "5px 40px 5px 40px"}}
                    onClick={() => {
                        setStep((currStep) => currStep - 1);
                    }}
                >Back</Button>   
            } */}
            <LinearProgress sx={{textAlign: 'center', margin: "30px 430px 0 430px"}} variant='determinate' 
            value={(step/3)*100} />
        </Box>
    );
}
 
export default MainForm;