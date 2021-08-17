import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  container: {
    marginTop: "95px",
    width: 650,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down(700)]: {
      width: 550,
    },
    [theme.breakpoints.down(600)]: {
      width: "auto",
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
