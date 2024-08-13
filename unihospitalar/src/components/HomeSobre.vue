<template>
  <div class="about">
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
        <section class="about-content">
          <div class="about-left">
            <h2>QUEM SOMOS</h2>
            <p>Há 10 anos no mercado, a Uni Hospitalar vem conquistando espaço no mercado de distribuição de medicamentos de forma sólida e acima de tudo consolidada pela forma com que enxerga e interpreta o mercado farmacêutico.</p>
            
            <h2>MISSÃO</h2>
            <p>Ser uma empresa sólida, confiável na distribuição de medicamentos, buscando sempre surpreender todos os clientes na busca pela melhor prestação de serviços.</p>
            
            <h2>VISÃO</h2>
            <p>Transparência e respeito com as relações humanas.</p>
          </div>
  
          <div class="about-right">
            <img src="" alt="Imagem da Empresa">
            <h2>VALORES</h2>
            <p> Respeito às relações humanas
                Relacionamento
                Integridade
                Compromisso
                Agilidade
                Ética
                Orientação para o mercado
                Objetividade
                Simplicidade</p>
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
                    <p>Desenvolvido por <a href="github.com/Ecolebrilha">Fernando Leite</a></p>
                </div>
            </div>
        </footer>
    </div>
</template>
  
  <script>
  export default {
    name: 'HomeSobre',
  };
  </script>
  
  <style scoped>
  .about {
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
  }
  
  .about-content {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
  
  .about-left {
    width: 45%;
    text-align: left;
  }
  
  .about-left h2 {
    margin-bottom: 10px;
  }
  
  .about-left p {
    margin-bottom: 20px;
  }
  
  .about-right {
    width: 45%;
    text-align: left;
  }
  
  .about-right img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  
  .about-right h2 {
    margin-bottom: 10px;
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
}

.footer-desenvolvedor a {
    color: black;
    text-decoration: none;
}

.footer-desenvolvedor a:hover {
    text-decoration: underline;
}
  </style>