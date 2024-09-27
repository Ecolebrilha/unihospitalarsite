<template>
    <header :class="{'scrolled': isScrolled}">
      <button @click="toggleSidebar" :class="['menu-toggle', { 'scrolled': isScrolled }]">☰</button>
  
      <div :class="['menu-sidebar', { 'active': sidebarOpen }]">
        <button class="menu-close" @click="toggleSidebar">
          ×
        </button>
        <ul>
          <li><router-link to="/" exact-active-class="active">Início</router-link></li>
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
          <img src="@/assets/logo-uni.png" alt="Logo da Uni Hospitalar" class="logo">
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
          <li><router-link to="/" exact-active-class="active">Início</router-link></li>
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
  </template>
  
  <script>
  export default {
  name: 'HomeHeader',
  data() {
    return {
      sidebarOpen: false,
      selectedLanguage: 'pt',
      isScrolled: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    changeLanguage(lang) {
      this.selectedLanguage = lang;
      this.$i18n.locale = lang;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.scrollToTop();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
  </script>

  <style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgb(173, 64, 62);
  padding: 20px 0;
  box-sizing: border-box;
  font-size: 1.2em;
  font-weight: bold;
  font-family: 'Arial Rounded MT Bold,', sans-serif;
  font-smooth: always;
  text-rendering: optimizeLegibility;
  transition: background-color 0.3s ease-in-out;
}

header.scrolled {
  background-color: rgba(161, 52, 51, 0.7);
}

header * {
  background-color: transparent;
}

.menu-toggle.scrolled {
  background-color: rgb(161, 52, 51);
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
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}

.logo {
    max-height: 100%;
    width: auto;
    display: block;
}

.language-selector {
  position: absolute;
  right: 130px;
  top: 5px;
}

.language-selector select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
}

.custom-select {
  margin-bottom: 8px;
}

.icon-selector {
  display: flex;
  gap: 10px;
}

.icon-selector span {
  font-size: 0.9em;
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
    font-size: 1em;
    white-space: nowrap;
    letter-spacing: 0.5px;
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
    color: #999999;
}

nav ul li.dropdown {
  position: relative;
}

nav ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(161, 52, 51);
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
    background-color: rgb(173, 64, 62);
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
    background-color: rgb(173, 64, 62);
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
    letter-spacing: 0.5px;
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

@media (max-width: 1600px) {
  nav ul li a {
    font-size: 0.8em;
  }
}

@media (max-width: 1390px) {
  .logo-container {
    width: 15%;
  }

  .logo {
    max-height: 50px;
  }

  .language-selector {
    right: 30px;
    top: 5px;
  }

  .icon-selector span {
    font-size: 0.9em;
  }

  nav ul li {
    margin: 0 12px;
  }

  nav ul li a {
    font-size: 0.7em;
  }
}


@media (max-width: 993px) {
  .logo-container {
    width: 15%;
  }

  .logo {
    max-height: 35px;
  }

  nav ul li {
    margin: 0 8px;
  }

  nav ul li a {
    font-size: 0.6em;
  }

  .language-selector {
    right: 20px;
    top: 5px;
  }

  .custom-select {
    font-size: 10px;
  }

  .icon-selector {
    gap: 8px;
  }

  .icon-selector span {
    font-size: 0.7em;
  }
}

@media (max-width: 768px) {
  header {
    padding: 25px 0;
  }
  
  .logo-container {
    width: 20%;
  }

  .logo {
    max-height: 30px;
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

  .language-selector select {
  padding: 3px;
}

  .custom-select {
    font-size: 8px;
    margin-bottom: 5px;
  }

  .icon-selector {
    gap: 6px;
  }

  .icon-selector span {
    font-size: 0.6em;
  }

  .menu-toggle {
    font-size: 0.9em;
    top: 0px;
    display: block;
  }

  nav ul {
    display: none;
  }

  .menu-sidebar.active {
    display: block;
  }
}

@media (max-width: 576px) {
  .logo-container {
    width: 20%;
  }

  .logo {
    max-height: 20px;
  }

  .language-selector select {
  padding: 3px;
}

  .custom-select {
    font-size: 8px;
    margin-bottom: 5px;
  }

  .icon-selector {
    gap: 6px;
  }

  .icon-selector span {
    font-size: 0.6em;
  }

  .menu-toggle {
    font-size: 0.9em;
    top: 0px;
    display: block;
  }

}
</style>