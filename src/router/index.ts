import { ElMessage } from "element-plus";
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
                component: () => import('../views/search/search.vue')
            },
            {
                path: 'book/:scity/:ecity/:time/:ticketType',
                name: 'book',
                component: () => import('../views/book/book.vue')
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
        path: '/registe',
        name: 'registe',
        component: () => import('../views/registe/registe.vue')
    }
]

export const router:Router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    if(to.name === 'book') {
        if(localStorage.getItem('token')) {
            next()
        } else {
            ElMessage({
                type :'warning',
                message: '对不起，您还未登录！'
            })
            next('/login')
        }
    } else {
        next()
    }
})

