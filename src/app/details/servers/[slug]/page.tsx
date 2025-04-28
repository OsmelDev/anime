import { TabsPanel } from "@/components/Tabs/Tabs";
import { services } from "@/services/requests";
import { Box, Typography } from "@mui/material";
import React from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const { getEpisodesBySlug } = services();

  const { data } = await getEpisodesBySlug(slug);
  return (
    <Box sx={{ padding: 5 }}>
      <Typography>{data.title}</Typography>
      <Typography>Capitulo: {data.number}</Typography>

      <TabsPanel servers={data.servers} />
    </Box>
  );
};

export default page;
