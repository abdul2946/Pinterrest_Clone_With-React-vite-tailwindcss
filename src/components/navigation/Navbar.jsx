import React from "react";

const Navbar = () => {
   return (
      <div>
         <nav className="sm:flex justify-between p-5 bg-white mb-1">
            <h1 className="font-bold place-self-center text-4xl">Hello</h1>
            <input
               type="text"
               placeholder="Search"
               className="my-input placeholder:text-center"
            />
            <div className="space-x-4 font-semibold place-self-center">
               <a href="#">Profile</a>
               <a href="#">Logout</a>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
