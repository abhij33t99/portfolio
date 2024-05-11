import { projects } from "@/data";
import ProjectCard from "./ProjectCard";


const Project = () => {
  return (
    <div className="flex flex-col gap-y-10">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Project;
