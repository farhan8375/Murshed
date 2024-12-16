import React, { lazy } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../../public/img/murshid-logo.svg"

const LoginForm = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/basicstep");
  };
  return (
    <>
      <form className="w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Murshid</h2>
          {/* <img src={img} className="w-32 h-32" alt="" /> */}
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="h-3 w-3" />
            <span className="text-sm">Remember me</span>
          </label>
          <a href="#" className="text-sm text-indigo-500 hover:underline">
            Forgot the password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-indigo-700 to-indigo-500 text-white rounded-md hover:from-indigo-600 hover:to-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition duration-200"
          onClick={handle}
        >
          SIGN IN
        </button>
      </form>
    </>
  );
};

export default LoginForm;
