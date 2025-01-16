import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  ...builtinRoutes,
];

export default routes;
