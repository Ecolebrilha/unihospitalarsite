<template>
  <div class="privacity">
    <header>
      <a href="/"><div class="logo-container">
        <img src="@/assets/logo-uni.jpeg" alt="Logo da Uni Hospitalar" class="logo">
      </div></a>
      <div class="language-selector">
    <select @change="changeLanguage($event)" v-model="selectedLanguage" class="custom-select">
      <option value="pt" data-icon="fi fi-br">Português</option>
      <option value="en" data-icon="fi fi-us">English</option>
      <option value="es" data-icon="fi fi-es">Español</option>
    </select>

    <div class="icon-selector">
      <span @click="changeLanguage('pt')" class="fi fi-br" title="Português"></span>
      <span @click="changeLanguage('en')" class="fi fi-us" title="English"></span>
      <span @click="changeLanguage('es')" class="fi fi-es" title="Español"></span>
    </div>
  </div>
  <hr class="linha">
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active"></router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active">Sobre</router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
          <li><router-link to="/Serviços" exact-active-class="active">Serviços</router-link></li>
          <li><router-link to="/Produtos" exact-active-class="active">Produtos</router-link></li>
          <li><router-link to="/Compliance" exact-active-class="active">Compliance</router-link></li>
          <li class="dropdown">
            <router-link to="/LGPD" exact-active-class="active">
                LGPD <i class="fas fa-chevron-down"></i>
            </router-link>
            <ul class="dropdown-content">
                <li><router-link to="/PoliticaPrivacidade" exact-active-class="active">Política de Privacidade</router-link></li>
                <li><router-link to="/TermosLegais" exact-active-class="active">Termos Legais de Uso do site</router-link></li>
            </ul>
        </li>
          <li><router-link to="/Contato" exact-active-class="active">Contato</router-link></li>
        </ul>
      </nav>
    </header>

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Política de Privacidade</h1>
      </div>
      <img src="@/assets/header-sobre.jpg" alt="Imagem do Banner">
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

    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/footerSelo.png" alt="Imagem Selo do footer">
        </div>
        <div class="footer-mensagem">
          <p>© 2024 | Uni Hospitalar Ltda. – Todos os direitos reservados</p>
        </div>
        <div class="footer-desenvolvedor">
          <p>Desenvolvido por <a href="github.com/Ecolebrilha">Fernando Leite</a> ツ</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PoliticaPrivacidade',
  data() {
    return {
      sections: [
          {
          title: "Sobre a Política de Privacidade",
          icon: "🔍",
          text: "Bem-vindo à Política de Privacidade da Uni Hospitalar. Nós levamos sua privacidade a sério e estamos comprometidos em proteger suas informações pessoais. Coletamos informações pessoais como nome, e-mail, telefone e empresa quando você interage com nossos serviços, sempre com seu consentimento. As informações coletadas são utilizadas para melhorar nossos serviços, personalizar sua experiência e garantir a segurança das transações.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Segurança e Direitos dos Usuários",
          icon: "🛡️",
          text: "Implementamos medidas de segurança avançadas para proteger suas informações contra acesso não autorizado e outras ameaças. Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou para proteger nossos direitos legais. Você tem o direito de acessar, corrigir e excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Objetivo da Política de Privacidade",
          icon: "🎯",
          text: "A Uni Hospitalar valoriza a ética e a integridade em todas as suas ações. Esta Política de Privacidade tem como objetivo informar os titulares de dados pessoais sobre como suas informações são tratadas, assegurando uma relação transparente e segura.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Nosso Compromisso",
          icon: "🤝",
          text: "A Uni Hospitalar se compromete a oferecer um atendimento de qualidade a todos que acessam nossas plataformas digitais. Baseados no princípio da segurança, protegemos a privacidade e os dados pessoais, apresentando esta Política com clareza sobre o tratamento dos dados de nossos colaboradores, clientes e visitantes.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Proteção dos Dados Pessoais",
          icon: "🔐",
          text: "A Uni Hospitalar adota as melhores práticas de segurança para garantir a integridade e confidencialidade dos dados tratados. Utilizamos mecanismos robustos para proteger contra uso indevido, acessos não autorizados, danos, fraudes e outras ameaças.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Tratamento de Dados",
          icon: "📄",
          text: "A Uni Hospitalar trata os dados pessoais de maneira responsável e ética. Coletamos dados para executar atividades relacionadas aos nossos serviços, incluindo identificação, contato, informações financeiras, dados de navegação, saúde, biometria, entre outros. Todos os dados são utilizados para fins legítimos e de acordo com as legislações vigentes.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
      ],
    };
  },
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
}
</script>

<style scoped>

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #AE2C2A;
    padding: 40px 0;
    box-sizing: border-box;
    font-size: 1.2em;
}

.logo-container {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    padding: 0;
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    max-height: 80px;
    width: auto;
    display: block;
}

@media (max-width: 1200px) {
    .logo-container {
        width: 25%;
    }
    
    .logo {
        max-height: 60px;
    }
}

@media (max-width: 992px) {
    .logo-container {
        width: 30%;
    }

    .logo {
        max-height: 50px;
    }
}

@media (max-width: 768px) {
    .logo-container {
        width: 40%;
    }

    .logo {
        max-height: 40px;
    }
}

@media (max-width: 576px) {
    .logo-container {
        width: 50%;
    }

    .logo {
        max-height: 30px;
    }
}

.linha {
    width: 48%;
    color: #FF8888;
    border: 0;
    border-top: 4px solid #FF8888;
    margin: 0 auto 20px auto;
}

.language-selector {
  position: absolute;
  right: 130px;
  top: 20px;
}

.language-selector select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
}

.custom-select {
  margin-bottom: 10px;
}

.icon-selector {
  display: flex;
  gap: 10px;
}

.icon-selector span {
  font-size: 1.5em;
  cursor: pointer;
  transition: transform 0.3s;
}

.icon-selector span:hover {
  transform: scale(1.1);
}

.icon-selector span.fi-fi-br::before {
  content: '\f1e9';
}

.icon-selector span.fi-fi-us::before {
  content: '\f1e8';
}

.icon-selector span.fi-fi-es::before {
  content: '\f1ea';
}

nav {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    width: auto;
    margin: 0;
}

nav ul li {
    margin: 0 16px;
    position: relative;
}

nav ul li a {
    text-decoration: none;
    color: #FFFFFF;
    font-style: italic;
    font-weight: bold;
    font-size: 1em;
    white-space: nowrap;
    padding-bottom: 5px;
    display: inline-block;
    transition: color 0.3s ease-in-out;
}

nav ul li a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    bottom: 0;
    background-color: #FF8888;
    transition: width 0.3s ease-in-out;
}

nav ul li a:hover::after {
    width: 100%;
}

nav ul li.active a::after {
    width: 100%;
}

nav ul li a.router-link-active::after {
    width: 100%;
}

nav ul li a:hover {
    color: #848484;
}

nav ul li.dropdown {
  position: relative;
}

nav ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: #AE2C2A;
  top: 100%;
  right: 80%;
  transform: translateX(80%);
  min-width: 180px;
  z-index: 1;
  border-radius: 5px;
}

nav ul li .dropdown-content li {
  padding: 10px;
  text-align: left;
}

nav ul li .dropdown-content li a {
  color: #FFFFFF;
  padding: 0;
}

nav ul li .dropdown-content li a:hover {
  color: #848484;
}

nav ul li.dropdown:hover .dropdown-content {
  display: block;
}

.banner-container {
  position: relative;
  padding-top: 107px;
  margin-top: -60px;
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
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

main {
  padding-top: 85px;
  padding-bottom: 150px;
  background-color: #f4f4f4;
}

.privacidade-content {
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 30px;
  margin-bottom: 4%;
}

.privacidade-left,
.privacidade-right {
  width: 40%;
  text-align: left;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.privacidade-left h2,
.privacidade-right h2 {
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 15px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.privacidade-left p,
.privacidade-right p {
  text-align: justify;
  font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
  margin-bottom: 20px;
}

.privacidade-section {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 20px auto;
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
  color: #AE2C2A;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 1.1em;
  line-height: 1.6em;
  color: #555;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .privacidade-content {
    flex-direction: column;
    width: 90%;
  }

  .privacidade-left,
  .privacidade-right {
    width: 100%;
    margin-bottom: 30px;
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
}

footer {
    background-color: #EBEBEB;
    color: #FFFFFF;
    padding: 30px 0 20px 0;
    margin: 0 0 -30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.footer-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
}

.footer-logo img {
    height: 50px;
    transition: transform 0.3s ease-in-out;
}

.footer-logo img:hover {
    transform: scale(1.1);
}

.footer-mensagem {
    color: rgb(97, 97, 97);
    flex: 1;
    text-align: center;
    font-size: 0.9em;
    margin: 10px 0;
}

.footer-mensagem p {
    margin: 0;
    font-weight: 700;
}

.footer-desenvolvedor {
    color: black;
    font-size: 0.9em;
    text-align: right;
}

.footer-desenvolvedor a {
    color: #FF5555;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

.footer-desenvolvedor a:hover {
    color: #AE2C2A;
    text-decoration: underline;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-logo {
        margin-bottom: 10px;
    }

    .footer-desenvolvedor {
        text-align: center;
    }
}
</style>
