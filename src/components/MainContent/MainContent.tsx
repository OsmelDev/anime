import { Container, Grid, Typography } from "@mui/material";
import { animesPopulates } from "@/data/populateAnime";
import AnimeCard from "../AnimeCard/AnimeCard";
import { services } from "@/services/requests";

const MainContent = () => {
  const animeSeries = animesPopulates.data.media;
  const { getList } = services();
  getList();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: "center", mb: 4 }}
      >
        Series Populares
      </Typography>

      <Grid container spacing={4}>
        {animeSeries.map((anime) => (
          <AnimeCard anime={anime} key={anime.title} />
        ))}
      </Grid>
    </Container>
  );
};

export default MainContent;
