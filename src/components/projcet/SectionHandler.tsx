"use client";

import { useSearchParams } from "next/navigation";
import React, { RefObject, useEffect } from "react";
import ProjectPage from "@/components/projcet/ProjectPage";

interface Project {
    logo: string,
    name: string,
    date: string,
    images: string[],
    description: string,
    type: string,
    contribution: string,
    href: string,
    velog: string,
    github: string,
    stack: string[][],
    detail: string,
    description_long: string,
    detailImage: string[],
    function: string[],
}

interface SectionHandlerProps {
    projects: Project[];
    sectionRefs: RefObject<(HTMLDivElement | null)[]>;
    addSectionRef: (el: HTMLDivElement | null) => void;
  }

  const SectionHandler: React.FC<SectionHandlerProps> = ({
    projects,
    sectionRefs,
    addSectionRef,
  }) => {
  const searchParams = useSearchParams();
  const sectionQuery = searchParams.get("section");

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    if (sectionQuery) {
      const sectionIndex = parseInt(sectionQuery, 10) - 1;
      if (
        !isNaN(sectionIndex) &&
        sectionIndex >= 0 &&
        sectionIndex < projects.length
      ) {
        scrollToSection(sectionIndex);
      }
    }
  }, [sectionQuery]);

  return (
    <>
      {projects.map((project, index) => (
        <section
          key={project.name}
          ref={addSectionRef}
          className={`h-screen flex flex-col items-center justify-center ${
            index === 0
              ? "bg-blue-500"
              : index === 1
              ? "bg-violet-500"
              : "bg-emerald-500"
          }`}
        >
          <ProjectPage project={project} />
        </section>
      ))}
    </>
  );
};

export default SectionHandler;