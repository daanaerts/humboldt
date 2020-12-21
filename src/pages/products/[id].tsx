import React from "react";
import Box from "@material-ui/core/Box";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import NavBar from "../../lib/Navbar";
import { Product, getProducts, getProduct } from "../../lib/graphcms";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

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
  console.log("GET STATIC PROPS")
  if (!params || !params.id || typeof params.id !== "string") {
    return {
      notFound: true,
    };
  }
  const product = await getProduct(params.id);
  return { props: product };
};

export default function ProductPage({ product }: ProductProps) {
  const router = useRouter();
  console.log("1");
  console.log(product);
  console.log("hi");
  if (!router.isFallback && !product?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <React.Fragment>
      <NavBar />
      <Box>
        <h1>product</h1>
        <h4>{product.title}</h4>
      </Box>
    </React.Fragment>
  );
}
