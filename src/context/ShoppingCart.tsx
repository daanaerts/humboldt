import React, { PropsWithChildren, useReducer } from "react";
import { Context } from "vm";
import { Product } from "../lib/graphcms";

interface ShoppingCartContextProps {
  products: Product[];
}

const initialState: ShoppingCartContextProps = {
  products: [],
};

export const ShoppingCart = React.createContext<{
  state: ShoppingCartContextProps;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => {} });

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

interface Action {
  type: typeof ADD_PRODUCT | typeof REMOVE_PRODUCT;
  payload: Product;
}

function shoppingCartReducer(state: ShoppingCartContextProps, action: Action) {
  console.log("REDUCE", action);
  switch (action.type) {
    case "ADD_PRODUCT": {
      state.products.push(action.payload);
      return { ...state };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

export function ShoppingCartProvider(props: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(shoppingCartReducer, initialState);
  return <ShoppingCart.Provider value={{ state, dispatch }} {...props} />;
}
