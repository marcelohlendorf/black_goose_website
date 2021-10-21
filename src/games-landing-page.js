import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';

export default function GamesLanding() {
  return (
    <div id="games" style = {{marginLeft: '5%', marginRight: '5%'}}>
      {/* End hero unit */}
      <Grid container spacing={4}>
        <Grid item xs={6}>
            <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <CardMedia
                component = "img"
                image = "https://source.unsplash.com/random"
                height = '200px'
                alt = "random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Math Pills
                </Typography>
              </CardContent>
              <CardActions style={{justifyContent: 'center'}}>
                <Button size="big"><AppleIcon/></Button>
                <Button size="small"><AndroidIcon/></Button>
              </CardActions>
            </Card>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component = "img"
                  image = "https://source.unsplash.com/random"
                  height = '200px'
                  alt = "random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Space Surfers
                  </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                  <Button size="big"><AppleIcon/></Button>
                  <Button size="small"><AndroidIcon/></Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
    </div>

  );
}
