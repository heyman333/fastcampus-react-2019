import React from "react";
import { withRouter } from "react-router-dom";

function LoginButton(props) {
  return (
    <div>
      <p>
        <button
          onClick={() => {
            console.log("clicked!");
            setTimeout(() => {
              // props.history.push("/");
            }, 500);
          }}
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default withRouter(LoginButton);
