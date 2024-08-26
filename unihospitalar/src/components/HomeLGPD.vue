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
            <li><router-link to="/Principal" exact-active-class="active">PRINCIPAL</router-link></li>
            <li><router-link to="/Diferenciais" exact-active-class="active">DIFERENCIAIS</router-link></li>
            <li><router-link to="/Produtos" exact-active-class="active">PRODUTOS</router-link></li>
            <li><router-link to="/Notícias" exact-active-class="active">NOTÍCIAS</router-link></li>
            <li><router-link to="/Compliance" exact-active-class="active">COMPLIANCE</router-link></li>
            <li><router-link to="/LGPD" exact-active-class="active">LGPD</router-link></li>
            <li><router-link to="/Contato" exact-active-class="active">CONTATO</router-link></li>
          </ul>
        </nav>
      </header>
  
      <div class="banner-container">
        <img src="@/assets/header-servicos.jpg" alt="Imagem do Banner">
      </div>
  
      <main>
        <div class="lgpd-container">
          
          <div class="lgpd-header">
            <h1>Protegendo seus dados com responsabilidade</h1>
            <h2>Nosso compromisso com a segurança e a LGPD</h2>
          </div>
  
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
  
          <section class="lgpd-section">
            <div class="section-content">
              <p>
                Caso tenha dúvidas sobre como seus dados são tratados ou precise de mais
                informações, entre em contato conosco. Estamos à disposição para
                esclarecer qualquer questão.
              </p>
              <button class="contact-btn" @click="navigateTo('contato')">Fale Conosco</button>
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
      if (page === 'privacy') {
        this.$router.push('/privacy-policy');
      } else if (page === 'terms') {
        this.$router.push('/terms-of-use');
      } else if (page === 'contato') {
        this.$router.push('/contato');
      }
    }
  }
}
</script>
  
  <style scoped>
  .lgpd {
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

.banner-container {
    display: flex;
    justify-content: center;
    margin-top: -60px;
    margin-bottom: 80px;
}

.banner-container img {
    width: 60%;
    height: auto;
    object-fit: cover;
}

  .lgpd-container {
    font-family: 'Arial', sans-serif;
    background-color: #f2f2f2;
    color: #333;
    padding: 30px;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 50px;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .lgpd-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .lgpd-header h1 {
    color: #AE2C2A;
    font-size: 36px;
    margin-bottom: 10px;
  }
  
  .lgpd-header h2 {
    color: #f05454;
    font-size: 24px;
    font-weight: 700;
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
    font-size: 1.1em;
    line-height: 1.8;
  }
  
  .lgpd-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .lgpd-buttons button {
    padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: #f05454;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: slideInRight 2s ease-out;
}

.lgpd-buttons button:hover {
  background-color: #d04343;
  transform: scale(1.05);
}
  
  .lgpd-buttons button:active {
    transform: translateY(0);
  }

  .contact-btn {
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin: 40px 0;
    padding: 12px 24px; 
    font-size: 16px; 
    border: none; 
    border-radius: 4px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase; 
    font-weight: bold; 
    letter-spacing: 1px; 
}

.contact-btn:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); 
    transform: translateY(-3px); 
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
  