<template>
        <div class="parceiros">
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
        <h1>Parceiros</h1>
      </div>
      <img src="@/assets/header-parceiros.jpg" alt="Imagem do Banner">
    </div>

        
            <main>
                <section class="about-content">
                    <div class="about-center">
                        <h2>PARCEIROS</h2>
                        <div class="partner-logos">
                            <img src="@/assets/parceiro1.jpg" alt="Logo Parceiro1">
                            <img src="@/assets/parceiro2.jpg" alt="Logo Parceiro2">
                            <img src="@/assets/parceiro3.jpg" alt="Logo Parceiro3">
                            <img src="@/assets/parceiro4.jpg" alt="Logo Parceiro4">
                            <img src="@/assets/parceiro5.jpg" alt="Logo Parceiro5">
                            <img src="@/assets/parceiro6.jpg" alt="Logo Parceiro6">
                            <img src="@/assets/parceiro7.jpg" alt="Logo Parceiro7">
                            <img src="@/assets/parceiro8.jpg" alt="Logo Parceiro8">
                            <img src="@/assets/parceiro9.jpg" alt="Logo Parceiro9">
                            <img src="@/assets/parceiro10.jpg" alt="Logo Parceiro10">
                            <img src="@/assets/parceiro11.jpg" alt="Logo Parceiro11">
                            <img src="@/assets/parceiro12.jpg" alt="Logo Parceiro12">
                            <img src="@/assets/parceiro13.jpg" alt="Logo Parceiro13">
                            <img src="@/assets/parceiro14.jpg" alt="Logo Parceiro14">
                            <img src="@/assets/parceiro15.jpg" alt="Logo Parceiro15">
                            <img src="@/assets/parceiro16.jpg" alt="Logo Parceiro16">
                            <img src="@/assets/parceiro17.jpg" alt="Logo Parceiro17">
                            <img src="@/assets/parceiro18.jpg" alt="Logo Parceiro18">
                            <img src="@/assets/parceiro19.jpg" alt="Logo Parceiro19">
                            <img src="@/assets/parceiro20.jpg" alt="Logo Parceiro20">
                            <img src="@/assets/parceiro21.jpg" alt="Logo Parceiro21">
                            <img src="@/assets/parceiro22.jpg" alt="Logo Parceiro22">
                            <img src="@/assets/parceiro23.jpg" alt="Logo Parceiro23">
                            <img src="@/assets/parceiro24.jpg" alt="Logo Parceiro24">
                            <img src="@/assets/parceiro25.jpg" alt="Logo Parceiro25">
                            <img src="@/assets/parceiro26.jpg" alt="Logo Parceiro26">
                        </div>
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
        .parceiros {
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
          padding: 200px 0 150px 0;
      }
      .about-content {
        margin-top: -80px;
        width: 60%;
        height: 95%;
        text-align: left;
        background-color: #ffffff;
        padding: 20px;
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      .about-center {
          margin-bottom: 80px;
          text-align: center;
      }
      .about-center h2 {
        font-size: 1.5em;
        font-weight: 800;
        color: #AE2C2A;
        margin-bottom: 40px;
        border-bottom: 2px solid #FF8888;
        padding-bottom: 5px;
      }
      .partner-logos {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 80px;
          justify-items: center;
          align-items: center;
      }
      .partner-logos img {
          width: 150px;
          height: auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
      }
      .partner-logos img:hover {
          transform: scale(1.1);
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
