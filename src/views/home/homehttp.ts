import CkHttp from "../../request";
let request = CkHttp.getInstance()



export const testapi = () => {
    return request.get('/mock/a373bc4295742a91ec188c9d769e0f2d/test/login/13').then((res) => {
        return res
    }) 
}