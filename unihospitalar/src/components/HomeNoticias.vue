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
      <img src="@/assets/header-sobre.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="news-content">
        <div class="news-left">
          <h2>QUEM SOMOS</h2>
          <p>Há 10 anos no mercado, a Uni Hospitalar vem conquistando espaço no mercado de distribuição de medicamentos de forma sólida e acima de tudo consolidada pela forma com que enxerga e interpreta o mercado farmacêutico.</p>

          <h2>MISSÃO</h2>
          <p>Ser uma empresa sólida, confiável na distribuição de medicamentos, buscando sempre surpreender todos os clientes na busca pela melhor prestação de serviços.</p>

          <h2>VISÃO</h2>
          <p>Transparência e respeito com as relações humanas.</p>
        </div>

        <div class="news-right">
          <img src="@/assets/uni.png" alt="Imagem da Empresa">
          <span class="trademark-symbol2">®</span>
          <h2>VALORES</h2>
          <div class="valores-grid">
            <span>Respeito às relações humanas</span>
            <span>Relacionamento</span>
            <span>Orientação para o mercado</span>
            <span>Integridade</span>
            <span>Compromisso</span>
            <span>Agilidade</span>
            <span>Objetividade</span>
            <span>Simplicidade</span>
            <span>Ética</span>
          </div>
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
  name: 'HomeNoticias',
};
</script>

<style scoped>

.news {
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
  padding: 50px 0;
}

.news-content {
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 30px;
  margin-bottom: 7.1%;
}

.news-left,
.news-right {
  width: 40%;
  text-align: left;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.news-left h2 {
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 15px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.news-right h2 {
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-top: 90px;
  margin-bottom: 15px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.news-left p {
  font-size: 1em;
  text-align: justify;
  line-height: 1.6em;
  color: #6c757d;
  margin-bottom: 60px;
}

.news-right img {
  margin-top: 60px;
  width: 40%;
  margin-left: 26%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.trademark-symbol2 {
    font-size: 2em;
    margin-left: 5px;
    color: #000000;
    position: relative;
    top: -48px;
}

.valores-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  font-size: 1.1em;
  margin-top: 20px;
  color: #6c757d;
}

.valores-grid span {
  background-color: #f8f9fa;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

footer {
    background-color: #EBEBEB;
    padding: 30px 0;
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
