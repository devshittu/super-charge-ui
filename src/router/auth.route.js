export default {
    // name: "auth",
    path: "/auth",
    component: () => import("@/views/admin/auth/Index"),
    children: [
        {
            path: 'signin',
            name: 'signin',
            alias: '/signin',
            component: () => import("@/views/admin/auth/SigninForm"),

            meta: {
                title: 'Signin'
            }
            // component: () => import("@/views/auth/Index"),
        },
        {
            path: 'reset',
            name: 'reset',
            alias: '/reset',
            component: () => import("@/views/admin/auth/ResetForm"),

            meta: {
                title: 'Reset'
            }
            // component: () => import("@/views/auth/Index"),
        },
        {
            path: '/',
            redirect: '/auth/signin'
        },
         {
             path: "/signup",
             name: "signup",
             component: () => import("@/views/admin/auth/SignupForm"),
             /*
             *   alias: key
             *   add slash if it could be used as root route.
             *   if you still want to respect the parent trail
             *   then remove the slash
             *   */
             alias: '/register'
         },
    ]
}