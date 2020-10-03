export default {
    name: "",
    path: "/admin",
    component: () => import("@/views/admin/Index"),
    children: [
/*        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "sources",
            path: "/sources",
            components: {
                'item-add': () => import("@/views/admin/sources/Add"),
                'item-list': () => import("@/views/admin/sources/List"),
            },
            /!*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   *!/
            alias: '/sources',
            meta: {
                requiresAuth: true,
                title: 'Sources'
            }
        },*/

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
    ],
    meta: {
        requiresAuth: true,
        title: '',
    }
}