import { defineStore } from "pinia";
import { ref, computed } from "vue";
import routes from "@/router/routes";

const DEFAULT_USER_INFO = {
  id: "",
  name: "",
  avatar: "",
  email: "",
  permissions: [],
};

// 根据路由获取菜单
function getMenusFromRoutes(routes) {
  return routes
    .filter((route) => !route.meta?.hideInMenu) // 过滤掉需要隐藏的菜单
    .map((route) => {
      const menu = {
        name: route.name,
        path: route.path,
        title: route.meta?.title || route.name, // 使用meta中的title，若没有则使用name
        icon: route.meta?.icon,
      };

      // 如果有子路由，递归处理
      if (route.children) {
        menu.children = getMenusFromRoutes(route.children);
      }

      return menu;
    });
}

// 获取有权限的路由
function getHasPermissionRoutes(routes, permissions) {
  if (!permissions || !permissions.length) return routes;
  return routes.filter((route) => {
    if (route.meta?.permission) {
      return permissions.includes(route.meta.permission);
    }
    if (route.children) {
      return getHasPermissionRoutes(route.children, permissions);
    }
    return true;
  });
}

// 初始化菜单
function initMenus(routes, permissions) {
  return getMenusFromRoutes(getHasPermissionRoutes(routes, permissions));
}

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref(DEFAULT_USER_INFO);
  const menus = ref([]);
  const fetchUserInfo = async () => {
    const res = DEFAULT_USER_INFO;
    userInfo.value = res;
    menus.value = initMenus(routes, res.permissions)[0].children;
  };
  const clearUserInfo = () => {
    userInfo.value = DEFAULT_USER_INFO;
  };
  const isLogin = computed(() => {
    return !!userInfo.value.id;
  });
  const userPermissions = computed(() => {
    return userInfo.value.permissions || [];
  });
  const hasPermission = (permission) => {
    if (!permission) return true;
    if (typeof permission === "string") {
      return userPermissions.value.includes(permission);
    }
    if (Array.isArray(permission)) {
      return permission.some((p) => userPermissions.value.includes(p));
    }
    return false;
  };
  return {
    userInfo,
    fetchUserInfo,
    clearUserInfo,
    isLogin,
    userPermissions,
    hasPermission,
    menus,
  };
});
