<template>
  <div class="privacity">
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
      <img src="@/assets/header-diferenciais.jpg" alt="Imagem do Banner">
    </div>

    <main>

      <section v-for="(section, index) in sections" :key="index" class="privacidade-section" :style="{ backgroundColor: section.backgroundColor }">
        <div class="icon" v-html="section.icon"></div>
        <div class="text-content">
          <h2>{{ section.title }}</h2>
          <p>{{ section.text }}</p>
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
  name: 'PoliticaPrivacidade',
  data() {
    return {
      sections: [
          {
          title: "Sobre a Política de Privacidade",
          icon: "🔍",
          text: "Bem-vindo à Política de Privacidade da Uni Hospitalar. Nós levamos sua privacidade a sério e estamos comprometidos em proteger suas informações pessoais. Coletamos informações pessoais como nome, e-mail, telefone e empresa quando você interage com nossos serviços, sempre com seu consentimento. As informações coletadas são utilizadas para melhorar nossos serviços, personalizar sua experiência e garantir a segurança das transações.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Segurança e Direitos dos Usuários",
          icon: "🛡️",
          text: "Implementamos medidas de segurança avançadas para proteger suas informações contra acesso não autorizado e outras ameaças. Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou para proteger nossos direitos legais. Você tem o direito de acessar, corrigir e excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Objetivo da Política de Privacidade",
          icon: "🎯",
          text: "A Uni Hospitalar valoriza a ética e a integridade em todas as suas ações. Esta Política de Privacidade tem como objetivo informar os titulares de dados pessoais sobre como suas informações são tratadas, assegurando uma relação transparente e segura.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Nosso Compromisso",
          icon: "🤝",
          text: "A Uni Hospitalar se compromete a oferecer um atendimento de qualidade a todos que acessam nossas plataformas digitais. Baseados no princípio da segurança, protegemos a privacidade e os dados pessoais, apresentando esta Política com clareza sobre o tratamento dos dados de nossos colaboradores, clientes e visitantes.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Proteção dos Dados Pessoais",
          icon: "🔐",
          text: "A Uni Hospitalar adota as melhores práticas de segurança para garantir a integridade e confidencialidade dos dados tratados. Utilizamos mecanismos robustos para proteger contra uso indevido, acessos não autorizados, danos, fraudes e outras ameaças.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
        {
          title: "Tratamento de Dados",
          icon: "📄",
          text: "A Uni Hospitalar trata os dados pessoais de maneira responsável e ética. Coletamos dados para executar atividades relacionadas aos nossos serviços, incluindo identificação, contato, informações financeiras, dados de navegação, saúde, biometria, entre outros. Todos os dados são utilizados para fins legítimos e de acordo com as legislações vigentes.",
          backgroundColor: "rgba(245, 245, 245, 0.5);",
        },
      ],
    };
  },
  methods: {
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    }
  }
}
</script>

<style scoped>
/* Estilos anteriores mantidos para consistência */

.privacidade-content {
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 30px;
  margin-bottom: 4%;
}

.privacidade-left,
.privacidade-right {
  width: 40%;
  text-align: left;
  background-color: #ffffff;
  padding: 25px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.privacidade-left h2,
.privacidade-right h2 {
  text-align: center;
  font-size: 1.5em;
  font-weight: 800;
  color: #AE2C2A;
  margin-bottom: 15px;
  border-bottom: 2px solid #FF8888;
  padding-bottom: 5px;
}

.privacidade-left p,
.privacidade-right p {
  text-align: justify;
  font-size: 1em;
  line-height: 1.6em;
  color: #6c757d;
  margin-bottom: 20px;
}

/* Estilo para as novas seções */
.privacidade-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 20px auto;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease;
}

.icon {
  font-size: 2.5em;
  margin-right: 20px;
}

.text-content h2 {
  font-size: 1.8em;
  color: #333;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 1.1em;
  line-height: 1.6em;
  color: #555;
}

/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .privacidade-content {
    flex-direction: column;
    width: 90%;
  }

  .privacidade-left,
  .privacidade-right {
    width: 100%;
    margin-bottom: 30px;
  }

  .privacidade-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .icon {
    font-size: 2em;
    margin-bottom: 10px;
  }

  .text-content h2 {
    font-size: 1.5em;
  }

  .text-content p {
    font-size: 1em;
  }
}
</style>
