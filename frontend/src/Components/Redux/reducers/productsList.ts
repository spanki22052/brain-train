import { Reducer } from "redux";
import { ProductData } from "../../Interfaces/products.interface";

const initialState: ProductData = {
  showAll: [],
};

export const productsListReducer: Reducer<ProductData> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "UPDATE_PRODUCTS_DATA":
      return {
        showAll: action.payload,
      };
    default:
      return state;
  }
};
