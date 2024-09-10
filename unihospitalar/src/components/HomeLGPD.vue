<template>
    <div class="lgpd">
      <header>
      <button @click="toggleSidebar" class="menu-toggle">☰</button>

      <div :class="['menu-sidebar', { 'active': sidebarOpen }]">
        <button class="menu-close" @click="toggleSidebar">
          ×
        </button>
        <ul>
          <li><router-link to="/" exact-active-class="active"></router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active">Sobre</router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
          <li><router-link to="/Servicos" exact-active-class="active">Serviços</router-link></li>
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
      </div>

      <a href="/">
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
          <li><router-link to="/Sobre" exact-active-class="active">Sobre</router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
          <li><router-link to="/Servicos" exact-active-class="active">Serviços</router-link></li>
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
                <a href="PoliticaPrivacidade"><button>Política de Privacidade</button></a>
                <a href="TermosLegais"><button>Termos Legais de Uso</button></a>
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
              <a href="Contato"><button class="contact-btn">FALE CONOSCO</button></a>
            </div>
          </section>
        </div>
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
  .lgpd {
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
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

@media (max-width: 768px) {
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
    background-color: #F4F4F4;
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
    footer {
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
  
