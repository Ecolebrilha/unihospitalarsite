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
        <section class="diferenciais-content">
          <div class="diferenciais-left">
            <h2>ESTOQUE</h2>
            <p>A Uni Hospitalar possui área de armazenamento que segue rigorosamente todas as normas exigidas pela Anvisa. Ambiente totalmente climatizado, câmara fria compatível com o negócio e acima de tudo, a presença do profissional farmacêutico garantindo a guarda e o cumprimento das boas práticas de armazenamento e distribuição conforme rege a RDC 39.</p>
            
            <h2>LOGÍSTICA</h2>
            <p>Nossa logística funciona com entregas para o Norte e Nordeste em até 48 horas, com toda segurança e garantia. A Uni Hospitalar conta com uma equipe interna composta por profissionais preparados e qualificados para atender de forma inteligente, buscando sempre a eficiência no que diz respeito à agilidade e minimizando o tempo de entrega até o seu destino final.</p>
          </div>
  
          <div class="diferenciais-right">
            <h2>UNIDADE DE NEGÓCIOS</h2>
            <p>Buscando uma melhor prestação de serviço, sempre atendendo e surpreendendo as expectativas da Indústria Farmacêutica e dos nossos clientes finais, estamos abrindo uma nova empresa em Fortaleza.</p>
            
            <h2>DIFERENCIAIS</h2>
            <p>Estoque – Garantia de fornecimento. Sempre evitar rupturas no fornecimento; Cultura voltada para o negócio; Logística – Garantia de entrega nos locais que trabalhamos; Equipe – Profissionais preparados e alinhados com a cultura da empresa.</p>
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

.diferenciais-content {
  display: flex;
  justify-content: space-between;
  width: 85%;
  gap: 30px;
}

.diferenciais-left,
.diferenciais-right {
  width: 48%;
  text-align: left;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.diferenciais-left h2,
.diferenciais-right h2 {
  font-size: 1.5em;
  color: #AE2C2A;
  margin-bottom: 15px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.diferenciais-left p,
.diferenciais-right p {
  font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
  margin-bottom: 20px;
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