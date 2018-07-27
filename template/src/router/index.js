import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login'
import History from '@/components/history/history'
import HistoryETH from '@/components/history/historyETH'
import historyToken from '@/components/history/historyToken'
import VueLocalStorage from 'vue-localstorage'

Vue.use(VueLocalStorage)

Vue.use(VueRouter)

export default new VueRouter({
    // mode: 'history',

    routes: [

        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: (to, from, next) => {
                console.log('home');
                console.log(Vue.localStorage.get("login"));
                console.log(Vue.localStorage.get("login") === 'true');
                if (Vue.localStorage.get("login") === 'true') {
                    next()
                } else {
                    next('login');
                }
            }
        }, {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: (to, from, next) => {
                console.log('login');
                if (Vue.localStorage.get("login") !== 'true') {
                    next()

                } else {
                    next('home');

                }
            }
        },{
            path: '/history',
            component: History,
            children: [
                {

                    path: 'eth',
                    component: HistoryETH
                },
                {

                    path: 'token/:address',
                    component: historyToken
                }
            ],
            beforeEnter: (to, from, next) => {
                if (Vue.localStorage.get("login") === 'true') {
                    next()
                } else {
                    next('login');
                }
            }
        },


        {
            path:'*',
            redirect:"/"
        }


    ]
})
