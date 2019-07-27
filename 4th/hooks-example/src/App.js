import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Example1 from "./components/example1";
import Example2 from "./components/example2";
import Example3 from "./components/example3";
import Example5 from "./components/Example5";
import Example6 from "./components/Example6";

function App() {
  const [lastVisible, setLastVisible] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example1 />
        <Example2 />
        <Example3 />
        <Example5 />
        {lastVisible && <Example6 />}
        <button onClick={() => setLastVisible(false)}>마지막 숨기기</button>
      </header>
    </div>
  );
}

export default App;
