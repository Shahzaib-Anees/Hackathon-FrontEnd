import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/saylaniLogo1.png";
import userLocalImage from "../../assets/userLocalImage1.png"

function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isMenuleft, setIsMenuleft] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    const toggleMenu = () => {
        setIsMenuVisible((prevState) => !prevState);
    };

    const toggleMenuleft = () => {
        setIsMenuleft((prevState) => !prevState);
    };

    const logoclick = () => {
        navigator("/");
    };

    useEffect(() => {
        // const accessToken = localStorage.getItem("accessToken");
        // console.log(accessToken);
        // if (accessToken != null) {
        //     setIsUser(true)
        // } else {
        //     setIsUser(false)
        // }
    }, [])


    return (
        <>
            <nav className="bg-white dark:bg-gray-800 my-3" style={{
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Mobile Menu Button */}
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                onClick={toggleMenuleft}
                                type="button"
                                className="hover:bg-green-600 relative inline-flex items-center justify-center rounded-md p-2 dark:text-gray-400 dark:hover:bg-[rgba(0,0,0,0.2)] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        {/* Logo */}
                        <div
                            style={{ cursor: "pointer" }}
                            onClick={logoclick}
                            className="flex flex-shrink-0 items-center gap-2"
                        >
                            <img
                                className="h-10 w-auto"
                                src={image}
                                alt="Saylani Welfare Logo"
                                border="0"
                            />
                            <span className="text-2xl font-bold text-blue-600">SaylaniMicrofinance</span>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden sm:flex space-x-6">
                            <Link
                                to="/home"
                                className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="text-gray-800 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white font-medium"
                            >
                                Services
                            </Link>

                        </div>

                        {/* Donate and Sponsor Buttons (Hidden on Mobile) */}
                        {!isUser ? (
                            <div className="hidden sm:flex space-x-4 ">
                                <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer hover:bg-transparent hover:border-2 hover:border-green-600 hover:text-green-600 transition-all">
                                    Sign Up
                                </Link>
                            </div>)
                            : (<div className="hidden sm:flex space-x-4 ">
                                <img src={userLocalImage} alt="user-image" width={70} />
                            </div>)}
                    </div>
                </div>

                {/* Mobile Menu Links */}
                <div
                    style={{ display: isMenuleft ? "block" : "none" }}
                    className="sm:hidden"
                    id="mobile-menu"
                >
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link
                            to="/home"
                            className="block rounded-md px-3 py-2 text-base font-medium text-black"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
                        >
                            About
                        </Link>
                        <Link
                            to="/services"
                            className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-200"
                        >
                            Services
                        </Link>
                        <Link
                            to="/contact"
                            className="block rounded-md px-3 py-2 text-base font-medium text-green-600 hover:bg-gray-200"
                        >
                            Appy Loan
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;