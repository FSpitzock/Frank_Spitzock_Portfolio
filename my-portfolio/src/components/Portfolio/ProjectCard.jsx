import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        className="project-thumbnail"
        src={project.thumbnail}
        alt={project.title}
      />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-tech">
        Technologies: {project.technologies.join(", ")}
      </p>
      <a
        className="project-link"
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;
