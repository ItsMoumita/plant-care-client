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
import Error from "../Pages/Error";
import Private from "../Provider/Private";
import PlantDetail from "../Pages/PlantDetail";
import UpdatePlant from "../Pages/UpdatePlant";

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
            path: "all-plants",
            Component: AllPlants
        },
        {
            path: "my-plants",
            Component: () => 
             (
                <Private>
                    <MyPlants></MyPlants>
                </Private>
             )
        },
        {
            path: "plants/:id",
            Component: () => 
            (
                <Private>
                    <PlantDetail></PlantDetail>
                </Private>
            )
        },
        {
            path: "add-plant",
            Component: () =>
            (
                <Private>
                    <AddPlants></AddPlants>
                </Private>
            )
        },
        {
            path: "/update-plant/:id",
            Component: () =>
            (
                <Private>
                     <UpdatePlant></UpdatePlant>
                </Private>
            )
        },
        {
          path: "login",
          Component: Login
        },
        {
            path: "register",
            Component: Register
        },
        {
            path: "*",
            Component: Error
        }
    ]
  },
]);

export default router