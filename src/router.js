import VueRouter from 'vue-router'

import Home from "./pages/Home";
import MyPunks from "./pages/MyPunks.vue";

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}, {
    path: '/myPunks',
    name: 'myPunks',
    component: MyPunks
}, {
    path: '/i/:id',
    name: 'invite_home',
    component: Home
}];

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
});

export default router
