import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NatureForm = () => {
    const [name, setName] = useState('');
    const [nature, setNature] = useState();
    return (  
        <Grid>
            <Grid item xs={12} sx={{mt: "10px"}}>
                <TextField 
                    variant="outlined" 
                    value={name}
                    label="Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </Grid>

            <Grid item xs={12} sx={{mt: "12px", mb: "50px"}}>
                <FormLabel>Nature of driving license?</FormLabel>
                <RadioGroup
                    onChange={(e) => setNature(e.target.value)}
                    row
                    value={nature}
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