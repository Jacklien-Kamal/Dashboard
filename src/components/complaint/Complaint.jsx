import React, { useState, useEffect } from "react";

const Complaint = () => {
  const [complaints, setComplaints] = useState(['JJJJ']);
  const [reply, setReply] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // useEffect(() => {
  //   const fetchComplaints = async () => {
  //     try {
  //       const response = await fetch('https://project-back-lvuu.onrender.com/api/users/register'); 
  //       const data = await response.json();
  //       setComplaints(data);
  //     } catch (error) {
  //       console.error("Error fetching :", error);
  //     }
  //   };

  //   fetchComplaints();
  // }, []);

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (selectedComplaint) {
      //handle reply
      setReply("");
      setSelectedComplaint('');
    }
  };

  const handleSelectComplaint = (complaint) => {
    setSelectedComplaint(complaint);
    setReply("");
  };

  return (
    <div className="mt-20 p-10 w-[80%] mx-auto bg-white rounded">
      <h1 className="text-4xl font-bold mb-4">Complaints</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Complaint</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{complaint.studentName}</td>
              <td className="border px-4 py-2">{complaint.complaint}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleSelectComplaint(complaint)}
                  className="bg-gradient-to-b from-gray-900 to-[purple] text-white py-1 px-3 rounded"
                >
                  Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedComplaint && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Reply to {selectedComplaint.studentName}
          </h2>
          <form onSubmit={handleReplySubmit}>
            <div className="mb-4">
              <textarea
                value={reply}
                onChange={handleReplyChange}
                className="w-full p-2 border rounded"
                placeholder="Type your reply here..."
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-gray-900 to-[purple] text-white py-2 px-4 rounded"
            >
              Send Reply
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Complaint;
