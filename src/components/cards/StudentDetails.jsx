// StudentDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  // Simulated API call to fetch student details based on `id`
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulated data
        const data = [
          {
            id: 2002421,
            name: "John Doe",
            level: "Four",
            imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          {
            id: 200823,
            name: "Jane Smith",
            level: "Three",
            imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
          },
          {
            id: 200234,
            name: "Michael Johnson",
            level: "Two",
            imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
          },
        ];
        const selectedStudent = data.find(
          (student) => student.id === parseInt(id)
        );
        if (selectedStudent) {
          setStudent(selectedStudent);
        } else {
          console.log(`Student with id ${id} not found`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

const handlePrint=()=>{
    window.print
}

  return (
    <div className="mt-28 mx-auto bg-white px-4 py-6 rounded-xl w-[50%]">
      <h1 className="text-2xl font-semibold mb-4">Student Details</h1>
      <div id="stdId" className=" w-[60%] border px-6  rounded-xl py-1 bg-[#e6f2ff]">
        <p className="text-[#996633] text-2xl font-bold ">
          ==============================
        </p>
        <div className="flex items-center font-bold ">
          <div className="  ">
            <img
              src="https://admission.eelu.edu.eg/media/images/logos/eelu-logo.jpg"
              className="w-20 "
            />
            <span className="flex flex-col ms-3"> 
            <p>ID: {student.id}</p>
            <p>{student.name}</p>
            <p className="text-sm">
              Faculity: Faculity of Computer and information system
            </p>
            <p>Level: {student.level}</p>

            <p className="mt-3 text-xl">2024-2025</p>
            </span>
           
          </div>
          <img
            src={student.imageUrl}
            alt={student.name}
            className="w-20 h-20 ms-3 rounded mr-4"
          />
        </div>
        <p className="text-[#996633] text-2xl font-bold ">
          ==============================
        </p>
      </div>
      <button
        onClick={handlePrint}
        className="bg-gradient-to-b from-gray-900 to-[purple] hover:scale-105 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Print ID Card
      </button>
    </div>
  );
};

export default StudentDetails;
