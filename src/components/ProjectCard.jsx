import '../styles/projectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="card-proyectos">
      <img src={project.image} alt={project.title} />
      <div className="card-text">
        <h2>{project.title}</h2>
        <p className="categoria">{project.category}</p>
        <p>{project.description}</p>
      </div>
      <button>
        <a href={project.link} target="_blank" rel="noopener noreferrer">Visitar sitio</a>
      </button>
    </div>
  )
}
 export default ProjectCard