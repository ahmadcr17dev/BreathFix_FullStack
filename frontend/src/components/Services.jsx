import React, { useState } from "react";
import sign from "../images/sign.svg";
import { BsCapsulePill } from "react-icons/bs";
import { FaTooth } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaBaby } from "react-icons/fa6";
import { PiEyesFill } from "react-icons/pi";
import { GiBrokenBone } from "react-icons/gi";
import { FaHeartPulse } from "react-icons/fa6";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import Toast from "react-hot-toast";

const Services = () => {
  const cards = [
    {
      icon: <BsCapsulePill />,
      title: "Internal Medicine",
      description: "30+ Doctors",
      link: "#",
    },
    {
      icon: <FaTooth />,
      title: "Dental Care",
      description: "19+ Doctors",
      link: "#",
    },
    {
      icon: <GiBrain />,
      title: "Neurology Care",
      description: "5+ Doctors",
      link: "#",
    },
    {
      icon: <FaBaby />,
      title: "Child Care",
      description: "30+ Doctors",
      link: "#",
    },
    {
      icon: <PiEyesFill />,
      title: "Opthamology",
      description: "10+ Doctors",
      link: "#",
    },
    {
      icon: <GiBrokenBone />,
      title: "Orthopedic",
      description: "5+ Doctors",
      link: "#",
    },
    {
      icon: <FaHeartPulse />,
      title: "Scalable",
      description: "Grow without limits.",
      link: "#",
    },
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    day: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit data to PHP script
    try {
      const response = await fetch(
        "http://localhost/mediax/backend/api/appointment.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Toast.success("Appointment booked successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          department: "",
          day: "",
        });
      } else {
        Toast.error("Failed to book appointment. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred while booking appointment.");
    }
  };

  return (
    <>
      <section className="mt-36 font-poppins">
        <div className="flex flex-row justify-center">
          <img src={sign} alt="sign" className="mr-2" />
          <h3 className="text-blue-700 font-semibold text-2xl">Our Services</h3>
        </div>
        <h1 className="text-5xl font-medium text-center mt-4 leading-tight">
          Our Mediax Specialties <br /> Technical Service
        </h1>
        <div className="container mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center items-center bg-indigo-100 text-indigo-600 text-4xl h-16 w-16 rounded-full mx-auto">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mt-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {card.description}
              </p>
              <div className="text-center mt-4 bg-blue-100 w-fit mx-auto px-12 py-2 rounded-full">
                <a
                  href={card.link}
                  className="text-indigo-600 font-semibold hover:none"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-36 flex flex-row justify-evenly mx-auto container font-poppins">
        <div className="bg-blue-600 rounded flex flex-col text-white px-8 py-11">
          <h3 className="text-3xl font-semibold">Working Hours</h3>
          <p className="mb-8 mt-4">
            Variations of passages amt available are <br /> anything
            embarrassing.
          </p>
          <div className="flex flex-row justify-between py-3">
            <p>Monday - Tuesday:</p>
            <p>9am - 6pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between py-3">
            <p>Wednesday - Thursday:</p>
            <p>8am - 5pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between py-3">
            <p>Friday:</p>
            <p>7am - 10pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between py-3">
            <p>Saturday:</p>
            <p>10am - 7pm</p>
          </div>
          <hr />
          <div className="flex flex-row justify-between py-3">
            <p>Sunday:</p>
            <p>11am - 11pm</p>
          </div>
          <hr />
        </div>
        <div className="flex flex-col">
          <img src={image1} alt="first pic" className="rounded-lg mb-6" />
          <img src={image2} alt="second pic" className="rounded-lg" />
        </div>
        <div className="bg-blue-50 py-6 px-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <h3 className="text-3xl font-bold">Book an Appointment!</h3>
            <div className="flex flex-col">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="mt-4 bg-gray-50 w-full h-12 pl-4 rounded-lg border-2 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-4 bg-gray-50 w-full h-12 pl-4 rounded-lg border-2 text-black"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-4 bg-gray-50 w-full h-12 pl-4 rounded-lg border-2 text-black"
              />
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full h-12 pl-4 rounded-lg border-2 bg-gray-50 mt-4"
              >
                <option value="" disabled>
                  Choose a Department
                </option>
                <option value="Pulmonology">Pulmonology</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Respiratory Therapy">Respiratory Therapy</option>
                <option value="Physical Therapy">Physical Therapy</option>
                <option value="Nutrition & Diabetics">
                  Nutrition & Diabetics
                </option>
              </select>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                required
                className="w-full h-12 pl-4 rounded-lg border-2 bg-gray-50 mt-4"
              >
                <option value="" disabled>
                  Choose a Day
                </option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-700 text-center text-white border-1 rounded-full mt-6 w-full h-10 hover:cursor-pointer"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Services;
