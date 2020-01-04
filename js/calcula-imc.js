var titulo = get(".titulo");
titulo.textContent = "Daniel Nutricionista";

var pacientes = getAll(".paciente");

pacientes.forEach(paciente => {
  var tdPeso = get(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = get(".info-altura");
  var altura = tdAltura.textContent;
  var tdImc = get(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
    console.log("Altura inválida");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    tdImc.textContent = calculaImc(peso, altura);
  }
});

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);

  return imc.toFixed(2);
}

function validaPeso(peso) {
  return peso >= 0 && peso <= 1000;
}

function validaAltura(altura) {
  return altura >= 0 && altura <= 3.0;
}
