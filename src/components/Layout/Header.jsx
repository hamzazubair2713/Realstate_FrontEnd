import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-400 p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-xl flex flex-wrap">
            <span className="text-red-500">Urban</span>
            <span> Nest </span>
          </h1>
        </Link>
        <form
          action=""
          className="bg-slate-300 rounded-lg flex justify-center items-center px-3"
        >
          <input
            placeholder="Search"
            className="bg-transparent p-2 outline-none w-39 sm:w-64"
          />
          <CiSearch size={24} className="text-slate-500" />
        </form>
        <ul className="flex gap-3">
          <li className="hidden sm:inline text-slate-800 font-bold ">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-800 font-bold ">
            <Link to="/about-us">About</Link>
          </li>
          <li className=" text-slate-800 font-bold ">
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
