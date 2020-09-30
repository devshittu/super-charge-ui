export default {
    // name: "auth",
    path: "/auth",
    component: () => import("@/views/auth/Index"),
    children: [
        {
            path: 'verify',
            name: 'verify',
            alias: '/verify',
            component: () => import("@/views/auth/VerifyForm"),
            props: (route) => ({email: route.query.email}),
            meta: {
                // requiresAuth: true,
                title: 'Verify Account'
            }
        },
        {
            path: 'signin',
            name: 'signin',
            // alias: '/signin',
            alias: '/signin',
            component: () => import("@/views/auth/SigninForm"),

            meta: {
                title: 'Signin'
            }
            // component: () => import("@/views/auth/Index"),
        },
        {
            path: 'signout',
            name: 'signout',
            // alias: '/signin',
            alias: '/signout',
            // component: signout(),

            component: () => import("@/views/auth/Index"),
            meta: {
                title: 'Signout'
            }
        },
        {
            path: 'get-started',
            name: 'get-started',
            // alias: '/get-started',
            alias: '/set-up',
            component: () => import("@/views/auth/GetStarted"),
            meta: {
                requiresAuth: true,
                title: 'Getting Started'
            }
        },
        {
            path: '/',
            redirect: '/auth/signin'
        },
        /* {
             path: "/",
             name: "register",
             component: () => import("@/views/auth/Register"),
             /!*
             *   alias: key
             *   add slash if it could be used as root route.
             *   if you still want to respect the parent trail
             *   then remove the slash
             *   *!/
             alias: '/register'
         },*/
    ]
}