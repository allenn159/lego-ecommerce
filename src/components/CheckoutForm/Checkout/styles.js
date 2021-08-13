import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  container: {
    marginTop: "95px",
    width: "auto",
    margin: "0 300px",
    [theme.breakpoints.down(1500)]: {
      margin: "95 200px 0 200px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "200px",
      marginRight: "200px",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  stepper: {
    padding: theme.spacing(3, 0),
  },
}));
