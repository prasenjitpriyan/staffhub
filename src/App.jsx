import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import { Routes, Route } from "react-router-dom";
import AddMember from "./pages/AddMember";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addMember" element={<AddMember />} />
      </Routes>
      <Footers />
    </React.Fragment>
  );
};

export default App;
