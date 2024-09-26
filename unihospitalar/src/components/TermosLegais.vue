<template>
  <div class="termos-legais">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Termos Legais</h1>
      </div>
      <img src="@/assets/header-termos-legais.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="termos-content">
        <div class="termos-section">
          <h2>Termos de Uso</h2>
          <p>O nosso site foi desenvolvido para os clientes, colaboradores, parceiros e todos que se relacionam com a Uni Hospitalar, assim como para visitantes interessados em nossos serviços.</p>
          <p>Estes Termos de Uso podem ser alterados a qualquer momento pela Uni Hospitalar, sendo uma nova versão atualizada publicada em nosso site.</p>
        </div>

        <div class="termos-section">
          <h2>Acesso ao Site</h2>
          <p>O site da Uni Hospitalar funciona 24 horas por dia, podendo haver interrupções temporárias para manutenção, o que tornará o site indisponível pelo tempo necessário.</p>
          <p>O acesso ao site é permitido apenas para maiores de 18 anos ou menores de idade que possuam autorização de seus responsáveis legais. Ao acessar, navegar ou utilizar o site da Uni Hospitalar, todos os visitantes concordam com estes Termos de Uso. Caso discorde de qualquer parte deste documento, recomendamos que interrompa imediatamente a navegação.</p>
        </div>

        <div class="termos-section">
          <h2>Uso de Licença e Cópia</h2>
          <p>É concedida permissão para acessar todo o conteúdo do site da Uni Hospitalar, incluindo a realização de downloads e cópias dos materiais, mas apenas para uso pessoal e não comercial. Esta permissão não implica em cessão de direitos ou qualquer tipo de licença permanente. Esta licença será automaticamente revogada em caso de violação de suas condições, podendo ser rescindida unilateralmente pela Uni Hospitalar a qualquer momento.</p>
          <p>Os visitantes devem utilizar o site e as informações nele contidas de maneira adequada e lícita, em conformidade com a legislação aplicável e as boas práticas de mercado. O uso indevido do site ou de seus conteúdos pode violar os direitos de propriedade intelectual da Uni Hospitalar, sendo punível nos termos da legislação vigente.</p>
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
  display: flex;
  justify-content: center;
  padding-top: 75px;
  padding-bottom: 80px;
  background-color: #FFFFFF;
}

.termos-content {
  width: 70%;
  margin: auto;
  padding: 60px;
}

.termos-section {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  padding: 20px;
  margin-bottom: 80px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.termos-section h2 {
  font-size: 2em;
  margin: 0 0 20px 0;
  color: #AE2C2A;
  position: relative;
  display: inline-block;
}

.termos-section h2::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #e74c3c; 
    margin: 4px auto 0;
}

.termos-section p {
  font-size: 1em;
  line-height: 1.6em;
  color: #34495e;
  margin-bottom: 15px;
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

  .termos-content {
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
