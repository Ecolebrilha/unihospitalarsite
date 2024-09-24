<template>
  <div class="contato">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Contato</h1>
      </div>
      <img src="@/assets/header-contato.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="contact-content">
        <div class="section-buttons">
          <button 
            @click="activeSection = 'SAC'" 
            :class="{ active: activeSection === 'SAC' }">
            <span>Suporte</span>
          </button>
          <button 
            @click="activeSection = 'Comercial'" 
            :class="{ active: activeSection === 'Comercial' }">
            <span>Comercial</span>
          </button>
          <button 
            @click="activeSection = 'Licitação'" 
            :class="{ active: activeSection === 'Licitação' }">
            <span>Licitação</span>
          </button>
          <button 
            @click="activeSection = 'Financeiro'" 
            :class="{ active: activeSection === 'Financeiro' }">
            <span>Financeiro</span>
          </button>
        </div>

        <div class="content-box">
          <div v-if="activeSection === 'SAC'">
            <h2>Suporte</h2>
            <p> <i class="fas fa-envelope"></i>contato@unihospitalar.com.br</p>
            <p> <i class="fas fa-phone"></i>+55 (81) 3472 7201</p>
            <div class="info-msg">
              <div class="msg-info"><p><strong>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</strong></p></div>
            </div>
            <ContatoFormulario />
          </div>

          <div v-if="activeSection === 'Comercial'">
            <h2>Comercial</h2>
            <p> <i class="fas fa-envelope"></i>vendas@unihospitalar.com.br</p>
            <p> <i class="fas fa-phone"></i>+55 (81) 3472 7224</p>
            <div class="info-msg">
              <div class="msg-info"><p><strong>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</strong></p></div>
            </div>
            <ContatoFormulario />
          </div>

          <div v-if="activeSection === 'Licitação'">
            <h2>Licitação</h2>
            <p> <i class="fas fa-envelope"></i>licitacao@unihospitalar.com.br</p>
            <p> <i class="fas fa-phone"></i>+55 (81) 3472 7215</p>
            <div class="info-msg">
              <div class="msg-info"><p><strong>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</strong></p></div>
            </div>
            <ContatoFormulario />
          </div>

          <div v-if="activeSection === 'Financeiro'">
            <h2>Financeiro</h2>
            <p> <i class="fas fa-envelope"></i>financeiro@unihospitalar.com.br</p>
            <p> <i class="fas fa-phone"></i>+55 (81) 3472 7202</p>
            <div class="info-msg">
              <div class="msg-info"><p><strong>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</strong></p></div>
            </div>
            <ContatoFormulario />
          </div>
        </div>
      </section>
    </main>

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';
import ContatoFormulario from '@/components/ContatoFormulario.vue';
import { mask } from 'v-mask';

export default {
  name: 'ContatoPage',
  components: {
    ContatoFormulario,
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      activeSection: 'SAC',
      selectedLanguage: 'pt',
      sidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    changeLanguage(event) {
      const language = event.target.value;
      this.$i18n.locale = language;
      this.selectedLanguage = language;
    }
  },
  directives: {
    mask
  }
};
</script>

<style scoped>
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
  background-color: #FFFFFF;
}

.contact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 200px;
  padding-top: 20px;
}

.section-buttons {
  display: flex;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 0;
}

.section-buttons button {
  padding: 10px 20px;
  background-color: #cccbcb1e;
  color: #ae2c2a;
  font-weight: 800;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.section-buttons button:hover {
  background-color: #FF5555;
  color: white;
}

.section-buttons .active {
  background-color: #AE2C2A;
  color: white;
}

.content-box {
  background-color: #e6e9ef7c;
  border: 2px solid #ae2c2a;
  padding: 20px;
  width: 35%;
  text-align: left;
  position: relative;
  margin-top: 0;
  margin-bottom: 5%;
}

.content-box p {
  display: flex;
  align-items: center;
  justify-content: left;
  color: #f05454dc;
  font-weight: 700;
  font-size: 1.3em;
  margin: 20px 0;
}

.content-box i {
  margin-right: 10px;
}

h2 {
  text-transform: uppercase;
  color: #AE2C2A;
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 10px;
}

.msg-info > p {
  color: black;
  font-size: 0.93em;
  margin-top: 50px;
  margin-bottom: 30px;
}

@media (max-width: 1600px) {
    .content-box {
        width: 45%; 
        padding: 15px;
    }

    .section-buttons button {
        font-size: 1em;
    }
}

@media (max-width: 1250px) {
    .content-box {
        width: 55%; 
        padding: 15px;
    }

    .section-buttons button {
        font-size: 1em;
    }
}

@media (max-width: 992px) {
    .content-box {
        width: 70%;
    }

    .section-buttons button {
        font-size: 0.9em;
    }
}

@media (max-width: 768px) {
    section.contact-content {
       margin-bottom: 100px;
    }

    .section-buttons button {
        font-size: 0.9em;
    }

    .content-box {
        width: 80%;
    }
}

@media (max-width: 576px) {
    section.contact-content {
       margin-bottom: 200px;
    }
    .content-box {
        width: 80%;
    }

    .section-buttons button {
      padding: 10px 15px;
        font-size: 0.8em;
    }
}

@media (max-width: 467px) {
    .content-box {
        width: 80%;
    }

    .section-buttons button {
      padding: 10px 15px;
        font-size: 0.6em;
    }

    .content-box p {
        font-size: 0.9em;
    }

    .content-box i {
        font-size: 1em;
    }

    .msg-info > p {
        font-size: 0.9em;
    }
}

@media (max-width: 378px) {
  .section-buttons button {
        padding: 5px 10px;
        font-size: 0.5em;
    }

  .content-box p {
        font-size: 0.6em;
    }

    h2 {
      font-size: 2em;
    }

    .content-box i {
        font-size: 1em;
    }

    .msg-info > p {
        font-size: 0.9em;
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

  .contact-content {
    margin: 100px 0 50px 0;
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
