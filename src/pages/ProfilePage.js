import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

// Components
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

export default function ProfilePage() {
  return (
    <main>
      <Card sx={{ }}>
        <CardContent>
            <Container style={{justifyContent: "center", display: "flex"}}>
            <Avatar
             alt="Remy Sharp"
             src="IMG_5221.JPG"
             sx={{ width: 300, height: 300 }}
             />
            </Container>
        
          <Typography sx={{ fontSize: 15, mt:1 }}  gutterBottom>
            Nama : Whisnu Tauhid Ilham Saputra         
          </Typography>
          <Typography variant="h5" component="div">
          </Typography>
          <Typography sx={{ fontSize: 15, mb: 1.5 }} >
            Nim : 21120120140176
          </Typography>
          <Typography variant="body2">
            Kopi yang enak akan menemukan penikmatnya.
          
          </Typography>
        </CardContent>
      </Card>
    </main>
  );
}
