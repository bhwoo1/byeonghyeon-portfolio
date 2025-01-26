"use client";

import ProjectList from "@/components/projcet/ProjectList";
import ProjectPage from "@/components/projcet/ProjectPage";
import RemoteControl from "@/components/RemoteControl";
import { projectData } from "@/data/projectData";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

const Page = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projects = projectData;
  const searchParams = useSearchParams();
  const sectionQuery = searchParams.get("section");

  // ref 추가 시 불변성 유지
  const addSectionRef = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current = [...sectionRefs.current, el]; // 불변성 유지
    }
  };

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // 부드러운 스크롤
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
    <main className="w-full h-screen">
      <section className="h-screen">
        <ProjectList onScrollToSection={scrollToSection} />
      </section>
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
      <div className="flex justify-center items-center">
        <RemoteControl />
      </div>
    </main>
  );
};

export default Page;
