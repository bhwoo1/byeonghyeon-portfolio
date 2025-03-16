"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Project = {
  logo: string;
  name: string;
  date: string;
  images: string[];
  description: string;
  type: string;
  contribution: string;
  href: string;
  github: string;
  velog: string;
  stack: string[][];
  detail: string;
};

function ProjectPage({ project }: { project: Project }) {
  const {
    logo,
    name,
    date,
    images,
    description,
    href,
    github,
    velog,
    type,
    // contribution,
    detail
  } = project;
  // const [selectIndex, setSelectIndex] = useState(0);

  // const handleClickPreview = () => {
  //   if (selectIndex == 0) {
  //     setSelectIndex(images.length - 1);
  //   } else {
  //     setSelectIndex((prev) => prev - 1);
  //   }
  // };

  // const handleClickNext = () => {
  //   if (selectIndex == images.length - 1) {
  //     setSelectIndex(0);
  //   } else {
  //     setSelectIndex((prev) => prev + 1);
  //   }
  // };

  return (
    <section className="flex flex-col xl:flex-row items-center justify-center 2xl:justify-between gap-2 2xl:gap-8 w-full h-screen">
      <article className="flex flex-col text-white gap-2 pt-28 px-14 xl:px-12 2xl:px-28 w-full 2xl:w-[800px]">
        <div className="flex flex-row items-center gap-4">
          <div className="relative w-[80px] h-[80px]">
            <Image
              src={logo}
              fill
              alt="project_image"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[18px] lg:text-[24px]">{name}</p>
            <p className="text-sm">{date}</p>
            <p className="text-sm">{type}</p>
            {/* <p className="text-xs">기여도: {contribution}</p> */}
          </div>
        </div>
        <p>{description}</p>

        {href != "" && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block border-2 border-gray-300 items-center rounded-lg text-center p-3 shadow-md font-semibold hover:underline"
          >
            바로가기
          </a>
        )}
        <div className="w-full flex flex-row gap-2">
          {velog != "" && (
            <a
              href={velog}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block border-2 border-gray-300 items-center rounded-lg text-center p-3 shadow-md font-semibold hover:underline"
            >
              개발일지
            </a>
          )}
          {github != "" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block border-2 border-gray-300 items-center rounded-lg text-center p-3 shadow-md font-semibold hover:underline"
            >
              Github
            </a>
          )}
        </div>
        <Link href={`/project/${detail}`}>
          <div className="w-full cursor-pointer block border-2 border-gray-300 rounded-lg text-center p-3 shadow-md font-semibold hover:underline">
            자세히보기
          </div>
        </Link>
      </article>
      <article className="flex flex-col mb-12">
        <div className="relative w-48 h-40 lg:w-[1000px] lg:h-[800px]">
          <Image
            src={images[0]}
            fill
            alt="project_image"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        {/* {images.length != 1 && (
          <div className="flex flex-row justify-center items-center gap-8">
            <button onClick={handleClickPreview}>
              <div className="border-2 border-gray-300 rounded-full p-3 shadow-md">
                <FaArrowLeft color="white" />
              </div>
            </button>
            <button onClick={handleClickNext}>
              <div className="border-2 border-gray-300 rounded-full p-3 shadow-md">
                <FaArrowRight color="white" />
              </div>
            </button>
          </div>
        )} */}
      </article>
    </section>
  );
}

export default ProjectPage;
