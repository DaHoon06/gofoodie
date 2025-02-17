import type { Metadata } from "next";
import "@/styles/reset.scss";
import React from "react";
import { Layout } from "@/layouts";
import AuthContext from "@/shared/context/AuthContext";
import AuthProvider from "@/shared/providers/AuthProvider";
import { AppProvider } from "./(app)";

export const metadata: Metadata = {
  title: "배~고푸디? 배고플땐 고푸디 | go foodie",
  description: "배~고푸디? 배고플땐 고푸디",
  keywords:
    "맛집, 레시피, 동네맛집, 맛, 맛집 리스트, 맛집 정보, 음식, 음식점, 데이트, 푸디, 고푸디, dahoon06, gofoodie, GoFoodie, go-foodie, goFoodie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <AppProvider>
          <AuthContext>
            <AuthProvider>
              <Layout>{children}</Layout>
            </AuthProvider>
          </AuthContext>
        </AppProvider>
      </body>
    </html>
  );
}
