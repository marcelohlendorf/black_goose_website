import * as React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import fireTruckImage from './img/fireTruckLogo.png'
import mathPillsImage from './img/mathPillsLogo.png'
import backgroundImage from './img/mobileLP.jpg'
import Grid from '@mui/material/Grid';

import './index.css';
export default function Home() {

  return (
    <div>
    <Header/>
    <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={6}>
        <div style={{marginTop:'100px'}}>
          <img id="logo1-bgg" src={backgroundImage} width="400px" height="20%" alt="bgg.com" />
        </div>
      </Grid>

      <Grid item xs={6} style={{marginTop:'100px'}}>
        <h1 style={{fontSize:'58px',fontFamily: "Encode",marginTop:'25%'}}>Lets get going!</h1>
        <h3 style={{fontSize:'27px',fontFamily: "Encode"}}>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h3>
        <div style={{marginBottom:'10%'}}>
          <img id="logo1-bgg" src={fireTruckImage} width="150px" height="150px" alt="bgg.com" />
          <img id="logo3-bgg" src={mathPillsImage} width="150px" height="150px" style={{marginTop:'0%',marginLeft:'5%'}} alt="bgg.com" />
        </div>
      </Grid>
    </Grid>

    <Footer/>
    </div>
  );
}
