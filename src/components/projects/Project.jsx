import React, { useEffect } from "react";
import Blog from "../../assets/image/blog.png";
import Chat from "../../assets/image/chat.png";
import Ecom from "../../assets/image/e-commerce.png";
import Employee from "../../assets/image/Employee_Management.png";
import Movie3 from "../../assets/image/movie3.png";
import Nile from "../../assets/image/Nile.png";
import Resturant from "../../assets/image/resturant.png";
import Tenawo from "../../assets/image/Tenawo.png";
import { FaLink } from "react-icons/fa";

export default function Project() {
  return (
    <div className="pt-10">
      <h1 className="text-4xl text-center font-medium underline">Portfolio</h1>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3">
        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Blog} alt="blog" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Blog</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/life-hack-blog"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                This project is done by laravel framework and helps people to
                read blogs.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Chat} alt="chat" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Let's Chat</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/laravel-chat"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                Helps freinds to chat each other, built using laravel and
                authenticate using social medias.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Ecom} alt="ecommerce" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">E-commerce</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/laravel-ecommerce"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                E-commerce dashboard used to manage e-commerce for admins and
                buying for customers. built using Laravel framework.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Employee} alt="employee" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Employee Management</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/employee-laravel"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                Helps a company to manage their company's employee. Built using
                laravel API with React Js.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Movie3} alt="movie" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Ocean Of Movies</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/Ocean-of-movies-react"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                Entertainment hub, which is used to get latest movies, series,
                tv shows in one place. Built using TMDB api with React JS and
                react-redux.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Nile} alt="nile" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">
                  Nile Insurance Car Price System
                </h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/nile-insurance-laravel"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                Nile insurance Car price indication system. built using laravel
                framework.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Resturant} alt="resturant" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Side-hustle Resturant</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/SideHustle-Restaurant"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                Side-hustle project which is built using React Js with Material
                UI.
              </p>
            </div>
          </div>
        </div>

        <div className="hover:scale-105 md:hover:scale-110 ease-linear duration-500">
          <div className="bg-gradient-to-b from-indigo-700 rounded-md shadow-md m-4 md:m-8">
            <img src={Tenawo} alt="tenawo" className="" />
            <div className="p-6 hover:bg-pink-700">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium">Tenawo</h3>
                <a
                  href="https://github.com/AbdulqaderAhmed/Tenawo"
                  className="pt-1"
                >
                  <FaLink className="cursor-pointer" />
                </a>
              </div>
              <p className="text-gray-300 text-sm py-5">
                Helps save your time, client's find drugs and services within
                500 meters radius, built with react js.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
