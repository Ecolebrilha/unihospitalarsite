<template>
  <div class="about">
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
        <h1>Sobre nós</h1>
      </div>
      <img src="@/assets/header-sobre.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <div class="content">
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-users"></i>
          </div>
          <div class="text-content">
            <h2>QUEM SOMOS</h2>
            <p class="p-geral">Há 19 anos no mercado, a Uni Hospitalar vem conquistando espaço na distribuição de medicamentos de forma sólida e consolidada, comprometida com a saúde e bem-estar da sociedade. Fornecemos produtos de alta qualidade e serviços excepcionais, sempre com uma visão aprofundada do mercado farmacêutico.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-bullseye"></i>
          </div>
          <div class="text-content">
            <h2>MISSÃO</h2>
            <p class="p-geral">Ser uma empresa sólida e confiável na distribuição de medicamentos, surpreendendo os clientes com a melhor prestação de serviços, e fornecer soluções de saúde acessíveis, inovadoras e de alta qualidade. Contribuímos para o bem-estar e qualidade de vida das pessoas, sempre com ética, responsabilidade e compromisso com nossos valores.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-eye"></i>
          </div>
          <div class="text-content">
            <h2>VISÃO</h2>
            <p class="p-geral">Ser reconhecida como a principal distribuidora de medicamentos do Brasil, expandindo nossas operações para novas regiões e setores, sempre buscando excelência em tudo o que fazemos, mantendo a transparência e respeito com as relações humanas.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-heart"></i>
          </div>
          <div class="text-content">
            <h2>VALORES</h2>
            <p class="p-valores">Nosso trabalho é guiado pelos seguintes valores fundamentais:</p>
            <div class="valores-grid">
              <span>Ética</span>
              <span>Qualidade</span>
              <span>Inovação</span>
              <span>Responsabilidade</span>
              <span>Compromisso</span>
              <span>Transparência</span>
              <span>Agilidade</span>
              <span>Objetividade</span>
              <span>Integridade</span>
            </div>
          </div>
        </div>
      </div>
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
          <p>Desenvolvido por <a href="https://github.com/Ecolebrilha" target="_blank" rel="noopener noreferrer">Fernando Leite</a> ツ</p>
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
.about {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to bottom, #f4f4f4, #ffffff);
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
  display: flex;
  justify-content: center;
  padding-top: 145px;
  padding-bottom: 150px;
  background-color: #f4f4f4;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  width: 65%;
}

.item {
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.icon-container {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  font-size: 2.5em;
  transition: background-color 0.3s ease;
}

.item:hover .icon-container {
  background-color: #FF5555;
}

.text-content {
  flex: 1;
  padding-top: 40px;
  margin-top: -70px;
  padding-left: 20px;
}

.text-content h2 {
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  border-bottom: 3px solid #FF8888;
  margin-bottom: 10px;
}

.text-content h3 {
  color: #f05454;
  margin-bottom: 20px;
  border-bottom: 2px solid #FF8888;
  font-weight: 800
}

.p-geral {
  font-size: 1.2em;
  color: #707070;
  text-align: justify;
}

.p-valores {
  font-size: 1.2em;
  color: #707070;
  text-align: center;
  margin-bottom: 40px;
}

.p-services {
  font-size: 1.2em;
  color: #707070;
  margin-bottom: 50px;
  text-align: justify;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.valores-grid span {
  background-color: #AE2C2A;
  color: #ffffff;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.valores-grid span:hover {
  background-color: #FF5555;
  color: #ffffff;
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
