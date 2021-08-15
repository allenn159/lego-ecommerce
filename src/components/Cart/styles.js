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
    },
  },
  image: {
    width: "300px",
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
  },
  productName: {
    width: "250px",
  },
  quantityInput: {
    width: "75px",
    marginRight: "25px",
  },
  renewButton: { marginRight: "25px" },
  itemTotal: { width: "100px", marginRight: "40px" },
  removeButton: {
    color: "#ff1744",
    marginRight: "35px",
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
