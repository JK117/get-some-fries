import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/page1'
    },
    {
        path: '/page1',
        name: 'page1',
        component: () => import('@/components/pageviews/Page1.vue')
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('@/components/pageviews/Page2.vue')
    }
]

export const menuRoutes = routes

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router