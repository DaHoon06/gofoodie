export const IS_API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === "enable";
export const BASE_URL = IS_API_MOCKING
  ? typeof window === "undefined"
    ? "http://localhost:9090"
    : "http://localhost:3000"
  : process.env.NEXT_PUBLIC_API_URL ?? "https://localhost:8000/api";

export const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;

export const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID as string;
export const KAKAO_SECRET_KEY = process.env.KAKAO_SECRET_KEY as string;
export const NEXT_AUTH_SECRET_KEY = "next-auth";
