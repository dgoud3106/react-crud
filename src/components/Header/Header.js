
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const headerItems = [
    { label: "All Blogs", path: "/" },
    { label: "Create a New Blog", path: "/new" },
  ];

  const DisplayNavItem = (path) => {
    return location.pathname !== path;
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Blog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {headerItems.map(
              (item, index) =>
                DisplayNavItem(item.path) && (
                  <li key={index} className="nav-item">
                    <Link to={item.path} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;