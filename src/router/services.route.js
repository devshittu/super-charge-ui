export default {
    name: "",
    path: "/services",
    // props: true,
    props: {
        pageTitle: "Our Services",
    },
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
            props: {
                pageTitle: "Buy Airtime",
            },
            component: () => import("@/views/services/ServiceAirtime"),
        },
        {
            path: "data",
            name: "data",
            alias: "/buy-data",
            props: {
                pageTitle: "Buy Data",
            },
            component: () => import("@/views/services/ServiceData"),
        },
        {
            path: "cabletv",
            name: "cabletv",
            alias: "/buy-cabletv",
            props: {
                pageTitle: "Subcribe to your favorite tv",
            },
            component: () => import("@/views/services/ServiceData"),
        },
        {
            path: "power",
            name: "power",
            alias: "/buy-power",
            props: {
                pageTitle: "Settle Power Bills",
            },
            component: () => import("@/views/services/ServiceData"),
        },
    ]
};