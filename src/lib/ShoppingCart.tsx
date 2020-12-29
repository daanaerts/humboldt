import { makeStyles, withStyles } from "@material-ui/core/styles";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { ShoppingCart as ShoppingCartContext } from "../context/ShoppingCart";
import { useContext } from "react";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.primary}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  badge: {
    right: -3,
    top: 13,
    // border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function ShoppingCart() {
  const classes = useStyles();
  const { state, dispatch } = useContext(ShoppingCartContext);

  return (
    <IconButton color="inherit" aria-label="cart">
      <StyledBadge badgeContent={state.products?.length}>
        <ShoppingCartOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
}
