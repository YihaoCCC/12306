import CkHttp from "../request";
const request = CkHttp.getInstance()

export const getCitys = () => {
    return request.get('/test/mock/a373bc4295742a91ec188c9d769e0f2d/test/getcity').then(res => res)
}

export const getHotels = () => {
    return request.get('/test/mock/a373bc4295742a91ec188c9d769e0f2d/test/cityPhotoList').then(res => res)
}