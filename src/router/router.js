import { createRouter, createWebHistory } from 'vue-router';
import { AppRoute } from '@/consts';
import Delivery from '@/pages/Delivery.vue';
import Catalog from '@/pages/Catalog/Catalog.vue';
import Payment from '@/pages/Payment.vue';
import Contacts from '@/pages/Contacts.vue';
import AboutCompany from '@/pages/AboutCompany.vue';
import NotFound from '@/pages/NotFound.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoute.Root,
      component: Catalog,
    },
    {
      path: AppRoute.Delivery,
      component: Delivery,
    },
    {
      path: AppRoute.Payment,
      component: Payment,
    },
    {
      path: AppRoute.Contacts,
      component: Contacts,
    },
    {
      path: AppRoute.AboutCompany,
      component: AboutCompany,
    },
    {
      path: AppRoute.NotFound,
      component: NotFound,
    },
  ]
})

export default router;
