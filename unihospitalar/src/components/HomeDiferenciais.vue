<template>
  <div class="diferenciais">
    <HomeHeader />

    <div class="banner-container">
      <div class="banner-overlay">
        <h1>Nosso Diferencial</h1>
      </div>
      <img src="@/assets/header-diferenciais.jpg" alt="Imagem do Banner">
    </div>

<main>
    <section class="features">
      <div class="container">
        <div class="feature">
          <i class="fas fa-warehouse feature-icon"></i>
          <div class="feature-info">
            <h2>Gestão de Estoque Inovadora</h2>
            <p>Nossa gestão de estoque é projetada para garantir a máxima eficiência e controle rigoroso das condições de armazenamento. Com tecnologia de ponta, oferecemos rastreamento em tempo real e automação para evitar desperdícios e melhorar a eficiência operacional.</p>
            <ul>
              <li><strong>Tecnologia Avançada:</strong> Soluções de rastreamento e monitoramento em tempo real.</li>
              <li><strong>Automação:</strong> Redução de erros humanos e aumento da eficiência.</li>
            </ul>
          </div>
        </div>

        <div class="feature">
          <i class="fas fa-truck feature-icon"></i>
          <div class="feature-info">
            <h2>Logística Ágil e Eficiente</h2>
            <p>A logística é um dos nossos pilares. Nossa estratégia é baseada em soluções que garantem entregas rápidas e precisas, com uma rede bem estruturada que atende às suas necessidades com agilidade.</p>
            <ul>
              <li><strong>Rede Ampliada:</strong> Cobertura nacional com serviços de entrega rápida.</li>
              <li><strong>Otimização de Rota:</strong> Redução de tempo de entrega e custos operacionais.</li>
            </ul>
          </div>
        </div>

        <div class="feature">
          <i class="fas fa-building feature-icon"></i>
          <div class="feature-info">
            <h2>Expansão Estratégica</h2>
            <p>Estamos em constante expansão para atender melhor às suas necessidades. Nossas unidades de negócios estão localizadas estrategicamente para oferecer um atendimento mais próximo e eficaz.</p>
            <ul>
              <li><strong>Novas Localizações:</strong> Expansão para áreas com alta demanda.</li>
              <li><strong>Equipe Localizada:</strong> Atendimento personalizado e suporte eficiente.</li>
            </ul>
          </div>
        </div>

        <div class="feature">
          <i class="fas fa-star feature-icon"></i>
          <div class="feature-info">
            <h2>Compromisso com a Qualidade</h2>
            <p>Nosso compromisso com a qualidade vai além dos padrões exigidos. Investimos continuamente em nossa equipe e processos para garantir um serviço superior e satisfatório.</p>
            <ul>
              <li><strong>Treinamento Contínuo:</strong> Equipe qualificada e atualizada com as melhores práticas.</li>
              <li><strong>Controle de Qualidade:</strong> Monitoramento rigoroso para garantir a excelência.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="testimonial">
          <p>"A Uni Hospitalar se destacou pela qualidade e eficiência. Seus serviços superaram nossas expectativas em todos os aspectos."</p>
          <span>— Ana Costa, Gerente de Compras</span>
        </div>

        <div class="testimonial">
          <p>"A logística é impecável. Recebemos nossos produtos sempre no prazo e em perfeito estado."</p>
          <span>— Carlos Oliveira, Diretor de Operações</span>
        </div>
      </div>
    </section>
    </main>

    <HomeFooter />
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';

export default {
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      selectedLanguage: 'pt',
      sidebarOpen: false
    }
  },
  methods: {
    changeLanguage(event) {
      const value = typeof event === 'string' ? event : event.target.value;
      this.selectedLanguage = value;

      console.log(`Idioma selecionado: ${value}`);
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
}
</script>

<style scoped>
@media (max-width: 576px) {
    .content h1 {
    font-size: 1em;
  }

  .banner-overlay h1 {
    font-size: 1em;
  }
}

.banner-container {
  position: relative;
  padding-top: 107px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  background-color: #F9F9F9;
}

.banner-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.banner-overlay .content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner-overlay h1, .banner-overlay p {
  margin: 0;
}

.banner-overlay h1 {
  color: #FFFFFF;
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: slideInRight 1.5s ease-out;
  margin-bottom: 20px;
}

@keyframes slideInRight {
  from {
    transform: translateX(80%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.features {
  background-color: #fff;
  padding: 100px 20px 40px 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.feature {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  flex: 1 1 calc(50% - 20px);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.feature-icon {
  font-size: 2.5em;
  color: #AE2C2A;
  margin-bottom: 15px;
}

.feature-info h2 {
  font-size: 1.5em;
  margin: 0 0 30px 0;
  color: #AE2C2A;
  position: relative;
  display: inline-block;
}

.feature-info h2::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background-color: #e74c3c; 
    margin: 4px auto 0;
}

.feature-info p {
  font-size: 1em;
  color: #34495e;
  margin: 10px 0;
}

.feature-info ul {
  list-style: none;
  padding: 0;
}

.feature-info ul li {
  margin: 5px 0;
  color: #34495e;
}

.testimonials {
  background-color: #fff;
  padding: 50px 20px;
  margin-bottom: 100px;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.testimonial {
  background: linear-gradient(145deg, #e6e9ef, #ffffff);
  border-left: 4px solid #AE2C2A;
  color: #34495e;
  padding: 15px;
  margin: 20px;
  border-radius: 5px;
  flex: 1 1 calc(33.333% - 40px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  text-align: left;
}

.testimonial p {
  font-style: italic;
  margin: 0;
}

.testimonial span {
  display: block;
  margin-top: 5px;
  font-weight: bold;
  color: #AE2C2A;
}

@media (max-width: 768px) {
  .testimonial {
    flex: 1 1 calc(50% - 40px);
  }
}

@media (max-width: 480px) {
  .banner-overlay h1 {
    font-size: 1em;
  }

  .testimonial {
    flex: 1 1 100%;
  }

  @keyframes slideInRight {
  from {
    transform: translateX(5%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .feature {
    flex: 1 1 100%;
  }
}

@media (max-width: 768px) {
  .banner-container {
    top: 82px;
    padding-top: 0px;
  }

  .banner-overlay h1 {
    font-size: 1em;
    padding: 5px;
  }

  .features {
    margin-top: 100px;
  }

  footer {
    flex-direction: column;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 10px;
  }

  @keyframes slideInRight {
  from {
    transform: translateX(16%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (max-width: 992px) {
  .banner-overlay h1 {
    font-size: 3em;
  }

}

@media (max-width: 768px) {
  .banner-overlay h1 {
    font-size: 2em;
  }
}

@media (max-width: 400px) {
  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

@media (min-width: 769px) {
  @keyframes slideInRight {
  from {
    transform: translateX(25%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 993px) {
  @keyframes slideInRight {
  from {
    transform: translateX(23%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 1390px) {
  @keyframes slideInRight {
  from {
    transform: translateX(52%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 300px) {
  @keyframes slideInRight {
  from {
    transform: translateX(6%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (min-width: 400px) {
  @keyframes slideInRight {
  from {
    transform: translateX(25%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
}

@media (max-width: 576px) {
    .content h1 {
    font-size: 1em;
  }

  .banner-overlay h1 {
    font-size: 1.5em;
  }
}

</style>
