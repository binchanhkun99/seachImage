import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homeview.vue";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import About from "../views/About.vue";
import Privacy from "../views/Privacy.vue"
import Genaral from "../views/General.vue"
import { useRouter } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
  routes: [
    {
      path: '/',
      name: "home",
      component: Home,
    },
    {
      path: "/detail-event/:id?/:bib?",
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
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: Privacy,
    }, 
       {
      path: "/general",
      name: "General",
      component: Genaral,
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
