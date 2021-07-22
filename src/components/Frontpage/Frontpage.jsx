import React, { useState } from "react";
import { Fade } from "@material-ui/core";

import useStyles from "./styles";
import image from "../../assets/mainpage.jpg";

const Frontpage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Fade in>
        <img className={classes.image} src={image} />
      </Fade>
    </div>
  );
};

export default Frontpage;
