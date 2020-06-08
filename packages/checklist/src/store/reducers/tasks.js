import produce from "immer";
import TaskActions from "../actions/tasks";

const initialState = {
  tasksInitialized: false,
};

const reducer = produce((state = initialState, action) => {
  switch (action.type) {
    case TaskActions.SET_ATTRIBUTE:
      state[action.key] = action.value;
      break;
    case TaskActions.PUSH_ATTRIBUTE:
      state[action.key].push(action.value).flat();
      break;
    case TaskActions.RESET_ALL:
      state = initialState;
      break;
    default:
  }
  return state;
});

export default reducer;
