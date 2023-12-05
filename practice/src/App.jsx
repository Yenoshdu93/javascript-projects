import React, { useEffect, useState } from "react";
import { TodoForm, TodoList } from "./components";
import { TodoProvider } from "./context";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((pre) => [...pre, { id: Date.now(), ...todo }]);
  };
  const deletedTodo = (id) => {
    setTodos((pre) => pre.filter((preTodo) => preTodo.id !== id));
  };
  const updateTodo = (id, todo) => {
    setTodos((pre) =>
      pre.map((preTodo) => (preTodo.id === todo.id ? todo : preTodo))
    );
  };
  const toggleTodo = (id) => {
    setTodos((pre) =>
      pre.map((preTodo) =>
        preTodo.id === id
          ? { ...preTodo, completed: !preTodo.completed }
          : preTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, deletedTodo, updateTodo, toggleTodo }}
      >
        <div className="w-full h-screen bg-green-200">
          <div className="w-full h-[10rem] flex flex-col items-center justify-center space-y-4">
            {/* form */}
            <TodoForm />
          </div>
          <div className="w-full min-h-[2rem] flex flex-col items-center justify-center space-y-4">
            {/* list of todos */}
            {todos.map((todo) => (
              <TodoList key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </TodoProvider>
    </>
  );
};
export default App;
