import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import router from './router';
import Index from './Index';

import { Signer } from '@waves/signer';

import rare from './rare'

Vue.router = router;
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

window.rare = rare;

window.nodeURL = 'https://nodes.wavesnodes.com';

window.signer = new Signer();

window.contractAddress = '3P8rLVnwrTf4k5AB3emuduhZZb1yKcitTHy';

if (window.location.href.indexOf('wavespunks.com') > -1 || window.location.href.indexOf('ost:') > -1 || window.location.href.indexOf('wavespunks-app.pages.dev') > -1)
    new Vue({
        render: h => h(Index),
        el: '#app',
        router
    });