import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { router } from "../router/index";


class ckHttp {
    axiosInstance:AxiosInstance
    constructor(config:AxiosRequestConfig) {
        this.axiosInstance = axios.create(config)
        this.axiosInstance.interceptors.request.use((config:any) => {
            let token = localStorage.getItem('token')
            if(token) {
                config.headers.token = token
            }     
            return config
        })
        this.axiosInstance.interceptors.response.use((res) => {
            console.log('收到请求');
            if(res.data) {
                if(res.data.code === 401) {
                    router.push('/login')
                }
                return res.data
            } else {
                return res.data
            }
        })
    }
    getInstance() {
        return this.axiosInstance
    }
}
export default ckHttp