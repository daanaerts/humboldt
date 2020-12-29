import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MainSearch from "./MainSearch";
import Box from "@material-ui/core/Box";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "transparent",
    color: theme.palette.text.primary,
  },
  logo: {
    padding: 5,
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Image
            src="/images/v0_black.png"
            alt="Logo"
            height={50}
            width={50 * 1.62}
            className={classes.logo}
          />
          <Box className={classes.searchWrapper}>
            <Box
              className={classes.searchWrapperInner}
              display={{ xs: "none", sm: "block" }}
            >
              <MainSearch />
            </Box>
          </Box>
          <ShoppingCart />
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
