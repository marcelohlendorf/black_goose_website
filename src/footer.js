import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './copyright.js';

export default function Footer() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom style={{color:"white"}}>
          Follow us on: Social Mocial Media
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >

          <a href='' style={{color:"white",marginLeft:'0%'}}>Terms of service</a>
          <a href='/privacy-policy' style={{color:"white",marginLeft:'5%'}}>Privacy Policy</a>
        </Typography>
        <br/>
        <Copyright/>
    </Box>
    </div>
  );
}
