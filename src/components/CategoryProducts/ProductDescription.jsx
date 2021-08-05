import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

const ProductDescription = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const description = product.description.split('"')[1];

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <Typography className={classes.productText} variant="h4">
        {product.name}
      </Typography>
      <p className={classes.productText}>{description}</p>
      <FormControl className={classes.form}>
        <Button
          onClick={() => onAddToCart(`${product.id}`, quantity)}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Add to cart
        </Button>
        <Select
          className={classes.select}
          value={quantity}
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ProductDescription;
