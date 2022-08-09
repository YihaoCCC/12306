import { id } from "element-plus/es/locale";
import CkHttp from "../request";
const request = CkHttp.getInstance()

export const getCitys = () => {
    return request.get('/api/city/queryAll').then(res => res)
}

export const getTicketDetail =(trainId:any,beginId:any,endId:any,seatTypeId:any,date: any,type:any) => {
    return request.get(`/api/train/queryTicket/${trainId}&${beginId}&${endId}&${seatTypeId}&${date}&${type}`).then(res => res)
}

export const getPassenger = () => {
    return request.get(`/api/passenger/queryByUserId/${localStorage.getItem('userId')}`).then(res => res)
}

export const addPassenger = (passenger:any) => {
    return request.post('/api/passenger/add',passenger).then(res => res)
}

export const deletePassenger = (id:number) =>{
    return request.put(`/api/passenger/delete/${id}`).then(res => res)
}

export const addOrder = (oder:any) =>{
    return request.post('/api/order/add',oder).then(res => res)
}