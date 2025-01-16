const routes = [
  {
    name: "login",
    path: "/login",
    component: "builtin/login",
    meta: {
      title: "login",
      hideInMenu: true,
    },
  },
  {
    name: "500",
    path: "/500",
    component: "builtin/500",
    meta: {
      title: "500",
      hideInMenu: true,
    },
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: "builtin/not-found",
    meta: {
      title: "not-found",
      hideInMenu: true,
    },
  },
];

export default routes;
