import { NavLink, useLocation, Link } from "react-router-dom";

const Nav = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <div className="navbar-center">
                                <ul className="menu menu-horizontal px-1 space-x-1">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={`btn ${isActive("/") ? "bg-[#23be0a] text-white" : "btn-ghost"}`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/addspots"
                                            className={`btn ${isActive("/addspots") ? "bg-[#23be0a] text-white" : "btn-ghost"}`}>
                                            Add Tourist Spot
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/allspots"
                                            className={`btn ${isActive("/allspots") ? "bg-[#23be0a] text-white" : "btn-ghost"}`}>
                                            All Tourist Spots
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                    <NavLink to="/" className="text-2xl font-bold text-gray-800">SkyPath</NavLink>
                </div>
                {/* here start for pc */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <div className="navbar-center">
                            <ul className="menu menu-horizontal px-1 space-x-4">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={`btn ${isActive("/") ? "bg-[#23be0a] text-white" : "btn-ghost"}`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/addspots"
                                        className={`btn ${isActive("/addspots") ? "bg-[#23be0a] text-white" : "btn-ghost"}`}>
                                        Add Tourist Spot
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/allspots"
                                        className={`btn ${isActive("/allspots") ? "bg-[#23be0a] text-white" : "btn-ghost"}`}>
                                        All Tourist Spots
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <div className="flex gap-4">
                        <Link to="/signin">
                            <div className="p-2 bg-[#23be0a] rounded-lg inline-flex justify-center items-center gap-2.5">
                                <button className="text-center text-white text-lg font-semibold font-['Work Sans']">
                                    Sign In
                                </button>
                            </div>
                        </Link>

                        <Link to="/signup">
                            <div className="p-2 bg-[#59c6d2] rounded-lg inline-flex justify-center items-center gap-2.5">
                                <button className="text-center text-white text-lg font-semibold font-['Work Sans']">
                                    Sign Up
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Nav;