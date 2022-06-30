import React from 'react';
import Slogan from '../components/forms/Slogan'
import SigninForm from "../components/forms/SigninForm"

const Login = () => {
   return (
      <div>
         <div className="bg-gray-100 ">
         <div className="w-screen h-screen justify-center items-center md:grid md:grid-cols-2">  
            <Slogan/>
            <SigninForm/>
         </div>
      </div>
      </div>
   );
}

export default Login;
