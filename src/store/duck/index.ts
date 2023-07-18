import * as userDuck from "./user";
import * as taskDuck from "./task";
import * as columnDuck from "./column";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

export const selectors = {
  user: userDuck.selectors,
  column: columnDuck.selectors,
  task: taskDuck.selectors,
};

export const actions = {
  user: userDuck.actions,
  column: columnDuck.actions,
  task: taskDuck.actions,
};
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userDuck.userSlice.reducer,
  task: taskDuck.taskSlice.reducer,
  column: columnDuck.columnSlice.reducer,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);
