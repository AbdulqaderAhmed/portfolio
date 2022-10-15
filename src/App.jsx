import React, { useEffect, useState } from "react";
import "./assets/css/app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import Header from "./include/header/Header";
import Footer from "./include/footer/Footer";
export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark === false) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleDark = () => {
    setDark(!dark);
    alert(dark);
  };

  return (
    <div className={dark && "dark"}>
      <div className="bg-gradient-to-tr from-indigo-700 to-cyan-500 min-h-screen min-w-full text-white font-mono overflow-hidden dark:bg-black">
        <header>
          <Header handleClick={handleDark} />
        </header>

        <main className="px-4">
          <About />
          <Skill />
          <Project />
          <Contact />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
