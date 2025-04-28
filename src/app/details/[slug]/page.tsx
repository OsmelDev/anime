import Capitulos from "@/components/Capitulos/Capitulos";
import { services } from "@/services/requests";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  const { getSearchBySlug } = services();

  const { data } = await getSearchBySlug(slug);
  return (
    <Grid
      container
      columns={24}
      spacing={{ xs: 0, sm: 2 }}
      sx={{ padding: { sm: 5, xs: 2 } }}
    >
      <Grid size={{ xs: 24, sm: 8 }} sx={{ height: { xs: 400 } }}>
        <CardMedia
          image={`${data.cover}?w=248&fit=crop&auto=format`}
          title={data.title}
          component="img"
          height={340}
          sx={{ border: "1px solid #1f1f20", borderRadius: "10px" }}
        />
      </Grid>

      <Grid size={{ xs: 24, sm: 13 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography component="h1" variant="h6">
            {data.title}
          </Typography>
          <Typography component="span" sx={{ fontSize: "10px" }}>
            {data.alternative_titles[0]}
          </Typography>
          <Box display="flex" gap="5px" mt={2}>
            <Typography component="span" sx={{ fontSize: "10px" }}>
              Genero:
            </Typography>
            {data.genres.map((genre: string[], i: number) => (
              <Typography key={i} component="span" sx={{ fontSize: "10px" }}>
                {genre}
              </Typography>
            ))}
          </Box>

          <Typography sx={{ mt: 5 }} component="span">
            {data.synopsis}
          </Typography>
        </Box>
      </Grid>

      <Grid size={{ xs: 24 }}>
        <Capitulos episodes={data.episodes} />
      </Grid>
    </Grid>
  );
}
