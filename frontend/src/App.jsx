import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import AdminLogin from "./components/AdminLogin";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/adminpage" element={<AdminPage />}></Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
