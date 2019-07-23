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
            path: '/movie',
            redirect: '/movie/nowplaying'
        },
    ]
}
