import { createRouter, createWebHistory } from 'vue-router';
import HomePrincipal from '@/components/HomePrincipal.vue';
import HomeDiferenciais from '@/components/HomeDiferenciais.vue';
import HomeProdutos from '@/components/HomeProdutos.vue';
import HomeNoticias from '@/components/HomeNoticias.vue';
import HomeCompliance from '@/components/HomeCompliance.vue';
import HomeLGPD from '@/components/HomeLGPD.vue';
import HomeContato from '@/components/HomeContato.vue';


const routes = [
  {
    path: '/',
    name: 'HomePrincipal',
    component: HomePrincipal,
  },
  {
    path: '/diferenciais',
    name: 'HomeDiferenciais',
    component: HomeDiferenciais,
  },
  {
    path: '/produtos',
    name: 'HomeProdutos',
    component: HomeProdutos,
  },
  {
    path: '/noticias',
    name: 'HomeNoticias',
    component: HomeNoticias,
  },
  {
    path: '/compliance',
    name: 'HomeCompliance',
    component: HomeCompliance,
  },
  {
    path: '/lgpd',
    name: 'HomeLGPD',
    component: HomeLGPD,
  },
  {
    path: '/contato',
    name: 'HomeContato',
    component: HomeContato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;