import { createRouter, createWebHistory } from 'vue-router';
import HomePrincipal from '@/components/HomePrincipal.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeDiferenciais from '@/components/HomeDiferenciais.vue';
import HomeNossosServicos from '@/components/HomeNossosServicos.vue';
import HomeProdutos from '@/components/HomeProdutos.vue';
import HomeParceiros from '@/components/HomeParceiros.vue';
import HomeContato from '@/components/HomeContato.vue';


const routes = [
  {
    path: '/',
    name: 'HomePrincipal',
    component: HomePrincipal,
  },
  {
    path: '/sobre',
    name: 'HomeSobre',
    component: HomeSobre,
  },
  {
    path: '/diferenciais',
    name: 'HomeDiferenciais',
    component: HomeDiferenciais,
  },
  {
    path: '/nossos-servicos',
    name: 'HomeNossosServicos',
    component: HomeNossosServicos,
  },
  {
    path: '/produtos',
    name: 'HomeProdutos',
    component: HomeProdutos,
  },
  {
    path: '/parceiros',
    name: 'HomeParceiros',
    component: HomeParceiros,
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