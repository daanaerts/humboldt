import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ProductListItem from "./ProductListItem";
import { Product } from "../lib/graphcms";

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </Grid>
  );
}
