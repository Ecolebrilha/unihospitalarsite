<template>
    <div class="diferenciais">
      <header>
        <a href="/"><div class="logo-container">
          <img src="@/assets/uni.png" alt="Logo da Uni Hospitalar" class="logo">
          <span class="trademark-symbol">®</span>
        </div></a>
        <div class="contact-info">
          <span class="phone-number">
            <i class="fas fa-phone"></i>
            <span class="small-numbers">+55 81 </span> 3472 7201
          </span>
          <span><a href="mailto:contato@unihospitalar.com.br"><i class="fas fa-envelope"></i>contato@unihospitalar.com.br</a></span>
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
            <p>Desenvolvido por <a href="github.com/Ecolebrilha">Fernando Leite</a> ツ</p>
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
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
  
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #AE2C2A;
    padding: 35px 0;
    box-sizing: border-box;
    position: relative;
  }
  
  .logo-container {
    position: absolute;
    top: 0.3px;
    left: 0px;
    background-color: #E5E5E5;
    padding: 32.5px 0;
    width: 20%;
    box-sizing: border-box;
  }
  
  .logo {
    height: 80px;
  }
  
  .trademark-symbol {
    font-size: 0.9em;
    font-weight: 700;
    margin-left: 3px;
    color: #000000;
    position: relative;
    top: -55px;
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
  }
  
  .contact-info a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #FF8888;
    margin-right: 30px;
  }
  
  .contact-info span:last-child {
    margin-right: 0;
  }
  
  .contact-info i {
    margin-right: 8px;
  }
  
  .small-numbers {
    font-size: 0.8em;
    padding-right: 5px;
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
    width: auto;
    margin: 0;
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
    white-space: nowrap;
  }
  
  nav ul li .dropdown-content li a:hover {
    color: #FF8888;
  }
  
  nav ul li.dropdown:hover .dropdown-content {
    display: block;
  }
  
  .banner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-color: #f8f8f8;
  }
  
  .banner-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  main {
    padding: 40px;
  }
  
  .diferenciais-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 20px;
    padding: 20px;
  }
  
  .diferenciais-item {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .diferenciais-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .diferenciais-item i {
    font-size: 3em;
    color: #FF8888;
    margin-bottom: 20px;
  }
  
  .diferenciais-item h2 {
    font-size: 1.5em;
    color: #333333;
    margin-bottom: 20px;
  }
  
  .diferenciais-item p {
    font-size: 1em;
    color: #666666;
    line-height: 1.5;
  }
  
  footer {
    background-color: #AE2C2A;
    color: #FFFFFF;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  
  .footer-logo img {
    max-width: 100px;
    height: auto;
  }
  
  .footer-mensagem p, .footer-desenvolvedor p {
    margin: 0;
    font-size: 0.9em;
  }
  
  .footer-desenvolvedor a {
    color: #FF8888;
    text-decoration: none;
  }
  
  .footer-desenvolvedor a:hover {
    text-decoration: underline;
  }
  </style>
  