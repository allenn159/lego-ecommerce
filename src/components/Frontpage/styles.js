import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "95px",
    textAlign: "center",
  },
  imageOneText: {
    position: "absolute",
    margin: "auto",
    top: "5%",
    right: "5%",
    width: "100%",
    fontFamily: "Major Mono Display",
    fontSize: "100px",
    textDecoration: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "10vw",
    },
  },
  imageOne: {
    width: "100%",
    height: "92.8%",
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
