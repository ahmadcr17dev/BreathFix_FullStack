import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";
import { IoMdTrash } from "react-icons/io";

const AdminPage = () => {
  const [loading, setloading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch users from the backend
  useEffect(() => {
    fetch("http://localhost/breathfix/backend/api/userdetails.php")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        toast.error("Error fetching data");
        console.log("Error: ", error);
      });
  }, []);

  // function to delete user
  const deleteUser = (username) => {
    fetch("http://localhost/breathfix/backend/api/deleteuser.php", {
      method: "POST", // Use POST if DELETE causes issues
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }), // Send username in the body
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.message);
          setUsers(users.filter((user) => user.username !== username));
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to delete user");
      });
  };


  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen items-center">
          <Bars
            height="80"
            width="80"
            color="blue"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg p-6 mt-16 font-poppins">
          <h1 className="text-4xl text-center font-semibold my-16 underline">
            Admin Dashboard
          </h1>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                  Username
                </th>
                <th className="px-4 py-2 text-left text-gray-700 font-semibold">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2 text-gray-600">{user.id}</td>
                    <td className="px-4 py-2 text-gray-600">{user.username}</td>
                    <td className="px-4 py-2 text-gray-600">{user.email}</td>
                    <IoMdTrash
                      color={"red"}
                      size={"1.5rem"}
                      className="mt-2 hover:cursor-pointer"
                      onClick={() => deleteUser(user.username)}
                    />
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default AdminPage;
