import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MainSearch from "./MainSearch";
import Box from "@material-ui/core/Box";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
  searchWrapper: {
    flexGrow: 1,
    padding: "0 20px",
    display: "flex",
    justifyContent: "center",
  },
  searchWrapperInner: {
    width: "100%",
    maxWidth: 500,
  },
  mobileSearch: {
    padding: theme.spacing(1),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Box className={classes.searchWrapper}>
            <Box
              className={classes.searchWrapperInner}
              display={{ xs: "none", sm: "block" }}
            >
              <MainSearch />
            </Box>
          </Box>
          <Link href="/login">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        display={{ xs: "block", sm: "none" }}
        className={classes.mobileSearch}
      >
        <MainSearch />
      </Box>
    </div>
  );
}
