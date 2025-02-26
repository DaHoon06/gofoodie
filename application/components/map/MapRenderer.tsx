"use client";

import React, { Suspense, useState } from "react";
import { Skeleton } from "../common/skeleton/Skeleton";
import * as styles from "./MapRenderer.css";
import { CurrentLocationButton } from "./CurrentLocationButton";

const KakaoMap = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("@/components/kakao/KakaoMap")), 2000);
    })
);

const KakaoAddressMap = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () => resolve(import("@/components/kakao/KakaoAddressMap")),
        2000
      );
    })
);

export const MapRenderer = (): React.ReactElement => {
  return (
    <Suspense fallback={<Skeleton height={300} isLoading={true} />}>
      <KakaoMap />
    </Suspense>
  );
};

export const AddressMapRenderer = (): React.ReactElement => {
  const [currentLocation, setCurrentLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return (
    <Suspense fallback={<Skeleton height={300} isLoading={true} />}>
      <div className={styles.AddressMapContainer}>
        <KakaoAddressMap currentLocation={currentLocation} />
        <CurrentLocationButton
          onClickCurrentLocation={(lat, lng) =>
            setCurrentLocation({ lat, lng })
          }
        />
      </div>
    </Suspense>
  );
};
