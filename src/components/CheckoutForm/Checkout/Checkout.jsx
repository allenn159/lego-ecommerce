import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Redirect } from "react-router-dom";

import useStyles from "./styles";
import { commerce } from "../../../lib/commerce";

const steps = ["Shipping Address", "Payment Details"];

const Checkout = ({ cart }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
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

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  console.log(shippingData);

  const Confirmation = () => <div>Confirmation</div>;

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
      <PaymentForm checkoutToken={checkoutToken} shippingData={shippingData} />
    );

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
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
