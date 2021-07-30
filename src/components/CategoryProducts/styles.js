import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    marginTop: "95px",
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: "400px",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "90vw",
    },
  },
  loader: {
    marginTop: "350px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "200px",
    },
  },
  productInfo: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      flexWrap: "wrap",
      width: "80vw",
    },
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  button: {
    marginLeft: "25px",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  productText: {
    marginLeft: "25px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
}));
