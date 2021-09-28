import { ProductInterface } from "../../Interfaces/products.interface";

export const cartAction = (
  id: string,
  sum: number,
  product: ProductInterface
) => {
  return {
    type: "ADD_NEW_PRODUCT",
    payload: id,
    sum: sum,
    product: product,
  };
};

export const ProductPlusOneAction = (id: string, sum: number) => {
  return {
    type: "PRODUCT_PLUS_ONE",
    id: id,
    sum: sum,
  };
};

export const ProductMinusOneAction = (id: string, sum: number) => {
  return {
    type: "PRODUCT_MINUS_ONE",
    id: id,
    sum: sum,
  };
};

export const RemoveCartAction = (id: number, sum: number, amount: number) => {
  return {
    type: "REMOVE_PRODUCT",
    id: id,
    minusSum: sum,
    minusAmount: amount,
  };
};
