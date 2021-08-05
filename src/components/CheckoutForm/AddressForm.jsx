import React, {useState} from "react";
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

const AddressForm = () => {
  const [shippingState, setShippingState] = useState('')
  const [shippingMethods, setShippingMethods] = useState('')
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterbottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={""}>
          <Grid container spacing={3}>
            <FormInput required name={"firstName"} label={"First Name"} />
            <FormInput required name={"lastName"} label={"Last Name"} />
            <FormInput required name={"address1"} label={"Address"} />
            <FormInput required name={"email"} label={"Email"} />
            <FormInput required name={"City"} label={"City"} />
            <FormInput required name={"zip"} label={"Postal Code"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>States</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
                    Select Me
                </MenuItem>
              </Select>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={} fullWidth onChange={}>
                <MenuItem key={} value={}>
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
