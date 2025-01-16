import { useAuthStore } from "@/store/auth";

const WHITE_LIST = ["login"];

export function createPermissionGuard(router) {
  router.beforeEach((to, from) => {
    const authStore = useAuthStore();
    // 未登录
    if (!authStore.isLogin) {
      if (to.name !== "login") {
        return { name: "login" };
      }
    } else {
      // 已登录
      if (to.name === "login") {
        return { name: "home" };
      } else {
        checkPermission(to, from);
      }
    }
  });
}

function checkPermission(to, from) {
  const meta = to.meta;
  const authStore = useAuthStore();
  if (!authStore.hasPermission(meta.permission)) {
    return { name: "404" };
  }
}
