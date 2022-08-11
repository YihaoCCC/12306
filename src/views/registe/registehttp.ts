import CkHttp from "../../request"
const request = CkHttp.getInstance()

export const  user_registe = (obj:any) => {
    return request.post(`/user/add/`, obj).then((res) => {
        return res
    }) 
}