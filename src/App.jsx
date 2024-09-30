import React, { useEffect, useState } from "react"
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(res=>{
      console.log(res.data);
      setData(res.data);
    })
  },[])
  
  return (
    <div>
       <Grid container spacing={2}>
        {
          data.map((val, index)=>{
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          })
        }
      </Grid>


      
     
    </div>
  )
}

export default App


