<template>
  <div class="privacity">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Política de Privacidade</h1>
      </div>
      <img src="@/assets/header-politica-privacidade.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section v-for="(section, index) in sections" :key="index" class="privacidade-section" :style="{ backgroundColor: section.backgroundColor }">
        <div class="icon" v-html="section.icon"></div>
        <div class="text-content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.text }}</p>
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
  name: 'PoliticaPrivacidade',
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false,
      sections: [
          {
          title: "🔍 Sobre a Política de Privacidade",
          text: "Bem-vindo à Política de Privacidade da Uni Hospitalar. Nós levamos sua privacidade a sério e estamos comprometidos em proteger suas informações pessoais. Coletamos informações pessoais como nome, e-mail, telefone e empresa quando você interage com nossos serviços, sempre com seu consentimento. As informações coletadas são utilizadas para melhorar nossos serviços, personalizar sua experiência e garantir a segurança das transações.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "🛡️ Segurança e Direitos dos Usuários",
          text: "Implementamos medidas de segurança avançadas para proteger suas informações contra acesso não autorizado e outras ameaças. Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou para proteger nossos direitos legais. Você tem o direito de acessar, corrigir e excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "🎯 Objetivo da Política de Privacidade",
          text: "A Uni Hospitalar valoriza a ética e a integridade em todas as suas ações. Esta Política de Privacidade tem como objetivo informar os titulares de dados pessoais sobre como suas informações são tratadas, assegurando uma relação transparente e segura.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "🤝 Nosso Compromisso",
          text: "A Uni Hospitalar se compromete a oferecer um atendimento de qualidade a todos que acessam nossas plataformas digitais. Baseados no princípio da segurança, protegemos a privacidade e os dados pessoais, apresentando esta Política com clareza sobre o tratamento dos dados de nossos colaboradores, clientes e visitantes.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "🔐 Proteção dos Dados Pessoais",
          text: "A Uni Hospitalar adota as melhores práticas de segurança para garantir a integridade e confidencialidade dos dados tratados. Utilizamos mecanismos robustos para proteger contra uso indevido, acessos não autorizados, danos, fraudes e outras ameaças.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "📄 Tratamento de Dados",
          text: "A Uni Hospitalar trata os dados pessoais de maneira responsável e ética. Coletamos dados para executar atividades relacionadas aos nossos serviços, incluindo identificação, contato, informações financeiras, dados de navegação, saúde, biometria, entre outros. Todos os dados são utilizados para fins legítimos e de acordo com as legislações vigentes.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
      ],
    };
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
    transform: translateX(70%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

main {
  padding-top: 120px;
  padding-bottom: 150px;
  background-color: #FFFFFF;
}

.privacidade-content {
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 30px;
  margin-bottom: 4%;
}

.privacidade-section {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 20px;
  margin: 50px auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease;
}

.icon {
  font-size: 2.5em;
  margin-right: 20px;
}

.text-content h2 {
  font-size: 2em;
  margin: 0 0 10px 0;
  color: #AE2C2A;
  position: relative;
  display: inline-block;
}

.text-content h2::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #e74c3c; 
    margin: 4px auto 0;
}

.text-content p {
  font-size: 1.1em;
  line-height: 1.6em;
  color: #34495e;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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

  .privacidade-content {
    flex-direction: column;
    width: 90%;
  }

  .privacidade-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .icon {
    font-size: 2em;
    margin-bottom: 10px;
  }

  .text-content h2 {
    font-size: 1.5em;
  }

  .text-content p {
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
    transform: translateX(5%);
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
    font-size: 1em;
  }
}

@media (max-width: 768px) {
  .banner-overlay h1 {
    font-size: 2em;
  }
}

@media (max-width: 576px) {
  .banner-overlay h1 {
    font-size: 1.4em;
  }
}
</style>
