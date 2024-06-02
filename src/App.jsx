import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footers />
    </React.Fragment>
  );
};

export default App;
