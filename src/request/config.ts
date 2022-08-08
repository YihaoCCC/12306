import {  AxiosRequestConfig } from "axios";

let BASE_URL:string = ' https://www.fastmock.site/'
const TIME_OUT:number = 5000

export const config:AxiosRequestConfig = {
    baseURL: BASE_URL,
    timeout: TIME_OUT
}