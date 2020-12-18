import Box from "@material-ui/core/Box";

interface Product {
  title: string;
  price: number;
}

interface ProductListItemProps {
  product: Product;
}

export default function Products({ product }: ProductListItemProps) {
  return (
    <Box>
      {product.title} {product.price}
    </Box>
  );
}
