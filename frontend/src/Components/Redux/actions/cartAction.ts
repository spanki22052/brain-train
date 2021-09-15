export const cartAction = (id: number, sum: number) => {
  return {
    type: "ADD_NEW_PRODUCT",
    payload: id,
    sum: sum,
  };
};

export const ProductPlusOneAction = (id: number, sum: number) => {
  return {
    type: "PRODUCT_PLUS_ONE",
    payload: id,
    sum: sum,
  };
};

export const ProductMinusOneAction = (id: number, sum: number) => {
  return {
    type: "PRODUCT_MINUS_ONE",
    payload: id,
    sum: sum,
  };
};

export const RemoveCartAction = (id: number, sum: number) => {
  console.log(id);
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
    minusSum: sum,
  };
};
