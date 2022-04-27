import * as React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import fireTruckImage from './img/fireTruckLogo.png';
import mathPillsImage from './img/mathPillsLogo.png';
import phoneHand from './img/phoneHand.png';
import topBarImage from './img/topBar.png';
import bottomBarImage from './img/bottomBar.png';
import Grid from '@mui/material/Grid';

import './index.css';
export default function Home() {

  return (
    <div>
    <Header/>
    <div style={{marginTop:'100px'}}></div>
    <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <img id="topbar-bgg" src={topBarImage} width="100%" alt="bgg.com" />

      <Grid item xs={12} sm={12} md={6} order={{ xs: 2, sm: 2, md:1 }}>
        <div style={{marginTop:'100px'}}>
          <div>
            <img id="logo1-bgg" src={phoneHand} width="80%" alt="bgg.com" />
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={6} order={{ xs: 1, sm: 1, md:2 }} style={{marginTop:'15%'}}>
        <h1>Welcome! </h1>
        <h3>We are Black Goose Games, a team of professionals from the gaming and mobile industry. <br/>
          We are here to create entertaining experiences that feed your nostalgia and evoke the best childhood memories.
        </h3>

        <div style={{marginBottom:'0%'}}>
          <img id="logo1-bgg" src={fireTruckImage} width="150px" height="150px" alt="bgg.com" />
          <img id="logo3-bgg" src={mathPillsImage} width="150px" height="150px" style={{marginTop:'0%',marginLeft:'5%'}} alt="bgg.com" />
        </div>
      </Grid>

    </Grid>
    <img id="bottombar-bgg" src={bottomBarImage} width="100%" alt="bgg.com" style={{marginTop:"-4%"}}/>
    <Footer/>
    </div>
  );
}
