export const userLanguage = (state = "PL", action: any) => {
  switch (action.type) {
    case "SetUserLang":
      return action.payload;
    default:
      return state;
  }
};

export interface userLang {
  userLanguage: string;
}

export const setUserLanguage = (value: userLang) => {
  return {
    type: "SetUserLang",
    payload: value,
  };
};
