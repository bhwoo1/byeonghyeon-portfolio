import React from "react";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

function Contract() {
  return (
    <div className="flex flex-col gap-12 text-center lg:text-start">
      <section className="flex flex-col gap-4">
        <p className="text-[40px] font-bold">우병현</p>
        {/* <div className="flex-row items-center gap-4 font-bold hidden">
          <FaPhoneAlt />
          <a href="tel:+8210-7131-5203">010 - 7131 - 5203</a>
        </div> */}
        <div className="flex flex-row items-center gap-4 font-bold">
          <IoMailSharp />
          <a href="mailto:byeonghyeon0116@gmail.com">
            byeonghyeon0116@gmail.com
          </a>
        </div>
      </section>
      <section className="flex flex-row gap-12 text-center items-center justify-center lg:text-start lg:items-start lg:justify-start">
        {/* <a
          href="https://www.linkedin.com/in/byeonghyeon-woo-82b284262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xl m-2">
            <FaLinkedin />
          </p>
        </a> */}
        <a
          href="https://github.com/bhwoo1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xl m-2">
            <FaGithub />
          </p>
        </a>
        <a
          href="https://velog.io/@bhwoo1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-xl m-2">
            <SiVelog />
          </p>
        </a>
      </section>
    </div>
  );
}

export default Contract;
