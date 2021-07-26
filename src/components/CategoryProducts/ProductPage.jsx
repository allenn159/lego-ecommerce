import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";

const ProductPage = () => {
  const classes = useStyles();
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    await commerce.products.retrieve(path).then((p) => {
      setProduct(p);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [path]);

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <div>{console.log(product)}</div>
      )}
    </div>
  );
};

export default ProductPage;
