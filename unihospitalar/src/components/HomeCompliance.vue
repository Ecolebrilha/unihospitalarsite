<template>
  <div class="compliance">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Compliance</h1>
      </div>
      <img src="@/assets/header-compliance.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="compliance-overview" v-bind:class="{ 'slide-in-left': true }">
        <h2><i class="fas fa-balance-scale"></i> Compliance e Código de Conduta</h2>
        <p>
          O nosso compromisso é com a integridade, transparência e conformidade. Explore o Código de Conduta que guia as práticas éticas da Uni Hospitalar e garante o respeito às normas e regulamentos aplicáveis.
        </p>
      </section>
      
      <section class="compliance-details">
        <div class="compliance-section-left enter-right-animation">
          <h3><i class="fas fa-book"></i> Código de Conduta</h3>
          <p>Nosso Código de Conduta é um guia para todos os colaboradores, parceiros e fornecedores, assegurando um comportamento ético em todas as nossas atividades.</p>
          <ul>
            <li><router-link to="/CondutaEtica" exact-active-class="active"><i class="fas fa-check"></i> Conduta Ética e Integridade</router-link></li>
            <li><router-link to="/ResponsabilidadeSocial" exact-active-class="active"><i class="fas fa-globe"></i> Responsabilidade Social e Sustentabilidade</router-link></li>
            <li><router-link to="/DireitosHumanos" exact-active-class="active"><i class="fas fa-hands-helping"></i> Respeito aos Direitos Humanos</router-link></li>
          </ul>
        </div>

        <div class="compliance-section-right enter-left-animation">
          <h3><i class="fas fa-file-alt"></i> Políticas e Regulamentos</h3>
          <p>Acesse nossas políticas que reforçam o compromisso com a conformidade e a ética.</p>
          <ul>
            <li><router-link to="/SegurancaDados" exact-active-class="active"><i class="fas fa-lock"></i> Política de Segurança de Dados</router-link></li>
            <li><router-link to="/PraticasAntissuborno" exact-active-class="active"><i class="fas fa-ban"></i> Práticas Antissuborno</router-link></li>
            <li><router-link to="/NormasSetoriais" exact-active-class="active"><i class="fas fa-gavel"></i> Conformidade com Normas Setoriais</router-link></li>
          </ul>
        </div>

        <div class="compliance-section-left enter-right-animation">
          <h3><i class="fas fa-exclamation-triangle"></i> Instruções para Ações Corretivas</h3>
          <p>Identificou alguma irregularidade? Veja como proceder e entre em contato com nosso departamento para uma melhor orientação.</p>
          <router-link to="/Contato"><button class="cta-button"><i class="fas fa-phone"></i> Entre em Contato</button></router-link>
        </div>

        <div class="compliance-section-right enter-left-animation">
          <h3><i class="fas fa-link"></i> Links para Documentos Legais</h3>
          <p>Acesse documentos completos como políticas de privacidade, termos de uso, entre outros.</p>
          <ul>
            <li><router-link to="/PoliticaPrivacidade" exact-active-class="active"><i class="fas fa-user-shield"></i> Política de Privacidade</router-link></li>
            <li><router-link to="/TermosLegais" exact-active-class="active"><i class="fas fa-file-contract"></i> Termos Legais de Uso</router-link></li>
          </ul>
        </div>
      </section>
    </main>

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false
    }
  },
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;

      console.log(`Idioma selecionado: ${value}`);
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
}
</script>

<style scoped>
@keyframes enterFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes enterFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.enter-right-animation {
  animation: enterFromRight 2s ease-in-out;
}

.enter-left-animation {
  animation: enterFromLeft 2s ease-in-out;
}

.compliance {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

.banner-container {
  position: relative;
  padding-top: 107px;
  margin-top: -105px;
  display: flex;
  justify-content: center;
  background-color: #F9F9F9;
}

.banner-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-overlay h1 {
  color: #FFFFFF;
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInRight 1.5s ease-out;
}

@keyframes slideInRight {
  from {
    transform: translateX(85%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

main {
  padding: 70px 20px;
  background-color: #FFFFFF;
}

.compliance-overview {
  margin-bottom: 50px;
}

.compliance-overview h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #AE2C2A;
}

.compliance-overview p {
  color: #34495e;
  font-size: 1.2em;
  line-height: 1.5;
}

.compliance-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding-bottom: 80px;
}

.compliance-section-left {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.compliance-section-right {
  background: linear-gradient(45deg, #ffffff, #e6e9ef);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.compliance-section-left h3,
.compliance-section-right h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #AE2C2A;
}

.compliance-section-left p,
.compliance-section-right p {
  color: #34495e;
  font-size: 1em;
  line-height: 1.5;
}

.compliance-section-left ul,
.compliance-section-right ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.compliance-section-left ul li,
.compliance-section-right ul li {
  margin-bottom: 10px;
}

.compliance-section-left ul li a,
.compliance-section-right ul li a {
  text-decoration: none;
  color: #AE2C2A;
  font-weight: bold;
}

.compliance-section-left ul li a:hover,
.compliance-section-right ul li a:hover {
  color: #FF5555;
}

.compliance-section-left .cta-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin-top: 20px;
    padding: 12px 24px; 
    font-size: 12px; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 700; 
    letter-spacing: 1px; 
}

.compliance-section-left .cta-button:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
}

@media (max-width: 480px) {
  @keyframes slideInRight {
  from {
    transform: translateX(10%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (max-width: 768px) {
  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .banner-overlay h1 {
    font-size: 1.2em;
    padding: 5px;
  }

  .compliance-overview {
    margin-top: 100px;
  }

  main {
    padding: 100px 10px;
  }

  .compliance-details {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .compliance-overview h2 {
    font-size: 1.8em;
  }

  .compliance-overview p {
    font-size: 1.1em;
  }

  @keyframes slideInRight {
  from {
    transform: translateX(21%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (max-width: 992px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

@media (min-width: 769px) {
  @keyframes slideInRight {
  from {
    transform: translateX(30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 993px) {
  @keyframes slideInRight {
  from {
    transform: translateX(28%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 1390px) {
  @keyframes slideInRight {
  from {
    transform: translateX(57%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 300px) {
  @keyframes slideInRight {
  from {
    transform: translateX(11%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 400px) {
  @keyframes slideInRight {
  from {
    transform: translateX(30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (max-width: 400px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 768px) {
  .banner-overlay h1 {
    font-size: 2em;
  }
}

@media (max-width: 576px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
  
  main {
    padding: 100px 10px;
  }

  .item {
        width: 60%;
    }

  .compliance-overview h2 {
    font-size: 1.5em;
  }

  .compliance-overview p {
    font-size: 1em;
  }

  .compliance-details {
    padding-bottom: 60px;
  }

  .compliance-section-left h3,
  .compliance-section-right h3 {
    font-size: 1.3em;
  }

  .compliance-section-left p,
  .compliance-section-right p {
    font-size: 0.9em;
  }
}

</style>
