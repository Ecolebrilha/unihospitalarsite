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
import HomeParceiros from '@/components/HomeParceiros.vue'
import CondutaEtica from '@/components/CondutaEtica.vue';
import ResponsabilidadeSocial from '@/components/ResponsabilidadeSocial.vue';
import DireitosHumanos from '@/components/DireitosHumanos.vue';
import SegurancaDados from '@/components/SegurancaDados.vue';
import PraticasAntissuborno from '@/components/PraticasAntissuborno.vue';
import NormasSetoriais from '@/components/NormasSetoriais.vue';

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
    path: '/Servicos',
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
  {
    path: '/Parceiros',
    name: 'HomeParceiros',
    component: HomeParceiros,
  },
  {
    path: '/CondutaEtica',
    name: 'CondutaEtica',
    component: CondutaEtica,
  },
  {
    path: '/ResponsabilidadeSocial',
    name: 'ResponsabilidadeSocial',
    component: ResponsabilidadeSocial,
  },
  {
    path: '/DireitosHumanos',
    name: 'DireitosHumanos',
    component: DireitosHumanos,
  },
  {
    path: '/SegurancaDados',
    name: 'SegurancaDados',
    component: SegurancaDados,
  },
  {
    path: '/PraticasAntissuborno',
    name: 'PraticasAntissuborno',
    component: PraticasAntissuborno,
  },
  {
    path: '/NormasSetoriais',
    name: 'NormasSetoriais',
    component: NormasSetoriais,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
