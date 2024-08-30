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
        <select @change="changeLanguage($event)">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <hr class="linha">
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active">INÍCIO</router-link></li>
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
      <img src="@/assets/header-parceiros.jpg" alt="Imagem do Banner de Compliance">
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
  name: 'HomeCompliance',
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
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
  padding: 20px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  background-color: #E5E5E5;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-right: auto;
}

.logo {
  height: 80px;
  margin-right: 10px;
}

.trademark-symbol {
  font-size: 1.2em;
  font-weight: 700;
  color: #000;
}

.contact-info {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
}

.contact-info span,
.contact-info a {
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 0.9em;
}

.contact-info i {
  margin-right: 8px;
}

.language-selector {
  margin-left: auto;
}

.language-selector select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
}

.linha {
  width: 50%;
  border-top: 2px solid #FF8888;
  margin: 10px auto;
}

nav {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
}

nav ul li {
  margin: 0 10px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
  font-size: 1em;
}

nav ul li a:hover,
nav ul li a.active {
  color: #FF8888;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #FFF;
  color: #000;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1000;
}

.dropdown-content li {
  margin: 5px 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content li a {
  color: #AE2C2A;
  text-decoration: none;
}

.dropdown-content li a:hover {
  color: #FF8888;
}

.banner-container {
  margin-top: 140px;
}

.banner-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

main {
  padding: 50px 20px;
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
  gap: 20px;
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
  background-color: #E5E5E5;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.footer-logo img {
  width: 80px;
  height: auto;
  object-fit: cover;
}

.footer-mensagem p {
  margin: 10px 0;
  font-size: 0.9em;
}

.footer-desenvolvedor p {
  font-size: 0.8em;
}

.footer-desenvolvedor p a {
  text-decoration: none;
  color: #000;
}

.footer-desenvolvedor p a:hover {
  color: #FF8888;
}
</style>
