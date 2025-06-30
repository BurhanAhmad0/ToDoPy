import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";
import AddIcon from "../assets/icons/add.svg";

const Tasks = () => {
  const {
    Todos,
    addTodo,
    loading,
    updateTodo,
    updateTodoStatus,
    deleteTodo,
    todoInput,
    setTodoInput,
  } = useApp();
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoValue, setEditingTodoValue] = useState(null);

  const handleChange = (e) => setTodoInput(e.target.value);

  const handleEdit = (todo) => {
    setEditingTodoId(todo._id);
    setEditingTodoValue(todo.title);
    setTodoInput(todo.title);
  };

  const handleSubmit = () => {
    if (editingTodoId) {
      updateTodo(editingTodoId, editingTodoValue);
      setEditingTodoId(null);
      setEditingTodoValue("");
    } else {
      addTodo();
    }
    setTodoInput("");
  };

  return (
    <section className="tasks h-screen py-14 px-3 lg:p-6 lg:h-full bg-sidebar-background dark:bg-green-900 text-black dark:text-white lg:rounded-4xl transition-all duration-300">
      <div className="head flex items-center gap-4">
        <h1 className="text-3xl font-extrabold">Tasks</h1>
        <div className="count w-12 h-6 rounded-full border border-black dark:border-white flex items-center justify-center">
          {Todos.length}
        </div>
      </div>

      <div className="tasks rounded-4xl border border-black dark:border-white mt-5 p-6 h-11/12">
        <h2 className="text-xl font-extrabold">Today</h2>

        {/* Input section */}
        {!editingTodoId ? (
          <div className="taskInput relative">
            <input
              onChange={handleChange}
              value={todoInput}
              className="bg-white dark:bg-green-800 dark:text-white px-10 py-2 mt-3 border border-black dark:border-white rounded-lg w-full outline-none focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all duration-300"
              placeholder="Add new task"
              type="text"
              required
            />
            <img
              onClick={addTodo}
              className="absolute left-2 top-5 cursor-pointer dark:invert"
              loading="lazy"
              src={AddIcon}
              alt="Add Task Icon"
            />
          </div>
        ) : (
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
                Save
              </button>
            </div>
          </div>
        )}

        {/* Task list */}
        <div className="taskList mt-5 h-4/5 overflow-y-auto noScrollbar">
          {Todos.length < 1 ? (
            <div className="flex justify-center items-center flex-col">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="30"
                  y="40"
                  width="140"
                  height="120"
                  rx="12"
                  fill="#E9F7EF"
                  stroke="#3BCA6F"
                  strokeWidth="3"
                />
                <line
                  x1="50"
                  y1="70"
                  x2="150"
                  y2="70"
                  stroke="#3BCA6F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="50"
                  y1="95"
                  x2="150"
                  y2="95"
                  stroke="#3BCA6F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="50"
                  y1="120"
                  x2="150"
                  y2="120"
                  stroke="#3BCA6F"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <text
                  x="100"
                  y="190"
                  fill="#3BCA6F"
                  fontSize="18"
                  fontFamily="Poppins, sans-serif"
                  textAnchor="middle"
                >
                  No Todos Found
                </text>
              </svg>
            </div>
          ) : loading ? (
            <div>Loading...</div>
          ) : (
            Todos.map((todo, index) => (
              <div
                key={index}
                className="tasks flex items-center justify-between h-12 border-b border-black dark:border-white"
              >
                <div className="flex items-center gap-5">
                  <input
                    type="checkbox"
                    id={`todo-${todo._id}`}
                    onChange={() => updateTodoStatus(todo._id, !todo.completed)}
                    checked={todo.completed}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={`todo-${todo._id}`}
                    className="cursor-pointer w-5 h-5 border border-black dark:border-white rounded-sm peer-checked:bg-green-400 flex items-center justify-center"
                  ></label>
                  <p className="peer-checked:line-through dark:text-gray-300 w-lg text-nowrap">
                    {todo.title}
                  </p>
                </div>

                <div className="btns flex items-center gap-1">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="bg-btn px-10 py-2 rounded-sm text-black cursor-pointer hover:bg-btn/60 transition-all duration-300 hidden sm:block"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="bg-btn px-10 py-2 rounded-sm text-black cursor-pointer hover:bg-btn/60 transition-all duration-300 hidden sm:block"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Tasks;
