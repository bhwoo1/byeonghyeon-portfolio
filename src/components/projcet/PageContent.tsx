"use client";

import React, { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import ProjectList from "@/components/projcet/ProjectList";
import ProjectPage from "@/components/projcet/ProjectPage";
import RemoteControl from "@/components/RemoteControl";
import { projectData } from "@/data/projectData";

function PageContent() {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const projects = projectData;
    const searchParams = useSearchParams();
    const sectionQuery = searchParams.get("section");

    const addSectionRef = (el: HTMLDivElement | null) => {
      if (el && !sectionRefs.current.includes(el)) {
        sectionRefs.current = [...sectionRefs.current, el];
      }
    };

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
    }, [sectionQuery, projects]);

    return (
      <main className="w-screen h-screen overflow-x-hidden">
        <section className="h-screen w-screen">
          <ProjectList onScrollToSection={scrollToSection} />
        </section>
        {projects.map((project, index) => (
          <section
            key={project.name}
            ref={addSectionRef}
            className={`w-screen h-screen flex flex-col items-center justify-center ${
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
        <div className="flex justify-center items-center w-screen">
          <RemoteControl />
        </div>
      </main>
    );
}

export default PageContent;