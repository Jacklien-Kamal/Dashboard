import React, { useState, useEffect } from "react";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdLocalActivity } from "react-icons/md";

export default function Main() {
  const [students, setStudents] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [activities, setActivities] = useState(0);

  //  Here fetch data from API
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("https://project-back-lvuu.onrender.com/api"); // Replace 
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setStudents(data.students);
  //     setTeachers(data.teachers);
  //     setActivities(data.activities);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="p-6 mt-20 ms-3">
      <h1 className="text-4xl font-semibold ">Overview </h1>
      <div className="grid grid-cols-3 gap-20 text-white">
        <div className="bg-gradient-to-b from-[purple] to-gray-800 w-72 p-7 pt-3 rounded-lg my-10 flex flex-col justify-center transform transition-transform duration-1000 hover:scale-110 cursor-pointer">
          <h1 className="font-semibold py-2 flex items-center justify-center text-xl">
            Total Students
          </h1>
          <p className="flex items-center justify-center">
            <IoIosPeople className="text-5xl" />
          </p>
          <p className="text-4xl font-bold text-center">{students}</p>
        </div>
        <div className="bg-gradient-to-b from-[purple] to-gray-800 w-72 p-7 pt-3 rounded-lg my-10 flex flex-col justify-center transform transition-transform duration-1000 hover:scale-110 cursor-pointer">
          <h1 className="font-semibold py-2 flex items-center justify-center text-xl">
            Total Teachers
          </h1>
          <p className="flex items-center justify-center">
            <FaPeopleGroup className="text-5xl" />
          </p>
          <p className="text-4xl font-bold text-center">{teachers}</p>
        </div>
        <div className="bg-gradient-to-b from-[purple] to-gray-800 w-72 p-7 pt-3 rounded-lg my-10 flex flex-col justify-center transform transition-transform duration-1000 hover:scale-110 cursor-pointer">
          <h1 className="font-semibold py-2 flex items-center justify-center text-xl">
            Total Activities
          </h1>
          <p className="flex items-center justify-center">
            <MdLocalActivity className="text-4xl" />
          </p>
          <p className="text-4xl font-bold text-center">{activities}</p>
        </div>
      </div>
      {/* Carousel  */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide w-[1100px]"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.eelu.edu.eg/images/slider/01.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.eelu.edu.eg/images/slider/11.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.eelu.edu.eg/images/slider/002.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
