<template>
  <div class="products">
    <header>
      <a href="/">
        <div class="logo-container">
          <img src="@/assets/uni.png" alt="Logo da Uni Hospitalar" class="logo">
          <span class="trademark-symbol">®</span>
        </div>
      </a>
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
      <div class="language-selector">
        <select @change="changeLanguage($event)">
          <option value="pt">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <hr class="linha">
      <nav>
        <ul>
          <li><router-link to="/" exact-active-class="active">Início</router-link></li>
          <li><router-link to="/Sobre" exact-active-class="active">Sobre</router-link></li>
          <li><router-link to="/Diferenciais" exact-active-class="active">Diferenciais</router-link></li>
          <li><router-link to="/Serviços" exact-active-class="active">Serviços</router-link></li>
          <li><router-link to="/Produtos" exact-active-class="active">Produtos</router-link></li>
          <li><router-link to="/Compliance" exact-active-class="active">Compliance</router-link></li>
          <li class="dropdown">
            <router-link to="/LGPD" exact-active-class="active">
              LGPD <i class="fas fa-chevron-down"></i>
            </router-link>
            <ul class="dropdown-content">
              <li><router-link to="/PoliticaPrivacidade" exact-active-class="active">Política de Privacidade</router-link></li>
              <li><router-link to="/TermosLegais" exact-active-class="active">Termos Legais de Uso do Site</router-link></li>
            </ul>
          </li>
          <li><router-link to="/Contato" exact-active-class="active">Contato</router-link></li>
        </ul>
      </nav>
    </header>

    <div class="banner-container">
      <img src="@/assets/header-produtos.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="produtos-content">
        <div class="card">
          <i class="fas fa-box-open card-icon"></i>
          <h2>LINHA DE PRODUTOS</h2>
          <p>A Uni Hospitalar trabalha com uma extensa linha de produtos, procurando sempre ser complementar e oferecendo desta forma soluções no tratamento das mais diversas patologias.</p>
        </div>
        <div class="card">
          <i class="fas fa-pills card-icon"></i>
          <h2>MEDICAMENTOS DIVERSOS</h2>
          <p>São medicamentos utilizados para doenças crônico degenerativas que requerem especialidade para seu correto armazenamento.</p>
        </div>
        <div class="card">
          <i class="fas fa-capsules card-icon"></i>
          <h2>MEDICAMENTOS PARA ONCOLOGIA</h2>
          <p>São medicamentos quimioterápicos utilizados para o tratamento do câncer.</p>
        </div>
        <div class="card">
          <i class="fas fa-hospital-alt card-icon"></i>
          <h2>MEDICAMENTOS HOSPITALARES</h2>
          <p>São medicamentos utilizados em ambiente hospitalar necessários aos procedimentos médico-cirúrgicos.</p>
        </div>
      </section>
    </main>

    <a href="https://www.unihospitalar.com.br/site/uni-hospitalar-produtos.pdf">
      <button class="btn-produtos">
        <i class="fas fa-download"></i> CLIQUE AQUI PARA BAIXAR NOSSA LINHA DE PRODUTOS
      </button>
    </a>

    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/footerSelo.png" alt="Imagem Selo do footer">
        </div>
        <div class="footer-mensagem">
          <p>© 2024 | Uni Hospitalar Ltda. – Todos os direitos reservados</p>
        </div>
        <div class="footer-desenvolvedor">
          <p>Desenvolvido por <a href="https://github.com/Ecolebrilha">Fernando Leite</a> ツ</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
}
</script>

<style scoped>
.products {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  text-align: center;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #AE2C2A;
  padding: 20px;
  box-sizing: border-box;
  font-size: 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  background-color: #E5E5E5;
  padding: 10px 20px;
  border-radius: 5px;
}

.logo {
  height: 80px;
}

.trademark-symbol {
  font-size: 1.2em;
  font-weight: bold;
  color: #000;
}

.contact-info {
  display: flex;
  justify-content: center;
  margin: 10px 0;
  padding: 0 20px;
}

.contact-info span,
.contact-info a {
  display: flex;
  align-items: center;
  color: #FF8888;
  margin: 0 15px;
  font-size: 1em;
}

.contact-info i {
  margin-right: 8px;
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
  background-color: #fff;
  cursor: pointer;
}

.linha {
  width: 80%;
  color: #FF8888;
  border: 0;
  border-top: 2px solid #FF8888;
  margin: 20px auto;
}

nav {
  margin: 0 auto;
  width: 100%;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0;
}

nav ul li {
  margin: 0 15px;
  position: relative;
}

nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 0.9em;
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

nav ul li.dropdown {
  position: relative;
}

nav ul li .dropdown-content {
  display: none;
  position: absolute;
  background-color: #AE2C2A;
  top: 100%;
  left: 0;
  min-width: 180px;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

nav ul li .dropdown-content li {
  padding: 10px;
}

nav ul li .dropdown-content li a {
  color: #FFFFFF;
}

nav ul li .dropdown-content li a:hover {
  color: #FF8888;
}

nav ul li.dropdown:hover .dropdown-content {
  display: block;
}

.banner-container {
  padding-top: 100px;
  display: flex;
  justify-content: center;
  background-color: #F9F9F9;
  margin-bottom: 20px;
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
  padding: 20px;
}

.produtos-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  text-align: center;
}

.card-icon {
  font-size: 2.5em;
  color: #AE2C2A;
  margin-bottom: 10px;
}

.card h2 {
  color: #333;
  margin: 10px 0;
}

.card p {
  color: #555;
}

.btn-produtos {
  background-color: #AE2C2A;
  color: #FFFFFF;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 50px;
  margin-bottom: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.btn-produtos:hover {
  background-color: #C53030;
  transform: translateY(-5px);
}

.btn-produtos i {
    margin-right: 8px; /* Espaço entre o ícone e o texto */
}

footer {
  background-color: #AE2C2A;
  color: #FFF;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-logo img {
  width: 80px;
  margin-bottom: 10px;
}

.footer-mensagem p {
  margin: 10px 0;
}

.footer-desenvolvedor p {
  margin: 0;
}

.footer-desenvolvedor a {
  color: #FF8888;
  text-decoration: none;
}

.footer-desenvolvedor a:hover {
  text-decoration: underline;
}
</style>
