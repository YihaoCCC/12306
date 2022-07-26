import { Router,createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../views/home/home.vue'), 
        redirect: '/home/dashbord', 
        children: [
            {
                path: 'dashbord',
                component: () => import('../views/dashbord/dashbord.vue')
            },
            {
                path: 'profile',
                component: () => import('../views/profile/profile.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    }
]

export const router:Router = createRouter({
    routes,
    history: createWebHashHistory()
})

