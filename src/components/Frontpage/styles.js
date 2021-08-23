import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "85px",
    textAlign: "center",
  },
  imageOne: {
    width: "99%",
    height: "93.8%",
    [theme.breakpoints.down("md")]: {
      height: "98.5%",
    },
  },
  imageOneText: {
    position: "absolute",
    margin: "auto",
    top: "5%",
    right: "5%",
    width: "90%",
    fontFamily: "Major Mono Display",
    fontSize: "7vw",
    textDecoration: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "15vw",
    },
  },
  imageTwo: {
    width: "99%",
  },
  imageTwoText: {
    position: "absolute",
    margin: "auto",
    top: "5%",
    left: "40%",
    width: "60%",
    fontFamily: "Klee One",
    fontSize: "2vw",
    textDecoration: "none",
    color: "black",
    [theme.breakpoints.down("md")]: {
      fontSize: "4vw",
    },
  },
  imageTwoButton: {
    position: "absolute",
    margin: "auto",
    top: "30%",
    right: "15%",
    width: "15%",
    fontFamily: "Klee One",
    fontSize: "25px",
    textDecoration: "none",
    backgroundColor: "#00a152",
    color: "white",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "black",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2vw",
    },
  },
  imageThree: {
    width: "99%",
    transform: "scaleX(-1)",
  },
  imageThreeText: {
    position: "absolute",
    margin: "auto",
    top: "10%",
    left: "10%",
    width: "25%",
    fontFamily: "Orbitron",
    fontSize: "2vw",
    textDecoration: "none",
    color: "#ffeb3b",
    [theme.breakpoints.down("md")]: {
      fontSize: "4vw",
    },
  },
  imageThreeButton: {
    position: "absolute",
    margin: "auto",
    bottom: "15%",
    left: "15%",
    width: "15%",
    fontFamily: "Orbitron",
    fontSize: "25px",
    textDecoration: "none",
    backgroundColor: "#e91e63",
    color: "black",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "white",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2vw",
    },
  },
  promoImages: {
    borderRadius: "5%",
  },
}));
