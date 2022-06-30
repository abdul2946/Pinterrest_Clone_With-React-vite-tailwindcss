import React from "react";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
   return (
      <div>
         <nav className="sm:flex justify-between p-5 bg-gray-100 mb-1 text-center px-10">
            <a href="#"className="place-self-center font-bold text-2xl text-rose-400 ">
               Pinterest{" "}
               <span className="font-mono text-black font-thin">Clone</span>
            </a>
            <input
               type="text"
               placeholder="Search"
               className="my-input placeholder:text-center w-full sm:w-1/3 bg-gray-100"
            />
            <div className="space-x-6 font-semibold place-self-center">
               <a href="#" className="hover:text-rose-400">
                  Profile
               </a>
               <a href="#" className="hover:text-rose-400">
                  Logout
               </a>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
