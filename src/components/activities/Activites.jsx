import React, { useState, useEffect } from "react";
import { FcSportsMode } from "react-icons/fc";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts"); //ACctivities URL
        const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users"); // students url
        //activity ={ title:"jjj ",students:[name,]}

        const posts = await postsResponse.json();
        const users = await usersResponse.json();
console.log(posts)
        const mappedActivities = posts.slice(0, 5).map(post => ({
          id: post.id,
          name: post.title,
          students: users.slice(post.id, post.id + 5).map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
          }))
        }));

        setActivities(mappedActivities);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchActivities();
  }, []);

  const handleRemove = (studentId) => {
    console.log("Hnndle............");
  };

  return (
    <div className="mt-20 p-10 w-[80%]">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white rounded p-3 my-3">
          <h1 className="font-bold text-5xl pb-4 flex items-center">
            <FcSportsMode />
            {activity.name} ({activity.students.length})
          </h1>

          <table className="table table-striped w-100">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student Name</th>
                <th scope="col">E-mail</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {activity.students.map((student, index) => (
                <tr key={student.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      className="btn submit bg-gradient-to-b from-gray-900 to-[purple] text-white"
                      onClick={() => handleRemove(student.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
