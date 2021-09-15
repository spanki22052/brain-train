import { Reducer } from "redux";

interface ProductInfo {
  id: number;
  amount: number;
}

export interface CartStateInterface {
  amount: number;
  productsSum: number;
  productInfo: ProductInfo[];
}

const initialState: CartStateInterface = {
  amount: 0,
  productsSum: 0,
  productInfo: [],
};

export const CartReducer: Reducer<CartStateInterface> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      var newList = [...state.productInfo];

      const isProductInCart = state.productInfo
        .map((el, index) => {
          if (el.id === action.payload) {
            return index;
          }
        })
        .filter((el) => el !== undefined);

      if (isProductInCart[0] !== undefined) {
        const spliceIndex: number = isProductInCart[0];

        newList.splice(spliceIndex, 1);

        newList.push({
          id: action.payload,
          amount: state.productInfo[spliceIndex].amount + 1,
        });
      } else {
        newList.push({
          id: action.payload,
          amount: 1,
        });
      }

      return {
        amount: state.amount + 1,
        productInfo: newList,
        productsSum: state.productsSum + action.sum,
      };

    case "PRODUCT_PLUS_ONE":
      var newList = [...state.productInfo];
      var newAmount = newList[action.payload];
      newAmount["amount"] = newAmount.amount + 1;

      var newProductsList = newList.map((el, index) => {
        return index === action.payload ? newAmount : el;
      });

      return {
        amount: state.amount + 1,
        productInfo: newProductsList,
        productsSum: state.productsSum + action.sum,
      };

    case "PRODUCT_MINUS_ONE":
      var newMinusList = [...state.productInfo];

      if (newMinusList[action.payload].amount > 1) {
        var newMinusAmount = newMinusList[action.payload];
        newMinusAmount["amount"] = newMinusAmount.amount - 1;

        newMinusList = newMinusList.map((el, index) => {
          return index === action.payload ? newMinusAmount : el;
        });

        return {
          amount: state.amount - 1,
          productInfo: newMinusList,
          productsSum: state.productsSum - action.sum,
        };
      } else {
        return state;
      }

    case "REMOVE_PRODUCT":
      var newRemoveList = [...state.productInfo];
      newRemoveList.splice(action.id, 1);

      return {
        ...state,
        productInfo: newRemoveList,
        productsSum: state.productsSum - action.minusSum,
      };

    default:
      return state;
  }
};
