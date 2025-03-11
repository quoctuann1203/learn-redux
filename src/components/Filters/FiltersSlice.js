import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchTodo: (state, action) => {
      state.search = action.payload;
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    filterPriority: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
