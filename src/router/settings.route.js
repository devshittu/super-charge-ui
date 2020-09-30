export default {
    name: "settings",
    path: "/settings",
    component: () => import("@/views/settings/Index"),
    meta: {
        requiresAuth: true,
        title: 'Account Settings'
    }
    // component: () => import("@/views/")
}