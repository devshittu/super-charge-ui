

export default {
    path: '/burbit',
    // name: 'home',
    component: () => import("@/views/burbit/Index"),//home/
    props: {
        pageTitle: "Home"
    },

    children: [
        {
            path: "",
            name: "home",
            alias: "/bb",
            component: () => import("@/views/burbit/Default"),

        },
    ]
}