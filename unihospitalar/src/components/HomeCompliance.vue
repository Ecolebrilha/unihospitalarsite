<template>
  <div class="compliance">
    <header>
      <button @click="toggleSidebar" class="menu-toggle">☰</button>

      <div :class="['menu-sidebar', { 'active': sidebarOpen }]">
        <button class="menu-close" @click="toggleSidebar">
          ×
        </button>
        <ul>
          <li><router-link to="/" exact-active-class="active"></router-link></li>
          <li><router-link to="/unihospitalarsite/Sobre" exact-active-class="active">Sobre</router-link></li>
          <li><router-link to="/unihospitalarsite/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
          <li><router-link to="/unihospitalarsite/Servicos" exact-active-class="active">Serviços</router-link></li>
          <li><router-link to="/unihospitalarsite/Produtos" exact-active-class="active">Produtos</router-link></li>
          <li><router-link to="/unihospitalarsite/Compliance" exact-active-class="active">Compliance</router-link></li>
          <li class="dropdown">
            <router-link to="/unihospitalarsite/LGPD" exact-active-class="active">
              LGPD <i class="fas fa-chevron-down"></i>
            </router-link>
            <ul class="dropdown-content">
              <li><router-link to="/unihospitalarsite/PoliticaPrivacidade" exact-active-class="active">Política de Privacidade</router-link></li>
              <li><router-link to="/unihospitalarsite/TermosLegais" exact-active-class="active">Termos Legais de Uso do site</router-link></li>
            </ul>
          </li>
          <li><router-link to="/unihospitalarsite/Contato" exact-active-class="active">Contato</router-link></li>
        </ul>
      </div>

      <a href="/unihospitalarsite/">
        <div class="logo-container">
          <img src="@/assets/logo-uni.jpeg" alt="Logo da Uni Hospitalar" class="logo">
        </div>
      </a>

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

      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active"></router-link></li>
          <li><router-link to="/unihospitalarsite/Sobre" exact-active-class="active">Sobre</router-link></li>
          <li><router-link to="/unihospitalarsite/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
          <li><router-link to="/unihospitalarsite/Servicos" exact-active-class="active">Serviços</router-link></li>
          <li><router-link to="/unihospitalarsite/Produtos" exact-active-class="active">Produtos</router-link></li>
          <li><router-link to="/unihospitalarsite/Compliance" exact-active-class="active">Compliance</router-link></li>
          <li class="dropdown">
            <router-link to="/unihospitalarsite/LGPD" exact-active-class="active">
              LGPD <i class="fas fa-chevron-down"></i>
            </router-link>
            <ul class="dropdown-content">
              <li><router-link to="/unihospitalarsite/PoliticaPrivacidade" exact-active-class="active">Política de Privacidade</router-link></li>
              <li><router-link to="/unihospitalarsite/TermosLegais" exact-active-class="active">Termos Legais de Uso do site</router-link></li>
            </ul>
          </li>
          <li><router-link to="/unihospitalarsite/Contato" exact-active-class="active">Contato</router-link></li>
        </ul>
      </nav>
    </header>

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
        <div class="compliance-section-left slide-in-right">
          <h3><i class="fas fa-book"></i> Código de Conduta</h3>
          <p>Nosso Código de Conduta é um guia para todos os colaboradores, parceiros e fornecedores, assegurando um comportamento ético em todas as nossas atividades.</p>
          <ul>
            <li><router-link to="/unihospitalarsite/CondutaEtica" exact-active-class="active"><i class="fas fa-check"></i> Conduta Ética e Integridade</router-link></li>
            <li><router-link to="/unihospitalarsite/ResponsabilidadeSocial" exact-active-class="active"><i class="fas fa-globe"></i> Responsabilidade Social e Sustentabilidade</router-link></li>
            <li><router-link to="/unihospitalarsite/DireitosHumanos" exact-active-class="active"><i class="fas fa-hands-helping"></i> Respeito aos Direitos Humanos</router-link></li>
          </ul>
        </div>

        <div class="compliance-section-right slide-in-left">
          <h3><i class="fas fa-file-alt"></i> Políticas e Regulamentos</h3>
          <p>Acesse nossas políticas que reforçam o compromisso com a conformidade e a ética.</p>
          <ul>
            <li><router-link to="/unihospitalarsite/SegurancaDados" exact-active-class="active"><i class="fas fa-lock"></i> Política de Segurança de Dados</router-link></li>
            <li><router-link to="/unihospitalarsite/PraticasAntissuborno" exact-active-class="active"><i class="fas fa-ban"></i> Práticas Antissuborno</router-link></li>
            <li><router-link to="/unihospitalarsite/NormasSetoriais" exact-active-class="active"><i class="fas fa-gavel"></i> Conformidade com Normas Setoriais</router-link></li>
          </ul>
        </div>

        <div class="compliance-section-left slide-in-right">
          <h3><i class="fas fa-exclamation-triangle"></i> Instruções para Ações Corretivas</h3>
          <p>Identificou alguma irregularidade? Veja como proceder e entre em contato com nosso departamento de compliance para orientação.</p>
          <router-link to="/unihospitalarsite/Contato"><button class="cta-button"><i class="fas fa-phone"></i> Entre em Contato</button></router-link>
        </div>

        <div class="compliance-section-right slide-in-left">
          <h3><i class="fas fa-link"></i> Links para Documentos Legais</h3>
          <p>Acesse documentos completos como políticas de privacidade, termos de uso, entre outros.</p>
          <ul>
            <li><router-link to="/unihospitalarsite/PoliticaPrivacidade" exact-active-class="active"><i class="fas fa-user-shield"></i> Política de Privacidade</router-link></li>
            <li><router-link to="/unihospitalarsite/TermosLegais" exact-active-class="active"><i class="fas fa-file-contract"></i> Termos Legais de Uso</router-link></li>
          </ul>
        </div>
      </section>
    </main>

    <footer>
  <div class="footer-logo">
    <img src="@/assets/footerSelo.png" alt="Imagem Selo do footer">
  </div>
  <div class="footer-mensagem">
    <p class="address">
      Rua Alagoas, 253<br>
      Ipsep, Recife - PE<br>
      CNPJ: 07.484.373/0001-24
    </p>
    <p class="message">© 2024 | Uni Hospitalar Ltda. – Todos os direitos reservados</p>
  </div>
  <div class="footer-info">
    <article class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.962986239422!2d-34.92510330000001!3d-8.105251299999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ef44fcc1ed1%3A0xfd7040da8c464f4a!2sR.+Alagoas%2C+253+-+Ipsep%2C+Recife+-+PE%2C+51350-560!5e0!3m2!1spt-BR!2sbr!4v1432556341952" width="100%" height="120" frameborder="0" style="border:0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </article>
  </div>
</footer>
  </div>
</template>

<script>
export default {
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

@media (max-width: 576px) {
    header {
      width: 100%;
      height: 1px;
    }

    .logo-container {
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo {
    width: 90%;
    height: auto;
    max-height: 80px;
}

.language-selector {
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translate(-50%, -20%);
        width: 33.33%;
        max-width: 100px;
        height: auto;
        max-height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .icon-selector {
        width: 100%;
        height: auto;
    }

    .item {
        width: 60%;
    }

    .menu-toggle {
        font-size: 1.3em;
    }

    .banner-container {
      top: -27px;
    }
    
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
  padding: 20px;
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

.menu-toggle {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #AE2C2A;
    color: #ffffff;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.menu-sidebar {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #AE2C2A;
    color: #ffffff;
    overflow: auto;
    z-index: 1000;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
}

.menu-sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-sidebar ul li {
    margin: 20px 0;
}

.menu-sidebar ul li a {
    text-decoration: none;
    color: #ffffff;
    font-style: italic;
    font-weight: bold;
    font-size: 1em;
    display: block;
    padding: 10px;
    transition: color 0.3s ease-in-out;
}

.menu-sidebar ul li a:hover {
    color: #848484;
}

.menu-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: #FFFFFF;
    font-size: 2em;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
}

.menu-close:hover {
    color: #848484;
}

@media (max-width: 576px) {
    nav ul {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .menu-sidebar.active {
        display: block;
    }
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
    transform: translateX(100%);
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

@media (max-width: 768px) {
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
}

@media (max-width: 576px) {
  main {
    padding: 100px 10px;
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

footer {
  background-color: #EBEBEB;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px; 
}

.footer-logo {
  flex: 1;
}

.footer-mensagem {
  flex: 2;
  text-align: center;
  color: rgb(97, 97, 97);
  font-weight: 700;
}

.footer-info {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.endereco {
  color: rgb(97, 97, 97);
  line-height: 1.4;
  font-weight: 600;
  margin-bottom: 10px;
}

.address {
  color: rgb(97, 97, 97);
  font-weight: 700;
}

.message {
  color: #AE2C2A;
  font-weight: 700;
}

.map {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

@media (max-width: 768px) {
  header {
    height: 1px;
  }

  .logo-container {
    width: 33.33%;
  }

  .logo {
    width: 70%;
    max-height: 80px;
  }

  .language-selector {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-80%, -50%);
    width: 33.33%;
    max-width: 100px;
    height: auto;
    max-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon-selector {
    width: 100%;
    height: auto;
  }

  .menu-toggle {
    font-size: 1.3em;
    display: block;
  }

  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .banner-overlay h1 {
    font-size: 1.2em;
    padding: 5px;
  }

  nav ul {
    display: none;
  }

  .menu-sidebar.active {
    display: block;
  }

  .compliance-overview {
    margin-top: 100px;
  }

  footer {
    flex-direction: column;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 10px;
  }
}

@media (max-width: 992px) {
  .logo-container {
    width: 20%;
  }

  .logo {
    width: 80%;
  }

  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

@media (max-width: 1200px) {
  .banner-overlay h1 {
    font-size: 1.8em;
  }
}

@media (min-width: 769px) {
  nav ul li {
    margin: 0 8px;
  }

  nav ul li a {
    font-size: 0.6em;
  }

  .language-selector {
    right: 40px;
    top: 20px;
  }

  .language-selector select {
    padding: 3px;
  }

  .icon-selector span {
    font-size: 1em;
  }
}

@media (min-width: 993px) {
  .logo-container {
    width: 20%;
  }

  .logo {
    max-height: 60px;
  }

  nav ul li {
    margin: 0 10px;
  }

  nav ul li a {
    font-size: 0.8em;
  }

  .language-selector {
    right: 60px;
  }

  .icon-selector span {
    font-size: 1.1em;
  }
}

@media (min-width: 1390px) {
  .logo-container {
    width: 20%;
  }

  .logo {
    max-height: 80px;
  }

  .language-selector {
    right: 120px;
  }

  .icon-selector span {
    font-size: 1.5em;
  }

  nav ul li {
    margin: 0 16px;
  }

  nav ul li a {
    font-size: 1em;
  }
}
</style>
