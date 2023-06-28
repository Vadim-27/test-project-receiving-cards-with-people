import { Routes, Route } from "react-router-dom";

import Navbar from "modules/Navbar/Navbar";
import PageUsers from "Page/PageUsers";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/users" element={<PageUsers />} />
      </Routes>
    </>
  );
};
