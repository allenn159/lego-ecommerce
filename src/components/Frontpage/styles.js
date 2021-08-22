import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "95px",
    textAlign: "center",
  },

  imageOne: {
    width: "99%",
    height: "93.9%",
    [theme.breakpoints.down("md")]: {
      height: "99%",
    },
  },
  imageTwo: {
    width: "99%",
  },
  imageThree: {
    width: "99%",
  },
}));
