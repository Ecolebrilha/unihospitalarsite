import { createRouter, createWebHistory } from 'vue-router';
import HomePrincipal from '@/components/HomePrincipal.vue';
import HomeDiferenciais from '@/components/HomeDiferenciais.vue';
import HomeProdutos from '@/components/HomeProdutos.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeCompliance from '@/components/HomeCompliance.vue';
import HomeLGPD from '@/components/HomeLGPD.vue';
import HomeContato from '@/components/HomeContato.vue';


const routes = [
  {
    path: '/Principal',
    name: 'HomePrincipal',
    component: HomePrincipal,
  },
  {
    path: '/Diferenciais',
    name: 'HomeDiferenciais',
    component: HomeDiferenciais,
  },
  {
    path: '/Produtos',
    name: 'HomeProdutos',
    component: HomeProdutos,
  },
  {
    path: '/Sobre',
    name: 'HomeSobre',
    component: HomeSobre,
  },
  {
    path: '/Compliance',
    name: 'HomeCompliance',
    component: HomeCompliance,
  },
  {
    path: '/LGPD',
    name: 'HomeLGPD',
    component: HomeLGPD,
  },
  {
    path: '/Contato',
    name: 'HomeContato',
    component: HomeContato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;