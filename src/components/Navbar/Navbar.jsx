import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Dropdown from "./Dropdown";

import logo from "../../assets/lego.jpeg";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography>
            <img src={logo} className={classes.image} />
          </Typography>
          <Typography className={classes.button}>
            <Dropdown />
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
