import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../Activelink/ActiveLink";

const Header = () => {
  return (
    <div className="text-center">
    <nav className=" bg-gray-600  w-full flex flex-col  text-sm md:text-lg md:flex-row p-5 md:justify-between md:px-10 sm:text-sm  md:py-2">
        
      <ActiveLink  to="/">Home</ActiveLink>
      <ActiveLink  to="/canadianfood">Canadian Food</ActiveLink>
      <ActiveLink  to="/seafood">SeaFood</ActiveLink>
      <ActiveLink  to="/order">Order Guide</ActiveLink>
      <ActiveLink  to="/contact">Contact Us</ActiveLink>
    </nav>
    </div>
  );
};

export default Header;
