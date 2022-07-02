import React from 'react';
import { Link } from 'react-router-dom';

const EnterCode = () => {
   return (
      <div>
         <div className="rounded-lg bg-white px-6 py-10 shadow-lg w-5/6 mx-auto shadow-rose-100">
            <form>
               <label className="font-semibold px-1 py-2">Verification Code</label>
               <input
                  type="number"
                  placeholder="Enter the Code"
                  className="my-input placeholder:text-right  w-full"
               />
            </form>
            <br />

            <div className="flex justify-between">
               <Link to="/" className="primary-btn">Verify</Link>
               <a href="#" className="font-semibold place-self-center pr-3 text-rose-400 hover:text-rose-300">Resend Code</a>
            </div>
         </div>
      </div>
   );
}

export default EnterCode;
