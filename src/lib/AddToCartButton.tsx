import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { useContext } from "react";
import { ShoppingCart as ShoppingCartContext } from "../context/ShoppingCart";
import { Product } from "./graphcms";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(ShoppingCartContext);

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="primary"
      startIcon={<ShoppingCartOutlinedIcon />}
      onClick={() => dispatch({ type: "ADD_PRODUCT", payload: { product } })}
    >
      In Mijn Winkelwagen
    </Button>
  );
}
