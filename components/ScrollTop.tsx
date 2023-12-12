"use client";

import { TfiArrowUp } from "react-icons/tfi";

export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="cursor-pointer bg-[#013240] dark:bg-[#EFF0F2] text-[#EFF0F2] dark:text-[#013240] 
      text-3xl w-14 h-14 grid items-center justify-center rounded-full fixed right-10 bottom-5"
    >
      <TfiArrowUp />
    </div>
  );
}
