import Image from "next/image";
import React from "react";

type Exp = {
  title: string;
  image: string;
  type: string;
  explain: string;
  date: string;
};

function ExpBlock({ data }: { data: Exp }) {
  return (
    <section className="flex flex-col min-h-[400px] border-[1px] border-transparent rounded-lg shadow-md bg-neutral-900 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ">
      <div className="relative w-full h-[90px] lg:h-[180px] overflow-hidden rounded-t-lg">
        <Image
          src={data.image}
          fill
          alt="image"
          className="object-cover filter"
        />
      </div>
      <div className="p-8">
        <p className="text-sm lg:text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          {data.title}
        </p>
        <p className="text-sm mb-2 flex items-center">
          <span className="text-sm material-icons text-purple-500 mr-2 hidden lg:flex">label</span>
          {data.type}
        </p>
        <p className="text-xs leading-relaxed mb-4">{data.explain}</p>
        <p className="text-xs flex items-center text-gray-400">{data.date}</p>
      </div>
    </section>
  );
}

export default ExpBlock;
