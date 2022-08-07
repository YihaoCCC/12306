import CkHttp from "../../request"
let request = CkHttp.getInstance()


export const getAllOrder = () => {
     return request.get('/api/getAllOrder').then(() => {
        return "some mock data"
    })
}


export const deleteOrder = (orderId:number) => {
    return request.delete(`/api/deleteOrder${orderId}`).then(() => {
       return "some mock data"
   })
}