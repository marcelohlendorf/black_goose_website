import * as React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import fireTruckImage from './img/fireTruckLogo.png';
import mathPillsImage from './img/mathPillsLogo.png';
import backgroundImage from './img/Master.png';
import topBar from './img/topBar.png'
import Grid from '@mui/material/Grid';

import './index.css';
export default function Home() {

  return (
    <div>
    <Header/>
    <div style={{marginTop:'100px'}}></div>
    <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={6} style={{marginTop:'100px'}}>
        <h1>Welcome! </h1>
        <h3>We are Black Goose Games, a team of professionals from the gaming and mobile industry. <br/>
          We are here to create entertaining experiences that feed your nostalgia and evoke the best childhood memories.
        </h3>

        <div style={{marginBottom:'10%'}}>
          <img id="logo1-bgg" src={fireTruckImage} width="150px" height="150px" alt="bgg.com" />
          <img id="logo3-bgg" src={mathPillsImage} width="150px" height="150px" style={{marginTop:'0%',marginLeft:'5%'}} alt="bgg.com" />
        </div>
      </Grid>

      <Grid item xs={6}>
        <div style={{marginTop:'100px'}}>
          <div>
            <img id="logo1-bgg" src={backgroundImage} width="120%" alt="bgg.com" />
          </div>
        </div>
      </Grid>

    </Grid>

    <Footer/>
    </div>
  );
}
