

export default {
    path: '/',
    // name: 'home',
    component: () => import("@/views/Index"),//home/
    props: {
        pageTitle: "Quick Service"
    },

    children: [
        {
            path: "",
            name: "home",
            alias: "/home",
            component: () => import("@/views/services/Default"),

        },
    ]
}