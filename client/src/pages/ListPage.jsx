import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ListPage = () => {
  const { id } = useParams();
  const [ListData, setListData] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // avoid firing request if id is undefined

    const fetchList = async () => {
      try {
        setLoading(true); // move this up to ensure visible loading
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/list/${id}`,
          {
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setListData(response.data.list);
        }
      } catch (error) {
        console.error("Failed to fetch list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [id]);

  return (
    <>
      {Loading ? (
        <div>Loading...</div>
      ) : (
        <section className="bg-sidebar-background dark:bg-green-900 text-black dark:text-white lg:rounded-4xl py-16 px-8 lg:p-6 transition-all duration-300 h-screen lg:h-full">
          <div className="head flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full ${ListData.color}`}></div>
            <h2 className="text-3xl font-extrabold">{ListData.title}</h2>
          </div>

          <div className="taskList mt-5 h-4/5 overflow-y-auto">
            {ListData.todos.length < 1 ? (
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
            ) : (
              ListData.todos.map((todo) => (
                <div
                  key={todo._id}
                  className="tasks flex items-center justify-between h-12 border-b border-black dark:border-white"
                >
                  <div className="flex items-center gap-5">
                    <input
                      type="checkbox"
                      id={`todo-${todo._id}`}
                      checked={todo.completed}
                      className="peer hidden"
                    />
                    <label
                      htmlFor={`todo-${todo._id}`}
                      className="cursor-pointer w-5 h-5 border border-black dark:border-white rounded-sm peer-checked:bg-green-400 flex items-center justify-center"
                    ></label>
                    <p className="peer-checked:line-through dark:text-gray-300">
                      {todo.title}
                    </p>
                  </div>

                  <div className="btns flex items-center gap-1">
                    <button className="bg-btn px-10 py-2 rounded-sm cursor-pointer hover:bg-btn/60 transition-all duration-300 text-white">
                      Edit
                    </button>
                    <button className="bg-btn px-10 py-2 rounded-sm cursor-pointer hover:bg-btn/60 transition-all duration-300 text-white">
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ListPage;
