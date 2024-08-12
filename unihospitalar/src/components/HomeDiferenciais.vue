<template>
  <div class="diferenciais">
      <header>
          <div class="contact-info">
              <span><i class="fas fa-phone"></i>+55 81 3472 7201</span>
              <span><i class="fas fa-envelope"></i>contato@unihospitalar.com.br</span>
          </div>
          <hr class="linha">
          <nav>
              <ul>
                  <li><a href="HomePrincipal.vue">Principal</a></li>
                  <li><a href="HomeSobre.vue">Uni Hospitalar</a></li>
                  <li><a href="HomeDiferenciais.vue">Diferenciais</a></li>
                  <li><a href="HomeNossosServicos.vue">Nossos Serviços</a></li>
                  <li><a href="HomeProdutos.vue">Linha de Produtos</a></li>
                  <li><a href="HomeParceiros.vue">Parceiros</a></li>
                  <li><a href="HomeContato.vue">Fale Conosco</a></li>
              </ul>
          </nav>
      </header>
  
      <main>
        <section class="about-content">
          <div class="about-left">
            <h2>ESTOQUE</h2>
            <p>A Uni Hospitalar possui área de armazenamento que segue rigorosamente todas as normas exigidas pela Anvisa. Ambiente totalmente climatizado, câmara fria compatível com o negócio e acima de tudo, a presença do profissional farmacêutico garantindo a guarda e o cumprimento das boas práticas de armazenamento e distribuição conforme rege a RDC 39. Somado a isso, todos os controles possíveis traduzidos em procedimentos operacionais padrões (POP´s) estão alinhados em todo fluxo dentro da área de armazenamento, reforçando a portaria 344/98 (medicamento de controle especial). Toda esta preocupação em seguir com rigor as exigências sanitárias vigentes, tem como objetivo garantir a continuação e garantia da qualidade na cadeia que segue o medicamento desde a sua concepção, garantindo assim a eficácia que o medicamento deve ter junto ao paciente.</p>
            
            <h2>LOGÍSTICA</h2>
            <p>Nossa logística funciona com entregas para o Norte e Nordeste em até 48 horas, com toda segurança e garantia. A Uni Hospitalar conta com uma equipe interna composta por profissionais preparados e qualificados para atender de forma inteligente. Buscando sempre a eficiência no que diz respeito à agilidade e minimizando o tempo de entrega até o seu destino final. Conta também com uma equipe na região metropolitana que garante a entrega no mesmo dia, proporcionando ao cliente maior comodidade ao adquirir nossos produtos.</p>
            
          </div>
  
          <div class="about-right">
            <h2>UNIDADE DE NEGÓCIOS</h2>
            <p>Buscando uma melhor prestação de serviço, buscando sempre atender e surpreender expectativas da Indústria Farmacêutica e dos nossos clientes finais, estamos abrindo uma nova empresa em Fortaleza.</p>
            
            <h2>DIFERENCIAIS</h2>
            <p>Estoque – Garantia de fornecimento. Sempre evitar rupturas no fornecimento;
            Cultura voltada para o negócio;
            Logística – Garantia de entrega nos locais que trabalhamos;
            Equipe – Profissionais preparados e alinhados com a cultura da empresa.</p>
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
                    <p>Desenvolvido por <a href="github.com/Ecolebrilha">Fernando Leite</a>ツ</p>
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
    background-color: #333;
    color: white;
    padding: 20px 0;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }
  
  .footer-logo img {
    width: 100px;
  }
  
  .footer-message {
    text-align: center;
  }
  
  .footer-developer a {
    color: white;
    text-decoration: none;
  }
  </style>