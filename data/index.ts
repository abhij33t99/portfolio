export const about =
  "I have been passionate about technology since my earliest experiences with mobile phones, diving into tasks like ROM customization and UI tweaks. \n\nPresently, with two years of experience as a software engineer, I am dedicated to both my professional role and personal projects. Alongside my day-to-day work, I continually explore creative ventures and reinforce my skills in data structures and algorithms. \n\nHolding a B.Tech in CSE from Techno Main Salt Lake, Kolkata, I specialize in backend development, with proficient expertise in Java and Spring Boot. My certification in Oracle SE 11 Developer has enriched my understanding of OOP design, amplifying my Java proficiency. \nConcurrently, I've been quietly honing my skills in Next.js and React.js. \nFor further details, please refer to my resume.";

export type Experience = {
  start: string;
  end: string;
  role: string;
  domain: string;
  company: string;
  works: string[];
  tech: string[];
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
};

export const Experiences: Experience[] = [
  {
    start: "SEP 2022",
    end: "PRESENT",
    role: "Senior Software Engineer",
    domain: "Banking & Finance",
    company: "LTIMindtree",
    works: [
      "Orchestrated migration of 10+ microservices to Spring Boot framework, optimizing performance as well as fixing the GeM violations.",
      "Achieved 40% faster response time by developing non-blocking architecture enabling asynchronous support.",
      "Engineered and deployed API gateway using Spring Cloud Gateway that enhanced system performance and scalability of the platform and reduced API response time by 25%.",
      "Worked on 50+ blocking issues and improvements to make the application secure and stable.",
    ],
    tech: ["Java", "Spring Boot", "Javascript", "Maven", "Junit"],
  },
  {
    start: "JUN 2022",
    end: "SEP 2022",
    role: "Graduate Engineer Trainee",
    domain: "Banking & Finance",
    company: "Larsen & Toubro Infotech",
    works: [
      "Implemented automation solutions by creating Autosys jobs in shell scripts to streamline various tasks, resulting in increased efficiency.",
      "Implemented JUnit test cases to achieve 80% coverage,enhancing code quality; addressed Sonar issues, ensuring clean and maintainable codebase",
    ],
    tech: ["Java", "Spring Boot", "React", "Shell Script", "Autosys"],
  },
];

export const projects: Project[] = [
  {
    title: "E Kart",
    description:
      "Led a team and managed scrum board and tasks for the development of a web application demonstrating the advantages of e-commerce over traditional shopping.",
    tech: ["Javascript", "Spring Boot", "Oracle", "Jira"],
    image: "/ekart.png",
  },
  {
    title: "Flyaway",
    description:
      "Flyaway is a hotel booking system which you will find similar to Airbnb in terms of ui/ux.Added Oauth2 providers and 2FA authentication.",
    tech: ["NextJs", "AuthJs", "MongoDB", "Tailwind"],
    image: "/flyaway.png",
  },
  {
    title: "Portfolio",
    description: "A minimalist portfolio with a bit of animations.",
    tech: ["NextJs", "FramerMotion", "CSS", "Tailwind"],
    image: "/portfolio.png",
  },
];

export const contactUrls = {
  github: "https://github.com/abhij33t99",
  leetcode: "https://leetcode.com/u/abhijeetkarmakar1920/",
  linkedin: "https://www.linkedin.com/in/abhijeet-karmakar-4a47a6224/",
  gmail: "mailto:abhijeetkarmakar1920@gmail.com",
};
