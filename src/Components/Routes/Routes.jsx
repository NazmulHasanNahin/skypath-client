import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layouts/Root";
import Errorpage from "../Shared/ErrorPage";
import Home from "../Home/Home";
import AllTouristspot from "../AllTouristspot/AllTouristspot";
import AddTouristSpot from "../AddTouristSpot/AddTouristSpot";
import SignIn from "../Auth/SignIn";
import Signup from "../Auth/Signup";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allspots",
                element: <AllTouristspot></AllTouristspot>,
            },
            {
                path: "/addspots",
                element: <AddTouristSpot></AddTouristSpot>,
            },
            {
                path: "/signin",
                element: <SignIn></SignIn> ,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
            
            


        ]
    },
]);



export default Routes;