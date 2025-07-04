import React from "react";

import BtnLoader from "./BtnLoader";

const LoginFormComponent = ({ handleSubmit, LoginRequestLoading }) => {
  return (
    <>
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
        <button
          disabled={LoginRequestLoading}
          className={`${
            LoginRequestLoading ? "bg-btn/80" : "bg-btn"
          } dark:text-black w-full py-2 rounded-lg mt-5 hover:bg-btn/80 cursor-pointer transition-all duration-300 flex items-center justify-center`}
        >
          {LoginRequestLoading ? <BtnLoader /> : "Login"}
        </button>
      </form>
    </>
  );
};

export default LoginFormComponent;
