import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken }) => {
  const [shippingStates, setShippingStates] = useState([]);
  const [shippingState, setShippingState] = useState("");
  const [shippingMethods, setShippingMethods] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("");
  const methods = useForm();

  const fetchStates = async () => {
    const states = await commerce.services.localeListSubdivisions("US");
    setShippingStates(Object.entries(states.subdivisions));
  };

  // const fetchShipping = async () => {
  //   const options = await commerce.checkout.getShippingOptions(
  //     checkoutToken.id,
  //     {
  //       country: "US",
  //     }
  //   );
  //   console.log(options);
  // };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Typography variant="h6">Billing Address</Typography>
          <Grid container spacing={3}>
            <FormInput required name={"firstName"} label={"First Name"} />
            <FormInput required name={"lastName"} label={"Last Name"} />
            <FormInput required name={"address1"} label={"Address"} />
            <FormInput required name={"email"} label={"Email"} />
            <FormInput required name={"City"} label={"City"} />
            <FormInput required name={"zip"} label={"Postal Code"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select
                value={shippingState}
                fullWidth
                onChange={(e) => setShippingState(e.target.value)}
              >
                {shippingStates
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.label} value={item.label}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <Typography variant="h6">Shipping Address</Typography>
          <Grid container spacing={3}>
            <FormInput required name={"firstName"} label={"First Name"} />
            <FormInput required name={"lastName"} label={"Last Name"} />
            <FormInput required name={"address1"} label={"Address"} />
            <FormInput required name={"email"} label={"Email"} />
            <FormInput required name={"City"} label={"City"} />
            <FormInput required name={"zip"} label={"Postal Code"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select
                value={shippingState}
                fullWidth
                onChange={(e) => setShippingState(e.target.value)}
              >
                {/* {shippingStates.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))} */}
              </Select>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
