import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homeview.vue";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import About from "../views/About.vue";
import { useRouter } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home' // Chuyển hướng đến /home nếu đường dẫn là /
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/detail-event",
      name: "DetailEvent",
      component: HomeView,
    },
    {
      path: "/event",
      name: "Event",
      component: Event,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    }

  ],
});
// router.beforeEach((to, from, next) => {
//   // Kiểm tra nếu đang ở đường dẫn "/home" thì không cần chuyển hướng
//   if(to.path=="/") {
//     // Nếu không ở đường dẫn "/home" thì chuyển hướng đến "/home"
//     next("/home");
//   }
// });
export default router;
