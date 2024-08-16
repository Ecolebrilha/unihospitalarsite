<template>
  <div class="parceiros">
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
          <section class="about-content">
              <div class="about-center">
                  <h2>PARCEIROS</h2>
                  <div class="partner-logos">
                      <img src="@/assets/parceiro1.jpg" alt="Logo Parceiro1">
                      <img src="@/assets/parceiro2.jpg" alt="Logo Parceiro2">
                      <img src="@/assets/parceiro3.jpg" alt="Logo Parceiro3">
                      <img src="@/assets/parceiro4.jpg" alt="Logo Parceiro4">
                      <img src="@/assets/parceiro5.jpg" alt="Logo Parceiro5">
                      <img src="@/assets/parceiro6.jpg" alt="Logo Parceiro6">
                      <img src="@/assets/parceiro7.jpg" alt="Logo Parceiro7">
                      <img src="@/assets/parceiro8.jpg" alt="Logo Parceiro8">
                      <img src="@/assets/parceiro9.jpg" alt="Logo Parceiro9">
                      <img src="@/assets/parceiro10.jpg" alt="Logo Parceiro10">
                      <img src="@/assets/parceiro11.jpg" alt="Logo Parceiro11">
                      <img src="@/assets/parceiro12.jpg" alt="Logo Parceiro12">
                      <img src="@/assets/parceiro13.jpg" alt="Logo Parceiro13">
                      <img src="@/assets/parceiro14.jpg" alt="Logo Parceiro14">
                      <img src="@/assets/parceiro15.jpg" alt="Logo Parceiro15">
                      <img src="@/assets/parceiro16.jpg" alt="Logo Parceiro16">
                      <img src="@/assets/parceiro17.jpg" alt="Logo Parceiro17">
                      <img src="@/assets/parceiro18.jpg" alt="Logo Parceiro18">
                      <img src="@/assets/parceiro19.jpg" alt="Logo Parceiro19">
                      <img src="@/assets/parceiro20.jpg" alt="Logo Parceiro20">
                      <img src="@/assets/parceiro21.jpg" alt="Logo Parceiro21">
                      <img src="@/assets/parceiro22.jpg" alt="Logo Parceiro22">
                      <img src="@/assets/parceiro23.jpg" alt="Logo Parceiro23">
                      <img src="@/assets/parceiro24.jpg" alt="Logo Parceiro24">
                      <img src="@/assets/parceiro25.jpg" alt="Logo Parceiro25">
                      <img src="@/assets/parceiro26.jpg" alt="Logo Parceiro26">
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
  name: 'HomeParceiros',
};
</script>

<style scoped>
.parceiros {
    text-align: center;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #FFFFFF;
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
    top: 0.4px;
    left: 0px;
    background-color: #E5E5E5;
    padding: 34.5px 100px;
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
    justify-content: flex-end;
    width: 42%;
    margin-bottom: 10px;
    padding-right: 10%;
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
    margin-right: 22%;
    margin-bottom: 20px;
}

nav {
    margin-left: 10%;
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
}

.about-content {
    display: flex;
    justify-content: center;
    width: 80%;
}

.about-center {
    margin-top: -50px;
    margin-bottom: 80px;
    text-align: center;
}

.about-center h2 {
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 40px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.partner-logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px;
    justify-items: center;
    align-items: center;
}

.partner-logos img {
    width: 150px;
    height: auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.partner-logos img:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

footer {
    background-color: #EBEBEB;
    padding: 40px 0;
    margin: 0 0 -0.4% 0;
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
    height: 80px;
    width: 150px;
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