export default {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/movies'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/city'),
        },
        {
            path: 'comingsoon',
            component: () => import('@/components/comingsoon'),
        },
        {
            path: 'nowplaying',
            component: () => import('@/components/nowplaying'),
        },
        {
            path: 'search',
            component: () => import('@/components/search'),
        },
        {
            path: 'detail/nowplaying/:id',
            name: 'detailNowplaying',
            components:{
                default: () => import('@/components/nowplaying'),
                detail: () => import('@/views/movies/detail')
            },
            props: {
                default: false,
                detail: true
            }
        },
        {
            path: 'detail/comingsoon/:id',
            name: 'detailComingsoon',
            components:{
                default: () => import('@/components/comingsoon'),
                detail: () => import('@/views/movies/detail')
            },
            props:{
                default: false,
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/nowplaying'
        },
    ]
}
