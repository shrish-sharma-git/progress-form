import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';

const NatureForm = () => {
    return (  
        <Grid>
            <Grid item xs={12} sx={{mt: "10px"}}>
                <TextField variant="outlined" label="Your Name"/>
            </Grid>

            <Grid item xs={12} sx={{mt: "12px", mb: "50px"}}>
                <FormLabel>Nature of driving license?</FormLabel>
                <RadioGroup
                    row
                    sx={{display: 'flex', justifyContent: 'center', mt: '12px'}}
                >
                    <FormControlLabel value="Private" control={<Radio />} label="Private" />
                    <FormControlLabel value="Commercial" control={<Radio />} label="Commercial" />
                </RadioGroup>
            </Grid>
        </Grid>
    );
}
 
export default NatureForm;