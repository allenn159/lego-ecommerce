import { makeStyles, alpha } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  image: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    textDecoration: "none",
    height: "75px",
    paddingTop: "1px",
  },
}));
