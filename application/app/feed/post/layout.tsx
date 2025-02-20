import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "여러분의 이야기를 들려주세요. | 고푸디",
  description: "미식가들의 식도락 여행기 | 고푸디",
  keywords:
    "맛집, 레시피, 동네맛집, 맛, 맛집 리스트, 맛집 정보, 음식, 음식점, 데이트, 푸디, 고푸디, dahoon06, gofoodie, GoFoodie, go-foodie, goFoodie",
};

export default function FeedPostLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
