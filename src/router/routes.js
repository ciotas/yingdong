const routes = [{
        path: '/',
        redirect: "/index"
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue')

    }, {
        path: '/investment',
        name: 'investment',
        component: () => import('../views/investment.vue')

    }, {
        path: '/team',
        name: 'team',
        component: () => import('../views/team.vue')

    },
]
export default routes