import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './copyright.js';
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div style={{backgroundColor: '#000424',border: "none",boxShadow: "none",marginTop:'-3px'}}>
      <Box component="footer">
        <Typography variant="h6" align="center" gutterBottom style={{color:"white"}}>
          Follow us on: Social Mocial Media
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >

          <Link style={{color:"white"}} to="/privacy-policy">Imprint & Privacy Policy</Link>
        </Typography>
        <br/>
        <Copyright/>
    </Box>
    </div>
  );
}
