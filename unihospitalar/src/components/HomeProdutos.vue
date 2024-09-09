<template>
  <div class="products">
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
        <h1>Nossos Produtos</h1>
      </div>
      <img src="@/assets/header-produtos.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="produtos-content">
        <div class="card">
          <i class="fas fa-box-open card-icon"></i>
          <h2>LINHA DE PRODUTOS</h2>
          <p>A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo desta forma soluções no tratamento das mais diversas patologias.</p>
        </div>
        <div class="card">
          <i class="fas fa-pills card-icon"></i>
          <h2>MEDICAMENTOS DIVERSOS</h2>
          <p>São medicamentos utilizados para doenças crônico degenerativas que requerem especialidade para seu correto armazenamento.</p>
        </div>
        <div class="card">
          <i class="fas fa-capsules card-icon"></i>
          <h2>MEDICAMENTOS PARA ONCOLOGIA</h2>
          <p>São medicamentos quimioterápicos utilizados para o tratamento do câncer.</p>
        </div>
        <div class="card">
          <i class="fas fa-hospital-alt card-icon"></i>
          <h2>MEDICAMENTOS HOSPITALARES</h2>
          <p>São medicamentos utilizados em ambiente hospitalar necessários aos procedimentos médico-cirúrgicos.</p>
        </div>
      </section>
    </main>

    <a href="https://www.unihospitalar.com.br/site/uni-hospitalar-produtos.pdf">
      <button class="btn-produtos">
        <i class="fas fa-download"></i> CLIQUE AQUI PARA BAIXAR NOSSA LINHA DE PRODUTOS
      </button>
    </a>

    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/footerSelo.png" alt="Imagem Selo do footer">
        </div>
        <div class="footer-mensagem">
          <p>© 2024 | Uni Hospitalar Ltda. – Todos os direitos reservados</p>
        </div>
        <div class="footer-desenvolvedor">
          <p>Desenvolvido por <a href="https://github.com/Ecolebrilha">Fernando Leite</a> ツ</p>
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
.products {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  text-align: center;
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
  display: flex;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 20px;
  background-color: #f4f4f4;
}

.produtos-content {
  display: flex;
  flex-wrap: wrap;
  padding: 100px 0;
  justify-content: center;
  gap: 50px;
}

.card {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 2.5em;
  color: #AE2C2A;
  margin-bottom: 10px;
}

.card h2 {
  color: #AE2C2A;
  margin: 10px 0 40px 0;
}

.card p {
  color: #707070;
  text-align: center;
}

.btn-produtos {
  background-color: #AE2C2A;
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 50px;
  margin-bottom: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.btn-produtos:hover {
  background-color: #C53030;
  transform: translateY(-5px);
}

.btn-produtos i {
    margin-right: 8px;
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
