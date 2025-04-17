import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Home/Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;