import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { createPermissionGuard } from "./guard/permissionGuard";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export async function setupRouter(app) {
  app.use(router);
  // createPermissionGuard(router);
  await router.isReady();
}

export default router;
