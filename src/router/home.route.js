

export default {
    path: '/',
    // name: 'home',
    component: () => import("@/views/Index"),//home/

    children: [
        {
            path: "",
            name: "home",
            alias: "/home",
            component: () => import("@/views/services/Default"),

        },
    ]
}