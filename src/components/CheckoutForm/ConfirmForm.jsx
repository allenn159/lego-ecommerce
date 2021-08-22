import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const ConfirmForm = ({
  shippingData,
  cartProducts,
  prevStep,
  nextStep,
  onEmptyCart,
}) => {
  const classes = useStyles();

  const onHandleComplete = async (event) => {
    event.preventDefault();
    nextStep();
    onEmptyCart();
  };

  if (!shippingData.data) return "Loading...";
  return (
    <>
      <form
        onSubmit={onHandleComplete}
        style={{ textAlign: "center", fontFamily: "Poppins" }}
      >
        <Grid container spacing={3} style={{ marginBottom: "25px" }}>
          {cartProducts.line_items.map((product) => (
            <Grid key={product.id} item xs={12}>
              <div>
                {product.name} x {product.quantity} -{" "}
                {product.price.formatted_with_symbol}
              </div>
            </Grid>
          ))}
          <Grid item xs={12}>
            <div>Total: {cartProducts.subtotal.formatted_with_symbol}</div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Billing Information</Typography>
            <p>
              {shippingData.data.firstName} {shippingData.data.lastName}
            </p>
            <p>{shippingData.data.address}</p>
            <p>{shippingData.data.city}</p>
            <p>
              {shippingData.billState}, {shippingData.data.zip}
            </p>
            <p></p>
            <p>{shippingData.data.country}</p>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Shipping Information</Typography>
            <p>
              {shippingData.data.shipFirstName} {shippingData.data.shipLastName}
            </p>
            <p>{shippingData.data.shipAddress}</p>
            <p>{shippingData.data.shipCity}</p>

            <p>
              {shippingData.shipState}, {shippingData.data.shipZip}
            </p>
            <p>{shippingData.data.shipCountry}</p>
          </Grid>
        </Grid>
        <Button
          onClick={prevStep}
          className={classes.prevButton}
          variant="contained"
        >
          Previous
        </Button>
        <Button
          type="submit"
          className={classes.placeOrderButton}
          variant="contained"
          color="primary"
          size="medium"
        >
          Place Order
        </Button>
      </form>
    </>
  );
};

export default ConfirmForm;
