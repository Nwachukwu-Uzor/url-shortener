import React, { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((op) => !op);

  return (
    <header className="w-full max-w-[1240px] px-4 mx-auto h-[60px] flex flex-col justify-center items-center">
      <nav className="w-full relative md:flex justify-between items-center">
        <img src={logo} alt="logo" className="h-[25px]" />
        <div
          className={`absolute md:static flex flex-col justify-between md:flex-row md:grow md:ml-10 bg-[#3a3053] md:bg-transparent left-2 right-2 top-8 z-10 py-6 md:py-0  md:opacity-100 duration-500 ${
            open ? "top-8 opacity-100" : "top-[-20vh] opacity-0"
          } rounded-md md:rounded-none shadow-sm md:shadow-none text-center md:text-left px-4 md:px-0`}
        >
          <ul className="flex flex-col md:flex-row items-center py-2 md:py-0 border-b-2 md:border-none">
            <li className="my-2 md:my-0 md:ml-12">
              <a
                href="#"
                className="text-white md:text-gray-400 font-bold md:font-medium md:hover:text-gray-600"
              >
                Features
              </a>
            </li>
            <li className="my-2 md:my-0 md:ml-12">
              <a
                href="#"
                className="text-white md:text-gray-400 font-bold md:font-medium md:hover:text-gray-600"
              >
                Pricing
              </a>
            </li>
            <li className="my-2 md:my-0 md:ml-12">
              <a
                href="#"
                className="text-white md:text-gray-400 font-bold md:font-medium md:hover:text-gray-600"
              >
                Features
              </a>
            </li>
          </ul>
          <ul className="flex flex-col md:flex-row mt-4 md:mt-0 items-center">
            <li className="my-2 md:my-0 md:ml-12">
              <a
                href="#"
                className="text-white md:text-gray-400 font-bold md:font-medium md:hover:text-gray-600"
              >
                Login
              </a>
            </li>
            <li className="bg-[#27d3d6] py-2 md:py-1 w-[200px] md:w-[150px] mx-auto rounded-full text-center my-2 md:my-0 md:ml-12">
              <a href="#" className="text-white font-bold">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <div
          className="md:hidden absolute top-0 right-0 ml-4 text-3xl"
          onClick={handleOpen}
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
