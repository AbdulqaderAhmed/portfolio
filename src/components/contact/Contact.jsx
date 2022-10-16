import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="pt-10">
      <h2 className="text-4xl text-center font-medium underline">Contact Me</h2>

      <div className="bg-gradient-to-tr from-indigo-700 rounded-md shadow-lg mx-4 mt-4 px-8 py-4 md:max-w-fit md:mx-auto">
        <div className="flex space-x-3 pb-4 md:justify-center">
          <h3 className="text-xl">Phone:</h3>
          <p className="text-md pt-1">+251932494626</p>
        </div>

        <div className="flex space-x-3 pb-4 overflow-auto md:justify-center">
          <h3 className="text-xl">Email:</h3>
          <p className="text-sm pt-1 px-auto">abdulqaderahmed32@gmail.com</p>
        </div>

        <div className="flex justify-center space-x-6 items-center text-4xl text-gray-900">
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
    </div>
  );
}
