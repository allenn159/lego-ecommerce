import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, setShippingData, nextStep }) => {
  const [shippingStates, setShippingStates] = useState([]);
  const [billState, setBillState] = useState("");
  const [shipState, setShipState] = useState("");
  const [shippingMethods, setShippingMethods] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("");

  const methods = useForm();

  const fetchStates = async (checkoutTokenId) => {
    const states = await commerce.services.localeListShippingSubdivisions(
      checkoutTokenId,
      "US"
    );
    setShippingStates(Object.values(states.subdivisions));
  };

  const fetchShipping = async (checkoutTokenId) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country: "US",
        region: "AL",
      }
    );
    setShippingMethods(options);
  };

  useEffect(() => {
    fetchStates(checkoutToken.id);
    fetchShipping(checkoutToken.id);
  }, []);

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            nextStep();
            setShippingData({ data, billState, shipState, shippingMethod });
          })}
        >
          <Typography variant="h6">Billing Address</Typography>
          <Grid container spacing={3}>
            <FormInput name={"firstName"} label={"First Name"} />
            <FormInput name={"lastName"} label={"Last Name"} />
            <FormInput name={"address"} label={"Billing Address"} />
            <FormInput name={"email"} label={"Email"} />
            <FormInput name={"city"} label={"City"} />
            <FormInput name={"zip"} label={"Postal Code"} />
            <FormInput name={"country"} label={"Country"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select
                value={billState}
                fullWidth
                onChange={(e) => setBillState(e.target.value)}
                required
              >
                {shippingStates.map((state, idx) => (
                  <MenuItem key={idx} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Typography variant="h6">Shipping Address</Typography>

          <Grid container spacing={3}>
            <FormInput name={"shipFirstName"} label={"First Name"} />
            <FormInput name={"shipLastName"} label={"Last Name"} />
            <FormInput
              required
              name={"shipAddress"}
              label={"Shipping Address"}
            />
            <FormInput name={"shipEmail"} label={"Email"} />
            <FormInput name={"shipCity"} label={"City"} />
            <FormInput name={"shipZip"} label={"Postal Code"} />
            <FormInput name={"shipCountry"} label={"Country"} />
            <Grid item xs={12} sm={6}>
              <InputLabel>State</InputLabel>
              <Select
                value={shipState}
                fullWidth
                onChange={(e) => setShipState(e.target.value)}
                required
              >
                {shippingStates.map((state, idx) => (
                  <MenuItem key={idx} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                value={shippingMethod}
                fullWidth
                onChange={(e) => setShippingMethod(e.target.value)}
                required
              >
                {shippingMethods.map((method) => (
                  <MenuItem key={method.id} value={method}>
                    {`${method.description} - Free`}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                defaultValue="0000 0000 0000 0000"
                InputProps={{
                  readOnly: true,
                }}
                name={"cardNumber"}
                label={"Credit Card"}
              />
              <TextField
                defaultValue="01/21"
                InputProps={{
                  readOnly: true,
                }}
                name={"expiry"}
                label={"Expiry"}
              />
              <TextField
                defaultValue="***"
                InputProps={{
                  readOnly: true,
                }}
                name={"cvv"}
                label={"CVV"}
              />
            </Grid>
          </Grid>
          <Button type="submit" color="primary">
            Next
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
