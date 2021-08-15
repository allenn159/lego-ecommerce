import React, { useState, useCallback } from "react";
import { TextField, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AutorenewIcon from "@material-ui/icons/Autorenew";


import useStyles from "./styles";

const CartProduct = ({ item, onUpdateCart, onRemoveFromCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(item.quantity);

  const onHandleChange = (event) => {
    setQuantity(event.target.value);
  };

  const onUpdateQuantity = () => {
    onUpdateCart(item.id, quantity);
  };

  return (
    <div>
      <div className={classes.lineItems}>
        <img
          className={classes.image}
          width="200px"
          src={item.media.source}
          alt={item.name}
        />
        <p className={classes.productName}>{item.product_name}</p>

        <TextField
          className={classes.quantityInput}
          size="medium"
          label={`${item.price.formatted} each`}
          type="number"
          variant="outlined"
          value={quantity}
          onChange={onHandleChange}
        />
        <IconButton onClick={onUpdateQuantity}>
          <AutorenewIcon className={classes.renewButton} />
        </IconButton>
        <p className={classes.itemTotal}>
          Total: ${item.price.formatted * item.quantity}
        </p>
        <IconButton
          onClick={() => onRemoveFromCart(item.id)}
          aria-label="delete"
        >
          <CloseIcon
            style={{
              color: "#ff1744",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default CartProduct;
