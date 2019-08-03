import { createStore } from "redux";
import todoApp from "./reducers";
import { addTodo, completeTodo } from "./actions";

const store = createStore(todoApp);
console.log("store", store);

store.subscribe(() => {
  console.log("store", store.getState());
});

store.dispatch(addTodo("안녕하세요"));
store.dispatch(addTodo("Ni Hao!"));

store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));

export default store;
