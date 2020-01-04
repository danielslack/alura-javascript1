var btnAdd = get("#buscar-paciente");

btnAdd.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
 

  xhr.addEventListener("load", function() {
    var erroAjax = get("#erro-ajax");
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(paciente => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      arroAjax.classList.remove("invisivel");
    }
  });

  xhr.send()
});
