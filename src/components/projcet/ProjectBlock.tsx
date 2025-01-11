"use client";

import Image from "next/image";
import React from "react";

type Project = {
  logo: string;
  name: string;
  date: string;
};

function ProjectBlock({ project }: { project: Project }) {
  const { logo, name, date } = project;

  return (
    <div className="bg-white w-[100px] h-auto lg:w-[400px] lg:h-[200px] cursor-pointer text-center flex flex-col lg:flex-row items-center rounded-xl shadow-lg overflow-hidden transition-all transform group hover:shadow-2xl">
      {/* 이미지 영역 */}
      <div className="relative w-[100px] h-[50px] lg:w-[200px] lg:h-[100px] group-hover:scale-110 transition">
        <Image
          src={logo}
          fill
          alt="project_image"
          className="object-cover rounded-lg"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      {/* 텍스트 영역 */}
      <div className="flex flex-col p-4 space-y-2">
        <p className="font-bold text-[15px] lg:text-[24px] text-gray-800">
          {name}
        </p>
        <p className="text-gray-500 text-[8px] lg:text-[14px]">{date}</p>
      </div>
    </div>
  );
}

export default ProjectBlock;
