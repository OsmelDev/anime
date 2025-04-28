"use client";
import { Box, CardMedia, Tab, Tabs, Typography } from "@mui/material";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Servers {
  download: string;
  embed: string;
  name: string;
}
interface Episode {
  number: number;
  slug: string;
  url: string;
}

interface TabsProps {
  servers?: Servers[];
  episodes?: Episode[];
}

export const TabsPanel = ({ servers, episodes }: TabsProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      {servers && (
        <Tabs value={value} onChange={handleChange} aria-label="episodes tab">
          {servers.map((server, i) => (
            <Tab key={i} label={server.name} {...a11yProps(0)} />
          ))}
        </Tabs>
      )}
      {episodes && (
        <Tabs value={value} onChange={handleChange} aria-label="episodes tab">
          <Tab label="Capitulos" {...a11yProps(0)} />
        </Tabs>
      )}
      {servers &&
        servers.map((server, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            <CardMedia
              component="iframe"
              src={server.embed}
              allow="autoplay"
              height="450rem"
              style={{ border: "none" }}
            />
          </CustomTabPanel>
        ))}
      {episodes && (
        <CustomTabPanel value={value} index={0}>
          {episodes.map((episode) => (
            <Box key={episode.number}>
              <Link href={`servers/${episode.slug}`}>
                <Typography>Capitulo:{episode.number}</Typography>
                <Typography component="p" fontSize="18px">
                  {episode.slug}
                </Typography>
              </Link>
            </Box>
          ))}
        </CustomTabPanel>
      )}
    </Box>
  );
};
