<template>
  <div class="diferenciais">
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
        <section class="diferenciais-content">
          <div class="diferenciais-left">
            <h2>ESTOQUE</h2>
            <p>A Uni Hospitalar possui área de armazenamento que segue rigorosamente todas as normas exigidas pela Anvisa. Ambiente totalmente climatizado, câmara fria compatível com o negócio e acima de tudo, a presença do profissional farmacêutico garantindo a guarda e o cumprimento das boas práticas de armazenamento e distribuição conforme rege a RDC 39.</p>
            
            <h2>LOGÍSTICA</h2>
            <p>Nossa logística funciona com entregas para o Norte e Nordeste em até 48 horas, com toda segurança e garantia. A Uni Hospitalar conta com uma equipe interna composta por profissionais preparados e qualificados para atender de forma inteligente, buscando sempre a eficiência no que diz respeito à agilidade e minimizando o tempo de entrega até o seu destino final.</p>
          </div>
  
          <div class="diferenciais-right">
            <h2>UNIDADE DE NEGÓCIOS</h2>
            <p>Buscando uma melhor prestação de serviço, sempre atendendo e surpreendendo as expectativas da Indústria Farmacêutica e dos nossos clientes finais, estamos abrindo uma nova empresa em Fortaleza.</p>
            
            <div class="right-dif">
                <h2>DIFERENCIAIS</h2>
                <p>Estoque – Garantia de fornecimento. Sempre evitar rupturas no fornecimento;<br> Cultura voltada para o negócio;<br> Logística – Garantia de entrega nos locais que trabalhamos;<br> Equipe – Profissionais preparados e alinhados com a cultura da empresa.</p>
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
  name: 'HomeDiferenciais',
};
</script>
  
<style scoped>

.diferenciais {
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4
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

.diferenciais-content {
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 30px;
  margin-bottom: 4%;
}

.right-dif {
    margin-top: 95px;
}

.diferenciais-left,
.diferenciais-right {
  width: 40%;
  text-align: left;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.diferenciais-left h2,
.diferenciais-right h2 {
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 15px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.diferenciais-left p,
.diferenciais-right p {
  text-align: justify;
  font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
  margin-bottom: 20px;
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
