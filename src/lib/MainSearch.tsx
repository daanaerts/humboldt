import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
  },
  form: {
    padding: "0px 4px",
    display: "flex",
    alignItems: "center",
  },
  field: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Inputs() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete="off" className={classes.form}>
        <InputBase
          fullWidth
          placeholder="Zoeken naar..."
          className={classes.field}
          inputProps={{ "aria-label": "description" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </form>
    </Paper>
  );
}
