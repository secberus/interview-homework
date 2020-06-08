const TaskActions = {
  SET_ATTRIBUTE: "TASKS_SET_ATTRIBUTE",
  PUSH_ATTRIBUTE: "TASKS_PUSH_ATTRIBUTE",
  RESET_ALL: "TASKS_RESET_ALL",
};

export const InitializeTasks = () => (dispatch) =>
  dispatch({
    type: TaskActions.SET_ATTRIBUTE,
    key: "tasksInitialized",
    value: true,
  });

export default TaskActions;
