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
  const [shippingMethods, setShippingMethods] = useState("");
  const methods = useForm();

  const fetchStates = async () => {
    const states = await commerce.services.localeListSubdivisions("US");
    setShippingStates(Object.values(states.subdivisions));
  };

  useEffect(() => {
    fetchStates();
  }, []);

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <Typography variant="h6" gutterbottom>
            Billing Address
          </Typography>
          <Grid container spacing={3}>
            <FormInput required name={"firstName"} label={"First Name"} />
            <FormInput required name={"lastName"} label={"Last Name"} />
            <FormInput required name={"address1"} label={"Address"} />
            <FormInput required name={"email"} label={"Email"} />
            <FormInput required name={"City"} label={"City"} />
            <FormInput required name={"zip"} label={"Postal Code"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>
                  Select Me
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterbottom>
            Shipping Address
          </Typography>
          <Grid container spacing={3}>
            <FormInput required name={"firstName"} label={"First Name"} />
            <FormInput required name={"lastName"} label={"Last Name"} />
            <FormInput required name={"address1"} label={"Address"} />
            <FormInput required name={"email"} label={"Email"} />
            <FormInput required name={"City"} label={"City"} />
            <FormInput required name={"zip"} label={"Postal Code"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>
                  Select Me
                </MenuItem>
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
