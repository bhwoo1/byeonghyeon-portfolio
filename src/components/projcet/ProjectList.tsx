import React from "react";
import ProjectBlock from "./ProjectBlock";
import { projectData } from "@/data/projectData";

interface ProjectListProps {
  onScrollToSection: (index: number) => void;
}

function ProjectList({ onScrollToSection }: ProjectListProps) {
  const projects = projectData;
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-teal-500">
      <p className="font-bold text-[54px] text-white">PROJECTS</p>
      <p className="text-white text-sm">
        각 항목을 클릭하시면 해당 페이지로 이동합니다.
      </p>

      <article className="mt-20 grid grid-cols-2 gap-8 lg:gap-12">
        {projects.map((projects, index) => (
          <div key={projects.name} onClick={() => onScrollToSection(index)}>
            <ProjectBlock project={projects} />
          </div>
        ))}
      </article>
    </section>
  );
}

export default ProjectList;
