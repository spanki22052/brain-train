import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import AppState from "./reducers/AppState";
import { combineReducers } from "redux";
import { foodtypesReducer } from "./reducers/foodtypes";
import { productsListReducer } from "./reducers/productsList";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { CartReducer } from "./reducers/cartReducer";

const rootReducer = combineReducers<AppState>({
  foodTypesInterface: foodtypesReducer,
  productDataInterface: productsListReducer,
  cartStateInterface: CartReducer,
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default function configureStore(): Store<AppState, AnyAction> {
  return createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware())
  );
}
