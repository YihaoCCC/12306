import CkHttp from "../../request";
let request = CkHttp.getInstance()



export const  user_login = (usernaem:string, password:string) => {
    return request.get(`/api/user/login/${usernaem}&${password}`).then((res) => {
        return res
    }) 
}

