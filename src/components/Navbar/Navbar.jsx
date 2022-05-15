import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { actionTypes } from "../../reducers";
import "./Navbar.css";

export const Navbar = () => {
  const { isAuthenticated, signoutHandler } = useAuth();
  const { dataDispatch } = useData();

  const { SIGNOUT } = actionTypes;
  const onSignout = (e) => {
    dataDispatch({ type: SIGNOUT });
    signoutHandler(e);
  };

  return (
    <nav className="navbar">
      <h1 className="nav-brand">
        flow<span className="text-primary">.vid</span>
      </h1>
      <ul className="nav-items">
        {isAuthenticated ? (
          <li>
            <button className="btn btn-outline" onClick={onSignout}>
              Signout
            </button>
          </li>
        ) : (
          <Link to={"/signin"}>
            <li>
              <button className="btn">Sign In</button>
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};
