import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Header = () => {
    return (  
        <Box>
            <Typography
            variant='h3'
            align='center'
            sx={{fontWeight: 'bold', mt: "15px"}}
            >
                DRIVING LICENSE RENEWAL
            </Typography>

            <Typography
                variant='h3'
                align='center'
                sx={{fontWeight: "200", mt: "15px", color: "#808080"}}
            >
                Lets get started
            </Typography>

            <Typography
                align='center'
                sx={{fontWeight: "bold", mt: "15px", color: "#808080"}}
            >
                Add your details (As per your registered records)
            </Typography>
        </Box>
    );
}
 
export default Header;