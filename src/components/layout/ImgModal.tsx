"use client";

import Image from "next/image";
import React from "react";

function ImgModal({ img, modalClose }: { img: string; modalClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={modalClose} // 모달 외부를 클릭하면 모달 닫기
    >
      {/* 모달 컨텐츠 */}
      <div
        className="bg-[#222222] p-6 rounded-lg w-full lg:w-1/2 h-[700px] relative overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 이벤트 전파를 막음
      >
        <div className="w-[400px] h-[400px] flex justify-center">
          <Image src={img} fill
            alt="modal_img" className="rounded-lg object-contain" />
        </div>

        {/* Close 버튼 */}
        <div className="flex justify-center mt-4">
          <button
            className="text-white text-sm font-bold p-2 bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
            onClick={modalClose}
          >
            이미지 닫기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImgModal;