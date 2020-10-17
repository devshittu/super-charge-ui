export default {
    name: "",
    path: "/admin",
    component: () => import("@/views/admin/Index"),
    children: [

        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "admin-dashboard",
            path: "dashboard",

            component: () => import("@/views/admin/dashboard/Default"),

            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            alias: '/cpanel',
            meta: {
                requiresAuth: true,
                title: 'Dashboard'
            }
        },

        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "admin-settings",
            path: "settings",

            component: () => import("@/views/admin/settings/Default"),

            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            // alias: '/cpanel',
            meta: {
                requiresAuth: true,
                title: 'Dashboard'
            }
        },

        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "admin-rates",
            path: "rates",

            component: () => import("@/views/admin/rates/Default"),

            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            // alias: '/cpanel',
            meta: {
                requiresAuth: true,
                title: 'Dashboard'
            }
        },

        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "admin-transactions",
            path: "transactions",

            component: () => import("@/views/admin/transactions/Default"),

            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            // alias: '/cpanel',
            meta: {
                requiresAuth: true,
                title: 'Dashboard'
            }
        },
    ],
    meta: {
        requiresAuth: true,
        title: '',
    }
}