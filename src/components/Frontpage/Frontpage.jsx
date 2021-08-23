import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import Images from "../../assets/index";

const Frontpage = ({ categories }) => {
  const classes = useStyles();

  if (categories.length === 0) return "Loading...";
  console.log(categories);
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid style={{ position: "relative" }} item xs={12} lg={6}>
          <Link to="/categoryproduct/popular">
            <img
              className={classes.imageOne}
              src={Images.bannerOne}
              alt={"Front Page"}
            ></img>
            <p className={classes.imageOneText}>Shop Now</p>
          </Link>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid style={{ position: "relative" }} item xs={12}>
            <Link to="/product/prod_eN1ql9rPQ2wz3y">
              <img
                className={classes.imageTwo}
                src={Images.bannerTwo}
                alt={"Front Page"}
              />
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
                src={Images.bannerThree}
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

      <Grid
        style={{ justifyContent: "center", fontFamily: "Poppins" }}
        container
      >
        <Grid item xs={2}>
          <Link to="/categoryproduct/popular">
            <img
              className={classes.promoImages}
              src={Images.legoLogo}
              alt="promo"
            />
          </Link>
          <div>{categories[0].name}</div>
        </Grid>
        <Grid item xs={2}>
          <Link to="/categoryproduct/disney">
            <img
              className={classes.promoImages}
              src={Images.disneyLogo}
              alt="promo"
            />
          </Link>
          <div>{categories[1].name}</div>
        </Grid>
        <Grid item xs={2}>
          <Link to="/categoryproduct/harry-potter">
            <img
              className={classes.promoImages}
              src={Images.hpLogo}
              alt="promo"
            />
          </Link>
          <div>{categories[2].name}</div>
        </Grid>
        <Grid item xs={2}>
          <Link to="/categoryproduct/star-wars">
            <img
              className={classes.promoImages}
              src={Images.swLogo}
              alt="promo"
            />
          </Link>
          <div>{categories[3].name}</div>
        </Grid>
        <Grid item xs={2}>
          <Link to="/categoryproduct/kids">
            <img
              className={classes.promoImages}
              src={Images.kidsLogo}
              alt="promo"
            />
          </Link>
          <div>{categories[4].name}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Frontpage;
