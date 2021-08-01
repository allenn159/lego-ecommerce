import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import { TextField } from "@material-ui/core";

import useStyles from "./styles";

const CartProduct = ({ item, onUpdateCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(item.quantity);

  const onHandleChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    onUpdateCart(item.id, { quantity: quantity });
  }, [quantity]);

  return (
    <div>
      <div className={classes.lineItems}>
        <img width="200px" src={item.media.source} />
        <p style={{ marginLeft: "100px", width: "950px" }}>
          {item.product_name}
        </p>
        <TextField
          style={{
            marginRight: "30px",
            width: "125px",
          }}
          size="medium"
          label="Quantity"
          type="number"
          variant="outlined"
          value={quantity}
          onChange={onHandleChange}
        />
        <p
          style={{
            marginRight: "50px",
          }}
        >
          Total: ${item.price.formatted * item.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
