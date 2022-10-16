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
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="text-center py-12 px-auto grid md:grid-cols-2 lg:px-20 lg:py-15">
      <div className="text-center md:px-5 md:py-10 " data-aos="fade-right">
        <h2 className="text-4xl text-center font-medium py-2">
          Hi, I'm Abdulqader Ahmed
        </h2>
        <h3 className="text-xl font-medium py-2">
          I'm{" "}
          <Typical
            loop={Infinity}
            wrapper="i"
            steps={[
              "web developer",
              "fast learner",
              "communicator",
              "strategic thinker",
              "inovative",
            ]}
          />
        </h3>
        <p className="py-3 text-gray-200 md:text-gray-300 text-md leading-6">
          Diligent software engineer with 3 months of experience in web
          application development and eager to broaden my horizons and work on
          different projects and responsibilities. I'm interested in developing
          innovative initiatives that increase the efficiency and performance of
          organizations. To design trustworthy and user-friendly solutions.
          Experienced in design software that is customized to match a company's
          organizational needs, emphasize their core skills, and enhance their
          success, a confident communicator, strategic thinker, and imaginative
          creator.
        </p>
        <div className="flex justify-center text-4xl gap-10 py-3 text-gray-900">
          <a
            href="https://twitter.com/Abdulqa67633591"
            className="hover:scale-125 hover:text-black ease-linear duration-150"
          >
            <AiFillTwitterCircle />
          </a>

          <a
            href="https://github.com/AbdulqaderAhmed"
            className="hover:scale-125 hover:text-black ease-linear duration-150"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/abdulqader-ahmed-a1a18a239/"
            className="hover:scale-125 hover:text-black ease-linear duration-150"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div
        className="bg-gradient-to-b from-cyan-600 rounded-full h-80 w-80 my-5 mx-auto overflow-hidden md:mt-40 lg:mt-24"
        data-aos="fade-left"
      >
        <img src={Abdu} alt="" />
      </div>
    </div>
  );
}
