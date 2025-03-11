import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../components/Filters/FiltersSlice";
import { todoListSlice } from "../components/TodoList/TodolistSlide";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
