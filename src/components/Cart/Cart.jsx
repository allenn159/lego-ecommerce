import React from "react";
import { Grid, Paper } from "@material-ui/core";
import CartProduct from "./CartProduct";

import useStyles from "./styles";

const Cart = ({ cartItems, onUpdateCart }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Paper>
            {cartItems.map((item) => (
              <CartProduct
                className={classes.paper}
                item={item}
                onUpdateCart={onUpdateCart}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
