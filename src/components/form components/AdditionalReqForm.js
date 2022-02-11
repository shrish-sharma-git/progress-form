import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';

const AdditionalReqForm = () => {
    const [addOnPref, setAddonPref] = useState("");
    return (  
        <Grid>
            <Grid item xs={12}>
                <Typography
                    sx={{mb: "15px", fontWeight: "600"}}
                    variant='h4'
                >
                    ADDITIONAL REQUIREMENT
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{mt: "12px", mb: "50px"}}>
                <FormLabel>If previous Driving License was issued from different city than current place of residence ?</FormLabel>
                <RadioGroup
                    onChange={(e) => setAddonPref(e.target.value)}
                    value={addOnPref}
                    sx={{margin: {sm: "15px 600px 0 600px", xs: "15px 20px 0 20px"}}}
                >
                    <FormControlLabel value="NOC available from previous city" control={<Radio />} label="NOC available from previous city" />
                    <FormControlLabel value="NOC not available from previous city" control={<Radio />} label="NOC not available from previous city" />
                    <FormControlLabel value="Same city, NOC not available" control={<Radio />} label="Same city, NOC not available" />
                </RadioGroup>
            </Grid>
        </Grid>
    );
}
 
export default AdditionalReqForm;