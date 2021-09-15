import { combineReducers } from "redux";
import AppState from "./AppState";
import { CartReducer } from "./cartReducer";
import { foodtypesReducer } from "./foodtypes";
import { productsListReducer } from "./productsList";

export const rootReducer = () =>
  combineReducers<AppState>({
    foodTypesInterface: foodtypesReducer,
    productDataInterface: productsListReducer,
    cartStateInterface: CartReducer,
  });
