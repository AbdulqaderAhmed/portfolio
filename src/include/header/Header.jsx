import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md md:px-20">
      <h1 className="text-2xl">Portfolio</h1>
      <ul className="flex flex-row gap-4">
        <li className="text-2xl pt-2">
          <BsFillMoonStarsFill />
        </li>
        <li>
          <button className="bg-gradient-to-r from-indigo-700 to-orange-700 p-2 rounded-lg text-white">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}
