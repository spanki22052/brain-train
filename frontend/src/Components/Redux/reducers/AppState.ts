import { ProductData } from "../../Interfaces/products.interface";
import { CartStateInterface } from "./cartReducer";
import { FoodtypesInterface } from "./foodtypes";

export default interface AppState {
  foodTypesInterface: FoodtypesInterface;
  productDataInterface: ProductData;
  cartStateInterface: CartStateInterface;
}
