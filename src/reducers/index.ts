import { combineReducers } from "redux";
import { pageText } from "./pageText";
import { userLanguage } from "./userLanguage";

const allReducers = combineReducers({ userLanguage, pageText });

export default allReducers;
