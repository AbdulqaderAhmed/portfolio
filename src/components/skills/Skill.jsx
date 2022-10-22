import React, { useEffect } from "react";
import Html from "../../assets/image/html.svg";
import Css from "../../assets/image/css.svg";
import JavaScript from "../../assets/image/js.svg";
import Db from "../../assets/image/pgsql.svg";
import Docker from "../../assets/image/docker.svg";
import Git from "../../assets/image/git.svg";
import GitHub from "../../assets/image/github.svg";
import Laravel from "../../assets/image/laravel.svg";
import Material from "../../assets/image/material-ui.svg";
import Mysql from "../../assets/image/mysql.svg";
import Php from "../../assets/image/php.svg";
import ReactJs from "../../assets/image/reactjs.svg";
import Tailwind from "../../assets/image/tailwindcss.svg";

export default function Skill() {
  return (
    <div className="mt-3">
      <h1 className="text-4xl text-center font-medium underline">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="my-10 mx-auto bg-gradient-to-bl from-slate-800 to-slate-900 rounded-md shadow-lg">
          <div className="px-3 py-5">
            <h3 className="text-xl text-center font-normal pb-5">Front-end</h3>

            <div className="flex justify-center gap-12 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">HTML</h4>
                <img
                  src={Html}
                  alt="html logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">CSS</h4>
                <img
                  src={Css}
                  alt="css logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Javascript</h4>
                <img
                  src={JavaScript}
                  alt="javascript logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 mx-auto bg-gradient-to-bl from-slate-800 to-slate-900 rounded-md shadow-lg">
          <div className="px-3 py-5">
            <h3 className="text-2xl text-center font-normal pb-5">Backend</h3>

            <div className="flex justify-center gap-8 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">Mysql</h4>
                <img
                  src={Mysql}
                  alt="mysql logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Postgresql</h4>
                <img
                  src={Db}
                  alt="database logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">PHP</h4>
                <img
                  src={Php}
                  alt="php logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 mx-auto bg-gradient-to-bl from-slate-800 to-slate-900 rounded-md shadow-lg">
          <div className="px-3 py-5">
            <h3 className="text-2xl text-center font-normal pb-5">Framework</h3>

            <div className="gap-8 grid grid-cols-2 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">Laravel</h4>
                <img
                  src={Laravel}
                  alt="larave logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">React</h4>
                <img
                  src={ReactJs}
                  alt="react js logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Material</h4>
                <img
                  src={Material}
                  alt="javascript logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Tailwind</h4>
                <img
                  src={Tailwind}
                  alt="tailwindcss logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 mx-auto bg-gradient-to-bl from-slate-800 to-slate-900 rounded-md shadow-lg">
          <div className="px-3 py-5">
            <h3 className="text-2xl text-center font-normal pb-5">Extra</h3>

            <div className="flex justify-center gap-12 text-white ">
              <div className="">
                <h4 className="text-md font-medium mb-3">Docker</h4>
                <img
                  src={Docker}
                  alt="docker logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Git</h4>
                <img
                  src={Git}
                  alt="git logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>

              <div className="">
                <h4 className="text-md font-medium mb-3">Github</h4>
                <img
                  src={GitHub}
                  alt="github logo"
                  className="mx-auto rounded-full w-12 h-12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
