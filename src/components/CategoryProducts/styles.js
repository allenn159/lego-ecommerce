import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    marginTop: "85px",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#2196f3",
    },
  },
  paper: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    padding: "15px",
    height: "400px",
    maxWidth: "100vw",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "90vw",
    },
  },
  productLabel: {
    fontFamily: "Poppins",
    margin: "20px 0",
    textAlign: "center",
    fontSize: "20px",
    color: "black",
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
  select: {
    textAlign: "center",
    width: "75px",
  },
}));
