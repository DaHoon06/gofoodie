"use client";

import React, { Suspense } from "react";
import { Skeleton } from "../common/skeleton/Skeleton";

const KakaoMap = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@/components/kakao/KakaoMap")), 2000);
    })
);

export const MapRenderer = (): React.ReactElement => {
  return (
    <Suspense fallback={<Skeleton height={300} isLoading={true} />}>
      <KakaoMap />
    </Suspense>
  );
};
