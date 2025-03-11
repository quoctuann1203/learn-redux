import { createSelector } from "reselect";

export const searchTodoListSelector = (state) => state.filters.search;
export const changeStatusSelector = (state) => state.filters.status;
export const priorityFilterSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todoListRemendingSelector = createSelector(
  todoListSelector,
  changeStatusSelector,
  searchTodoListSelector,
  priorityFilterSelector,
  (todoList, status, searchTodo, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities?.length
          ? todo.name.includes(searchTodo) && priorities.includes(todo.priority)
          : todo.name.includes(searchTodo);
      }

      return (
        todo.name.includes(searchTodo) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length === 0 || priorities.includes(todo.priority))
      );
    });
  }
);
