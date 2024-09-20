<template>
  <div class="diferenciais">
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
        <h1>Nosso Diferencial</h1>
      </div>
      <img src="@/assets/header-diferenciais.jpg" alt="Imagem do Banner">
    </div>

<main>
    <section class="features">
      <div class="container">
        <div class="feature">
          <i class="fas fa-warehouse feature-icon"></i>
          <div class="feature-info">
            <h2>Gestão de Estoque Inovadora</h2>
            <p>Nossa gestão de estoque é projetada para garantir a máxima eficiência e controle rigoroso das condições de armazenamento. Com tecnologia de ponta, oferecemos rastreamento em tempo real e automação para evitar desperdícios e melhorar a eficiência operacional.</p>
            <ul>
              <li><strong>Tecnologia Avançada:</strong> Soluções de rastreamento e monitoramento em tempo real.</li>
              <li><strong>Automação:</strong> Redução de erros humanos e aumento da eficiência.</li>
            </ul>
          </div>
        </div>

        <div class="feature">
          <i class="fas fa-truck feature-icon"></i>
          <div class="feature-info">
            <h2>Logística Ágil e Eficiente</h2>
            <p>A logística é um dos nossos pilares. Nossa estratégia é baseada em soluções que garantem entregas rápidas e precisas, com uma rede bem estruturada que atende às suas necessidades com agilidade.</p>
            <ul>
              <li><strong>Rede Ampliada:</strong> Cobertura nacional com serviços de entrega rápida.</li>
              <li><strong>Otimização de Rota:</strong> Redução de tempo de entrega e custos operacionais.</li>
            </ul>
          </div>
        </div>

        <div class="feature">
          <i class="fas fa-building feature-icon"></i>
          <div class="feature-info">
            <h2>Expansão Estratégica</h2>
            <p>Estamos em constante expansão para atender melhor às suas necessidades. Nossas unidades de negócios estão localizadas estrategicamente para oferecer um atendimento mais próximo e eficaz.</p>
            <ul>
              <li><strong>Novas Localizações:</strong> Expansão para áreas com alta demanda.</li>
              <li><strong>Equipe Localizada:</strong> Atendimento personalizado e suporte eficiente.</li>
            </ul>
          </div>
        </div>

        <div class="feature">
          <i class="fas fa-star feature-icon"></i>
          <div class="feature-info">
            <h2>Compromisso com a Qualidade</h2>
            <p>Nosso compromisso com a qualidade vai além dos padrões exigidos. Investimos continuamente em nossa equipe e processos para garantir um serviço superior e satisfatório.</p>
            <ul>
              <li><strong>Treinamento Contínuo:</strong> Equipe qualificada e atualizada com as melhores práticas.</li>
              <li><strong>Controle de Qualidade:</strong> Monitoramento rigoroso para garantir a excelência.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="testimonial">
          <p>"A Uni Hospitalar se destacou pela qualidade e eficiência. Seus serviços superaram nossas expectativas em todos os aspectos."</p>
          <span>— Ana Costa, Gerente de Compras</span>
        </div>

        <div class="testimonial">
          <p>"A logística é impecável. Recebemos nossos produtos sempre no prazo e em perfeito estado."</p>
          <span>— Carlos Oliveira, Diretor de Operações</span>
        </div>
      </div>
    </section>

    <section class="contact-cta">
      <div class="container">
        <h2>Pronto para melhorar seus processos com a Uni Hospitalar?</h2>
        <p>Entre em contato conosco e descubra como podemos ajudar a transformar sua operação.</p>
        <router-link to="/unihospitalarsite/Servicos"><button class="cta-button">Saiba Mais Sobre Nossos Serviços</button></router-link>
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
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
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
    .content h1 {
    font-size: 1em;
  }

  .banner-overlay h1 {
    font-size: 1em;
  }
}

.banner-container {
  position: relative;
  padding-top: 107px;
  margin-top: -62px;
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
  text-align: center;
}

.banner-overlay .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner-overlay h1, .banner-overlay p {
  margin: 0;
}

.banner-overlay h1 {
  color: #FFFFFF;
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInRight 1.5s ease-out;
  margin-bottom: 20px;
}

@keyframes slideInRight {
  from {
    transform: translateX(80%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.features {
  background-color: #fff;
  padding: 100px 20px 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.feature {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  flex: 1 1 calc(50% - 20px);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 2.5em;
  color: #AE2C2A;
  margin-bottom: 15px;
}

.feature-info h2 {
  font-size: 1.5em;
  margin: 0 0 30px 0;
  color: #AE2C2A;
  position: relative;
  display: inline-block;
}

.feature-info h2::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #e74c3c; 
    margin: 4px auto 0;
}

.feature-info p {
  font-size: 1em;
  color: #34495e;
  margin: 10px 0;
}

.feature-info ul {
  list-style: none;
  padding: 0;
}

.feature-info ul li {
  margin: 5px 0;
  color: #34495e;
}

.testimonials {
  background-color: #fff;
  padding: 50px 20px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.testimonial {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  border-left: 4px solid #AE2C2A;
  color: #34495e;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  flex: 1 1 calc(33.333% - 40px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-align: left;
}

.testimonial p {
  font-style: italic;
  margin: 0;
}

.testimonial span {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  color: #AE2C2A;
}

@media (max-width: 768px) {
  .testimonial {
    flex: 1 1 calc(50% - 40px);
  }
}

@media (max-width: 480px) {
  .banner-overlay h1 {
    font-size: 1em;
  }

  .testimonial {
    flex: 1 1 100%;
  }

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

.contact-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  margin-bottom: 100px;
  background-color: #FFFFFF;
  text-align: center;
}

.contact-cta h2 {
  font-size: 2.5em;
  margin: 0 0 15px;
  color: #AE2C2A;
  line-height: 1.3;
}

.contact-cta p {
  font-size: 1.2em;
  margin: 0 0 25px;
  color: #666;
  line-height: 1.6;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  background-color: #AE2C2A;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin: 0;
}

.cta-button:hover {
  background-color: #C53030;
  transform: translateY(-5px);
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-cta h2 {
    font-size: 2em;
  }

  .contact-cta p {
    font-size: 1.1em;
  }

  .cta-button {
    padding: 12px 25px;
    font-size: 1.1em;
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .feature {
    flex: 1 1 100%;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }
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
    font-size: 1em;
    padding: 5px;
  }

  nav ul {
    display: none;
  }

  .menu-sidebar.active {
    display: block;
  }

  .features {
    margin-top: 100px;
  }

  footer {
    flex-direction: column;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 10px;
  }

  @keyframes slideInRight {
  from {
    transform: translateX(16%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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
    font-size: 3em;
  }

}

@media (max-width: 768px) {
  .banner-overlay h1 {
    font-size: 2em;
  }
}

@media (max-width: 400px) {
  .banner-overlay h1 {
    font-size: 1.5em;
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

  @keyframes slideInRight {
  from {
    transform: translateX(25%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
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

  @keyframes slideInRight {
  from {
    transform: translateX(23%);
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
    transform: translateX(52%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
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

@media (min-width: 300px) {
  @keyframes slideInRight {
  from {
    transform: translateX(6%);
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
    transform: translateX(25%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
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
    .content h1 {
    font-size: 1em;
  }

  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

</style>
