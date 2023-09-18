"use client";

import { combineReducers } from "redux";
import menuReducer from "../menuReducer";
import cardReducer from "../cardReducer";

const appReducer = combineReducers({
  menu: menuReducer,
  card: cardReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
