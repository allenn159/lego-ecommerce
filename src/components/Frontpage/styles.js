import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "95px",
    textAlign: "center",
  },

  imageOne: {
    width: "99%",
    [theme.breakpoints.down(1100)]: {
      height: "auto",
      width: "95vw",
    },
  },
  imageTwo: {
    width: "100%",
    [theme.breakpoints.down(1100)]: {
      height: "auto",
      width: "95vw",
    },
  },
  imageThree: {
    width: "100%",
    [theme.breakpoints.down(1100)]: {
      height: "auto",
      width: "95vw",
    },
  },
  categoryText: {
    fontFamily: "Poppins",
    fontSize: "35px",
    marginTop: "30px",
    textDecoration: "underline",
    textUnderlinePosition: "under",
    textAlign: "center",
  },
}));
