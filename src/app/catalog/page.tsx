"use client";
import AnimeCard from "@/components/AnimeCard/AnimeCard";
import FilterMenu from "@/components/Filter/Filter";
import { DataFiltered } from "@/types/anime.types";
import { Box, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";

const page = () => {
  const [filteredData, setFilteredData] = useState<DataFiltered[]>([]);
  const [loading, setLoading] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FilterMenu setFilteredData={setFilteredData} setLoading={setLoading} />
      <Grid container spacing={4} sx={{ padding: { md: 5, sm: 5, xs: 2 } }}>
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
          filteredData.map((data, i) => <AnimeCard anime={data} key={i} />)
        )}
      </Grid>
    </Box>
  );
};

export default page;
