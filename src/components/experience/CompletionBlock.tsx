import Image from "next/image";
import React from "react";

type data = {
  title: string;
  image: string;
  href: string;
};

function CompletionBlock({ data }: { data: data }) {
  return (
    <a href={data.href} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-row gap-4 items-center p-4 bg-neutral-600 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
        {/* 이미지 섹션 */}
        <div className="relative w-[60px] h-[60px] overflow-hidden rounded-full border-2 border-blue-500">
          <Image
            src={data.image}
            fill
            alt="edu_image"
            className="object-cover"
          />
        </div>

        {/* 텍스트 섹션 */}
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-200">{data.title}</p>
          <p className="text-sm text-gray-400 mt-1">수료</p>
        </div>
      </div>
    </a>
  );
}

export default CompletionBlock;
