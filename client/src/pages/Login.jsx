import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LoginFormComponent from "../components/LoginFormComponent.jsx";

const Login = () => {
  const [LoginRequestLoading, setLoginRequestLoading] = useState(false);

  const navigate = useNavigate();
  const { user, setUser, Loading } = useAuth();

  const handleSubmit = async (e) => {
    setLoginRequestLoading(true);
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
        setLoginRequestLoading(false);
        setUser(response.data.user);
        navigate(`/${response.data.user.firstName.toLowerCase()}`); // Redirect to user's home page
        toast.success("Login successful!");
      }
    } catch (error) {
      setLoginRequestLoading(false);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <section className="login">
      <h1 className="text-3xl font-extrabold">Login</h1>

      <LoginFormComponent
        handleSubmit={handleSubmit}
        LoginRequestLoading={LoginRequestLoading}
      />

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
