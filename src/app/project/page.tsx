"use client";

import ProjectList from "@/components/projcet/ProjectList";
import SectionHandler from "@/components/projcet/SectionHandler";
import RemoteControl from "@/components/RemoteControl";
import { projectData } from "@/data/projectData";
import React, { useRef } from "react"; // 새로 분리된 컴포넌트

const Page = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const projects = projectData;

  // ref 추가 시 불변성 유지
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

  return (
    <main className="w-full h-screen">
      <section className="h-screen">
        <ProjectList onScrollToSection={scrollToSection} />
      </section>
      <SectionHandler
        projects={projects}
        sectionRefs={sectionRefs}
        addSectionRef={addSectionRef}
      />
      <div className="flex justify-center items-center">
        <RemoteControl />
      </div>
    </main>
  );
};

export default Page;
