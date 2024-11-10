import { useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { PiCaretDoubleRightBold } from "react-icons/pi";

// Import the background image
import logo from '../../assets/logo.png'
import backgroundImage from '../../assets/header-bg.png'
import BannerTitle from "../../Pages/Home/BannerTitle/BannerTitle";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div>
            {/* Apply the background image here */}
            <div

                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    
                    backgroundSize: 'cover', // This makes sure the image covers the entire area
                    backgroundBlendMode: 'multiply', // This blends the background color with the image
                }}
            >
                <nav className="max-w-screen-xl mx-auto bg-center">
                    <div className="container mx-auto px-4 py-3 flex items-center justify-between">

                        {/* Logo */}

                        <div className="text-2xl flex items-center justify-center font-bold">
                            <img src={logo} alt="" />
                            <p className="ms-2 text-3xl">Restaurant</p>
                        </div>

                        {/* Desktop Nav Items */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#features" className="">Home</a>
                            <a href="#blogs" className="">About</a>
                            <a href="#pricing" className="">Portfolio</a>
                            <a href="#sqa" className="">Clients</a>
                            <a href="#sqa" className="">Blogs</a>
                            <a href="#sqa" className="">Contact</a>
                        </div>

                        {/* Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="btn bg-[#FEBF00]">
                                Book A Table
                            </button>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <FaBars size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden shadow-md">
                            <a href="#features" className="block px-4 py-2 ">Home</a>
                            <a href="#blogs" className="block px-4 py-2">About</a>
                            <a href="#pricing" className="block px-4 py-2">Portfolio</a>
                            <a href="#sqa" className="block px-4 py-2">Client</a>
                            <a href="#sqa" className="block px-4 py-2">Blogs</a>
                            <a href="#sqa" className="block px-4 py-2">Contact</a>

                            <button className="btn w-full bg-[#FEBF00]">
                                Book A Table
                            </button>
                        </div>
                    )}
                </nav>
                <div>
                    <BannerTitle></BannerTitle>
                </div>
            </div>

        </div>
    );
};

export default NavBar;
