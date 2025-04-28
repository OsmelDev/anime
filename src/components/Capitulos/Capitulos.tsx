"use client";
import { Box } from "@mui/material";
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
