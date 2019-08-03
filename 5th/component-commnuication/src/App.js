import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ToChild from "./components/ToChild";
import ToParent from "./components/ToParent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToChild />
        <ToParent />
      </header>
    </div>
  );
}

export default App;
