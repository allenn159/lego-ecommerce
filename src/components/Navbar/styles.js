import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  toolbar: {
    display: "flex",
  },
  image: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    textDecoration: "none",
    height: "75px",
    paddingTop: "1px",
    marginLeft: "200px",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  button: {
    marginLeft: "32px",

    "&:hover": {
      borderBottom: "3px solid",
      color: "#EEEEEE",
      paddingTop: "3px",
    },
  },
  menu: {
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  cart: {
    flexGrow: 2,
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "200px",
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
  dropdown: {
    marginTop: "15px",
  },
}));
