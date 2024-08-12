import { createRouter, createWebHistory } from 'vue-router';
import HomePrincipal from '@/components/HomePrincipal.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeDiferenciais from '@/components/HomeDiferenciais.vue';
import HomeNossosServicos from '@/components/NossosServicos.vue';
import HomeProdutos from '@/components/HomeProdutos.vue';
import HomeParceiros from '@/components/HomeParceiros.vue';
import HomeContato from '@/components/HomeContato.vue';


const routes = [
  {
    path: '/',
    name: 'HomePrincipal',
    component: HomePrincipal,
    component: HomeSobre,
    component: HomeDiferenciais,
    component: HomeNossosServicos,
    component: HomeProdutos,
    component: HomeParceiros,
    component: HomeContato,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;