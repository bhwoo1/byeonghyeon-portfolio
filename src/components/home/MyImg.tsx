"use client"

import Image from "next/image";
import React from "react";

function MyImg() {
  return (
    <div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] -z-10">
      <Image
        src={"/em1.png"}
        fill
        alt="profile_img"
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default MyImg;
