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
                    <span class="small-numbers">+55 81 </span> 3472 7201</span>
                    <span><a href="mailto:contato@unihospitalar.com.br"><i class="fas fa-envelope"></i>contato@unihospitalar.com.br</a></span>
          </div>
          <hr class="linha">
          <nav>
              <ul>
                <li><router-link to="/">PRINCIPAL</router-link></li> 
                <li><router-link to="/diferenciais">DIFERENCIAIS</router-link></li>
                <li><router-link to="/produtos">PRODUTOS</router-link></li>
                <li><router-link to="/noticias">NOTÍCIAS</router-link></li>
                <li><router-link to="/compliance">COMPLIANCE</router-link></li>
                <li><router-link to="/lgpd">LGPD</router-link></li>
                <li><router-link to="/contato">CONTATO</router-link></li>
              </ul>
          </nav>
      </header>

      <div class="banner-container">
      <img src="@/assets/header-servicos.jpg" alt="Imagem do Banner">
    </div>
  
      <main>
        <section class="lgpd-content">
          <div class="lgpd-left">
            <h2>NOSSOS SERVIÇOS</h2>
            <p>A Uni Hospitalar busca atender de forma eficiente os segmentos públicos e privados, através de profissionais capacitados para interpretar o mercado e assim dar respostas compatíveis e definitivas para o bom atendimento da cadeia de distribuição.</p>
            
            <p> <span>Segmento Privado - </span>formado internamente por um telemarketing que funciona alinhado com uma equipe de consultores externos, visando sempre dar respostas rápidas e eficazes, a fim de atender o nosso cliente da melhor forma possível.</p>
            
            <p> <span>Segmento Público - </span>formado internamente por um Setor de Licitações, composto por profissionais capacitados e orientados para o mercado, buscando informações através da captação de editais e outras formas a fim de gerar novos negócios. Este setor se completa através da presença de consultores externos que visitam sistematicamente todos os órgãos públicos que trabalhamos.</p>
          </div>
  
          <div class="lgpd-right">
            <img src="@/assets/nossos-servicos.jpg" alt="Imagem da Empresa">
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
    name: 'HomeLGPD',
  };
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
    padding: 29.5px 0;
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
    top: -50px;
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
}

nav a {
    text-decoration: none;
    color: #FFFFFF;
    font-style: italic;
    font-weight: bold;
    font-size: 0.8em;
    white-space: nowrap;
}

nav a:hover {
    color: #99997C;
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
}

main {
    display: flex;
    justify-content: center;
    padding: 40px 0;
}

.lgpd-content {
    display: flex;
    justify-content: space-between;
    width: 60%;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 4%;
}

.lgpd-left {
    width: 50%;
    text-align: left;
    padding-right: 20px;
    border-right: 1px solid #ccc;
}

.lgpd-left h2 {
    text-align: center;
    font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.lgpd-left p {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
  text-align: justify;
  padding: 0 0 80px 0;
}

.lgpd-left span {
    font-weight: bold;
    color: #AE2C2A;
}

.lgpd-right {
    width: 50%;
    text-align: left;
    padding-left: 20px;
}

.lgpd-right img {
    width: 100%;
    height: 76vh;
    margin-bottom: 20px;
    border-radius: 10px;
}

footer {
    background-color: #EBEBEB;
    padding: 20px 0;
    margin: 0 0 -30px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.footer-logo, .footer-mensagem, .footer-desenvolvedor {
    flex: 1;
}

.footer-logo img {
    text-align: left;
}

.footer-mensagem {
    text-align: center;
    color: rgb(97, 97, 97);
    font-weight: 700;
    white-space: nowrap;
}

.footer-desenvolvedor {
    text-align: right;
}

.footer-desenvolvedor a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.footer-desenvolvedor a:hover {
    color: #99997C;
}

  </style>
