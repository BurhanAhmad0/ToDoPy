import React from "react";
import { useApp } from "../context/AppContext.jsx";

import BtnLoader from "../components/BtnLoader.jsx";

const UpdateTaskInput = ({
  handleChange,
  handleSubmit,
  setEditingTodoValue,
}) => {
  const { todoInput, LoadingAddRequest } = useApp();

  return (
    <>
      <div className="taskInput relative">
        <div className="flex items-center justify-between px-2 py-2 mt-3 border border-black dark:border-white rounded-lg w-full bg-white dark:bg-green-800">
          <input
            className="w-full outline-none bg-transparent dark:text-white"
            onChange={(e) => {
              handleChange(e);
              setEditingTodoValue(e.target.value);
            }}
            value={todoInput}
          />
          <button
            onClick={handleSubmit}
            className="bg-btn px-10 py-2 rounded-sm text-white cursor-pointer hover:bg-btn/60 transition-all duration-300"
          >
            {!LoadingAddRequest ? "Save" : <BtnLoader />}
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateTaskInput;
