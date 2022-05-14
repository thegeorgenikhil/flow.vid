import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./Navbar.css";

export const Navbar = () => {
  const { isAuthenticated, signoutHandler } = useAuth();

  return (
    <nav className="navbar">
      <h1 className="nav-brand">
        flow<span className="text-primary">.vid</span>
      </h1>
      <ul className="nav-items">
        {isAuthenticated ? (
          <li>
            <button className="btn btn-outline" onClick={signoutHandler}>
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
