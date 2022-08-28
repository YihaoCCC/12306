import {  AxiosRequestConfig } from "axios";
let BASE_URL:any = import.meta.env.VITE_BASE_URL
const TIME_OUT:number = 5000

export const config:AxiosRequestConfig = {
    baseURL: BASE_URL,
    timeout: TIME_OUT
}