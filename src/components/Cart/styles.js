import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    margin: "85px 25px",
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
  inputContainer: {
    display: "flex",
    position: "absolute",
    right: 40,
    [theme.breakpoints.down(1100)]: {
      position: "revert",
      justifyContent: "center",
      marginLeft: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "10px",
    },
    [theme.breakpoints.down(500)]: {
      flexWrap: "wrap",
    },
  },
  inputContainer2: {
    display: "flex",
    [theme.breakpoints.down(400)]: {
      alignItems: "center",
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
    [theme.breakpoints.down(400)]: {
      width: "200px",
      margin: 0,
    },
  },
  productName: {
    width: "250px",
    fontSize: "18px",
    [theme.breakpoints.down(1100)]: {
      width: "100%",
      fontSize: "30px",
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
      marginLeft: "25px",
    },
    [theme.breakpoints.down("400")]: {
      width: "125px",
    },
  },
  renewButton: { marginRight: "10px" },
  itemTotal: {
    width: "125px",
    [theme.breakpoints.down("xs")]: {
      width: "100px",
    },
    [theme.breakpoints.down(400)]: {
      width: "130px",
    },
  },
  removeButton: {
    color: "#ff1744",
  },
  cartTotal: {
    position: "absolute",
    right: 0,
    marginTop: "65px",
    fontFamily: "Poppins",
  },
  emptyCart: {
    marginTop: "300px",
    display: "flex",
    justifyContent: "center",
    margin: "0 25px",
    fontFamily: "Poppins",
    fontSize: "40px",
    textAlign: "center",
  },
}));
