import { ProductInterface } from "../../Interfaces/products.interface";

export const updateProductsAction = (payload: ProductInterface[]) => {
  return {
    type: "UPDATE_PRODUCTS_DATA",
    payload: payload,
  };
};
