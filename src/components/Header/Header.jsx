import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="px-10 py-3 w-[100%] shadow-lg h-20 fixed top-0 right-0 bg-gradient-to-b from-gray-900 to-[purple]  ">
      {/* Top */}

      <div className="flex justify-between items-center ms-80">
        <div className="flex items-center  text-white ms-10">
        <IoSearchOutline />

        <input
          type="text"
          placeholder="Search...."
          className="text-gray-500 w-72 px-5 py-3 bg-inherit "
        />
        </div>

        <div className="flex gap-4 me-48">
          <span className="w-9 h-9 flex items-center bg-white justify-center text-xl rounded-full border border-gray-300">
            <BiMessageSquareDetail />
          </span>
          <span className="w-9 h-9 flex items-center bg-white justify-center text-xl rounded-full border border-gray-300">
            <IoMdNotificationsOutline />
          </span>
          <span className="w-9 h-9 flex items-center bg-white justify-center text-xl rounded-full border border-gray-300">
            <FaRegUser />
          </span>
        </div>


      </div>

     

          </div>
  );
}
