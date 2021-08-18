import React, { useState } from "react";
import { TextField, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Link } from "react-router-dom";

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
    if (quantity !== prevQuantity) {
      onUpdateCart(item.id, quantity);
      setPrevQuantity(quantity);
    }
  };

  return (
    <div>
      <div className={classes.lineItems}>
        <Link to={`/product/${item.product_id}`}>
          <img
            className={classes.image}
            src={item.media.source}
            alt={item.name}
          />
        </Link>
        <p className={classes.productName}>{item.product_name}</p>
        <div className={classes.inputContainer}>
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
          <div className={classes.inputContainer2}>
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
              <CloseIcon style={{ fontSize: "30px" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
