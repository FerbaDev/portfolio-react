import ProjectCard from './ProjectCard';
import projects from '../projects.json';
import '../styles/projects.css';


const Projects = () => {
  return (
    <div>
      <h2 className="proy-titulo">Proyectos realizados:</h2>
      <div className="proyectos">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects