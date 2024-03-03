import Company from "@/pages/company/[id].vue";
import Branch from "@/pages/branch/[id].vue";
import ServiceDetail from "@/pages/service/[id].vue";
import Service from "@/pages/service/index.vue";
import EmployeeDetail from "@/pages/service/employees.vue";
import { createRouter, createWebHistory } from "vue-router";
import thankYouVue from "@/pages/thank-you.vue";

const routes = [
  {
    path: "/company/:id",
    name: "company-detail",
    component: Company,
  },
  {
    path: "/branch/:id",
    name: "branch-detail",
    component: Branch,
  },
  {
    path: "/service/:id",
    name: "service-index",
    component: Service,
    children: [
      {
        path: "",
        name: "service-detail",
        component: ServiceDetail,
      },
      {
        path: "employee",
        name: "employee-detail",
        component: EmployeeDetail,
      },
    ],
  },
  {
    path: "/thank-you",
    name: "thank-you",
    component: thankYouVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
