import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { contactUrls } from "@/data";

type ContactProps = {
  className: String;
};

const Contact = ({ className }: ContactProps) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-start md:gap-x-3 gap-x-4">
        <Link
          href={contactUrls.github}
          target="_blank"
          className="hover:text-white"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          href={contactUrls.linkedin}
          target="_blank"
          className="hover:text-white"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          href={contactUrls.gmail}
          target="_blank"
          className="hover:text-white"
        >
          <SiGmail size={30} />
        </Link>
        <Link
          href={contactUrls.leetcode}
          target="_blank"
          className="hover:text-white"
        >
          <SiLeetcode size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
