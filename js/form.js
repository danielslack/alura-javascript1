var btnAdicionar = get("#adicionar-paciente");

btnAdicionar.addEventListener("click", e => {
  e.preventDefault();

  var form = get("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  var mensagensErro = get("#mensagem-erro");
  mensagensErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };

  return paciente;
}

function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("A altura não pode seer em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }

  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = get("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro) {
    var li = createEl("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function montaTr(paciente) {
  var pacienteTr = createEl("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = createEl("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = get("#tabela-paciente");
  tabela.appendChild(pacienteTr);
}
