"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import * as styles from "./KakaoButton.css";
import { Typography } from "../common/typography";

const KakaoButton = () => {
  const handleClickKakaoSignIn = async () => {
    try {
      const user: any = await signIn("kakao");
      if (user) {
        const body = {
          username: user.name,
          token: user.id,
        };
        // const {data} = await axiosInstance.post("/users/sign-in", body);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClickKakaoSignIn}
      className={styles.button}
    >
      <Image
        className={styles.kakaoLogo}
        src={"/images/kakao.png"}
        width={40}
        height={40}
        alt="카카오 로그인 버튼"
      />
      <Typography as={"span"} fontSize={16} fontWeight={700}>
        카카오 로그인
      </Typography>
    </button>
  );
};

export default KakaoButton;
