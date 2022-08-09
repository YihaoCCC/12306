import {  AxiosRequestConfig } from "axios";

let BASE_URL:string = 'http://localhost:5173' // 到底什么用
const TIME_OUT:number = 5000

export const config:AxiosRequestConfig = {
    baseURL: BASE_URL,
    timeout: TIME_OUT
}