import React from "react";
import { Grid } from "@material-ui/core";
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
          <Grid item xs={12}>
            <img className={classes.imageTwo} src={thp} alt={"Front Page"} />
          </Grid>
          <Grid item xs={12}>
            <img className={classes.imageThree} src={r2d2} alt={"Front Page"} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Frontpage;
