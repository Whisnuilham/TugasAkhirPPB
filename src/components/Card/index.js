// index.js
import React from "react";
import "./index.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Grid } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
export default function index({ data, onClick }) {
    return (
        <Grid item xs={12} lg={3}>
        <Card sx={{  }} onClick={onClick}>
        <CardActionArea>
        {data ? (
            <>
                <CardMedia
            component="img"
            height="440"
            image={data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.nama}
            </Typography>
        
            </CardContent>
            </>
        ) : (
            <p>Loading...</p>
        )}
          
        </CardActionArea>
      </Card>
      </Grid>
        // <div className="card" onClick={onClick}>
        // {data ? (
        //     <>
        //         <figure>
        //             {/* <img src={data.i.imageUrl} alt={data.l} /> */}
        //         </figure>
        //         <div className="card-info">
        //             <h3>{data.nama}</h3>
        //         </div>
        //     </>
        // ) : (
        //     <p>Loading...</p>
        // )}
        // </div>
    );
}
