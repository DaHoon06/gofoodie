"use client";

import React, { Suspense } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import MswProvider from "./MswProvider";

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <MswProvider>
      <ReactQueryProvider>
        <Suspense>{children}</Suspense>
      </ReactQueryProvider>
    </MswProvider>
  );
};

export default AppProvider;
