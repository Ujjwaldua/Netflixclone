import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const token = localStorage.getItem("token");
  const navigate= useNavigate()

  const handleLogout = () => {
    
    localStorage.clear();
    navigate("/Login")
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark  shadow-5-strong fs-5">
        <div className="nohove me-4 ms-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            height={50}
            className="nav-img mt-2"
            alt="netflix-font"
            to="/"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Tvshows">
                Tv Shows
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Movie">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Search">
                Search
              </NavLink>
            </li>
            {token && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Addmovie">
                    AddMovie
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
            {!token && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Register">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
