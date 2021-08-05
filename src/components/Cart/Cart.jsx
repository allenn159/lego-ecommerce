import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Cart = ({ cartItems, onUpdateCart, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  if (cartItems.length === 0) {
    return <div className={classes.emptyCart}>Your Cart is Empty!</div>;
  }
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
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </Paper>
          <Button
            style={{
              backgroundColor: "#ffc107",
              position: "absolute",
              right: "120px",
            }}
            variant="contained"
            onClick={() => onEmptyCart()}
          >
            Empty Cart
          </Button>
          <Link to={"/checkout"}>
            <Button
              style={{ position: "absolute", right: "0" }}
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
