import { Experience, Experiences } from "@/data";
import ExperienceCard from "./ExperienceCard";

type ExperienceProps = {
  experiences?: Experience[];
};

const ExperienceSection = ({ experiences = Experiences }: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-y-10">
      {experiences.map((exp) => (
        <ExperienceCard key={`${exp.role}-${exp.company}`} experience={exp} />
      ))}
    </div>
  );
};

export default ExperienceSection;
