import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    marginTop: "95px",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    border: "2px solid black",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "100%",
    },
  },
}));
