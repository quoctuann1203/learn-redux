const initialState = [
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
];

const todoListReducer = (state = initialState, action) => {
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
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
