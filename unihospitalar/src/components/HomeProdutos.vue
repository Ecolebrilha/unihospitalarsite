<template>
  <div class="produtos">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Nossos Produtos</h1>
      </div>
      <img src="@/assets/header-produtos.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="produtos-content">
        <div class="card">
          <i class="fas fa-box-open card-icon"></i>
          <h2>LINHA DE PRODUTOS</h2>
          <p>A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo desta forma soluções no tratamento das mais diversas patologias.</p>
        </div>
        <div class="card">
          <i class="fas fa-pills card-icon"></i>
          <h2>MEDICAMENTOS DIVERSOS</h2>
          <p>São medicamentos utilizados para doenças crônico degenerativas que requerem especialidade para seu correto armazenamento.</p>
        </div>
        <div class="card">
          <i class="fas fa-capsules card-icon"></i>
          <h2>MEDICAMENTOS PARA ONCOLOGIA</h2>
          <p>São medicamentos quimioterápicos utilizados para o tratamento do câncer.</p>
        </div>
        <div class="card">
          <i class="fas fa-hospital-alt card-icon"></i>
          <h2>MEDICAMENTOS HOSPITALARES</h2>
          <p>São medicamentos utilizados em ambiente hospitalar necessários aos procedimentos médico-cirúrgicos.</p>
        </div>
      </section>
    </main>

    <a href="https://ecolebrilha.github.io/unihospitalarsite/@/assets/uni-hospitalar-produtos.pdf">
      <button class="btn-produtos">
        <i class="fas fa-download"></i> CLIQUE AQUI PARA BAIXAR NOSSA LINHA DE PRODUTOS
      </button>
    </a>

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
.produtos {
  font-family: Arial, sans-serif;
  background-color: #FFFFFF;
  margin: 0;
  padding: 0;
  text-align: center;
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
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 20px;
  background-color: #FFFFFF;
}

.produtos-content {
  display: flex;
  flex-wrap: wrap;
  padding: 100px 0;
  justify-content: center;
  gap: 50px;
}

.card {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 2.5em;
  color: #AE2C2A;
  margin-bottom: 10px;
}

.card h2 {
  color: #AE2C2A;
  margin: 10px 0 40px 0;
}

.card p {
  color: #34495e;
  text-align: center;
}

.btn-produtos {
  background-color: #AE2C2A;
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 50px;
  margin-bottom: 250px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.btn-produtos:hover {
  background-color: #C53030;
  transform: translateY(-5px);
}

.btn-produtos i {
    margin-right: 8px;
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

  .produtos-content {
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
    .content h1 {
    font-size: 1em;
  }

  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

</style>
