"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import useFeedStore from "@/shared/store/feedStore";
import { AddressState } from "@/typings/feed/feedPost";
import { KAKAO_APP_KEY } from "@/shared/config";

interface KakaoAddressMapProps {
  currentLocation?: { lat: number; lng: number } | null;
}

const KakaoAddressMap = ({
  currentLocation,
}: KakaoAddressMapProps): ReactElement => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { setFeedItem, item } = useFeedStore();
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [infowindow, setInfowindow] = useState<any>(null);
  const [address, setAddress] = useState<AddressState>({
    name: "",
    x: "",
    y: "",
    sido: "",
    sigungu: "",
  });

  useEffect(() => {
    setFeedItem({
      ...item,
      address,
    });
  }, [address]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false&libraries=services`;
      script.type = "text/javascript";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const kakao: any = (window as any).kakao;
        kakao.maps.load(() => {
          const mapElement = document.getElementById("map");

          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            const options = {
              center: new kakao.maps.LatLng(lat, lon),
              level: 4,
            };

            const mapInstance = new kakao.maps.Map(mapElement, options);
            const geocoder = new kakao.maps.services.Geocoder();
            const markerInstance = new kakao.maps.Marker(); // 클릭한 위치를 표시할 마커입니다
            const infowindowInstance = new kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다

            searchAddrFromCoords(mapInstance.getCenter(), displayCenterInfo);

            setMap(mapInstance);
            setMarker(markerInstance);
            setInfowindow(infowindowInstance);

            kakao.maps.event.addListener(
              mapInstance,
              "click",
              function (mouseEvent: any) {
                searchDetailAddrFromCoords(
                  mouseEvent.latLng,
                  function (result: any, status: any) {
                    const { address } = result[0];
                    const {
                      address_name,
                      region_1depth_name,
                      region_2depth_name,
                    } = address;

                    if (status === kakao.maps.services.Status.OK) {
                      var detailAddr = !!result[0].road_address
                        ? "<div>도로명주소 : " +
                          result[0].road_address.address_name +
                          "</div>"
                        : "";
                      detailAddr +=
                        "<div>지번 주소 : " +
                        result[0].address.address_name +
                        "</div>";

                      const content =
                        '<div class="map_label">' + detailAddr + "</div>";

                      // 마커를 클릭한 위치에 표시합니다
                      markerInstance.setPosition(mouseEvent.latLng);
                      markerInstance.setMap(mapInstance);

                      // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                      infowindowInstance.setContent(content);
                      infowindowInstance.open(mapInstance, markerInstance);

                      const x = String(mouseEvent.latLng.getLng());
                      const y = String(mouseEvent.latLng.getLat());

                      const address = {
                        x,
                        y,
                        name: address_name,
                        sido: region_1depth_name,
                        sigungu: region_2depth_name,
                      };
                      setAddress(address);
                    }
                  }
                );
              }
            );

            // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
            kakao.maps.event.addListener(mapInstance, "idle", function () {
              searchAddrFromCoords(mapInstance.getCenter(), displayCenterInfo);
            });

            function searchAddrFromCoords(coords: any, callback: any) {
              // 좌표로 행정동 주소 정보를 요청합니다
              geocoder.coord2RegionCode(
                coords.getLng(),
                coords.getLat(),
                callback
              );
            }

            function searchDetailAddrFromCoords(coords: any, callback: any) {
              // 좌표로 법정동 상세 주소 정보를 요청합니다
              geocoder.coord2Address(
                coords.getLng(),
                coords.getLat(),
                callback
              );
            }

            // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
            function displayCenterInfo(result: any, status: any) {
              // if (status === kakao.maps.services.Status.OK) {
              //   var infoDiv = document.getElementById('centerAddr');
              //
              //   for(var i = 0; i < result.length; i++) {
              //     // 행정동의 region_type 값은 'H' 이므로
              //     if (result[i].region_type === 'H') {
              //       infoDiv.innerHTML = result[i].address_name;
              //       break;
              //     }
              //   }
              // }
            }
          });
        });
      };
    }
  }, [mapContainer]);

  useEffect(() => {
    if (map && marker && infowindow && currentLocation) {
      const kakao: any = (window as any).kakao;
      const geocoder = new kakao.maps.services.Geocoder();
      const newCenter = new kakao.maps.LatLng(
        currentLocation.lat,
        currentLocation.lng
      );

      // 지도 중심 이동
      map.setCenter(newCenter);

      // 마커 위치 설정
      marker.setPosition(newCenter);
      marker.setMap(map);

      // 좌표로 주소 변환
      geocoder.coord2Address(
        currentLocation.lng,
        currentLocation.lat,
        (result: any, status: any) => {
          if (status === kakao.maps.services.Status.OK) {
            const addressInfo = result[0].address;
            const roadAddress = result[0].road_address
              ? result[0].road_address.address_name
              : "";
            const jibunAddress = addressInfo.address_name;

            const content = `
              <div style="padding:5px;font-size:14px;">
                <strong>현재 위치</strong><br>
                ${roadAddress ? `도로명: ${roadAddress}<br>` : ""}
                지번: ${jibunAddress}
              </div>
            `;

            // 인포윈도우 내용 설정 및 표시
            infowindow.setContent(content);
            infowindow.open(map, marker);

            // 상태 업데이트
            setAddress({
              x: String(currentLocation.lng),
              y: String(currentLocation.lat),
              name: addressInfo.address_name,
              sido: addressInfo.region_1depth_name,
              sigungu: addressInfo.region_2depth_name,
            });
          }
        }
      );
    }
  }, [currentLocation, map, marker, infowindow]);

  return (
    <div
      id={"map"}
      ref={mapContainer}
      style={{
        width: "100%",
        height: 400,
      }}
    />
  );
};

export default KakaoAddressMap;
