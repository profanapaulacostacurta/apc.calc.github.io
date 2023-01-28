(() => {
 'use strict'
 // Buscar todos os form deverá aplicar estilos personalizados de validação de Bootstrap
 const forms = document.querySelectorAll('.needs-validation')
 //retorna uma NodeList estática representando os elementos classe .needs-validation
 Array.from(forms).forEach(form => { // Passe por cima deles e impeça a submissão
  form.addEventListener('submit', event => { 
   // adicionar um EventListener chamado sempre que o evento submit for acionado
   if (!form.checkValidity()) { //ao enviar o formulário, form.checkValidity() será chamado
    event.preventDefault() //impedirá que o evento padrão seja considerado normalmente
    event.stopPropagation() // impede a propagação adicional do evento atual.
   }
   form.classList.add('was-validated') // inclui no formulário que foi realizada a validação
  }, false)
 })
})()
