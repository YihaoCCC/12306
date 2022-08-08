import CkHttp from "../../request";
let request = CkHttp.getInstance()



export const testapi = () => {
    return request.get('/test').then((res) => {
        return res
    }) 
}