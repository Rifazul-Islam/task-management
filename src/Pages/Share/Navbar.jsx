import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const menuItems = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink> Service </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink> Contact </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink> Blog</NavLink>{" "}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar border-b border-zinc-600 bg-[#BFFEEA]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Task Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" space-x-4 menu-horizontal px-1 font-bold">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end cursor-pointer relative">
          <CiLogin
            onClick={() => setOpen(!open)}
            className="font-bold text-2xl"
          />
          {open ? (
            <div className=" absolute mt-40">
              {" "}
              <ul
                tabIndex={0}
                className="h-24 menu-sm dropdown-content border-2 border-red-700 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li> Login </li>
                <Link to="/register">
                  {" "}
                  <li> Register </li>
                </Link>
              </ul>{" "}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
