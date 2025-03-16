import React from "react";
import { FaGithub, FaArrowUp } from "react-icons/fa"; // 아이콘 추가
import { SiVelog } from "react-icons/si";

function RemoteControl() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <div className="fixed bottom-0 right-0 flex-col gap-4 xl:gap-8 flex justify-around items-center text-center py-3 px-8 text-white mb-12 z-30">
      {/* Scroll to Top Button */}
      <div
        className="flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 xl:w-16 h-12 xl:h-16 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-xl lg:text-2xl group-hover:text-blue-400 transition duration-300" />
      </div>

      {/* GitHub Button */}
      <div className="flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 lg:w-16 h-12 lg:h-16 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://github.com/bhwoo1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl lg:text-2xl group-hover:text-blue-400 transition duration-300" />
        </a>
      </div>

      {/* Velog Button */}
      <div className="flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 lg:w-16 h-12 lg:h-16 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://velog.io/@bhwoo1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVelog className="text-xl lg:text-2xl group-hover:text-blue-400 transition duration-300" />
        </a>
      </div>
    </div>
  );
}

export default RemoteControl;
