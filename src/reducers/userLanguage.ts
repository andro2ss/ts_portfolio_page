export const userLanguage = (state = 99, action: any) => {
  switch (action.type) {
    case "SetUserLang":
      return action.payload;
    default:
      return state;
  }
};

export interface userLang {
  userLanguage: number;
}

export const setUserLanguage = (value: number) => {
  return {
    type: "SetUserLang",
    payload: value,
  };
};
