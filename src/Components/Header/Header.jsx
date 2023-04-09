import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../Activelink/ActiveLink";

const Header = () => {
  return (
    <div className="text-center">
    <nav className=" bg-gray-600  w-full flex flex-col md:flex-row md:justify-between md:px-10 sm:text-sm  md:py-2">
        
      <ActiveLink className="text-white text-xl sm:text-sm font-bold p-3 m-2 hover:text-purple-950" to="/">Home</ActiveLink>
      <ActiveLink className="text-white text-xl font-bold p-3 m-2 hover:text-purple-950" to="/canadianfood">Canadian Food</ActiveLink>
      <ActiveLink className="text-white text-xl font-bold p-3 m-2 hover:text-purple-950" to="/seafood">SeaFood</ActiveLink>
      <ActiveLink className="text-white text-xl font-bold p-3 m-2 hover:text-purple-950" to="/order">Order Guide</ActiveLink>
      <ActiveLink className="text-white text-xl font-bold p-3 m-2 hover:text-purple-950" to="/contact">Contact Us</ActiveLink>
    </nav>
    </div>
  );
};

export default Header;
