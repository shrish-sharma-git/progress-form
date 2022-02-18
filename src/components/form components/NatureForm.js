import { FormControlLabel, FormLabel, Grid, Input, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react';

const NatureForm = () => {
    const [name, setName] = useState('');
    const [nature, setNature] = useState();

    const handleInput = (e) => {
        let value = e.target.value

        value = value.replace(/[^A-Za-z]/ig, '');

        setName(value);
    }

    return (  
        <Grid>
            <Grid item xs={12} sx={{mt: "10px"}}>
                <TextField 
                    type={'text'}
                    value={name}
                    label="Your Name"
                    onChange={handleInput}
                    // onChange={(e) => setName(e.target.value)}
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