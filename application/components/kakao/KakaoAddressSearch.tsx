// "use client";

// import useFeedStore from "@states/store/feedStore";
// import React, { useEffect, useState } from "react";
// import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
// import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import { AddressState } from "@interfaces/feeds/feed.post";
// import { KakaoAddressDocument } from "@interfaces/kakao";
// import { KAKAO_REST_KEY } from "@config/processConfig";

// export const KakaoAddressSearch = () => {
//   const { setFeedItem, item } = useFeedStore();
//   const [address, setAddress] = useState<AddressState>({
//     name: "",
//     x: "",
//     y: "",
//     sido: "",
//     sigungu: "",
//   });

//   useEffect(() => {
//     setFeedItem({
//       ...item,
//       address,
//     });
//   }, [address]);

//   const handleComplete = (data: Address) => {
//     const headers = {
//       "content-type": "application/json;charset=UTF-8",
//       Authorization: `KakaoAK ${KAKAO_REST_KEY}`,
//     };
//     const url = `https://dapi.kakao.com/v2/local/search/address?query=${data.address}`;
//     axios
//       .get<
//         AxiosRequestConfig,
//         AxiosResponse<{ documents: KakaoAddressDocument[] }>
//       >(url, {
//         headers,
//       })
//       .then((res) => {
//         const { documents } = res.data;
//         if (documents.length > 0) {
//           const { address } = documents[0];
//           const { address_name, region_1depth_name, region_2depth_name, x, y } =
//             address;
//           const addressData = {
//             name: address_name,
//             sido: region_1depth_name,
//             sigungu: region_2depth_name,
//             x,
//             y,
//           };

//           setAddress(addressData);
//         }
//       });
//   };

//   return (
//     <div>
//       <DaumPostcodeEmbed onComplete={handleComplete} />
//     </div>
//   );
// };
