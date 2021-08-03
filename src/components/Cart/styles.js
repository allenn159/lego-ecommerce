import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    marginTop: "95px",
    display: "flex",
    justifyContent: "center",
    margin: "0 25px",
  },
  button: {},
  paper: {
    display: "flex",
    justifyContent: "center",
  },
  lineItems: {
    display: "flex",
    alignItems: "center",
    margin: " 0 0 25px 200px",
    padding: "25px 0",
    fontFamily: "Poppins",
  },
  textField: {},
  emptyCart: {
    marginTop: "300px",
    display: "flex",
    justifyContent: "center",
    margin: "0 25px",
    fontFamily: "Poppins",
    fontSize: "40px",
  },
}));
