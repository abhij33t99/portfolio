import { Project } from "@/data";
import Image from "next/image";
import { disconnect } from "process";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-5 justify-between items-start p-2 hover:border-solid border-2 rounded-lg border-transparent hover:bg-slate-600/40 group">
      <div className="min-w-[200px] max-w-[200px] pt-3">
        <img
          src={project.image}
          alt={project.description}
          className="object-contain opacity-50 max-w-[100px] max-h-[100px] group-hover:opacity-100"
        />
      </div>

      <div className="flex flex-col gap-5 w-full">
        <div className="text-md font-semibold group-hover:text-teal-300">
          {project.title}
        </div>
        <div className="text-left">{project.description}</div>
        <div className="sm:grid-cols-4 grid-cols-3 grid space-x-1 items-center text-center gap-y-2 justify-center">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-teal-300 bg-teal-400/10 rounded-full p-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
