import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/students",
    name: "students",
    component: () => import("./components/ShowAllStudents")
  },
  {
    path: "/ShowOneStudent/:id",
    name: "Student-details",
    component: () => import("./components/ShowOneStudent")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/CreateStudent")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
