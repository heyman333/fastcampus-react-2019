import { ADD_TODO, COMPLETE_TODO } from "../actions";

export default function todos(previousState, action) {
  if (previousState === undefined) {
    return [];
  }
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, completed: false }];
  }
  if (action.type === COMPLETE_TODO) {
    const newState = [];
    for (let i = 0; i < previousState.length; i++) {
      newState.push(
        i === action.index
          ? { ...previousState[i], completed: true }
          : { ...previousState[i] }
      );
    }
    return newState;
  }
  return previousState;
}
