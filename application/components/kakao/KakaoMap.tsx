"use client";

import { KAKAO_APP_KEY } from "@/shared/config";
import React, { useEffect, useRef } from "react";

const mapData: any[] = [];

const KakaoMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const drawMarker = async (kakao: any, map: any): Promise<void> => {
    const positions: any[] = mapData.map((value: any) => {
      const { feedId, x, y, title, shopId, address, description } = value;
      return {
        feedId,
        title,
        shopId,
        address,
        description,
        latlng: new kakao.maps.LatLng(+y, +x),
      };
    });

    const imageSrc =
      "https://gofoodie-images.s3.ap-northeast-2.amazonaws.com/assets/marker.svg";

    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(20, 30);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const content =
        '<div class="wrap">' +
        '    <div class="info">' +
        '        <div class="title">' +
        `            <span >${positions[i].title}</span>` +
        "        </div>" +
        '        <div class="body">' +
        '            <div class="desc">' +
        `                <div class="jibun ellipsis">${positions[i].description}</div>` +
        `                <div class="ellipsis">${positions[i].address}</div>` +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });

      const { La, Ma } = marker.getPosition();
      const position = new kakao.maps.LatLng(Ma, La);
      const overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: position,
      });

      overlay.setMap(null);

      kakao.maps.event.addListener(
        marker,
        "click",
        makeClickListener(map, overlay)
      );

      let isOpen = false;

      function makeClickListener(map: any, overlay: any) {
        return function () {
          isOpen = !isOpen;
          if (isOpen) overlay.setMap(map);
          else overlay.setMap(null);
        };
      }
    }
  };

  useEffect(() => {
    if (!mapData || !mapContainer.current) return;

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const kakao: any = (window as any).kakao;
      kakao.maps.load(() => {
        const mapElement = mapContainer.current;
        if (!mapElement) return;

        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const options = {
            center: new kakao.maps.LatLng(lat, lon),
            level: 7,
          };
          const map = new kakao.maps.Map(mapElement, options);
          map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

          drawMarker(kakao, map); // 여기서 실행
          map.setCenter(new kakao.maps.LatLng(lat, lon));
        });
      });
    };
  }, [mapData]); // mapData 변경 시 다시 실행

  return (
    <div
      id={"map"}
      ref={mapContainer}
      style={{
        width: "100%",
        height: 300,
      }}
    />
  );
};

export default KakaoMap;
