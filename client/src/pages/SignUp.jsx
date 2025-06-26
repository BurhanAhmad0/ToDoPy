import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser, Loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      alert("All fields are required");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        data,
        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );
      if (response) {
        setUser(response.data.user);
        navigate(`/${response.data.user.firstName.toLowerCase()}`); // Redirect to user's home page
        toast.success("Sign up successful!");
      }
    } catch (error) {
      console.error("Failed to sign up:", error);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <section className="signup">
      <h2 className="text-3xl font-extrabold">Sign up</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="border outline-none p-1 px-4 h-10 rounded-md mt-5 w-full focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all"
          type="text"
          placeholder="First Name"
          name="firstName"
          required
        />
        <input
          className="border outline-none p-1 px-4 h-10 rounded-md mt-5 w-full focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all"
          type="text"
          placeholder="Last Name"
          name="lastName"
          required
        />
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
        <input
          className="border outline-none p-1 px-4 h-10 rounded-md mt-5 w-full focus:ring-offset-0 focus:ring-2 focus:ring-green-400 transition-all"
          type="password"
          placeholder="**************"
          name="confirmPassword"
          required
        />
        <button
          type="submit"
          className="bg-btn dark:text-black w-full py-2 rounded-lg mt-5 hover:bg-btn/80 cursor-pointer transition-all duration-300"
        >
          Sign up
        </button>
      </form>

      <p className="mt-5">
        Aleady have an account?{" "}
        <Link className="underline text-btn" to="/login">
          Login
        </Link>
      </p>
    </section>
  );
};

export default SignUp;
