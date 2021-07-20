import React, { useState } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";
import useStyles from "./styles";

const Dropdown = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.menu}
      >
        Categories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Category</MenuItem>
        <MenuItem onClick={handleClose}>Category</MenuItem>
        <MenuItem onClick={handleClose}>Category</MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
