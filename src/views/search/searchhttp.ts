import CkHttp from "../../request";
const requese = CkHttp.getInstance()

export const get_search_list = (bCityId:string | string [],eCityId:string | string[],date:any) => {
    return requese.get(`/api/train/queryThrough/${bCityId}&${eCityId}&${date}`).then(res => res)
}