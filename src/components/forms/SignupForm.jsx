import React from 'react';

const SignupForm = () => {
   return (
      <div>
         <div className="rounded-lg bg-white px-6 py-10 shadow-lg w-5/6 mx-auto">

            <form>
            <label className="font-semibold px-1 py-2">Name</label>
               <input
                  type="text"
                  placeholder="Enter your Name"
                  className="my-input placeholder:text-right  w-full"
               />
               <label className="font-semibold px-1 py-2">Mobile</label>
               <input
                  type="number"
                  placeholder="Enter your Mobile Number"
                  className="my-input placeholder:text-right  w-full"
               />
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
            <br />
               <div className="flex justify-between">
                  <button className="my-1 bg-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-rose-200 hover:bg-rose-400 font-semibold">
                     Sign Up
                  </button>
                  <a href="#" className="font-semibold place-self-center pr-3 text-rose-400 hover:text-rose-300">Back to Sign In</a>
               </div>
         </div>
      </div>
   );
}

export default SignupForm;
