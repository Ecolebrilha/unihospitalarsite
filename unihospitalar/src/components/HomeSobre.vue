<template>
  <div class="news">
    <header>
      <div class="logo-container">
        <img src="@/assets/uni.png" alt="Logo da Uni Hospitalar" class="logo">
        <span class="trademark-symbol">®</span>
      </div>
      <div class="contact-info">
        <span class="phone-number">
          <i class="fas fa-phone"></i>
          <span class="small-numbers">+55 81 </span> 3472 7201
        </span>
        <span>
          <a href="mailto:contato@unihospitalar.com.br">
            <i class="fas fa-envelope"></i> contato@unihospitalar.com.br
          </a>
        </span>
      </div>
      <hr class="linha">
      <nav>
        <ul>
          <li><router-link to="/Principal" exact-active-class="active">PRINCIPAL</router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active">DIFERENCIAIS</router-link></li>
          <li><router-link to="/Produtos" exact-active-class="active">PRODUTOS</router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active">NOTÍCIAS</router-link></li>
          <li><router-link to="/Compliance" exact-active-class="active">COMPLIANCE</router-link></li>
          <li><router-link to="/LGPD" exact-active-class="active">LGPD</router-link></li>
          <li><router-link to="/Contato" exact-active-class="active">CONTATO</router-link></li>
        </ul>
      </nav>
    </header>

    <div class="banner-container">
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
            <p>Há 19 anos no mercado, a Uni Hospitalar vem conquistando espaço na distribuição de medicamentos de forma sólida e consolidada, comprometida com a saúde e bem-estar da sociedade. Fornecemos produtos de alta qualidade e serviços excepcionais, sempre com uma visão aprofundada do mercado farmacêutico.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-bullseye"></i>
          </div>
          <div class="text-content">
            <h2>MISSÃO</h2>
            <p>Ser uma empresa sólida e confiável na distribuição de medicamentos, surpreendendo os clientes com a melhor prestação de serviços, e fornecer soluções de saúde acessíveis, inovadoras e de alta qualidade. Contribuímos para o bem-estar e qualidade de vida das pessoas, sempre com ética, responsabilidade e compromisso com nossos valores.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-eye"></i>
          </div>
          <div class="text-content">
            <h2>VISÃO</h2>
            <p>Ser reconhecida como a principal distribuidora de medicamentos do Brasil, expandindo nossas operações para novas regiões e setores, sempre buscando excelência em tudo o que fazemos, mantendo a transparência e respeito com as relações humanas.</p>
          </div>
        </div>
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-heart"></i>
          </div>
          <div class="text-content">
            <h2>VALORES</h2>
            <p>Nosso trabalho é guiado pelos seguintes valores fundamentais:</p>
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
        <div class="item">
          <div class="icon-container">
            <i class="fas fa-cogs"></i>
          </div>
          <div class="text-content">
            <h2>Nossos Serviços</h2>
            <p>A Uni Hospitalar busca atender de forma eficiente os segmentos públicos e privados, através de profissionais capacitados para interpretar o mercado e assim dar respostas compatíveis e definitivas para o bom atendimento da cadeia de distribuição.</p>
            <div class="services-grid">
              <div class="service-item">
                <h3>Segmento Privado</h3>
                <p>Formado internamente por um telemarketing que funciona alinhado com uma equipe de consultores externos, visando sempre dar respostas rápidas e eficazes, a fim de atender o nosso cliente da melhor forma possível.</p>
              </div>
              <div class="service-item">
                <h3>Segmento Público</h3>
                <p>Formado internamente por um Setor de Licitações, composto por profissionais capacitados e orientados para o mercado, buscando informações através da captação de editais e outras formas a fim de gerar novos negócios. Este setor se completa através da presença de consultores externos que visitam sistematicamente todos os órgãos públicos que trabalhamos.</p>
              </div>
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
  name: 'HomeNoticias',
};
</script>

<style scoped>
.news {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(to bottom, #f4f4f4, #ffffff);
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #AE2C2A;
  padding: 35px 0;
  box-sizing: border-box;
  font-size: 1.2em;
}

.logo-container {
  position: absolute;
  top: 0.3px;
  left: 0px;
  background-color: #E5E5E5;
  padding: 31.5px 0;
  width: 20%;
  box-sizing: border-box;
}

.logo {
  height: 80px;
}

.trademark-symbol {
  font-size: 1.5em;
  margin-left: 5px;
  color: #000000;
  position: relative;
  top: -48px;
}

.contact-info {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
}

.contact-info span {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #FF8888;
  margin-right: 30px;
}

.contact-info a {
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #FF8888;
  margin-right: 30px;
}

.contact-info i {
  margin-right: 8px;
}

.linha {
  width: 50%;
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
}

nav ul li {
  margin: 0 15px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-style: italic;
  font-weight: bold;
  font-size: 0.8em;
  padding-bottom: 5px;
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

.banner-container {
  display: flex;
  justify-content: center;
  margin-top: -60px;
}

.banner-container img {
  width: 60%;
  height: auto;
  object-fit: cover;
  filter: brightness(0.9);
  transition: filter 0.3s ease-in-out;
}

.banner-container img:hover {
  filter: brightness(1);
}

main {
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background-color: #f9f9f9;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  width: 80%;
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
  padding: 20px;
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
}

.text-content h2 {
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 1.2em;
  color: #666666;
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
  background-color: #333333;
  color: #ffffff;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
}

.footer-logo img {
  height: 80px;
  margin-right: 20px;
}

.footer-mensagem {
  flex: 1;
}

.footer-desenvolvedor {
  flex: 1;
  text-align: right;
}

.footer-desenvolvedor p {
  font-size: 1.2em;
  color: #FF8888;
}

.footer-desenvolvedor a {
  text-decoration: none;
  color: #FF8888;
  transition: color 0.3s ease;
}

.footer-desenvolvedor a:hover {
  color: #FF5555;
}
</style>
