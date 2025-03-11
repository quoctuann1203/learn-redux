export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchTodo = (text) => {
  return {
    type: "filter/searchTodo",
    payload: text,
  };
};

export const changeStatus = (status) => {
  return {
    type: "filter/changeStatus",
    payload: status,
  };
};

export const filterPriority = (priorities) => {
  return {
    type: "filter/filterPriority",
    payload: priorities,
  };
};
