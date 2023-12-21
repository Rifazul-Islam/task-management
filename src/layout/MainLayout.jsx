import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar";

const MainLayout = () => {
  return (
    <div>
      <h1>
        {" "}
        <Navbar></Navbar>
        <Outlet></Outlet>
      </h1>
    </div>
  );
};

export default MainLayout;
