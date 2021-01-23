const routes = [{
        path: '/',
        redirect: "/index",
        meta:{
            title: 'Incapital 盈动资本 | 我们'
        }
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta:{
            title: 'Incapital 盈动资本 | 我们'
        }

    }, {
        path: '/investment',
        name: 'investment',
        component: () => import('../views/investment.vue'),
        meta:{
            title: 'Incapital 盈动资本 | 投资'
        }

    }, {
        path: '/team',
        name: 'team',
        component: () => import('../views/team.vue'),
        meta:{
            title: 'Incapital 盈动资本 | 团队'
        }

    },{
        path: '/contact',
        name: 'contact',
        component: () => import('../views/contact.vue'),
        meta:{
            title: 'Incapital 盈动资本 | 联系我们'
        }

    },
]
export default routes