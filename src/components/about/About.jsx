import React, { useEffect } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import AOS from "aos";
import Typical from "react-typical";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="text-center py-12 px-auto grid md:grid-cols-2">
      <div className="text-center md:px-5 md:py-10" data-aos="fade-right">
        <h2 className="text-4xl text-center font-medium py-2">
          Hi, I'm Abdulqader Ahmed
        </h2>
        <h3 className="text-xl font-medium py-2">
          I'm{" "}
          <Typical
            loop={Infinity}
            wrapper="a"
            steps={["web developer", "fullstack developer"]}
          />
        </h3>
        <p className="py-3 text-gray-300 text-md leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis neque
          nostrum odio officiis doloribus numquam quo, eos vitae ratione
          consectetur beatae placeat eaque nulla eius suscipit voluptatibus
          libero sed minima.
        </p>
        <div className="flex justify-center text-4xl gap-10 py-3 text-gray-900">
          <AiFillTwitterCircle />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-indigo-700 rounded-full h-80 w-80 my-5 mx-auto"
        data-aos="fade-left"
      >
        <img src="#" alt="" />
      </div>
    </div>
  );
}
