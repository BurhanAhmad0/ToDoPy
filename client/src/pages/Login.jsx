import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser, Loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.password) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        data,
        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );
      if (response) {
        console.log(response);
        setUser(response.data.user);
        navigate(`/${response.data.user.firstName.toLowerCase()}`); // Redirect to user's home page
        toast.success("Login successful!");
      }
    } catch (error) {
      console.error("Failed to login:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section className="login">
      <h2 className="text-3xl font-extrabold">Login</h2>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="border outline-none p-1 px-4 h-10 rounded-md mt-5 w-full focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all"
          type="email"
          placeholder="example@gmail.com"
          name="email"
          required
        />
        <input
          className="border outline-none p-1 px-4 h-10 rounded-md mt-5 w-full focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all"
          type="password"
          placeholder="**************"
          name="password"
          required
        />
        <button className="bg-btn dark:text-black w-full py-2 rounded-lg mt-5 hover:bg-btn/80 cursor-pointer transition-all duration-300">
          Login
        </button>
      </form>

      <p className="mt-5">
        Don't have have an account?{" "}
        <Link className="underline text-btn" to="/signup">
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default Login;
