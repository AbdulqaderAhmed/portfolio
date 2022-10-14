import React, { useEffect } from "react";
import Background1 from "../../assets/image/background1.jpg";
import Background2 from "../../assets/image/background2.jpg";
import Background3 from "../../assets/image/background3.jpg";
import Background4 from "../../assets/image/background4.jpg";
import AOS from "aos";

export default function Project() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="pt-10">
      <h1 className="text-3xl text-center font-medium">Projects</h1>

      <div className="grid md:mx-24 md:grid-cols-3">
        <div
          className=" bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8"
          data-aos="zoom-out-right"
        >
          <img src={Background1} alt="" className="" />
          <div className="p-6">
            <h3 className="text-xl font-medium">Project Name</h3>
            <p className="text-gray-800 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
              maiores, assumenda et iste saepe doloribus nostrum sapiente est
            </p>
          </div>
        </div>

        <div
          className=" bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8"
          data-aos="zoom-out-down"
        >
          <img src={Background1} alt="" />
          <div className="p-6">
            <h3 className="text-xl font-medium">Project Name</h3>
            <p className="text-gray-800 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
              maiores, assumenda et iste saepe doloribus nostrum sapiente est
            </p>
          </div>
        </div>

        <div
          className=" bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8"
          data-aos="zoom-out-left"
        >
          <img src={Background1} alt="" />
          <div className="p-6">
            <h3 className="text-xl font-medium">Project Name</h3>
            <p className="text-gray-800 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
              maiores, assumenda et iste saepe doloribus nostrum sapiente est
            </p>
          </div>
        </div>

        <div
          className=" bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8"
          data-aos="zoom-out-right"
        >
          <img src={Background1} alt="" className="" />
          <div className="p-6">
            <h3 className="text-xl font-medium">Project Name</h3>
            <p className="text-gray-800 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
              maiores, assumenda et iste saepe doloribus nostrum sapiente est
            </p>
          </div>
        </div>

        <div
          className=" bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8"
          data-aos="zoom-out-up"
        >
          <img src={Background1} alt="" />
          <div className="p-6">
            <h3 className="text-xl font-medium">Project Name</h3>
            <p className="text-gray-800 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
              maiores, assumenda et iste saepe doloribus nostrum sapiente est
            </p>
          </div>
        </div>

        <div
          className=" bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8"
          data-aos="zoom-out-left"
        >
          <img src={Background1} alt="" />
          <div className="p-6">
            <h3 className="text-xl font-medium">Project Name</h3>
            <p className="text-gray-800 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
              maiores, assumenda et iste saepe doloribus nostrum sapiente est
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
