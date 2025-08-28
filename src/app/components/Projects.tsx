import ProjectCard from "./ui/ProjectCard";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <section id="projects" className="relative pt-10 pb-15">
      <h2 className="uppercase tracking-widest text-lg  text-blue-100 max-w-80 mb-2">
        проекты
      </h2>
      <h1 className="text-2xl lg:text-4xl mb-5  ">
        Наши реализованные проекты
      </h1>
      <div>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
