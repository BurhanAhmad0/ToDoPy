import React, { useState } from "react";
import { useApp } from "../context/AppContext.jsx";

import MainTaskList from "../components/MainTaskList.jsx";
import PaginationControls from "../components/PaginationControls.jsx";
import AddTaskInput from "../components/AddTaskInput.jsx";
import UpdateTaskInput from "../components/UpdateTaskInput.jsx";

const Tasks = () => {
  const {
    Todos,
    addTodo,
    loading,
    updateTodo,
    updateTodoStatus,
    deleteTodo,
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
          <AddTaskInput handleChange={handleChange} />
        ) : (
          <UpdateTaskInput
            handleChange={handleChange}
            setEditingTodoValue={setEditingTodoValue}
            handleSubmit={handleSubmit}
          />
        )}

        <MainTaskList
          Todos={Todos}
          loading={loading}
          updateTodoStatus={updateTodoStatus}
          handleEdit={handleEdit}
          deleteTodo={deleteTodo}
        />

        <PaginationControls />
      </div>
    </section>
  );
};

export default Tasks;
