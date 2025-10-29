import React from "react";
import ProjectsGallery from "../components/Portfolio/ProjectGallery";
import { projects } from "../data/projects";

function Portfolio() {
  return (
    <main className="portfolio-page">
      <h1 className="portfolio-title">My Projects</h1>
      <ProjectsGallery projects={projects} />
    </main>
  );
}

export default Portfolio;
