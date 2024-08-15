<template>
  <div class="contato">
      <header>
          <div class="contact-info">
              <span><i class="fas fa-phone"></i>+55 81 3472 7201</span>
              <span><i class="fas fa-envelope"></i>contato@unihospitalar.com.br</span>
          </div>
          <hr class="linha">
          <nav>
              <ul>
                <li><router-link to="/">Principal</router-link></li>
                <li><router-link to="/sobre">Uni Hospitalar</router-link></li>
                <li><router-link to="/diferenciais">Diferenciais</router-link></li>
                <li><router-link to="/nossos-servicos">Nossos Serviços</router-link></li>
                <li><router-link to="/produtos">Linha de Produtos</router-link></li>
                <li><router-link to="/parceiros">Parceiros</router-link></li>
                <li><router-link to="/contato">Fale Conosco</router-link></li>
              </ul>
          </nav>
      </header>
  
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
            <p><strong>UNI Hospitalar Ltda.</strong><br>
               Rua Alagoas, 253<br>
               Ipsep Recife-PE<br>
               Fone: +55 81 3472 7201<br>
               CNPJ: 07.484.373/0001-24</p>
            <p><strong>Para enviar sua mensagem, preencha os campos abaixo e em breve retornaremos. Obrigado!</strong></p>
            
            <form>
                <div class="form-group">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" placeholder="Seu nome completo" required>
                </div>
                <div class="form-group">
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" placeholder="Seu e-mail" required>
                </div>
                <div class="form-group">
                    <label for="message">Mensagem:</label>
                    <textarea id="message" rows="5" placeholder="Sua mensagem" required></textarea>
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
    font-size: 1.2em;
    margin-top: -60px;
}

.contact-info {
    display: flex;
    justify-content: center;
    width: 90%;
    margin-bottom: 10px;
}

.contact-info span {
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

.linha {
    width: 70%;
    color: #FF8888;
    border: 0;
    border-top: 2px solid #FF8888;
    margin: 10px auto;
}

nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 0;
}

nav ul li {
    margin: 0 15px;
}

nav a {
    text-decoration: none;
    color: #FFFFFF;
    font-style: italic;
    font-size: 0.8em;
    white-space: nowrap;
}

nav a:hover {
    color: #99997C;
}

main {
    display: flex;
    justify-content: center;
    padding: 40px 0;
    background-color: #f8f8f8;
}

.contact-content {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.contact-info-sections {
    width: 45%;
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
}

.contact-form {
    width: 45%;
    text-align: left;
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
    margin-bottom: 20px;
    line-height: 1.6;
}

.form-group {
    margin-bottom: 20px;
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

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #AE2C2A;
    box-shadow: 0 0 8px rgba(174, 44, 42, 0.2);
}

.submit-btn {
    padding: 12px 20px;
    background-color: #AE2C2A;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #8e2322;
}

footer {
    background-color: #EBEBEB;
    padding: 40px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-logo img {
    width: 120px;
}

.footer-mensagem {
    text-align: center;
    font-size: 0.9em;
    color: rgb(97, 97, 97);
    font-weight: 700;
}

.footer-desenvolvedor a {
    color: black;
    text-decoration: none;
}

.footer-desenvolvedor a:hover {
    text-decoration: underline;
}
</style>
