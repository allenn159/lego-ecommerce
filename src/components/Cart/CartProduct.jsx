import React, { useState, useCallback } from "react";
import { TextField, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AutorenewIcon from "@material-ui/icons/Autorenew";

import useStyles from "./styles";

const CartProduct = ({ item, onUpdateCart, onRemoveFromCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(item.quantity);
  const [prevQuantity, setPrevQuantity] = useState(item.quantity);

  const onHandleChange = (event) => {
    setQuantity(event.target.value);
    setPrevQuantity(quantity);
  };

  const onUpdateQuantity = () => {
    if (quantity != prevQuantity) {
      onUpdateCart(item.id, quantity);
      setPrevQuantity(quantity);
    }
  };

  return (
    <div>
      <div className={classes.lineItems}>
        <img
          className={classes.image}
          src={item.media.source}
          alt={item.name}
        />
        <p className={classes.productName}>{item.product_name}</p>
        <div className={classes.buttonContainer}>
          <TextField
            className={classes.quantityInput}
            size="medium"
            label={`${item.price.formatted} each`}
            type="number"
            variant="outlined"
            value={quantity}
            onChange={onHandleChange}
            inputProps={{ min: 0 }}
          />
          <IconButton
            className={classes.renewButton}
            onClick={onUpdateQuantity}
          >
            <AutorenewIcon style={{ fontSize: "30px", color: "#00a152" }} />
          </IconButton>
          <p className={classes.itemTotal}>
            Total: ${item.price.formatted * item.quantity}
          </p>
          <IconButton
            onClick={() => onRemoveFromCart(item.id)}
            aria-label="delete"
            className={classes.removeButton}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
