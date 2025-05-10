import React from "react";
import { FaBookReader } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="p-5 bg-gradient-to-b from-gray-900 to-[purple] h-[100vh] w-[20%]  sticky top-0">
      <span className="text-gray-300 text-4xl flex gap-2">
        {" "}
        <FaBookReader /> EELU
      </span>
      

      <div className="mt-20 text-gray-200">
      <hr></hr>

        <ul>
          <li>
            {" "}
            <Link
              to="/"
              className="mt-7 text-gray-200  text-2xl  py-2 flex items-center gap-2 hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300"
            >
              {" "}
              <MdDashboard /> Dashboard{" "}
            </Link>
          </li>
          <li>
            <div className="   ">
              <span className="flex items-center  py-2 text-gray-200 text-2xl  items-center gap-2 cursor-pointer  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300">
                <MdMiscellaneousServices />
                Services
              </span>
              <div className="ps-6 text-lg flex flex-col gap-2">
                <Link to="/acivities" className="text-gray-200 flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300  p-2">
                  Activities
                </Link>
                <Link to="/ids" className="text-gray-200 flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300 p-2 ">
                  Students IDs
                </Link>
                <Link to="/complaint" className="text-gray-200  flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300 p-2">
                  complaint
                </Link>
                <Link to="/acivities" className="text-gray-200 flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300  p-2">
                  Activities
                </Link>
                <Link to="/ids" className="text-gray-200 flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300 p-2 ">
                  Students IDs
                </Link>
                <Link to="/complaint" className="text-gray-200  flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300 p-2">
                  complaint
                </Link>
                <Link to="/acivities" className="text-gray-200 flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300  p-2">
                  Activities
                </Link>
                <Link to="/ids" className="text-gray-200 flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300 p-2 ">
                  Students IDs
                </Link>
                <Link to="/complaint" className="text-gray-200  flex items-center gap-2  hover:bg-purple-100 hover:bg-opacity-20 hover:rounded  hover:text-purple-300 p-2">
                  complaint
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
