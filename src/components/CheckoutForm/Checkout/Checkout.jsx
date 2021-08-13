import React, { useState, useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";

import useStyles from "./styles";
import { commerce } from "../../../lib/commerce";

const steps = ["Address & Payment", "Confirmation"];

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
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        prevStep={prevStep}
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
