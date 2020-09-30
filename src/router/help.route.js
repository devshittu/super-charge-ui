export default {
    name: "",
    path: "/help",
    // props: true,
    component: () => import("@/views/Index.vue"),//services/
    children: [
        {
            path: "",
            name: "help",
            // alias: "/",
            component: () => import("@/views/help/Default"),
        },
    ]
};