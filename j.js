document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    alert("Obrigado por entrar em contato! Responderemos em breve.");
    this.reset(); // Limpa o formulário
  });
  