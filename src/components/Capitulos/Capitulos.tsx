"use client";
import { Box, Link, Tab, Tabs, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import { TabsPanel } from "../Tabs/Tabs";

interface CapitulosProps {
  episodes: {
    number: number;
    slug: string;
    url: string;
  }[];
}

const Capitulos = ({ episodes }: CapitulosProps) => {
  return (
    <Box>
      <TabsPanel episodes={episodes} />
    </Box>
  );
};

export default Capitulos;
