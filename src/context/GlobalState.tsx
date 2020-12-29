import React, { PropsWithChildren, useContext } from "react";
import { ShoppingCartProvider } from "./ShoppingCart";

export default function GlobalState(props: PropsWithChildren<{}>) {
  return <ShoppingCartProvider {...props} />;
}
