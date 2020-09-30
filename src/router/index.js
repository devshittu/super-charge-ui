import Vue from 'vue'
import Router from 'vue-router'
import ServicesRoutes from "./services.route";
import HomeRoutes from "./home.route";
import HelpRoutes from "./help.route";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        HomeRoutes,
        ServicesRoutes,
        HelpRoutes,
    ]
})


export default router