import React from "react";
import StyledButton from "./components/StyledButton";
import { DatePicker } from "antd";

function App() {
  return (
    <div className="App">
      <p>
        <StyledButton className="orange">버튼</StyledButton>
      </p>
      <p className="orange">
        <StyledButton>버튼</StyledButton>
      </p>
      <DatePicker />
    </div>
  );
}

export default App;
