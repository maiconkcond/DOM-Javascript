var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

/* Pega todos os elementos que tem a classe paciente e armazena em um array*/
paciente = document.querySelectorAll(".paciente");

/* Percorre os itens do array (as div paciente)*/
for (var i = 0; i < paciente.length; i++) {

	/* Pega a altura e armazena */
	tdAltura = paciente[i].querySelector(".info-altura");
	altura = tdAltura.textContent;

	/* Pega a peso e armazena */
	tdPeso = paciente[i].querySelector(".info-peso");
	peso = tdPeso.textContent;

	/* Pega a IMC e armazena */
	tdIMC = paciente[i].querySelector(".info-imc");

	/* Variaveis de tratamento */
	var pesoEhValido = validaPeso(peso);
	var alturaEhValida = validaAltura(altura);

	/* Peso é válido? */
	if (!pesoEhValido) {
		tdIMC.textContent = "Peso inválido!";
		pesoEhValido = false;
		paciente[i].classList.add("paciente-invalido");
	}

	/* Altura é válida ? */
	if (!alturaEhValida) {
		tdIMC.textContent = "Altura inválida!"
		alturaEhValida = false
		paciente[i].classList.add("paciente-invalido");
	}

	/* Calcula IMC e apresenta na tela */
	if (pesoEhValido && alturaEhValida) {
		tdIMC.textContent = calculaImc(peso, altura);
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if (peso >= 0 && peso <= 1000){
		return true;
	} else{
		return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura <= 3.00){
		return true;
	} else {
		return false;
	}
}
