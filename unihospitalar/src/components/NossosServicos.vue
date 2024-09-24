<template>
  <div class="services">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Nossos Serviços</h1>
      </div>
      <img src="@/assets/header-servicos.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="servicos-content">
        <div class="servico-item">
          <h2><i class="fas fa-briefcase-medical"></i> Nossos Serviços</h2>
          <p>A Uni Hospitalar busca atender de forma eficiente os segmentos públicos e privados, através de profissionais capacitados para interpretar o mercado e assim dar respostas compatíveis e definitivas para o bom atendimento da cadeia de distribuição.</p>
        </div>

        <div class="servico-item">
          <h3><i class="fas fa-user-tie"></i> Segmento Privado</h3>
          <p>Formado internamente por um telemarketing que funciona alinhado com uma equipe de consultores externos, visando sempre dar respostas rápidas e eficazes, a fim de atender o nosso cliente da melhor forma possível.</p>
        </div>

        <div class="servico-item">
          <h3><i class="fas fa-gavel"></i> Segmento Público</h3>
          <p>Formado internamente por um Setor de Licitações, composto por profissionais capacitados e orientados para o mercado, buscando informações através da captação de editais e outras formas a fim de gerar novos negócios. Este setor se completa através da presença de consultores externos que visitam sistematicamente todos os órgãos públicos que trabalhamos.</p>
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
.services {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  background-color: rgba(249, 249, 249, 0.9);
  padding: 0;
  margin: 0;
}

.banner-container {
  position: relative;
  padding-top: 107px;
  margin-top: -100px;
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
  display: flex;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 50px;
  background-color: #FFFFFF;
}

.servicos-content {
  padding: 80px 15px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 20px
}

.servico-item {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  padding: 40px;
  border-radius: 15px;
  max-width: 850px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  text-align: center;
}

.servico-item h2, .servico-item h3 {
  font-weight: bold;
  color: #AE2C2A;
  margin-bottom: 12px;
  text-align: center;
  font-size: 1.8em;
}

.servico-item p {
  color: #34495e;
  font-size: 1.1em;
  line-height: 1.8;
  text-align: center;
}

h2::after, h3::after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 3px;
  background-color: #e74c3c;
  margin-top: 10px;
}

.servico-item:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
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

  .servicos-content {
    margin-top: 100px;
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
    font-size: 3em;
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
}

</style>
