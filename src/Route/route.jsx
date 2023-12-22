import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Service from "../Pages/Service/Service";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import TaskManagement from "../Pages/Dashboard/TaskManageMent/TaskManagement";
import AllTasks from "../Pages/Dashboard/AllTasks/AllTasks";
import Update from "../Pages/Dashboard/Update/Update";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "allTasks",
        element: <AllTasks></AllTasks>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path: "taskManagement",
        element: <TaskManagement></TaskManagement>,
      },
    ],
  },
]);

export default router;
