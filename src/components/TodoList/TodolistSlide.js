import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Task 1",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      name: "Task 2",
      priority: "Low",
      completed: true,
    },
    {
      id: 3,
      name: "Task 3",
      priority: "Medium",
      completed: true,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    toggleTodoStatus: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});
