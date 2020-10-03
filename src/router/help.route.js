export default {
    name: "",
    path: "/help",
    // props: true,
    props: {
        pageTitle: "Frequently Asked Questions",
    },
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