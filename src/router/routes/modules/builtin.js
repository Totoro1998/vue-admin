const routes = [
  {
    name: "login",
    path: "/login",
    component: "views/builtin/login/index.vue",
    meta: {
      title: "login",
      hiddenMenu: true,
    },
  },
  {
    name: "500",
    path: "/500",
    component: "views/builtin/500/index.vue",
    meta: {
      title: "500",
      hiddenMenu: true,
    },
  },
  {
    name: "404",
    path: "/404",
    component: "views/builtin/404/index.vue",
    meta: {
      title: "404",
      hiddenMenu: true,
    },
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    meta: {
      title: "not-found",
      hiddenMenu: true,
    },
  },
];
