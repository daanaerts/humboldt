import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import NavBar from "../lib/Navbar";
import Products, { Product } from "../lib/Products";
import { getProducts } from "../lib/graphcms";
import { GetStaticProps } from "next";

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="md">
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Products
          </Typography>
        </Box>

        <Products products={products} />
      </Container>
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProducts();
  console.log("data",data)
  return {
    props: {
      products: data,
    },
  };
};
