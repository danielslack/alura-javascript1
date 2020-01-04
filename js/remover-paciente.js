var pacientes = getAll('.paciente')

var tabela = get('#tabela-paciente')

tabela.addEventListener("dblclick", e => {
    e.target.parentNode.classList.add('fade-out')

    setTimeout(function(){
      e.target.parentNode.remove()  
    }, 4999)
})