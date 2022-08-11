import CkHttp from "../../request";
let request = CkHttp.getInstance()



export const  getOrderDetail = (orderId:any) => {
    return request.get(`/api/order/queryDetail/${orderId}`).then((res) => {
        return res
    }) 
}

export const cancelOrder = (orderId:any) => {
    return request.put(`/api/order/cancel/${orderId}`).then((res) => {
        return res
    }) 
}

export const payOrder = (orderId:any) => {
    return request.put(`/api/order/pay/${orderId}`).then((res) => {
        return res
    }) 
}

