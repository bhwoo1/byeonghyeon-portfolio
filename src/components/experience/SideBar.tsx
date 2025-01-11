import React from "react";

function SideBar({ children, title }: { children: React.ReactNode, title:string }) {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <nav className="flex flex-col w-[240px]">
        <div className="text-[24px] lg:text-[48px] font-bold text-center lg:text-start">
            {title}
        </div>
      </nav>
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
}

export default SideBar;
