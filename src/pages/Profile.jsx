import React from "react";
import Navbar from "../components/navigation/Navbar";
import ProfileDetails from "../components/profile/ProfileDetails";

const Profile = () => {
   return (
      <div className="h-screen bg-gray-100">
         <div className="w-screen h-screen">
            <Navbar/>
            <div className="rounded-xl bg-white px-6 py-10 shadow-lg w-5/6 mx-auto md:grid md:grid-cols-2 shadow-rose-100 mt-40">
               <div></div>
               <ProfileDetails
               name="Syed Abdul Azim"
               email="aazim3510@gmail.com"/>
            </div>
         </div>
      </div>
   );
};

export default Profile;
