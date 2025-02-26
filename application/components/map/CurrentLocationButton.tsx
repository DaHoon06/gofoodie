"use client";

import * as styles from "./CurrentLocationButton.css";
import { MdOutlineMyLocation } from "react-icons/md";

interface CurrentLocationButtonProps {
  onClickCurrentLocation?: (lat: number, lng: number) => void;
}

export const CurrentLocationButton = ({
  onClickCurrentLocation,
}: CurrentLocationButtonProps) => {
  const handleClickCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          onClickCurrentLocation && onClickCurrentLocation(latitude, longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log("Geolocation is not available");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClickCurrentLocation}
      className={styles.CurrentLocationButtonLayout}
      aria-label="현재 위치로 이동"
    >
      <MdOutlineMyLocation size={20} color={"#f2f2f2"} />
    </button>
  );
};
