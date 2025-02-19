export const IS_API_MOCKING = process.env.NEXT_PUBLIC_API_MOCKING === "enable";
export const BASE_URL = IS_API_MOCKING
  ? typeof window === "undefined"
    ? "http://localhost:3033"
    : "http://localhost:3033"
  : process.env.NEXT_PUBLIC_API_URL ?? "https://localhost:3033";

export const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
