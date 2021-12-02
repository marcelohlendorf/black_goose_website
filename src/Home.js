import * as React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import background from './img/background.jpg'
import buttonImage from './img/button.png'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Image from 'material-ui-image'

export default function Home() {

  return (
    <div>
    <Header/>
    <Card style={{backgroundImage: `url(${background})`,height:'1080px',marginTop:'100px'}}>
      <CardContent>
        <img id="logo-bgg" src={buttonImage} width="150px" height="150px" style={{marginTop:'40%',marginLeft:'50%'}} alt="bgg.com" />
        <img id="logo-bgg" src={buttonImage} width="150px" height="150px" style={{marginTop:'0%',marginLeft:'0%'}} alt="bgg.com" />
        <img id="logo-bgg" src={buttonImage} width="150px" height="150px" style={{marginTop:'0%',marginLeft:'0%'}} alt="bgg.com" />
      </CardContent>
    </Card>
    <Footer/>
    </div>
  );
}
