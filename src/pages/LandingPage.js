import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setisLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("");
    
    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);
    
    useEffect(() => {
        const fetchData = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get(
                "https://my-json-server.typicode.com/Whisnuilham/TugasAkhirPPB/champion",{
                params: { },
                headers: {
                
                },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                setData(response.data);        
                setisLoaded(true);
                setIsLoading(false);
            }
        } catch (err) {
        console.log(err);
        setIsLoading(false);
        }
        };
    if (!isLoaded) {
    fetchData(query);
    }
    }, [isLoaded, query]);
        const onSearch = (e) => {
        if (e.key === "Enter") {
        setisLoaded(false);
        setQuery(e.target.value);
    }
    };
    const handleClick = (item) => {
        setModalShow(!modalShow);
        setModalItem(item);
    };
    return (
        <main>
            <Grid container spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{marginBottom:10}}
            >
            <Grid item xs={12} lg={6}>

  <a href="/ChampionPageV60">
  <Card sx={{margin:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image="https://asset.kompas.com/crops/61JPngLXQ7_4OMhnTY-mtZkAwKc=/0x31:1000x697/750x500/data/photo/2020/06/01/5ed4efe6455df.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            V60
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
  </Grid>
  <Grid item xs={12} lg={6}>
  <a href="/ChampionPageAeropress" style={{marginTop: 5,}}>
  <Card sx={{ margin:5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image="https://res.cloudinary.com/pactcoffee/image/upload/f_auto,q_auto/v1586974345/website-d2c/assets/uploadedCMS/aeropress-plunge.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Aeropress
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </a>
  </Grid>

</Grid>
            
           
        </main>
    );
}
