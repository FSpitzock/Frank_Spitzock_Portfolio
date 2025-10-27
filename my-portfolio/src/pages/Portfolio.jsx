import { projects } from '../data/projects'
import Card from '../components/Portfolio/ProjectCard'

function Project() {
  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Project



