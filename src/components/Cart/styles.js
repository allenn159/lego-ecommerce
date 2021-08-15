import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    margin: "95px 25px",
  },
  paper: {
    position: "relative",
  },
  lineItems: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    padding: "20px 0",
    fontFamily: "Poppins",
    [theme.breakpoints.down(1100)]: {
      display: "block",
      textAlign: "center",
    },
  },
  buttonContainer: {
    display: "flex",
    position: "absolute",
    right: 0,
    [theme.breakpoints.down(1100)]: {
      position: "revert",
      justifyContent: "center",
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "revert",
      justifyContent: "center",
      marginLeft: "10px",
      flexWrap: "wrap",
    },
  },
  image: {
    width: "250px",
    marginLeft: "200px",
    marginRight: "100px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "25px",
      marginRight: "75px",
    },
    [theme.breakpoints.down(1100)]: {
      width: "500px",
      margin: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      margin: 0,
    },
  },
  productName: {
    width: "250px",
    fontSize: "18px",
    [theme.breakpoints.down(1100)]: {
      width: "100%",
      fontSize: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      fontSize: "25px",
    },
  },
  quantityInput: {
    width: "100px",
    marginRight: "25px",

    [theme.breakpoints.down("xs")]: {
      width: "125px",
      marginLeft: "80px",
    },
  },
  renewButton: { marginRight: "25px" },
  itemTotal: {
    width: "150px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "70px",
    },
  },
  removeButton: {
    color: "#ff1744",
    marginRight: "30px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "15px",
    },
  },
  emptyCart: {
    marginTop: "300px",
    display: "flex",
    justifyContent: "center",
    margin: "0 25px",
    fontFamily: "Poppins",
    fontSize: "40px",
  },
}));
