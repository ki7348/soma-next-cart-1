import axios, { AxiosRequestConfig } from "axios";

import { baseUrl } from "./constants";

const config: AxiosRequestConfig = { baseURL: baseUrl };
export const axiosInstance = axios.create(config);

export async function fetchCoins() {
  const { data } = await axiosInstance.get(`/coins`);
  return data;
}

export async function fetchInfo(coinId: string) {
  const { data } = await axiosInstance.get(`/coins/${coinId}`);
  return data;
}

export async function fetchTickers(coinId: string) {
  const { data } = await axiosInstance.get(`/tickers/${coinId}`);
  return data;
}

export async function fetchCharts(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  const { data } = await axiosInstance.get(
    `/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  );
  return data;
}
