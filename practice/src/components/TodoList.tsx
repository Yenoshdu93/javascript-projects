import React, { useState } from "react";
import { useTodo } from "../context";

const TodoList = ({ todo }) => {
  console.log(todo.completed);
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { toggleTodo, deletedTodo, updateTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleHandler = () => {
    toggleTodo(todo.id);
  };
  return (
    <>
      <div className="w-full max-w-xl bg-white h-10 rounded-md">
        <div className="w-full h-full flex items-center justify-between px-2">
          <div className="flex space-x-4">
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleHandler}
            />
            <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
            />
          </div>
          <div>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                if (todo.completed) return;

                if (isTodoEditable) {
                  editTodo();
                } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
            >
              {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deletedTodo(todo.id)}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoList;
