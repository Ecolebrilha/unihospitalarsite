<!-- Deixar a tela de Contato e Parceiros responsivas (conteúdo principal) -->
<!-- Ajustar o banner da tela principal -->
<!-- Deixar funcional a tradução dos idiomas em todas as telas -->
<template>
    <div class="home">
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

        <main>
            <div class="header-background">
          <img src="@/assets/header.jpg" alt="Imagem do Header" class="header-image">
          <div class="header-content">
          <h2 class="banner-h2">Respeito às relações humanas</h2>
          <p class="banner-p">O nosso foco está na distribuição <br> de medicamentos hospitalares, <br> oncológicos e excepcionais.</p>
          <a href="Diferenciais"><button class="banner-btn">CONHEÇA NOSSOS DIFERENCIAIS</button></a>
          </div>
        </div>

        <section class="main-content">
    <div class="blocks">
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/estoque.jpg" alt="Bloco 1">
                <h3>ESTOQUE</h3>
            </div>
            <p>Nossa área de armazenamento segue rigorosamente as normas exigidas pela Anvisa. <a href="Diferenciais">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/diferenciais.jpg" alt="Bloco 2">
                <h3>DIFERENCIAIS</h3>
            </div>
            <p>Profissionais preparados e alinhados com a cultura da empresa, somado à linha de produtos e logística. <a href="Diferenciais">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/logistica.jpg" alt="Bloco 3">
                <h3>LOGÍSTICA</h3>
            </div>
            <p>Entregas para o Norte e Nordeste em até 48 horas com toda segurança e garantia. <a href="Diferenciais">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/principais-clientes.jpg" alt="Bloco 4">
                <h3>UNIDADE DE NEGÓCIOS</h3>
            </div>
            <p>Estamos abrindo uma nova unidade em Fortaleza, na busca pelo melhor atendimento e prestação de serviço. <a href="Diferenciais">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/principais-produtos.jpg" alt="Bloco 5">
                <h3>PRINCIPAIS CLIENTES</h3>
            </div>
            <p>Buscando melhor atender as demandas do mercado farmacêutico, atendemos a indústrias e hospitais, públicos e privados e clínicas particulares. <a href="Compliance">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/unidade-de-negocios.jpg" alt="Bloco 6">
                <h3>PRINCIPAIS PRODUTOS</h3>
            </div>
            <p>Foco na distribuição e padronização de medicamentos hospitalares, oncológicos e excepcionais, trabalhando em nichos específicos. <a href="Produtos">Saiba mais.</a></p>       
        </div>                 
    </div>
</section>

            <section class="parceiros">
        <h2>Nossos Parceiros</h2>
        <div class="parceiros-carousel">
            <div class="parceiros-track">
                <div class="parceiros-slide">
                        <img src="@/assets/parceiro1.jpg" alt="Parceiro 1">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro2.jpg" alt="Parceiro 2">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro3.jpg" alt="Parceiro 3">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro4.jpg" alt="Parceiro 4">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro5.jpg" alt="Parceiro 5">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro6.jpg" alt="Parceiro 6">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro7.jpg" alt="Parceiro 7">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro8.jpg" alt="Parceiro 8">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro9.jpg" alt="Parceiro 9">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro10.jpg" alt="Parceiro 10">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro11.jpg" alt="Parceiro 11">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro12.jpg" alt="Parceiro 12">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro13.jpg" alt="Parceiro 13">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro14.jpg" alt="Parceiro 14">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro15.jpg" alt="Parceiro 15">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro16.jpg" alt="Parceiro 16">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro17.jpg" alt="Parceiro 17">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro18.jpg" alt="Parceiro 18">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro19.jpg" alt="Parceiro 19">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro20.jpg" alt="Parceiro 20">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro21.jpg" alt="Parceiro 21">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro22.jpg" alt="Parceiro 22">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro23.jpg" alt="Parceiro 23">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro24.jpg" alt="Parceiro 24">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro25.jpg" alt="Parceiro 25">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro26.jpg" alt="Parceiro 26">
                    </div>
                </div>
            </div>
        </section>
        <a href="Parceiros"><button class="partners-button">ver todos os parceiros</button></a>
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
  name: "HomePrincipal",
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false
    };
  },
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;
      this.$i18n.locale = value;

      console.log(`Idioma selecionado: ${value}`);
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  },
  mounted() {
    const track = document.querySelector(".parceiros-track");
    const slides = Array.from(track.children);
    const totalSlides = slides.length;

    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    track.style.width = `${totalSlides * 6 * 100}%`;
  }
};

</script>

<style scoped>
.home {
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

    .image-wrapper {
        font-size: 0.6em;
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

main {
    padding-top: 151px;
    background-color: #FEFEFE;
}

.header-background {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: auto;
    overflow: hidden;
    margin-top: -115px;
}

.header-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
}

.header-content {
    position: absolute;
    right: 10%;
    text-align: right;
    color: #fff;
    z-index: 1;
    animation: fadeIn 2s ease-in-out;
}

.header-content h2 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
    animation: slideInRight 1.5s ease-out;
}

.header-content p {
    font-size: 1.2em;
    margin-bottom: 1em;
    line-height: 1.5;
    animation: slideInRight 1.8s ease-out;
}

.header-content button {
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

.header-content button:hover {
    background-color: #d04343;
    transform: scale(1.05);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
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

.main-content {
    display: flex;
    justify-content: center;
    padding: 50px 20px;
}

.blocks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
}

.blocks .block .image-wrapper img {
    width: 100%;
    height: auto;
}

.block {
    background-color: rgba(128, 128, 128, 0.007);
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
}

.block:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
    position: relative;
    text-align: center;
    opacity: 1.0
}

.image-wrapper img {
    border-radius: 5px;
    margin-bottom: 15px;
    width: 100%;
    height: auto;
}

.image-wrapper h3 {
    position: absolute;
    font-family: 'Droid Sans', sans-serif;
    font-weight: 800;
    bottom: 10px;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
    color: #AE2C2A;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.5em;
    white-space: nowrap;
}

.block p {
    font-size: 16px;
    color: #555;
    margin-top: 15px;
}

.block a {
    color: #f05454;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.block a:hover {
    color: #AE2C2A;
    text-decoration: underline;
}

@media (max-width: 768px) {
    .header-image {
    margin-top: 20px;
  }
  
    h2.banner-h2 {
    font-size: 0.3em;
  }

  p.banner-p {
    font-size: 0.3em;
  }

  button.banner-btn {
    font-size: 0.3em;
  }

    .blocks {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
    
    .block {
        max-width: 100%;
    }
    
    .image-wrapper {
        font-size: 1.5em;
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

    .header-image {
    margin-top: 20px;
  }

    .image-wrapper {
        font-size: 1em;
    }
}

@media (max-width: 400px) {
    .image-wrapper h3 {
        font-size: 1em;
    }
}

@media (max-width: 292px) {
    .image-wrapper h3 {
        font-size: 0.6em;
    }

}

.partners-button {
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin: 40px 0;
    padding: 12px 24px; 
    font-size: 16px; 
    border: none; 
    border-radius: 50px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase; 
    font-weight: bold; 
    letter-spacing: 1px;
    margin-bottom: 120px;
}

.partners-button:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); 
    transform: translateY(-3px); 
}

.partners:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); 
}

.parceiros {
    padding: 20px 0;
    margin-top: 80px;
    background-color: #FEFEFE;
}

.parceiros h2 {
    margin-bottom: 50px;
    color: #AE2C2A;
    text-align: center;
    text-transform: uppercase;
    font-size: 2.0em;
    position: relative;
    display: inline-block;
}

.parceiros h2::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #FF8888; 
    margin: 4px auto 0;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

.parceiros-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    animation-iteration-count: infinite;
}

.parceiros-track {
    display: flex;
    width: calc(26 * 100%);
    animation: moveSlideshow 8000s linear infinite;
}

@keyframes moveSlideshow {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}

.parceiros-slide {
    min-width: calc(-1% / 26);
    box-sizing: border-box;
    padding: 0 15px;
}

.parceiros-slide img {
    width: 60%;
    height: auto;
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

  nav ul {
    display: none;
  }

  .menu-sidebar.active {
    display: block;
  }

  .header-background {
    margin-top: -150px;
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
