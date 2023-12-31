import { Routes, Route } from "react-router-dom";

import Navbar from "modules/Navbar/Navbar";
import HomePage from "Page/HomePage/HomePage";
import UsersPage from 'Page/UsersPage/UsersPage';
import RegisterPage from "Page/RegisterPage/RegisterPage";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </>
  );
};
