import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectsGallery({ projects }) {
  if (!projects || projects.length === 0) {
    return <p className="no-projects">No projects available.</p>;
  }

  return (
    <div className="projects-gallery">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsGallery;
