import React, { useEffect, useState } from "react";
import {
  RouterProvider,
  createHashRouter,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "../components/login";
import SideBar from "../components/Sidebar";
import { BasicStep } from "../components/Steps";
const router = createHashRouter([

  {
    path: "/",
    element:  <SideBar />,
  },

  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/basicstep",
    element: <BasicStep/>,
  },

]);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, []);

  console.log("checking user", user);

  return (
    <RouterProvider router={router}>
      {user === null ? (
        <Navigate to="/login" replace /> // Agar user data nahi hai, toh "/login" route par redirect karega
      ) : (
        <Navigate to="/" replace /> // User data ke sath, "/" par redirect karega jo `SideBar` show karega
      )}
    </RouterProvider>
  );
};

export default App;
