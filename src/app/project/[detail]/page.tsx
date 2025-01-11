"use client";

import CheckSVG from "@/components/CheckSVG";
import ImgModal from "@/components/layout/ImgModal";
import { projectData } from "@/data/projectData";
import Image from "next/image";
import { redirect, useParams } from "next/navigation";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

function DetailPage() {
  const params = useParams<{ detail: string }>();
  const detail = params.detail;

  // detail에 맞는 프로젝트 데이터 찾기
  const project = projectData.find((project) => project.detail === detail);

  if (!project) {
    redirect("/project");
  }

  const [selectedImg, setSelectedImg] = useState("");
  const [isImgModalOpen, setIsImgModalOpen] = useState(false);

  const imgClick = (img: string) => {
    setSelectedImg(img);
    setIsImgModalOpen(true);
  };

  const modalClose = () => {
    setSelectedImg("");
    setIsImgModalOpen(false);
  };

  return (
    <main className="w-full px-2 lg:px-48 mt-48 gap-4">
      <section className="px-2 lg:px-48 hidden lg:flex">
        <div className="relative  lg:w-[50px] lg:h-[50px]">
          <Image
            src={project.logo}
            fill
            objectFit="scale"
            alt="main_images"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            quality={35}
          />
        </div>
      </section>
      <section className="px-2 lg:px-48 ">
        <article className="flex flex-col gap-1">
          <p className="font-bold text-[48px]">{project.name}</p>
          <p>{project.date}</p>
          {project.description_long.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </article>
        <article className="mt-12">
          <p className="text-[32px] font-bold border-b-2 border-gray-300 pb-2 mb-6">
            주요 기능
          </p>
          <ul className="space-y-4">
            {project.function.map((feature, index) => (
              <li className="flex items-center text-lg transition" key={index}>
                <span className="mr-3 text-blue-500">
                  <CheckSVG />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </article>
        <article className="mt-12">
          <p className="text-[32px] font-bold border-b-2 border-gray-300 pb-2 mb-6">
            사용 기술
          </p>
          <ul className="space-y-4">
            {project.stack.map(([tech, ...rest], index) => (
              <li className="flex items-center text-lg transition" key={index}>
                <span className="mr-3 text-blue-500">
                  <CheckSVG />
                </span>
                {tech} {rest.length > 0 && `, ${rest.join(", ")}`}
              </li>
            ))}
          </ul>
        </article>
        <article className="mt-12">
          <p className="text-[32px] font-bold border-b-2 border-gray-300 pb-2 mb-6">
            상세 이미지
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden">
            {project.detailImage.map((image, index) => (
              <div
                key={index}
                className="relative w-[100px] h-[100px] overflow-hidden cursor-pointer"
                onClick={() => imgClick(image)}
              >
                <Image
                  src={image}
                  fill
                  alt="project_image"
                  className="hover:scale-110 duration-300 transition"
                />
              </div>
            ))}
          </div>
        </article>
        <section className="flex flex-row gap-12 my-12 ">
          <div className="flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 lg:w-20 h-12 lg:h-20 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-lg lg:text-3xl group-hover:text-blue-400 transition duration-300" />
            </a>
            <p className="hidden lg:flex font-bold group-hover:text-blue-400 transition duration-300">
              Github
            </p>
          </div>
          <div className="flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 lg:w-20 h-12 lg:h-20 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <a href={project.velog} target="_blank" rel="noopener noreferrer">
              <SiVelog className="text-lg lg:text-3xl group-hover:text-blue-400 transition duration-300" />
            </a>
            <p className="hidden lg:flex font-bold group-hover:text-blue-400 transition duration-300">
              개발일지
            </p>
          </div>
          {project.href && (
            <div className="flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 lg:w-20 h-12 lg:h-20 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
              <a href={project.href} target="_blank" rel="noopener noreferrer">
                <FaLink className="text-lg lg:text-3xl group-hover:text-blue-400 transition duration-300" />
              </a>
              <p className="hidden lg:flex font-bold group-hover:text-blue-400 transition duration-300">
                바로가기
              </p>
            </div>
          )}
        </section>
      </section>
      {isImgModalOpen && selectedImg && (
        <ImgModal img={selectedImg} modalClose={modalClose} />
      )}
    </main>
  );
}

export default DetailPage;
