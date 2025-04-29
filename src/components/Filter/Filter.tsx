"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box } from "@mui/material";
import { services } from "@/services/requests";
import { DataFiltered } from "@/types/anime.types";

type FilterOption = "default" | "updated" | "added" | "title" | "rating";
interface FilterMenuProps {
  setFilteredData: React.Dispatch<React.SetStateAction<DataFiltered[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterMenu = ({ setFilteredData, setLoading }: FilterMenuProps) => {
  const { getListByFilter } = services();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("default");
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetching = async () => {
      const { data } = await getListByFilter(selectedFilter);
      if (!data) {
        setLoading(true);
      }
      setFilteredData(data.media);
      setLoading(false);
    };
    fetching();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelect = async (filter: FilterOption) => {
    setSelectedFilter(filter);
    handleClose();
    const { data } = await getListByFilter(selectedFilter);
    if (!data) {
      setLoading(true);
    }
    setFilteredData(data.media);
    setLoading(false);
  };

  return (
    <Box sx={{ margin: "10px auto" }}>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          textTransform: "none",
          minWidth: 120,
          justifyContent: "space-between",
        }}
      >
        {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleFilterSelect("default")}>
          <ListItemText>All</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleFilterSelect("updated")}>
          <ListItemText>Recently Updated</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleFilterSelect("added")}>
          <ListItemText>Recently Added</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleFilterSelect("title")}>
          <ListItemText>Title</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleFilterSelect("rating")}>
          <ListItemText>Rating</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default FilterMenu;
