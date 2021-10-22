import VueRouter from 'vue-router'

import Home from "./pages/Home";

const routes = [{
    path: '/',
    name: 'home',
    component: Home
}];

const router = new VueRouter({
    history: true,
    mode: 'hash',
    routes,
});

export default router
