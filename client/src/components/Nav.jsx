import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import jwtDecode from "jwt-decode";
import PrimaryButton from "./shared/button/PrimaryButton";

const Nav = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  async function logout(e) {
    // e.preventDefault();
    Auth.logout();
  }

  const checkRole = () => {
    if (Auth.loggedIn()) {
      const check = localStorage.getItem("id_token");
      const checkToken = jwtDecode(check);
      return checkToken.data.role;
    }
  };

  const getUserId = () => {
    if (Auth.loggedIn()) {
      const { data } = Auth.getProfile();
      return data._id;
    }
  };

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-br from-neutral-focus to-slate-400 ">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex">
            <img src="/SupporDev.png" alt="icon" className="h-20" />
            <Link
              className="text-4xl font-bold leading-relaxed inline-block mr-4 pl-4 py-2 whitespace-nowrap text-neutral-content hover:scale-105 hover:text-blue-400 duration-300 ease-in-out"
              style={{ textShadow: "2px 4px 4px #496551" }}
              to="/"
            >
              SupporDev
            </Link>
          </div>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link to="/">
                <PrimaryButton>Home</PrimaryButton>
              </Link>
            </li>
            {Auth.loggedIn() && checkRole() === "requester" && (
              <>
                <li className="nav-item">
                  <Link to="/request">
                    <PrimaryButton>Create Request</PrimaryButton>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/profile/${getUserId()}`}>
                    <PrimaryButton>My Requests</PrimaryButton>
                  </Link>
                </li>
              </>
            )}
            {!Auth.loggedIn() ? (
              <li className="nav-item">
                <Link to="/login">
                  <PrimaryButton>Login</PrimaryButton>
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <PrimaryButton onClick={() => logout()}>Logout</PrimaryButton>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
