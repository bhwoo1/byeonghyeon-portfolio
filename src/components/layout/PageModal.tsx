"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function PageModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isModalClosed, setIsModalClosed] = useState(false);
  const pathname = usePathname();

  const closeModal = () => {
    setIsModalClosed(true);
    if (pathname.startsWith('/project')) {
      router.push('/project')
    }
    else {
      router.push('/')
    }
  };

  if (isModalClosed) {
    return null; // 모달이 닫혔을 때 컴포넌트가 렌더링되지 않도록 함
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal} // 모달 외부를 클릭하면 모달 닫기
    >
      {/* Close 버튼을 화면(viewport) 기준으로 고정 */}
      <button
        className="fixed text-white text-sm font-bold top-10 right-10 z-50 flex flex-col group cursor-pointer p-2 bg-black rounded-full w-12 lg:w-16 h-12 lg:h-16 justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110" // fixed를 사용하여 뷰포트 기준으로 위치 고정
        onClick={closeModal}
      >
        X
      </button>

      {/* 모달 컨텐츠 */}
      <div
        className="bg-[#222222] p-6 rounded-lg w-full max-h-screen lg:w-4/5 lg:max-h-screen relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 이벤트 전파를 막음
      >
        <main>{children}</main>
      </div>
    </div>
  );
}

export default PageModal;
