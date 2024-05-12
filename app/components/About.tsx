import { about } from "@/data";
import Link from "next/link";

const About = () => {
  return (
    <div className="">
      {about}{" "}
      <Link
        href={"/Resume.pdf"}
        locale={false}
        target="_blank"
        className="text-white font-semibold underline"
      >
        resume
      </Link>
      .
    </div>
  );
};

export default About;
