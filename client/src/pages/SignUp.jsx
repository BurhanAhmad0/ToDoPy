import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";
import SignupFormComponent from "../components/SignupFormComponent.jsx";

const SignUp = () => {
  const [LoadingSignupRequest, setLoadingSignupRequest] = useState(false);

  const navigate = useNavigate();
  const { user, setUser, Loading } = useAuth();

  const handleSubmit = async (e) => {
    setLoadingSignupRequest(true);
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
        setLoadingSignupRequest(false);
        setUser(response.data.user);
        navigate(`/${response.data.user.firstName.toLowerCase()}`); // Redirect to user's home page
        toast.success("Sign up successful!");
      }
    } catch (error) {
      setLoadingSignupRequest(false);
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <section className="signup">
      <h1 className="text-3xl font-extrabold">Sign up</h1>

      <SignupFormComponent
        handleSubmit={handleSubmit}
        LoadingSignupRequest={LoadingSignupRequest}
      />

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
