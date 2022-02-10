import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const ProofForm = () => {
    const [issuedYear, setIssuedYear] = useState("");
    const [expiringYear, setExpiringYear] = useState("");

    const handleChange = (e) => {
        setIssuedYear(e.target.value);
        setExpiringYear(e.target.value);
    };
    return (  
        <Grid>
            <Grid item xs={12} sx={{mt: "12px", mb: "50px"}}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="issued-year-label">Issued year of license</InputLabel>
                    <Select
                        labelId="issued-year-label"
                        id="issued-year"
                        label="Issued year of license"
                        value={issuedYear}
                        onChange={handleChange}
                        sx={{width: "250px"}}
                    >
                        <MenuItem value={2010}>2010</MenuItem>
                        <MenuItem value={2011}>2011</MenuItem>
                        <MenuItem value={2012}>2012</MenuItem>
                        <MenuItem value={2013}>2013</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="expiry-year-label">Expiring year of license</InputLabel>
                    <Select
                        labelId="expiry-year-label"
                        id="expiry-year"
                        label="Expiring year of license"
                        value={issuedYear}
                        onChange={handleChange}
                        sx={{width: "250px"}}
                    >
                        <MenuItem value={2010}>2010</MenuItem>
                        <MenuItem value={2011}>2011</MenuItem>
                        <MenuItem value={2012}>2012</MenuItem>
                        <MenuItem value={2013}>2013</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}
 
export default ProofForm;