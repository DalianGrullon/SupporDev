import { Navbar, Flowbite } from "flowbite-react";
import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Nav = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    // <div className="flex">
    //     <a href="#" className="no-underline text-2xl px-2 hover:text-base-300 duration-300">Home</a>
    //     <a href="/login" className="no-underline text-2xl px-2 hover:text-base-300 duration-300">Login</a>
    //     <a href="#" className="no-underline text-2xl px-2 hover:text-base-300 duration-300">Request</a>
    //     <a href="#" className="no-underline text-2xl pl-2 hover:text-base-300 duration-300">Signup</a>
    // </div>

    // <Navbar fluid={true} rounded={true}>
    //   <Navbar.Brand>
    //     <img
    //       src="https://flowbite.com/docs/images/logo.svg"
    //       className="mr-3 h-6 sm:h-9"
    //       alt="Flowbite Logo"
    //     />
    //     <span className="self-center whitespace-nowrap text-4xl font-semibold text-primary dark:text-white">
    //       SupporDev
    //     </span>
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse>
    //     <Navbar.Link href="/" active={true}>
    //       Home
    //     </Navbar.Link>
    //     <Navbar.Link href="/login">Login</Navbar.Link>
    //     <Navbar.Link href="/signup">Signup</Navbar.Link>
    //     <Navbar.Link href="/navbars">About</Navbar.Link>
    //   </Navbar.Collapse>
    // </Navbar>
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-br from-neutral-focus to-slate-400 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex">
            <FaUserCircle className="text-neutral-content" size={70} />
            <a
              className="text-4xl font-bold leading-relaxed inline-block mr-4 pl-4 py-2 whitespace-nowrap text-neutral-content"
              href="#pablo"
            >
              SupporDev
            </a>
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
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white duration-300 hover:opacity-75"
                href="/"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white duration-300 hover:opacity-75"
                href="/login"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Login</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white duration-300 hover:opacity-75"
                href="/signup"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Signup</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
