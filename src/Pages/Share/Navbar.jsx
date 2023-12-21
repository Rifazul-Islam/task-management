import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);

  const handlerLogout = () => {
    logOut().then(() => {
      toast.success("Logout Successfully");
    });
  };
  const menuItems = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/service"> Service </NavLink>{" "}
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
            {user?.email ? (
              <>
                <Link to="/dashboard/profile">Dashboard</Link>{" "}
                <button onClick={handlerLogout}>LogOut</button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </ul>
        </div>
        <div className="navbar-end cursor-pointer relative">
          <CiLogin className="font-bold text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
