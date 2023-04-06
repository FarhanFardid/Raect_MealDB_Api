import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../Activelink/ActiveLink";

const Header = () => {
  return (
    <nav className="text-purple-800 bg-gray-500 p-5 w-full text-center md:ps-96  flex md:flex-row flex-col">
        
      <ActiveLink className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/">Home</ActiveLink>
      <ActiveLink className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/canadianfood">Canadian Food</ActiveLink>
      <ActiveLink className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/seafood">SeaFood</ActiveLink>
      <ActiveLink className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/order">Order Guide</ActiveLink>
      <ActiveLink className="text-white text-2xl font-bold p-3 m-2 hover:text-purple-950" to="/contact">Contact Us</ActiveLink>
    </nav>
  );
};

export default Header;
