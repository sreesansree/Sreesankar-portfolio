import projects from "../../constants/Project.js";
import "./style.css";

const Projects = () => {
  return (
    <section className="projects" id="Projects">
      <h3 className="project_header">My Projects</h3>
      <div className="projects_grid">
        {projects.map((project, index) => (
          <div key={index} className="project_card">
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="project_image"
            />
            <h2 className="project_title">{project?.title}</h2>
            <p className="project_description">{project.description}</p>
            <div className="btn">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project_buttons"
              >
                <i className="fa fa-link"></i> Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project_button"
              >
                <i className="fa fa-github"></i> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
2;
