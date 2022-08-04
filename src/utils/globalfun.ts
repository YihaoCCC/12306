import { Router } from "vue-router";

export const goIndex =(router:Router) =>  {
    return () => {
        router.push('/')
    }
}
