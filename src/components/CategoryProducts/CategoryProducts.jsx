import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import { CircularProgress, Grid, Paper } from "@material-ui/core";

import useStyles from "./styles";

const CategoryProducts = () => {
  const classes = useStyles();
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSlugs = async () => {
    setLoading(true);
    await commerce.products
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
        <CircularProgress className={classes.loader} />
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid key={product.id} item md={4} xs={12}>
              <Link to={`/product/${product.id}`}>
                <Paper className={classes.paper} elevation={3} key={product.id}>
                  <img
                    className={classes.image}
                    src={`${product.assets[0].url}`}
                  />
                </Paper>
                <div>{product.name}</div>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CategoryProducts;
