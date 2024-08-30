<template>
  <div class="termos-legais">
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
      <img src="@/assets/header-sobre.jpg" alt="Imagem do Banner">
    </div>

    <main>
      <section class="termos-content">
        <div class="termos-section">
          <h2>Termos de Uso</h2>
          <p>O nosso site foi desenvolvido para os clientes, colaboradores, parceiros e todos que se relacionam com a Uni Hospitalar, assim como para visitantes interessados em nossos serviços.</p>
          <p>Estes Termos de Uso podem ser alterados a qualquer momento pela Uni Hospitalar, sendo uma nova versão atualizada publicada em nosso site.</p>
        </div>

        <div class="termos-section">
          <h2>Acesso ao Site</h2>
          <p>O site da Uni Hospitalar funciona 24 horas por dia, podendo haver interrupções temporárias para manutenção, o que tornará o site indisponível pelo tempo necessário.</p>
          <p>O acesso ao site é permitido apenas para maiores de 18 anos ou menores de idade que possuam autorização de seus responsáveis legais. Ao acessar, navegar ou utilizar o site da Uni Hospitalar, todos os visitantes concordam com estes Termos de Uso. Caso discorde de qualquer parte deste documento, recomendamos que interrompa imediatamente a navegação.</p>
        </div>

        <div class="termos-section">
          <h2>Uso de Licença e Cópia</h2>
          <p>É concedida permissão para acessar todo o conteúdo do site da Uni Hospitalar, incluindo a realização de downloads e cópias dos materiais, mas apenas para uso pessoal e não comercial. Esta permissão não implica em cessão de direitos ou qualquer tipo de licença permanente. Esta licença será automaticamente revogada em caso de violação de suas condições, podendo ser rescindida unilateralmente pela Uni Hospitalar a qualquer momento.</p>
          <p>Os visitantes devem utilizar o site e as informações nele contidas de maneira adequada e lícita, em conformidade com a legislação aplicável e as boas práticas de mercado. O uso indevido do site ou de seus conteúdos pode violar os direitos de propriedade intelectual da Uni Hospitalar, sendo punível nos termos da legislação vigente.</p>
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
  name: 'TermosLegais',
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para a página de Termos Legais */
.termos-content {
  width: 70%;
  margin: auto;
  padding: 20px;
}

.termos-section {
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.termos-section h2 {
  font-size: 1.5em;
  font-weight: bold;
  color: #AE2C2A;
  margin-bottom: 15px;
}

.termos-section p {
  font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
  margin-bottom: 15px;
}
</style>