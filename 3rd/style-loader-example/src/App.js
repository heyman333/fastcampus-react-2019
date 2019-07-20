import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss"; //scss로더를 처리 한뒤에 css-loader를 실행
import Button from "./components/Button";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Learn React</Button>
      </header>
    </div>
  );
}

export default App;
