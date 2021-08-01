import React from "react";

import useStyles from "./styles";

const CartProduct = ({ cart }) => {
  const classes = useStyles();
  console.log(cart.line_items);

  if (!cart.line_items) return null;

  return (
    <div>
      {cart.line_items.map((e) => {
        return (
          <div className={classes.lineItems}>
            <img width="200px" src={e.media.source} />
            <p>{e.product_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartProduct;
