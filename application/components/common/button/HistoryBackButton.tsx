"use client";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export const HistoryBackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button type="button" onClick={handleClick}>
      <IoIosArrowBack size={18} color={"#7a7a7a"} />
    </button>
  );
};
