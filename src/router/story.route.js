export default {
    name: "story",
    path: "/stories/:slug",
    props: true,
    component: () => import("@/views/Stories")
};