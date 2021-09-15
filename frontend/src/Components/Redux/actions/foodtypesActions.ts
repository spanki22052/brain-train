export const updateDataAction = (foodtypes: string[]) => {
  return {
    type: "UPDATE_DATA",
    payload: foodtypes,
  };
};
