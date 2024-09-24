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
import HomeParceiros from '@/components/HomeParceiros.vue';
import CondutaEtica from '@/components/CondutaEtica.vue';
import ResponsabilidadeSocial from '@/components/ResponsabilidadeSocial.vue';
import DireitosHumanos from '@/components/DireitosHumanos.vue';
import SegurancaDados from '@/components/SegurancaDados.vue';
import PraticasAntissuborno from '@/components/PraticasAntissuborno.vue';
import NormasSetoriais from '@/components/NormasSetoriais.vue';

const routes = [
  {
    path: '/unihospitalarsite/',
    name: 'HomePrincipal',
    component: HomePrincipal,
  },
  {
    path: '/unihospitalarsite/Diferenciais',
    name: 'HomeDiferenciais',
    component: HomeDiferenciais,
  },
  {
    path: '/unihospitalarsite/Servicos',
    name: 'NossosServicos',
    component: NossosServicos,
  },
  {
    path: '/unihospitalarsite/Produtos',
    name: 'HomeProdutos',
    component: HomeProdutos,
  },
  {
    path: '/unihospitalarsite/Sobre',
    name: 'HomeSobre',
    component: HomeSobre,
  },
  {
    path: '/unihospitalarsite/Compliance',
    name: 'HomeCompliance',
    component: HomeCompliance,
  },
  {
    path: '/unihospitalarsite/LGPD',
    name: 'HomeLGPD',
    component: HomeLGPD,
  },
  {
    path: '/unihospitalarsite/PoliticaPrivacidade',
    name: 'PoliticaPrivacidade',
    component: PoliticaPrivacidade,
  },
  {
    path: '/unihospitalarsite/TermosLegais',
    name: 'TermosLegais',
    component: TermosLegais,
  },
  {
    path: '/unihospitalarsite/Contato',
    name: 'HomeContato',
    component: HomeContato,
  },
  {
    name: 'ContatoFormulario',
    component: ContatoFormulario,
  },
  {
    path: '/unihospitalarsite/Parceiros',
    name: 'HomeParceiros',
    component: HomeParceiros,
  },
  {
    path: '/unihospitalarsite/CondutaEtica',
    name: 'CondutaEtica',
    component: CondutaEtica,
  },
  {
    path: '/unihospitalarsite/ResponsabilidadeSocial',
    name: 'ResponsabilidadeSocial',
    component: ResponsabilidadeSocial,
  },
  {
    path: '/unihospitalarsite/DireitosHumanos',
    name: 'DireitosHumanos',
    component: DireitosHumanos,
  },
  {
    path: '/unihospitalarsite/SegurancaDados',
    name: 'SegurancaDados',
    component: SegurancaDados,
  },
  {
    path: '/unihospitalarsite/PraticasAntissuborno',
    name: 'PraticasAntissuborno',
    component: PraticasAntissuborno,
  },
  {
    path: '/unihospitalarsite/NormasSetoriais',
    name: 'NormasSetoriais',
    component: NormasSetoriais,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
