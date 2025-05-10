// StudentsIds.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function StudentsIds() {
  const [students, setStudents] = useState([]);

  // Fetch from API
  useEffect(() => {
    // Simulated API call
    const fetchData = async () => {
      try {
        const data = [
          { id: 2002421, name: "John Doe", level: "Three", imageUrl: "https://randomuser.me/api/portraits/men/1.jpg" },
          { id: 200823, name: "Jane Smith", level: "Four", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
          { id: 200234, name: "Michael Johnson", level: "Two", imageUrl: "https://randomuser.me/api/portraits/men/3.jpg" },
        ];
        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="mt-20 w-full bg-white px-4 py-6 rounded-xl">
      <h1 className="text-2xl font-semibold mb-4">Students List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Level
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr
              key={student.id}
              className=" hover:bg-gray-100"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={student.imageUrl}
                      alt={student.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 hover:text-blue ">
                     <Link to={`/student/${student.id}`}>{student.name}</Link> 
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {student.level}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
