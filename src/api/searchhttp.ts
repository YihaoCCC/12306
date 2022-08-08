import CkHttp from "../request";
const request = CkHttp.getInstance()

export const getCitys = () => {
    return request.get('/city/queryAll').then(res => res)
}