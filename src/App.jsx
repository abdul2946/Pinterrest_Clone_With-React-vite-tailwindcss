import { Routes, Route, Link } from "react-router-dom";
import SigninForm from "./components/forms/SigninForm"
import SignupForm from "./components/forms/SignupForm"
import ForgotPassword from "./components/forms/ForgotPassword"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Login />} >
               <Route path="/" element={<SigninForm />} />
               <Route path="signup" element={<SignupForm />} />
               <Route path="forgot" element={<ForgotPassword />} />
            </Route>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile/>}/>
         </Routes>
      </div>
   );
}

export default App;
