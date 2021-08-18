import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const PaymentForm = ({ shippingData, cartProducts, prevStep }) => {
  const classes = useStyles();
  return (
    <>
      <form style={{ textAlign: "center", fontFamily: "Poppins" }}>
        <Grid container spacing={3} style={{ marginBottom: "15px" }}>
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
            {/* <p>{shippingData.firstName}</p>
            <p>{shippingData.lastName}</p>
            <p>{shippingData.address}</p>
            <p>{shippingData.city}</p>
            <p>{shippingData.zip}</p>
            <p>{shippingData.country}</p> */}
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <Typography variant="h5">Shipping Information</Typography>
            {/* <p>{shippingData.shipFirstName}</p>
            <p>{shippingData.shipLastName}</p>
            <p>{shippingData.shipAddress}</p>
            <p>{shippingData.shipCity}</p>
            <p>{shippingData.shipZip}</p>
            <p>{shippingData.shipCountry}</p> */}
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
            <p>"First Name"</p>
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

export default PaymentForm;
