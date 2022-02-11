import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const LicenseDetails = () => {
    const [issuedYear, setIssuedYear] = useState("");
    const [expiringYear, setExpiringYear] = useState("");

    const handleChange = (e) => {
        setIssuedYear(e.target.value);
        setExpiringYear(e.target.value);
    };
    return (  
        <Grid>
            <Grid item xs={12}>
                <Typography
                    sx={{mb: "15px"}}
                    variant='h5'
                >
                    Proof of Current Entities
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="dob-proof-label">Available proof of D.O.B</InputLabel>
                    <Select
                        labelId="dob-proof-label"
                        id="doc-proof"
                        label="Available proof of D.O.B"
                        value={issuedYear}
                        onChange={handleChange}
                        sx={{width: "250px"}}
                    >
                        <MenuItem value={"10th Certificate"}>10th Certificate</MenuItem>
                        <MenuItem value={"School Leaving Certificate"}>School Leaving Certificate</MenuItem>
                        <MenuItem value={"PAN Card"}>PAN Card</MenuItem>
                        <MenuItem value={"Passport"}>Passport</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="address-proof-label">Address Proof Available</InputLabel>
                    <Select
                        labelId="address-proof-label"
                        id="address-proof"
                        label="Address Proof Available"
                        value={issuedYear}
                        onChange={handleChange}
                        sx={{width: "250px"}}
                    >
                        <MenuItem value={"Voter ID card"}>Voter ID card</MenuItem>
                        <MenuItem value={"Electricity Bill"}>Electricity Bill</MenuItem>
                        <MenuItem value={"Passport"}>Passport</MenuItem>
                        <MenuItem value={"Govt. Bank Account"}>Govt. Bank Account</MenuItem>
                        <MenuItem value={"Aadhar Card"}>Aadhar Card</MenuItem>
                    </Select>
                </FormControl>
            </Grid>    
            <Grid sx={{mb: "50px"}}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="di-issue-label">Current Place of D.L</InputLabel>
                    <Select
                        labelId="di-issue-label"
                        id="di-issue"
                        label="Current Place of D.L"
                        value={issuedYear}
                        onChange={handleChange}
                        sx={{width: "250px"}}
                    >
                        <MenuItem value={"Delhi"}>Delhi</MenuItem>
                        <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
                        <MenuItem value={"Chennai"}>Chennai</MenuItem>
                        <MenuItem value={"Ranchi"}>Ranchi</MenuItem>
                        <MenuItem value={"Faridabad"}>Faridabad</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
}
 
export default LicenseDetails;