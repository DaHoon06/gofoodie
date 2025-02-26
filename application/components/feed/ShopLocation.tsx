"use client";

import { LocationState } from "@/shared/store";
import useFeedStore from "@/shared/store/feedStore";
import useModalStore, { ModalType, OpenType } from "@/shared/store/modalStore";
import { useState } from "react";
import * as styles from "./ShopLocation.css";
import { FlexBox } from "../common/boxes";
import { IoAdd, IoClose } from "react-icons/io5";
import { LocationTabs } from "./LocationTabs";
import { ShopTitle } from "./ShopTitle";
import { Button } from "../common/button";
import { Typography } from "../common/typography";
import { AddressMapRenderer } from "../map";

const categories = [
  { label: "한식", key: "한식" },
  { label: "카페/디저트", key: "카페/디저트" },
  { label: "중식", key: "분식" },
  { label: "샌드위치", key: "샌드위치" },
  { label: "샐러드", key: "샐러드" },
  { label: "회/초밥", key: "회/초밥" },
  { label: "버거", key: "버거" },
  { label: "일식/돈까스", key: "일식/돈까스" },
  { label: "양식/피자", key: "양식/피자" },
  { label: "아시안", key: "아시안" },
  { label: "고기/구이", key: "고기/구이" },
  { label: "찜/탕", key: "찜/탕" },
  { label: "족발/보쌈", key: "족발/보쌈" },
  { label: "야식", key: "야식" },
  { label: "도시락/죽", key: "도시락/죽" },
];

export enum LocationType {
  MAP = "map",
  ADDRESS = "address",
}

export const ShopLocation = () => {
  const { setIsOpen, setModalType, setOpenType } = useModalStore();
  const { setFeedItem, item } = useFeedStore();

  const [locationData, setLocationData] = useState<LocationState>({
    title: "",
    category: "한식",
    mapRegister: false,
  });
  const [locationType, setLocationType] = useState<LocationType>(
    LocationType.MAP
  );

  const handleClickLocationForm = () => {
    setIsOpen(false);
    setModalType(ModalType.EMPTY);
  };

  const handleClickSendLocationData = () => {
    setModalType(ModalType.REGISTER_MAP);
    setOpenType(OpenType.FADE);

    setFeedItem({
      ...item,
      ...locationData,
    });
  };

  const handleChange = (name: string, value: string) => {
    setLocationData({
      ...locationData,
      [name]: value,
    });
  };

  const onChangeCategorySelectBox = (value: string) => {
    setLocationData({
      ...locationData,
      category: value,
    });
  };

  return (
    <>
      <div className={styles.feedLocationLayout}>
        <FlexBox justifyContent="flex-end" alignItems="flex-end">
          <button type="button" onClick={handleClickLocationForm}>
            <IoClose size={24} color={"#FF7101"} />
          </button>
        </FlexBox>

        <LocationTabs
          locationType={locationType}
          onClick={(type: LocationType) => setLocationType(type)}
        />

        <ShopTitle onChage={handleChange} value={locationData.title} />

        <div className={styles.addressSearchContainer}>
          {locationType === "address" ? (
            // <KakaoAddressSearch />
            <>ㅆㄸㅅ</>
          ) : (
            <AddressMapRenderer />
          )}
        </div>

        <label className={styles.feedLocationContainer}>
          <input
            disabled={true}
            readOnly={true}
            value={item.address.name}
            className={styles.fullAddressInput}
            type="text"
            placeholder={"전체 주소"}
          />
        </label>

        <FlexBox>
          <Button width={200} onClick={handleClickSendLocationData}>
            <FlexBox flexDirection="row" gap={8}>
              <IoAdd size={24} color={"#fff"} />
              <Typography as={"span"} color="white000">
                장소 등록
              </Typography>
            </FlexBox>
          </Button>
        </FlexBox>
      </div>
    </>
  );
};
