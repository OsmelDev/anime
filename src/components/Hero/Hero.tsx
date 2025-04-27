"use client";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://via.placeholder.com/1920x1080?text=Anime+Hero)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        py: 10,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          gutterBottom
        >
          Bienvenido a AnimeFlix
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h5"}
          component="p"
          gutterBottom
        >
          El mejor lugar para ver tus series de anime favoritas
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<PlayArrowIcon />}
          sx={{ mt: 3 }}
        >
          Ver ahora
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
