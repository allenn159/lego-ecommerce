import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    margin: "95px 25px",
  },
  lineItems: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    fontFamily: "Poppins",
  },
  image: {
    marginLeft: "200px",
    marginRight: "100px",
  },
  productName: { width: "200px", marginRight: "600px" },
  quantityInput: {
    width: "100px",
    marginRight: "25px",
  },
  renewButton: {
    fontSize: "30px",
    color: "#00a152",
  },
  itemTotal: { width: "100px", marginLeft: "25px", marginRight: "150px" },
  emptyCart: {
    marginTop: "300px",
    display: "flex",
    justifyContent: "center",
    margin: "0 25px",
    fontFamily: "Poppins",
    fontSize: "40px",
  },
}));
