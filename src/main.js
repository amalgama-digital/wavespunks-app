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

window.nodeURL = 'https://nodes-testnet.wavesnodes.com';

window.signer = new Signer({
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});

window.contractAddress = '3N5aN5RqVqtb8HbNghuNb1NygjYPFRKfE7E';

if (window.location.href.indexOf('wavespunks.com') > -1 || window.location.href.indexOf('ost:') > -1 || window.location.href.indexOf('wavespunks-app.pages.dev') > -1)
    new Vue({
        render: h => h(Index),
        el: '#app',
        router
    });