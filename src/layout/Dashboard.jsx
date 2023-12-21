import { NavLink, Outlet } from "react-router-dom";
import { ImProfile } from "react-icons/im";
const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="relative">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mt-10 ">
          {/* Page content here */}

          <div>
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-sm hover:bg-success bg-orange-700 drawer-button lg:hidden absolute top-1 text-white "
            >
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
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 min-h-full bg-red-200 text-base-content">
            {/* Sidebar content here */}

            {isAdmin ? (
              <>
                <li>
                  {" "}
                  <NavLink to="/dashboard/profile">
                    <ImProfile /> Profile
                  </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to="/dashboard/addTest"> AddTask</NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to="/dashboard/allBanner"> AllTask</NavLink>{" "}
                </li>
              </>
            ) : (
              <>
                <li>
                  {" "}
                  <NavLink to="/dashboard/myProfile"> MyProfile</NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to="/dashboard/myAppointments">
                    MyAppointments
                  </NavLink>{" "}
                </li>
                <li>
                  {" "}
                  <NavLink to="/dashboard/textResults">
                    {" "}
                    Test Results
                  </NavLink>{" "}
                </li>
              </>
            )}

            <div className="divider"> OR</div>

            <li>
              {" "}
              <NavLink to="/"> Home</NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
