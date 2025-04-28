import { Container, Grid, Typography } from "@mui/material";
import AnimeCard from "../AnimeCard/AnimeCard";
import { services } from "@/services/requests";
import { AnimeRatingResponse, data } from "@/types/anime.types";

const MainContent = async () => {
  const { getList } = services();
  const { data }: data = await getList();

  const animeSeries = data!.media;

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
        {animeSeries.map((anime: AnimeRatingResponse) => (
          <AnimeCard anime={anime} key={anime.title} />
        ))}
      </Grid>
    </Container>
  );
};

export default MainContent;
