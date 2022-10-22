import React, { useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import AOS from "aos";
import Typical from "react-typical";
import Abdu from "../../assets/image/abdu2.png";

export default function About() {
  return (
    <div className="py-12 px-auto grid md:grid-cols-2 lg:px-20 lg:py-15">
      <div className="md:px-5 md:py-10 ">
        <h2 className="text-4xl text-center font-medium py-2">
          Hi, I'm Abdulqader Ahmed
        </h2>
        <h3 className="text-xl text-center text-emerald-700 font-medium py-2">
          Full Stack Web Developer
        </h3>
        <ul className="py-3 mx-auto list-disc text-justify text-gray-200 md:text-gray-300 text-md leading-8">
          <li>
            Diligent software engineer with 3 months of experience in web
            application development.
          </li>
          <li>Eager to broaden my horizons.</li>
          <li>Work on different projects and responsibilities.</li>
          <li>
            I'm interested in developing innovative initiatives that increase
            the efficiency and performance of organizations.
          </li>
        </ul>
        <div className="flex justify-center text-4xl gap-10 py-3 text-gray-400">
          <a
            href="https://twitter.com/Abdulqa67633591"
            className="hover:scale-125 hover:text-white ease-linear duration-150"
          >
            <AiFillTwitterCircle />
          </a>

          <a
            href="https://github.com/AbdulqaderAhmed"
            className="hover:scale-125 hover:text-white ease-linear duration-150"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abdulqader-ahmed-a1a18a239/"
            className="hover:scale-125 hover:text-white ease-linear duration-150"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className="bg-gradient-to-b from-cyan-600 rounded-full h-80 w-80 my-5 mx-auto overflow-hidden md:mt-10 ">
        <img src={Abdu} alt="" />
      </div>
    </div>
  );
}
