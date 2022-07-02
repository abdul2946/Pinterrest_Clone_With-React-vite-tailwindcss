import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <div>
         <nav className="sm:flex justify-between p-5 bg-gray-100 mb-1 text-center px-10">
            <Link to="/home"className="place-self-center font-bold text-2xl text-rose-400 ">
               Pinterest{" "}
               <span className="font-mono text-black font-thin">Clone</span>
            </Link>
            <input
               type="text"
               placeholder="Search"
               className="my-input placeholder:text-center w-full sm:w-1/3 bg-gray-100"
            />
            <div className="space-x-6 font-semibold place-self-center">
               <Link to="/profile" className="hover:text-rose-400">
                  Profile
               </Link>
               <Link to="/" className="hover:text-rose-400">
                  Logout
               </Link>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
