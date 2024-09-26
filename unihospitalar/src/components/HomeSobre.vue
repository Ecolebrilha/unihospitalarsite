<template>
  <div class="about">
    <HomeHeader />
    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Sobre nós</h1>
      </div>
      <img src="@/assets/header-sobre.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <div class="content">
        <div class="item">
          <div class="icon-container1">
            <i class="fas fa-users"></i>
          </div>
          <div class="text-content">
            <h2>QUEM SOMOS</h2>
            <p class="p-geral">Há 19 anos no mercado, a Uni Hospitalar vem conquistando espaço na distribuição de medicamentos de forma sólida e consolidada, comprometida com a saúde e bem-estar da sociedade. Fornecemos produtos de alta qualidade e serviços excepcionais, sempre com uma visão aprofundada do mercado farmacêutico.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container2">
            <i class="fas fa-bullseye"></i>
          </div>
          <div class="text-content">
            <h2>MISSÃO</h2>
            <p class="p-geral">Ser uma empresa sólida e confiável na distribuição de medicamentos, surpreendendo os clientes com a melhor prestação de serviços, e fornecer soluções de saúde acessíveis, inovadoras e de alta qualidade. Contribuímos para o bem-estar e qualidade de vida das pessoas, sempre com ética, responsabilidade e compromisso com nossos valores.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container3">
            <i class="fas fa-eye"></i>
          </div>
          <div class="text-content">
            <h2>VISÃO</h2>
            <p class="p-geral">Ser reconhecida como a principal distribuidora de medicamentos do Brasil, expandindo nossas operações para novas regiões e setores, sempre buscando excelência em tudo o que fazemos, mantendo a transparência e respeito com as relações humanas.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container4">
            <i class="fas fa-heart"></i>
          </div>
          <div class="text-content">
            <h2>VALORES</h2>
            <p class="p-valores">Nosso trabalho é guiado pelos seguintes valores fundamentais:</p>
            <div class="valores-grid">
              <span>Ética</span>
              <span>Qualidade</span>
              <span>Inovação</span>
              <span>Responsabilidade</span>
              <span>Compromisso</span>
              <span>Transparência</span>
              <span>Agilidade</span>
              <span>Objetividade</span>
              <span>Integridade</span>
            </div>
          </div>
        </div>
      </div>
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
.about {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to bottom, #f4f4f4, #ffffff);
}

.banner-container {
  position: relative;
  padding-top: 107px;
  margin-top: -105px;
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
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
  padding-top: 100px;
  padding-bottom: 50px;
  background-color: #FFFFFF;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
  gap: 60px;
  max-width: 1000px;
  width: 100%;
  margin-bottom: 100px;
}

.item {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  padding: 50px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;
}

.item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.icon-container1 {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 20px 17px 20px 17px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 2em;
  transition: background-color 0.3s ease;
  transform: translate(-35px, -100px);
}

.icon-container2 {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 2em;
  transition: background-color 0.3s ease;
  transform: translate(-35px, -100px);
}

.icon-container3 {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 20px 18px 20px 18px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 2em;
  transition: background-color 0.3s ease;
  transform: translate(-35px, -90px);
}

.icon-container4 {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 2em;
  transition: background-color 0.3s ease;
  transform: translate(-35px, -150px);
}

.item:hover .icon-container1, .item:hover .icon-container2, .item:hover .icon-container3, .item:hover .icon-container4 {
  background-color: #FF5555;
}

.text-content {
  flex: 1;
}

.text-content h2 {
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin: 30px 0 10px 0;
  position: relative;
  display: inline-block;
  width: 100%;
}

.text-content h2::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #e74c3c; 
    margin: 4px auto 0;
}

.p-geral,
.p-valores {
  font-size: 1.1em;
  color: #707070;
  text-align: center;
}

.p-valores {
  text-align: center;
  margin-bottom: 30px;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 100%;
}

.valores-grid span {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-sizing: border-box;
}

.valores-grid span:hover {
  background-color: #FF5555;
  color: #ffffff;
}

@media (max-width: 490px) {
  .valores-grid {
    grid-template-columns: 1fr;
    width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 340px) {
  .valores-grid {
    grid-template-columns: 1fr;
    width: 50%;
    justify-content: center;
  }
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

  .content {
    margin-top: 100px;
    padding: 5px;
  }

  .item {
    flex-direction: column;
    text-align: center;
  }

  .icon-container1 {
    transform: translate(0px, 0px);
    margin: 0 0 10px 0;
    font-size: 1.5em;
  }

  .icon-container2 {
    transform: translate(0px, 0px);
    margin: 0 0 10px 0;
    font-size: 1.5em;
  }

  .icon-container3 {
    transform: translate(0px, 0px);
    margin: 0 0 10px 0;
    font-size: 1.5em;
  }

  .icon-container4 {
    transform: translate(0px, 0px);
    margin: 0 0 10px 0;
    font-size: 1.5em;
  }

  .text-content {
    padding-left: 0;
  }

  .p-geral,
  .p-valores {
    font-size: 1em;
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
