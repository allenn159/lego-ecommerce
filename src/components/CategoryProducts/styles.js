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
  },
  loader: {
    marginTop: "350px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "200px",
    },
  },
}));
