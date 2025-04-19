import { useContext } from "react";
import { GridLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({ children }) => {


    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-[50vh]">
            <GridLoader />
        </div>
    }

    if (user) {
        return children;
    }



    return (

        <Navigate state={location.pathname} to={"/signin"} > </Navigate>

    );
};

export default PrivateRoute;