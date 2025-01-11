import Image from "next/image";
import React from "react";

function University() {
  return (
    <div className={`flex flex-row p-4 items-center gap-4`}>
      <div className="relative w-[100px] h-[100px]">
        <Image src={"/gwnu.png"} alt="gwnu" fill />
      </div>
      <div className="flex flex-col text-left">
        <p className="font-bold text-xl mb-2">{"강릉원주대학교"}</p>
        <p className="">2018.03 - 2024.02</p>
        <p className="">{"컴퓨터공학과"}</p>
      </div>
    </div>
  );
}

export default University;
