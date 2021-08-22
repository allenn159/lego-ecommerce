import React from "react";
import { Fade, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import image from "../../assets/mainpage.jpg";
import thp from "../../assets/treehousepromo.jpeg";
import r2d2 from "../../assets/r2d2.jpeg";

const Frontpage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={6}>
          <Fade in>
            <Link to="/categoryproduct/popular">
              <img
                className={classes.imageOne}
                src={image}
                alt={"Front Page"}
              />
            </Link>
          </Fade>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12}>
            <img className={classes.imageTwo} src={thp} alt={"Front Page"} />
          </Grid>
          <Grid item xs={12}>
            <img className={classes.imageThree} src={r2d2} alt={"Front Page"} />
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.categoryText}>Popular Products</div>
    </div>
  );
};

export default Frontpage;
