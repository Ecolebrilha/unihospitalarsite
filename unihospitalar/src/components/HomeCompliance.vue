<template>
  <div class="compliance">
    <header>
      <a href="/">
        <div class="logo-container">
          <img src="@/assets/uni.png" alt="Logo da Uni Hospitalar" class="logo">
          <span class="trademark-symbol">®</span>
        </div>
      </a>
      <div class="contact-info">
        <span class="phone-number">
          <i class="fas fa-phone"></i>
          <span class="small-numbers">+55 81 </span> 3472 7201
        </span>
        <span>
          <a href="mailto:contato@unihospitalar.com.br"><i class="fas fa-envelope"></i> contato@unihospitalar.com.br</a>
        </span>
      </div>
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
        <h1>Compliance</h1>
      </div>
      <img src="@/assets/header-parceiros.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="compliance-overview" v-bind:class="{ 'slide-in-left': true }">
        <h2><i class="fas fa-gavel"></i> Compliance e Código de Conduta</h2>
        <p>
          O nosso compromisso é com a integridade, transparência e conformidade. Explore o Código de Conduta que guia as práticas éticas da Uni Hospitalar e garante o respeito às normas e regulamentos aplicáveis.
        </p>
      </section>
      
      <section class="compliance-details">
        <div class="compliance-section slide-in-right">
          <h3><i class="fas fa-book"></i> Código de Conduta</h3>
          <p>Nosso Código de Conduta é um guia para todos os colaboradores, parceiros e fornecedores, assegurando um comportamento ético em todas as nossas atividades.</p>
          <ul>
            <li><a href="/compliance/conduta-etic"><i class="fas fa-check"></i> Conduta Ética e Integridade</a></li>
            <li><a href="/compliance/responsabilidade-social"><i class="fas fa-globe"></i> Responsabilidade Social e Sustentabilidade</a></li>
            <li><a href="/compliance/direitos-humanos"><i class="fas fa-hands-helping"></i> Respeito aos Direitos Humanos</a></li>
          </ul>
        </div>

        <div class="compliance-section slide-in-left">
          <h3><i class="fas fa-file-alt"></i> Políticas e Regulamentos</h3>
          <p>Acesse nossas políticas que reforçam o compromisso com a conformidade e a ética.</p>
          <ul>
            <li><a href="/compliance/politica-seguranca-dados"><i class="fas fa-lock"></i> Política de Segurança de Dados</a></li>
            <li><a href="/compliance/anti-suborno"><i class="fas fa-ban"></i> Práticas Antissuborno</a></li>
            <li><a href="/compliance/normas-setoriais"><i class="fas fa-balance-scale"></i> Conformidade com Normas Setoriais</a></li>
          </ul>
        </div>

        <div class="compliance-section slide-in-right">
          <h3><i class="fas fa-exclamation-triangle"></i> Instruções para Ações Corretivas</h3>
          <p>Identificou alguma irregularidade? Veja como proceder e entre em contato com nosso departamento de compliance para orientação.</p>
          <a href="/contato" class="cta-button"><i class="fas fa-phone"></i> Entre em Contato</a>
        </div>

        <div class="compliance-section slide-in-left">
          <h3><i class="fas fa-link"></i> Links para Documentos Legais</h3>
          <p>Acesse documentos completos como políticas de privacidade, termos de uso, entre outros.</p>
          <ul>
            <li><a href="/PoliticaPrivacidade"><i class="fas fa-user-shield"></i> Política de Privacidade</a></li>
            <li><a href="/TermosLegais"><i class="fas fa-file-contract"></i> Termos Legais de Uso</a></li>
          </ul>
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
  data() {
    return {
      selectedLanguage: 'pt'
    }
  },
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;

      console.log(`Idioma selecionado: ${value}`);
    }
  }
}
</script>

<style scoped>
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

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slideInRight 1s ease-in-out;
}

.slide-in-left {
  animation: slideInLeft 1s ease-in-out;
}

.compliance {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
  color: #333;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #AE2C2A;
    padding: 35px 0;
    box-sizing: border-box;
    font-size: 1.2em;
}

.logo-container {
    position: absolute;
    top: 0.3px;
    left: 0px;
    background-color: #E5E5E5;
    padding: 22.5px 0;
    width: 20%;
    box-sizing: border-box;
}

.logo {
    height: 100px;
    margin: 0 auto;
}

.trademark-symbol {
    font-size: 1.2em;
    font-weight: 700;
    margin-left: 3px;
    color: #000000;
    position: relative;
    top: -67px;
}

.contact-info {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    padding-right: 0;
}

.contact-info span {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #FF8888;
    margin-right: 30px;
}

.contact-info a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #FF8888;
    margin-right: 30px;
}

.contact-info span:last-child {
    margin-right: 0;
}

.contact-info i {
    margin-right: 8px;
}

.small-numbers {
    font-size: 0.8em;
    padding-right: 5px;
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
  margin-bottom: 20px;
}

.icon-selector {
  display: flex;
  gap: 10px;
}

.icon-selector span {
  font-size: 2em;
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

.linha {
    width: 48%;
    color: #FF8888;
    border: 0;
    border-top: 2px solid #FF8888;
    margin: 0 auto 20px auto;
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
  padding-top: 145px;
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
  padding: 50px 20px;
  background-color: #f4f4f4;
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
  font-size: 1.2em;
  line-height: 1.5;
}

.compliance-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding-bottom: 80px;
}

.compliance-section {
  background-color: #FFF;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.compliance-section h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #AE2C2A;
}

.compliance-section p {
  font-size: 1em;
  line-height: 1.5;
}

.compliance-section ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.compliance-section ul li {
  margin-bottom: 10px;
}

.compliance-section ul li a {
  text-decoration: none;
  color: #AE2C2A;
  font-weight: bold;
}

.compliance-section ul li a:hover {
  color: #FF8888;
}

.compliance-section .cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #AE2C2A;
  color: #FFF;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

.compliance-section .cta-button:hover {
  background-color: #FF8888;
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
