import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './copyright.js';
import {Link} from "react-router-dom";

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
          <Link style={{color:"white",marginLeft:'5%'}} to="/privacy-policy">Privacy Policy</Link>
        </Typography>
        <br/>
        <Copyright/>
    </Box>
    </div>
  );
}
