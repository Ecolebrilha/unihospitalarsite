<template>
    <div class="lgpd">
      <HomeHeader />
  
      <div class="banner-container">
      <div class="banner-overlay">
        <h1>lgpd</h1>
      </div>
      <img src="@/assets/header-lgpd.jpg" alt="Imagem do Banner">
    </div>
  
      <main>
        <div class="lgpd-container">
          
          <div class="lgpd-header">
            <h1>Protegendo seus dados com responsabilidade</h1>
            <h2>Nosso compromisso com a segurança e a LGPD</h2>
          </div>
  
          <section class="lgpd-section">
            <div class="section-content">
              <i class="fas fa-shield-alt icon card-icon"></i>
              <p>
                Somos a Uni Hospitalar, uma empresa dedicada à excelência em serviços de
                saúde e comprometida com a proteção dos seus dados pessoais. Valorizamos
                a segurança e a privacidade dos nossos clientes, parceiros e
                colaboradores.
              </p>
            </div>
          </section>
  
          <section class="lgpd-section">
            <div class="section-content">
              <i class="fas fa-lock icon card-icon"></i>
              <p>
                Na Uni Hospitalar, reconhecemos a importância da Lei Geral de Proteção
                de Dados (LGPD) e reafirmamos nosso compromisso em tratar seus dados
                pessoais com responsabilidade e transparência. Implementamos medidas
                rigorosas de segurança para garantir que suas informações estejam
                protegidas.
              </p>
            </div>
          </section>
  
          <section class="lgpd-section">
            <div class="section-content">
              <i class="fas fa-file-shield icon card-icon"></i>
              <p>
                Para mais detalhes sobre como tratamos seus dados, você pode acessar
                nossa Política de Privacidade e os Termos Legais de Uso do nosso site.
                Esses documentos explicam de forma clara e detalhada como utilizamos,
                armazenamos e protegemos suas informações.
              </p>
              <div class="lgpd-buttons">
                <router-link to="/unihospitalarsite/PoliticaPrivacidade"><button>Política de Privacidade</button></router-link>
                <router-link to="/unihospitalarsite/TermosLegais"><button>Termos Legais de Uso</button></router-link>
              </div>
            </div>
          </section>
  
          <section class="lgpd-section">
            <div class="section-content">
              <i class="fas fa-headset icon card-icon"></i>
              <p>
                Caso tenha dúvidas sobre como seus dados são tratados ou precise de mais
                informações, entre em contato conosco. Estamos à disposição para
                esclarecer qualquer questão.
              </p>
              <router-link to="/unihospitalarsite/Contato"><button class="contact-btn">FALE CONOSCO</button></router-link>
            </div>
          </section>
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
  .lgpd {
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
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
  padding-top: 40px;
  padding-bottom: 50px;
  background-color: #FFFFFF;
}

  .lgpd-container {
    font-family: 'Arial', sans-serif;
    color: #333;
    padding: 30px;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 50px;
  }
  
  .lgpd-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .lgpd-header h1 {
    color: #AE2C2A;
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .lgpd-header h2 {
    color: #f05454;
    font-size: 24px;
    font-weight: 700;
  }
  
  .lgpd-section {
    margin-bottom: 40px;
    padding: 20px;
    background: linear-gradient(145deg, #e6e9ef, #ffffff);
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .lgpd-section .section-content {
    position: relative;
    padding: 20px;
  }

  .card-icon {
  font-size: 2.5em;
  color: #AE2C2A;
  margin-bottom: 10px;
}
  
  .lgpd-section p {
    color: #34495e;
    font-size: 1.1em;
    line-height: 1.8;
  }
  
  .lgpd-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .lgpd-buttons button {
    padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #f05454;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: slideInRight 2s ease-out;
}

.lgpd-buttons button:hover {
  background-color: #d04343;
  transform: scale(1.05);
}
  
  .lgpd-buttons button:active {
    transform: translateY(0);
  }

  .contact-btn {
    padding: 15px 30px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: #f05454;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: slideInRight 2s ease-out; 
}

.contact-btn:hover {
  background-color: #d04343;
  transform: scale(1.05);
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

  .lgpd-container {
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
  
