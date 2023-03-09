import { AppRouter } from "components/AppRouter";
import { Navbar } from "components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="wrapper-app">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
