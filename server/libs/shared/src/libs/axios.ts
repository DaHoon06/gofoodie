import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as https from 'https';
import * as crypto from 'crypto';
import * as http from 'http';
import axiosRetry from 'axios-retry';

const agentConfig = {
  httpsAgent: new https.Agent({
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
    rejectUnauthorized: false,
    keepAlive: true,
  }),
  httpAgent: new http.Agent({
    keepAlive: true,
    timeout: 0,
    keepAliveMsecs: 600000,
  }),
};

/**
 * @description axios instance 생성
 * @param {AxiosRequestConfig} axiosConfig
 */
export function createAxiosInstance(
  axiosConfig: AxiosRequestConfig,
): AxiosInstance {
  const axiosInstance = Axios.create({
    ...agentConfig,
    ...axiosConfig,
  });

  axiosRetry(axiosInstance, {
    retries: 1, // 최대 재시도 횟수
    retryDelay: (retryCount) => {
      console.log(`재시도 중... 시도 횟수: ${retryCount}`);
      return retryCount * 2000; // 재시도 간격 (여기서는 2초 후 재시도)
    },
    retryCondition: (error) => {
      return error.code === 'ECONNABORTED' || error.code === 'ETIMEDOUT';
    },
  });

  return axiosInstance;
}
