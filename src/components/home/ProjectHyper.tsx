import { projectData } from "@/data/projectData";
import React from "react";
import ProjectBlock from "../projcet/ProjectBlock";
import Link from "next/link";

function ProjectHyper() {
  const projects = projectData;
  return (
    <div className="w-full lg:w-2/3 lg:p-24 p-20 flex flex-col gap-4">
      <p className="text-4xl font-bold">Projects</p>
      <p className="text-sm">각 항목을 클릭하시면 해당 페이지로 이동합니다.</p>

      <article className="mt-20 grid grid-cols-2 gap-8 lg:gap-12">
        {projects.map((projects, index) => (
          <Link key={projects.name} href={`/project/?section=${index + 1}`}>
            <ProjectBlock project={projects} />
          </Link>
        ))}
      </article>
    </div>
  );
}

export default ProjectHyper;
