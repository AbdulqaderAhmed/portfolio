import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import CV from "../../assets/file/AbduCV.pdf";

export default function Header({ handleClick }) {
  return (
    <nav className="flex justify-between items-center px-8 py-5 shadow-md md:px-32">
      <h1 className="text-2xl">Abdulqader</h1>
      <ul className="flex flex-row gap-4">
        <li className="text-2xl pt-2">
          <BsFillMoonStarsFill
            className="cursor-pointer"
            onClick={handleClick}
          />
        </li>
        <li className="hover:scale-110 ease-linear duration-500 pt-2">
          <a
            className="bg-gradient-to-r from-indigo-700 to-orange-700 p-2 rounded-lg text-white"
            donwload
            href={CV}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
