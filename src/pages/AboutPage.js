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
import Container from "@mui/material/Container";
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function AboutPage() {
  return (
    <main>
      <Card sx={{}}>
        <CardContent>
          <CoffeeIcon sx={{ fontSize: 150}} color="" />

          <Typography sx={{ fontSize: 14, mt: 1 }} gutterBottom>
            Nama : Whisnu Tauhid Ilham Saputra
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1 }}>Nim : 21120120140176</Typography>
          <Typography variant="body2">well meaning and kindly.</Typography>
          <Button
          sx={{marginTop: 5}}
          variant="contained" href="/Home">
           Continue
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
