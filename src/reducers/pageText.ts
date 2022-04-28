export const pageText = (state: any = "", action: any) => {
  switch (action.type) {
    case "SetPageText":
      return action.payload;
    default:
      return state;
  }
};

export interface pageTextInterface {
  pageText: any;
}

export const setPageText = (value: any) => {
  return {
    type: "SetPageText",
    payload: value,
  };
};
