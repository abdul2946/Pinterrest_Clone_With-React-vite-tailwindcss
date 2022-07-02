import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
   return (
      <div>
         <div className="rounded-lg bg-white px-6 py-10 shadow-lg w-5/6 mx-auto shadow-rose-100">
            <form>
               <label className="font-semibold px-1 py-2">Email</label>
               <input
                  type="email"
                  placeholder="Enter your Email"
                  className="my-input placeholder:text-right  w-full"
               />
            </form>
            <br />

            <div className="flex justify-between">
               <Link to="/verifycode" className="primary-btn">Get Code</Link>
               <Link
                  to="/"
                  className="font-semibold place-self-center pr-3 text-rose-400 hover:text-rose-300"
               >
                  Back to Sign In
               </Link>
            </div>
         </div>
      </div>
   );
};

export default ForgotPassword;
