import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import logo from "../../assets/lego.jpeg";
import useStyles from "./styles";

const Navbar = ({ categories, totalItems }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar className={classes.toolbar}>
          <Typography component={"div"}>
            <Link to="/">
              <img src={logo} className={classes.image} alt="Logo" />
            </Link>
          </Typography>
          <Typography component={"div"} className={classes.button}>
            <Dropdown categories={categories} />
          </Typography>
          <div className={classes.cart}>
            <Link to="/cart">
              <IconButton aria-label="cart">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
