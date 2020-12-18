import React from "react";
import Box from "@material-ui/core/Box";
import ProductListItem from "./ProductListItem";

export interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <Box>
      Products
      {products.map((product) => (
        <ProductListItem product={product} key={product.id} />
      ))}
    </Box>
  );
}
