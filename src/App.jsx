import React from "react";
import "./assets/css/app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import Header from "./include/header/Header";
import Footer from "./include/footer/Footer";
export default function App() {
  return (
    <div className="bg-gradient-to-tr from-indigo-700 to-cyan-500 min-h-screen min-w-full text-white font-mono overflow-hidden">
      <header>
        <Header />
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
  );
}
