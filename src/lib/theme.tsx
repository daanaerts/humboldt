import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { Shadows } from "@material-ui/core/styles/shadows";

const theme = createMuiTheme({
  shadows: Array(25).fill("none") as Shadows,
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  props: {
    MuiAppBar: {},
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export default theme;
