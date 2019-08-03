import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

const todoApp = combineReducers({
  todos,
  filter,
});

export default todoApp;
