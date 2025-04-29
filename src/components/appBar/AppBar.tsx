import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import Link from "next/link";

const AppBarNavigation = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/">AnimeFlix</Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link href="/catalog">Catalogo</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarNavigation;
