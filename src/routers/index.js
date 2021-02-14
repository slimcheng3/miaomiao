import Vue from 'vue'
import Router from 'vue-router'
import cinema from './cinema'
import movie from './movie'
import mine from './mine'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        cinema,
        movie,
        mine,
        {
            path: '/*',
            name: 'home',
            redirect: '/movie/nowplaying'
        }
    ]
})
