<template>
  <div class="compliance">
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
      <img src="@/assets/header-parceiros.jpg" alt="Imagem do Banner">
    </div>
  
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
  name: 'HomeCompliance',
};
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
}

.about-content {
  margin-top: -80px;
  width: 60%;
  height: 95%;
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.about-center {
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