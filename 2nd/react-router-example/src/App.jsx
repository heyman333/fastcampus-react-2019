import { BrowserRouter, Route, Switch, NavLink, Redirect } from "react-router-dom";
import React from "react";
import QS from "query-string";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Login from "./pages/Login";

const isLogin = true;

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/" activeStyle={{ color: "green" }} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeStyle={{ color: "green" }} exact>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeStyle={{ color: "green" }}
              isActive={(match, location) => {
                if (location.pathname !== "/about") {
                  return false;
                }

                if (QS.parse(location.search).name) {
                  return false;
                }

                return true;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about?name=ys"
              activeStyle={{ color: "green" }}
              isActive={(match, location) => {
                if (location.pathname !== "/about") {
                  return false;
                }

                if (QS.parse(location.search).name) {
                  return true;
                }

                return false;
              }}
            >
              Profile with name
            </NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            // component={Login}
            render={() => {
              if (isLogin) {
                return <Redirect to="/" />;
              }

              return <Login />;
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
