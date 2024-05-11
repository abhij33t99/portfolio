import { Experience } from "@/data";

type experienceCardProps = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: experienceCardProps) => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-5 justify-between items-start p-2 hover:border-solid border-2 rounded-lg border-transparent hover:bg-slate-600/40 group">
      <div className="text-xs font-semibold lg:min-w-[200px] pt-2">{`${experience.start} - ${experience.end}`}</div>
      <div className="flex flex-col gap-5">
        <div className="text-md font-semibold group-hover:text-teal-300">{`${experience.role}~${experience.company}`}</div>
        <ul>
          {experience.works.map((work) => (
            <li key={work}>{work}</li>
          ))}
        </ul>
        <div className="sm:grid-cols-4 grid-cols-3 grid space-x-1 items-center text-center gap-y-2 justify-center">
          {experience.tech.map((tech) => (
            <span
              key={tech}
              className="text-teal-300 bg-teal-400/10 rounded-full p-1 text-xs w-[80px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
