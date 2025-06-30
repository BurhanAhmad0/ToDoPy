import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Home = () => {
  const navigate = useNavigate();
  const { user, Loading } = useAuth();

  return (
    <section className="home bg-sidebar-background dark:bg-green-900 text-black dark:text-white w-full h-full xsm:h-screen lg:h-full lg:rounded-4xl flex flex-col items-center justify-center py-16 lg:py-10 px-8 lg:px-28 transition-all duration-300">
      <h1 className="text-5xl font-extrabold">Welcome to ToDoPy</h1>
      <p className="mt-10 text-gray-700 dark:text-gray-300 text-center max-w-3xl">
        A to-do app is a simple, user-friendly digital tool designed to help
        individuals and teams organize tasks and manage their daily activities
        efficiently. Users can create, edit, and prioritize tasks, set deadlines
        or reminders, categorize items, and track their progress, all within an
        intuitive and accessible interface. These apps are essential for
        improving productivity, reducing stress, and ensuring that important
        responsibilities are not forgotten.
      </p>
      <button
        onClick={() => navigate(`/${user?.firstName.toLowerCase()}/tasks`)}
        className="bg-btn hover:bg-btn/80 text-black py-2 w-52 rounded-lg mt-10 transition-all duration-300 cursor-pointer"
      >
        Go to tasks
      </button>
    </section>
  );
};

export default Home;
