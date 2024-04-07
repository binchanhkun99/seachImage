import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homeview.vue";
import { useRouter } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    }
  ],
});
// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login", "/home"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");
//   if (authRequired && !loggedIn) {
//     next("/login");
//   } else {
//     next();
//   }
// });
export default router;
