import { Reducer } from "redux";
import { ProductInterface } from "../../Interfaces/products.interface";

export interface ProductInfo extends ProductInterface {
  amount: number;
}

export interface CartStateInterface {
  productInfo: ProductInfo[];
}

const initialState: CartStateInterface = {
  productInfo: [],
};

export const CartReducer: Reducer<CartStateInterface> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      var newList = [...state.productInfo];

      const isProductInCart = state.productInfo.findIndex(
        (el) => el.id === action.payload
      );

      if (isProductInCart !== -1) {
        const updateProduct = {
          id: action.payload,
          amount: state.productInfo[isProductInCart].amount + 1,
          ...action.product,
        };

        return {
          productInfo: Object.assign([], newList, {
            [isProductInCart]: updateProduct,
          }),
        };
      } else {
        newList.push({
          id: action.payload,
          amount: 1,
          ...action.product,
        });
      }

      return {
        productInfo: newList,
      };

    case "PRODUCT_PLUS_ONE":
      var newPlusList = [...state.productInfo];

      const productToPlus = newPlusList.findIndex((el) => el.id === action.id);

      const updatedPlus = {
        ...newPlusList[productToPlus],
        amount: newPlusList[productToPlus].amount + 1,
      };

      return {
        productInfo: Object.assign([], newPlusList, {
          [productToPlus]: updatedPlus,
        }),
      };

    case "PRODUCT_MINUS_ONE":
      const newMinusList = [...state.productInfo];

      const minusProductId = newMinusList.findIndex(
        (el) => el.id === action.id
      );

      if (newMinusList[minusProductId].amount === 1) return state;

      const updatedProduct = {
        ...newMinusList[minusProductId],
        amount: newMinusList[minusProductId].amount - 1,
      };

      return {
        productInfo: Object.assign([], newMinusList, {
          [minusProductId]: updatedProduct,
        }),
      };

    case "REMOVE_PRODUCT":
      var newRemoveList = [...state.productInfo];
      newRemoveList.splice(action.id, 1);

      return {
        ...state,
        productInfo: newRemoveList,
      };

    default:
      return state;
  }
};
