import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Share/Navbar";
import Footer from "../Pages/Share/Footer";

const MainLayout = () => {
  return (
    <div>
      <h1>
        {" "}
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </h1>
    </div>
  );
};

export default MainLayout;
