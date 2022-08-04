import { Router,createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'), 
        redirect: '/home/dashbord', 
        children: [
            {
                path: 'dashbord',
                name: 'dashbord',
                component: () => import('../views/dashbord/dashbord.vue')
            },
            {
                path: 'search/:scity/:ecity/:time',
                name: 'search',
                component: () => import('../views/search/index.vue')
            },
            {
                path: 'profile',
                name: 'profile',
                component: () => import('../views/profile/profile.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/regiter',
        name: 'register',
        component: () => import('../views/registe/registe.vue')
    }
]

export const router:Router = createRouter({
    routes,
    history: createWebHashHistory()
})

