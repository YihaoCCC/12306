import CkHttp from "../../request"
const request = CkHttp.getInstance()

export const  user_registe = (usernaem:string, password:string) => {
    return request.get(`/user/login/${usernaem}&${password}`).then((res) => {
        return res
    }) 
}