import React from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Cart = ({ cart, onUpdateCart, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const EmptyCart = () => {
    return <div className={classes.emptyCart}>Your Cart is Empty!</div>;
  };

  if (!cart.line_items) return "Loading...";

  const FilledCart = () => {
    return (
      <div className={classes.container}>
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Paper>
              {cart.line_items.map((item) => (
                <CartProduct
                  className={classes.paper}
                  item={item}
                  onUpdateCart={onUpdateCart}
                  onRemoveFromCart={onRemoveFromCart}
                  key={item.id}
                />
              ))}
            </Paper>
            <div
              className={classes.cartTotal}
            >{`Cart Total: ${cart.subtotal.formatted_with_symbol}`}</div>
            <Button
              style={{
                backgroundColor: "#ffc107",
                position: "absolute",
                right: "120px",
              }}
              variant="contained"
              onClick={onEmptyCart}
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

  return (
    <div>{cart.line_items.length <= 0 ? <EmptyCart /> : <FilledCart />}</div>
  );
};

export default Cart;
