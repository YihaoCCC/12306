import CkHttp from "../../request"
let request = CkHttp.getInstance()


export const getAllOrder = (state:any) => {
     return request.get(`/api/order/queryByUserId/${localStorage.getItem('userId')}&${state}`).then((res) => {
        return res
    })
}


export const deleteOrderById = (orderId:number) => {
    return request.put(`/api/order/delete/${orderId}`).then((res) => {
       return res
   })
}