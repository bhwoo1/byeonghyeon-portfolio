"use client";

import { menuOut } from "@/utils/animations";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

function Navigator({ menuClose }: { menuClose: (value: boolean) => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const routes = useMemo(() => {
    return [
      {
        label: "ABOUT",
        isActive: pathname === "/" || pathname === "/ack2023" || pathname === "/aicompetition",
        href: "/",
      },
      {
        label: "PROJECTS",
        isActive: pathname.startsWith("/project"),
        href: "/project",
      },
      // {
      //   label: "CONTACT",
      //   isActive: false,
      //   href: "/mailto:byeonghyeon0116@gmail.com",
      // },
    ];
  }, [pathname]);

  const routePush = (href: string) => {
    // 메뉴 닫기 애니메이션 후 페이지 전환
    menuOut(() => {
      router.push(href); // 페이지 이동
      menuClose(false);  // 상태 변경
    });
  };

  return (
    <div className="flex flex-col items-start justify-start m-11 gap-8">
      {routes.map((route) => (
        <div
          key={route.label}
          id="menu-item"
          onClick={() => routePush(route.href)}
          className={`cursor-pointer font-bold text-[48px] items-start gap-1 flex flex-col transition ${
            route.isActive ? "text-white" : "text-black"
          }`}
        >
          {route.label}
        </div>
      ))}
    </div>
  );
}

export default Navigator;
