import { Routes, Link } from "react-router-dom";
const SigninForm = () => {
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
               <label className="font-semibold px-1 py-2">Password</label>
               <input
                  type="password"
                  placeholder=" Enter your Password"
                  className="my-input placeholder:text-right w-full"
               />
            </form>
            <div className="mt-3">
               <Link
                  to="forgot"
                  className="font-semibold px-2 py-2 text-rose-400 hover:text-rose-300"
               >
                  Forgot Password ?
               </Link>
            </div>
            <br />
            <div className="flex justify-between">
               <Link to="/home" className="primary-btn">
                  Sign In
               </Link>
               <Link to="/signup" className="secondary-btn">
                  Sign Up
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SigninForm;
