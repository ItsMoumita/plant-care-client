import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import MyPlants from "../Pages/MyPlants";
import AddPlants from "../Pages/AddPlants";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
            path: "allplants",
            Component: AllPlants
        },
        {
            path: "myplants",
            Component: MyPlants
        },
        {
            path: "addplant",
            Component: AddPlants
        },
        {
          path: "login",
          Component: Login
        },
        {
            path: "register",
            Component: Register
        }
    ]
  },
]);

export default router