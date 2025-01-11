"use client";

import { menuIn, menuOut } from "@/utils/animations";
import React, { useEffect } from "react";
import Navigator from "./Navigator";

function Menu({ menuClose }: { menuClose: (value: boolean) => void }) {
  useEffect(() => {
    menuIn();
  }, []);

  const handleClose = () => {
    menuOut(() => menuClose(false)); // 애니메이션 후 상태 변경
  };

  return (
    <section
      id="menu"
      className="flex h-screen w-full bg-blue-500 fixed top-0 left-0 z-40 flex-col"
    >
      <div className="fixed flex flex-row top-0 left-0 z-50 w-full h-[50px] lg:h-[100px] justify-end ">
        <button className='mx-12 font-bold text-[18px] text-white' onClick={handleClose}>CLOSE</button>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Navigator menuClose={menuClose}/>
      </div>
    </section>
  );
}

export default Menu;
