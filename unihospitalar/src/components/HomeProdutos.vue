<template>
  <div class="produtos">
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
            <h2>LINHA DE PRODUTOS</h2>
            <p>A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo desta forma soluções no tratamento das mais diversas patologias.</p>
            
            <h2>MEDICAMENTOS DIVERSOS</h2>
            <p>São medicamentos utilizados para doenças crônico degenerativas que requerem especialidade para seu correto armazenamento.</p>

            <h2>MEDICAMENTOS PARA ONCOLOGIA</h2>
            <p>São medicamentos quimioterápicos utilizados para o tratamento do câncer.</p>

            <h2>MEDICAMENTOS HOSPITALARES</h2>
            <p>São medicamentos utilizados em ambiente hospitalar necessários aos procedimentos médico-cirúrgicos.</p>
            
          </div>                
        </section>
      </main>

      <a href="https://www.unihospitalar.com.br/site/uni-hospitalar-produtos.pdf"><button class="btn-produtos">CLIQUE AQUI PARA BAIXAR NOSSA LINHA DE PRODUTOS</button></a>
  
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
    name: 'HomeProdutos',
  };
  </script>
  
  <style scoped>
  .produtos {
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
    justify-content: space-between;
    width: 80%;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 10px;
}

.about-center {
    width: 50%;
    text-align: center;
    padding-right: 20px;
    border-right: 1px solid #ccc;
}

.about-center h2 {
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 25px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.about-center p {
  margin-bottom: 50px;
  text-align: justify;
  font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
}

.about-center span {
    font-weight: bold;
    color: #AE2C2A;
}

.btn-produtos {
  font-weight: 800;
  font-size: 1.0em;
  margin-bottom: 80px;
  padding: 20px;
  background-color: #FFFFFF;
  color: #AE2C2A;
}

.btn-produtos:hover {
  background-color: #AE2C2A;
  color: #FFFFFF;
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
