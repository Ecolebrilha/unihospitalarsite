<template>
    <form>
      <div class="form-row">
        <div class="form-group">
          <label for="name">Nome:</label>
          <input type="text" id="name" placeholder="Seu nome completo" required>
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" placeholder="Seu e-mail" required>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input type="text" id="telefone" placeholder="Seu telefone" required>
        </div>
        <div class="form-group">
          <label for="empresa">Empresa:</label>
          <input type="text" id="empresa" placeholder="Sua empresa" required>
        </div>
      </div>
      <div class="form-group">
        <label for="message">Mensagem:</label>
        <textarea id="message" rows="5" placeholder="Sua mensagem" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Enviar mensagem</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ContatoFormulario',
  };
  </script>
  
  <style scoped>
  .form-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .form-group {
    flex: 1;
    margin-right: 10px;
}

.form-group:last-child {
    margin-right: 0;
}

.form-group label {
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 1em;
}

#message {
    font-size: 1.1em;
    width: 101.5%;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #AE2C2A;
    box-shadow: 0 0 8px rgba(174, 44, 42, 0.2);
}

.lbl-box {
    font-size: 14px;
    color: #999;
    line-height: 25px;
    display: block;
    margin-bottom: 15px;
    cursor: default;
}

.submit-btn {
    background-color: #AE2C2A;
    color: #FFFFFF;
    margin: 40px 0;
    padding: 12px 24px; 
    font-size: 12px; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer; 
    transition: all 0.3s ease; 
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); 
    text-transform: uppercase; 
    font-weight: 700; 
    letter-spacing: 1px; 
}

.submit-btn:hover {
    background-color: #FF5555; 
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
}

.contact-form .form-row:nth-child(1) .form-group {
    flex: 1;
    min-width: 0;
}

.contact-form .form-row:nth-child(2) .form-group {
    flex: 1;
    min-width: 0;
}

  </style>
  
