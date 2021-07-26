import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";
import { CircularProgress, Grid, Paper } from "@material-ui/core";

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

  console.log(products);

  return (
    <div className={classes.container}>
      {loading ? (
        <CircularProgress className={classes.loader} />
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item md={4} xs={12}>
              <Paper className={classes.paper} elevation={3} key={product.id}>
                <img
                  className={classes.image}
                  src={`${product.assets[0].url}`}
                />
              </Paper>
              <div>{product.name}</div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CategoryProducts;
