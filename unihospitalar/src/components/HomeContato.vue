<template>
  <div class="contato">
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
      <img src="@/assets/header-contato.jpg" alt="Imagem do Banner">
    </div>
  
      <main>
        <section class="contact-content">
          <div class="contact-info-sections">
            <h2>COMERCIAL</h2>
            <p>+55 81 3472 7224 <a href="mailto:vendas@unihospitalar.com.br"><br>vendas@unihospitalar.com.br</a></p>
            
            <h2>LICITAÇÃO</h2>
            <p>+55 81 3472 7215 <a href="mailto:licitacao@unihospitalar.com.br"><br>licitacao@unihospitalar.com.br</a></p>
            
            <h2>FINANCEIRO</h2>
            <p>+55 81 3472 7202 <a href="mailto:financeiro@unihospitalar.com.br"><br>financeiro@unihospitalar.com.br</a></p>
          </div>
  
          <div class="contact-form">
            <h2>FALE CONOSCO</h2>
            <article class="esq"><p><strong>UNI Hospitalar Ltda.</strong><br>
               Rua Alagoas, 253<br>
               Ipsep, Recife-PE<br>
               Fone: +55 81 3472 7201<br>
               CNPJ: 07.484.373/0001-24</p>
            </article>
               <article id="canvas1" class="dir map">
                <iframe id="map_canvas1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.962986239422!2d-34.92510330000001!3d-8.105251299999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1ef44fcc1ed1%3A0xfd7040da8c464f4a!2sR.+Alagoas%2C+253+-+Ipsep%2C+Recife+-+PE%2C+51350-560!5e0!3m2!1spt-BR!2sbr!4v1432556341952" width="100%" height="120" frameborder="0" style="border:0" class="scrolloff"></iframe>
            </article>
            <div class="info-msg">
                <div class="msg-info"><p><strong>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</strong></p></div>
            </div>
            
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Nome:</label>
                        <input type="text" id="name" placeholder="Seu nome completo" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" placeholder="Seu e-mail" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="telefone">Telefone:</label>
                        <input type="text" id="telefone" placeholder="Seu telefone" required>
                    </div>
                    <div class="form-group">
                        <label for="empresa">Empresa:</label>
                        <input type="text" id="empresa" placeholder="Sua empresa" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="message">Mensagem:</label>
                    <textarea id="message" rows="5" placeholder="Sua mensagem" required></textarea>
                </div>
                <div class="lbl-box">
                    <label>
                        <input name="news" type="checkbox" value="1">
                        &nbsp;&nbsp; Desejo receber novidades do Uni Hospitalar por e-mail.
                    </label>
                </div>
                <button type="submit" class="submit-btn">Enviar mensagem</button>
            </form>
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
<style scoped>
.contato {
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

main {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background-color: #F4F4F4;
}

.contact-content {
    display: flex;
    justify-content: space-between;
    width: 60%;
    padding: 20px;
    background-color: #f8f8f8;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: -70px;
}

.contact-info-sections {
    border-right: 1px solid #ccc;
    padding-right: 3.2%;
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
}

.contact-info-sections h2 {
    text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.contact-info-sections p {
    margin-bottom: 20px;
    line-height: 1.6;
    margin-bottom: 80px;
}

.contact-info-sections a {
  color: #f95454;
  text-decoration: none;
}

.contact-info-sections a:hover {
    text-decoration: underline;
}

.contact-form {
    width: 65%;
    text-align: left;
    margin: 0 auto;
}

.contact-form .form-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.contact-form h2 {
    text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.contact-form p {
    font-size: 14px;
    color: #666;
    line-height: 25px;
    font-weight: 400;
}

article.esq {
    width: 33.33333%;
    float: left;
}

article.dir {
    width: 66.10169%;
    float: right;
    margin-top: 15px;
    margin-right: 0;
}

.info-msg {
    margin-top: 200px;
    margin-bottom: 30px;
}

.form-group {
    flex: 1;
    margin-right: 10px;
}

.form-group:last-child {
    margin-right: 0;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;
}

#message {
    font-size: 1.1em;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #AE2C2A;
    box-shadow: 0 0 8px rgba(174, 44, 42, 0.2);
}

.lbl-box {
    font-size: 14px;
    color: #999;
    line-height: 25px;
    display: block;
    margin-bottom: 15px;
    cursor: default;
}

.submit-btn {
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin: 40px 0;
    padding: 12px 24px; 
    font-size: 12px; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase; 
    font-weight: 700; 
    letter-spacing: 1px; 
}

.submit-btn:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
}

.contact-form .form-row:nth-child(1) .form-group {
    flex: 1;
    min-width: 0;
}

.contact-form .form-row:nth-child(2) .form-group {
    flex: 1;
    min-width: 0;
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
