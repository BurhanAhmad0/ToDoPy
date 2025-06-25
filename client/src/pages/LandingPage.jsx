import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const LandingPage = () => {
  const { user, Loading } = useAuth();
  const navigate = useNavigate();

  return (
    <section className="landingpage">
      <h2 className="text-5xl font-extrabold text-center">ToDoPy</h2>
      <p className="mt-5">
        Stay Organized, Get Things Done: Your Ultimate To-Do List App. <br /> A
        todo list app is a digital task management tool designed to help users
        organize and prioritize their daily activities and responsibilities.
      </p>
      {user && (
        <button
          onClick={() => navigate(`/${user?.firstName.toLowerCase()}`)}
          className="bg-btn w-full py-2 rounded-lg mt-5 hover:bg-btn/80 cursor-pointer transition-all duration-300"
        >
          Get Started
        </button>
      )}
      {!user && (
        <button
          onClick={() => navigate(`/signup`)}
          className="bg-btn dark:text-black w-full py-2 rounded-lg mt-5 hover:bg-btn/80 cursor-pointer transition-all duration-300"
        >
          Get Started
        </button>
      )}
      <p className="mt-3 text-center">
        Aleady have an account?{" "}
        <Link className="underline text-btn" to="/login">
          Login
        </Link>
      </p>
    </section>
  );
};

export default LandingPage;
