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
  justify-content: space-between;
  align-items: center;
  background-color: #AE2C2A;
  padding: 20px 40px;
  box-sizing: border-box;
  font-size: 1.2em;
  position: relative;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 10px;
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact-info span {
  margin-right: 20px;
  color: #FF8888;
}

.contact-info a {
  color: #FF8888;
  text-decoration: none;
}

nav ul {
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li a {
  text-decoration: none;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 0.8em;
  transition: color 0.3s ease-in-out;
}

nav ul li a:hover {
  color: #FF8888;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #AE2C2A;
  min-width: 180px;
  border-radius: 5px;
  top: 100%;
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
}

.dropdown:hover .dropdown-content {
  display: block;
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
