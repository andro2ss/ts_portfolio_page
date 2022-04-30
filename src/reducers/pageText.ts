import { WebsiteContent } from "../models/WebsiteContent";

export const pageText = (state: any = "", action: any) => {
  switch (action.type) {
    case "SetPageText":
      return action.payload;
    default:
      return state;
  }
};

export interface pageTextInterface {
  pageText: WebsiteContent[];
}

export const setPageText = (value: any) => {
  return {
    type: "SetPageText",
    payload: value,
  };
};
