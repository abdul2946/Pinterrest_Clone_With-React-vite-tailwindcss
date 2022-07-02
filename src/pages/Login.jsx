import { Routes, Route, Link } from "react-router-dom";
import Slogan from "../components/forms/Slogan";
import SigninForm from "../components/forms/SigninForm";
import SignupForm from "../components/forms/SignupForm";
import ForgotPassword from "../components/forms/ForgotPassword";

const Login = () => {
   return (
      <div>
         <div className="bg-gray-100 ">
            <div className="w-screen h-screen justify-center items-center md:grid md:grid-cols-2">
               <Slogan />
               <Routes>
                  <Route path="/" element={<SigninForm />} />
                  <Route path="signup" element={<SignupForm />} />
                  <Route path="forgot" element={<ForgotPassword />} />
               </Routes>
            </div>
         </div>
      </div>
   );
};

export default Login;
