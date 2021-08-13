import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";

const PaymentForm = ({ shippingData }) => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default PaymentForm;
