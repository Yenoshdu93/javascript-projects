import { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [inpuVal, setInputVal] = useState("");
  const { addTodo } = useTodo();

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (!inpuVal) return;

    addTodo({ todo: inpuVal, completed: false });
    setInputVal("");
  };
  return (
    <div className="w-full max-w-xl bg-gray-200 p-10 rounded-md">
      <div className="width-full flex flex-col">
        {/* formdata */}
        <form onSubmit={onsubmitHandler} className="w-full h-10 flex space-x-2">
          <input
            type="text"
            placeholder="What todo?"
            value={inpuVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="w-full h-full rounded-md outline-none px-2 text-sm"
          />
          <button
            type="submit"
            className="bg-green-400 rounded-md px-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-500"
          >
            ADD
          </button>
        </form>
        {/* add todo  */}
        <div className="w-full max-w-xl mx-auto"></div>
      </div>
    </div>
  );
};
export default TodoForm;
