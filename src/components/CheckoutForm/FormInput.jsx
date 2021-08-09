import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({
  name,
  label,
  required,
  defaultValue,
  InputProps,
  error,
}) => {
  const { control } = useFormContext;
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={() => (
          <TextField
            control={control}
            fullWidth
            name={name}
            label={label}
            required={required}
            defaultValue={defaultValue}
            InputProps={InputProps}
            error={error}
          ></TextField>
        )}
      />
    </Grid>
  );
};

export default FormInput;
