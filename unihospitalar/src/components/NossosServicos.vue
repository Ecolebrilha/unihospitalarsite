<template>
    <div class="servicos">
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
        <hr class="linha">
        <nav>
          <ul>
            <li><router-link to="/" exact-active-class="active">HOME</router-link></li>
            <li><router-link to="/Sobre" exact-active-class="active">SOBRE</router-link></li>
            <li><router-link to="/Diferenciais" exact-active-class="active">DIFERENCIAIS</router-link></li>
            <li><router-link to="/Servicos" exact-active-class="active">SERVIÇOS</router-link></li>
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
        <section class="servicos-content">
          <div class="servico-item">
            <h2>Nossos serviços</h2>
            <p>A Uni Hospitalar busca atender de forma eficiente os segmentos públicos e privados, através de profissionais capacitados para interpretar o mercado e assim dar respostas compatíveis e definitivas para o bom atendimento da cadeia de distribuição.</p>
          </div>
  
          <div class="servico-item">
            <h3>Segmento Privado</h3>
            <p>Formado internamente por um telemarketing que funciona alinhado com uma equipe de consultores externos, visando sempre dar respostas rápidas e eficazes, a fim de atender o nosso cliente da melhor forma possível.</p>
          </div>
  
          <div class="servico-item">
            <h3>Segmento Público</h3>
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
    name: 'NossosServicos',
  };
  </script>
  
  <style scoped>
  .servicos {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    padding: 0;
    margin: 0;
  }
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #AE2C2A;
    padding: 20px 0;
  }
  
  .logo-container {
    position: absolute;
    top: 10px;
    left: 20px;
  }
  
  .logo {
    height: 80px;
  }
  
  .contact-info {
    margin-top: 10px;
    color: #FFFFFF;
  }
  
  .linha {
    width: 80%;
    margin: 10px auto;
    border-top: 1px solid #FF8888;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    margin: 0 15px;
    position: relative;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #FFFFFF;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }
  
  nav ul li a:hover {
    color: #FF8888;
  }
  
  .banner-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  main {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
  }
  
  .servicos-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .servico-item {
    margin-bottom: 20px;
  }
  
  .servico-item h2 {
    color: #AE2C2A;
    font-size: 2em;
    font-weight: 700;
  }
  
  .servico-item h3 {
    color: #AE2C2A;
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 15px;
  }
  
  .servico-item p {
    color: #555555;
    line-height: 1.6em;
    text-align: justify;
  }
  
  footer {
    background-color: #EBEBEB;
    padding: 20px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-logo img {
    height: 50px;
  }
  
  .footer-mensagem {
    color: rgb(97, 97, 97);
    font-size: 0.9em;
    text-align: center;
    margin: 10px 0;
  }
  
  .footer-desenvolvedor a {
    color: #AE2C2A;
    text-decoration: none;
  }
  
  .footer-desenvolvedor a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .servicos-content {
      width: 90%;
    }
  
    .footer-content {
      flex-direction: column;
      text-align: center;
    }
  }
  </style>
  