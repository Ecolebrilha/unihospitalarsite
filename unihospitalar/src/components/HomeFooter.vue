<template>
  <footer>
<div class="footer-logo">
  <img src="@/assets/footerSelo.png" alt="Imagem Selo do footer">
</div>
<div class="footer-mensagem">
  <p>© 2024 | Uni Hospitalar Ltda. – Todos os direitos reservados</p>
</div>
<div class="footer-desenvolvedor">
  <p>Desenvolvido por <a href="/">Uni Hospitalar ®️</a></p>
</div>
</footer>
</template>

<script>
export default {
name: 'HomeFooter',
};
</script>

<style>
footer {
background-color: #EBEBEB;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 20px; 
}

.footer-logo {
flex: 1;
}

.footer-logo img {
  height: 50px;
  transition: transform 0.3s ease-in-out;
}
.footer-logo img:hover {
  transform: scale(1.1);
}

.footer-mensagem {
flex: 2;
text-align: center;
color: rgb(97, 97, 97);
font-weight: 700;
}

.footer-desenvolvedor {
  flex: 1;
  color: rgba(97, 97, 97, 0.925);
  font-weight: 700;
  font-size: 0.9em;
}

.footer-desenvolvedor a {
  color: #AE2C2A;
  font-weight: 900;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}
.footer-desenvolvedor a:hover {
  color: #FF5555;
  text-decoration: underline;
}

@media (max-width: 1055px) {
footer {
  flex-direction: column;
  text-align: center;
}

.footer-desenvolvedor {
  text-align: center;
  }
}
</style>