<template>
  <div class="produtos">
      <header>
        <a href="/"><div class="logo-container">
        <img src="@/assets/uni.png" alt="Logo da Uni Hospitalar" class="logo">
        <span class="trademark-symbol">®</span>
      </div></a>
          <div class="contact-info">
            <span class="phone-number">                  
                    <i class="fas fa-phone"></i>
                    <span class="small-numbers">+55 81 </span> 3472 7201</span>
                    <span><a href="mailto:contato@unihospitalar.com.br"><i class="fas fa-envelope"></i>contato@unihospitalar.com.br</a></span>
          </div>
          <div class="language-selector">
        <select @change="changeLanguage($event)">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
          <hr class="linha">
          <nav>
              <ul>
                <li><router-link to="/" exact-active-class="active"></router-link></li> 
                <li><router-link to="/Sobre" exact-active-class="active">SOBRE</router-link></li>
                <li><router-link to="/Diferenciais" exact-active-class="active">DIFERENCIAIS</router-link></li>
                <li><router-link to="/Serviços" exact-active-class="active">SERVIÇOS</router-link></li>
                <li><router-link to="/Produtos" exact-active-class="active">PRODUTOS</router-link></li>
                <li><router-link to="/Compliance" exact-active-class="active">COMPLIANCE</router-link></li>
                <li class="dropdown">
            <router-link to="/LGPD" exact-active-class="active">
                LGPD <i class="fas fa-chevron-down"></i>
            </router-link>
            <ul class="dropdown-content">
                <li><router-link to="/PoliticaPrivacidade" exact-active-class="active">Política de Privacidade</router-link></li>
                <li><router-link to="/TermosLegais" exact-active-class="active">Termos Legais de Uso do site</router-link></li>
            </ul>
        </li>
                <li><router-link to="/Contato" exact-active-class="active">CONTATO</router-link></li>
              </ul>
          </nav>
      </header>

      <div class="banner-container">
      <img src="@/assets/header-produtos.jpg" alt="Imagem do Banner">
    </div>
  
    <main>
      <section class="produtos-content">
        <div class="card">
          <h2>LINHA DE PRODUTOS</h2>
          <p>A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo desta forma soluções no tratamento das mais diversas patologias.</p>
        </div>
        
        <div class="card">
          <h2>MEDICAMENTOS DIVERSOS</h2>
          <p>São medicamentos utilizados para doenças crônico degenerativas que requerem especialidade para seu correto armazenamento.</p>
        </div>
        
        <div class="card">
          <h2>MEDICAMENTOS PARA ONCOLOGIA</h2>
          <p>São medicamentos quimioterápicos utilizados para o tratamento do câncer.</p>
        </div>
        
        <div class="card">
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
name: 'HomeSobre',
methods: {
  changeLanguage(event) {
    this.$i18n.locale = event.target.value;
  }
}
}
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
    top: 0.3px;
    left: 0px;
    background-color: #E5E5E5;
    padding: 23.5px 0;
    width: 20%;
    box-sizing: border-box;
}

.logo {
    height: 100px;
    margin: 0 auto;
}

.trademark-symbol {
    font-size: 1.2em;
    font-weight: 700;
    margin-left: 3px;
    color: #000000;
    position: relative;
    top: -67px;
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

.language-selector {
  position: absolute;
  right: 20px;
  top: 20px;
}

.language-selector select {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
}

.linha {
    width: 48%;
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
    margin: 0 14px;
    position: relative;
}

nav ul li a {
    text-decoration: none;
    color: #FFFFFF;
    font-style: italic;
    font-weight: bold;
    font-size: 0.9em;
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

nav ul li.dropdown {
  position: relative;
}

nav ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: #AE2C2A;
  top: 100%;
  right: 80%;
  transform: translateX(80%);
  min-width: 180px;
  z-index: 1;
  border-radius: 5px;
}

nav ul li .dropdown-content li {
  padding: 10px;
  text-align: left;
}

nav ul li .dropdown-content li a {
  color: #FFFFFF;
  padding: 0;
}

nav ul li .dropdown-content li a:hover {
  color: #848484;
}

nav ul li.dropdown:hover .dropdown-content {
  display: block;
}

.banner-container {
  padding-top: 145px;
    display: flex;
    justify-content: center;
    margin-top: -60px;
    background-color: #F9F9F9;
}

.banner-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.banner-container img:hover {
  transform: scale(1.05);
}

main {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.produtos-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px 20px;
}

.card {
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.card h2 {
  color: #AE2C2A;
  font-size: 1.6em;
  font-weight: bold;
  margin-bottom: 15px;
}

.card p {
  color: #6c757d;
  font-size: 1.1em;
  line-height: 1.8;
}

.btn-produtos {
  background-color: #AE2C2A;
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.btn-produtos:hover {
  background-color: #C53030;
  transform: translateY(-5px);
}

footer {
  background-color: #EBEBEB;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo img {
  height: 50px;
  transition: transform 0.3s ease-in-out;
}

.footer-logo img:hover {
  transform: scale(1.1);
}

.footer-mensagem p, .footer-desenvolvedor p {
  color: #333333;
  margin: 0;
  font-size: 0.9em;
}
  </style>
