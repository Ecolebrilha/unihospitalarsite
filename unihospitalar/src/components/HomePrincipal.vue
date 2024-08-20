<!-- https://oncoexo.com.br -->
<!-- https://www.drogafonte.com.br -->
<!-- https://eurofarma.com.br -->
<!-- https://grupoelfa.com.br -->
<!-- Fazer as telas de Compliance e LGPD que tem na Oncoexo -->
<template>
    <div class="home">
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
            <div class="banner">
    <div class="banner-item">
        <div class="banner-content">
            <!-- <img class="img-left" src="@/assets/uni.png" alt="Logo da Uni"> -->
            <!-- <img class="img-right" src="@/assets/seloMaior.png" alt="Selo da Uni"> -->
            <h2>Respeito às relações humanas</h2>
            <p>O nosso foco está na distribuição <br> de medicamentos hospitalares, <br> oncológicos e excepcionais.</p>
            <button>CONHEÇA NOSSOS SERVIÇOS</button>
        </div>
    </div>
</div>

<section class="main-content">
    <div class="blocks">
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/estoque.jpg" alt="Bloco 1">
                <h3>ESTOQUE</h3>
            </div>
            <p>Nossa área de armazenamento segue rigorosamente as normas exigidas pela Anvisa. <a href="@/components/HomeDiferenciais.vue">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/diferenciais.jpg" alt="Bloco 2">
                <h3>DIFERENCIAIS</h3>
            </div>
            <p>Profissionais preparados e alinhados com a cultura da empresa, somado à linha de produtos e logística. <a href="HomeDiferenciais.vue">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/logistica.jpg" alt="Bloco 3">
                <h3>LOGÍSTICA</h3>
            </div>
            <p>Entregas para o Norte e Nordeste em até 48 horas com toda segurança e garantia. <a href="HomeDiferenciais.vue">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/principais-clientes.jpg" alt="Bloco 4">
                <h3>UNIDADE DE NEGÓCIOS</h3>
            </div>
            <p>Estamos abrindo uma nova unidade em Fortaleza, na busca pelo melhor atendimento e prestação de serviço. <a href="HomeDiferenciais.vue">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/principais-produtos.jpg" alt="Bloco 5">
                <h3>PRINCIPAIS CLIENTES</h3>
            </div>
            <p>Buscando melhor atender as demandas do mercado farmacêutico, atendemos a indústrias e hospitais, públicos e privados e clínicas particulares. <a href="HomeParceiros.vue">Saiba mais.</a></p>
        </div>
        <div class="block">
            <div class="image-wrapper">
                <img src="@/assets/unidade-de-negocios.jpg" alt="Bloco 6">
                <h3>PRINCIPAIS PRODUTOS</h3>
            </div>
            <p>Foco na distribuição e padronização de medicamentos hospitalares, oncológicos e excepcionais, trabalhando em nichos específicos. <a href="HomeProdutos.vue">Saiba mais.</a></p>       
        </div>                 
    </div>
</section>

            <section class="ultimas-noticias">
                <h2>Últimas Notícias</h2>
                <div class="news">
                    <div class="news-item">
                        <img src="@/assets/noticia1.jpg" alt="Notícia 1">
                        <p>Situações estressantes, sexo ou mesmo almoçar e esperar por alguém são momentos que podem liberar uma vontade imensa de fumar<br><a href="#">ver notícia</a></p>
                    </div>
                    <div class="news-item">
                        <img src="@/assets/noticia2.jpg" alt="Notícia 2">
                        <p>Garanta mais disposição e saúde com alertas de médicos e nutricionista<br><a href="#">ver notícia</a></p>
                    </div>
                    <div class="news-item">
                        <img src="@/assets/noticia3.jpg" alt="Notícia 3">
                        <p>O Cálcio é um mineral essencial para a construção e manutenção dos ossos e dos dentes e é muito importante que seja ingerido<br><a href="#">ver notícia</a></p>
                    </div>
                    <div class="news-item">
                        <img src="@/assets/noticia4.jpg" alt="Notícia 4">
                        <p>Você já ouviu falar nos alimentos funcionais? São alimentos ou ingredientes que produzem efeitos benéficos à saúde<br><a href="#">ver notícia</a></p>
                    </div>
                </div>
                <button class="news-button">ver todas as notícias</button>
            </section>

            <section class="parceiros">
        <h2>Nossos Parceiros</h2>
        <div class="parceiros-carousel">
            <div class="parceiros-track">
                <div class="parceiros-slide">
                        <img src="@/assets/parceiro1.jpg" alt="Parceiro 1">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro2.jpg" alt="Parceiro 2">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro3.jpg" alt="Parceiro 3">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro4.jpg" alt="Parceiro 4">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro5.jpg" alt="Parceiro 5">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro6.jpg" alt="Parceiro 6">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro7.jpg" alt="Parceiro 7">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro8.jpg" alt="Parceiro 8">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro9.jpg" alt="Parceiro 9">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro10.jpg" alt="Parceiro 10">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro11.jpg" alt="Parceiro 11">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro12.jpg" alt="Parceiro 12">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro13.jpg" alt="Parceiro 13">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro14.jpg" alt="Parceiro 14">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro15.jpg" alt="Parceiro 15">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro16.jpg" alt="Parceiro 16">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro17.jpg" alt="Parceiro 17">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro18.jpg" alt="Parceiro 18">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro19.jpg" alt="Parceiro 19">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro20.jpg" alt="Parceiro 20">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro21.jpg" alt="Parceiro 21">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro22.jpg" alt="Parceiro 22">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro23.jpg" alt="Parceiro 23">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro24.jpg" alt="Parceiro 24">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro25.jpg" alt="Parceiro 25">
                    </div>
                    <div class="parceiros-slide">
                        <img src="@/assets/parceiro26.jpg" alt="Parceiro 26">
                    </div>
                </div>
            </div>
        </section>
        <a href="HomeParceiros.vue"><button class="partners-button">ver todos os parceiros</button></a>
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
    name: "HomePrincipal",
    mounted() {
        const track = document.querySelector(".parceiros-track");
        const slides = Array.from(track.children);
        const totalSlides = slides.length;

        slides.forEach((slide) => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });

        track.style.width = `${totalSlides * 2 * 100}%`;
    },
};
</script>

<style scoped>

.home {
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
    padding: 29.5px 0;
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
    top: -50px;
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

.banner-content {
    width: 98%;
    background: linear-gradient(90deg, rgba(174, 44, 42, 0.8) 0%, rgba(220, 70, 60, 0.8) 100%);
    color: #FFFFFF;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
    transition: 0.3s ease-in-out, transform 0.3s ease-in-out;
    margin-top: -52px;
}

.banner-content:hover {
    background: linear-gradient(90deg, rgba(220, 70, 60, 0.8) 0%, rgba(174, 44, 42, 0.8) 100%);
    transform: scale(1.05);
}

.banner-content h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-content p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 800px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.banner-content button {
    background-color: #FF8888;
    border: none;
    padding: 15px 30px;
    font-size: 1.2em;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.banner-content button:hover {
    background-color: #FF5555;
}

.main-content {
    padding: 40px 80px;
}

.blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.block {
    width: 30%;
    margin-bottom: 20px;
    position: relative;
}

.image-wrapper {
    position: relative;
    width: 100%;
    height: auto;
}

.image-wrapper img {
    color: black;
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.image-wrapper h3 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #AE2C2A;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 2.0em;
    text-align: center;
    width: 80%;
    font-weight: bolder;
}

.block p {
    margin-top: 15px;
    font-size: 1em;
    text-align: justify;
}

.block a {
    color: black;
}

.block a:hover {
    color: red;
}

.ultimas-noticias {
    padding: 40px 100px;
    background-color: #EBEBEB;
}

.ultimas-noticias h2 {
    margin-bottom: 20px;
    color: #AE2C2A;
    font-weight: bold;
    font-size: 2.2em;
    text-align: center;
}

.news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.news-item {
    width: 40%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.news-item p {
    margin: 0;
    color: #333;
    text-align: justify;
}

.news-item a {
    color: red;
    font-weight: bold;
    margin-top: 60px; 
    display: inline-block; 
    padding-left: 40%;
}

.news-item a:hover {
    color: black;
}

.news-item img {
    width: 32%;
    margin-right: 20px;
    border-radius: 5px;
}

.news-button {
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin: 30px 0 10px 0;
    padding: 12px 24px; 
    font-size: 16px; 
    border: none; 
    border-radius: 50px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase; 
    font-weight: bold; 
    letter-spacing: 1px; 
}

.news-button:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); 
    transform: translateY(-3px); 
}

.news-button:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); 
}

.partners-button {
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin: 40px 0;
    padding: 12px 24px; 
    font-size: 16px; 
    border: none; 
    border-radius: 50px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase; 
    font-weight: bold; 
    letter-spacing: 1px; 
}

.partners-button:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2); 
    transform: translateY(-3px); 
}

.partners:active {
    transform: translateY(1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); 
}

.parceiros {
    padding: 20px 0;
    background-color: #FEFEFE;
}

.parceiros h2 {
    margin-bottom: 50px;
    color: #AE2C2A;
    text-align: center;
    font-size: 2.2em;
}

@keyframes slide {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

.parceiros-carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    animation: slide 400s linear infinite;
}

.parceiros-track {
    display: flex;
    width: calc(26 * 100%);
    animation: moveSlideshow 6000s linear infinite;
}

@keyframes moveSlideshow {
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
}

.parceiros-slide {
    min-width: calc(-1% / 26);
    box-sizing: border-box;
    padding: 0 15px;
}

.parceiros-slide img {
    width: 60%;
    height: auto;
}

footer {
    background-color: #EBEBEB;
    padding: 30px 0;
    margin: 0 0 -30px 0;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.footer-logo, .footer-mensagem, .footer-desenvolvedor {
    flex: 1;
}

.footer-logo img {
    text-align: left;
}

.footer-mensagem {
    text-align: center;
    color: rgb(97, 97, 97);
    font-weight: 700;
    white-space: nowrap;
}

.footer-desenvolvedor {
    text-align: right;
}

.footer-desenvolvedor a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.footer-desenvolvedor a:hover {
    color: #99997C;
}
</style>
