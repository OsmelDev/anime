import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 3 }}>
      <Container maxWidth="lg" sx={{ color: "text.primary" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} border="1px solid">
            <Typography variant="h6" gutterBottom>
              AnimeFlix
            </Typography>
            <Typography variant="body2">
              El mejor sitio para ver anime en línea con subtítulos en español.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} border="1px solid">
            <Typography variant="h6" gutterBottom>
              Enlaces
            </Typography>
            <Typography variant="body2" component="div">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button color="inherit" variant="text">
                  Inicio
                </Button>
                <Button color="inherit">Series</Button>
                <Button color="inherit">Películas</Button>
                <Button color="inherit">Contacto</Button>
              </Box>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} border="1px solid">
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Typography variant="body2" component="div">
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Button color="inherit">Términos</Button>
                <Button color="inherit">Privacidad</Button>
                <Button color="inherit">DMCA</Button>
              </Box>
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} border="1px solid">
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2">
              contacto@animeflix.com
              <br />
              +1 234 567 890
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} AnimeFlix. Todos los derechos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
