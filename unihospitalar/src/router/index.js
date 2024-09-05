import { createRouter, createWebHistory } from 'vue-router';
import HomePrincipal from '@/components/HomePrincipal.vue';
import HomeDiferenciais from '@/components/HomeDiferenciais.vue';
import NossosServicos from '@/components/NossosServicos.vue';
import HomeProdutos from '@/components/HomeProdutos.vue';
import HomeSobre from '@/components/HomeSobre.vue';
import HomeCompliance from '@/components/HomeCompliance.vue';
import HomeLGPD from '@/components/HomeLGPD.vue';
import PoliticaPrivacidade from '@/components/PoliticaPrivacidade.vue';
import TermosLegais from '@/components/TermosLegais.vue';
import HomeContato from '@/components/HomeContato.vue';
import ContatoFormulario from '@/components/ContatoFormulario.vue';

const routes = [
  {
    path: '/',
    name: 'HomePrincipal',
    component: HomePrincipal,
  },
  {
    path: '/Diferenciais',
    name: 'HomeDiferenciais',
    component: HomeDiferenciais,
  },
  {
    path: '/Serviços',
    name: 'NossosServicos',
    component: NossosServicos,
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
    path: '/PoliticaPrivacidade',
    name: 'PoliticaPrivacidade',
    component: PoliticaPrivacidade,
  },
  {
    path: '/TermosLegais',
    name: 'TermosLegais',
    component: TermosLegais,
  },
  {
    path: '/Contato',
    name: 'HomeContato',
    component: HomeContato,
  },
  {
    path: '/',
    name: 'ContatoFormulario',
    component: ContatoFormulario,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;