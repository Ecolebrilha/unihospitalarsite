<template>
    <div class="compliance">
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
        <img src="@/assets/header-parceiros.jpg" alt="Imagem do Banner de Compliance">
      </div>
      
      <main>
        <section class="compliance-overview">
          <h2>Compliance e Ética</h2>
          <p>
            Nossa empresa se compromete com a conformidade normativa e a ética. Aqui você encontra nossas políticas, regulamentos e documentos que guiam nossas práticas e garantem o cumprimento de todas as exigências legais.
          </p>
        </section>
        
        <section class="compliance-details">
          <div class="compliance-section">
            <h3>Políticas e Regulamentos</h3>
            <p>Explore nossas políticas de segurança de dados, práticas antissuborno, e conformidade com normas setoriais.</p>
            <ul>
              <li><a href="/compliance/politica-seguranca-dados">Política de Segurança de Dados</a></li>
              <li><a href="/compliance/anti-suborno">Práticas Antissuborno</a></li>
              <li><a href="/compliance/normas-setoriais">Conformidade com Normas Setoriais</a></li>
            </ul>
          </div>
  
          <div class="compliance-section">
            <h3>Checklists e Formulários</h3>
            <p>Confirme que entendeu e aceita as regras através dos nossos formulários de consentimento e checklists.</p>
            <form action="/compliance/confirmacao" method="post">
              <label for="consentimento">Eu confirmo que li e aceito as políticas de compliance:</label>
              <input type="checkbox" id="consentimento" name="consentimento" required>
              <button type="submit">Confirmar</button>
            </form>
          </div>
  
          <div class="compliance-section">
            <h3>Links para Documentos Legais</h3>
            <p>Acesse documentos completos como políticas de privacidade, termos de uso, entre outros.</p>
            <ul>
              <li><a href="/lgpd/politica-privacidade">Política de Privacidade</a></li>
              <li><a href="/lgpd/termos-legais">Termos Legais de Uso</a></li>
            </ul>
          </div>
  
          <div class="compliance-section">
            <h3>Indicadores de Conformidade</h3>
            <p>Acompanhe o status de conformidade dos nossos processos e de cada usuário.</p>
            <div class="compliance-status">
              <span class="status-indicator approved">Aprovado</span>
              <span class="status-indicator pending">Pendente</span>
            </div>
          </div>
  
          <div class="compliance-section">
            <h3>Instruções para Ações Corretivas</h3>
            <p>Saiba o que fazer caso identifique uma irregularidade ou desconformidade em nossos processos.</p>
            <p>Entre em contato com nosso departamento de compliance para orientação imediata.</p>
            <a href="/contato" class="cta-button">Entre em Contato</a>
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
  .compliance {
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
    top: -60px;
    font-size: 1.2em;
    position: relative;
}

.logo-container {
    position: absolute;
    top: 0.3px;
    left: 0px;
    background-color: #E5E5E5;
    padding: 23.5px 0;
    width: 20%;
    box-sizing: border-box;
}

.logo {
    height: 100px;
    margin: 0 auto;
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
  padding-top: 145px;
    display: flex;
    justify-content: center;
    margin-top: -60px;
    background-color: #F9F9F9;
}

.banner-container img {
    width: 60%;
    height: auto;
    object-fit: cover;
}
  
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
  
  .compliance-overview h2 {
    color: #AE2C2A;
    font-size: 1.8em;
    margin-bottom: 20px;
  }
  
  .compliance-overview p {
    font-size: 1.2em;
    color: #555555;
    margin-bottom: 40px;
    max-width: 800px;
    text-align: center;
  }
  
  .compliance-details {
    width: 100%;
    max-width: 1000px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  .compliance-section {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  .compliance-section h3 {
    color: #AE2C2A;
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  .compliance-section p {
    color: #555555;
    margin-bottom: 20px;
  }
  
  .compliance-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .compliance-section ul li {
    margin-bottom: 10px;
  }
  
  .compliance-section ul li a {
    color: #AE2C2A;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }
  
  .compliance-section ul li a:hover {
    color: #FF8888;
  }
  
  .compliance-status {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .status-indicator {
    padding: 10px 20px;
    border-radius: 5px;
    color: #ffffff;
  }
  
  .status-indicator.approved {
    background-color: #28a745;
  }
  
  .status-indicator.pending {
    background-color: #ffc107;
  }
  
  .cta-button {
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff;
    background-color: #AE2C2A;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }
  
  .cta-button:hover {
    background-color: #FF8888;
  }
  
  footer {
  }
  
  .footer-content {
    background-color: #AE2C2A;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  
  .footer-logo img {
    width: 100px;
  }
  
  .footer-mensagem {
    font-size: 0.8em;
  }
  
  .footer-desenvolvedor {
    font-size: 0.8em;
  }
  
  .footer-desenvolvedor a {
    color: #FF8888;
    text-decoration: none;
  }
  
  .footer-desenvolvedor a:hover {
    text-decoration: underline;
  }
  </style>
  