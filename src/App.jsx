import React, { useEffect, useState } from "react"
import axios from 'axios'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData() {
      await axios.get('https://fakestoreapi.com/products').then(res=>{
        console.log(res.data);
        setData(res.data);
      })
    }
    getData()
    
  },[])
  
  return (
    <div>
       <Grid container spacing={2}>
        {
          data.map((val, index)=>{
            return(
              <Grid item xs={8} md={4} lg={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="img"
                  height="200"
                  image = {val.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {val.description}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'red' }}>
                    {"$"+val.price}
                  </Typography>
                </CardContent>
              </Card>

            </Grid>

            )
            
          })
        }
      </Grid>


      
     
    </div>
  )
}

export default App


