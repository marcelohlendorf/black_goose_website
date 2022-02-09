import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './index.css';

export default function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" >
        <>Black Goose Games</>
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
