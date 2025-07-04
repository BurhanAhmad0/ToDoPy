import React from "react";
import SekeletonTaskList from "./SekeletonTaskList";

const MainTaskList = ({
  Todos,
  loading,
  updateTodoStatus,
  handleEdit,
  deleteTodo,
}) => {
  return (
    <>
      {/* Task list */}
      <div className="taskList mt-5 h-9/12 overflow-y-auto noScrollbar">
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
          <SekeletonTaskList />
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
    </>
  );
};

export default MainTaskList;
