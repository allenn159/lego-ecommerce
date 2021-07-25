import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";
import { CircularProgress, Grid } from "@material-ui/core";

const CategoryProducts = () => {
  const classes = useStyles();
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSlugs = async () => {
    setLoading(true);
    const data = await commerce.products
      .list({
        category_slug: [path],
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSlugs();
  }, [path]);

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid>
          {products.map((product) => (
            <div>{product.name}</div>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CategoryProducts;
