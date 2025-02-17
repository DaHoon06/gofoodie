/**
 * @description react-cookie 커스텀 훅으로 관리
 */
import {Cookies} from "react-cookie";

export interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
  partitioned?: boolean;
}

const cookies = new Cookies();


const useCookies = () => {
  /**
   * @description 쿠키 셋업
   * @param cookieName
   * @param cookieValue
   * @param options
   */
  const setCookie = <T extends any>(cookieName: string, cookieValue: T, options?: CookieSetOptions): void => {
    cookies.set(cookieName, cookieValue, options)
  }

  const getCookie = <T extends any>(cookieName: string): T | null => {
    const value = cookies.get(cookieName)
    if (!value) return null;
    return value;
  }

  const removeCookie = (cookieName: string): void => {
    cookies.remove(cookieName);
  }
  
  return {setCookie, getCookie, removeCookie}
}

export default useCookies;
