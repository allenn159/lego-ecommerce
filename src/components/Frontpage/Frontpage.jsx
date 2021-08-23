import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import image from "../../assets/mainpage.jpg";
import thp from "../../assets/treehousepromo.jpg";
import r2d2 from "../../assets/r2d2.jpeg";

const Frontpage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid style={{ position: "relative" }} item xs={12} lg={6}>
          <Link to="/categoryproduct/popular">
            <img
              className={classes.imageOne}
              src={image}
              alt={"Front Page"}
            ></img>
            <p className={classes.imageOneText}>Shop Now</p>
          </Link>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid style={{ position: "relative" }} item xs={12}>
            <Link to="/product/prod_eN1ql9rPQ2wz3y">
              <img className={classes.imageTwo} src={thp} alt={"Front Page"} />
              <p className={classes.imageTwoText}>New LEGO Tree House</p>
              <Button disableRipple className={classes.imageTwoButton}>
                Shop
              </Button>
            </Link>
          </Grid>
          <Grid style={{ position: "relative" }} item xs={12}>
            <Link to="/product/prod_NXELwj1q0zl3A4">
              <img
                className={classes.imageThree}
                src={r2d2}
                alt={"Front Page"}
              />
              <p className={classes.imageThreeText}>
                Everyone's Favorite Droid
              </p>
              <Button disableRipple className={classes.imageThreeButton}>
                Shop
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Frontpage;
