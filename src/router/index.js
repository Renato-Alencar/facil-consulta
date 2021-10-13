import Vue from "vue";
import VueRouter from "vue-router";
import Professional from "../views/Professional.vue";
import Attendance from "../views/Attendance.vue";
import Review from "../views/Review.vue";
import Completed from "../views/Completed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Professional",
    component: Professional,
  },
  {
    path: "/attendance",
    name: "Attendance",
    component: Attendance,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
  },
  {
    path: "/completed",
    name: "Completed",
    component: Completed,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
