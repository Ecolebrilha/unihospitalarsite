<template>
  <div class="diferenciais">
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
          <span class="small-numbers">+55 81</span> 3472 7201
        </span>
        <span><a href="mailto:contato@unihospitalar.com.br">
          <i class="fas fa-envelope"></i>contato@unihospitalar.com.br
        </a></span>
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
          <li><router-link to="/" exact-active-class="active">HOME</router-link></li>
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
      <img src="@/assets/header-diferenciais.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="diferenciais-content">
        <div class="diferenciais-item">
          <i class="fas fa-warehouse"></i>
          <h2>ESTOQUE</h2>
          <p>A Uni Hospitalar possui área de armazenamento que segue rigorosamente todas as normas exigidas pela Anvisa. Ambiente totalmente climatizado, câmara fria compatível com o negócio e acima de tudo, a presença do profissional farmacêutico garantindo a guarda e o cumprimento das boas práticas de armazenamento e distribuição conforme rege a RDC 39.</p>
        </div>
        <div class="diferenciais-item">
          <i class="fas fa-truck"></i>
          <h2>LOGÍSTICA</h2>
          <p>Nossa logística funciona com entregas para o Norte e Nordeste em até 48 horas, com toda segurança e garantia. A Uni Hospitalar conta com uma equipe interna composta por profissionais preparados e qualificados para atender de forma inteligente, buscando sempre a eficiência no que diz respeito à agilidade e minimizando o tempo de entrega até o seu destino final.</p>
        </div>
        <div class="diferenciais-item">
          <i class="fas fa-business-time"></i>
          <h2>UNIDADE DE NEGÓCIOS</h2>
          <p>Buscando uma melhor prestação de serviço, sempre atendendo e surpreendendo as expectativas da Indústria Farmacêutica e dos nossos clientes finais, estamos abrindo uma nova empresa em Fortaleza.</p>
        </div>
        <div class="diferenciais-item">
          <i class="fas fa-star"></i>
          <h2>DIFERENCIAIS</h2>
          <p>Estoque – Garantia de fornecimento. Sempre evitar rupturas no fornecimento;<br> Cultura voltada para o negócio;<br> Logística – Garantia de entrega nos locais que trabalhamos;<br> Equipe – Profissionais preparados e alinhados com a cultura da empresa.</p>
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
          <p>Desenvolvido por <a href="https://github.com/Ecolebrilha">Fernando Leite</a> ツ</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeDiferenciais',
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
}
</script>

<style scoped>
.diferenciais {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #2a2a2a;
  padding: 20px 0;
  box-sizing: border-box;
  color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.logo-container {
  position: absolute;
  top: 10px;
  left: 20px;
  display: flex;
  align-items: center;
}

.logo {
  height: 80px;
}

.trademark-symbol {
  font-size: 1.2em;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
}

.contact-info {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
}

.contact-info span, .contact-info a {
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-right: 30px;
  font-size: 0.9em;
}

.contact-info i {
  margin-right: 8px;
}

.language-selector {
  position: absolute;
  right: 20px;
  top: 20px;
}

.language-selector select {
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #333;
  cursor: pointer;
}

.linha {
  width: 50%;
  border: 0;
  border-top: 2px solid #ffffff;
  margin: 10px auto;
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
  margin: 0;
}

nav ul li {
  margin: 0 15px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 1em;
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
  background-color: #ff8888;
  transition: width 0.3s ease-in-out;
}

nav ul li a:hover::after {
  width: 100%;
}

nav ul li.active a::after {
  width: 100%;
}

nav ul li a:hover {
  color: #ff8888;
}

nav ul li.dropdown {
  position: relative;
}

nav ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: #2a2a2a;
  top: 100%;
  right: 0;
  min-width: 200px;
  z-index: 1;
  border-radius: 5px;
}

nav ul li .dropdown-content li {
  padding: 10px;
}

nav ul li .dropdown-content li a {
  color: #ffffff;
}

nav ul li .dropdown-content li a:hover {
  color: #ff8888;
}

nav ul li.dropdown:hover .dropdown-content {
  display: block;
}

.banner-container {
  position: relative;
  margin: 0;
  padding: 0;
}

.banner-container img {
  width: 100%;
  height: auto;
}

.diferenciais-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
}

.diferenciais-item {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.diferenciais-item i {
  font-size: 2em;
  color: #ff8888;
  margin-bottom: 10px;
}

.diferenciais-item h2 {
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
}

.diferenciais-item p {
  font-size: 1em;
  color: #666;
}

footer {
  background-color: #2a2a2a;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
  position: relative;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo img {
  width: 100px;
}

.footer-mensagem {
  margin: 10px 0;
}

.footer-desenvolvedor a {
  color: #ff8888;
  text-decoration: none;
}

.footer-desenvolvedor a:hover {
  text-decoration: underline;
}
</style>
