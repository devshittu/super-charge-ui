export default {
    name: "",
    path: "/services",
    // props: true,
    component: () => import("@/views/Index.vue"),//services/
    children: [
        {
            path: "",
            name: "services",
            // alias: "/",
            component: () => import("@/views/services/Default"),
        },
        {
            path: "airtime",
            name: "airtime",
            alias: "/buy-airtime",
            component: () => import("@/views/services/ServiceAirtime"),
        },
        {
            path: "data",
            name: "data",
            alias: "/buy-data",
            component: () => import("@/views/services/ServiceData"),
        },
        {
            path: "cabletv",
            name: "cabletv",
            alias: "/buy-cabletv",
            component: () => import("@/views/services/ServiceData"),
        },
        {
            path: "power",
            name: "power",
            alias: "/buy-power",
            component: () => import("@/views/services/ServiceData"),
        },
    ]
};