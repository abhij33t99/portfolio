"use client";

import { useInView } from "framer-motion";
import StaggeredText from "./components/StaggeredText";
import About from "./components/About";
import Project from "./components/Project";
import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import Experience from "./components/Experience";
import FadeIn from "./components/FadeIn";
import useMouse from "@react-hook/mouse-position";
import Contact from "./components/Contact";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { amount: 1 });
  const isProjectInView = useInView(projectRef, { amount: 0.8 });
  const isExperienceInView = useInView(experienceRef, { amount: 0.8 });

  const scrollIntoView = useCallback(
    (ref: MutableRefObject<HTMLDivElement>) => {
      if (ref) {
        ref.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    []
  );

  const mouse = useMouse(homeRef);

  useEffect(() => {
    if (mouse.clientX && mouse.clientY) {
      console.log(mouse.pageX, mouse.pageY);
    }
  }, [mouse]);

  return (
    <>
      <div className="relative bg-slate-900" id="main-page">
        {mouse.pageX && mouse.pageY && (
          <span
            className="lg:absolute hidden lg:inline pointer-events-none inset-0 "
            style={{
              background: `radial-gradient(600px at ${mouse.pageX}px ${mouse.pageY}px,rgba(29, 78, 216, 0.15), transparent 80%)`,
            }}
          ></span>
        )}
        <div
          className="flex lg:flex-row flex-col justify-center gap-20 text-slate-200/55 p-3"
          ref={homeRef}
        >
          <div className="top-0 lg:pt-40 pt-10 lg:sticky flex flex-col gap-5 bg-transparent lg:h-screen">
            <StaggeredText
              text="Abhijeet Karmakar"
              className="text-5xl text-white"
            />
            <StaggeredText text="Software Engineer" className="text-white" />
            <StaggeredText
              text="I love exploring new tech, and build something cool out of it!"
              className="lg:w-[300px]"
              staggeredDuration={0.05}
            />
            <div className="lg:block hidden">
              <div className="flex flex-row gap-2 justify-start items-center">
                <FadeIn>
                  <hr
                    className={`${
                      isAboutInView ? "w-[50px] text-white" : "w-[30px]"
                    }`}
                  />
                </FadeIn>
                <StaggeredText
                  text="ABOUT"
                  onclick={scrollIntoView}
                  targetRef={aboutRef}
                  className={`${isAboutInView ? "text-white" : ""}`}
                />
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <FadeIn>
                  <hr
                    className={`${
                      isExperienceInView ? "w-[50px] text-white" : "w-[30px]"
                    }`}
                  />
                </FadeIn>
                <StaggeredText
                  text="EXPERIENCE"
                  onclick={scrollIntoView}
                  targetRef={experienceRef}
                  className={`${isExperienceInView ? "text-white" : ""}`}
                />
              </div>
              <div className="flex flex-row gap-2 justify-start items-center">
                <FadeIn>
                  <hr
                    className={`${
                      isProjectInView ? "w-[50px] text-white" : "w-[30px]"
                    }`}
                  />
                </FadeIn>
                <StaggeredText
                  text="PROJECTS"
                  onclick={scrollIntoView}
                  targetRef={projectRef}
                  className={`${isProjectInView ? "text-white" : ""}`}
                />
              </div>
            </div>

            <Contact className="lg:absolute lg:bottom-24" />
          </div>
          <div className="lg:pt-40 pt-2 flex flex-col gap-5 lg:w-[600px] p-2">
            <div className="flex flex-col gap-32">
              <div ref={aboutRef}>
                <About />
              </div>
              <div ref={experienceRef}>
                <Experience />
              </div>
              <div ref={projectRef} className="mb-40">
                <Project />
              </div>
              {/* <div className=""></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
