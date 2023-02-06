import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/menu'
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('@/components/pageviews/FlexMenu.vue')
    },
    {
        path: '/flow',
        name: 'flow',
        component: () => import('@/components/pageviews/CardFlow.vue')
    }
]

export const menuRoutes = routes

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router