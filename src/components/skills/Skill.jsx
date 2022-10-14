import React, { useEffect } from "react";
import Html from "../../assets/image/html.png";
import Css from "../../assets/image/css.png";
import JavaScript from "../../assets/image/js.jpeg";
import Db from "../../assets/image/db.jpeg";
import Docker from "../../assets/image/docker.png";
import Git from "../../assets/image/git.jpeg";
import GitHub from "../../assets/image/github.png";
import Laravel from "../../assets/image/laravel.png";
import Material from "../../assets/image/material-ui.png";
import Mysql from "../../assets/image/mysql.png";
import Php from "../../assets/image/php.png";
import ReactJs from "../../assets/image/react.png";
import Tailwind from "../../assets/image/tailwind.jpeg";
import AOS from "aos";

export default function Skill() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className="mt-3">
      <h1 className="text-4xl text-center font-medium underline">Skills</h1>
      <div className="grid overflow-hidden md:grid-cols-2">
        <div
          className="my-10 mx-auto bg-gradient-to-tr from-indigo-700 rounded-md shadow-lg"
          data-aos="fade-down-right"
        >
          <div className="py-5 px-2">
            <h3 className="text-xl text-center font-normal pb-5">Front-end</h3>

            <div className="flex justify-center gap-12 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">HTML</h4>
                <img
                  src={Html}
                  alt="html logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">CSS</h4>
                <img
                  src={Css}
                  alt="css logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Javascript</h4>
                <img
                  src={JavaScript}
                  alt="javascript logo"
                  className="rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-10 mx-auto bg-gradient-to-tr from-indigo-700 rounded-md shadow-lg"
          data-aos="fade-down-left"
        >
          <div className="px-8 py-5">
            <h3 className="text-2xl text-center font-normal pb-5">
              Backend devlopment
            </h3>

            <div className="flex justify-center gap-12 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">Mysql</h4>
                <img
                  src={Mysql}
                  alt="mysql logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Databases</h4>
                <img
                  src={Db}
                  alt="database logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">PHP</h4>
                <img
                  src={Php}
                  alt="php logo"
                  className="rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-10 mx-auto bg-gradient-to-tr from-indigo-700 rounded-md shadow-lg"
          data-aos="fade-up-right"
        >
          <div className="px-8 py-5">
            <h3 className="text-2xl text-center font-normal pb-5">Framework</h3>

            <div className="flex justify-center gap-8 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">Laravel</h4>
                <img
                  src={Laravel}
                  alt="larave logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">React</h4>
                <img
                  src={ReactJs}
                  alt="react js logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Material</h4>
                <img
                  src={Material}
                  alt="javascript logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Tailwind</h4>
                <img
                  src={Tailwind}
                  alt="tailwindcss logo"
                  className="rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="my-10 mx-auto bg-gradient-to-tr from-indigo-700 rounded-md shadow-lg"
          data-aos="fade-up-left"
        >
          <div className="px-8 py-5">
            <h3 className="text-2xl text-center font-normal pb-5">Extra</h3>

            <div className="flex justify-center gap-12 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">Docker</h4>
                <img
                  src={Docker}
                  alt="docker logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Git</h4>
                <img
                  src={Git}
                  alt="git logo"
                  className="rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Github</h4>
                <img
                  src={GitHub}
                  alt="github logo"
                  className="rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
