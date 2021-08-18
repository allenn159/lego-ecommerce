import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@material-ui/core";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link } from "react-router-dom";

import useStyles from "../styles";
import { commerce } from "../../../lib/commerce";

const steps = ["Address & Payment", "Confirmation"];

const Checkout = ({ cart, cartProducts, onEmptyCart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(2);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      const token = await commerce.checkout.generateToken(cart, {
        type: "cart",
      });
      setCheckoutToken(token);
    };
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevStep) => prevStep + 1);
  const prevStep = () => setActiveStep((prevStep) => prevStep - 1);

  const Confirmation = () => (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "Poppins", fontSize: "30px" }}>
        Your Order Has Been Placed!
      </div>

      <Button
        component={Link}
        to="/"
        style={{ marginTop: "30px" }}
        variant="contained"
        color="primary"
      >
        Home
      </Button>
    </div>
  );

  const Form = () =>
    activeStep === 0 ? (
      checkoutToken && (
        <AddressForm
          checkoutToken={checkoutToken}
          setShippingData={setShippingData}
          nextStep={nextStep}
        />
      )
    ) : (
      <PaymentForm
        shippingData={shippingData}
        prevStep={prevStep}
        nextStep={nextStep}
        cartProducts={cartProducts}
        onEmptyCart={onEmptyCart}
      />
    );

  console.log(shippingData);

  return (
    <>
      <div />
      <main className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper className={classes.stepper} activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
