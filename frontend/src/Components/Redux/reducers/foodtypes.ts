import { Reducer } from "redux";

export interface FoodtypesInterface {
  foodtypes: string[];
}

const InitialState: FoodtypesInterface = {
  foodtypes: [],
};

export const foodtypesReducer: Reducer<FoodtypesInterface> = (
  state = InitialState,
  action
) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return {
        foodtypes: action.payload,
      };
    default:
      return state;
  }
};
