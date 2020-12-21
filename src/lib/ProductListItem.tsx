import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Product } from "../lib/graphcms";

interface ProductListItemProps {
  product: Product;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Products({ product }: ProductListItemProps) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4}>
      <Link href={`/products/${product.id}`}>
        <Paper className={classes.paper}>
          {product.title} {product.price}
        </Paper>
      </Link>
    </Grid>
  );
}
