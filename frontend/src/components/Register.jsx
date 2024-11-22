import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 border rounded-lg shadow-lg w-full max-w-md font-poppins">
        {/* Website Name */}
        <h1 className="text-2xl font-bold text-indigo-600 text-center mb-4">
          PenCrafted
        </h1>
        {/* Warming Line */}
        <p className="text-center text-gray-600 mb-6">
          Create an account to join our amazing community!
        </p>
        {/* Form */}
        <form>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
