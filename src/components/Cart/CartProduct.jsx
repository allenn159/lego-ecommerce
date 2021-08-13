import React, { useState, useEffect, useRef } from "react";
import { TextField, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";

const CartProduct = ({ item, onUpdateCart, onRemoveFromCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(item.quantity);

  const initialRender = useRef(true);

  const onHandleChange = (event) => {
    setQuantity(event.target.value);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      onUpdateCart(item.id, quantity);
    }
  }, [onUpdateCart, item.id, quantity]);

  return (
    <div>
      <div className={classes.lineItems}>
        <img width="200px" src={item.media.source} alt={item.name} />
        <p style={{ marginLeft: "100px", width: "950px" }}>
          {item.product_name}
        </p>

        <TextField
          style={{
            marginRight: "30px",
            width: "125px",
          }}
          size="medium"
          label={`${item.price.formatted} each`}
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
        <IconButton
          onClick={() => onRemoveFromCart(item.id)}
          aria-label="delete"
        >
          <CloseIcon style={{ color: "#ff1744" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartProduct;
