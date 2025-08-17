import React from "react";
import "./assets/css/app.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import Skill from "./components/skills/Skill";
import Header from "./include/header/Header";
import Footer from "./include/footer/Footer";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const { colors } = useTheme();

  return (
    <div
      className={`${colors.primary} min-h-screen ${colors.textPrimary} remove_space transition-colors duration-300`}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding">
          <Project />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <Skill />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
