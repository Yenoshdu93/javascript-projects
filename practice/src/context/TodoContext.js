import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Yenosh",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  deletedTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
