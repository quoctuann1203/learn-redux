const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterReducer = (state = initialState, action) => {
  console.log({ state, action });

  /*
   {
    type: "todoList/addTodo",
    payload: {
      id: 4,
      name: "Task 4",
      priority: "Medium",
      completed: true,
      },  
    }
  */
  switch (action.type) {
    case "filter/searchTodo":
      return {
        ...state,
        search: action.payload,
      };
    case "filter/changeStatus":
      return {
        ...state,
        status: action.payload,
      };
    case "filter/filterPriority":
      return {
        ...state,
        priorities: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
