import React from "react";

import BtnLoader from "../components/BtnLoader.jsx";

const SignupFormComponent = ({ handleSubmit, LoadingSignupRequest }) => {
  return (
    <>
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
          disabled={LoadingSignupRequest}
          type="submit"
          className={`${
            LoadingSignupRequest ? "bg-btn/80" : "bg-btn"
          } dark:text-black w-full py-2 rounded-lg mt-5 hover:bg-btn/80 cursor-pointer transition-all duration-300 flex items-center justify-center`}
        >
          {LoadingSignupRequest ? <BtnLoader /> : "Sign up"}
        </button>
      </form>
    </>
  );
};

export default SignupFormComponent;
