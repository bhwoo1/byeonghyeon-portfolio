"use client";

import ProjectList from "@/components/projcet/ProjectList";
import ProjectPage from "@/components/projcet/ProjectPage";
import RemoteControl from "@/components/RemoteControl";
import { projectData } from "@/data/projectData";
import React, { useRef } from "react";

const Page = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projects = projectData;

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

  return (
    <main className="w-full h-screen">
      
      <section className="h-screen">
        <ProjectList onScrollToSection={scrollToSection} />
      </section>

      {/* 각 섹션에 ref 추가 */}
      <section
        ref={addSectionRef}
        className="h-screen flex flex-col items-center justify-center bg-blue-500"
      >
        <ProjectPage project={projects[0]} />
      </section>
      <section
        ref={addSectionRef}
        className="h-screen flex flex-col items-center justify-center bg-violet-500"
      >
        <ProjectPage project={projects[1]} />
      </section>
      <section
        ref={addSectionRef}
        className="h-screen flex flex-col items-center justify-center bg-emerald-500"
      >
        <ProjectPage project={projects[2]} />
      </section>
      <div className="flex justify-center items-center">
        <RemoteControl />
      </div>
    </main>
  );
}

export default Page;