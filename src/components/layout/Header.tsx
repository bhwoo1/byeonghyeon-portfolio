"use client";

import React, { useEffect, useState } from "react";
import Menu from "./Menu";

function Header({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="flex flex-col">
      <section
        className={`fixed flex flex-row top-0 left-0 z-40 w-full h-[50px] lg:h-[100px] justify-end transition duration-300 ${
          isScrolled ? "bg-[#222222]" : "bg-none text-white"
        }`}
      >
        <button className="mx-12 font-bold text-[18px]" onClick={() => setIsOpen(true)}>MENU</button>
        {isOpen &&
          <Menu menuClose={setIsOpen} />
        }
      </section>
      <div className="relative">
        <div className="h-[calc(100%-100px)] ">{children}</div>
      </div>
    </header>
  );
}

export default Header;
