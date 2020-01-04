var campoFiltro = document.querySelector("#filter-table")

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll('.paciente')
    if(this.value.length > 0) {
       for (let i = 0; i < pacientes.length; i++) {
           var paciente = pacientes[i];
           var tdNome = paciente.querySelector(".info-nome")
           var nome = tdNome.textContent
           var expressao = new RegExp(removerAcentos(this.value), "i")
           if(!expressao.test(removerAcentos(nome))){
               paciente.classList.add("invisivel")
           }
           else
           {
               paciente.classList.remove("invisivel")
           }
       } 
    } else {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel")
       }
    }
})