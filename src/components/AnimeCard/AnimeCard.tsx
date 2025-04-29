import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import React from "react";
import Link from "next/link";

interface AnimeCardProps {
  anime: {
    title: string;
    cover: string;
    synopsis: string;
    rating: string;
    slug: string;
    type: string;
    url: string;
  };
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} className="fade-in">
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          image={anime.cover}
          alt={anime.title}
          sx={{ height: 200 }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="h3">
            {anime.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {anime.synopsis}
          </Typography>
          <Typography variant="caption" display="block" sx={{ mt: 1 }}>
            Categoria: {anime.type}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Button size="small" color="primary" sx={{ ml: "auto" }}>
            <Link href={`details/${anime.slug}`}>Ver más</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default AnimeCard;
