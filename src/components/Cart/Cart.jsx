import React from "react";
import { Grid, Paper } from "@material-ui/core";
import CartProduct from "./CartProduct";

import useStyles from "./styles";

const Cart = ({ cart }) => {
  const classes = useStyles();
  console.log(cart);
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Paper>
            <CartProduct cart={cart} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
