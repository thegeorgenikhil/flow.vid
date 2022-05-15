import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { actionTypes } from "../../reducers";
import { MdMenu } from "react-icons/md";
import "./Navbar.css";

export const Navbar = ({ setIsSidebarOpen }) => {
  const { isAuthenticated, signoutHandler } = useAuth();
  const { dataDispatch } = useData();

  const { SIGNOUT } = actionTypes;
  const onSignout = (e) => {
    dataDispatch({ type: SIGNOUT });
    signoutHandler(e);
  };

  return (
    <nav className="navbar">
      <div className="flex items-center gap-4">
        <MdMenu
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        />
        <h1 className="nav-brand">
          flow<span className="text-primary">.vid</span>
        </h1>
      </div>
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
