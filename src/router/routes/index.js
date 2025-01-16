import Layout from "@/layout/index.vue";
import builtinRoutes from "./modules/builtin";

const modules = import.meta.glob("/src/views/**/*.vue");

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: "home",
        meta: {
          title: "home",
        },
      },
    ],
  },
  ...builtinRoutes,
];

function getComponent(component) {
  return modules[`/src/views/${component}/index.vue`];
}

function transformRoutes(routes) {
  return routes.map((route) => {
    // 动态导入组件
    if (typeof route.component === "string") {
      route.component = getComponent(route.component);
    }
    if (route.children) {
      route.children = transformRoutes(route.children);
    }
    return route;
  });
}

export default transformRoutes(routes);
