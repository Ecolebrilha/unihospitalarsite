<template>
    <div class="lgpd">
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
            <li><router-link to="/" exact-active-class="active">PRINCIPAL</router-link></li>
            <li><router-link to="/diferenciais" exact-active-class="active">DIFERENCIAIS</router-link></li>
            <li><router-link to="/produtos" exact-active-class="active">PRODUTOS</router-link></li>
            <li><router-link to="/noticias" exact-active-class="active">NOTÍCIAS</router-link></li>
            <li><router-link to="/compliance" exact-active-class="active">COMPLIANCE</router-link></li>
            <li><router-link to="/lgpd" exact-active-class="active">LGPD</router-link></li>
            <li><router-link to="/contato" exact-active-class="active">CONTATO</router-link></li>
          </ul>
        </nav>
      </header>
  
      <div class="banner-container">
        <img src="@/assets/header-diferenciais.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
        <div class="lgpd-container">
          <!-- Seção de Título Principal -->
          <header class="lgpd-header">
            <h1>Protegendo seus dados com responsabilidade</h1>
            <h2>Nosso compromisso com a segurança e a LGPD</h2>
          </header>
  
          <!-- Seção 1: Introdução -->
          <section class="lgpd-section">
            <div class="section-content">
              <p>
                Somos a Uni Hospitalar, uma empresa dedicada à excelência em serviços de
                saúde e comprometida com a proteção dos seus dados pessoais. Valorizamos
                a segurança e a privacidade dos nossos clientes, parceiros e
                colaboradores.
              </p>
            </div>
          </section>
  
          <!-- Seção 2: Nosso Compromisso -->
          <section class="lgpd-section">
            <div class="section-content">
              <p>
                Na Uni Hospitalar, reconhecemos a importância da Lei Geral de Proteção
                de Dados (LGPD) e reafirmamos nosso compromisso em tratar seus dados
                pessoais com responsabilidade e transparência. Implementamos medidas
                rigorosas de segurança para garantir que suas informações estejam
                protegidas.
              </p>
            </div>
          </section>
  
          <!-- Seção 3: Política de Privacidade e Termos de Uso -->
          <section class="lgpd-section">
            <div class="section-content">
              <p>
                Para mais detalhes sobre como tratamos seus dados, você pode acessar
                nossa Política de Privacidade e os Termos Legais de Uso do nosso site.
                Esses documentos explicam de forma clara e detalhada como utilizamos,
                armazenamos e protegemos suas informações.
              </p>
              <div class="lgpd-buttons">
                <button @click="navigateTo('privacy')">Política de Privacidade</button>
                <button @click="navigateTo('terms')">Termos Legais de Uso</button>
              </div>
            </div>
          </section>
  
          <!-- Seção 4: Dúvidas e Contato -->
          <section class="lgpd-section">
            <div class="section-content">
              <p>
                Caso tenha dúvidas sobre como seus dados são tratados ou precise de mais
                informações, entre em contato conosco. Estamos à disposição para
                esclarecer qualquer questão.
              </p>
              <button @click="navigateTo('contact')">Fale Conosco</button>
            </div>
          </section>
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
            <p>Desenvolvido por <a href="https://github.com/Ecolebrilha" target="_blank">Fernando Leite</a> ツ</p>
          </div>
        </div>
      </footer>
    </div>
  </template>

<script>
export default {
  methods: {
    navigateTo(page) {
      // Implementação do método de navegação
      if (page === 'privacy') {
        this.$router.push('/privacy-policy');
      } else if (page === 'terms') {
        this.$router.push('/terms-of-use');
      } else if (page === 'contact') {
        this.$router.push('/contato');
      }
    }
  }
}
</script>
  
  <style scoped>
  .lgpd-container {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
    color: #333;
    padding: 30px;
    max-width: 1200px;
    margin: auto;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .lgpd-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .lgpd-header h1 {
    color: #0056b3;
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .lgpd-header h2 {
    color: #555;
    font-size: 24px;
    font-weight: normal;
  }
  
  .lgpd-section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .lgpd-section .section-content {
    position: relative;
    padding: 20px;
  }
  
  .lgpd-section p {
    font-size: 18px;
    line-height: 1.8;
  }
  
  .lgpd-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .lgpd-buttons button {
    background-color: #0056b3;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .lgpd-buttons button:hover {
    background-color: #003d82;
    transform: translateY(-2px);
  }
  
  .lgpd-buttons button:active {
    transform: translateY(0);
  }
  
  footer {
    padding: 20px;
    background-color: #333;
    color: #fff;
    border-radius: 12px;
    margin-top: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
  }
  
  .footer-logo img {
    max-height: 50px;
  }
  
  .footer-mensagem {
    flex-grow: 1;
  }
  
  .footer-desenvolvedor a {
    color: #f39c12;
    text-decoration: none;
  }
  
  .footer-desenvolvedor a:hover {
    text-decoration: underline;
  }
  </style>
  