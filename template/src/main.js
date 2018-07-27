import Vue from 'vue'
import VueResource from 'vue-resource';
import VueLocalStorage from 'vue-localstorage'
import App from './App'
import router from './router'


import Vuetify from 'vuetify'
import VueCookies from 'vue-cookies'
import Autocomplete from 'v-autocomplete'
import vueTopprogress from 'vue-top-progress'
import Provider from './provider/web3provider'
import VueSocketio from 'vue-socket.io';

import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.css'
import './assets/css/material-input.css'
import './assets/css/fonts-matirial.css'
import './assets/css/roboto.css'
import './assets/css/css.css'
import 'v-autocomplete/dist/v-autocomplete.css'

Vue.use(Autocomplete)
Vue.use(VueLocalStorage);
Vue.use(VueCookies)
Vue.use(VueResource);
Vue.use(vueTopprogress)
// Vue.use(VueSocketio, 'http://localhost:8000');
Vue.use(Vuetify, {
    theme: {
        primary: colors.purple.base,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
    }
});
const web = new Provider("https://ropsten.infura.io");


new Vue({


    el: '#app',
    router,
    data: {
        web,
    },
    template: '<App/>',
    components: {
        App
    },
    methods: {},
    created(){
        console.log('s');

    }
});
