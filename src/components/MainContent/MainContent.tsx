"use client";
import { Container, Grid, Typography } from "@mui/material";
import AnimeCard from "../AnimeCard/AnimeCard";
import { services } from "@/services/requests";
import { AnimeRatingResponse, data } from "@/types/anime.types";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const MainContent = () => {
  const { getList } = services();
  const [series, setSeries] = useState<AnimeRatingResponse[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      const { data } = await getList();
      if (!data) {
        setLoading(true);
      }
      setSeries(data.media);
      setLoading(false);
    };
    fetching();
  }, []);

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

      <Grid container spacing={4} columns={12}>
        {loading ? (
          <Grid
            size={12}
            sx={{
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress size={60} />
          </Grid>
        ) : (
          series!.map((anime: AnimeRatingResponse) => (
            <AnimeCard anime={anime} key={anime.title} />
          ))
        )}
      </Grid>
    </Container>
  );
};

export default MainContent;
