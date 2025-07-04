import React from "react";
import { useApp } from "../context/AppContext.jsx";

import AddIcon from "../assets/icons/add.svg";

import BtnLoader from "../components/BtnLoader.jsx";

const AddTaskInput = ({ handleChange }) => {
  const { addTodo, todoInput, LoadingAddRequest } = useApp();

  return (
    <>
      <div className="taskInput relative">
        <input
          onChange={handleChange}
          value={todoInput}
          className="bg-white dark:bg-green-800 dark:text-white px-10 py-2 mt-3 border border-black dark:border-white rounded-lg w-full outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all duration-300"
          placeholder="Add new task"
          type="text"
          required
        />
        {!LoadingAddRequest ? (
          <img
            onClick={addTodo}
            className="absolute left-2 top-5 cursor-pointer dark:invert"
            loading="lazy"
            src={AddIcon}
            alt="Add Task Icon"
          />
        ) : (
          <BtnLoader />
        )}
      </div>
    </>
  );
};

export default AddTaskInput;
