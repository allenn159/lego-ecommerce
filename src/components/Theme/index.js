import { createTheme } from "@material-ui/core";
import lightBlue from "@material-ui/core/colors/lightBlue";

const theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: {
      main: "#673ab7",
    },
  },
});

export default theme;
