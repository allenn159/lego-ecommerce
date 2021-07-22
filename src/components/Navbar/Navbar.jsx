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
import { Link } from "react-router-dom";

import logo from "../../assets/lego.jpeg";
import useStyles from "./styles";

const Navbar = ({ categories }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography component={"div"}>
            <Link to="/">
              <img src={logo} className={classes.image} />
            </Link>
          </Typography>
          <Typography component={"div"} className={classes.button}>
            <Dropdown categories={categories} />
          </Typography>
          <div className={classes.cart}>
            <IconButton aria-label="cart">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
