import React from "react";
import { CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

const CartProduct = ({ cart }) => {
  const classes = useStyles();
  console.log(cart.line_items);

  if (!cart.line_items) return <CircularProgress className={classes.loader} />;

  return (
    <div>
      {cart.line_items.map((e) => {
        console.log(e);
      })}
    </div>
  );
};

export default CartProduct;
