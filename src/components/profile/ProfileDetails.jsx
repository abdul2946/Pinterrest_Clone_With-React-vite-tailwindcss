import React from "react";
import {FiEdit3} from "react-icons/fi"

const ProfileDetails = (props) => {
   return (
      <div>
         <div className="p-4">
            <div className="space-y-3 pl-1">
               <h3 className="font-semibold text-rose-400">Name</h3>
               <p className="font-semibold text-gray-600">{props.name}</p>
               <h3 className="font-semibold text-rose-400">Email</h3>
               <p className="font-semibold text-gray-600">{props.email}</p>
            </div>

            <div className="pt-8">
               <button className="primary-btn flex">Edit <FiEdit3 className="place-self-center ml-2"/></button>
            </div>
         </div>
      </div>
   );
};

export default ProfileDetails;
