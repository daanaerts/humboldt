import React from "react";
import { GetStaticProps } from "next";
import { Box, Button, Container } from "@material-ui/core";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Image from "next/image";
import { Product, getProducts, getProduct } from "../../lib/graphcms";
import NavBar from "../../lib/Navbar";
import AddToCartButton from "../../lib/AddToCartButton";

interface ProductProps {
  product: Product;
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticPaths({}: Params) {
  const products = await getProducts();
  return {
    paths: products.map((product) => {
      return {
        params: { id: product.id },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<ProductProps> = async ({
  params,
}) => {
  if (!params || !params.id || typeof params.id !== "string") {
    return {
      notFound: true,
    };
  }
  const product = await getProduct(params.id);
  console.log("Built product page", product.title);
  return { props: { product } };
};

export default function ProductPage({ product }: ProductProps) {
  const router = useRouter();
  if (!router.isFallback && !product?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="md">
        <Box my={4}>
          <h1>product</h1>
          <h4>{product.title}</h4>
          <Image
            src={product.thumbnail.url}
            alt={product.title}
            width={300}
            height={300}
          />
          <AddToCartButton product={product} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
