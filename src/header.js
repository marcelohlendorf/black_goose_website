import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from './img/logo.png'
import Grid from '@mui/material/Grid';

export default function Header() {
  return (
    <AppBar style={{height: '100px', backgroundColor: 'black'}}>
      <Toolbar>
        <a />
        <Typography variant="h6" >
            <a href="/" >
              <img id="logo-bgg" src={logo} width="80px" height="80px" style={{marginTop:'10px'}} alt="bgg.com" />
            </a>
          </Typography>
        <Typography variant="h6" color="inherit" noWrap style={{marginLeft:'2%'}}>
          Black Goose Games
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
