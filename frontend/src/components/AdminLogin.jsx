import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [admin, setadmin] = useState({
    username: "",
    password: "",
  });
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost/breathfix/backend/api/adminlogin.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(admin),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Error in Admin Login");
      console.log("Error: ", error);
    }
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
        <div className="flex items-center justify-center min-h-screen ">
          <div className="bg-white border rounded-lg shadow-lg p-8 w-full max-w-md font-poppins">
            <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">
              BreathFix | Admin Panel
            </h1>
            <p className="text-center text-gray-500 mb-6">
              We’re glad to have you back! Please log in as admin to continue.
            </p>

            <form onSubmit={handlesubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your username"
                  required
                  name="username"
                  value={admin.username}
                  onChange={(e) =>
                    setadmin({ ...admin, username: e.target.value })
                  }
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your password"
                  required
                  name="password"
                  value={admin.password}
                  onChange={(e) =>
                    setadmin({ ...admin, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-medium hover:bg-indigo-700 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;
