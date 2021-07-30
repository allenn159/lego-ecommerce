import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { CircularProgress } from "@material-ui/core";
import ImageCarousel from "../Carousels/ImageCarousel";
import ProductDescription from "./ProductDescription";

import useStyles from "./styles";

const ProductPage = () => {
  const classes = useStyles();
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
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
        <div className={classes.productInfo}>
          {product && <ImageCarousel product={product} />}
          {product && <ProductDescription product={product} />}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
