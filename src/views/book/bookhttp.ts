import CkHttp from "../../request";
let request = CkHttp.getInstance()



export const addOrder = (order:any) =>{
    return request.post('/api/order/add',order).then(res => res)
}