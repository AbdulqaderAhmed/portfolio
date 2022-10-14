import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Contact() {
  return (
    <div className="pt-10">
      <h2 className="text-3xl text-center font-meduim">Contact</h2>

      <div className="bg-gradient-to-tr from-indigo-700 rounded-md shadow-lg mx-4 mt-4 px-8 py-4 md:mx-96">
        <div className="flex space-x-4 pb-4 md:justify-center">
          <h3 className="text-xl">Phone No:</h3>
          <p className="text-md pt-1">+251932494626</p>
        </div>

        <div className="flex space-x-4 pb-4 md:justify-center">
          <h3 className="text-xl">Email:</h3>
          <p className="text-sm pt-1">abdulqaderahmed32@gmail.com</p>
        </div>

        <div className="flex justify-center space-x-6 items-center text-4xl text-black">
          <AiFillTwitterCircle />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
}
