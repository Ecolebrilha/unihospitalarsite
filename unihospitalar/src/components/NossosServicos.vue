<template>
  <div class="services">
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
          <a href="mailto:contato@unihospitalar.com.br"><i class="fas fa-envelope"></i>contato@unihospitalar.com.br</a>
        </span>
      </div>
      <div class="language-selector">
        <select @change="changeLanguage($event)">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <hr class="linha">
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active"></router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active">SOBRE</router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active">DIFERENCIAIS</router-link></li>
          <li><router-link to="/Serviços" exact-active-class="active">SERVIÇOS</router-link></li>
          <li><router-link to="/Produtos" exact-active-class="active">PRODUTOS</router-link></li>
          <li><router-link to="/Compliance" exact-active-class="active">COMPLIANCE</router-link></li>
          <li class="dropdown">
            <router-link to="/LGPD" exact-active-class="active">
              LGPD <i class="fas fa-chevron-down"></i>
            </router-link>
            <ul class="dropdown-content">
              <li><router-link to="/PoliticaPrivacidade" exact-active-class="active">Política de Privacidade</router-link></li>
              <li><router-link to="/TermosLegais" exact-active-class="active">Termos Legais de Uso do site</router-link></li>
            </ul>
          </li>
          <li><router-link to="/Contato" exact-active-class="active">CONTATO</router-link></li>
        </ul>
      </nav>
    </header>

    <div class="banner-container">
      <img src="@/assets/header-servicos.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="servicos-content">
        <div class="servico-item">
          <h2><i class="fas fa-briefcase-medical"></i> Nossos serviços</h2>
          <p>A Uni Hospitalar busca atender de forma eficiente os segmentos públicos e privados, através de profissionais capacitados para interpretar o mercado e assim dar respostas compatíveis e definitivas para o bom atendimento da cadeia de distribuição.</p>
        </div>

        <div class="servico-item">
          <h3><i class="fas fa-user-tie"></i> Segmento Privado</h3>
          <p>Formado internamente por um telemarketing que funciona alinhado com uma equipe de consultores externos, visando sempre dar respostas rápidas e eficazes, a fim de atender o nosso cliente da melhor forma possível.</p>
        </div>

        <div class="servico-item">
          <h3><i class="fas fa-gavel"></i> Segmento Público</h3>
          <p>Formado internamente por um Setor de Licitações, composto por profissionais capacitados e orientados para o mercado, buscando informações através da captação de editais e outras formas a fim de gerar novos negócios. Este setor se completa através da presença de consultores externos que visitam sistematicamente todos os órgãos públicos que trabalhamos.</p>
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
  name: 'HomeSobre',
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
}
</script>

<style scoped>
.services {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  background-color: rgba(249, 249, 249, 0.9);
  padding: 0;
  margin: 0;
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
  transition: background-color 0.3s ease-in-out;
}

header:hover {
  background-color: #921E1C;
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
  transition: transform 0.3s ease-in-out;
}

.logo:hover {
  transform: scale(1.1);
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
  transition: color 0.3s ease-in-out;
}

.contact-info span:hover,
.contact-info a:hover {
  color: #921E1C;
}

.language-selector {
  position: absolute;
  right: 20px;
  top: 20px;
}

.language-selector select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
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
  margin: 0 14px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-style: italic;
  font-weight: bold;
  font-size: 0.9em;
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
  transition: opacity 0.3s ease-in-out;
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
  opacity: 1;
}

.banner-container {
  margin-top: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
}

.banner-container img {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  opacity: 0.85;
  transition: opacity 0.3s ease-in-out;
}

.banner-container img:hover {
  opacity: 1;
}

.servicos-content {
  padding: 50px 10px;
  margin-top: -80px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.servico-item {
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 10px;
  max-width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.servico-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.servico-item h2, .servico-item h3 {
  font-weight: bold;
  color: #AE2C2A;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.servico-item p {
  color: #646464;
  line-height: 1.6;
}

footer {
  background-color: #333;
  padding: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.footer-logo img {
  width: 200px;
  margin-right: 20px;
}

.footer-mensagem {
  flex-grow: 1;
  text-align: center;
}

.footer-desenvolvedor a {
  color: #fff;
  font-weight: bold;
}

.footer-desenvolvedor a:hover {
  color: #FF8888;
}
</style>
