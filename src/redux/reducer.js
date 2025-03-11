import filterReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodolistSlide";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
