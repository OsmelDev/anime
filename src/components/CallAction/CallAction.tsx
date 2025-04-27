import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const CallAction = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" component="h3" gutterBottom>
          ¿Listo para comenzar?
        </Typography>
        <Typography variant="h6" component="p" gutterBottom sx={{ mb: 4 }}>
          Regístrate ahora y obtén acceso ilimitado a miles de series de anime.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ px: 6 }}
        >
          Registrarse
        </Button>
      </Container>
    </Box>
  );
};

export default CallAction;
