import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Controlled from "./components/controlled";
import UnControlled from "./components/uncontrolled";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Controlled />
        <UnControlled />
      </header>
    </div>
  );
}

export default App;
