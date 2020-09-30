export default {
    name: "admin",
    path: "/admin",
    component: () => import("@/views/admin/Index"),
    children: [
        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "sources",
            path: "/sources",
            components: {
                'item-add': () => import("@/views/admin/sources/Add"),
                'item-list': () => import("@/views/admin/sources/List"),
            },
            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            alias: '/sources',
            meta: {
                requiresAuth: true,
                title: 'Sources'
            }
        },
        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "tags",
            path: "tags",
            components: {
                'item-add': () => import("@/views/admin/tags/Add"),
                'item-list': () => import("@/views/admin/tags/List"),
            },
            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            alias: '/tags',
            meta: {
                requiresAuth: true,
                title: 'Tags'
            }
        },
        {
            // TODO Guard this route to the owner of the story among staff strictly.
            name: "categories",
            path: "categories",
            components: {
                'item-add': () => import("@/views/admin/categories/Add"),
                'item-list': () => import("@/views/admin/categories/List"),
            },
            /*
            *   alias: key
            *   add slash if it could be used as root route.
            *   if you still want to respect the parent trail
            *   then remove the slash
            *   */
            alias: '/categories',
            meta: {
                requiresAuth: true,
                title: 'Categories'
            }
        },
    ],
    meta: {
        requiresAuth: true,
        title: '',
    }
}